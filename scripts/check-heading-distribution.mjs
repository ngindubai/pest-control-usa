#!/usr/bin/env node
// Heading-distribution guard (SEO build plan Step 3.2 acceptance).
//
// The Optimizer rule caps any H2 at 30% of a template variant's pages. The
// rotated headings in src/components/templates/headings.ts are chosen by the
// same slug-hash logic used at render time; this script replays that logic
// over every city record and confirms no heading variant exceeds the ceiling
// within its template bucket. Run after any heading change. Exits non-zero if
// any variant is over the threshold.

import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const citiesDir = path.join(__dirname, "..", "src", "data", "cities");

const THRESHOLD = 0.30;

// Must mirror headings.ts: same hash, same salt format, same variant counts.
function hash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

// template -> heading keys. Variant count is 4 for every key (see headings.ts).
const TEMPLATE_KEYS = {
  A: ["A.pests", "A.prevention", "A.cost", "A.faq", "A.services", "A.nearby"],
  B: ["B.pests", "B.prevention", "B.faq"],
  C: ["C.pests", "C.prevention", "C.faq"],
  D: ["D.whichPests", "D.moreInfo", "D.prevention", "D.cost", "D.next"],
  E: ["E.pestTable", "E.prevention", "E.cost", "E.faq"],
};
const VARIANT_COUNT = 4;

function extractCities() {
  const files = readdirSync(citiesDir).filter((f) => f.endsWith(".ts") && f !== "index.ts");
  const cities = [];
  for (const file of files) {
    const src = readFileSync(path.join(citiesDir, file), "utf8");
    // Pair each record's slug with its contentTemplate. Both appear once per
    // record; scan in order and emit a pair when contentTemplate closes a record.
    const re = /slug:\s*"([^"]+)"|contentTemplate:\s*"([A-E])"/g;
    let pendingSlug = null;
    let m;
    while ((m = re.exec(src))) {
      if (m[1] !== undefined) pendingSlug = m[1];
      else if (m[2] !== undefined && pendingSlug) {
        cities.push({ slug: pendingSlug, template: m[2] });
        pendingSlug = null;
      }
    }
  }
  return cities;
}

function main() {
  const cities = extractCities();

  // bucketTotals[template] = number of pages in that template
  // counts[key][variantIndex] = number of pages showing that variant
  const bucketTotals = {};
  const counts = {};
  for (const t of Object.keys(TEMPLATE_KEYS)) {
    bucketTotals[t] = 0;
    for (const key of TEMPLATE_KEYS[t]) counts[key] = new Array(VARIANT_COUNT).fill(0);
  }

  for (const c of cities) {
    const keys = TEMPLATE_KEYS[c.template];
    if (!keys) continue;
    bucketTotals[c.template]++;
    for (const key of keys) {
      const idx = hash(c.slug + "::" + key) % VARIANT_COUNT;
      counts[key][idx]++;
    }
  }

  console.log(`Checked ${cities.length} city records.`);
  for (const t of Object.keys(TEMPLATE_KEYS)) {
    console.log(`  Template ${t}: ${bucketTotals[t]} pages`);
  }

  const violations = [];
  for (const t of Object.keys(TEMPLATE_KEYS)) {
    const total = bucketTotals[t];
    if (total === 0) continue;
    for (const key of TEMPLATE_KEYS[t]) {
      const maxCount = Math.max(...counts[key]);
      const share = maxCount / total;
      if (share > THRESHOLD) {
        violations.push(
          `${key}: top variant on ${(share * 100).toFixed(1)}% of Template ${t}'s ${total} pages (over ${THRESHOLD * 100}%)`
        );
      }
    }
  }

  if (violations.length > 0) {
    console.error("\nHeading distribution violations:");
    for (const v of violations) console.error(`  - ${v}`);
    console.error("\nHeading distribution guard failed.");
    process.exit(1);
  }

  // Report the worst share seen, for visibility.
  let worst = 0;
  let worstKey = "";
  for (const t of Object.keys(TEMPLATE_KEYS)) {
    const total = bucketTotals[t] || 1;
    for (const key of TEMPLATE_KEYS[t]) {
      const share = Math.max(...counts[key]) / total;
      if (share > worst) {
        worst = share;
        worstKey = key;
      }
    }
  }
  console.log(`Heading distribution guard passed. Worst variant share: ${(worst * 100).toFixed(1)}% (${worstKey}), under the ${THRESHOLD * 100}% ceiling.`);
}

main();

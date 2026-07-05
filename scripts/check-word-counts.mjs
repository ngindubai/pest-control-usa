#!/usr/bin/env node
// Word-count floor guard (SEO build plan Step 2.9, N3 append-corruption guard).
//
// CLAUDE.md sets unique-body word floors: T1 >= 800, T2 >= 500, T3 >= 350.
// Nothing enforced this in code, so a thin record could ship silently. This
// script reads each city data file as text, extracts every city record as a
// plain object literal (no TypeScript module resolution needed, since the
// only "@/" import in this module tree is type-only and irrelevant here),
// and checks the body word count (intro + all sections[].body) against the
// record's tier floor. It also re-checks for the append corruption fixed in
// Block 0: a mid-array "] = [", a lone-comma sparse-array hole, a stray
// "answer" field inside a sections entry, and a numeric "population" field.
//
// Runs as a prebuild step. Exits non-zero (fails the build) on any violation.
//
// Two modes (added 2026-07-05 for the autonomous build routine, see
// docs/seo-upgrade-log.md item 4.1):
//
//   node scripts/check-word-counts.mjs
//     Whole-corpus report/gate, unchanged from the original behavior. Currently
//     exits non-zero because of the pre-existing remediation backlog (T1/T2/T3
//     records built before this guard existed). This is a separate, ongoing
//     project (SEO-BUILD-PLAN-2026-07-02.md Block 4) and this mode is NOT what
//     the daily build routine should gate a fresh batch on.
//
//   node scripts/check-word-counts.mjs --changed
//     Scoped to only the records this batch actually added or modified
//     (uncommitted changes vs HEAD in src/data/cities/*.ts). This is the mode
//     the build routine runs before every commit: every new page must clear
//     its own tier floor, regardless of what the rest of the corpus is doing.

import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const citiesDir = path.join(repoRoot, "src", "data", "cities");

const TIER_FLOOR = { T1: 800, T2: 500, T3: 350 };

// Returns BASENAMES (e.g. "wyoming.ts"), matching readdirSync's output, so
// every downstream path.join(citiesDir, file) call works identically whether
// the file list came from readdirSync (whole-corpus mode) or here (--changed
// mode). Do not return repo-relative paths from this function.
function getChangedCityFiles() {
  const run = (cmd) => {
    try {
      return execSync(cmd, { cwd: repoRoot, encoding: "utf8" }).trim();
    } catch {
      return "";
    }
  };
  const modified = run("git diff --name-only HEAD -- src/data/cities")
    .split("\n")
    .filter((f) => f.endsWith(".ts") && !f.endsWith("index.ts"));
  const untracked = run("git ls-files --others --exclude-standard -- src/data/cities")
    .split("\n")
    .filter((f) => f.endsWith(".ts") && !f.endsWith("index.ts"));
  return [...new Set([...modified, ...untracked])].filter(Boolean).map((f) => path.basename(f));
}

function getAddedSlugs(basename) {
  const relFile = `src/data/cities/${basename}`;
  let diff = "";
  try {
    diff = execSync(`git diff HEAD -- "${relFile}"`, { cwd: repoRoot, encoding: "utf8" });
  } catch {
    diff = "";
  }
  let addedLines;
  if (diff.trim() === "") {
    try {
      addedLines = readFileSync(path.join(citiesDir, basename), "utf8").split("\n");
    } catch {
      addedLines = [];
    }
  } else {
    addedLines = diff
      .split("\n")
      .filter((l) => l.startsWith("+") && !l.startsWith("+++"))
      .map((l) => l.slice(1));
  }
  const slugs = new Set();
  const re = /slug:\s*"([^"]+)"/;
  for (const line of addedLines) {
    const m = re.exec(line);
    if (m) slugs.add(m[1]);
  }
  return slugs;
}

function wordCount(str) {
  return str.trim().split(/\s+/).filter(Boolean).length;
}

// Extracts each top-level `{ ... }` object literal inside a `[ ... ]` array
// by bracket-matching, then evaluates it as plain JS (safe: this is our own
// first-party data, not external input). This sidesteps needing to resolve
// TypeScript module imports or path aliases just to read the data.
function extractRecords(source, file) {
  const records = [];
  // Find the array literal's opening bracket, i.e. the "[" in "= [", not the
  // "[" inside a type annotation like "CityLocation[] = [".
  const assignMatch = /=\s*\[/.exec(source);
  if (!assignMatch) throw new Error(`${file}: no array literal found`);
  const arrayStart = assignMatch.index + assignMatch[0].length - 1;
  let i = arrayStart + 1;
  const n = source.length;
  while (i < n) {
    while (i < n && source[i] !== "{" && source[i] !== "]") i++;
    if (i >= n || source[i] === "]") break;
    const start = i;
    let depth = 0;
    let inStr = false;
    let quote = "";
    let esc = false;
    for (; i < n; i++) {
      const ch = source[i];
      if (inStr) {
        if (esc) esc = false;
        else if (ch === "\\") esc = true;
        else if (ch === quote) inStr = false;
        continue;
      }
      if (ch === '"' || ch === "'" || ch === "`") {
        inStr = true;
        quote = ch;
        continue;
      }
      if (ch === "{") depth++;
      else if (ch === "}") {
        depth--;
        if (depth === 0) {
          i++;
          break;
        }
      }
    }
    // Strip TypeScript "as const" assertions that follow a complete string
    // literal (e.g. `tier: "T3" as const`). The lookbehind requires a full
    // quoted string immediately before "as const", so this never touches
    // ordinary prose that happens to contain the word "as".
    const literal = source
      .slice(start, i)
      .replace(/("(?:[^"\\]|\\.)*")\s+as\s+const\b/g, "$1");
    let record;
    try {
      record = (0, eval)(`(${literal})`);
    } catch (e) {
      throw new Error(`${file}: failed to parse a record near offset ${start}: ${e.message}`);
    }
    records.push(record);
  }
  return records;
}

function checkCorruption(source, file) {
  const problems = [];
  if (/^\]\s*=\s*\[/m.test(source)) {
    problems.push("contains a mid-array '] = [' (array-split corruption, see Block 0)");
  }
  if (/^\s*,\s*$/m.test(source)) {
    problems.push("contains a lone-comma line (sparse-array hole, see Block 0)");
  }
  if (/\bpopulation:\s*[0-9]/.test(source)) {
    problems.push("has a numeric 'population:' field (should be a string, see Block 0)");
  }
  return problems.map((p) => `${file}: ${p}`);
}

function main() {
  const changedMode = process.argv.includes("--changed");
  const files = changedMode
    ? getChangedCityFiles()
    : readdirSync(citiesDir).filter((f) => f.endsWith(".ts") && f !== "index.ts");

  if (changedMode && files.length === 0) {
    console.log("No uncommitted changes under src/data/cities/. Nothing to gate.");
    process.exit(0);
  }

  const corruption = [];
  const thin = [];
  let total = 0;
  let checkedThisBatch = 0;

  for (const file of files) {
    const filePath = path.join(citiesDir, file);
    const source = readFileSync(filePath, "utf8");
    corruption.push(...checkCorruption(source, file));

    const onlySlugs = changedMode ? getAddedSlugs(file) : null;
    const records = extractRecords(source, file);
    for (const r of records) {
      total++;
      if (changedMode && !onlySlugs.has(r.slug)) continue;
      if (changedMode) checkedThisBatch++;

      if (!(r.tier in TIER_FLOOR)) {
        thin.push(`${file}: ${r.slug ?? "(unknown slug)"} has an unrecognized tier "${r.tier}"`);
        continue;
      }
      const bodyParts = [r.intro ?? ""];
      for (const s of r.sections ?? []) bodyParts.push(s.body ?? "");
      const words = wordCount(bodyParts.join(" "));
      const floor = TIER_FLOOR[r.tier];
      if (words < floor) {
        thin.push(
          `${file}: ${r.slug ?? "(unknown slug)"} (${r.tier}) has ${words} body words, below the ${floor} floor`
        );
      }
      if (r.sections && r.sections.some((s) => "answer" in s)) {
        corruption.push(
          `${file}: ${r.slug ?? "(unknown slug)"} has a stray 'answer' field in a sections entry (only FAQs have answer)`
        );
      }
    }
  }

  if (changedMode) {
    console.log(`Checked ${checkedThisBatch} new/changed record(s) across ${files.length} changed file(s).`);
  } else {
    console.log(`Checked ${total} city records across ${files.length} files.`);
  }

  if (corruption.length > 0) {
    console.error("\nData corruption found:");
    for (const line of corruption) console.error(`  - ${line}`);
  }
  if (thin.length > 0) {
    console.error(`\n${thin.length} record(s) below their tier word floor:`);
    for (const line of thin) console.error(`  - ${line}`);
  }

  if (corruption.length > 0 || thin.length > 0) {
    console.error(changedMode ? "\nWord-count / corruption gate failed for this batch." : "\nWord-count / corruption guard failed.");
    process.exit(1);
  }

  console.log(changedMode ? "Word-count / corruption gate passed for this batch." : "Word-count and corruption guard passed.");
}

main();

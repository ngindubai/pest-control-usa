#!/usr/bin/env node
// Body-similarity guard (CLAUDE.md anti-thin-content rule 3: "no two pages may
// share more than 15% of body copy"). This rule existed only as prose with zero
// automated enforcement until now (see docs/seo-upgrade-log.md item 4.5).
//
// Scope is deliberately narrow: it only compares records within the SAME state
// file, and only checks records touched by this batch (uncommitted changes vs
// HEAD) against their state-file peers. That is the highest-risk pair (two
// nearby cities in the same state, same template, same pest list, written in
// the same session) and keeps this fast enough to run every batch without a
// full O(n^2) pass over the whole ~2,150-record corpus.
//
// Report-only by design, like check-word-counts.mjs was before its backlog was
// tracked down. Always exits 0. Once this has run clean for a while, consider
// promoting the --changed mode to a hard gate the way check-headings already is.
//
//   node scripts/check-body-similarity.mjs           whole-file peer report for
//                                                     every state file (slow-ish,
//                                                     for occasional manual audits)
//   node scripts/check-body-similarity.mjs --changed  only this batch's new/changed
//                                                     records vs their state-file
//                                                     peers (fast, run every batch)

import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const citiesDir = path.join(repoRoot, "src", "data", "cities");

const THRESHOLD = 0.15;
const SHINGLE_SIZE = 5;

// Same bracket-matching record extractor as check-word-counts.mjs, duplicated
// here on purpose (these guard scripts are deliberately standalone, no shared
// imports, so any one of them can run with nothing but Node and the repo).
function extractRecords(source, file) {
  const records = [];
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
    const literal = source
      .slice(start, i)
      .replace(/("(?:[^"\\]|\\.)*")\s+as\s+const\b/g, "$1");
    let record;
    try {
      record = (0, eval)(`(${literal})`);
    } catch {
      continue; // a malformed record is check-word-counts.mjs's job to catch, skip here
    }
    records.push(record);
  }
  return records;
}

function bodyText(record) {
  const parts = [record.intro ?? ""];
  for (const s of record.sections ?? []) parts.push(s.body ?? "");
  return parts.join(" ");
}

function shingles(text) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  const set = new Set();
  for (let i = 0; i + SHINGLE_SIZE <= words.length; i++) {
    set.add(words.slice(i, i + SHINGLE_SIZE).join(" "));
  }
  return set;
}

function jaccard(a, b) {
  if (a.size === 0 || b.size === 0) return 0;
  let intersect = 0;
  const [small, big] = a.size < b.size ? [a, b] : [b, a];
  for (const s of small) if (big.has(s)) intersect++;
  const union = a.size + b.size - intersect;
  return union === 0 ? 0 : intersect / union;
}

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
    // Untracked (brand-new) file: every record in it is new.
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

function checkFile(file, onlySlugs) {
  const source = readFileSync(path.join(citiesDir, file), "utf8");
  const records = extractRecords(source, file);
  const withShingles = records.map((r) => ({ r, sh: shingles(bodyText(r)) }));

  const targets = onlySlugs
    ? withShingles.filter(({ r }) => onlySlugs.has(r.slug))
    : withShingles;

  const findings = [];
  for (const target of targets) {
    for (const other of withShingles) {
      if (other.r.slug === target.r.slug) continue;
      // Avoid reporting the same pair twice in whole-file mode.
      if (!onlySlugs && other.r.slug < target.r.slug) continue;
      const sim = jaccard(target.sh, other.sh);
      if (sim >= THRESHOLD) {
        findings.push({ a: target.r.slug, b: other.r.slug, sim });
      }
    }
  }
  return findings;
}

function main() {
  const changedMode = process.argv.includes("--changed");
  const files = changedMode
    ? getChangedCityFiles()
    : readdirSync(citiesDir).filter((f) => f.endsWith(".ts") && f !== "index.ts");

  if (changedMode && files.length === 0) {
    console.log("No uncommitted changes under src/data/cities/. Nothing to check.");
    process.exit(0);
  }

  let totalFindings = 0;
  for (const file of files) {
    const onlySlugs = changedMode ? getAddedSlugs(file) : null;
    if (changedMode && onlySlugs.size === 0) continue;
    const findings = checkFile(file, onlySlugs);
    if (findings.length > 0) {
      console.log(`\n${file}: ${findings.length} pair(s) at or above ${THRESHOLD * 100}% shingle overlap:`);
      for (const f of findings.sort((a, b) => b.sim - a.sim)) {
        console.log(`  - ${f.a} <-> ${f.b}: ${(f.sim * 100).toFixed(1)}% overlap`);
      }
      totalFindings += findings.length;
    }
  }

  if (totalFindings === 0) {
    console.log(`Body-similarity check clean (${changedMode ? "changed records vs their state-file peers" : "whole corpus, per-state"}, ${(THRESHOLD * 100).toFixed(0)}% threshold).`);
  } else {
    console.log(`\n${totalFindings} pair(s) flagged above. This is a report only (does not fail the build). Rewrite the flagged bodies to diverge in structure and phrasing, not just facts, before treating the batch as done.`);
  }
  process.exit(0);
}

main();

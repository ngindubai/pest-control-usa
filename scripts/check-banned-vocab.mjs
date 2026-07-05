#!/usr/bin/env node
// Banned-vocabulary and AI-tell-phrase guard (CLAUDE.md content rule 5, plus the
// 2026-07-05 humanization pass). This list is the single canonical source and
// MUST stay identical to the list documented in CLAUDE.md's "BANNED VOCABULARY"
// section; if you edit one, edit both.
//
// The whole-corpus backlog (159 occurrences at last measurement, see
// docs/seo-upgrade-log.md item 4.2) is pre-existing debt from before this guard
// existed and is a separate, ongoing remediation project. This script must
// never block a build over THAT debt, or the autonomous build routine would
// never be able to commit anything again. So it runs in two modes:
//
//   node scripts/check-banned-vocab.mjs
//     Whole-corpus REPORT. Always exits 0. Prints the current total so the
//     remediation trend is visible over time (should go down, never up).
//
//   node scripts/check-banned-vocab.mjs --changed
//     GATE. Looks at only the src/data/cities/*.ts files with uncommitted
//     changes (tracked-and-modified, or new-and-untracked) relative to HEAD,
//     and within those files, only lines that were actually added. Exits
//     non-zero if any banned word or phrase appears in NEW content. This is
//     the mode the build routine runs before every commit.

import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, "..");
const citiesDir = path.join(repoRoot, "src", "data", "cities");

// Single words, checked with a case-insensitive word boundary.
const BANNED_WORDS = [
  "delve", "meticulous", "comprehensive", "tailored", "navigate", "leverage",
  "seamless", "robust", "vital", "crucial", "utilize", "intricate", "paramount",
  "pivotal", "embark", "foster", "elevate", "unleash", "unlock", "harness",
  "streamline", "holistic", "realm", "testament", "tapestry", "vibrant",
  "bustling", "nestled", "cornerstone", "myriad", "multifaceted", "underscore",
  "plethora", "moreover", "furthermore", "additionally",
];

// Hyphenated compounds, checked the same way (the hyphen is a natural word
// boundary in JS regex, so \b still anchors correctly on both ends).
const BANNED_COMPOUNDS = ["ever-evolving", "cutting-edge", "game-changer"];

// Multi-word phrases, checked as a case-insensitive substring.
const BANNED_PHRASES = [
  "in conclusion",
  "it is worth noting",
  "it is important to note",
  "when it comes to",
  "in today's fast-paced world",
  "navigate the complexities",
  "a testament to",
  "plays a crucial role",
  "plays a vital role",
  "in the realm of",
  "dive into",
  "at the end of the day",
  "rest assured",
  "look no further",
];

// "landscape" is flagged, not auto-failed: CLAUDE.md carves out a literal-
// geography exception (an actual outdoor landscape, terrain, rolling hills),
// distinct from the figurative "healthcare landscape" filler use. A human (or
// the Auditor step) has to judge which one a given match is; the report mode
// surfaces every hit either way so nothing slips past unreviewed.
const FLAGGED_WORDS = ["landscape"];

// Matches the templated "whether you are a X or a Y" construction by name.
const WHETHER_PATTERN = /\bwhether you(?:'re|\s+are)\s+(?:a|an)\s+\S+.{0,40}?\bor\s+(?:a|an)\b/i;

function findHits(text) {
  const hits = [];
  for (const w of BANNED_WORDS) {
    const re = new RegExp(`\\b${w}\\b`, "gi");
    const m = text.match(re);
    if (m) hits.push({ term: w, count: m.length });
  }
  for (const w of BANNED_COMPOUNDS) {
    const re = new RegExp(`\\b${w.replace(/-/g, "\\-")}\\b`, "gi");
    const m = text.match(re);
    if (m) hits.push({ term: w, count: m.length });
  }
  for (const p of BANNED_PHRASES) {
    const re = new RegExp(p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    const m = text.match(re);
    if (m) hits.push({ term: p, count: m.length });
  }
  if (WHETHER_PATTERN.test(text)) {
    hits.push({ term: 'whether you are a X or a Y" construction', count: 1 });
  }
  return hits;
}

function findFlagged(text) {
  const hits = [];
  for (const w of FLAGGED_WORDS) {
    const re = new RegExp(`\\b${w}\\b`, "gi");
    const m = text.match(re);
    if (m) hits.push({ term: w, count: m.length });
  }
  return hits;
}

function reportMode() {
  const files = readdirSync(citiesDir).filter((f) => f.endsWith(".ts") && f !== "index.ts");
  let total = 0;
  const perFile = [];
  for (const file of files) {
    const source = readFileSync(path.join(citiesDir, file), "utf8");
    const hits = findHits(source);
    const count = hits.reduce((s, h) => s + h.count, 0);
    if (count > 0) {
      perFile.push({ file, count });
      total += count;
    }
  }
  perFile.sort((a, b) => b.count - a.count);
  console.log(`Banned-vocabulary corpus report: ${total} total occurrences across ${perFile.length} files.`);
  for (const { file, count } of perFile.slice(0, 15)) {
    console.log(`  ${file}: ${count}`);
  }
  console.log("This is a report only and never blocks a build. See docs/seo-upgrade-log.md item 4.2 for the remediation backlog.");
  process.exit(0);
}

// Returns BASENAMES (e.g. "wyoming.ts"), matching readdirSync's output
// convention shared across all three check-*.mjs guard scripts, so a
// basename can always be turned back into either a citiesDir-relative read
// path or a repo-relative git path without ambiguity.
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

function getAddedText(basename) {
  const relFile = `src/data/cities/${basename}`;
  let diff = "";
  try {
    diff = execSync(`git diff HEAD -- "${relFile}"`, { cwd: repoRoot, encoding: "utf8" });
  } catch {
    diff = "";
  }
  if (diff.trim() === "") {
    // Untracked (brand-new) file: no diff exists yet, so treat the whole file
    // as newly added content.
    try {
      return readFileSync(path.join(citiesDir, basename), "utf8");
    } catch {
      return "";
    }
  }
  return diff
    .split("\n")
    .filter((l) => l.startsWith("+") && !l.startsWith("+++"))
    .map((l) => l.slice(1))
    .join("\n");
}

function gateMode() {
  const changedFiles = getChangedCityFiles();
  if (changedFiles.length === 0) {
    console.log("No uncommitted changes under src/data/cities/. Nothing to gate.");
    process.exit(0);
  }

  let violations = 0;
  let flaggedCount = 0;
  for (const relFile of changedFiles) {
    const added = getAddedText(relFile);
    if (!added.trim()) continue;
    const hits = findHits(added);
    if (hits.length > 0) {
      violations += hits.length;
      console.error(`\n${relFile}: banned term(s) in newly added content:`);
      for (const h of hits) console.error(`  - "${h.term}" (${h.count}x)`);
    }
    const flagged = findFlagged(added);
    if (flagged.length > 0) {
      flaggedCount += flagged.length;
      console.log(`\n${relFile}: flagged for manual review (not auto-failed):`);
      for (const f of flagged) console.log(`  - "${f.term}" (${f.count}x) - confirm this is literal, not figurative filler`);
    }
  }

  if (violations > 0) {
    console.error(`\nBanned-vocabulary gate failed: ${violations} hit(s) in this batch's new content.`);
    console.error("Rewrite the flagged sentences before committing. Do not add exceptions to this list without updating CLAUDE.md too.");
    process.exit(1);
  }

  console.log(`Banned-vocabulary gate passed for ${changedFiles.length} changed file(s).${flaggedCount > 0 ? ` ${flaggedCount} "landscape" use(s) flagged above for manual confirmation.` : ""}`);
}

const mode = process.argv.includes("--changed") ? "gate" : "report";
if (mode === "gate") gateMode();
else reportMode();

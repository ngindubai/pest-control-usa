<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AGENTS.md - PestRemovalUSA

> `CLAUDE.md` is the single source of truth and imports this file. Read CLAUDE.md in full at the start of every session. This file holds the worker roster and the first-session opening.

---

## First Session Opening

When opening a new session on this project, say:

> "Build the next batch."

The agent will:
1. Read `MEMORY.md` and `BUILD-PLAN.md`.
2. Open `build_state.json` to find the next chunk, tier, and template in rotation.
3. Load the relevant workers from `workforce/`.
4. Run the 7-stage production pipeline for one block (25 pages).
5. Commit pages plus the three docs updates, deploy, and post the live review links.

---

## The 7-Stage Production Pipeline (the "7 agent model")

Every location page passes through these seven workers in order. This is the quality gate.

`The Geographer -> The Wordsmith -> The Interrogator -> The Chameleon -> The Optimiser -> The Auditor -> The Builder`

---

## 14 Worker Souls

Workers are domain-specific expert roles, each with their own rules, voice, and quality gates. Load only the workers a block needs. All paths are relative to the repo root.

| Worker | File | Role |
|--------|------|------|
| The Architect | `workforce/leadership/the-architect.md` | Orchestration, planning, phase gates, batch sequencing |
| The Auditor | `workforce/leadership/the-auditor.md` | QA gate: uniqueness, factual accuracy, schema, Google compliance |
| The Wordsmith | `workforce/content/the-wordsmith.md` | Copywriting, warm-expert local voice |
| The Chameleon | `workforce/content/the-chameleon.md` | Anti-AI humaniser, anti-template (mandatory on all content) |
| The Interrogator | `workforce/content/the-interrogator.md` | Location-specific FAQ generation |
| The Geographer | `workforce/intelligence/the-geographer.md` | Regional pest intelligence (the star role, the uniqueness source) |
| The Scout | `workforce/intelligence/the-scout.md` | Keyword research, search-demand reconnaissance |
| The Spider | `workforce/intelligence/the-spider.md` | Competitor and public-data reconnaissance |
| The Builder | `workforce/development/the-builder.md` | Next.js templates, page generation, static export, deploy |
| The Librarian | `workforce/development/the-librarian.md` | City and town data assembly, skip-if-exists discipline |
| The Optimiser | `workforce/seo/the-optimiser.md` | On-page SEO, schema markup, E-E-A-T |
| The Connector | `workforce/seo/the-connector.md` | Internal linking, link graph |
| The Analyst | `workforce/monitoring/the-analyst.md` | Performance tracking, indexation monitoring |
| The Watchdog | `workforce/monitoring/the-watchdog.md` | Site-health monitoring, build verification |

---

## Content Structure Souls (5, paired to templates A to E)

Templates change the layout. Souls change the writing structure. Both rotate together. The chat reads the matched soul before writing the page body. Path: `workforce/content/souls/`.

| Soul | File | Default template |
|------|------|------------------|
| The Operator | `workforce/content/souls/city-soul-a-operator.md` | A (Field Manual) |
| The Neighbour | `workforce/content/souls/city-soul-b-neighbour.md` | B (Visual Journey) |
| The Comparison Analyst | `workforce/content/souls/city-soul-c-comparison.md` | C (Comparison Brief) |
| The Conversational Advisor | `workforce/content/souls/city-soul-d-qa.md` | D (Conversational Q&A) |
| The Brief Writer | `workforce/content/souls/city-soul-e-brief.md` | E (Data-Forward) |

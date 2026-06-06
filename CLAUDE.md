@AGENTS.md

# CLAUDE.md - PestRemovalUSA

> Single source of truth for any AI assistant working on this project (Claude Code, Claude app, Cursor, Copilot). Read this in full at the start of every session. The worker roster and the Next.js rules live in AGENTS.md, imported at the top of this file.

---

## THE 4 LOAD-BEARING RULES

1. **Ask, don't assume.** If anything is unclear, ask before writing a single line. Never make silent assumptions about intent, architecture, or requirements.
2. **Simplest solution first.** Always implement the simplest thing that could work. Do not add abstractions or flexibility that were not explicitly requested.
3. **Don't touch unrelated code.** If a file or function is not directly part of the current task, do not modify it, even if you think it could be improved. Note it instead.
4. **Flag uncertainty explicitly.** If you are not confident about an approach or a technical or factual detail, say so before proceeding. Confidence without certainty causes damage.

---

## EM DASH BAN - ABSOLUTE, NO EXCEPTIONS

**Never use em dashes or en dashes anywhere, ever.** This applies to:
- All site content (city pages, town pages, state pages, service pages, blog posts)
- All internal documents (CLAUDE.md, BUILD-PLAN.md, MEMORY.md, soul files, data files)
- All chat responses

Use commas, full stops, colons, brackets, or restructure the sentence instead. There are no circumstances under which an em dash is acceptable. Not in headings, not in table cells, not in JSON, not in JSX, not in meta descriptions, not anywhere.

---

## THE PROJECT

- **Site:** PestRemovalUSA (pestremovalusa.com), config in `src/config/site.ts`
- **Type:** Programmatic SEO lead-generation site for pest control across the USA
- **Goal:** Capture local pest control inquiries through organic search, one location at a time
- **Audience:** Homeowners and businesses with an active or feared pest problem. They want a local, licensed, trustworthy operator who understands their specific pest and region.
- **Page hierarchy:** State pages, then City pages, then Town pages. Cities first, towns after.
- **Stack (LOCKED):**
  - Next.js 16 (static export, `output: "export"`)
  - React 19 + TypeScript (strict)
  - Tailwind CSS 4
  - Data in TypeScript files under `src/data/`
  - GitHub Actions builds the static export and publishes `out/` to the `live` branch. Hostinger serves the `live` branch.
- **Repository:** https://github.com/ngindubai/pest-control-usa (private)
- **Method origin:** This governance system is ported from the sister site `ngindubai/pet-transport`. The roles, quality gates, and block rhythm match that proven model, adapted from pet import/export regulations to regional pest intelligence.

---

## THE 7-STAGE PRODUCTION PIPELINE (the "7 agent model")

Every location page is produced by seven workers in sequence. This is the quality gate. No page reaches the live site without passing through all seven.

```
1. The Geographer  -> regional pest intelligence (species, seasonality, climate, local factors)
2. The Wordsmith   -> unique, warm-expert local copy
3. The Interrogator-> location-specific FAQs
4. The Chameleon   -> humanize + break cross-page template patterns
5. The Optimizer   -> titles, meta, schema (LocalBusiness / Service / FAQPage), internal links
6. The Auditor     -> QA gate (uniqueness, word count, banned vocab, schema, factual accuracy)
7. The Builder     -> write data + page files, build the static export, deploy
```

Seven more supporting workers (The Architect, The Scout, The Spider, The Librarian, The Connector, The Analyst, The Watchdog) orchestrate, research, assemble data, link, and monitor. Full roster in AGENTS.md. Load only the workers a block needs.

---

## THE BLOCK RHYTHM

- **One "build the next batch" (or "go") = one block. Never more.**
- **A block = 25 pages** (or one equivalent non-page unit such as a data enrichment pass or a template build).
- Every block runs the full 7-stage pipeline above.
- **Bulk-generation without the quality gate is banned.** We never mass-produce thin pages.
- After commit, deploy is automatic on push to `main`. After deploy, post the live review links (see LIVE LINK REVIEW GATE).

---

## TEMPLATE DIVERSIFICATION - THE ANTI-PENALTY ENGINE

At thousands of city and town pages, Google's near-duplicate and scaled-content detectors are the biggest risk. We defend against them with 5 structurally distinct page templates (A to E), each paired with a content soul, rotated deterministically by slug hash.

Hard rules (full detail in `TEMPLATE-DIVERSIFICATION-GUIDE.md`):
- Exactly 5 templates: A, B, C, D, E. Never add a 6th. Never collapse two into one.
- No template's share of the corpus falls below 15% or rises above 25%.
- Templates differ in section order, hero composition, FAQ placement and format, sidebar presence, and schema.org type, while sharing one brand (palette, fonts, components).
- No H2 string appears identically on more than 30% of pages within a template bucket.
- Each page's `templateVariant` and `contentSoul` are stored in its data record (slug-hash derived, overridable).
- The fingerprint audit must pass before deploy: no DOM-skeleton cluster may contain more than 25% of pages in a silo.

---

## ANTI-THIN-CONTENT RULES

Each page must be genuinely different, driven by real local data, not a find-and-replace of another page.

1. **Unique data per location.** Every page is built from The Geographer's location record: dominant local pests, seasonality, climate zone, housing-stock factors, a region-specific hook. Generic pest copy is a failure.
2. **Word-count floors.** T1 city >= 800 words unique body. T2 city >= 500. T3 city/town >= 350.
3. **Duplication ceiling.** Two pages may not share more than 15% of body copy (excluding nav, footer, CTAs).
4. **Location-specific FAQs.** At least 2 of every FAQ set must name the location and a location-specific fact.
5. **Humanizer pass.** Every page clears the 24 AI-tell patterns and the statistical targets (burstiness, type-token ratio, trigram repetition under 0.05). See The Chameleon.

---

## DEPLOY MODEL

**HARDCODED RULE: Always push directly to `main`. Never push to a working branch and wait for a merge. Every commit goes to `main` so deploy.yml fires immediately and the site goes live on every push.**

- `.github/workflows/deploy.yml` builds the Next.js static export (`npm run build` then `next-sitemap` postbuild) and publishes `out/` to the `live` branch via peaceiris/actions-gh-pages.
- Hostinger serves the `live` branch.
- The `live` branch is compiled output only. Never edit it directly.
- `.github/workflows/*.yml` cannot be edited via the GitHub MCP connector (returns 403). Provide the complete file and ask Gareth to paste it via the GitHub web editor. See ERRORS.md.

### LIVE LINK REVIEW GATE (fires after every batch)

Deploy is automatic, so the safety gate is review after publish. After every block that changes or adds pages, once the push is made:
1. Post, in chat, the full live URL of every new or changed page.
2. Group them clearly (new vs changed) and give the expected deploy time.
3. State plainly that they are live and need review.
4. For a sitewide or template change, name a representative sample of URLs plus the home page.

Skipping the link post is treated as a failed block. **Post the full list every time, without being asked. This is hardcoded and automatic. All URLs must be posted as clickable markdown hyperlinks in the format [label](url), never as plain text.**

---

## MANDATORY DOCS UPDATE - EVERY BLOCK COMMIT

Whenever pages are committed, the same commit must update all three of these to reflect the new state:
1. **`BUILD-PLAN.md`** - add a session-log row: date, what was built, page count, what is next.
2. **`build_state.json`** - update `cities_built`, `towns_built`, `total_site_pages`, `completed_chunks`, `next_chunk`, `next_chunk_tier`, `next_chunk_template`, per-tier remaining counts, `last_updated`, `notes`.
3. **`MEMORY.md`** - update the Current State block.

The CURRENT STATUS section in this file must also be kept accurate when numbers change. When these docs drift from reality, the next session starts with false context and wastes time on a repo audit. Every block commit is also a docs commit, and ends with the live review links.

---

## ABOUT THE USER

- **Name:** Gareth. Founder.
- **Technical level:** Non-technical. Does not read code. Use plain English. Number every manual step. Never say "just run X" without the exact command and a one-line explanation. If something fails, diagnose it yourself first. When you finish, summarize in plain English: what changed, what is live, what is next, with the review links.

---

## AUTHOR PERSONAS - NON-NEGOTIABLE

**Never use Gareth's name as an author.** Use one of the personas below. They carry the E-E-A-T trust signal for a YMYL-adjacent topic (pesticide safety, disease vectors, child and pet safety).

| Persona | Name | Title | Use for |
|---|---|---|---|
| **The Entomologist** | Dr. Lena Ortiz | Board-Certified Entomologist (BCE), PestRemovalUSA | Species identification, regional pest biology, seasonality, infestation behavior |
| **The Field Tech** | Marcus Reed | Lead Pest Control Technician, State-Licensed Applicator | Treatment methods, inspection process, what a visit looks like, costs |
| **The Safety Adviser** | Sandra Whitfield | Integrated Pest Management & Pesticide Safety Specialist | Family and pet safety, IPM, prevention, eco-friendly options, health risks |
| **The Operations Lead** | James Cole | Service Operations Manager, PestRemovalUSA | Scheduling, emergency response, commercial accounts, guarantees, local coverage |

---

## CONTENT RULES (NON-NEGOTIABLE)

1. No false guarantees. Say "reduce risk", "licensed and insured", "treatment plan", not "100% eradication forever".
2. Factual accuracy on pest claims. Only state a pest is present in a region, active in a season, or carries a disease if it is true. This is YMYL-adjacent. Wrong information erodes trust and can affect health decisions. The Geographer supplies the facts, The Auditor verifies them.
3. Warm, expert, reassuring tone. The reader is stressed about a pest in their home or business.
4. **No em dashes. Ever. Anywhere.** See EM DASH BAN.
5. No banned vocabulary: delve, meticulous, comprehensive, tailored, navigate, leverage, seamless, robust, vital, crucial, utilize, intricate, paramount, pivotal, embark, foster, elevate, unleash, unlock, harness, streamline, holistic, realm, landscape (figurative), testament, tapestry, vibrant, bustling, nestled, cornerstone, myriad, multifaceted.
6. Vary sentence rhythm. Use contractions. Have opinions.
7. Use the correct author persona. Never use Gareth's name.
8. **US (American) English throughout. ABSOLUTE, NO EXCEPTIONS.** This is an American site for an American audience. Every word of site content, every internal document, every soul file, every data file, every code identifier, and every chat response uses American spelling and vocabulary. Never use British or Commonwealth spellings. Banned British spellings (use the American form): colour (use color), behaviour (behavior), neighbour (neighbor), neighbourhood (neighborhood), favour (favor), centre (center), licence (license), defence (defense), offence (offense), catalogue (catalog), grey (gray), mould (mold), enquiry (inquiry), humanise/humaniser (humanize/humanizer), organise (organize), recognise (recognize), summarise (summarize), optimise (optimize), prioritise (prioritize), analyse (analyze), travelled/travelling (traveled/traveling), labelled (labeled), cancelled (canceled), whilst (while), amongst (among), learnt (learned), spelt (spelled). Also use American vocabulary and date formats. When in doubt, choose the American form. The Auditor checks this on every page.

---

## SEO RULES (NON-NEGOTIABLE)

- Unique `title` and `description` per page.
- Exactly one `<h1>` per page, containing the primary local keyword (e.g. "Pest Control in Austin, TX").
- Primary keyword in the first 100 words, one H2, and the meta description.
- Internal links: city to its state, city to relevant service pages, city to nearby cities.
- Schema: LocalBusiness plus Service plus FAQPage (FAQPage from the page's FAQ data). Schema type emphasis varies by template (see the guide).
- No duplicate titles, descriptions, or body content.

---

## DIRECTORY STRUCTURE

```
pest-control-usa/
  src/app/                 # Next.js App Router pages
    locations/[slug]/      # state pages (existing, uses src/data/locations.ts)
    locations/[state]/[city]/  # city pages (template router)
  src/components/templates/ # 5 city templates (A to E) + CityTemplateRouter
  src/data/                # locations.ts (states), services.ts, cities/ (per-state city data)
  src/types/index.ts       # shared types (ContentTemplate = A..E)
  workforce/               # 14 worker soul files (the method)
  CLAUDE.md                # THIS FILE (single source of truth)
  AGENTS.md                # worker roster + Next.js rules
  BUILD-PLAN.md            # session log + block rhythm + phase status
  build_state.json         # machine-readable progress + next-batch pointer
  MEMORY.md                # decision log + current state
  ERRORS.md                # failed-approach log
  DEPLOY.md                # deploy pipeline doc
  DESIGN.md                # design system + per-template visual signatures
  TEMPLATE-DIVERSIFICATION-GUIDE.md  # the anti-penalty engine
```

---

## SESSION PROTOCOLS

### "build the next batch" or "go"
1. Read MEMORY.md, BUILD-PLAN.md, build_state.json. Find the next chunk, tier, and template in rotation.
2. Run the 7-stage pipeline for the batch (Geographer to Builder).
3. Build the static export locally (`npm run build`) to confirm it compiles.
4. Commit pages plus the three docs updates in one atomic commit and push directly to `main`.
5. **Post every live URL in chat as a clickable markdown hyperlink [City, ST](https://pestremovalusa.com/...), grouped as new vs changed. No exceptions. Never use plain text URLs. This is mandatory and non-negotiable. Do not summarize or truncate the list.**
6. Stop and wait for the next "go".

### "session end" or "wrap up"
1. Update BUILD-PLAN.md, build_state.json, MEMORY.md.
2. Commit and push.
3. Post the live review links for anything changed this session.
4. Summarize what was built and what is next.

---

## WHAT TO DO WHEN STUCK

1. Re-read this file.
2. Read MEMORY.md for prior decisions.
3. Check ERRORS.md for prior failures.
4. Ask Gareth one specific question.

---

## CURRENT STATUS (keep accurate, update on every block commit)

- **Phase:** Phase 2 T2 in progress. Chunk 8 complete 2026-06-06. 200 total city pages built (75 T1 + 125 T2).
- **City pages built:** 200. T1 complete (75). T2 in progress: 125 built of ~300 target, 175 remaining.
- **Town pages built:** 0.
- **Templates:** 5 (A to E), all built. Router in `src/components/templates/`. Rotation: A=41, B=40, C=40, D=40, E=39 (all within 15-25% target).
- **Next block:** Chunk 9, the next 25 T2 city pages, rotation continues at A.
- **Deploy:** Always push directly to `main`. deploy.yml fires automatically. Site goes live on every push.

---

*Last updated: 2026-06-06*

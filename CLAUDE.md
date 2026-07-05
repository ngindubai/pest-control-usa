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

This is the rule for an interactive session, when Gareth is at the keyboard and types "go." It is deliberately conservative (one block, wait for review) because a human is watching each result. See the next section for the different rule that applies only when the unattended scheduled routine runs.

---

## THE AUTONOMOUS BUILD ROUTINE (scheduled, unattended, no human watching)

This is a separate cadence from THE BLOCK RHYTHM above, and only applies when the scheduled cloud routine runs, not to an interactive "go". The full, current routine prompt lives at `docs/build-routine.md`, paste it as-is into the scheduler; this section is the durable policy it must obey, not a restatement of its steps.

- **Target: 100 new pages a day.** The routine runs twice daily; each run's target is **50 new pages (2 blocks of 25)**, floor 1 block if quality cannot stretch to 2. Never more than 2 blocks in one run.
- Every block still runs the full 7-stage pipeline. Unattended does not mean unaudited, if anything the gates matter more with nobody watching.
- Before every commit, run `npm run check:batch` (word floors, banned vocabulary, body similarity, and heading distribution, all scoped to this batch's new content, see the scripts referenced throughout this file). A non-zero exit on the gating checks means do not commit that block; a flagged similarity report does not block but must not be ignored either.
- Never let a pre-existing, whole-corpus backlog (the word-count remediation project, the banned-vocabulary sweep) block a fresh, correctly-built batch. The `--changed`-mode scripts exist specifically so new work is judged on its own merits, not held hostage by old debt. See `docs/seo-upgrade-log.md` for what that debt is and who owns fixing it (a separate, tracked effort, not this routine's job).
- Same guardrails as everywhere else in this file: no em dashes, the full banned-vocabulary and AI-tell list, US English, verified facts only, one H1 and a unique title per page, balanced A-E template rotation, never touch `deploy.yml` or any `.github/workflows` file, never delete anything, never fabricate a trust metric or testimonial.

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

Each page must be genuinely different, driven by real local data, not a find-and-replace of another page. Before writing, state the specific information-gain angle for this batch, the one real fact, comparison, or local detail a competitor page would not have. A page with nothing new is the failure mode these rules exist to prevent.

1. **Unique data per location.** Every page is built from The Geographer's location record: dominant local pests, seasonality, climate zone, housing-stock factors, a region-specific hook. Generic pest copy is a failure.
2. **Word-count floors.** T1 city >= 800 words unique body. T2 city >= 500. T3 city/town >= 350. Enforcement: `npm run check:words` reports the whole-corpus backlog (informational, does not block, this is the separate, ongoing Block 4 remediation project tracked in `SEO-BUILD-PLAN-2026-07-02.md`). `npm run check:words:changed` gates only this batch's new or modified records and must pass before any commit, every new page clears its own tier floor regardless of what the rest of the corpus is doing. See `scripts/check-word-counts.mjs`.
3. **Duplication ceiling.** Two pages may not share more than 15% of body copy (excluding nav, footer, CTAs). This had zero automated enforcement until 2026-07-05. `npm run check:similarity:changed` compares this batch's new or modified records against their same-state peers using a shingle-overlap heuristic and reports any pair at or above the ceiling. Report-only for now (does not block), but treat any flagged pair as a real problem: rewrite the structure and phrasing, not just the facts, of one of the two pages before calling the batch done. See `scripts/check-body-similarity.mjs`.
4. **Location-specific FAQs.** At least 2 of every FAQ set must name the location and a location-specific fact.
5. **Humanizer pass.** Every page clears the 24 AI-tell patterns, the banned-vocabulary and AI-tell-phrase list in CONTENT RULES item 5, and the statistical targets (burstiness, type-token ratio, trigram repetition under 0.05). See The Chameleon (`workforce/content/the-chameleon.md`), which also runs a generate-then-critique-then-revise pass: draft, then check the draft against this whole rule set and the QA checklist below, rewrite whatever fails, then check again before handing off to The Auditor.

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
2. Factual accuracy on pest claims. Only state a pest is present in a region, active in a season, or carries a disease if it is true. This is YMYL-adjacent. Wrong information erodes trust and can affect health decisions. The Geographer supplies the facts, The Auditor verifies them. Body-copy expansion of an existing record may only use facts already present in that record's own `pestProfile`, `climateDriver`, `localHook`, `prevention`, and `faqs` fields. Never introduce a new species claim, statistic, or disease-vector assertion that was not already there.
3. Warm, expert, reassuring tone. The reader is stressed about a pest in their home or business.
4. **No em dashes. Ever. Anywhere.** See EM DASH BAN.
5. **No banned vocabulary or AI-tell phrases, ever, anywhere.** This is the single canonical list; if you need to change it, change it here first, then update `scripts/check-banned-vocab.mjs` (both single-word and phrase lists) to match, they must never drift apart.
   - **Single words:** delve, meticulous, comprehensive, tailored, navigate, leverage, seamless, robust, vital, crucial, utilize, intricate, paramount, pivotal, embark, foster, elevate, unleash, unlock, harness, streamline, holistic, realm, testament, tapestry, vibrant, bustling, nestled, cornerstone, myriad, multifaceted, underscore, plethora, moreover, furthermore, additionally.
   - **Hyphenated compounds:** ever-evolving, cutting-edge, game-changer.
   - **Phrases:** "in conclusion", "it is worth noting", "it is important to note", "when it comes to", "in today's fast-paced world", "navigate the complexities", "a testament to", "plays a crucial role", "plays a vital role", "in the realm of", "dive into", "at the end of the day", "rest assured", "look no further", and the templated "whether you are a [X] or a [Y]" construction by name.
   - **Flagged, not auto-banned:** "landscape" is fine when literally describing terrain, land, or geography (e.g. "the flat, poorly draining landscape of the former Great Black Swamp"). It is banned only in its figurative filler sense ("the healthcare landscape"). When in doubt, rewrite around it rather than defend the usage.
   - Enforcement: `npm run check:vocab` reports the whole-corpus count (informational, does not block, tracks the remediation backlog down to zero over time). `npm run check:vocab:changed` gates only this batch's newly added content and must pass before any commit. See `scripts/check-banned-vocab.mjs`.
6. Vary sentence rhythm. Use contractions. Have opinions. See The Chameleon's humanization pass below, this rule is enforced with a real pattern list and statistical targets, not just this one line.
7. Use the correct author persona. Never use Gareth's name. Never fabricate a first-person anecdote, a claimed credential, or a claimed personal experience for a persona beyond what their table entry states. Write from genuine domain knowledge, not invented "I've seen this a hundred times" color.
8. **US (American) English throughout. ABSOLUTE, NO EXCEPTIONS.** This is an American site for an American audience. Every word of site content, every internal document, every soul file, every data file, every code identifier, and every chat response uses American spelling and vocabulary. Never use British or Commonwealth spellings. Banned British spellings (use the American form): colour (use color), behaviour (behavior), neighbour (neighbor), neighbourhood (neighborhood), favour (favor), centre (center), licence (license), defence (defense), offence (offense), catalogue (catalog), grey (gray), mould (mold), enquiry (inquiry), humanise/humaniser (humanize/humanizer), organise (organize), recognise (recognize), summarise (summarize), optimise (optimize), prioritise (prioritize), analyse (analyze), travelled/travelling (traveled/traveling), labelled (labeled), cancelled (canceled), whilst (while), amongst (among), learnt (learned), spelt (spelled). Also use American vocabulary and date formats. When in doubt, choose the American form. The Auditor checks this on every page.
9. **No fabricated trust metrics, ratings, testimonials, or certifications, ever, on any page.** Learned the hard way on 2026-07-04 (`docs/seo-upgrade-log.md` section 5): a star rating, a review count, a named customer testimonial, a "BBB Accredited" badge, or a claimed third-party certification (NPMA, QualityPro, ISO, etc.) may only appear if it is real and Gareth has confirmed it is real. This applies to every page this project ever generates, not just the ones already caught, including city-page FAQs and local hooks. If a draft wants to say something feels more persuasive with a number attached, use a real, defensible, non-numeric signal instead (licensed and insured, same-day service, free inspection, satisfaction guarantee), never an invented statistic.
10. **Every `nearbyCities` entry must set an explicit `stateSlug`.** Confirmed on 2026-07-05 that zero of the corpus's 6,418 existing entries do this (`docs/seo-upgrade-log.md` item 2.6), which means the link resolver in `src/components/templates/parts.tsx` is inferring the target state for every single one, and silently drops the link on any name that is ambiguous across states. New records must not add to that debt: always write `{ name: "...", slug: "...", stateSlug: "..." }`, the full three-field form, never the two-field shorthand.

---

## SEO RULES (NON-NEGOTIABLE)

- Unique `title` and `description` per page.
- Exactly one `<h1>` per page, containing the primary local keyword (e.g. "Pest Control in Austin, TX").
- Primary keyword in the first 100 words, one H2, and the meta description.
- Internal links: city to its state, city to relevant service pages, city to nearby cities.
- Schema: LocalBusiness plus Service plus FAQPage (FAQPage from the page's FAQ data). Schema type emphasis varies by template (see the guide).
- No duplicate titles, descriptions, or body content.
- Never add a `keywords` metadata field to any page. Google has not used it for ranking in over a decade; it is pure noise. If you find one on an existing page, remove it, do not add another one anywhere else.
- **If you ever create a new `page.tsx` with its own `openGraph` metadata block** (for example, a new Phase 6 pest-x-city dynamic route): Next.js does not deep-merge a page's `openGraph` object with the root layout's. If the page's own `openGraph` does not include an `images` array, the shared default share image silently disappears from that page's rendered `<head>`, this exact bug shipped sitewide on 2026-07-04 and went unnoticed until the 2026-07-05 audit (`docs/seo-upgrade-log.md` item 2.7). Either give the new page its own `openGraph.images`, or do not define `openGraph` at all on it and let the root layout's default carry through unbroken.

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

- **Phase:** Phase 3 T3 in progress. Chunks 15-89 complete 2026-06-28. 2151 total city pages built (75 T1 + 300 T2 + 1776 T3). T2 COMPLETE.
- **City pages built:** 2151. T1 complete (75). T2 complete (300). T3 in progress: 1776 built of ~5,000 target.
- **State hub pages:** 51 (all states plus DC have a hub; 8 were added 2026-07-02, see SEO-BUILD-PLAN-2026-07-02.md).
- **Town pages built:** 0.
- **Templates:** 5 (A to E), all built. Router in `src/components/templates/`. Rotation: A=442, B=429, C=427, D=415, E=438 (all within 15-25% target).
- **Next block:** Chunk 90, T3 continues, rotation at C.
- **Deploy:** Always push directly to `main`. deploy.yml fires automatically. Site goes live on every push.
- **SEO remediation:** 2026-07-02, an SEO audit and build plan ran against this repo. Build restoration, sitemap/discoverability, dash sweep, and schema/trust cleanup are complete. See `SEO-AUDIT-2026-07-02.html` and `SEO-BUILD-PLAN-2026-07-02.md` for the full record and remaining Block 3 (answer-first content) work.
- **Design and conversion audit:** 2026-07-03, a browser-based design and conversion audit ran against the live site across all 5 templates plus core static pages. Fixed sitewide dead nav links (4 new real service pages built, `services_count` now 27), a 48-vs-50-states contradiction, a crushed data-table column on Templates A/E, added a sitewide sticky mobile call bar and a lead form on every city template, gave Template D a real hero, and fixed a fabricated company history on the About page that contradicted the real site numbers by 20 to 40x. See `DESIGN-BUILD-PLAN-2026-07-03.md` for the full record.

---

*Last updated: 2026-07-03*

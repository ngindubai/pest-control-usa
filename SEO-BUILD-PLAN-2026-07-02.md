# SEO Remediation Build Plan

**Created:** 2 July 2026
**Source audit:** `SEO-AUDIT-2026-07-02.html` (read that first for the reasoning and trade-offs)
**Trigger:** SEO & Search Brief, 29 June 2026 (this site flagged highest-exposure for the June 2026 spam movement and the GEO / AI Overview shift)

---

## How to use this plan

This plan is written so a **Sonnet** execution session can carry out most of it directly, one block at a time, following the existing project rules in `CLAUDE.md` and `AGENTS.md`.

Three steps are marked **`[OPUS]`**. Do not run those on Sonnet. Where a step is `[OPUS]`, Opus must either do the step itself or write the rubric and hand-check a sample first, then Sonnet may execute the bulk. The reason is always the same: the step involves judgment that, done carelessly, creates new duplication or touches health-adjacent (YMYL) pest claims.

Two steps are marked **`[DECISION: GARETH]`**. Do not guess these. Ask Gareth the stated question before writing code.

**Non-negotiable rules that apply to every step** (from `CLAUDE.md`):
- No em dashes or en dashes anywhere, including code comments and data.
- US English only.
- No banned vocabulary (delve, comprehensive, robust, seamless, leverage, etc.).
- Deploy model: commit and push directly to `main`; deploy fires automatically.
- After any block that changes or adds pages, post every changed live URL in chat as clickable markdown links (the Live Link Review Gate).
- Every block commit also updates `BUILD-PLAN.md`, `build_state.json`, and `MEMORY.md`.
- Run `npm run build` locally and confirm it compiles before committing.

---

## Block 0: Build restoration (prerequisite, discovered and completed this session)

**Not in the original plan.** When execution began, `npm run build` did not compile at all, on either Turbopack or webpack. Because CI runs the same `npm run build`, this means the site had not been deploying. This blocked every other step, so it was fixed first. Root cause: the Chunk 86 data-append left syntax and type corruption in several city data files. This was mechanical, unambiguous (files did not compile), so it was fixed without a decision gate.

### Step 0.1 Fix array-split corruption `[SONNET, done]`
- `src/data/cities/florida.ts` (~line 10614) and `src/data/cities/virginia.ts` (~line 5308): a stray `] = [` plus a lone `,` closed and re-opened the array mid-file, so `export const X = [...] = [...]` parsed as an array-literal-assignment. Every parser (Turbopack SWC, webpack SWC, tsc) reported `Cannot assign to this` / TS2364 thousands of times. Removed the `] = [` and stray comma so the array continues.

### Step 0.2 Fix sparse-array holes `[SONNET, done]`
- `ohio.ts`, `washington.ts`, `new-jersey.ts`, `tennessee.ts`, `north-carolina.ts`, `new-york.ts`, `pennsylvania.ts`: each had a lone `,` line before `// Chunk 86 additions`, creating a sparse-array hole that spreads into `cities` as `undefined` and would crash static generation. Removed each stray comma.

### Step 0.3 Fix type errors in Chunk 86 records `[SONNET, done]`
- `florida.ts:10668`: a `CitySection` carried a stray `answer: ""` (only FAQs have `answer`). Removed.
- 11 records across `ohio, washington, virginia, michigan, pennsylvania, texas` had `population:` as a raw number; the type is `string`. Converted to the standard `"~NN,NNN"` string form.

**Result:** `npm run build` now exits 0 and generates all 2,150 city pages plus `sitemap.xml`, `robots.txt`, and `llms.txt`. A full `tsc --noEmit` passes with 0 errors. See Newly Discovered Findings N3 for the recommended guard against this recurring.

---

## Block 1: Discoverability (highest impact, lowest risk)

**Goal:** make the ~2,151 city pages findable by Google. All Sonnet-safe.

**Decisions taken this session (Gareth):** deploy target = push to `main` (live); sitemap = remove next-sitemap, use native; nearby links = resolve by lookup then filter misses; state-page city list = list all as links.

### Step 1.1 Add city pages to the shipping sitemap  `[SONNET]`
- **File:** `src/app/sitemap.ts`
- Import `cities` from `@/data/cities`. Add a `cityRoutes` array mapping each city to `{ url: \`${BASE}/locations/${c.stateSlug}/${c.slug}/\`, changeFrequency: "monthly", priority: 0.7 }`. Keep the trailing slash (site uses `trailingSlash: true`).
- Append `...cityRoutes` to the returned array.
- **Acceptance:** after `npm run build`, `out/sitemap.xml` contains a `<loc>` for a known city (for example El Cajon and Fairbanks). Count of `<loc>` entries is roughly 2,250, not ~80.

### Step 1.2 Retire the dead next-sitemap path  `[SONNET]`
- **Files:** `next-sitemap.config.js`, `package.json` (the `postbuild` script), `.gitignore:21-22`
- Confirm `src/app/robots.ts` exists and produces the correct `robots.txt` in `out/`. If it does, remove the `postbuild: next-sitemap` step and the `next-sitemap` config so there is one source of truth. If `robots.ts` does **not** exist, create it (allow `/`, disallow `/thank-you`, reference the sitemap) before removing next-sitemap.
- **Acceptance:** `out/robots.txt` exists and references `https://pestremovalusa.com/sitemap.xml`. No duplicate or empty sitemap files in `out/`.

### Step 1.3 Link state pages to their real city pages  `[SONNET]`
- **File:** `src/app/locations/[slug]/page.tsx` (the "Cities We Serve" grid, around line 332)
- Replace the hardcoded `state.cities` string list with a call to `getCitiesByState(state.slug)` (already exported from `src/data/cities/index.ts:120`).
- Render each city as a real `<Link href={\`/locations/${c.stateSlug}/${c.slug}/\`}>` with the city name. Keep the existing card styling and the MapPin icon.
- For states with many cities, it is fine to list them all; optional polish is to show a lead set and a "view all" region, but do not block the link fix on that.
- **Acceptance:** view a rendered state page (for example California) and confirm every listed city is a clickable link resolving to a real city page. No `notFound()` on click.

### Step 1.4 Fix broken cross-state "nearby city" links  `[SONNET]`
- **File:** `src/components/templates/parts.tsx:63-79` and the `nearbyCities` data across `src/data/cities/*.ts`
- **Interim safe fix (do this first):** in the nearby component, filter out any entry whose target page does not exist, so no link 404s. Use a lookup against the `cities` set.
- **Proper fix (if block capacity allows):** add a `stateSlug` field to the `CityRef` used by `nearbyCities` (update `src/types/index.ts`), populate it in the data, and have the component build the URL from that instead of the current city's `stateSlug`.
- **Acceptance:** a script that walks every `nearbyCities` link resolves 100 percent to generated pages. Spot check Burlington, VT (currently links Albany and Providence) shows no 404.

### Step 1.5 Normalize canonicals to trailing slash  `[SONNET]`
- **Files:** `src/app/locations/[slug]/[city]/page.tsx:19`, `src/app/locations/[slug]/page.tsx:35`, and any other route whose canonical omits the trailing slash
- Ensure every `alternates.canonical` and `openGraph.url` ends with `/` to match the served URL.
- **Acceptance:** view source of a city page shows `<link rel="canonical" href=".../locations/x/y/">` with the trailing slash.

### Step 1.6 Add llms.txt `[SONNET]` (overrides the audit's "skip it" note)
- **File:** `public/llms.txt` (served at `https://pestremovalusa.com/llms.txt`, copied into `out/` on build).
- Generated from the real data: an H1 title, a summary blockquote, the 23 services, the 43 state hubs, key pages, the XML sitemap, and notes for AI systems. No em dashes.
- The audit called the absence of llms.txt "correct." That is overruled for this project: other AI systems read llms.txt and it drives real traffic. Treat it as a live deliverable and regenerate it when services or state hubs change.
- **Acceptance:** `out/llms.txt` ships and lists services and state hubs with absolute URLs. (Done this session: 9,625 bytes, links only real hubs so no 404s.)

### Block 1 close-out
- `npm run build`, confirm compile. (Done: exit 0, 2,229 sitemap URLs.)
- Update `BUILD-PLAN.md`, `build_state.json` (reconcile the city count, see L6), `MEMORY.md`.
- Commit and push to `main`. Post the changed live URLs (state pages, sitemap, a sample of city pages) as clickable markdown links.

---

## Block 2: Trust and schema `[COMPLETE 2026-07-02, SONNET]`

**Goal:** remove the fabricated-rating risk and make structured data clean and entity-linked. Mostly Sonnet, with two Gareth decisions.

**Decisions taken this session (Gareth):** fabricated ratings = remove all rating markup, no real auditable reviews; NAP/offers = model as a service-area Organization, drop the placeholder address and any empty price fields; word-count guard severity = block the build once wired in (not report-only); word-count guard timing = build and validate the script now, wire it into `prebuild` when Block 4 (new, see below) starts fixing the backlog.

### Step 2.1 Resolve the fabricated review ratings  `[RESOLVED]`
- Removed `aggregateRating` and the `review` array from `Footer.tsx` and `reviews/page.tsx`. Both now emit `organizationSchema()` (a plain reference to the business, no rating claim) instead. Testimonials remain as plain visible page content only, not schema. `siteConfig.stats.rating`/`reviewCount` no longer feed any schema anywhere (confirmed by grep; they still drive a few purely visual trust badges, e.g. `TrustBadges.tsx`, `HomepageHero.tsx`, `Header.tsx`, which is a separate marketing-copy question out of this step's scope, not touched).

### Step 2.2 Centralize schema in one helper  `[RESOLVED]`
- New file `src/lib/schema.ts`: `organizationSchema()`, `websiteSchema()`, `areaOrganizationSchema()` (page-scoped, reuses the org `@id`), `serviceSchema()`, `breadcrumbSchema()`, `faqPageSchema()`.
- Migrated onto the helper: `Footer.tsx`, `reviews/page.tsx`, `locations/[slug]/[city]/page.tsx`, `locations/[slug]/page.tsx`, `services/[slug]/page.tsx`, and (extending the same cleanup for consistency, not separately asked for but the same class of fix) `faq/page.tsx` and `HomepageFAQ.tsx`. No inline hand-rolled `@graph`/`@type` literals remain in any page file; confirmed by grep for `"@context"`, only `schema.ts`'s 7 call sites remain.

### Step 2.3 Add Organization and WebSite entities with stable @id  `[RESOLVED]`
- `ORGANIZATION_ID = ${siteConfig.url}/#organization`, `WEBSITE_ID = ${siteConfig.url}/#website`, both stable. Every city, state, and service page's business mention reuses `ORGANIZATION_ID` (via `areaOrganizationSchema()`'s `@id` or `serviceSchema()`'s `provider: {"@id": ...}`) instead of repeating a bare name. Verified in built output: `#organization` resolves identically on the footer (every page), a city page, and the reviews page.

### Step 2.4 Add BreadcrumbList schema  `[RESOLVED]`
- Added to city, state, service, and reviews pages via `breadcrumbSchema()`, matching each page's visible breadcrumb trail. Verified in built HTML (El Cajon, CA: Home > Service Areas > California > El Cajon, 4 `ListItem`s).

### Step 2.5 Fix or remove broken schema assets  `[RESOLVED, art still needed]`
- Removed the `logo.png`/`og-image.jpg` references from `Footer.tsx`'s schema (both 404s; `public/` has no such files). No default `openGraph.images` added, since adding one without a real image would just create a new 404. **Still needed from Gareth:** a real logo and a default share image, then wire them into `organizationSchema()` and root `layout.tsx` metadata. Tracked as a standing gap, not re-added as a fake placeholder.

### Step 2.6 Fix NAP and offers  `[RESOLVED]`
- Decision: service-area Organization, no address. Removed `siteConfig.address` entirely (the placeholder "1 Pest Control Plaza, Dallas" street address), including from the **visible** footer (not just schema, since the same fake address was printed to every site visitor, not only asserted in structured data). Replaced with "Nationwide service, no walk-in office."
- Split city `areaServed` into `{"@type":"City", name, containedInPlace:{"@type":"State", name}}` instead of the bundled `"Fairbanks, AK"` string (audit finding M7).
- Service `Offer` now carries a real `priceRange` (e.g. `"$149 to $299"`, the site's own published pricing data) via schema.org's `priceRange` Text field, instead of a vague, unpriced `description: "Starting from..."`.

### Step 2.7 Remove dead links  `[RESOLVED, wider than scoped]`
- Removed `/blog` (as planned). Also found and fixed while verifying every footer href against real routes (the step's own acceptance criterion): 3 dead `/services/` links (`rodent-control`, `bed-bug-removal`, `commercial-pest-control` did not match any real service slug; repointed to `mice-control`, `bed-bug-treatment`, and the static `/commercial/` page respectively), and 2 legal links with no page at all (`/privacy-policy`, `/terms-of-service`), removed using the same precedent already set for `/blog`. **New standing item:** whether to build real privacy policy and terms of service pages is a legal-content decision, not folded into this SEO fix; flagged, not answered.

### Step 2.8 Low-priority hygiene batch  `[RESOLVED]`
- L1: removed dead `images.formats` from `next.config.ts`.
- L3: done via N2 (repo-wide dash sweep already covered `siteConfig.hours`).
- L4: deleted `SchemaOrganization`/`SchemaAddress` types (they modeled a single-address business, which the Step 2.6 decision rejected); `BreadcrumbItem` kept and wired into `schema.ts`.
- L5: only `faq/page.tsx` actually had the dead `Metadata` import (`contact/page.tsx` and `careers/page.tsx` did not); fixed.
- L6: `build_state.json` was already accurate; `CLAUDE.md`'s CURRENT STATUS section was stale (still said 2,101 cities from before chunk 88-89) and has been corrected to 2,151 cities, 51 state hubs, current template rotation, and today's date.

### Step 2.9 Add a build-time word-count guard  `[SCRIPT BUILT, NOT YET WIRED IN, by design]`
- New `scripts/check-word-counts.mjs`: reads each `src/data/cities/*.ts` file as text, extracts every city record as a plain object literal (bracket-matching plus a targeted strip of TypeScript `"..." as const` assertions), and checks intro + sections body word count against the record's tier floor. Also re-checks for the three Block 0 corruption patterns (mid-array `] = [`, lone-comma holes, stray `answer` field, numeric `population`) as a standing regression guard. Runnable on demand via `npm run check:words`.
- **Finding:** running it for the first time found **1,068 of 2,151 city records already below their tier floor** (pre-existing debt, not introduced this session), including several T1 pages (Seattle: 212 of 800 words; Virginia Beach: 252 of 800; Milwaukee: 266 of 800).
- Decision (Gareth): once fixed, the guard should be blocking (fail `npm run build`), not report-only. But wiring a blocking guard into `prebuild` today, with 1,068 unresolved violations, would fail every build immediately, including this Block 2 commit's own legitimate fixes. Decision (Gareth): keep the script built and validated now; add the actual `prebuild` wiring when Block 4 (below) starts closing the backlog toward zero.
- This finding is large enough that it is not just a guard-script footnote. See the new Block 4.

### Block 2 close-out
- `npm run build`, confirm compile and that the word-count guard passes or reports.
- Update the three tracking docs. Commit and push to `main`. Post changed live URLs as clickable markdown links.

---

## Block 3: Answer-first content for AI Overviews  `[OPUS]` design, `[SONNET]` bulk

**Goal:** rewrite page openings to front-load a direct answer, and rotate template headings, without creating new duplication. This is the GEO / AI Overview play and the one block where careless bulk edits are actively harmful. **Do not run the bulk on Sonnet without the Opus rubric in hand.**

### Step 3.1 Content rewrite rubric (intro answer-first + body depth)  `[OPUS rubric written 2026-07-02; SONNET bulk pending]`

Per Gareth's "do whatever is best for SEO and GEO" call, Block 3's intro work and Block 4's depth work are combined into ONE per-record pass (a thin record is opened once, its intro fixed and its body expanded together, then audited once). This rubric governs both. Opus has written it and produced a verified sample batch (see changelog); Sonnet executes the bulk against it, in state or tier batches.

**The one hard YMYL rule that overrides everything:** never introduce a pest fact that is not already established in that record's own `pestProfile`, `climateDriver`, `localHook`, `prevention`, or `faqs`. Expansion means writing fuller prose from facts The Geographer already verified for that city, reorganized and explained, not researching or inventing new claims (species, seasons, disease vectors, statistics). If a record genuinely lacks enough verified material to reach its floor, flag it for The Geographer rather than padding with invented facts.

**A. The answer-first opening (applies to every record, both blocks).**
- Sentence 1 of `intro` must directly answer "pest control in {city}": name the dominant local pest or pests and their timing, framed as what pest control here actually deals with. Do not open with pure geography ("{city} sits at the base of...", "{city} occupies the inland valley...").
- If the existing intro already leads answer-first (many do, e.g. Seattle, Birmingham), leave the opening and only expand depth. Do not rewrite for its own sake.
- Vary the sentence STRUCTURE across pages so 2,151 intros do not converge on "Pest control in {city} means dealing with {pest}." Rotate among at least these shapes, and let the city's real pest mix drive the wording:
  1. Direct-subject: "Pest control in {city} centers on {pest A} and {pest B}, both active {timing}."
  2. Problem-first: "In {city}, {pest} is the pest that drives most calls, because {one-clause local reason}."
  3. Contrast: "{city} pest control is less about {common assumption} and more about {real local driver}: {pest}, {pest}, {pest}."
  4. Seasonal: "By {season} in {city}, {pest} is the pressing problem; the rest of the year it is {pest}."
- The El Cajon record (`california.ts`, slug `el-cajon`) is the reference for the target: "Pest control in El Cajon reflects the Cajon Valley's warm inland San Diego County setting. Argentine ants are the dominant year-round indoor nuisance pest..."

**B. Body depth (applies to any record below its tier floor: T1 >= 800, T2 >= 500, T3 >= 350 body words, where body = intro + all sections[].body).**
- Add or lengthen `sections[]` entries until the record clears its floor with margin (aim ~10% over, so churn near the line does not reopen it). Prefer adding whole sections over bloating existing ones.
- Each section must earn its place with real, specific content drawn from the record's verified facts: one section can expand a single pest's biology and local drivers, another can lay out the seasonal calendar, another the moisture/soil/housing driver behind the local pressure, another what effective treatment and prevention actually look like here. The `pestProfile` notes, `climateDriver`, and `prevention` array are the raw material.
- Every new section `heading` must be city-specific and unique, not a templated string with the city swapped in (the template hard-coded headings are already handled by Step 3.2; these are the data-driven `sections[].heading`, which must stay unique). No new heading may duplicate another city's.
- Two records must still not share more than 15% of body copy (the existing anti-thin-content ceiling). Because expansion is driven by each city's distinct pest mix and drivers, this holds naturally; do not reuse sentences across cities.

**C. Per-record checklist Sonnet runs before moving on (all must pass):**
1. `npm run check:words` reports zero violations for the edited record.
2. Intro sentence 1 answers "pest control in {city}" (the direct-answer test).
3. No em dashes or en dashes; US English; no banned vocabulary (CLAUDE.md list).
4. Every pest claim traces to the record's pre-existing verified fields. No new species, seasons, or statistics.
5. Correct author persona retained; no Gareth name.
6. Batch-level: `npm run build` exits 0 and `npm run check:headings` still passes.

**Acceptance:** rubric plus a verified sample batch (done: Seattle T1, Birmingham T2, Buda T3, all now clear their floors and lead answer-first; see changelog). Sonnet then works state by state or tier by tier, T1 first.

### Step 3.2 Opus sets the template heading rotation  `[RESOLVED 2026-07-02, OPUS]`
- Done. New `src/components/templates/headings.ts` holds a `heading(city, key)` helper and 4 natural-language variants for every hard-coded H2 across all 5 templates (22 heading slots total), chosen by a slug hash salted with the heading key so headings rotate independently and stably. All 5 templates now call `heading(city, ...)` instead of a fixed string. Data-driven headings (`sections[].heading`, FAQ questions) were already unique and are left alone.
- Also fixed Template B's generic H1 (`"{city} Pest Control You Can Trust"`, which the audit flagged as burying the query) to the keyword-forward `"Trusted Pest Control in {city}, {ST}"`, applied on all 428 B pages.
- New guard `scripts/check-heading-distribution.mjs` (`npm run check:headings`, and wired into `prebuild` so it blocks the build if it ever regresses) replays the render-time rotation over all 2,151 records and confirms no variant exceeds the 30% per-bucket ceiling. Current worst is 28.7% (`D.whichPests`). This guard passes today, so unlike the word-count guard it is already build-blocking.
- **Note:** the guard hard-codes 4 variants per key to match `headings.ts`. If a key's variant count ever changes, update `VARIANT_COUNT` handling in the guard too.

### Step 3.3 Sonnet executes the bulk against the rubric  `[SONNET, gated]`
- Apply the intro rewrites (3.1) and heading rotation (3.2) across all city records and templates, strictly following the Opus rubric.
- Every rewritten page passes the Auditor gate: uniqueness, word floor, banned vocabulary, dash ban, US English, factual accuracy against `pestProfile`, and the direct-answer check ("does sentence one answer the query").
- Do this in tier or state batches, not all at once, so each batch can be audited before the next.
- **Acceptance per batch:** Auditor gate passes; fingerprint audit shows no DOM or heading cluster over the bucket threshold; a sample of intros reads naturally and answers the query first.

### Step 3.4 Make "answer-first" a standing Auditor check  `[SONNET]`
- Add the direct-answer check to the Auditor's checklist for all future page batches, so new pages ship answer-first by default (this is the durable GEO win from the brief).

### Block 3 close-out
- Build, audit, update docs, commit and push to `main` per batch. Post changed live URLs as clickable markdown links each time.

---

## Block 4: Content depth remediation `[NEW, added 2026-07-02]` `[OPUS]` design, `[SONNET]` bulk

**Goal:** clear the 1,068-record word-count backlog found by Step 2.9's guard (`npm run check:words`), so the guard can go from advisory to blocking without breaking every future build. This is real prose generation touching pest facts (YMYL), so it follows the same Opus-designs / Sonnet-executes-against-a-rubric-and-gate split as Block 3, not a blind bulk pass.

### Step 4.1 Opus scopes and prioritizes the backlog  `[OPUS]`
- Run `npm run check:words` for the current, authoritative list (it will drift as other work touches city data; do not reuse a stale count).
- Prioritize T1 first (highest traffic value, and the worst offenders: Seattle 212/800, Virginia Beach 252/800, Richmond 264/800, Milwaukee 266/800, Madison 245/800, Norfolk 246/800), then T2, then T3.
- For each thin record, decide the fix per record: expand `sections[]` with genuine additional local detail (preferred, matches The Geographer's uniqueness model), or, only if a record is close to floor, expand `intro`. Do not pad with generic filler; every added sentence must carry a real, place-specific fact, consistent with the anti-thin-content rules in `CLAUDE.md`.
- Produce a rubric and 10 to 15 hand-written model expansions across different states and tiers for Sonnet to match the standard of.

### Step 4.2 Sonnet executes the bulk against the rubric  `[SONNET, gated]`
- Expand records in state or tier batches, not all 1,068 at once, so each batch can be checked before the next.
- Every batch passes: `npm run check:words` (zero violations in that batch), the Auditor gate (uniqueness, banned vocabulary, dash ban, US English, factual accuracy against `pestProfile`), and a full `npm run build`.
- **Acceptance per batch:** `check:words` shows zero remaining violations for the records touched in that batch.

### Step 4.3 Wire the guard into `prebuild` once the backlog is at zero  `[SONNET]`
- Add `"prebuild": "node scripts/check-word-counts.mjs"` to `package.json` only once `npm run check:words` exits 0 against the full corpus. From that point, any future thin record fails the build instead of shipping silently.

### Block 4 close-out
- Build, update docs, commit and push to `main` per batch. Post changed live URLs. Once complete, update this plan's Step 2.9 entry to note the guard is now blocking.

---

## Explicitly NOT in scope (per the 29 June brief)

Do not spend effort on these; the brief confirms they do not help on Google's current system:
- No AI-specific schema beyond standard structured data.
- No AI-specific content chunking.
- No paid brand mentions on low-quality domains (flagged black-hat, low effectiveness).
- (`llms.txt` was originally listed here too, since Google does not read it for ranking. Overridden per standing instruction: other AI systems do read it and it drives real traffic. See Step 1.6, already done.)

## Watch items (monitor, do not build yet)
- GSC page indexing report has been stale since 11 June; do not use it to judge indexation of the newly discoverable city pages for the next few weeks. Use URL Inspection for spot checks.
- Open Knowledge Format (Marie Haynes): early and unproven; keep watching, do not build.
- Agent content-refresh workflow (Ahrefs pattern): worth speccing as its own future block for stale pricing and seasonality; not part of this remediation.

---

## Model summary (quick reference)

| Block | Steps | Model | Status |
|---|---|---|---|
| 0 Build restoration | 0.1 to 0.3 | Sonnet (done on Opus) | Done 2026-07-02 |
| 1 Discoverability | 1.1 to 1.6 | Sonnet | Done 2026-07-02 |
| N1 Missing state hubs | 8 hub records | **Opus** (YMYL content) | Done 2026-07-02 |
| N2 Dash sweep | repo-wide | Sonnet | Done 2026-07-02 |
| 2 Trust and schema | 2.1 to 2.9 | Sonnet | Done 2026-07-02 (2.9 guard built, wiring deferred to Block 4) |
| 3 Answer-first content | 3.1, 3.2 rubric and rotation | **Opus** | Not started |
| 3 Answer-first content | 3.3, 3.4 bulk and gate | Sonnet, only against the Opus rubric | Not started |
| 4 Content depth remediation | 4.1 rubric and priority | **Opus** | Not started |
| 4 Content depth remediation | 4.2, 4.3 bulk and guard wiring | Sonnet, only against the Opus rubric | Not started |

**Order of impact:** Block 1 first (makes the money pages findable), done. Block 2 (removes the spam-policy risk), done. Blocks 3 and 4 remain: both win AI Overview citations and content quality, and both need Opus to design the rubric before Sonnet touches thousands of pages. They can run in either order or interleaved by state, since they touch different fields (Block 3: intros and headings; Block 4: body sections and word count) on overlapping records.

---

## Newly discovered findings (raised this session, awaiting decisions)

### N1. Eight states have city pages but no parent state hub page `[RESOLVED 2026-07-02, OPUS]`
- `delaware, district-of-columbia, kentucky, maryland, nebraska, north-dakota, south-dakota, west-virginia` had city pages but no record in `src/data/locations.ts`, so `/locations/{state}/` returned notFound and every child city's breadcrumb and parent link 404'd.
- Decision (Gareth): build full-content hubs now. Done on Opus: added 8 `LocationState` records with accurate regional pest facts (YMYL-checked) and real city lists. All 51 hubs now exist, 0 missing. See changelog N1.

### N2. Em dash and en dash violations across the codebase `[RESOLVED 2026-07-02, SONNET]`
- Decision (Gareth): dedicated sweep now. Done: 251 em dash and 88 en dash occurrences replaced across 33 files. Page `<title>` strings using a "Brand, Subtitle" em-dash pattern got a colon (reads as a title/subtitle separator); everything else (prose asides, aria-labels, list items, CSS comments) got a comma; numeric/time ranges (en dash) got "to" spelled out. `priceRange` values changed format (`"$149 to $299"`), so the one place that parsed the old en dash character as a delimiter (`services/[slug]/page.tsx`, the schema `Offer.description`) was updated to split on `" to "` instead, verified against the build. Two JSX lines had the dash as the first character of its own line (a continuation from the previous line); those were restructured by hand instead of scripted, to avoid a stray space before the new punctuation. Zero em or en dashes remain anywhere under `src/`. See changelog N2.

### N3. Guard against append corruption recurring `[SONNET]`
- Block 0 fixed corruption introduced by a data-append step. To stop it recurring, add a `prebuild` check (or a tiny test) that fails if any `src/data/cities/*.ts` contains a lone-comma line, a mid-array `] = [`, a `population:` number, or an `answer` key inside a `sections` entry. Low effort, high protection. Recommend adding during Block 2.

---

## Changes made and why (changelog)

Newest first. Written so entries can be lifted into routine build prompts. Format: finding ID, files and lines, what changed, why.

### Session 2026-07-02 (Opus): Block 3.1 / Block 4 rubric + verified sample batch

**Wrote the combined content rewrite rubric** (see Step 3.1 above): one per-record pass that fixes the intro to lead answer-first AND expands the body to its tier word floor, with a hard YMYL rule that expansion may only draw on facts already verified in that record's `pestProfile`/`climateDriver`/`localHook`/`prevention`/`faqs`, never new claims.

**Produced and verified a 3-record sample batch** proving the rubric at each tier:
- `src/data/cities/washington.ts` slug `seattle` (T1): intro already led answer-first, so left the opening and added 4 sections (rat biology and exclusion, a seasonal calendar, the moisture through-line, and what effective local control looks like), drawn entirely from the record's existing pest profile. Body 212 to 882 words (floor 800).
- `src/data/cities/alabama.ts` slug `birmingham` (T2): intro already answer-first; added 3 sections (German cockroaches in older/multi-family housing, daytime mosquitoes and bed bugs, and what a year-round plan covers). Body 252 to 595 words (floor 500).
- `src/data/cities/texas.ts` slug `buda` (T3): intro led with comparison framing, not the query, so rewrote sentence 1 to "Pest control in Buda comes down to two pests..." keeping the comparison voice; added 1 section on the secondary pests. Body 272 to 446 words (floor 350).
- All three verified: `npm run check:words` now reports zero violations for them, intros lead answer-first, no dashes, US English, no banned vocabulary, facts all trace to pre-existing fields, personas retained, `npm run build` exit 0, `check:headings` still passes. Rendered HTML confirmed (new unique section headings coexist with the rotated template headings; Buda's new opener renders).

**New finding surfaced (pre-existing content debt, for Block 4's audit pass):** the banned-vocabulary rule is violated across the existing city corpus, not just the new work. A quick grep found 75 occurrences of "comprehensive" alone in `src/data/cities/*.ts` (plus the em-dash and word-count debt already tracked). Block 4's per-record Auditor pass (Step 4.2) should strip banned vocabulary from each record it touches; a full standalone banned-word sweep like N2 could be added later if desired. Not fixed this session.

### Session 2026-07-02 (Opus): Block 3 Step 3.2 template heading rotation

**3.2 Rotated every hard-coded template H2 across 4 variants.**
- New `src/components/templates/headings.ts`: a `heading(city, key)` helper plus `HEADING_VARIANTS`, 4 natural-language variants for each of the 22 hard-coded heading slots across the 5 templates. The variant is chosen by `hash(city.slug + "::" + key) % 4`, so the same city always renders the same heading (no rebuild churn), each heading rotates independently of the others (the key is part of the hash), and each variant lands on roughly 25% of a template's pages.
- `CityTemplateA.tsx` (6 slots), `CityTemplateB.tsx` (3), `CityTemplateC.tsx` (3), `CityTemplateD.tsx` (5), `CityTemplateE.tsx` (4): every previously hard-coded H2 (e.g. A's "The pests that matter in {city}", "What treatment costs here") now calls `heading(city, ...)`. Data-driven headings (`sections[].heading`, FAQ questions) were already unique per city and are untouched.
- Why: each of those H2s previously appeared on ~100% of its template's ~430 pages with only the city token varying, breaching the project's own 30%-per-variant rule (workforce/seo/the-optimizer.md) and feeding the scaled-content fingerprint the June 2026 spam update targets.

**Template B H1 keyword fix (audit finding H3).**
- `CityTemplateB.tsx`: changed the H1 from `"{city} Pest Control You Can Trust"` (generic, did not lead with the query) to `"Trusted Pest Control in {city}, {stateAbbr}"`, applied on all 428 B pages. This front-loads the primary local keyword in the H1, which A/C/E already did and B did not.

**New guard.**
- `scripts/check-heading-distribution.mjs` (`npm run check:headings`) replays the rotation over all 2,151 records and fails if any variant exceeds 30% of its template bucket. Wired into `package.json`'s `prebuild`, so it now blocks the build on regression. It passes today (worst variant 28.7%, `D.whichPests`), so making it build-blocking is safe now (unlike the word-count guard, which waits for Block 4).
- Verified: `tsc` clean, `npm run build` exit 0, `npm run check:headings` passes, spot-checked rendered HTML across several Template A cities (Austin vs El Cajon show different variants for the same slots) and confirmed the new B H1 on 428 pages with the old string gone.

### Session 2026-07-02 (Sonnet): Block 2 trust and schema, plus a link/hygiene sweep

**Trailing-slash gap closed (addendum to Step 1.5).** Step 1.5 only normalized absolute canonical/OG URLs; it missed relative internal `<Link href>` navigation built from template literals. Found and fixed 6: `parts.tsx` (breadcrumb state link, pest service link), `services/[slug]/page.tsx` (related service link), `services/page.tsx` (service card link), `locations/[slug]/page.tsx` (service link), `locations/page.tsx` (state card link). All now end with `/` to match `trailingSlash: true`.

**2.1 Removed fabricated review-rating schema.**
- `src/components/layout/Footer.tsx`: removed `aggregateRating` from the sitewide `PestControlService` schema (rendered on every page).
- `src/app/reviews/page.tsx`: removed `aggregateRating` and the `review` array (5 `Review` nodes with `reviewRating`) from the page schema.
- Why: neither was backed by real, auditable reviews (decision: Gareth). A self-served rating asserted in structured data with no real reviews behind it is the exact pattern Google's review-spam guidance restricts, and the three prior copies disagreed (12,400+ / 12400 / 12847).

**2.2, 2.3, 2.4 New `src/lib/schema.ts`, one Organization identity, BreadcrumbList everywhere.**
- Added `organizationSchema()`, `websiteSchema()`, `areaOrganizationSchema()`, `serviceSchema()`, `breadcrumbSchema()`, `faqPageSchema()`.
- Migrated `Footer.tsx`, `reviews/page.tsx`, `locations/[slug]/[city]/page.tsx`, `locations/[slug]/page.tsx`, `services/[slug]/page.tsx`, `faq/page.tsx`, `HomepageFAQ.tsx` onto it. City/state/service business mentions now reuse one stable `@id` (`https://pestremovalusa.com/#organization`) instead of each page repeating an unlinked bare name.
- Added `BreadcrumbList` schema to city, state, service, and reviews pages, matching each page's visible breadcrumb trail (previously breadcrumbs existed only in the UI, with no structured data).
- Added `FAQPage` schema to the state page for the first time: it had a real, visible 4-question FAQ section with no structured data at all. The FAQ array (previously duplicated inline in the JSX) was extracted to a `stateFaqs` constant used by both the schema and the render, so they cannot drift apart.

**2.5 Removed broken schema asset references.**
- `Footer.tsx`: removed `logo` and `image` fields pointing at `/logo.png` and `/og-image.jpg`, neither of which exists in `public/` (both 404). No default OG image was added in their place, since a fake reference is the exact problem being fixed. Still needs real brand art from Gareth.

**2.6 Modeled the business as a service-area Organization; fixed areaServed and offers.**
- `src/config/site.ts`: deleted the `address` field entirely (the placeholder "1 Pest Control Plaza, Dallas, TX 75201").
- `Footer.tsx`: removed `address` from the schema, and replaced the **visible** `<address>` block (shown to every site visitor, not just search engines) with "Nationwide service, no walk-in office." This went beyond the plan's literal schema-only scope because the same fake address was displayed as real page content, not only asserted in structured data; leaving it visible while calling it fake in schema would have been inconsistent.
- `locations/[slug]/[city]/page.tsx`: `areaServed` now splits `{"@type":"City", name, containedInPlace:{"@type":"State", name}}` instead of bundling `"Fairbanks, AK"` as one City name string (audit finding M7).
- `services/[slug]/page.tsx` / `src/lib/schema.ts`: the `Offer` now carries a real `priceRange` (the site's own published per-service pricing, e.g. `"$149 to $299"`) via schema.org's `priceRange` field, instead of an unpriced, vague `"Starting from..."` description.

**2.7 Removed dead links, wider than the original `/blog` scope.**
- `Footer.tsx`: removed `/blog` (as planned), plus 3 more dead `/services/` links found while verifying every footer href against real routes (the step's own acceptance criterion): `rodent-control` and `bed-bug-removal` didn't match any real service slug (repointed to the real `mice-control` and `bed-bug-treatment` pages), and `commercial-pest-control` isn't a service slug at all (repointed to the real static `/commercial/` page). Also removed `/privacy-policy` and `/terms-of-service`, which had no route at all, using the same remove-rather-than-leave-broken precedent the plan already set for `/blog`. Building real legal pages is a separate, unanswered decision, not folded into this fix.

**2.8 Hygiene batch.**
- `next.config.ts`: removed dead `images.formats` (no effect under `images.unoptimized: true`).
- `src/types/index.ts`: deleted `SchemaOrganization`/`SchemaAddress` (modeled a single-address business, which 2.6 rejected); kept and wired in `BreadcrumbItem`.
- `src/app/faq/page.tsx`: removed the unused `import type { Metadata }` (the other two named files, `contact/page.tsx` and `careers/page.tsx`, did not actually have this dead import).
- `CLAUDE.md`: CURRENT STATUS section was stale (2,101 cities, pre chunk-88-89 figures); corrected to 2,151 cities, 51 state hubs, current template rotation (A=442, B=429, C=427, D=415, E=438), today's date.

**2.9 Built and validated the word-count guard; did not wire it into the build yet.**
- New `scripts/check-word-counts.mjs` and `npm run check:words`. Extracts every city record from the raw `.ts` source (bracket-matching plus a targeted strip of `"..." as const` TypeScript assertions) without needing to resolve TypeScript module imports, computes intro-plus-sections body word count, and checks it against the record's T1/T2/T3 floor. Also re-checks for the three Block 0 corruption patterns as a standing regression guard.
- Found 1,068 of 2,151 records already below floor, pre-existing debt. Decision (Gareth): the guard should eventually block the build, but wiring that in today would fail this commit's own unrelated fixes too, so the script ships now and the `prebuild` wiring is deferred to the new Block 4. See Block 4 above and Step 2.9's entry for the full reasoning.

**Verification for this session:** `tsc --noEmit` clean, `npm run build` exit 0 (2,241 pages), `npm run lint` shows only pre-existing warnings/errors in files not touched beyond dash content (confirmed via `git diff` against the pre-N2 commit), spot-checked the built HTML for: zero `aggregateRating` anywhere, zero broken asset references, one consistent `#organization` `@id` across footer/city/reviews pages, correct split `areaServed` on a city page, a valid 4-item `BreadcrumbList`, the fake address gone from the visible footer, and the corrected `priceRange` on a service page.

### Session 2026-07-02 (Sonnet): N2 dash sweep + branch topology fix

**Branch topology note (no code change, recorded for the record).** At the start of this Sonnet session, `claude/pest-control-seo-audit-ribgjd` was one commit behind `main`: the prior N1 commit had landed only on `main` because a `git checkout main` earlier in that turn was never reverted to the feature branch before the N1 commit was made. This session's working tree therefore started without N1's 8 state hubs. Found via a locations.ts content check that returned 0 matches for the new state slugs after a git-history discrepancy showed up mid-task. Fixed by stashing the in-progress N2 edits, fast-forwarding the feature branch onto `main` (a strict ancestor relationship, safe fast-forward, confirmed via `git merge-base --is-ancestor`), then restoring the stash. No conflicts; verified with a full rebuild before proceeding.

**N2 Repo-wide em dash and en dash sweep.**
- Ran a scripted sweep across all `src/**/*.{ts,tsx,css}` (33 files): 251 em dash occurrences and 88 en dash occurrences replaced.
- 12 page `<title>`/`openGraph.title` strings that joined the brand and a subtitle with an em dash (`services/[slug]/page.tsx`, `services/page.tsx`, `locations/page.tsx`, `emergency/page.tsx`, `reviews/page.tsx` x2, `commercial/page.tsx`, `careers/layout.tsx`, `contact/layout.tsx`, `financing/page.tsx`, `faq/layout.tsx`, `residential/page.tsx`) changed to a colon separator, e.g. `"PestRemovalUSA: Licensed Technicians Nationwide"`.
- All other em dashes (prose asides, aria-labels, list items, CSS comments in `globals.css`) changed to a comma.
- All en dashes in numeric and time ranges (dollar amounts, minute ranges, clock times) changed to a spelled-out `"to"`, e.g. `"$150 to $450"`.
- `src/data/services.ts`: every `priceRange` field changed from an en-dash-separated range to a `"to"`-separated one, e.g. `"$149 to $299"`. This is parsed by code, not just displayed, so `src/app/services/[slug]/page.tsx` (the `Offer.description` schema field) was updated to split on `" to "` instead of the old en dash character, to match.
- Two JSX lines had the dash as the first non-whitespace character of its own line (a sentence continuing from the previous line via a plain multi-line text run or a `{" "}` spacer): `src/app/about/page.tsx` (moved the comma to the end of the prior line instead) and `src/app/services/[slug]/page.tsx` (restructured "same-day re-service" with "with" instead of a leading dash, since a `{" "}` spacer preceded it and a leading comma would have rendered with a stray space before it). Both verified in the built HTML output.
- Why: `CLAUDE.md`'s dash ban is absolute ("never use em dashes or en dashes anywhere, ever... not anywhere"). Decision (Gareth): dedicated sweep now rather than folding into Block 2 or deferring.
- Verified: `tsc --noEmit` clean, `npm run build` exits 0 (2,241 pages), zero em or en dashes remain under `src/`, spot-checked rendered HTML for the title-colon conversion, the priceRange "to" conversion, and both hand-fixed leading-dash lines.

### Session 2026-07-02 (Opus): Block 0 build restoration + Block 1 discoverability

**F0 (Block 0) Build was fully broken; now compiles.**
- `src/data/cities/florida.ts` (~10614), `src/data/cities/virginia.ts` (~5308): removed stray `] = [` and lone `,` that split the array into an invalid `[...] = [...]` assignment. This was the cause of the `Cannot assign to this` / TS2364 errors across all data files.
- `src/data/cities/{ohio,washington,new-jersey,tennessee,north-carolina,new-york,pennsylvania}.ts`: removed a lone `,` line before `// Chunk 86 additions` (sparse-array hole that would spread `undefined` into `cities`).
- `src/data/cities/florida.ts:10668`: removed stray `answer: ""` from a `CitySection`.
- `src/data/cities/{ohio,washington,virginia,michigan,pennsylvania,texas}.ts`: converted 11 numeric `population` values to the standard `"~NN,NNN"` string form.
- Why: `npm run build` (and CI) failed to compile at all, so nothing could deploy. Now `npm run build` exits 0, generates 2,150 city pages, and `tsc --noEmit` passes with 0 errors.

**C1 (Step 1.1) City pages added to the shipping sitemap.**
- `src/app/sitemap.ts`: imported `cities`, added `cityRoutes` (priority by tier, trailing slash), added state/service trailing slashes, and a final normalizer so every entry (except the bare domain) ends with `/`.
- Why: the ~2,151 city pages, the commercial core, were absent from the deployed sitemap. Sitemap now holds 2,229 URLs.

**Step 1.2 Retired the dead next-sitemap path.**
- `package.json`: removed the `postbuild` next-sitemap script and the `next-sitemap` dependency. Deleted `next-sitemap.config.js`. Cleaned the now-moot `/public/sitemap*.xml` and `/public/robots.txt` lines from `.gitignore`. Synced `package-lock.json`.
- Why: next-sitemap wrote to `public/` after the static export had finished, so its output never shipped. The native `src/app/sitemap.ts` and `src/app/robots.ts` are now the single source of truth.

**C2 (Step 1.3) State pages now link to their real city pages.**
- `src/app/locations/[slug]/page.tsx`: imported `getCitiesByState`, computed `stateCities`, and render each as a real `<Link>` to `/locations/{stateSlug}/{slug}/` (list all). Falls back to the old name list only if a state has no city records.
- Also fixed an em dash in the state page `<title>` (the brand and "Licensed" used to be joined with an em dash) and gave the state canonical, OG url, and schema url the trailing slash.
- Why: city pages were orphaned (state page rendered names as non-clickable divs). Florida state page now links all 113 of its city pages.

**H2 (Step 1.4) Fixed broken cross-state nearby-city links.**
- `src/types/index.ts`: added optional `stateSlug?` to `CityRef`.
- `src/components/templates/parts.tsx`: added `resolveNearbyHref` (use explicit `stateSlug` if present, else look up the slug in the corpus and use it only if unambiguous, else drop the link) and a corpus index built once at module load. `NearbyCities` now filters unresolved links instead of always using the current city's `stateSlug`.
- Why: nearby entries pointing to other states produced 404s. Burlington VT now links Manchester (NH) and Providence (RI) correctly and drops the ambiguous "albany" rather than 404.

**Step 1.5 Normalized canonicals to trailing slash.**
- `src/app/locations/[slug]/[city]/page.tsx` (metadata + schema url), `src/app/locations/[slug]/page.tsx`, and 11 static/service route files: every `canonical` and `openGraph.url` path now ends with `/` to match `trailingSlash: true`.
- Why: self-canonicals that omit the served trailing slash are a minor duplicate-signal wart.

**Step 1.6 Added llms.txt.**
- `public/llms.txt`: generated from real data (23 services, state hubs, key pages, sitemap, AI notes). No em dashes. Regenerated after N1 to list all 51 state hubs.
- Why: overrides the audit's "skip it"; other AI systems read llms.txt and it drives traffic.

**N1 Built 8 missing state hub pages (Opus).**
- `src/data/locations.ts`: added `LocationState` records for `delaware, district-of-columbia, kentucky, maryland, nebraska, north-dakota, south-dakota, west-virginia`, each with real cities and an accurate, YMYL-checked regional pest fact (for example DC rats, Maryland stink bugs and Asian tiger mosquito, North Dakota pothole mosquitoes). All `topPests` map to existing service slugs.
- Why: those 8 states had ~2,150-corpus city pages whose breadcrumbs and new parent links pointed at a 404 `/locations/{state}/`. Now all 51 hubs exist, are in the sitemap, and link their real city pages. Build 2,233 to 2,241 pages.

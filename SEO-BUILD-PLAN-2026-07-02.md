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

## Block 1: Discoverability (highest impact, lowest risk)

**Goal:** make the ~2,151 city pages findable by Google. All Sonnet-safe.

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

### Block 1 close-out
- `npm run build`, confirm compile.
- Update `BUILD-PLAN.md`, `build_state.json` (reconcile the city count, see L6), `MEMORY.md`.
- Commit and push to `main`. Post the changed live URLs (state pages, sitemap, a sample of city pages) as clickable markdown links.

---

## Block 2: Trust and schema

**Goal:** remove the fabricated-rating risk and make structured data clean and entity-linked. Mostly Sonnet, with one Gareth decision and a small refactor.

### Step 2.1 Resolve the fabricated review ratings  `[DECISION: GARETH]`
- **Question for Gareth:** "Are the 4.9 star rating and the ~12,400 review count backed by real, auditable reviews we can produce on request, yes or no?"
- **If NO (safe default):** remove all `aggregateRating` and hardcoded `Review` schema. Keep testimonials as plain page content with no rating markup.
  - Files: `src/components/layout/Footer.tsx:135`, `src/app/reviews/page.tsx:161`, and stop feeding `siteConfig.stats.rating` / `reviewCount` into any schema (`src/config/site.ts:35`).
- **If YES:** wire all three locations to one source of truth so the numbers match exactly, and only mark up reviews that genuinely exist.
- **Acceptance:** no schema node asserts a rating that is not backed by real reviews; the three previously-conflicting counts (12,400+, 12400, 12847) no longer disagree.

### Step 2.2 Centralize schema in one helper  `[SONNET]`
- **New file:** `src/lib/schema.ts`
- Move the hand-rolled JSON-LD from the city page, state page, service page, reviews page, and footer into small builder functions here. This is the enabling refactor for 2.3, 2.4, 2.5 and prevents future drift.
- **Acceptance:** each page imports its schema from `schema.ts`; no inline `@graph` literals remain in the page files.

### Step 2.3 Add Organization and WebSite entities with stable @id  `[SONNET]`
- In `schema.ts`, define one canonical `Organization` node and one `WebSite` node, each with a stable `@id` (for example `${url}/#organization`, `${url}/#website`).
- Every `LocalBusiness`, `Service.provider`, and city business node references the organization by `@id` instead of repeating a bare `name`.
- **Acceptance:** validate a city page in a schema validator; all business nodes reconcile to one entity by `@id`; one `Organization` and one `WebSite` present.

### Step 2.4 Add BreadcrumbList schema  `[SONNET]`
- **Files:** city and state schema builders in `schema.ts`, mirroring the UI trail in `parts.tsx:10` (Home > Service Areas > State > City).
- **Acceptance:** city and state pages emit a valid `BreadcrumbList` matching the visible breadcrumb.

### Step 2.5 Fix or remove broken schema assets and add OG image  `[SONNET / needs art]`
- Remove the `logo.png` and `og-image.jpg` references from schema **until** real assets exist (`Footer.tsx:107`). If Gareth can supply a logo and a default share image, add them to `public/` and set a default `openGraph.images` in `src/app/layout.tsx`.
- **Acceptance:** no schema field points at a 404; if assets supplied, share preview renders an image.

### Step 2.6 Fix NAP and offers  `[DECISION: GARETH for the facts, then SONNET]`
- **Question for Gareth:** "Is there a real single business address, and are there real starting prices per service? If not, we model the business as a service-area organization with no single storefront and drop the price fields."
- Split `areaServed` city and region so a City node is not `"Fairbanks, AK"` (`[city]/page.tsx:50`).
- Give the service `Offer` a real `priceRange` or remove the price fields (`services/[slug]/page.tsx:76`).
- **Acceptance:** no placeholder address asserted as a real storefront; offers are either validly priced or carry no price claim.

### Step 2.7 Remove dead footer links  `[SONNET]`
- Remove `/blog` and any other footer links with no route (`Footer.tsx:81`). If Gareth wants the blog, that is a separate future block.
- **Acceptance:** no footer link 404s; verify by walking footer hrefs against generated routes.

### Step 2.8 Low-priority hygiene batch  `[SONNET]`
- L1: remove dead `images.formats` from `next.config.ts` (no effect under `unoptimized`).
- L3: replace the en dash in `siteConfig.hours` with "to" (dash ban).
- L4: wire `SchemaOrganization` / `SchemaAddress` types into `schema.ts` or delete them.
- L5: remove the unused `Metadata` imports in `faq/page.tsx`, `contact/page.tsx`, `careers/page.tsx`.
- L6: reconcile the city count (grep shows ~2,151; docs say 2,101) and correct `build_state.json`, `CLAUDE.md`, `MEMORY.md`.

### Step 2.9 Add a build-time word-count guard  `[SONNET]`
- Add a check (a small script run in `prebuild`, or a test) that computes body word count per city record and fails the build if a T1 is under 800, T2 under 500, or T3 under 350 words.
- **Acceptance:** the guard runs on build and reports any under-floor records. If any fail, list them for a later content pass; do not silently pass.

### Block 2 close-out
- `npm run build`, confirm compile and that the word-count guard passes or reports.
- Update the three tracking docs. Commit and push to `main`. Post changed live URLs as clickable markdown links.

---

## Block 3: Answer-first content for AI Overviews  `[OPUS]` design, `[SONNET]` bulk

**Goal:** rewrite page openings to front-load a direct answer, and rotate template headings, without creating new duplication. This is the GEO / AI Overview play and the one block where careless bulk edits are actively harmful. **Do not run the bulk on Sonnet without the Opus rubric in hand.**

### Step 3.1 Opus writes the intro rewrite rubric  `[OPUS]`
- **Why Opus:** the fix is to make each intro's first sentence directly answer "pest control in {city}" while keeping structural variety (so 2,151 pages do not converge on one opening pattern) and keeping every pest claim factually correct (YMYL). That is judgment, not find-and-replace.
- Opus produces: (a) a rubric with three or more distinct opening structures that all front-load the answer, (b) an explicit anti-duplication rule (no shared opening template across pages), (c) a factual-accuracy checklist tied to each city's `pestProfile`, and (d) 15 to 20 hand-written model rewrites across different states and tiers. El Cajon (`california.ts:7236`) is the reference for the target pattern.
- **Acceptance:** rubric plus sample batch reviewed; sample shows varied openings that each answer the query in sentence one, with no shared template.

### Step 3.2 Opus sets the template heading rotation  `[OPUS]`
- **Why Opus:** heading rotation must stay inside the anti-penalty engine (five templates, 15 to 25 percent bucket bands, fingerprint audit) and read naturally.
- For each template's hardcoded H2s (`CityTemplateA.tsx:35` and the equivalents in B, C, D, E), Opus defines two or three natural-language variants and a slug-hash rotation so no single H2 string appears on more than 30 percent of a variant's pages (the project's own rule).
- **Acceptance:** variant sets defined; a dry-run over all slugs shows no H2 string exceeding the 30 percent bucket threshold.

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

## Explicitly NOT in scope (per the 29 June brief)

Do not spend effort on these; the brief confirms they do not help on Google's current system:
- No `llms.txt` file (Google does not read it for AI ranking).
- No AI-specific schema beyond standard structured data.
- No AI-specific content chunking.
- No paid brand mentions on low-quality domains (flagged black-hat, low effectiveness).

## Watch items (monitor, do not build yet)
- GSC page indexing report has been stale since 11 June; do not use it to judge indexation of the newly discoverable city pages for the next few weeks. Use URL Inspection for spot checks.
- Open Knowledge Format (Marie Haynes): early and unproven; keep watching, do not build.
- Agent content-refresh workflow (Ahrefs pattern): worth speccing as its own future block for stale pricing and seasonality; not part of this remediation.

---

## Model summary (quick reference)

| Block | Steps | Model |
|---|---|---|
| 1 Discoverability | 1.1 to 1.5 | Sonnet |
| 2 Trust and schema | 2.1 decision, then 2.2 to 2.9 | Sonnet (2.1 and 2.6 need a Gareth fact first) |
| 3 Answer-first content | 3.1, 3.2 rubric and rotation | **Opus** |
| 3 Answer-first content | 3.3, 3.4 bulk and gate | Sonnet, only against the Opus rubric |

**Order of impact:** Block 1 first (makes the money pages findable), then Block 2 (removes the spam-policy risk), then Block 3 (wins AI Overview citations). Blocks 1 and 2 are safe for a Sonnet-only session. Block 3 needs Opus before Sonnet touches the 2,151 pages.

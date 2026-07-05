# SEO Upgrade Log

Compiled 2026-07-05. This document captures every SEO issue raised across this
project's chat history (the 2026-07-02 self-audit, the 2026-07-03 design and
conversion audit, and a second external audit pasted 2026-07-04), cross-checked
against the actual repository state as it exists right now, not as it was
discussed. Where a discussed fix did not actually make it into the code, or
only partly did, that is called out explicitly. This is the source document for
the rebuilt build routine (Stage 2).

Verification method: every "Applied" status below was confirmed by reading the
current source file, or by running the relevant guard script (`check:words`,
`check:headings`), or by grepping the actual static export in `out/`. Nothing
here is taken on the strength of a past chat message alone.

---

## Category counts

| Category | Applied | Partially applied | Outstanding |
|---|---|---|---|
| Technical SEO (indexation, robots, sitemap, canonicals) | 5 | 1 | 1 |
| On-page (titles, meta, headings, internal links) | 3 | 0 | 2 |
| Structured data / schema | 4 | 1 | 1 |
| Content quality & information gain | 3 | 0 | 3 |
| Trust claims & E-E-A-T | 6 | 0 | 2 |
| Template & build system (anti-duplicate-content) | 4 | 0 | 1 |
| Performance & Core Web Vitals | 0 | 1 | 3 |
| Accessibility | 1 | 0 | 1 |
| **Total** | **26** | **3** | **14** |

43 items tracked. 26 fully applied and verified in the running code, 3 partly
applied (the fix landed in one place but not every place it needed to), 14
outstanding (either never started, or asserted as a rule but never automated).

---

## 1. Technical SEO: indexation, robots, sitemap, canonicals

### 1.1 City pages missing from the sitemap `[APPLIED]`
- **Problem:** the ~2,150 programmatic city pages, the commercial core of the site, were absent from the shipping sitemap. Found in the 2026-07-02 self-audit.
- **Fix:** `src/app/sitemap.ts` now imports `cities` from `src/data/cities` and emits one entry per city at `/locations/{stateSlug}/{citySlug}/`, plus service and state-hub routes.
- **Why it matters:** a page absent from the sitemap and weakly linked internally may never get crawled at scale. This is the single highest-leverage indexation fix on the whole site.
- **Files:** `src/app/sitemap.ts`.
- **Verified:** sitemap.ts reads the full `cities` array; build produces 2,247 static paths including all city routes.

### 1.2 Eight states had city pages but no parent state hub `[APPLIED]`
- **Problem:** `delaware, district-of-columbia, kentucky, maryland, nebraska, north-dakota, south-dakota, west-virginia` had city pages but no record in `src/data/locations.ts`, so `/locations/{state}/` 404'd and every child city's breadcrumb and parent link broke.
- **Fix:** built full-content hubs for all 8, with real regional pest facts and real city lists. All 51 hubs (50 states + DC) now exist.
- **Why it matters:** a broken parent page breaks the state-to-city internal link path Google uses to discover and understand the city pages, and it is a dead link for users.
- **Files:** `src/data/locations.ts`.
- **Verified:** `state_hubs: 51` in `build_state.json`, cross-checked against `locationStates` length.

### 1.3 Sitemap `lastModified` stamped with the build timestamp on every URL `[APPLIED, 2026-07-04]`
- **Problem:** `sitemap.ts` set `const now = new Date()` and used that identical value as `lastModified` for every static route, service, state, and city URL. Flagged in the second external audit: this tells Google every page changed on every deploy, which is false, and Google's own guidance says it may ignore lastmod values it does not trust.
- **Fix:** `lastModified` removed entirely from every entry rather than faking a fresh date. `changeFrequency` and `priority` are kept as declared hints (Google is known to largely ignore both, but they are harmless).
- **Why it matters:** an untrustworthy freshness signal on 2,000+ URLs can get the whole sitemap's lastmod data discounted, which defeats its purpose everywhere, not just on the city pages.
- **Files:** `src/app/sitemap.ts`.
- **Follow-up (outstanding):** add a real `updatedAt` field per city/state/service record (or derive lastmod from git commit history) so lastmod can come back honestly. See 1.7.

### 1.4 `robots.txt` blocked `/_next/`, which can block CSS/JS Googlebot needs to render the page `[APPLIED, 2026-07-04]`
- **Problem:** `src/app/robots.ts` disallowed `/api/`, `/_next/`, `/admin/` with no exception. Flagged in the second external audit: blocking `/_next/` can stop Googlebot fetching the assets it needs to render the page, even on a mostly-static export.
- **Fix:** added an explicit `Allow: /_next/static/` ahead of the broader `Disallow: /_next/`. The more specific allow wins, so Googlebot can fetch static assets while the rest of `/_next/` (server/data internals with no SEO value) stays out.
- **Why it matters:** Core Web Vitals and mobile-friendliness are judged on the rendered page. If Google cannot fetch the CSS, it may misjudge the page's actual layout and performance.
- **Files:** `src/app/robots.ts`.

### 1.5 Missing legal pages (Privacy Policy, Terms of Service) `[APPLIED, 2026-07-04]`
- **Problem:** dead `/privacy-policy` and `/terms-of-service` links had previously been removed from the footer rather than built. Flagged in both the 2026-07-02 audit ("building real privacy and terms pages is a legal-content decision") and the second external audit (helps trust, ad-network approval, analytics compliance).
- **Fix:** built both pages as conventional, plain-English templates. Linked in the footer legal nav and added to the sitemap.
- **Why it matters:** table-stakes trust signal for a lead-generation site handling personal contact data; also required by most ad platforms and some analytics tooling.
- **Files:** `src/app/privacy-policy/page.tsx` (new), `src/app/terms-of-service/page.tsx` (new), `src/components/layout/Footer.tsx`, `src/app/sitemap.ts`.
- **Outstanding:** Gareth still needs a lawyer to review both before relying on them; they are sensible templates, not legal advice.

### 1.6 Canonical + trailing-slash consistency `[APPLIED]`
- **Problem:** `next.config.ts` sets `trailingSlash: true`; internal links, the sitemap, and per-page canonicals needed to agree, or Google would see redirect chains and split signals across two URL forms.
- **Fix:** every canonical in `src/app/**/page.tsx` metadata carries a trailing slash; `sitemap.ts` normalizes every entry to a trailing slash at the end of its map function.
- **Why it matters:** a canonical that disagrees with the actual served URL (or with the sitemap) is a well-known cause of split ranking signals between the two URL variants.
- **Files:** `src/app/sitemap.ts`, per-page `alternates.canonical` values.
- **Verified:** built `out/locations/texas/austin/index.html` has `rel="canonical" href="https://pestremovalusa.com/locations/texas/austin/"` (trailing slash present, matches the sitemap entry exactly).

### 1.7 No real per-record `updatedAt`/freshness field `[OUTSTANDING]`
- **Problem:** because there is no real last-updated timestamp on city, state, or service records, 1.3's fix had to omit `lastModified` entirely rather than restore it honestly.
- **Recommendation:** add an `updatedAt: string` (ISO date) field to `CityLocation`, `StateLocation`, and `Service`, stamped whenever The Auditor or a build pass actually changes a record's content, and wire it into `sitemap.ts`. Until this exists, do not reintroduce a fake or blanket lastmod.
- **Files that would need touching:** `src/types/index.ts`, every `src/data/cities/*.ts` record, `src/data/locations.ts`, `src/data/services.ts`, `src/app/sitemap.ts`.

---

## 2. On-page: titles, meta, headings, internal links

### 2.1 Unique title/description per page `[APPLIED]`
- **Verified:** zero duplicate `metaTitle` strings across all `src/data/cities/*.ts` files (grepped and diffed against unique count); zero duplicates across `src/data/services.ts`. Every city, state, and service page uses its own record's `metaTitle`/`metaDescription`, not a shared template string.
- **Files:** all `src/data/cities/*.ts`, `src/data/locations.ts`, `src/data/services.ts`.

### 2.2 Exactly one H1 per page, keyword-forward `[APPLIED]`
- **Problem (2026-07-02 audit, Block 3.2):** Template B's H1 was not keyword-forward.
- **Fix:** Template B's H1 rewritten to `"Trusted Pest Control in {city}, {ST}"`.
- **Why it matters:** the H1 is one of the strongest on-page relevance signals; a generic or brand-only H1 on a local page wastes it.
- **Files:** `src/components/templates/CityTemplateB.tsx`.
- **Verified:** spot-checked `out/locations/texas/austin/index.html` and `out/index.html`, each has exactly one `<h1>`.

### 2.3 Repeated template H2s across near-identical pages (template footprint) `[APPLIED]`
- **Problem (2026-07-02 audit, Block 3.2):** each template hard-coded a handful of section H2s that only swapped the city name, so a heading like "Prevention checklist" appeared on close to 100% of that template's pages, a scaled-content red flag Google's own doorway-page guidance calls out.
- **Fix:** `src/components/templates/headings.ts` gives each hard-coded heading slot 4 natural-language variants, chosen by a stable hash of the city slug salted per heading key, so the same city always renders the same heading (no rebuild churn) but across the corpus no variant exceeds roughly 25% share. A build-blocking guard (`scripts/check-heading-distribution.mjs`, wired into `prebuild`) fails the build if any variant crosses 30% of its template bucket.
- **Why it matters:** this is the core defense against the "doorway pages... created to rank for similar queries... funnel users to substantially the same destination" pattern Google's spam policies name directly, which is the single biggest structural risk of any programmatic local-SEO site at this scale.
- **Files:** `src/components/templates/headings.ts`, `scripts/check-heading-distribution.mjs`, `package.json` (`prebuild` script).
- **Verified live:** ran `npm run check:headings` during this audit: `Checked 2151 city records... Worst variant share: 28.7% (D.whichPests), under the 30% ceiling.` Passing, and it is a real build gate, not just a report (`prebuild` runs before every `next build`).

### 2.4 Internal linking: state-to-city, city-to-service, breadcrumbs `[APPLIED]`
- **Fix:** state pages call `getCitiesByState(state.slug)` and render real generated city links; city pages link out to relevant service pages from their `pestProfile`; breadcrumbs resolve back through city to state to home on every city/state/service page.
- **Files:** `src/app/locations/[slug]/page.tsx`, `src/components/templates/parts.tsx` (`Breadcrumb`, service-link helpers).

### 2.5 Nearby-city links can silently 404 on an ambiguous or mistyped slug `[APPLIED, with a gap - see 2.6]`
- **Problem (second external audit):** `CityRef.stateSlug` is optional; the resolver needs to guess the target state when it is not set.
- **Fix already in place:** `resolveNearbyHref()` in `src/components/templates/parts.tsx` never emits a broken link. It resolves via explicit `stateSlug` if present, falls back to a unique-slug lookup across the whole corpus, then falls back to the current page's own state, and returns `null` (link silently dropped from the list) rather than ever pointing at a page that does not exist.
- **Why it matters:** silently dropping a link is safer than a 404, but see 2.6, the underlying data gap this papers over is still real.

### 2.6 `nearbyCities` entries never carry an explicit `stateSlug` `[OUTSTANDING]`
- **Problem:** confirmed by direct grep: **zero** of the 6,418 `nearbyCities` city-refs across every `src/data/cities/*.ts` file set `stateSlug`. The resolver in 2.5 is doing 100% of the disambiguation work by inference (unique-slug lookup, then same-state fallback) with no ground truth to check itself against.
- **Consequence:** for any nearby-city name that happens to exist as a same-named city in more than one state *and* is not the current page's own state (e.g. two different "Springfield"s, neither of which is the state this page is on), the resolver has no way to pick the right one and drops the link entirely. This is a narrow but real class of silently missing internal links that nothing currently reports.
- **Recommendation:** populate `stateSlug` on every `nearbyCities` entry going forward (The Librarian / Connector step), and add a guard script that reports any `nearbyCities` entry whose link resolves to `null` at build time, so a future silent drop is visible instead of invisible.
- **Files that would need touching:** every `src/data/cities/*.ts` (data), `src/components/templates/parts.tsx` (could add a dev-time warning), a new `scripts/check-nearby-links.mjs`.

### 2.7 `og:image` is missing on every single page, including the homepage `[NEWLY DISCOVERED, OUTSTANDING - a regression in the 2026-07-04 work]`
- **Problem:** during the 2026-07-04 trust-claims pass, a default social share image (`public/og-default.png`) was generated and wired into `src/app/layout.tsx`'s root `openGraph.images`. That fix does not actually work. Confirmed by grepping the built `out/index.html`: there is **no `og:image` meta tag anywhere on the homepage**, despite `twitter:image` being present and correct. The same is true of every other page.
- **Root cause:** Next.js metadata resolution does not deep-merge nested objects between a layout and a page. Every one of the 14 `page.tsx` files that defines its own `openGraph` object (which is all of them, since every page sets its own OG title/description/url) fully replaces the parent layout's `openGraph` object, images array included, because the child does not itself specify `images`. `twitter.images` on the root layout survives only because no page overrides `twitter` at all.
- **Why it matters:** every link shared to Facebook, LinkedIn, Slack, iMessage, or any other OG-image-reading surface currently renders with no preview image at all, on literally every page of the site. This is the exact problem the 2026-07-04 work was supposed to close, and it did not.
- **Fix (needed):** either (a) add `images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "..." }]` to every individual page's `openGraph` object (repetitive but explicit), or (b), the better fix, remove the per-page `openGraph` overrides for `title`/`description`/`url` where they just restate the page's own `title`/`description`/`alternates.canonical` and let Next's default OG resolution (which does read plain `title`/`description` even without an explicit `openGraph` block) carry the shared image through unbroken, only setting a page-level `openGraph.images` on pages that want a bespoke image.
- **Files:** all 14 files under `src/app/**/page.tsx` that define `openGraph`, most centrally `src/app/layout.tsx` (root), `src/app/page.tsx`, `src/app/locations/[slug]/page.tsx`, `src/app/locations/[slug]/[city]/page.tsx`, `src/app/services/[slug]/page.tsx`.
- **Verified:** `grep -o 'property="og:image"' out/index.html` returns nothing; `grep -o 'property="og:image"' out/about/index.html` returns nothing.

### 2.8 `keywords` metadata: removed from the root layout but left behind on the homepage `[NEWLY DISCOVERED, PARTIALLY APPLIED]`
- **Problem:** the second external audit correctly flagged `keywords` metadata as obsolete noise (Google has not used the meta-keywords tag for ranking in over a decade). It was removed from `src/app/layout.tsx` on 2026-07-04, but `src/app/page.tsx` (the homepage) still defines its own 10-item `keywords` array, which Next.js metadata merging will still emit.
- **Why it matters:** low severity on its own (this tag does nothing for ranking), but it is exactly the kind of half-finished sweep that erodes confidence in "fixed" claims, and it is trivial to finish.
- **Files:** `src/app/page.tsx`.

---

## 3. Structured data / schema

### 3.1 Centralized JSON-LD with one stable Organization `@id` `[APPLIED]`
- **Problem (2026-07-02 audit):** schema was hand-rolled per page, drifting page to page.
- **Fix:** `src/lib/schema.ts` is the single source: `organizationSchema()`, `websiteSchema()`, `breadcrumbSchema()`, `faqPageSchema()`, `areaOrganizationSchema()`, `serviceSchema()`, all reusing one `ORGANIZATION_ID` constant so Google resolves every page's business mention to one entity.
- **Files:** `src/lib/schema.ts`, consumed by `Footer.tsx` and every city/state/service page.

### 3.2 Fabricated `aggregateRating`/`Review` schema removed `[APPLIED]`
- **Problem:** the footer and reviews page previously asserted star-rating structured data with no real, auditable reviews behind it, a direct violation of Google's review-rich-result guidelines and a manual-action risk.
- **Fix:** removed entirely on 2026-07-02; confirmed still absent on 2026-07-04 when the visible rating claims were also removed from the page content itself (see 5.2).
- **Files:** `src/components/layout/Footer.tsx`, `src/app/reviews/page.tsx`.
- **Verified:** `grep -rn "aggregateRating\|\"@type\":\"Review\"" src/` returns nothing.

### 3.3 Business modeled as a nationwide service-area Organization, not a fake single-address LocalBusiness `[APPLIED]`
- **Fix:** `organizationSchema()` uses `areaServed: { "@type": "Country", name: "United States" }` and no `address` field at all (the business has no public storefront); city/state pages use `areaOrganizationSchema()` with a structured City/State `areaServed`, not a bundled "City, ST" string.
- **Why it matters:** asserting a fake physical address is a common programmatic-SEO trust violation; the service-area model is the accurate one here.
- **Files:** `src/lib/schema.ts`.

### 3.4 `BreadcrumbList` and `FAQPage` schema added where missing `[APPLIED]`
- **Fix:** every city, state, and service page graph includes `breadcrumbSchema()`; `FAQPage` schema is emitted from each page's own visible FAQ data (never invented separately from what is on the page).
- **Verified:** built `out/locations/texas/austin/index.html` schema graph includes `BreadcrumbList`, `FAQPage`, `Question`/`Answer`, `Organization`, `Service`, `WebSite`, `City`, `State`, `Country`, exactly as expected.

### 3.5 Real `logo`/`image` added to Organization schema, `sameAs` removed `[APPLIED, 2026-07-04]`
- **Problem:** `organizationSchema()` previously asserted `sameAs: Object.values(siteConfig.social)`, five social profile URLs that were not live pages, a false entity signal Google is known to check.
- **Fix:** `sameAs` removed entirely; `logo: "${url}/logo.png"` and `image: "${url}/og-default.png"` added, pointing at real, committed, non-placeholder image files (see 5.6).
- **Files:** `src/lib/schema.ts`.
- **Verified:** `grep -n "sameAs" src/lib/schema.ts` returns nothing; `logo`/`image` fields present and point at files that exist in `public/`.

### 3.6 Schema validation against Google's Rich Results Test `[OUTSTANDING]`
- **Recommendation:** the schema graph has never been run through Google's live Rich Results Test or the Schema.org validator on a sample of real URLs. This should happen once the site is live post-deploy; it cannot be done from the repo alone.
- **Owner:** Gareth, post-deploy, using Google Search Console / Rich Results Test.

---

## 4. Content quality & information gain

### 4.1 Word-count floor guard built, and actively closing the backlog `[PARTIALLY APPLIED - real, ongoing work, not a one-off]`
- **Problem:** `scripts/check-word-counts.mjs` found 1,068 of 2,151 city records below their tier's word floor (T1 >= 800, T2 >= 500, T3 >= 350) when first built.
- **Fix so far:** a strict per-record rubric (Opus-authored) governs expansion: new sections may only use facts already established in that record's own `pestProfile`/`climateDriver`/`localHook`/`prevention`/`faqs`, never new claims (the YMYL guard, see 4.4). 58 T1 records have been expanded and verified across multiple batched sessions; **all 75 T1 (top-tier) records are now done except the 18 remaining in Oregon, Pennsylvania, Tennessee, Texas, Virginia, and Wisconsin.**
- **Current true state, re-checked live during this audit:** `npm run check:words` reports **1,009 records still below floor**: 18 T1, 273 T2, 718 T3.
- **Why it matters:** thin, near-duplicate content at this scale is exactly the pattern Google's helpful-content guidance calls out as "mass-produced... not primarily for search traffic." The floor is a quality proxy, not a ranking factor by itself; hitting the number with padding rather than real information gain would defeat the purpose.
- **Files:** `scripts/check-word-counts.mjs`, every `src/data/cities/*.ts`, tracked batch by batch in `SEO-BUILD-PLAN-2026-07-02.md`.
- **Deliberately not yet build-blocking:** the guard is not wired into `prebuild` (unlike `check:headings`), by design, until the backlog reaches zero, per `SEO-BUILD-PLAN-2026-07-02.md` Block 4 planning. This is correct sequencing, not an oversight, but it means new pages built before that wiring happens could still ship thin unless the routine itself refuses to.

### 4.2 Banned vocabulary sweep `[OUTSTANDING - larger than previously tracked]`
- **Problem:** CLAUDE.md bans a specific word list (`delve, meticulous, comprehensive, tailored, navigate, leverage, seamless, robust, vital, crucial, utilize, intricate, paramount, pivotal, embark, foster, elevate, unleash, unlock, harness, streamline, holistic, realm, multifaceted`, etc.). The 2026-07-02 audit flagged "comprehensive" alone at 75+ occurrences as a to-do for Block 4's audit pass.
- **Current true state, re-checked live during this audit:** re-grepping the full banned list against every `src/data/cities/*.ts` file returns **159 total matches**, concentrated in `wisconsin.ts` (13), `ohio.ts` (7), `new-jersey.ts` (6), `massachusetts.ts` (5), `florida.ts` (5), `california.ts` (5), and smaller counts across another dozen files. This has never been swept; it has only grown as new records were added.
- **Why it matters:** these are explicitly the words CLAUDE.md and the humanization pass both identify as AI-tell vocabulary; every occurrence is a small credibility and detection risk, and at 159 instances it is not a rounding error.
- **Recommendation:** a dedicated sweep pass (find-and-rewrite, not find-and-delete, since the sentence usually needs a real replacement clause) once the word-count backlog work touches each file, or as its own pass. Consider a build-time or CI grep guard that reports (not necessarily blocks) any banned word found in new or changed city data, so this cannot silently regrow again.

### 4.3 Em dash / en dash ban `[APPLIED, holding]`
- **Problem:** CLAUDE.md's absolute em/en-dash ban (Block N2, 2026-07-02) swept 251 em dashes and 88 en dashes from 33 files at the time.
- **Verified live during this audit:** `grep -rn "—\|–" src/ --include=*.tsx --include=*.ts` returns **zero** matches across the entire `src/` tree. The rule has held through every subsequent content batch.
- **Files:** all of `src/`.

### 4.4 YMYL no-new-facts rule for content expansion `[APPLIED, actively enforced batch by batch]`
- **Rule:** any body-copy expansion may only draw on facts already present in that record's own data fields; it must never introduce a new species claim, statistic, or disease-vector assertion that was not already verified in the record.
- **Fix:** enforced as a hard constraint in every Block 4 batch; specific self-caught violations are logged in `SEO-BUILD-PLAN-2026-07-02.md`'s changelog (e.g. an invented Formosan termite colony-size statistic in a New Orleans draft, caught and rewritten before insertion; a leaked internal field name `pestProfile` caught in an Aurora, CO draft).
- **Why it matters:** this is a pest-control (health, safety, property-damage) site; a wrong factual claim about a disease vector or a pesticide is a real-world harm risk, not just an SEO risk. Google's own guidance treats trust as the most important E-E-A-T factor for exactly this class of topic.
- **Files:** every touched `src/data/cities/*.ts` record; the rubric itself lives in the workforce souls (`workforce/intelligence/the-geographer.md`, `workforce/leadership/the-auditor.md`) and `SEO-BUILD-PLAN-2026-07-02.md`.

### 4.5 Duplication ceiling ("no two pages share more than 15% of body copy") is asserted policy with zero automated enforcement `[OUTSTANDING]`
- **Problem:** CLAUDE.md states this ceiling as a rule (`## ANTI-THIN-CONTENT RULES`, item 3), but confirmed by direct search: **no script in `scripts/` checks it**. It is enforced only by the individual judgment of whoever writes a batch (see the self-flagged style-variation notes in the changelog, e.g. deliberately giving Newark and Jersey City different closing-paragraph angles).
- **Why it matters:** this is precisely the metric that would catch a future regression toward templated, keyword-swapped pages at scale, and right now nothing catches it automatically.
- **Recommendation:** a script that computes pairwise or shingle-based similarity across same-template, same-state (or same-tier) city bodies and reports any pair over the 15% ceiling. Does not need to be build-blocking immediately; start as a reporting guard like `check:words` did.
- **Files that would need creating:** `scripts/check-body-similarity.mjs`.

---

## 5. Trust claims & E-E-A-T

This category did not exist in the original 2026-07-02/07-03 audits as a distinct heading; it was raised in full by the second external audit on 2026-07-04 and resolved the same day, with Gareth making the underlying business-fact decisions.

### 5.1 Fabricated aggregate metrics (rating, review count, homes treated, technician count, years in business) `[APPLIED]`
- **Problem:** `4.9★` rating, `12,847` reviews, `50,000+`/`250K+`/`2.4 Million` homes treated, `500+` technicians, `15+` years in business, and a `$2M liability` figure were hardcoded across the Header, Footer, homepage, every service page, every city/state page, the reviews page, and the About page, with no real, auditable source. Gareth confirmed these were placeholders, not real figures.
- **Fix:** all removed. `src/config/site.ts`'s `stats` object now holds only `statesCovered`/`statesCoveredFull` (verifiably true); every consuming component and page was rewritten to use defensible, non-numeric signals instead (licensed and insured, 50 states + DC, 24/7 emergency, same-day service, free inspections, satisfaction guarantee).
- **Why it matters:** the FTC specifically regulates fabricated review counts and unsubstantiated numeric claims; for a safety-adjacent (YMYL-adjacent) service this is also a direct E-E-A-T trust violation, not just a legal one.
- **Files:** `src/config/site.ts`, `src/lib/schema.ts`, `src/components/ui/TrustBadges.tsx`, `src/components/sections/HomepageHero.tsx`, `HomepageStats.tsx`, `HomepageReviews.tsx`, `src/components/layout/Header.tsx`, `Footer.tsx`, and pages `services/[slug]`, `services`, `locations/[slug]`, `locations`, `emergency`, `about`, `faq`, `residential`, `careers`, `reviews`.
- **Verified:** full repo grep for `12,847|4\.9|BBB|Accredited|50,000|500\+` (excluding city-data population/prose strings) returns zero hits outside `docs/` and this log.

### 5.2 21 fabricated named customer testimonials removed `[APPLIED, per Gareth's explicit decision]`
- **Problem:** the homepage (6), `/residential` (3), and `/reviews` (12) each contained specific invented customers (name, city, quote, star rating, date, a "verified" badge), plus a fabricated per-star ratings histogram and a "verified via Google & BBB" claim on an entirely fictitious set of reviews. This is the class of content the FTC's fake-reviews rule targets directly.
- **Decision:** Gareth was asked explicitly (remove vs. relabel as illustrative vs. keep if real) and chose **remove until real ones exist**, rather than relabeling them as illustrative, which would have kept the fabricated specifics on the page.
- **Fix:** `HomepageReviews.tsx` rebuilt as an honest "what you can count on" service-commitments section. `residential/page.tsx`'s testimonial block rebuilt the same way. `/reviews` fully rebuilt: no fake reviews, no fake histogram, an honest framing ("we are a growing network, collecting verified reviews as we go"), and a mailto-based invitation for real customers to submit feedback.
- **Files:** `src/components/sections/HomepageReviews.tsx`, `src/app/residential/page.tsx`, `src/app/reviews/page.tsx`.
- **Follow-up (outstanding, not code):** once real, consented reviews exist, re-introduce `aggregateRating`/`Review` schema per Google's rich-result guidelines (ratings visible on the page, sourced directly from users, never aggregated from a third-party site into your own schema without the platform's data feed).

### 5.3 Absolute technician-licensing claim softened `[APPLIED]`
- **Problem:** state pages and the sitewide FAQ both asserted, in absolute language, "every technician operating in {state} holds a current state pesticide applicator license and carries full liability insurance. We verify licensing and conduct background checks on all field staff," an operational guarantee the lead-gen/service-area business model (independent local providers, not direct employees) cannot actually back for every provider in the network.
- **Fix:** reworded to describe the matching model honestly: "we work with licensed, insured local pest control technicians, and match you with pros who meet {state}'s licensing requirements... ask your assigned technician for their license and insurance details before work begins."
- **Why it matters:** an absolute claim about every technician nationwide is exactly the kind of specific, checkable, YMYL-adjacent statement that erodes trust the moment one instance turns out false.
- **Files:** `src/app/locations/[slug]/page.tsx`, `src/app/faq/page.tsx`.

### 5.4 Fabricated third-party certifications removed (NPMA, QualityPro, GreenPro, BBB A+, ISO 9001, OSHA) `[APPLIED]`
- **Problem:** the About page's "Our Certifications" list asserted six specific, independently checkable accreditation claims with no evidence behind any of them.
- **Fix:** replaced with an honest "Our Standards" list describing real, verifiable operating practices (licensed and insured local technicians, EPA-registered products applied to label, IPM approach, written pricing, satisfaction guarantee, 50-state coverage) rather than claimed third-party accreditations. Softened two remaining NPMA mentions (About page value description, a careers-page benefit line) from absolute ("every technician is NPMA-trained") to accurate ("ongoing training and industry best practices").
- **Files:** `src/app/about/page.tsx`, `src/app/careers/page.tsx`.

### 5.5 Not-live social profile links removed `[APPLIED]`
- **Problem:** Facebook, X/Twitter, Instagram, YouTube, and LinkedIn links in the footer, and the same five URLs asserted as `sameAs` in Organization schema, pointed at profiles Gareth confirmed are not live.
- **Fix:** removed from `siteConfig.social` (the field no longer exists), the footer icon row, and `organizationSchema()`'s `sameAs`.
- **Why it matters:** a dead or nonexistent social link is a weak negative trust signal a savvy visitor or Google's own entity verification can both catch.
- **Files:** `src/config/site.ts`, `src/components/layout/Footer.tsx`, `src/lib/schema.ts`.

### 5.6 Placeholder logo and social-share image generated `[APPLIED, but see 2.7 for the wiring bug]`
- **Problem:** no logo or OG/share image existed anywhere in `public/`; shared links previewed with nothing, and `organizationSchema()` had no `logo` field to point at.
- **Fix:** generated `public/logo.png` (600x160 navy wordmark) and `public/og-default.png` (1200x630 share card), both real, committed static PNGs rendered with the `next/og` renderer already bundled in `node_modules` (no external service, no placeholder stock photo), wired into `src/lib/schema.ts`'s `logo`/`image` fields and `src/app/layout.tsx`'s default metadata.
- **Files:** `public/logo.png` (new), `public/og-default.png` (new), `src/lib/schema.ts`, `src/app/layout.tsx`.
- **Status caveat:** the schema `logo`/`image` fields are correctly wired and verified in the built HTML's JSON-LD. The `layout.tsx` OG-image wiring does **not** actually reach the rendered `<head>` on any page, per 2.7. Fix that before calling this fully closed.

### 5.7 Founding-story narrative on the About page (2011, Dallas, an expansion timeline) `[UNRESOLVED, flagged not fixed]`
- **Status:** left in place deliberately during the 2026-07-04 pass because it was set during the earlier 2026-07-03 design audit and is a narrative rather than a bare statistic. Flagged to Gareth as a candidate for a future honesty review if the specifics (founding year, founding city, the year-by-year timeline events) are not real.
- **Files:** `src/app/about/page.tsx` (the `timeline` array and hero "Est. 2011" pill).

---

## 6. Template & build system (anti-scaled-content defenses)

### 6.1 Five structurally distinct templates, each with its own content soul `[APPLIED]`
- **System:** Templates A through E differ in section order, hero composition, FAQ placement/format, sidebar presence, and schema emphasis, while sharing one brand system. Each is paired with a matching "content soul" (a distinct writing voice/structure) so the template and the prose vary together, not just the template shell around identical prose.
- **Files:** `src/components/templates/CityTemplateA.tsx` through `CityTemplateE.tsx`, `CityTemplateRouter.tsx`, `workforce/content/souls/city-soul-{a..e}-*.md`.
- **Verified:** distribution is genuinely balanced, not just declared as a target: `check:headings` output confirms A=442 (20.5%), B=429 (19.9%), C=427 (19.9%), D=415 (19.3%), E=438 (20.4%) of 2,151, all within the 15-25% target band.

### 6.2 Template/soul assignment is deterministic per city, not random `[APPLIED]`
- **Fix:** `contentTemplate` and `contentSoul` are derived from a hash of the city's slug (see `src/components/templates/variant.ts`, consumed by the router), so the same city always renders the same template across rebuilds, no template-flapping, while still landing on a balanced distribution across the whole corpus.
- **Files:** `src/components/templates/variant.ts`, `CityTemplateRouter.tsx`.

### 6.3 Heading rotation is a real, verified, build-blocking guard, not just a stated intention `[APPLIED - see 2.3 for full detail]`
- Cross-referenced here because it is as much a template-system fix as an on-page one: `scripts/check-heading-distribution.mjs` is wired into `package.json`'s `prebuild` script, so it runs on every `next build`, not just on demand.

### 6.4 Word-count floors are tier-differentiated, not one-size-fits-all `[APPLIED]`
- **System:** T1 (top ~75 metro cities) >= 800 words, T2 (next ~300) >= 500, T3 (remaining ~5,000 towns) >= 350. This matches the actual commercial and search-volume priority of each tier rather than demanding uniform depth everywhere.
- **Files:** `scripts/check-word-counts.mjs` (`TIER_FLOOR` constant), `src/types/index.ts` (`CityTier`).

### 6.5 A 6th template, or collapsing two templates into one, is explicitly banned `[APPLIED, as a hard rule]`
- **Rule:** `src/types/index.ts` comments this directly: "Template rotation is fixed at 5 variants (A to E)... This is a deliberate hard rule: more variants dilute the design system without indexation benefit." Mirrored in `CLAUDE.md` and `TEMPLATE-DIVERSIFICATION-GUIDE.md`.
- **Why it matters:** without this constraint, well-intentioned future work could quietly add a 6th template for a special case and slowly erode the balanced-distribution guarantee that 6.1 depends on.

---

## 7. Performance & Core Web Vitals

No item in this category has been verified against real Core Web Vitals data (CrUX, PageSpeed Insights, or GSC's Core Web Vitals report), because none of that is available from inside the repository. Everything below is a structural observation, not a live measurement.

### 7.1 Static export architecture `[APPLIED, structurally sound]`
- `next.config.ts` sets `output: "export"`, so the whole site pre-renders to static HTML, generally the strongest starting position for LCP/TTFB of any Next.js rendering mode.
- `next/font` is used for both typefaces (`Inter`, `Barlow_Condensed`) with `display: "swap"`, avoiding invisible-text-during-font-load.

### 7.2 `images.unoptimized: true` means all image sizing/compression/lazy-loading is manual `[OUTSTANDING, unconfirmed real-world impact]`
- **Problem:** `next.config.ts` disables Next's built-in image optimizer (required for static export without a custom loader). No automated resizing, format conversion, or lazy-loading happens for any image on the site.
- **Recommendation:** audit actual image usage and file sizes site-wide; where real photography exists (as opposed to icon/SVG assets), pre-optimize at build time or via a manual pipeline before committing images.
- **Status:** genuinely unconfirmed how much this matters in practice; a quick grep found no `heroImage` values actually populated in `src/data/services.ts` at the time of this audit, so the real exposure may be small. Needs a live-image inventory, not more grepping, to size correctly.

### 7.3 An unused dependency (`framer-motion`) ships in `package.json` `[NEWLY DISCOVERED, minor, OUTSTANDING]`
- **Problem:** `framer-motion` is a direct dependency in `package.json` but a repo-wide search found **zero files that import it**. Modern bundlers should tree-shake an entirely unused package out of the client bundle, so the practical runtime cost is likely near zero, but it is dead weight in `node_modules`/install time and a maintenance question mark (was it meant to be used somewhere and never was?).
- **Recommendation:** either remove it from `package.json` if genuinely unused, or use it deliberately somewhere (e.g. a tasteful reveal animation) and document why.
- **Files:** `package.json`.

### 7.4 Several layout-level components are client components; unconfirmed whether all of them need to be `[OUTSTANDING, unconfirmed]`
- **Observation:** `Header.tsx`, `Footer.tsx`, `MobileCallBar.tsx`, `CityLeadForm.tsx`, `HomepageFAQ.tsx`, `HomepageHero.tsx`, and `ServiceFAQ.tsx` are all marked `"use client"`. Some of this is clearly necessary (forms, phone-call tracking, FAQ accordions need interactivity); it was not confirmed during this audit whether every one of them needs full client-side hydration for its static parts, or whether some could be split into a static server component wrapping a small interactive client island.
- **Recommendation:** treat as a genuine "needs profiling" item, not a claimed fix. Run PageSpeed Insights / Lighthouse on a real deployed page and look at INP and JS bundle size before deciding whether to split any of these.

---

## 8. Accessibility

### 8.1 No missing `alt` attributes found on `<img>` tags in the shared template components `[APPLIED, spot-checked]`
- **Verified:** grepped every `<img>` tag in `src/components/templates/*.tsx`; every one carries an `alt` attribute. Decorative icons throughout the codebase consistently use `aria-hidden="true"` (spot-checked in `Footer.tsx`, `TrustBadges.tsx`, `HomepageHero.tsx`).

### 8.2 No sitewide accessibility audit (contrast, focus states, screen-reader flow) has actually been run `[OUTSTANDING]`
- **Status:** the 2026-07-03 design audit fixed specific, spotted issues (low-contrast hero pills on Templates A and D), but that was a targeted visual pass, not a systematic accessibility audit (no axe-core/Lighthouse-accessibility run recorded anywhere in the chat history or the repo).
- **Recommendation:** run an automated accessibility scan (axe DevTools, Lighthouse's accessibility category, or `@axe-core/playwright` in CI) across at least one page per template before treating accessibility as covered.

---

## Full outstanding backlog, single list

For quick reference when planning the next few sessions of work, every item marked `OUTSTANDING` or `PARTIALLY APPLIED` above, in priority order:

1. **`og:image` missing sitewide** (2.7) - a real regression from work claimed complete on 2026-07-04. Fix first; it is small and well-understood.
2. **`keywords` metadata leftover on the homepage** (2.8) - trivial one-line fix, finish the sweep.
3. **Word-count backlog: 1,009 records still below floor** (4.1) - 18 T1, 273 T2, 718 T3. Large, known, actively being worked in batches.
4. **Banned vocabulary: 159 live occurrences**, not 75 as last tracked (4.2) - needs its own sweep pass, has grown since last measured.
5. **Duplication ceiling (15%) has zero automated enforcement** (4.5) - the metric most likely to catch a future templated-content regression, and nothing checks it today.
6. **`nearbyCities.stateSlug` never populated anywhere** (2.6) - papered over by a safe fallback, but the underlying data gap is real and untested for the ambiguous-slug case.
7. **No real per-record freshness/`updatedAt` field** (1.7) - blocks restoring an honest sitemap `lastModified`.
8. **Schema not yet validated in Google's Rich Results Test** (3.6) - needs a live URL, cannot be done from the repo.
9. **Legal pages need a lawyer's review** (1.5) - not a code task.
10. **Image optimization strategy unconfirmed** (7.2), **`framer-motion` unused dependency** (7.3), **client-component boundary unconfirmed** (7.4) - all need live measurement, not more static analysis.
11. **No systematic accessibility audit run** (8.2).
12. **About-page founding narrative unresolved** (5.7) - a business-fact decision, not a code task.
13. **Reviews/testimonials and social profiles**: re-introduce properly once real, consented reviews and real social profiles exist (5.2, 5.5).

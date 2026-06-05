# BUILD-PLAN.md - PestRemovalUSA

> Quick-reference checklist and session log. Update it on every block AND at session end. For the anti-penalty engine, reference `TEMPLATE-DIVERSIFICATION-GUIDE.md`. For role detail, reference `workforce/`.

---

## THE BLOCK RHYTHM (read before every session)

- **One "build the next batch" = one block. Never more.**
- **A block = 25 pages** (or one equivalent non-page unit).
- Every block runs the full 7-stage pipeline: Geographer, Wordsmith, Interrogator, Chameleon, Optimizer, Auditor, Builder.
- After commit, push directly to `main`. deploy.yml fires automatically and the site goes live. Then post the live URLs of all new and changed pages to Slack as a record (LIVE LINK RECORD in CLAUDE.md). Never use a working branch.
- Every block also updates BUILD-PLAN.md, build_state.json, and MEMORY.md in the same commit (MANDATORY DOCS UPDATE).
- Bulk-generation without the quality gate is banned.

**AUTONOMY (5 June 2026):** the build routine runs unattended. One block per run, full 7-stage pipeline as the QA gate, commit to main, deploy auto, post live links to Slack as a record. There is no approval step, no wait-for-go, and no stop condition. Advance through the phases in order; when the city universe is built, the pest x city matrix (Phase 6) is the long-tail engine and runs indefinitely.

**Where we are:** Phase 2 T2 in progress. Chunk 6 complete: 150 total city pages built (75 T1 + 75 T2). 225 T2 cities remaining. Next: chunk 7.

---

## PHASES

### Phase 0 - Architecture and governance (COMPLETE 2026-06-04)
- Governance files, 14 worker souls, 5 content souls, template system, seed data, city route scaffold.

### Phase 1 - T1 city pages (COMPLETE 2026-06-04)
- Top 75 metro cities. >= 800 words each. Template rotation A-E. 75 cities, balanced 15 each A-E.

### Phase 2 - T2 city pages (IN PROGRESS)
- Next ~300 cities. >= 500 words. 25 built (chunk 4), 275 remaining. 25 per block, rotation A-E.

### Phase 3 - T3 cities and towns (DEFINED 2026-06-05, was undefined)
- **The full T3 universe: every remaining US incorporated place above 5,000 population not already built in T1 or T2.** The Census counts roughly 5,000 to 5,300 such places. This is the bulk of the site.
- >= 350 words each.
- **How to build it:** state by state, exactly as T1 and T2 were built. Each block adds the next 25 places. When a state's places are exhausted, add the next state: create `src/data/cities/{state}.ts` and register it in `src/data/cities/index.ts` (the Librarian's job, one state file per batch). Work down each state's incorporated places by population.
- Target: 50-state coverage, ~5,000 city/town pages.

### Phase 4 - Towns below 5,000 (optional, on review)
- Only if T1 to T3 are indexing well and demand justifies it.

### Phase 5 - Blog content plan (deferred, target 200)
- Seasonal and pest-specific articles (for example "when do termites swarm", "are stink bugs harmful to pets", "first signs of bed bugs"). 5 per batch. Non-cannibalising: blog answers questions the service and pest-city pages do not. Built only on a run where the next city or matrix block is already committed.

### Phase 6 - Pest x city matrix (THE LONG-TAIL ENGINE, defined 2026-06-05)
- A page for each pest service in each city: "{service} in {city}, {state}" (for example "Bed Bug Treatment in Austin, TX"). This is exactly how the market searches and is the highest-volume long-tail layer on the site.
- **25 services** (the full set in `src/data/services.ts`: ant-control, bed-bug-treatment, cockroach-control, flea-tick-treatment, mosquito-control, termite-treatment, spider-control, wasp-bee-removal, fly-control, moth-control, silverfish-control, earwig-control, cricket-control, stink-bug-control, scorpion-control, boxelder-bug-control, mice-control, rat-control, wildlife-removal, squirrel-removal, raccoon-removal, bat-removal, bird-control, and the remaining silos) crossed with the city set.
- **Route to build:** a new dynamic route, for example `src/app/locations/[slug]/[city]/[service]/page.tsx` (service x city x state) or `src/app/[service]/[slug]/[city]/page.tsx`. Reuse the five city templates A-E and the service data in `src/data/services.ts`. `generateStaticParams` crosses services x the chosen city set.
- **Sizing (to demand, not brute force):** build the full 25 services x the 75 T1 cities first (1,875 pages), then the 8 highest-volume services (bed-bug, cockroach, termite, mice, rat, mosquito, ant, wasp-bee) x the 300 T2 cities (2,400 pages), then extend by search demand. Full theoretical build is 25 x ~400 priority cities = ~10,000 pages. Do not build all 25 services for all 5,000 towns.
- **Rollout:** Phase 6 begins once the city universe is substantial (T2 done and T3 well underway). One block = one service across the next 25 cities. Skip-check the generated path before building, exactly like the city blocks.

---

## TEMPLATE ROTATION ORDER

Deterministic by slug hash (see the guide). For hand-built batches, rotate A, B, C, D, E, A, ... across the batch so each block ships a visible mix.

- Chunks 1-6 each shipped a balanced mix (5 each A to E). Running total: 30 each A to E.
- Next block template lead: **A** (rotation continues across the batch)

---

## CITY TIER QUEUE

- T1 (75 metros): COMPLETE. The Librarian maintains the authoritative tiered list in `src/data/cities/index.ts`.
- T2 (next ~300): in progress, 225 remaining, worked by population.
- T3 (~5,000 incorporated places >5,000 pop): the Phase 3 universe, built state by state.

---

## BUILD ORDER EACH RUN

1. Default: build the next 25-city block of the current phase (T2 now, then T3).
2. Once T3 is materially complete: the **pest x city matrix (Phase 6)** becomes the default block (one service x 25 cities).
3. Blog batches (Phase 5) run only on a run where the next city or matrix block is already committed.

build_state.json holds the machine-readable next unit: `next_chunk`, `next_chunk_tier`, `next_chunk_template`, the `pest_city_matrix` block, and `phase_order`.

---

## Session Log

| Date | Block | Work Done | Pages | Notes |
|------|-------|-----------|-------|-------|
| 2026-06-04 | Phase 0 | Ported governance and workforce. Template router + 5 city templates. Seed city data + route. | 5 seed cities | Architecture. |
| 2026-06-04 | Chunk 1 | First 25 T1 city pages, full 7-stage pipeline. Balanced rotation. | 25 city pages | Live on main. |
| 2026-06-04 | Chunk 2 | Next 25 T1 city pages. ClimateZone type extended. Hardcoded push-to-main. | 25 city pages | Live on main. |
| 2026-06-04 | Chunk 3 | Final 25 T1 city pages. T1 COMPLETE (75 cities, 155 site pages). | 25 city pages | Live on main. |
| 2026-06-04 | Chunk 4 | First 25 T2 city pages. New states: Utah, Iowa, Alabama, Arkansas. 100 city pages, ~180 site pages, rotation balanced 20 each A-E. | 25 city pages | Live on main. Next: chunk 5. |
| 2026-06-05 | Plan expansion | Defined the T3 town universe (~5,000 incorporated places >5,000 pop, was null), added Phase 6 pest x city matrix as the long-tail engine (25 services x cities, ~10,000 at full build, sized to demand), set blog target (200), documented phase order and per-run build order, added autonomy note. No content built this entry. | 0 | Build plan now sized to thousands of pages. Routine prompt to be set up next. Next: chunk 5, 25 T2 cities, rotation at A. |
| 2026-06-05 | Chunk 5 | 25 T2 city pages. New states: Mississippi (Jackson), South Carolina (Columbia), Connecticut (Hartford). Existing states expanded: CA (Fremont, Huntington Beach, Moreno Valley, Oxnard, Santa Ana), FL (Hialeah, Cape Coral, Tallahassee), AZ (Glendale, Gilbert, Tempe), WA (Tacoma), TX (McKinney), MI (Grand Rapids), NC (Fayetteville, Cary), NY (Yonkers), GA (Augusta), MO (Springfield), IL (Aurora), NJ (Paterson). Template rotation balanced 25 each A-E. 125 total cities, 208 site pages. Build green. | 25 city pages | Live on main. Next: chunk 6. |
| 2026-06-05 | Chunk 6 | 25 T2 city pages. New states: South Dakota (Sioux Falls), North Dakota (Fargo). Existing states expanded: IN (Fort Wayne), NV (North Las Vegas), KS (Overland Park), AL (Huntsville, Montgomery), OH (Dayton), AZ (Peoria), GA (Columbus, Savannah), LA (Shreveport), TN (Clarksville), VA (Newport News, Hampton), OR (Salem, Eugene), TX (Brownsville, Pasadena), FL (Pembroke Pines, Hollywood), CA (San Bernardino, Glendale, Modesto, Fontana). Template rotation balanced 30 each A-E. 150 total cities, 233 site pages. Build green. | 25 city pages | Live on main. Next: chunk 7. |

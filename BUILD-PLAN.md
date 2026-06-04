# BUILD-PLAN.md - PestRemovalUSA

> Quick-reference checklist and session log. Update it on every block AND at session end. For the anti-penalty engine, reference `TEMPLATE-DIVERSIFICATION-GUIDE.md`. For role detail, reference `workforce/`.

---

## THE BLOCK RHYTHM (read before every session)

- **One "build the next batch" = one block. Never more.**
- **A block = 25 pages** (or one equivalent non-page unit).
- Every block runs the full 7-stage pipeline: Geographer, Wordsmith, Interrogator, Chameleon, Optimizer, Auditor, Builder.
- After commit, push directly to `main`. deploy.yml fires automatically and the site goes live. Then post the live URLs of all new and changed pages for review (LIVE LINK REVIEW GATE in CLAUDE.md). Never use a working branch.
- Every block also updates BUILD-PLAN.md, build_state.json, and MEMORY.md in the same commit (MANDATORY DOCS UPDATE).
- Bulk-generation without the quality gate is banned.

**Where we are:** Phase 2 T2 in progress. Chunk 4 complete: 100 total city pages built (75 T1 + 25 T2). 275 T2 cities remaining.

---

## PHASES

### Phase 0 - Architecture and governance (COMPLETE 2026-06-04)
- Governance files, 14 worker souls, 5 content souls, template system, seed data, city route scaffold.

### Phase 1 - T1 city pages (IN PROGRESS)
- Top ~75 metro cities. >= 800 words each. Quality build.
- Template rotation across A to E.
- Chunk 1 done: 25 cities built (5 each A to E).
- Chunk 2 done: 25 more cities built (5 each A to E). Total 50 T1 cities.
- Chunk 3 done: final 25 cities built (5 each A to E). Total 75 T1 cities. T1 COMPLETE.
- Gate to Phase 2: all T1 cities live and indexed, fingerprint audit passing.

### Phase 2 - T2 city pages
- Next ~300 cities. >= 500 words.

### Phase 3 - T3 cities and towns
- Remaining incorporated places above 5,000 population. >= 350 words.

### Phase 4 - Towns below 5,000 (optional, on review)
- Only if T1 to T3 are indexing well and demand justifies it.

### Phase 5 - Blog content plan (deferred)
- Seasonal and pest-specific articles. Scaffolded later.

---

## TEMPLATE ROTATION ORDER

Deterministic by slug hash (see the guide). For hand-built T1 batches, rotate A, B, C, D, E, A, ... across the batch so each block ships a visible mix.

- Chunk 1 shipped a balanced mix (5 each A to E).
- Chunk 2 shipped a balanced mix (5 each A to E). Running total: 10 each A to E.
- Chunk 3 shipped a balanced mix (5 each A to E). Running total: 15 each A to E.
- Chunk 4 shipped a balanced mix (5 each A to E). Running total: 20 each A to E.
- Next block template lead: **A** (rotation continues across the batch)

---

## CITY TIER QUEUE (T1 seed targets)

T1 = the largest US metros by population and pest-search demand. The first build blocks work through this list. Representative T1 cities: New York NY, Los Angeles CA, Chicago IL, Houston TX, Phoenix AZ, Philadelphia PA, San Antonio TX, San Diego CA, Dallas TX, Austin TX, Jacksonville FL, Fort Worth TX, San Jose CA, Columbus OH, Charlotte NC, Indianapolis IN, San Francisco CA, Seattle WA, Denver CO, Oklahoma City OK, Nashville TN, Washington DC, Las Vegas NV, Portland OR, Memphis TN, Atlanta GA, Miami FL, Tampa FL, Orlando FL, New Orleans LA, and the next tier down to ~75.

The Librarian maintains the authoritative tiered list in `src/data/cities/index.ts` as cities are added.

---

## Session Log

| Date | Block | Work Done | Pages | Notes |
|------|-------|-----------|-------|-------|
| 2026-06-04 | Phase 0 | Ported governance and workforce from pet-transport. Created CLAUDE.md, AGENTS.md, MEMORY.md, BUILD-PLAN.md, build_state.json, ERRORS.md, DEPLOY.md, DESIGN.md, TEMPLATE-DIVERSIFICATION-GUIDE.md. 14 worker souls + 5 content souls. Template router + 5 city templates. Seed city data + `[slug]/[city]` route. | 5 seed cities | Architecture. Austin, Houston, Miami, Phoenix, Minneapolis. |
| 2026-06-04 | Chunk 1 | First 25 T1 city pages through the full 7-stage pipeline. Added 20 metros: New York, Los Angeles, Chicago, Philadelphia, San Antonio, San Diego, Dallas, San Jose, Jacksonville, Columbus, Charlotte, Indianapolis, Seattle, Denver, Nashville, Atlanta, Las Vegas, Portland, Memphis, New Orleans. Balanced template rotation (5 each A to E). Verified regional pest data, local FAQs, internal links, schema. Build green, one H1 each, unique titles, no dashes or banned vocab. | 25 city pages | Live on main. Next: chunk 2. |
| 2026-06-04 | Chunk 2 | Next 25 T1 city pages. Fort Worth TX (A), San Francisco CA (B), Washington DC (C), Oklahoma City OK (D), El Paso TX (E), Boston MA (A), Baltimore MD (B), Louisville KY (C), Milwaukee WI (D), Albuquerque NM (E), Tucson AZ (A), Fresno CA (B), Sacramento CA (C), Kansas City MO (D), Tampa FL (E), Orlando FL (A), St. Louis MO (B), Raleigh NC (C), Virginia Beach VA (D), Oakland CA (E), Omaha NE (A), Colorado Springs CO (B), Long Beach CA (C), Wichita KS (D), Pittsburgh PA (E). ClimateZone type extended (desert, mediterranean, semi-arid, cold-humid). CLAUDE.md hardcoded push-to-main. Build green, 50 city pages total. | 25 city pages | Live on main. Next: chunk 3, ~25 remaining T1 cities, rotation at A. |
| 2026-06-04 | Chunk 3 | Final 25 T1 city pages, completing the T1 target. Detroit MI (A), Mesa AZ (B), Tulsa OK (C), Arlington TX (D), Cleveland OH (E), Bakersfield CA (A), Aurora CO (B), Honolulu HI (C), Anaheim CA (D), Riverside CA (E), Corpus Christi TX (A), Lexington KY (B), Henderson NV (C), Saint Paul MN (D), Cincinnati OH (E), Greensboro NC (A), Newark NJ (B), Lincoln NE (C), Toledo OH (D), Buffalo NY (E), Jersey City NJ (A), Madison WI (B), Norfolk VA (C), Richmond VA (D), Boise ID (E). New state files: Michigan, Hawaii, New Jersey, Idaho. Fixed invalid service slugs. Build green, 75 city pages, 155 site pages, template rotation balanced 15 each A to E. T1 COMPLETE. | 25 city pages | Live on main. Next: chunk 4 begins T2 (next ~300 cities), rotation at A. |
| 2026-06-04 | Chunk 4 | First 25 T2 city pages. Plano TX (A), Scottsdale AZ (B), Durham NC (C), Baton Rouge LA (D), Salt Lake City UT (E), Stockton CA (A), Reno NV (B), Winston-Salem NC (C), Chattanooga TN (D), Knoxville TN (E), Irvine CA (A), St. Petersburg FL (B), Laredo TX (C), Lubbock TX (D), Des Moines IA (E), Chandler AZ (A), Spokane WA (B), Fort Lauderdale FL (C), Birmingham AL (D), Rochester NY (E), Garland TX (A), Chula Vista CA (B), Akron OH (C), Little Rock AR (D), Worcester MA (E). New state files: Utah, Iowa, Alabama, Arkansas. Template rotation balanced at 20 each A to E. Build green, 100 total city pages, ~180 site pages. | 25 city pages | Live on main. Next: chunk 5, next 25 T2 cities, rotation at A. |

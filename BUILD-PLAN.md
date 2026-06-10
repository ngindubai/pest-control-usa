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

**Where we are:** Phase 3 T3 in progress. Chunk 16 complete: 400 total city pages built (75 T1 + 300 T2 + 25 T3). T2 is COMPLETE. Next: chunk 17, T3, rotation at A.

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

- Chunks 1-7 each shipped a balanced mix (5 each A to E). Running total: 35 each A to E.
- Next block template lead: **A** (rotation continues across the batch)

---

## CITY TIER QUEUE

- T1 (75 metros): COMPLETE.
- T2 (next ~300): COMPLETE. 300 cities built.
- T3 (~5,000 incorporated places >5,000 pop): IN PROGRESS. 25 built. Built state by state.

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
| 2026-06-06 | Chunk 7 | 25 T2 city pages. No new state files. TX: Amarillo, Frisco, McAllen, Killeen, Mesquite. CA: Santa Clarita, Rancho Cucamonga, Ontario, Elk Grove, Hayward, Sunnyvale, Garden Grove. CO: Fort Collins, Lakewood. GA: Macon, Sandy Springs. VA: Alexandria. FL: Coral Springs, Gainesville, Miramar. AZ: Surprise. IL: Naperville. WA: Bellevue. NY: Syracuse. NC: High Point. Template rotation balanced 35 each A-E. 175 total cities, 258 site pages. Build green. | 25 city pages | Live on main. Next: chunk 8. |
| 2026-06-06 | Chunk 8 | 25 T2 city pages. No new state files. TX: Grand Prairie, Denton, Waco, Midland. WA: Vancouver. FL: Port St. Lucie, West Palm Beach, Clearwater. CA: Oceanside, Palmdale, Corona, Salinas, Roseville, Lancaster. MI: Lansing, Ann Arbor. IL: Joliet, Rockford. UT: Provo. SC: Charleston. VA: Roanoke. PA: Allentown. NY: Albany. GA: Athens. WI: Green Bay. Template rotation A=41 B=40 C=40 D=40 E=39. 200 total cities, 283 site pages. Build green. | 25 city pages | Live on main. Next: chunk 9. |
| 2026-06-07 | Chunk 9 | 25 T2 city pages. New state files: Alaska (Anchorage), Rhode Island (Providence), New Hampshire (Manchester). Existing states expanded: AL (Mobile), CT (Bridgeport, New Haven), CO (Thornton), TN (Murfreesboro), MI (Sterling Heights), UT (West Valley City), IL (Peoria, Elgin), MA (Springfield), TX (Irving, Beaumont, Abilene), CA (Santa Rosa, Pomona, Torrance, Pasadena, Visalia, Vallejo, Concord, Simi Valley, Thousand Oaks). Template rotation A=46 B=45 C=45 D=45 E=44. 225 total cities, 308 site pages. Build green. | 25 city pages | Live on main. Next: chunk 10. |
| 2026-06-08 | Chunk 10 | 25 T2 city pages. No new state files. IA: Cedar Rapids. OK: Norman, Broken Arrow. NJ: Elizabeth. MI: Warren, Dearborn. MO: Columbia, Independence. KS: Topeka. IN: Evansville, South Bend. IL: Springfield. MN: Rochester. CA: Escondido. WA: Kent. CO: Westminster, Arvada, Pueblo. FL: Lakeland, Palm Bay. TX: Carrollton, Round Rock, Lewisville. OR: Gresham. CT: Stamford. Template rotation A=51 B=50 C=50 D=50 E=49. 250 total cities, 333 site pages. Build green. | 25 city pages | Live on main. Next: chunk 11. |
| 2026-06-08 | Chunk 11 | 25 T2 city pages. No new state files. KS: Olathe. WA: Everett, Renton. CT: Waterbury. NC: Wilmington. AZ: Yuma. MI: Flint. CO: Centennial. OR: Hillsboro, Bend. FL: Pompano Beach, Davie, Boca Raton. CA: Fullerton, Orange, Santa Clara, Clovis, Murrieta, Costa Mesa, Antioch, El Monte, Temecula, Downey, West Covina, Inglewood. Template rotation A=56 B=55 C=55 D=55 E=54. 275 total cities, 358 site pages. Build green. | 25 city pages | Live on main. Next: chunk 12. |
| 2026-06-09 | Chunk 12 | 25 T2 city pages. No new state files. TX: Pearland, Sugar Land, Odessa. FL: Fort Myers, Sunrise. UT: West Jordan. NV: Sparks. CO: Boulder. WA: Kirkland. NJ: Trenton. PA: Erie, Reading. IN: Carmel. GA: Roswell. MI: Livonia. OK: Edmond. IL: Waukegan. CA: Victorville, Berkeley, Daly City, Burbank, Fairfield, Norwalk, Jurupa Valley, Richmond. Template rotation A=61 B=60 C=60 D=60 E=59. 300 total cities, 383 site pages. Build green. | 25 city pages | Live on main. Next: chunk 13. |
| 2026-06-09 | Chunk 13 | 25 T2 city pages. No new state files. MA: Lowell, New Bedford. OR: Beaverton. MN: Bloomington. GA: Warner Robins. LA: Lafayette, Lake Charles. AL: Tuscaloosa. CO: Greeley, Longmont. NC: Concord, Asheville. WI: Kenosha. UT: Orem, Sandy. KS: Kansas City. AR: Fayetteville. IN: Bloomington. VA: Portsmouth. IA: Davenport. SC: North Charleston. AZ: Goodyear. MO: Lee's Summit. WA: Spokane Valley. TN: Jackson. Template rotation A=66 B=65 C=65 D=65 E=64. 325 total cities, ~408 site pages. Build green. | 25 city pages | Live on main. Next: chunk 14. |
| 2026-06-09 | Chunk 14 | 25 T2 city pages. No new state files. AR: Fort Smith. NJ: Clifton, Camden. MO: O'Fallon, St. Joseph. MS: Gulfport. MA: Brockton, Cambridge, Lynn, Quincy. IN: Fishers. AZ: Avondale. TN: Franklin. NM: Las Cruces, Rio Rancho. IA: Sioux City. UT: Ogden, St. George. OK: Lawton. WI: Racine, Appleton. NC: Gastonia. OH: Hamilton. SC: Mount Pleasant. AL: Hoover. Template rotation A=71 B=70 C=70 D=70 E=69. 350 total cities, 430 site pages. Build green. | 25 city pages | Live on main. Next: chunk 15. |
| 2026-06-10 | Chunk 15 | 25 T2 city pages (FINAL T2 BATCH). New state files: montana, wyoming, maine, delaware. TX: Wichita Falls (A), Tyler (B), Richardson (C), League City (D), Allen (E). CA: Ventura (A), El Cajon (B), Santa Maria (C). ID: Nampa (D), Meridian (E). NH: Nashua (E). OH: Canton (A), Youngstown (B), Parma (E). IL: Champaign (C), Decatur (D). SC: Greenville (A). AR: Jonesboro (B). TN: Hendersonville (C). MI: Kalamazoo (D). KY: Bowling Green (E). MT: Billings (A). WY: Cheyenne (B). ME: Portland (C). DE: Wilmington (D). T2 COMPLETE (300 cities). Template rotation A=76 B=75 C=75 D=75 E=74. 375 total cities, ~456 site pages. Build green. | 25 city pages | Branch claude/practical-ramanujan-a5td1v. Next: chunk 16, T3. |
| 2026-06-10 | Chunk 16 | 25 T3 city pages (FIRST T3 BATCH). No new state files. TX: College Station (A), Baytown (B), Bryan (C), New Braunfels (D), Edinburg (E), Mission (A). CA: Vacaville (B), Rialto (C), Compton (D), Hesperia (E). FL: Deltona (A), Palm Coast (B). WA: Federal Way (C), Bellingham (D). AZ: Flagstaff (E). GA: Alpharetta (A), Albany (B). MA: Fall River (C), Newton (D). NC: Jacksonville (E), Rocky Mount (A). WI: Eau Claire (B). OK: Moore (C). MI: Troy (D), Westland (E). Template rotation A=81 B=80 C=80 D=80 E=79. 400 total cities, 483 site pages. Build green. | 25 city pages | Branch claude/practical-ramanujan-a5td1v. Next: chunk 17, T3, rotation at A. |

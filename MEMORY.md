# MEMORY.md - PestRemovalUSA

## Site Overview
- **Domain:** pestremovalusa.com (Hostinger hosting, served from the `live` branch)
- **Type:** Programmatic SEO lead generation for pest control across the USA
- **Stack:** Next.js 16 static export + TypeScript data files + GitHub Actions CI/CD
- **Repository:** https://github.com/ngindubai/pest-control-usa (private)
- **Deploy:** Push to the working branch / main triggers GitHub Actions. It builds the static export and publishes `out/` to the `live` branch, which Hostinger serves. After every block, post the live URLs of new and changed pages in chat for review (LIVE LINK REVIEW GATE in CLAUDE.md).
- **Method origin:** Ported from `ngindubai/pet-transport`. Same governance, workforce, quality gates, and block rhythm, adapted from route regulations to regional pest intelligence.

## Current State (2026-06-25)

- **Phase:** Phase 3 T3 in progress. Chunks 15-75 complete. T2 COMPLETE.
- **City pages built:** 1809 total (75 T1 + 300 T2 + 1434 T3).
- **Town pages built:** 0.
- **Total site pages:** 1891 in the static export (home, services, 50+ states, 1809 cities, core pages).
- **Templates:** 5 (A to E), all fully built. Rotation: A=372, B=361, C=363, D=370, E=343 (1809 total cities, all within 15-25% range).
- **Cities built T3 chunks 73-75 (57 total):** Chunks 73-74 (32): B/C templates, 9 states (OH, MI, IN, IL, GA, TX, FL, PA, SC). Chunk 75 (D, 25 cities): KY (8): Madisonville, Somerset, Murray, Bardstown, Glasgow, Corbin, Middlesboro, Pikeville. OK (8): Duncan, Ada, Altus, Chickasha, McAlester, Sapulpa, Tahlequah, El Reno. MS (5): Oxford, Corinth, Bay St. Louis, Picayune, Gautier. AR (4): Siloam Springs, Batesville, Blytheville, Mountain Home.
- **New state files added chunks 73-75:** none (all states already registered).
- **Next block:** Chunk 76, T3 continues, rotation at E.
- **Deploy note:** Always push directly to `main`. deploy.yml fires on every push to main and the site goes live immediately. Never use a working branch.

## Page Hierarchy and Tiering

- **State pages:** all 50, already present (`src/data/locations.ts`, route `src/app/locations/[slug]`).
- **City pages (priority order):**
  - T1: top ~75 metro cities. Quality build, >= 800 words.
  - T2: next ~300 cities. >= 500 words.
  - T3: remaining incorporated cities and towns above a population floor of 5,000. >= 350 words.
- **Town pages:** below 5,000 population, deferred. The 5,000 floor is the main adjustable knob.
- **Batch size:** 25 pages per "build the next batch".

## Build Decisions

### Architecture
- Next.js App Router. City route at `src/app/locations/[state]/[city]/page.tsx`, dispatching to one of 5 templates via `CityTemplateRouter`.
- City data lives in `src/data/cities/<state-slug>.ts`, assembled by The Librarian, one file per state. Populated incrementally per batch, never all towns at once.
- Template variant and content soul are stored per city record (slug-hash derived, overridable).

### Slug Patterns
- States: `[state-slug]` e.g. `texas`
- Cities: `/locations/[state-slug]/[city-slug]` e.g. `/locations/texas/austin`
- Slugs: lowercase, hyphen-separated, no underscores.

### Data File Locations
- States: `src/data/locations.ts` (existing, `LocationState` with `topPests` and `pestFact`)
- Services: `src/data/services.ts` (existing, 23 services)
- Cities: `src/data/cities/<state-slug>.ts` (new, per-state)
- City index and helpers: `src/data/cities/index.ts`

### Template Rotation
- 5 templates A to E, deterministic by slug hash, 15 to 25% share each. Full rules in `TEMPLATE-DIVERSIFICATION-GUIDE.md`.

## Content Rules (Always On)
- Warm, expert, reassuring tone. US English.
- Author: one of four named personas (see CLAUDE.md). Never use Gareth's real name.
- No false guarantees. No unverified pest or health claims. No em dashes anywhere. No banned vocabulary (see CLAUDE.md).

## Author Personas
- **Dr. Lena Ortiz** (Board-Certified Entomologist). Species, biology, seasonality.
- **Marcus Reed** (Lead Technician, Licensed Applicator). Treatment, inspection, cost.
- **Sandra Whitfield** (IPM and Pesticide Safety Specialist). Safety, prevention, health risks.
- **James Cole** (Service Operations Manager). Scheduling, emergencies, commercial, coverage.

## Key Decisions Log

| Date | Decision | Why |
|------|----------|-----|
| 2026-06-04 | Ported pet-transport governance and workforce method | Proven system for high-quality programmatic SEO at scale |
| 2026-06-04 | Stack stays Next.js static export (not Hugo) | Repo was already scaffolded in Next.js 16; method adapts cleanly |
| 2026-06-04 | Template count fixed at 5 (A to E), reconciled from A to H | 5 is a deliberate hard rule in the source method. More variants dilute the design system without indexation benefit |
| 2026-06-04 | City data split per state under `src/data/cities/` | Keeps files reviewable and avoids one giant file |
| 2026-06-04 | Town population floor set at 5,000 | Avoids thin junk pages for tiny places. Adjustable |
| 2026-06-04 | Chunk 1: first 25 T1 city pages built | One block, full 7-stage pipeline, balanced template rotation (5 each A to E) |
| 2026-06-04 | Chunk 2: next 25 T1 city pages built | Fort Worth, El Paso, San Francisco, Fresno, Sacramento, Long Beach, Oakland, Washington DC, Oklahoma City, Boston, Baltimore, Louisville, Milwaukee, Albuquerque, Kansas City, St. Louis, Tampa, Orlando, Raleigh, Virginia Beach, Omaha, Colorado Springs, Wichita, Pittsburgh. Rotation continues balanced (10 each A to E). ClimateZone type extended to include desert, mediterranean, semi-arid, cold-humid. CLAUDE.md hardcoded push-to-main rule. |
| 2026-06-04 | Chunk 3: final 25 T1 city pages built, T1 complete | Detroit, Mesa, Tulsa, Arlington, Cleveland, Bakersfield, Aurora, Honolulu, Anaheim, Riverside, Corpus Christi, Lexington, Henderson, Saint Paul, Cincinnati, Greensboro, Newark, Lincoln, Toledo, Buffalo, Jersey City, Madison, Norfolk, Richmond, Boise. New state files: Michigan, Hawaii, New Jersey, Idaho. Rotation balanced at exactly 15 each A to E. Fixed invalid service slugs (rodent-control, wasp-hornet-control). American English pass applied earlier. 75 T1 cities total, 155 site pages. |
| 2026-06-04 | Chunk 4: first 25 T2 city pages, Phase 2 begins | Plano TX (A), Scottsdale AZ (B), Durham NC (C), Baton Rouge LA (D), Salt Lake City UT (E), Stockton CA (A), Reno NV (B), Winston-Salem NC (C), Chattanooga TN (D), Knoxville TN (E), Irvine CA (A), St. Petersburg FL (B), Laredo TX (C), Lubbock TX (D), Des Moines IA (E), Chandler AZ (A), Spokane WA (B), Fort Lauderdale FL (C), Birmingham AL (D), Rochester NY (E), Garland TX (A), Chula Vista CA (B), Akron OH (C), Little Rock AR (D), Worcester MA (E). New state files: Utah, Iowa, Alabama, Arkansas. Rotation balanced at 20 each A to E. 100 total cities, ~180 site pages. Build green. |
| 2026-06-05 | Chunk 5: next 25 T2 city pages | Fremont CA (A), Hialeah FL (B), Chesapeake VA (C), Glendale AZ (D), Tacoma WA (E), Gilbert AZ (A), Tempe AZ (B), Cape Coral FL (C), McKinney TX (D), Grand Rapids MI (E), Huntington Beach CA (A), Fayetteville NC (B), Jackson MS (C), Columbia SC (D), Tallahassee FL (E), Yonkers NY (A), Augusta GA (B), Moreno Valley CA (C), Springfield MO (D), Aurora IL (E), Oxnard CA (A), Paterson NJ (B), Hartford CT (C), Santa Ana CA (D), Cary NC (E). New state files: Mississippi, South Carolina, Connecticut. Rotation balanced at 25 each A to E. 125 total cities, 208 site pages. Build green. |
| 2026-06-06 | Chunk 7: next 25 T2 city pages | Amarillo TX (A), Frisco TX (B), Santa Clarita CA (C), Rancho Cucamonga CA (D), Ontario CA (E), Fort Collins CO (A), Elk Grove CA (B), Macon GA (C), Alexandria VA (D), Lakewood CO (E), Hayward CA (A), Coral Springs FL (B), Gainesville FL (C), Miramar FL (D), Surprise AZ (E), McAllen TX (A), Killeen TX (B), Naperville IL (C), Bellevue WA (D), Mesquite TX (E), Sunnyvale CA (A), Garden Grove CA (B), Syracuse NY (C), High Point NC (D), Sandy Springs GA (E). No new state files needed. Rotation balanced at 35 each A to E. 175 total cities, 258 site pages. Build green. |
| 2026-06-06 | Chunk 8: next 25 T2 city pages | Grand Prairie TX (A), Vancouver WA (B), Port St. Lucie FL (C), Denton TX (D), Oceanside CA (E), Palmdale CA (A), Waco TX (B), Lansing MI (C), Joliet IL (D), West Palm Beach FL (E), Corona CA (A), Rockford IL (B), Provo UT (C), Charleston SC (D), Salinas CA (E), Roanoke VA (A), Ann Arbor MI (B), Allentown PA (C), Midland TX (D), Clearwater FL (E), Roseville CA (A), Albany NY (B), Athens GA (C), Lancaster CA (D), Green Bay WI (E). No new state files needed. Rotation A=41 B=40 C=40 D=40 E=39. 200 total cities, 283 site pages. Build green. |
| 2026-06-07 | Chunk 9: next 25 T2 city pages | Anchorage AK (B), Providence RI (C), Manchester NH (E), Mobile AL (D), Bridgeport CT (C), New Haven CT (A), Thornton CO (D), Murfreesboro TN (B), Sterling Heights MI (C), West Valley City UT (E), Peoria IL (B), Elgin IL (D), Springfield MA (A), Irving TX (A), Beaumont TX (A), Abilene TX (B), Santa Rosa CA (E), Pomona CA (B), Torrance CA (E), Pasadena CA (D), Visalia CA (C), Vallejo CA (E), Concord CA (A), Simi Valley CA (C), Thousand Oaks CA (D). New state files: alaska, rhode-island, new-hampshire. Rotation A=46 B=45 C=45 D=45 E=44. 225 total cities, 308 site pages. Build green. |
| 2026-06-08 | Chunk 10: next 25 T2 city pages | Cedar Rapids IA (A), Norman OK (B), Broken Arrow OK (A), Elizabeth NJ (C), Warren MI (D), Dearborn MI (E), Columbia MO (A), Independence MO (C), Topeka KS (B), Evansville IN (C), South Bend IN (D), Springfield IL (E), Rochester MN (A), Escondido CA (B), Kent WA (C), Westminster CO (D), Arvada CO (E), Pueblo CO (D), Lakeland FL (A), Palm Bay FL (B), Carrollton TX (C), Round Rock TX (D), Lewisville TX (E), Gresham OR (B), Stamford CT (E). No new state files. Rotation A=51 B=50 C=50 D=50 E=49. 250 total cities, 333 site pages. Build green. |
| 2026-06-08 | Chunk 11: next 25 T2 city pages | Olathe KS (A), Everett WA (A), Renton WA (D), Waterbury CT (C), Wilmington NC (D), Yuma AZ (C), Flint MI (B), Centennial CO (E), Hillsboro OR (C), Bend OR (D), Pompano Beach FL (E), Davie FL (E), Boca Raton FL (E), Fullerton CA (B), Orange CA (C), Santa Clara CA (D), Clovis CA (E), Murrieta CA (B), Costa Mesa CA (A), Antioch CA (B), El Monte CA (C), Temecula CA (A), Downey CA (B), West Covina CA (D), Inglewood CA (A). No new state files. Rotation A=56 B=55 C=55 D=55 E=54. 275 total cities, 358 site pages. Build green. |
| 2026-06-09 | Chunk 12: next 25 T2 city pages | Pearland TX (A), Sugar Land TX (A), Odessa TX (D), Fort Myers FL (B), Sunrise FL (B), West Jordan UT (D), Sparks NV (E), Boulder CO (A), Kirkland WA (D), Trenton NJ (E), Erie PA (A), Reading PA (B), Carmel IN (B), Roswell GA (C), Livonia MI (C), Edmond OK (E), Waukegan IL (C), Victorville CA (C), Berkeley CA (C), Daly City CA (D), Burbank CA (E), Fairfield CA (B), Norwalk CA (A), Jurupa Valley CA (D), Richmond CA (E). No new state files. Rotation A=61 B=60 C=60 D=60 E=59. 300 total cities, 383 site pages. Build green. |
| 2026-06-09 | Chunks 13-14: 50 T2 city pages | Chunk 13: Lowell MA, Beaverton OR, Bloomington MN, Warner Robins GA, Lafayette LA, Tuscaloosa AL, Greeley CO, Concord NC, Kenosha WI, Orem UT, Kansas City KS, Fayetteville AR, Bloomington IN, Portsmouth VA, Davenport IA, North Charleston SC, Asheville NC, Longmont CO, Goodyear AZ, Lee's Summit MO, New Bedford MA, Spokane Valley WA, Jackson TN, Sandy UT, Lake Charles LA. Chunk 14: Fort Smith AR, Clifton NJ, O'Fallon MO, St. Joseph MO, Gulfport MS, Brockton MA, Fishers IN, Avondale AZ, Cambridge MA, Franklin TN, Las Cruces NM, Sioux City IA, Lynn MA, Rio Rancho NM, Camden NJ, Ogden UT, Lawton OK, Racine WI, Gastonia NC, Hamilton OH, St. George UT, Mount Pleasant SC, Hoover AL, Quincy MA, Appleton WI. No new state files. Rotation A=71 B=70 C=70 D=70 E=69. 350 total cities, 430 site pages. Build green. |
| 2026-06-18 | Chunks 49-50: 50 T3 city pages across 21 states | CA: Rancho Cordova, Chino, Menifee, Mission Viejo, Tustin, Poway. CO: Fountain. FL: Delray Beach, Palm Beach Gardens, Riviera Beach, St. Cloud, Pinellas Park. GA: LaGrange, Griffin. IL: Rock Island, Crystal Lake, Carpentersville, St. Charles. IN: East Chicago. IA: Mason City. KS: Derby. LA: Zachary. MI: Mount Pleasant, Lincoln Park, Allen Park, Romulus. MN: Faribault. MO: Nixa. NC: Holly Springs, New Bern, Kinston, Morrisville. OH: Sandusky, Westlake, Niles, Solon. OK: Enid, Yukon. PA: Coatesville. TN: Millington. TX: The Colony, Deer Park, Harker Heights. VA: Manassas Park. WA: Wenatchee, Pullman, Issaquah, University Place. WI: De Pere, Stevens Point. Rotation A=243 B=241 C=241 D=240 E=238. 1203 total cities, 1286 site pages. Build green. |
| 2026-06-19 | Chunks 51-52: 50 T3 city pages across 13 states | TX: Schertz, Friendswood, Rosenberg, Saginaw, Converse, Live Oak. FL: Wellington, Ocoee, Haines City, Plant City, Greenacres, Clermont. GA: Conyers, Cartersville, Covington, Milledgeville, Thomasville. OH: Fairborn, Lancaster, Troy, Piqua, Marysville, Perrysburg, Miamisburg. NC: Knightdale. IL: Elmhurst, Streamwood, Addison, Lisle. MI: Monroe, Ferndale, Mount Clemens. IN: Seymour, Clarksville, New Castle. MN: Shoreview, Owatonna, Brooklyn Center, Chaska, Champlin. MO: Rolla, Hannibal, Arnold. WI: Middleton, Marshfield, Onalaska, Wisconsin Rapids. PA: Hanover. TN: East Ridge, McMinnville. Rotation A=253 B=251 C=251 D=250 E=248. 1253 total cities, 1336 site pages. Build green. |

## ClimateZone Values (extended 2026-06-04)

Valid ClimateZone values (see `src/types/index.ts`): hot-humid, hot-arid, desert, mediterranean, semi-arid, cold-humid, temperate, cold, tropical.

## Mistakes to Avoid
- Never bulk-generate pages without the full 7-stage quality gate.
- Never let a block commit go out without the BUILD-PLAN.md, build_state.json, and MEMORY.md updates and the live review links.
- Never fabricate a pest fact, a season of activity, or a disease claim. Verify or flag.
- The `live` branch is compiled output only. Never edit it directly.
- `.github/workflows/*.yml` cannot be edited via the GitHub MCP connector (403). Provide the full file for Gareth to paste via the GitHub web editor.
- No em dashes anywhere, ever.

# BUILD-PLAN.md - PestRemovalUSA

> Quick-reference checklist and session log. Update it on every block AND at session end. For the anti-penalty engine, reference `TEMPLATE-DIVERSIFICATION-GUIDE.md`. For role detail, reference `workforce/`.

---

## THE BLOCK RHYTHM (read before every session)

- **One "build the next batch" = one block. Never more.**
- **A block = 25 pages** (or one equivalent non-page unit).
- Every block runs the full 7-stage pipeline: Geographer, Wordsmith, Interrogator, Chameleon, Optimiser, Auditor, Builder.
- After commit, deploy is automatic on push. Then post the live URLs of all new and changed pages for review (LIVE LINK REVIEW GATE in CLAUDE.md).
- Every block also updates BUILD-PLAN.md, build_state.json, and MEMORY.md in the same commit (MANDATORY DOCS UPDATE).
- Bulk-generation without the quality gate is banned.

**Where we are:** Phase 1 in progress. Chunk 1 complete: 25 of ~75 T1 city pages built. 50 T1 cities remaining.

---

## PHASES

### Phase 0 - Architecture and governance (COMPLETE 2026-06-04)
- Governance files, 14 worker souls, 5 content souls, template system, seed data, city route scaffold.

### Phase 1 - T1 city pages (IN PROGRESS)
- Top ~75 metro cities. >= 800 words each. Quality build.
- Template rotation across A to E.
- Chunk 1 done: 25 cities built (5 each A to E). 50 remaining.
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
| 2026-06-04 | Chunk 1 | First 25 T1 city pages through the full 7-stage pipeline. Added 20 metros: New York, Los Angeles, Chicago, Philadelphia, San Antonio, San Diego, Dallas, San Jose, Jacksonville, Columbus, Charlotte, Indianapolis, Seattle, Denver, Nashville, Atlanta, Las Vegas, Portland, Memphis, New Orleans. Balanced template rotation (5 each A to E). Verified regional pest data, local FAQs, internal links, schema. Build green, one H1 each, unique titles, no dashes or banned vocab. | 25 city pages | Live on merge to main. Next: chunk 2, next 25 T1 cities. |

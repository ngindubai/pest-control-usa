# MEMORY.md - PestRemovalUSA

## Site Overview
- **Domain:** pestremovalusa.com (Hostinger hosting, served from the `live` branch)
- **Type:** Programmatic SEO lead generation for pest control across the USA
- **Stack:** Next.js 16 static export + TypeScript data files + GitHub Actions CI/CD
- **Repository:** https://github.com/ngindubai/pest-control-usa (private)
- **Deploy:** Push to the working branch / main triggers GitHub Actions. It builds the static export and publishes `out/` to the `live` branch, which Hostinger serves. After every block, post the live URLs of new and changed pages in chat for review (LIVE LINK REVIEW GATE in CLAUDE.md).
- **Method origin:** Ported from `ngindubai/pet-transport`. Same governance, workforce, quality gates, and block rhythm, adapted from route regulations to regional pest intelligence.

## Current State (2026-06-04)

- **Phase:** Phase 1 in progress. Chunk 1 complete.
- **City pages built:** 25 of ~75 T1 targets. 50 T1 cities remaining.
- **Town pages built:** 0.
- **Total site pages:** ~106 in the static export (home, services, 50 states, 25 cities, core pages).
- **Templates:** 5 (A to E), all fully built. Rotation balanced at 5 each (20% per template).
- **Cities built:** Austin, Houston, San Antonio, Dallas, Miami, Jacksonville, Phoenix, Minneapolis, Los Angeles, San Diego, San Jose, New York City, Chicago, Philadelphia, Columbus, Charlotte, Indianapolis, Seattle, Denver, Atlanta, Las Vegas, Portland, New Orleans, Nashville, Memphis.
- **Next block:** Chunk 2, next 25 T1 cities, rotation continues at A.
- **Deploy note:** deploy.yml fires on push to main. City pages go live when the working branch merges to main.

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

## Mistakes to Avoid
- Never bulk-generate pages without the full 7-stage quality gate.
- Never let a block commit go out without the BUILD-PLAN.md, build_state.json, and MEMORY.md updates and the live review links.
- Never fabricate a pest fact, a season of activity, or a disease claim. Verify or flag.
- The `live` branch is compiled output only. Never edit it directly.
- `.github/workflows/*.yml` cannot be edited via the GitHub MCP connector (403). Provide the full file for Gareth to paste via the GitHub web editor.
- No em dashes anywhere, ever.

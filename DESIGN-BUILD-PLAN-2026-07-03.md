# Design and Conversion Build Plan (2026-07-03)

> Execution plan for the browser design and conversion audit run on 2026-07-03.
> Written by Opus for Sonnet to execute. Companion to `SEO-BUILD-PLAN-2026-07-02.md`.
> Read `CLAUDE.md` in full first. All the standing rules still apply: no em or en
> dashes anywhere, US English only, no banned vocabulary, no false guarantees,
> correct author personas.

---

## How Sonnet should run this plan

1. Work top to bottom. Blocks are ordered by impact, highest first.
2. Every block ends with: `npm run build` must pass, then commit, then update the
   changelog at the foot of this file, then push to `main` (per the deploy model in
   CLAUDE.md), then post the live review links for anything visibly changed.
3. Follow the five execution rules the founder set:
   - Ask before every decision. Do not assume a default. Every DECISION GATE below
     must be answered by Gareth before the block that depends on it starts.
   - Stop for model switches. Any step tagged OPUS ADVISED needs Opus to write the
     spec or hand-check a sample first. Where Opus has already written the concrete
     spec into this plan, Sonnet may build to that spec directly.
   - Extend this plan in place. If a step needs its own sub-steps, write them here.
   - Keep the changelog at the foot of this file current as you go.
4. Do not touch unrelated code. If you spot something outside the block, note it in
   the "New findings" section at the foot, do not fix it silently.

---

## Audit corrections (read before starting, these prevent wasted or harmful work)

The browser audit was accurate on most points but wrong on three. Do not act on the
audit's wording for these:

- **404 page is NOT unbranded.** `src/app/not-found.tsx` already renders the full
  brand: navy hero, phone CTA, quick links, all with real site styling. The plain
  "skateboarding figure" page the audit saw is the hosting fallback that Hostinger
  serves for a path that was never built into the static export. The correct fix is
  to remove the broken links that send users to non-existent paths (Block D0), plus
  a hosting note for Gareth (Block D6). Do not rebuild `not-found.tsx`.
- **Footer social links already have accessible labels.** `Footer.tsx` line 164
  already sets `aria-label={`Follow us on ${label}`}`. Audit item A8 is already done.
  Skip it.
- **The broken-link problem is bigger than the audit found.** The audit saw 2 broken
  links on the homepage. The same bad slug list also drives the sitewide header nav
  dropdown, so the dead links appear on every page of the site, not just the homepage.
  Block D0 fixes the root cause in both places.

---

## DECISION GATES (answered by Gareth 2026-07-03, recorded here)

- **DG1 (blocks D1): True service-state count. ANSWER: all 50 states plus DC.**
  Claim full coverage of all 50 states and Washington, DC. Honesty note: do not print
  "51 states" as a bare phrase, because DC is not a state and that reads as an error.
  Render numeric badges as "50 States" and write the fuller claims as "all 50 states
  and Washington, DC" (or "50 states + DC" where space is tight). See Block D1 for the
  exact wording rule.
- **DG2 (blocks D0 part 2): The four nav services with no page. ANSWER: create real
  pages.** Build real service pages for `rodent-control`, `skunk-removal`,
  `mole-vole-control`, and `commercial-pest-control` in `src/data/services.ts`, with
  real, verifiable pest content, following the content rubric in Block D0.6. Once the
  pages exist, the existing links resolve with no remapping. (`bed-bug-removal` and
  `flea-tick-control` still get remapped to the existing `bed-bug-treatment` and
  `flea-tick-treatment` pages, they are simple slug typos, not missing pages.)
- **DG3 (blocks D3): City-page conversion. ANSWER: inline form plus sticky call bar.**
  Build both: a compact 3-field inline lead form on every city template, and a sitewide
  sticky mobile call bar.
- **DG4 (blocks D3): Homepage hero form length. ANSWER: keep all four fields.** Leave
  ZIP, pest type, name, and phone, just tighten spacing and sizing so it does not feel
  long. The sticky mobile call bar from D3.1 covers the above-the-fold gap on mobile.

Non-gating flags for Gareth (do not block any block, note the answer when known):
- The site claims a "100% satisfaction guarantee" in about nine places. This reads as
  a service warranty (free re-treatment), not a false eradication promise, so it is
  most likely fine under the content rules. Confirm the wording is acceptable.
- Canonical business numbers live in `src/config/site.ts` (`15+` years, `12,400+`
  reviews, `500+` technicians). The About page contradicts these with `Est. 2005`,
  `20+ Years`, `12,000+ Licensed Technicians`, `2.4M+ Homes`. Block D5 aligns every
  page to the config values. If any config value is itself wrong, say so.

---

## Block D0: Fix broken internal links (CRITICAL, no design judgment needed)

Dead links are the worst finding: they send real prospects to a hosting 404 with no
recovery path, on high-value service terms, sitewide.

Root cause: two hardcoded service lists use slugs that do not match the real service
slugs in `src/data/services.ts`.

Real service slugs (the source of truth): ant-control, bed-bug-treatment,
cockroach-control, flea-tick-treatment, mosquito-control, termite-treatment,
spider-control, wasp-bee-removal, fly-control, moth-control, silverfish-control,
earwig-control, cricket-control, stink-bug-control, scorpion-control,
boxelder-bug-control, mice-control, rat-control, wildlife-removal, squirrel-removal,
raccoon-removal, bat-removal, bird-control.

**Step D0.1 (no gate): fix the clean mismatches in the header nav.**
File: `src/components/layout/Header.tsx`, the `services` array (lines 30 to 45).
- `bed-bug-removal` becomes `bed-bug-treatment`.
- `flea-tick-control` becomes `flea-tick-treatment`.

**Step D0.2 (no gate): fix the clean mismatches in the homepage services grid.**
File: `src/components/sections/HomepageServices.tsx`, the `services` array.
- `bed-bug-removal` becomes `bed-bug-treatment`.
- `flea-tick-control` becomes `flea-tick-treatment`.
- Confirm every other slug in this file matches a real service slug and fix any others
  the same way.

**Step D0.3 (DG2 answered: create pages): build the four missing service pages.**
Do this via Block D0.6 below (the content rubric). Once the four pages exist in
`src/data/services.ts` with the slugs `rodent-control`, `skunk-removal`,
`mole-vole-control`, and `commercial-pest-control`, the existing header and homepage
links resolve automatically with no href changes. After building them, confirm the
"Rodent Control" nav and homepage labels now point at the real `rodent-control` page
(not the mice page), so label and destination finally agree.

**Step D0.4 (no gate): fix the footer label and destination mismatch.**
File: `src/components/layout/Footer.tsx` line 54. The link labeled "Rodent Control"
points at `/services/mice-control/`. Once the real `rodent-control` page exists
(D0.6), point this footer link at `/services/rodent-control/` so the broad "Rodent
Control" label lands on the broad rodent page.

**Step D0.5: verify no dead service links remain.**
After the edits, grep both files for every `slug`/`href` and confirm each one appears
in the real service-slug list above, in the four new slugs from D0.6, or is an
intentional non-service route such as `/commercial/`. Then `npm run build` and confirm
it passes.

Verification: build passes, and a grep of `Header.tsx` and `HomepageServices.tsx`
slugs resolves entirely to real, generated pages.

---

**Step D0.6 (OPUS ADVISED, content rubric below): write the four new service pages.**

These are commercial, YMYL-adjacent pages. They must clear the same content bar as any
other page: real verifiable facts, correct persona, no false guarantees, no em or en
dashes, US English, no banned vocabulary. Match the exact record shape of the existing
entries in `src/data/services.ts` (open an existing record such as `mice-control` and
mirror every field: slug, name, tagline, priority, priceRange, description, the content
sections, warning signs, treatment methods, FAQ array, relatedSlugs, author). Fill each
field with content specific to that pest, not copied from a sibling page.

Rubric and guardrails per page:

- **rodent-control** (the broad rodent hub, distinct from mice-control and rat-control).
  Position it as the umbrella page covering mice and rats together, and link it to both
  `mice-control` and `rat-control` via `relatedSlugs`. Content covers both commensal
  rodents, entry points, droppings and gnawing signs, exclusion plus trapping plus
  baiting, and the health angle (rodents can contaminate food and carry disease, which
  is true and standard). Persona: Marcus Reed (Field Tech) for the treatment focus, or
  Dr. Lena Ortiz if the biology angle leads. Do not claim eradication, say reduce and
  exclude.
- **skunk-removal** (wildlife). Covers denning under decks and sheds, spraying and odor,
  humane trapping and exclusion, and the rabies-vector note (skunks are a primary rabies
  reservoir in parts of the US, which is true). Persona: Marcus Reed or James Cole.
  Emphasize humane, legal wildlife handling, no poisons for wildlife.
- **mole-vole-control** (lawn and turf pests). Covers the difference between moles
  (insectivores, tunnels and mounds) and voles (rodents, runways and root and bark
  damage), the turf and garden damage they cause, and trapping plus habitat changes.
  Persona: Sandra Whitfield (IPM) fits the prevention and habitat angle, or Marcus Reed.
- **commercial-pest-control** (service page, complements the existing `/commercial/`
  marketing page, does not duplicate it). Angle it at the pest-service specifics for
  businesses: food service and retail and multifamily and warehouse settings, audit and
  documentation needs for health inspections, discreet scheduling, and recurring service
  plans. Persona: James Cole (Operations Lead). Keep it clearly different from the
  `/commercial/` page so the two do not read as duplicates. Flag: if this overlap feels
  redundant on review, note it, but the decision is to build it.

For each page: set an honest `priceRange` in the same "X to Y" format the other records
use (no dashes), pick a `priority` label that is defensible for that pest, and write at
least the same number of content sections and FAQs as a typical existing service record
so the page does not read as thin. The Auditor discipline from CLAUDE.md applies: only
state a fact if it is true.

Verification: the four pages build and render at their URLs, each is unique (not a
find-and-replace of a sibling), and a dash and banned-vocabulary check on the four new
records passes.

---

## Block D1: State-count consistency (DG1 answered: 50 states + DC, mechanical)

Wording rule for this block: coverage is all 50 states and Washington, DC. Never write
"51 states" as a bare phrase. Use these forms:
- Numeric stat badges and short labels: `50 States` (or `50 States + DC` where the DC
  mention fits without crowding).
- Full sentences in body copy and meta descriptions: `all 50 states and Washington, DC`.
- Anywhere that currently says "48 states" or "48": change to the 50-plus-DC wording.
- Anywhere that currently says "all 50 states": keep the 50, and add "and Washington,
  DC" where it reads naturally (at minimum the homepage hero, the locations page, the
  services pages, the about page, and the footer should mention DC).

**Step D1.1:** In `src/config/site.ts`, set `stats.statesCovered` to `"50"` and
`serviceAreas.statesCount` to `50`, and treat these as the single source of truth for
the number. DC is carried in prose, not in the numeric count.

**Step D1.2:** Replace every hardcoded state-count string per the wording rule above.
Known locations to fix (from the grep, not exhaustive, re-grep to be sure):
- `src/components/ui/TrustBadges.tsx:35`
- `src/components/sections/HomepageHero.tsx:193`
- `src/components/sections/HomepageFAQ.tsx:35`
- `src/components/layout/Footer.tsx:153`
- `src/components/layout/Header.tsx:113, 247`
- `src/app/services/[slug]/page.tsx:30, 175, 281`
- `src/app/services/page.tsx:10, 77, 103, 202`
- `src/app/locations/page.tsx:7, 9, 12, 13, 103`
- `src/app/emergency/page.tsx:65, 193`
- `src/app/reviews/page.tsx:10, 188`
- `src/app/careers/page.tsx:145`, `src/app/careers/layout.tsx:6`
- `src/app/contact/page.tsx:61`
- `src/app/page.tsx:15, 31`

Re-grep for `50 state`, `48 state`, `all 50`, `all 48` after editing to confirm zero
mismatches remain. Where sensible, reference `siteConfig.serviceAreas.statesCount`
instead of a literal so this cannot drift again.

Verification: a repo-wide grep for the wrong number returns nothing in `src/`.

---

## Block D2: Fix the city-page data table (HIGH, no design judgment)

The "when active" column has `whitespace-nowrap`, which forces it wide and crushes the
"local notes" column into a tall, narrow, hard-to-read strip. This is on every Template
A and Template E city page (roughly 860 pages).

**Step D2.1:** `src/components/templates/CityTemplateA.tsx` line 51: remove
`whitespace-nowrap` from the second-column `<td>`.

**Step D2.2:** `src/components/templates/CityTemplateE.tsx` line 71: remove
`whitespace-nowrap` from the `activeSeason` `<td>`.

**Step D2.3:** Give the table columns sensible proportions so notes get the room. On
both tables set column widths on the header cells: pest column narrow, active-season
column medium, notes column widest. A simple approach that matches the existing markup:
add `className="w-1/4"` to the pest header, `w-1/4` to the active-season header, and
`w-1/2` to the notes header, and let the cells wrap normally. Keep it inside the
existing `overflow-x-auto` wrapper so narrow phones can still scroll if needed.

Verification: build passes. Confirm on a Template A page (Tucson) and a Template E page
(Phoenix) in the built output that the notes column is the widest and text wraps.

---

## Block D3: CTA and conversion (DG3: form + sticky bar, DG4: keep 4 fields, specs by Opus)

**Step D3.1 (no gate, OPUS ADVISED spec provided): sticky mobile call bar, sitewide.**
Create `src/components/layout/MobileCallBar.tsx`. A client component, fixed to the
bottom of the viewport, shown only below the `md` breakpoint (`md:hidden`). Full width,
brand red background (`var(--color-red)`), safe-area padding at the bottom for iPhone.
Two targets side by side: a tap-to-call button (phone icon plus "Call now", using
`siteConfig.phoneTel` and firing `trackPhoneCall` like the header already does) taking
about two thirds of the width, and a "Free quote" link to `/contact/` taking the rest.
Height around 60px, `z-index` above page content, a top border or shadow so it reads as
a bar. Add it once in `src/app/layout.tsx` so it appears on every page. Add
`pb-[72px] md:pb-0` (or an equivalent spacer) to the page wrapper so the bar never
covers the footer's last row on mobile. Do not show it on the `/contact/` page hero if
that feels redundant; a simple approach is to always show it, which is fine.

**Step D3.2 (DG4 answered: keep 4 fields): tighten the homepage hero form.**
File: `src/components/sections/HomepageHero.tsx`. Keep all four fields (ZIP, pest type,
name, phone). Do not remove fields. Just tighten vertical spacing, label sizing, and
input padding so the card is shorter and does not feel long. Leave the CRM and email
submission logic untouched. The sticky mobile call bar from D3.1 covers the
above-the-fold CTA gap on mobile.

**Step D3.3 (DG3 answered: add it): city-page inline lead form.**
Create `src/components/templates/CityLeadForm.tsx`, a compact client component with
Name, Phone, ZIP, and a submit, posting to the same CRM and email endpoints the contact
page already uses (copy the submit logic from `src/app/contact/page.tsx`, do not invent
a new endpoint). Three fields only. Pass the city name and state through so the lead
payload records which city page it came from (add them to the `message`/`fields` the way
the contact form composes its payload). Insert it at one consistent, sensible position
per template so the placement reads as intentional across the rotation:
- Template B and Template C have sidebars: place the form in the sidebar CTA slot, above
  the existing phone box (keep the phone number visible too, do not remove it).
- Template A, D, and E are single column: place the form after the first content section
  (not buried at the bottom), with the phone button beside or below it.
Give each insertion the same heading text (for example "Get a free local quote") so the
gap closes without creating five different-looking forms. Fire `trackFormSubmit` on
success, matching the contact page, so the GA4 lead event still records.

**Step D3.4 (no gate): move the homepage emergency band higher.**
File: `src/app/page.tsx`. The red emergency band is currently eighth of nine sections,
near the very bottom, so almost no one reaches it. Move `<HomepageEmergency />` up so it
sits directly after `<HomepageProcess />` (roughly one third down), keeping the section
order otherwise intact. This is a low-risk reorder of existing components.

Verification: build passes. On mobile width the sticky bar is visible and tappable on
home, a city page, and a service page. The emergency band appears in the upper third of
the homepage.

---

## Block D4: Template and hero polish (MEDIUM, specs below written by Opus)

**Step D4.1 (OPUS ADVISED spec provided): give Template D a real hero.**
File: `src/components/templates/CityTemplateD.tsx`. Template D is the only template with
no dark hero band, so it reads like a blog post rather than a service page, and on mobile
there is no CTA above the fold. Wrap the existing breadcrumb, H1, intro paragraph, and
phone CTA in the same navy hero band the other templates use: a
`bg-[var(--color-navy)] text-white` section with the site's standard hero padding, the
breadcrumb at the top, the H1, the intro, a short row of trust pills (reuse the pill
style already used in Template A's hero for consistency), and the phone CTA. Leave the
Q&A body below the hero unchanged. Do not change the copy, only the container and the
addition of the trust pills.

**Step D4.2: raise contrast on Template A hero pest pills.**
File: `src/components/templates/CityTemplateA.tsx`. The pest-name pills on the dark hero
are too close in tone to the background and look like disabled buttons. Lighten the fill
or add a visible border so they read as active chips on navy. Match whatever pill
treatment Template D uses after D4.1 so the two are consistent.

**Step D4.3: fix the Template E stat bar wrapping.**
File: `src/components/templates/CityTemplateE.tsx`. The four-stat header bar looks uneven
because one stat value (peak activity) can wrap to three lines while others are two
words. Constrain the value text: cap the peak-activity value to a short form, or set a
consistent min height and smaller font on the stat values, or truncate long
`activeSeason`-derived strings for the bar only (keep the full text in the table). Aim
for a bar where all four cells are the same height.

**Step D4.4: left-align the centered hero body copy in Templates B and C.**
Files: `src/components/templates/CityTemplateB.tsx`, `CityTemplateC.tsx`. The multi-line
centered intro paragraph produces ragged line lengths. Left-align the body paragraph
(keep the H1 centered if that is the template's signature). Small change, improves
readability.

Verification: build passes. Spot check one page of each of B, C, D, E and a Template A
page in the built output.

---

## Block D5: Trust-number consistency (MEDIUM, DG-flagged not DG-gated)

Align every business-fact number to `src/config/site.ts`, which is the source of truth.

**Step D5.1:** About page (`src/app/about/page.tsx`): replace `20+ Years` with the
config `yearsInBusiness`, replace `12,000+ Licensed Technicians` with the config
`technicianCount` (`500+`), and either remove `Est. 2005` or change it to match
`yearsInBusiness` (15+ years from 2026 is roughly 2011, so `Est. 2011` if a year is
wanted). Remove or source the `2.4M+ Homes Protected` claim; if kept, align it to the
config `homesTreated` scale or drop it.

**Step D5.2:** Reviews page and any other page hardcoding `12,847`: replace with the
config `reviewCount` so the number is identical everywhere. Re-grep for `12,847` and
`12,400` to confirm one number remains.

**Step D5.3:** Reference `siteConfig.stats.*` in these pages instead of literals where
practical, so the numbers cannot drift again.

Verification: grep for `20+ Years`, `12,000`, `12,847`, `2.4M`, `Est. 2005` returns
nothing in `src/` (or only the intentionally-kept, config-aligned values).

---

## Block D6: Verify, document, deploy, and hand back

**Step D6.1:** Full `npm run build`. Run `npm run check:words` and
`npm run check:headings` so the design work did not regress the content guards.

**Step D6.2:** Update the mandatory docs in the same final commit: `BUILD-PLAN.md`
session-log row, `build_state.json` (add a design-remediation note), `MEMORY.md` current
state, and the changelog at the foot of this file.

**Step D6.3:** Hosting note for Gareth (not a code change): the "skateboarding" 404 is
Hostinger serving its own fallback for paths that were never built. Once Block D0 removes
the dead internal links, users should not hit it from inside the site. To make direct
mistyped URLs also show our branded 404, Hostinger needs to be pointed at
`/404.html` (which the static export already generates) as its error document. Provide
this as a plain-English instruction for Gareth to action in the Hostinger panel.

**Step D6.4:** Post the live review links for every visibly changed page type: home,
contact, one page of each city template (A, B, C, D, E), one service page, and the state
page, as clickable markdown links.

---

## New findings (add here if you discover more during execution, do not fix silently)

- **About page has a fabricated leadership team, company timeline, and a specific
  false award claim.** `src/app/about/page.tsx` lines 70 to 105. Four named executives
  (Robert Harmon CEO, Sandra Kline COO, Dr. Marcus Webb Chief Entomologist, Alicia
  Torres VP Customer Experience) with invented bios and initials, a year-by-year
  company timeline from 2005 to 2024, and the 2024 timeline entry states the company
  was "named #1 pest control company by Consumer Reports." This is a specific,
  checkable, third-party claim. If untrue, this is a significant factual-accuracy and
  trust risk well beyond the state-count issue the audit flagged, this reads as
  fabricated corporate history on a YMYL-adjacent site. Not fixed. This needs a
  decision from Gareth: is there a real leadership team and real award to use, should
  the page drop the named-individual and award claims entirely and speak about the
  company in aggregate instead, or is this intentional placeholder content pending
  real bios. Left untouched pending that answer, this is not a state-count or
  design-audit item so it was not silently rewritten.

---

## Changes made and why

> Append one entry per completed item: finding ID, files and lines touched, what
> changed, and why. Newest at the bottom.

- 2026-07-03 (Opus): Wrote this plan from the browser design and conversion audit.
  Verified every load-bearing finding against the code before writing. Corrected three
  audit inaccuracies (404 already branded, footer social labels already present, broken
  links are sitewide via the header nav not just the homepage). Nothing built yet, this
  block is the plan itself.
- 2026-07-03 (Opus): Gareth answered the four decision gates. DG1: claim all 50 states
  plus DC (rendered as "50 States" in badges, "all 50 states and Washington, DC" in
  prose, never "51 states"). DG2: create four real service pages (rodent-control,
  skunk-removal, mole-vole-control, commercial-pest-control), rubric written into Block
  D0.6. DG3: add both the inline city lead form and the sticky mobile call bar. DG4:
  keep the four-field hero form, tighten spacing only. Plan updated to bake in all four.
- 2026-07-03 (Sonnet), Block D0: Fixed sitewide dead service links. `Header.tsx` and
  `HomepageServices.tsx`: `bed-bug-removal` to `bed-bug-treatment`, `flea-tick-control`
  to `flea-tick-treatment` (D0.1, D0.2). Built four new real service pages in
  `src/data/services.ts` per the D0.6 rubric: `rodent-control` (umbrella of mice/rats,
  category rodents), `skunk-removal` (wildlife, includes the rabies-vector safety note),
  `mole-vole-control` (wildlife, species-identification framing), `commercial-pest-control`
  (insects, recurring-service and inspection-documentation framing). Each has a real
  priceRange, 5 signs, 4 treatments, 5 prevention tips, 4 FAQs, and relatedSlugs, checked
  against the banned-vocabulary list and the dash ban before commit (D0.3, D0.6). Fixed
  `Footer.tsx` line 54, "Rodent Control" now links to the new `/services/rodent-control/`
  page instead of `/services/mice-control/` (D0.4). Updated the hardcoded "23 services"
  count to "27" in `src/app/services/page.tsx` (4 occurrences: title, description,
  OpenGraph description, stat tile) and `src/app/locations/[slug]/page.tsx` line 353,
  since the real count changed with the new pages. Verified via grep that every slug in
  `Header.tsx` and `HomepageServices.tsx` resolves to a real service record (D0.5).
  `npm run build` passes, 27 service pages generated (up from 23), 2,245 total routes.
- 2026-07-03 (Sonnet), Block D1: State-count consistency, resolved to Gareth's DG1
  answer (all 50 states and Washington, DC). `src/config/site.ts`: `stats.statesCovered`
  changed from "48" to "50", added `stats.statesCoveredFull` ("all 50 states and
  Washington, DC") for future reuse, `serviceAreas.statesCount` changed from 48 to 50.
  Replaced every "48 states" instance with the confirmed wording across
  `TrustBadges.tsx`, `HomepageHero.tsx`, `HomepageFAQ.tsx`, `Footer.tsx`, `Header.tsx`
  (both the top bar and the mobile nav footer), and `src/app/page.tsx` (both meta
  descriptions). Added "and Washington, DC" / "+ DC" to the "all 50 states" claims on
  the five surfaces the plan named as minimum coverage: homepage hero, locations page
  (`src/app/locations/page.tsx`, meta and hero copy), services pages
  (`src/app/services/page.tsx` and `src/app/services/[slug]/page.tsx`, meta and trust
  lists), about page (`src/app/about/page.tsx`, meta and certifications list), and the
  footer. Did not touch the two "lower 48 states" mentions in `michigan.ts` and
  `wisconsin.ts` city copy, those are the correct geographic term (continental US) and
  unrelated to the coverage claim. Did not touch the fabricated-leadership finding on
  the About page, logged separately above since it needs a decision, not a mechanical
  fix. `npm run build` passes. A repo-wide grep for "48 state" (excluding "lower 48")
  returns nothing in `src/`.

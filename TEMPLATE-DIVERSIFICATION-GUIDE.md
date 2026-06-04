# TEMPLATE-DIVERSIFICATION-GUIDE.md - PestRemovalUSA

> The anti-penalty engine. This document instructs the build agent to never ship thousands of near-identical city pages from one template. We run 5 structurally distinct templates (A to E), each paired with a content soul, rotated deterministically, with a fingerprint audit before deploy. Adapted from the proven pet-transport system.

## 1. The problem in one line

Thousands of city and town pages that share one layout (same DOM order, same H2 sequence, same FAQ position, same card grid) form a template footprint that Google can fingerprint and use to throttle crawl and skip indexation ("Discovered, currently not indexed"). The per-page unique text is a minority of the rendered HTML, so pages tip below the unique-content threshold.

## 2. Three signals we defend against

- **Boilerplate ratio.** Shared chrome plus repeated section labels must not dominate the unique local content. Hence the word-count floors in CLAUDE.md.
- **DOM template fingerprint.** Same nesting, class names, and H2 order across pages is trivial to cluster. Hence 5 skeletons.
- **Crawl-budget waste.** If a sample of pages looks identical, Google stops fetching the rest. Hence rotation plus internal linking.

## 3. Design constraint: same brand, different skeletons

All 5 templates share the palette, fonts, and UI primitives (see DESIGN.md). They differ in section order, hero composition, sidebar, FAQ format, internal-link placement, and dominant schema type. Nothing in the city data record is dropped by any template.

## 4. The 5 city templates

| ID | Name | Component | Signature |
|----|------|-----------|-----------|
| A | Field Manual | `CityTemplateA` | Dense, tabular, no big icons. Pest-by-pest table, vertical process stepper, full width. |
| B | Visual Journey | `CityTemplateB` | Full-bleed hero, quick-answer box, horizontal pest cards, right sticky sidebar. |
| C | Comparison Brief | `CityTemplateC` | Split hero, side-by-side comparisons (pest vs pest, season vs season), left step rail, Q-then-A FAQs. |
| D | Conversational Q&A | `CityTemplateD` | Minimal hero, every section is a question, no noun H2s, floating mobile CTA. |
| E | Data-Forward | `CityTemplateE` | Stats strip hero, master data tables, TL;DR sidebar, FAQ list at the very bottom. |

Each component wraps its root in `tpl-city-{a..e}` and owns a scoped CSS block. See `src/components/templates/`.

## 5. Content souls (paired to templates)

Templates change layout. Souls change the writing structure and voice. Both rotate together. The chat reads the matched soul before writing the body. Path: `workforce/content/souls/`.

| Soul | File | Template |
|------|------|----------|
| The Operator | `city-soul-a-operator.md` | A |
| The Neighbor | `city-soul-b-neighbor.md` | B |
| The Comparison Analyst | `city-soul-c-comparison.md` | C |
| The Conversational Advisor | `city-soul-d-qa.md` | D |
| The Brief Writer | `city-soul-e-brief.md` | E |

## 6. Deterministic rotation

Rotation must be reproducible: the same city slug always gets the same template, so rebuilds do not churn. The variant is computed from the slug hash and stored in the city's data record. It can be overridden per city (for example, force Template E on a complex multi-pest metro).

```ts
// src/components/templates/variant.ts
export function variantForSlug(slug: string): "A" | "B" | "C" | "D" | "E" {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return (["A", "B", "C", "D", "E"] as const)[hash % 5];
}
```

The city record carries `templateVariant` (set from this function at data-creation time, overridable) and `contentSoul`. `CityTemplateRouter` reads `templateVariant` and renders the matching component.

### Distribution targets across the city corpus

| Template | Target share | Rationale |
|----------|-------------|-----------|
| A Field Manual | 22% | Workhorse for high-volume T2 and T3 cities |
| B Visual Journey | 20% | High-search metros |
| C Comparison | 20% | Cities with two or more co-dominant pests or strong seasonality |
| D Q&A | 18% | Long-tail towns aligned to people-also-ask |
| E Data-Forward | 20% | Complex multi-pest or high-pressure cities |

## 7. Per-page workflow the agent follows

1. Read the city record. Note `templateVariant` and `contentSoul`. If absent, compute from the slug and write back.
2. Load the matched soul from `workforce/content/souls/` in full before writing any prose.
3. Open one nearby existing city page with the same variant. The new page's opener must not match its structure. Use the soul's section-opener list.
4. Write or rewrite the body following the soul's structure rules. The Wordsmith handles voice, The Chameleon humanizes after.
5. Verify the H2 set comes from this template's section list, not a universal default. No H2 may appear identically on more than 30% of pages in that template's bucket.
6. Verify the FAQ block: at least 2 of the FAQs name the city and a city-specific fact.
7. Internal links: pull related-city links so previews vary.
8. Build (`npm run build`) and confirm no errors.
9. Mark the page done in the build state and the session log.

## 8. Fingerprint audit (run before each deploy)

A script under `scripts/` (to be added when the first large batch lands) crawls the rendered pages in `out/`, extracts the H2 sequence and a DOM-skeleton hash per page, and clusters by skeleton.
- Pass: no skeleton cluster contains more than 25% of pages in its silo.
- Fail: any cluster over 40%, or any H2 string on more than 30% of pages within a variant.
On fail, send the offending pages back to The Chameleon.

## 9. Hard rules (do not violate)

- Do not add a 6th template. Keep the rotation at 5.
- Do not collapse two templates because they "look similar". They stay structurally distinct.
- Do not let any template's share fall below 15% or rise above 25%.
- Do not write identical H2s (for example "Common Pests") across more than 30% of pages within a variant. Paraphrase per page.
- Do not reuse one FAQ format across every template. Each template owns its FAQ treatment.
- Do not skip the soul-file load step before writing prose.
- Do not build more than 25 pages in one block. Quality dies.
- Front matter / data record on every city must include `templateVariant` and `contentSoul`.
- Every variant's CSS is scoped under `.tpl-city-{x}`.

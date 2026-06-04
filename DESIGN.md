# DESIGN.md - PestRemovalUSA

> The design system and the per-template visual signatures. All 5 templates share this one brand. They differ in skeleton, not in palette or fonts. Read this before building or editing any template.

## Brand tokens (source of truth: `src/app/globals.css`)

### Color
| Token | Value | Use |
|-------|-------|-----|
| navy | `#0d1b3e` | primary brand, headers, footer |
| navy-light | `#1a3a6b` | gradients, hovers |
| navy-dark | `#060e1f` | deep backgrounds |
| red | `#c0392b` | primary CTA, urgency, focus outline |
| red-light | `#e74c3c` | CTA hover, accents |
| cream | `#fafaf8` | page background sections |
| muted | `#f4f6f9` | card and panel backgrounds |
| slate-custom | `#64748b` | secondary text |

### Type
- Headings: Barlow (condensed, strong). `--font-heading`.
- Body: Inter. `--font-sans`.

### Shape and depth
- Card radius 12px, button radius 8px.
- Shadows: `--shadow-card`, `--shadow-nav`, `--shadow-cta`.

## Design constraints for all 5 templates

Every template must:
- Use only the palette and fonts above. No new brand colors.
- Reuse the shared UI primitives in `src/components/ui/` (Button, Cards, FAQItem, TrustBadges, StarRating, Banners).
- Pass mobile-first and accessibility checks (one H1, valid heading order, focus-visible, alt text).
- Render the same city data fields. Nothing is dropped between templates.
- Wrap its root in a scoped class: `tpl-city-a` through `tpl-city-e`. Variant-specific CSS lives only under that class. No bleed.

What changes between templates:
- Section order.
- Section visual treatment (cards vs tables vs side-by-side vs accordion vs stepper).
- Hero composition.
- Sidebar presence and content.
- FAQ placement and format.
- Internal-link block position and style.
- Dominant schema.org type.

## The 5 city templates (visual signatures)

| ID | Name | Hero | Sidebar | FAQ format | Signature |
|----|------|------|---------|-----------|-----------|
| A | Field Manual | Slim banner, city + state, pest-pressure chip strip | None, full width | Accordion mid-page | Dense, tabular, operations-manual feel. Tables over cards. |
| B | Visual Journey | Full-bleed hero, big city headline, CTA row | Right, sticky quote summary | Inline expander grid | Marketing-led, image-forward, generous spacing. |
| C | Comparison Brief | Split hero: local pest pressure vs typical season | Left rail step indicator | Q-then-A blocks, no accordion | Side-by-side, two-column comparisons (this pest vs that, season vs season). |
| D | Conversational Q&A | Minimal, H1 phrased as a question | None desktop, floating mobile CTA | Each section is a question | Sections are questions, not nouns. Kills the templated H2 fingerprint. |
| E | Data-Forward | Stats strip (top pests count, peak month, typical cost, response time) | Right, TL;DR + checklist | Plain list at the very bottom | Reads like a local pest brief. Tables dominate. |

## Schema emphasis by template
- A and E: LocalBusiness + Service (HowTo-style process where present).
- B: Service + LocalBusiness.
- C: Service + comparison-oriented content.
- D: FAQPage dominant + LocalBusiness.

Varying the dominant schema type per template is itself a useful diversification signal.

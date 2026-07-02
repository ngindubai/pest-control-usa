import type { CityLocation } from "@/types";

// Deterministic heading rotation (SEO build plan Step 3.2).
//
// Each template hard-codes a handful of section H2s that change only the city
// token, so before this every such heading appeared on ~100% of that template's
// pages. The Optimizer rule (workforce/seo/the-optimizer.md) and the
// TEMPLATE-DIVERSIFICATION-GUIDE cap any H2 at 30% of a variant's pages. Here
// each hard-coded heading gets 4 natural-language variants, chosen by a hash of
// the city slug salted with a stable per-heading key. The same city always
// renders the same heading (no rebuild churn), headings rotate independently of
// each other (the key is part of the hash), and with 4 variants each lands on
// roughly 25% of a template's pages, safely under the ceiling. Verified
// empirically after each change with scripts/check-heading-distribution.mjs.
//
// Data-driven headings (sections[].heading, FAQ questions) are already unique
// per city and are not rotated here.

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h * 31 + str.charCodeAt(i)) >>> 0;
  }
  return h;
}

// Each entry is keyed "TEMPLATE.slot". The "{city}" token is replaced with the
// city name at render time. Variant 1 is the original wording, kept for
// continuity; the rest are genuine rephrasings in the same template voice.
export const HEADING_VARIANTS: Record<string, string[]> = {
  // Template A (Field Manual, ops-manual voice)
  "A.pests": [
    "The pests that matter in {city}",
    "Which pests are active in {city}",
    "{city}'s most common pest problems",
    "The pests you will run into in {city}",
  ],
  "A.prevention": [
    "Keeping pests out of {city} homes",
    "How to keep pests out in {city}",
    "Prevention steps for {city} homes",
    "Preventing pest problems in {city}",
  ],
  "A.cost": [
    "What treatment costs here",
    "What pest control costs in {city}",
    "Pricing for {city} pest control",
    "What you will pay in {city}",
  ],
  "A.faq": [
    "{city} pest control questions",
    "Common questions from {city}",
    "{city} homeowner questions",
    "Questions we hear in {city}",
  ],
  "A.services": [
    "Services in {city}",
    "Pest services for {city}",
    "What we treat in {city}",
    "{city} pest control services",
  ],
  "A.nearby": [
    "Nearby areas we serve",
    "Other areas we cover",
    "Nearby cities we serve",
    "Areas near {city}",
  ],

  // Template B (Visual Journey, marketing-led)
  "B.pests": [
    "Common pests around {city}",
    "Pests you will see in {city}",
    "{city}'s common pest problems",
    "The pests active around {city}",
  ],
  "B.prevention": [
    "Prevention that works in {city}",
    "Keeping pests out in {city}",
    "How to prevent pests in {city}",
    "{city} prevention that holds up",
  ],
  "B.faq": [
    "Questions from {city} homeowners",
    "What {city} homeowners ask",
    "{city} pest control questions",
    "Common questions in {city}",
  ],

  // Template C (Comparison Brief, side-by-side voice)
  "C.pests": [
    "The pests in {city}, side by side",
    "{city} pests, compared",
    "Comparing {city}'s pests",
    "{city} pest pressure, side by side",
  ],
  "C.prevention": [
    "Prevention, by where you live",
    "Prevention that fits your {city} neighborhood",
    "Prevention, {city} area by area",
    "Where you live in {city} shapes prevention",
  ],
  "C.faq": [
    "{city} pest questions, answered",
    "{city} questions, side by side",
    "Answering {city} pest questions",
    "{city} pest control, question by question",
  ],

  // Template D (Conversational Q&A, question voice)
  "D.whichPests": [
    "Which pests are most common in {city}?",
    "What pests are you likely to see in {city}?",
    "Which pests show up most in {city}?",
    "What is bugging {city} homes?",
  ],
  "D.moreInfo": [
    "What else should you know before you book?",
    "What else matters before you book?",
    "Anything else worth knowing first?",
    "What else should {city} homeowners know?",
  ],
  "D.prevention": [
    "How do you keep them out?",
    "How do you keep pests out?",
    "What keeps them from coming back?",
    "How do you stop them getting in?",
  ],
  "D.cost": [
    "What will it cost in {city}?",
    "How much does pest control cost in {city}?",
    "What should {city} pest control cost?",
    "What will you pay in {city}?",
  ],
  "D.next": [
    "What should you do next?",
    "What is the next step?",
    "Where do you go from here?",
    "What happens next?",
  ],

  // Template E (Data-Forward, brief voice)
  "E.pestTable": [
    "Pest activity table",
    "{city} pest activity at a glance",
    "Pest activity by season",
    "The {city} pest table",
  ],
  "E.prevention": [
    "Prevention checklist",
    "Prevention, step by step",
    "{city} prevention checklist",
    "Your prevention checklist",
  ],
  "E.cost": [
    "Cost factors",
    "What drives the cost",
    "Pricing factors",
    "What affects your {city} quote",
  ],
  "E.faq": [
    "Reference: {city} FAQs",
    "{city} FAQ reference",
    "Quick reference: {city} questions",
    "{city} pest control, for reference",
  ],
};

export function heading(city: CityLocation, key: string): string {
  const variants = HEADING_VARIANTS[key];
  if (!variants) throw new Error(`Unknown heading key: ${key}`);
  const chosen = variants[hash(city.slug + "::" + key) % variants.length];
  return chosen.replaceAll("{city}", city.name);
}

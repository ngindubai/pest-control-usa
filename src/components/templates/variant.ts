import type { ContentTemplate, ContentSoul } from "@/types";

// Deterministic template rotation by slug hash.
// The same city slug always maps to the same template, so rebuilds do not churn.
// See TEMPLATE-DIVERSIFICATION-GUIDE.md. The result can be overridden per city
// in the data record (set `contentTemplate` explicitly when there is a reason).
export function variantForSlug(slug: string): ContentTemplate {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  const variants: ContentTemplate[] = ["A", "B", "C", "D", "E"];
  return variants[hash % variants.length];
}

// The content soul paired to each template. The writer reads the matched soul
// (workforce/content/souls/) before writing the body.
export const soulForTemplate: Record<ContentTemplate, ContentSoul> = {
  A: "operator",
  B: "neighbor",
  C: "comparison",
  D: "qa",
  E: "brief",
};

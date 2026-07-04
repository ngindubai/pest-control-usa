import { siteConfig } from "@/config/site";
import type { BreadcrumbItem } from "@/types";

// Single source of truth for JSON-LD across the site. Centralized so every
// page describes the same business the same way, instead of hand-rolled
// schema drifting page to page (see SEO-BUILD-PLAN-2026-07-02.md, Block 2).

export const ORGANIZATION_ID = `${siteConfig.url}/#organization`;
export const WEBSITE_ID = `${siteConfig.url}/#website`;

// The business is modeled as a nationwide service-area Organization, not a
// single-address LocalBusiness. There is no public storefront, so asserting
// the old placeholder headquarters address as the operating location was
// inaccurate. Every page that mentions the business reuses this same @id so
// Google resolves them to one entity instead of many unlinked duplicates.
export function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.fullName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og-default.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    description: siteConfig.description,
    areaServed: { "@type": "Country", name: "United States" },
    // sameAs intentionally omitted: the social profiles were placeholders that
    // were not live. Add them back here only once the real profiles exist.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "07:00",
        closes: "21:00",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: siteConfig.fullName,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.href}`,
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

// A page-specific mention of the business, scoped to one city or state. This
// reuses the Organization's @id (see organizationSchema) rather than minting
// a new, unlinked business node per page, and takes a structured areaServed
// (City/State, not a bundled "City, ST" string) per SEO audit finding M7.
export function areaOrganizationSchema(opts: {
  url: string;
  description?: string;
  areaServed: Record<string, unknown>;
}) {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: siteConfig.fullName,
    url: opts.url,
    telephone: siteConfig.phone,
    ...(opts.description ? { description: opts.description } : {}),
    areaServed: opts.areaServed,
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  areaServed: Record<string, unknown>;
  priceRange?: string;
}) {
  return {
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: opts.areaServed,
    ...(opts.priceRange ? { offers: { "@type": "Offer", priceRange: opts.priceRange } } : {}),
  };
}

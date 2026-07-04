import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { locationStates } from "@/data/locations";
import { cities } from "@/data/cities";

export const dynamic = "force-static";

const BASE = "https://pestremovalusa.com";

// Note on lastModified: we deliberately omit it. It used to be stamped with
// `new Date()` at build time, which told Google every URL changed on every
// deploy. That is inaccurate (most pages do not change), and Google says it
// may ignore a sitemap whose lastmod values are untrustworthy. Until we track
// a real per-record updatedAt (or derive lastmod from git history), leaving it
// out is more honest than faking a fresh date sitewide. changeFrequency and
// priority are kept but note Google treats both as hints it largely ignores.

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/locations`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/emergency`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/residential`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/commercial`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/reviews`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/financing`, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE}/careers`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locationStates.map((s) => ({
    url: `${BASE}/locations/${s.slug}/`,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // The ~2,150 programmatic city pages. These are the commercial core of the
  // site and were previously absent from the shipping sitemap. Trailing slash
  // matches trailingSlash: true in next.config.ts and the internal links.
  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE}/locations/${c.stateSlug}/${c.slug}/`,
    changeFrequency: "monthly" as const,
    priority: c.tier === "T1" ? 0.7 : c.tier === "T2" ? 0.65 : 0.6,
  }));

  const all = [
    ...staticRoutes,
    ...serviceRoutes,
    ...locationRoutes,
    ...cityRoutes,
  ];

  // Normalize every entry to a trailing slash (except the bare domain) so the
  // sitemap matches trailingSlash: true and avoids redirect entries.
  return all.map((entry) => ({
    ...entry,
    url:
      entry.url === BASE || entry.url.endsWith("/")
        ? entry.url
        : `${entry.url}/`,
  }));
}

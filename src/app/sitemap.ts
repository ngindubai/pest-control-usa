import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { locationStates } from "@/data/locations";
import { cities } from "@/data/cities";

export const dynamic = "force-static";

const BASE = "https://pestremovalusa.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/locations`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/emergency`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE}/residential`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/commercial`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/reviews`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/financing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    {
      url: `${BASE}/careers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE}/services/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locationStates.map((s) => ({
    url: `${BASE}/locations/${s.slug}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  // The ~2,150 programmatic city pages. These are the commercial core of the
  // site and were previously absent from the shipping sitemap. Trailing slash
  // matches trailingSlash: true in next.config.ts and the internal links.
  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE}/locations/${c.stateSlug}/${c.slug}/`,
    lastModified: now,
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

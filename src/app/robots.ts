import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // Allow the static asset directory explicitly so Googlebot can fetch
        // the CSS and JS it needs to render pages, while still keeping the
        // rest of /_next/ (server/data internals) out of the index. The more
        // specific /_next/static/ allow wins over the broader /_next/ disallow.
        allow: ["/", "/_next/static/"],
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: "https://pestremovalusa.com/sitemap.xml",
    host: "https://pestremovalusa.com",
  };
}

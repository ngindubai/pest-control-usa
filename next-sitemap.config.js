/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://pestremovalusa.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you"],
      },
    ],
    additionalSitemaps: [
      "https://pestremovalusa.com/sitemap.xml",
    ],
  },
  exclude: ["/api/*", "/thank-you"],
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => {
    // Boost priority for key pages
    const priorities: Record<string, number> = {
      "/": 1.0,
      "/services": 0.9,
      "/emergency": 0.95,
      "/contact": 0.85,
    };

    const isServicePage = path.startsWith("/services/");
    const isStatePage = /^\/locations\/[^/]+$/.test(path);
    const isCityPage = /^\/locations\/[^/]+\/[^/]+$/.test(path);
    const isBlogPost = path.startsWith("/blog/") && path.split("/").length > 3;

    return {
      loc: path,
      changefreq: isServicePage || isStatePage ? "weekly" : isCityPage ? "monthly" : "weekly",
      priority:
        priorities[path] ??
        (isServicePage ? 0.9 : isStatePage ? 0.8 : isCityPage ? 0.7 : isBlogPost ? 0.6 : 0.7),
      lastmod: new Date().toISOString(),
    };
  },
};

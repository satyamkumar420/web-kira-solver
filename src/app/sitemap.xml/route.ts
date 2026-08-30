import { NextResponse } from "next/server";
import { DOCS_PAGINATION } from "@/app/(root)/docs/_config/docs";

/**
 * 🗺️ Generates the sitemap.xml file dynamically.
 * @returns {NextResponse} The sitemap.xml content.
 */
export function GET() {
  const baseUrl = process.env.NEXTAUTH_URL || "https://kirasolver.com";

  // ✨ Define base static routes
  const staticRoutes = [
    "/",
    "/download",
    "/pricing",
    "/about",
    "/terms",
    "/privacy",
    // Add other static pages here
  ];

  // 📚 Dynamically generate doc routes from the single source of truth
  const docRoutes = DOCS_PAGINATION.map((doc) => doc.slug);

  // 🤝 Combine all routes
  const allRoutes = [...staticRoutes, ...docRoutes, "/docs"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map((route) => {
      return `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === "/" ? "1.0" : "0.8"}</priority>
    </url>
  `;
    })
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

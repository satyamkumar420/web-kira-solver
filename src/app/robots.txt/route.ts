import { NextResponse } from "next/server";

/**
 * 🤖 Generates the robots.txt file.
 * @param {NextRequest} req - The incoming request.
 * @returns {NextResponse} The robots.txt content.
 */
export function GET() {
  const baseUrl = process.env.NEXTAUTH_URL || "https://kirasolver.com";
  const content = `User-agent: *
Allow: /
Sitemap: ${baseUrl}/sitemap.xml
`;
  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

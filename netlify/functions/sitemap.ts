import type { Handler } from "@netlify/functions";

const routes = [
  "/",
  "/portfolio",
  "/gtm",
  "/ecommerce",
  "/mobile-app",
  "/salesforce",
  "/portfolio/website",
];

export const handler: Handler = async (event) => {
  const proto = event.headers["x-forwarded-proto"] || "https";
  const host = (event.headers["x-forwarded-host"] || event.headers.host || "").toString();
  const base = host ? `${proto}://${host}` : "";
  const lastmod = new Date().toISOString();

  const urls = routes
    .map((path) => {
      const loc = base ? `${base}${path}` : path;
      return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${path === "/" ? "1.0" : "0.8"}</priority></url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/xml" },
    body: xml,
  };
};

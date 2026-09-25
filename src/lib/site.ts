// Vercel injects VERCEL_PROJECT_PRODUCTION_URL (host only, no scheme) at build
// time, so canonicals/sitemap point at the real domain without extra config.
// Set NEXT_PUBLIC_SITE_URL to override once a custom domain is connected.
const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelHost ? `https://${vercelHost}` : "http://localhost:3000")
).replace(/\/$/, "");

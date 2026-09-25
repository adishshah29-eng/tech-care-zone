# SEO Audit: tech-care-zone.vercel.app

Audited 25 Sep 2026. Business type: **local service (walk-in device repair shop, Powai, Mumbai)**. Pages found: 1 (single-page site).

## Scope and what could not be measured

Measured directly from the live site: rendered HTML, meta tags, headings, images, structured data, robots.txt, sitemap.xml, response headers, redirects, 404 handling.

**Not measured** (be cautious with any score that depends on these):
- Core Web Vitals / Lighthouse: Google's free PageSpeed API quota was exhausted (HTTP 429). Re-run later or connect a Google API key.
- Search Console, GA4, backlinks, rankings, Google Business Profile: no access. A live domain with no indexing history means there is no ranking data yet.

## Health score

| | Score | Note |
|---|---|---|
| As found on the live site | **~45 / 100** | held down by the localhost URL bug |
| After the fixes already made in code (once deployed) | **~65 / 100** | estimate; Performance category unmeasured |

These are estimates using the audit weights, not a measured Lighthouse result.

## Findings by category

### Technical SEO

| Severity | Finding | Evidence | Status |
|---|---|---|---|
| **Critical** | Canonical, Open Graph URL/image, sitemap, robots `Sitemap:` line and JSON-LD all pointed at `http://localhost:3000` | live `<link rel="canonical" href="http://localhost:3000">`; sitemap `<loc>http://localhost:3000` | **Fixed in code** (`src/lib/site.ts` uses Vercel's production URL). Needs a redeploy. |
| Medium | Security headers missing (only HSTS present) | no X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy | **Fixed in code** (`next.config.ts`) |
| Low | No Content-Security-Policy | not present | Optional; needs testing against fonts/images |
| Info | Good: HTTPS, HTTP→HTTPS 308 redirect, real 404 status, gzip, `lang="en"`, viewport, no console errors, robots.txt allows crawling | | |

### On-page SEO

| Severity | Finding | Status |
|---|---|---|
| Medium | Title was 66 characters and the description 178, so Google would truncate both | **Fixed:** title 57, description 155 |
| Medium | H1 ("We fix Apple devices & all laptop brands") has no location. "Powai" appears only in the title and body | Add "in Powai" to the H1 or the line directly under it |
| High | Footer "Services / Devices / Company" lists are plain text, not links. The page has 12 links total and no internal linking structure. "About Us" and "Privacy Policy" point nowhere | Turn them into real pages or remove them (see action plan) |
| Info | Good: single H1, logical H2/H3 hierarchy (7 H2, 19 H3), tap-to-call and WhatsApp links present | |

### Content quality

| Severity | Finding |
|---|---|
| **High** | One page of ~520 words has to rank for every service and device. Searches like "iPhone screen replacement Powai" or "MacBook water damage repair Mumbai" are best won by a dedicated page each. |
| High | No real photos on the page. The only images are the logo and an illustrated diagram, so nothing shows a real shop, technician or repair. Real, original photos are the strongest E-E-A-T signal available to a local business (you already have some from earlier versions). |
| Medium | The six reviews are unverified text on your own site. They read as genuine but carry no source or date, and can't be marked up. Link to your Google reviews instead. |
| Medium | No pricing guidance or "from ₹" ranges, though "transparent pricing" is a headline promise. Price-intent searches are common for repairs. |
| Low | No email address and no map or directions block. |

### Schema / structured data

| Status | Detail |
|---|---|
| Present | `LocalBusiness` JSON-LD: name, phone, full address, opening hours, area served, 12 services |
| Correctly omitted | `aggregateRating` and `Review`: self-published ratings aren't eligible and risk a manual action |
| Gaps | No `geo` coordinates; no `sameAs` (Google Business Profile, Instagram, etc.) since none exist yet; `priceRange` not set |

### Performance
**Not measured** (quota). Observations only: HTML is ~153 KB uncompressed and served from Vercel's edge cache; fonts are self-hosted via next/font; one full-page inline SVG illustration. Re-test with PageSpeed Insights.

### Images
| Severity | Finding |
|---|---|
| Info | Both `<img>` tags have alt text ("Tech Care Zone"); the hero SVG has an `aria-label` |
| Low | The full logo is lazy-loaded, which is correct; the nav logo is prioritised, which is also correct |
| Medium | See Content: no photographic imagery |

### AI search readiness (GEO)
Crawlable by all bots, clean semantic HTML, LocalBusiness data present. Weak on citable, self-contained passages: there's no FAQ, no "how much does an iPhone screen replacement cost in Powai" style answer. `llms.txt` is optional and Google ignores it.

## What works well
- Strong local-service fundamentals: exact address, phone, hours in visible text and in JSON-LD
- Clear conversion path: WhatsApp with pre-filled details, click-to-call, one-page form
- Fast static delivery, HTTPS, mobile-friendly viewport
- Duplicate design variants were removed, so there is no duplicate-content risk

## Local SEO note (highest-leverage item)
For a walk-in repair shop the Google Business Profile drives more discovery than the website. It could not be checked. Make sure the profile exists, is verified, and that the name, address and phone match the site exactly.

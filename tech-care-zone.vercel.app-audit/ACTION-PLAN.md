# SEO Action Plan: tech-care-zone.vercel.app

## Phase 1: Critical (deploy now)
- [x] Fix localhost canonical/OG/sitemap/robots/JSON-LD URLs (done in code, **redeploy to apply**)
- [x] Add security headers (done in code)
- [x] Trim title and description (done in code)
- [ ] **Push and let Vercel redeploy**, then re-check `view-source:` for the canonical
- [ ] Submit the domain to **Google Search Console** and submit `/sitemap.xml`
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel once a custom domain is connected (the Vercel URL is used until then)

## Phase 2: High impact (weeks 2-3)
- [ ] Create or **claim and verify the Google Business Profile** for Powai Plaza; keep name, address and phone identical to the site
- [ ] Add real photos: the shop front, technicians at work, board-level repairs (originals, with descriptive alt text)
- [ ] Build dedicated pages for the top searches, e.g. `/iphone-screen-replacement-powai`, `/macbook-water-damage-repair-mumbai`, `/laptop-repair-powai`. Each needs a unique intro, the process, warranty, and a real price range
- [ ] Make footer lists real links, or remove the ones with no destination ("About Us", "Privacy Policy"); add a real Privacy Policy page
- [ ] Add "in Powai" to the H1 or the line beneath it

## Phase 3: Content and authority (month 2)
- [ ] Add "from ₹" price ranges for the common repairs
- [ ] Add a short FAQ (cost, time, data safety, warranty terms). It helps AI answers and users even though FAQ rich results are restricted
- [ ] Link to your Google reviews instead of relying on the on-page quotes
- [ ] Embed a Google Map / directions block; add `geo` and `sameAs` to the JSON-LD once the profile and social pages exist
- [ ] Ask happy customers for Google reviews (a QR code at the counter works well)
- [ ] List the business in a few local directories with identical name, address and phone

## Phase 4: Monitoring
- [ ] Re-run PageSpeed Insights once its quota resets and fix anything under 90 on mobile
- [ ] Watch Search Console for indexing and "Powai" query impressions
- [ ] Re-run `/seo audit` after Phase 2 and again after the custom domain is live

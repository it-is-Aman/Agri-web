# Deploying (Vercel)

## First time
1. Push the repo to GitHub.
2. vercel.com → **Add New → Project** → import the repo. Framework is detected as Next.js; keep defaults (pnpm is detected from `pnpm-lock.yaml`).
3. **Settings → Environment Variables**: add every key from `.env.example` with real values (Production + Preview).
4. Deploy.

## Domain
**Settings → Domains** → add your domain → follow the DNS instructions (an `A` record or `CNAME` at your registrar). HTTPS is automatic. Then set `NEXT_PUBLIC_SITE_URL=https://yourdomain.in` and redeploy — it's used for the sitemap, canonical URLs and social previews.

## Day-to-day
- Code changes: push to `main` → Vercel deploys automatically. Other branches get preview URLs.
- Price/stock changes: edit the Google Sheet — no deploy ([PRICE_SHEET.md](PRICE_SHEET.md)).
- Business detail changes (phone, address…): edit the env var → **Deployments → Redeploy**.

## After going live
- Google Search Console: add the domain, submit `/sitemap.xml`.
- Google Business Profile: same name, address and phone as the site, link to the site.
- Vercel Analytics is already wired (`@vercel/analytics`); enable it in the project.

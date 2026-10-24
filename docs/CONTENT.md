# Editing content

## What lives where

| Content | Where to change it | Needs redeploy? |
|---|---|---|
| Prices, stock, products, product photos links | Google Sheet — see [PRICE_SHEET.md](PRICE_SHEET.md) | No (updates in ~5 min) |
| Business name, phone, WhatsApp, email, address, hours, GSTIN/Udyam/IEC, map | Vercel environment variables (`.env.example` lists them) | Yes — Vercel → Deployments → Redeploy |
| Page text (headings, buttons, descriptions) | `src/i18n/en.ts` and `src/i18n/hi.ts` | Yes |
| Photos (shop, workshop, team) | `public/img/` | Yes |

An empty registration value (e.g. `NEXT_PUBLIC_GSTIN=`) hides it on the site.

## Text & translations
- Every English string in `en.ts` has the same key in `hi.ts`. TypeScript fails the build if one is missing.
- Write Hindi as people speak it; English words customers actually use (ब्रश कटर, स्पेयर पार्ट्स) are fine.
- No invented claims — see Voice in [DESIGN.md](DESIGN.md).

## Photos
- Real photos beat stock every time. Phone photos are fine: good light, plain background for parts.
- Product photos: landscape **4:3**, at least **1200×900**, JPG or WebP, under ~300 KB.
- Hero/workshop photos: **1920×1080** or larger, under ~500 KB.
- File names: lowercase with dashes, describe the item — `trimmer-head-auto-cut.jpg`.
- Put them in `public/img/` and use `/img/<file>` in the sheet's `image` column. Photos hosted elsewhere also need their domain added to `images.remotePatterns` in `next.config.ts`.

## Logo
Replace the yellow placeholder mark in `src/components/layout/Logo.tsx` with the logo file (SVG preferred) in `public/`. Also replace `src/app/favicon.ico`.

## Placeholder photos to replace
- Hero: `src/components/home/Hero.tsx` (`/img/farmer-using-brush-cutter-in-green-agricultural-fi.jpg`) — ideally a photo of your shop counter or a mechanic at work.
- About: `src/app/[lang]/about/page.tsx` — the shop front or team.
- Product photos: the `image` column in the Google Sheet.

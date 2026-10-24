# CLAUDE.md

Website for **AgriTools, Noida** — brush cutter, chainsaw and garden-machine spare parts (genuine + compatible), accessories, machines, and repair. Enquiry-only (WhatsApp / call); online payment for spare parts is planned later. English + Hindi.

Readers: farmers and landowners on low-end phones and slow data, local vendors buying in bulk, and informed buyers who search by model number. Optimise for clarity, speed and trust over decoration.

## Commands

```bash
pnpm dev          # dev server (Turbopack)
pnpm build        # production build — must pass before any handoff
pnpm lint
npx tsc --noEmit  # typecheck
```

Package manager is **pnpm**.

## Architecture

Next.js 15 App Router, React 19, TypeScript, Tailwind CSS v4. No backend. Details: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

- `src/middleware.ts` — English at `/x` (rewritten to `/en/x`), Hindi at `/hi/x`. `/en/*` redirects to the unprefixed URL.
- `src/app/[lang]/` — all pages; `[lang]/layout.tsx` is the root layout (html, fonts, header, footer, enquiry drawer). There is no `src/app/layout.tsx`.
- `src/i18n/` — `en.ts` (source of truth + `Dictionary` type), `hi.ts`, `config.ts` (`localePath`, `fmt`, `isLocale`). Strings only — no functions — so slices can be passed to client components. Use `{placeholders}` + `fmt()`.
- `src/config/site.ts` — **all business details** from `NEXT_PUBLIC_*` env. Helpers: `whatsappLink(msg)`, `telLink()`, `phoneDisplay()`, `fullAddress()`, `directionsUrl()`, `yearsInBusiness()`.
- `src/lib/catalog/` — **all product data**. `getProducts()` reads the published Google Sheet CSV (`PRODUCTS_SHEET_CSV_URL`) with ISR, falling back to `sample.ts`. `index.ts` is server-only; client code imports `format.ts` / `query.ts` directly.
- `src/lib/enquiry/` — client enquiry list (`EnquiryProvider`, `useEnquiry`, localStorage) and WhatsApp message builders.
- `src/components/` — `layout/` (header, footer, nav, mobile bar), `home/` (home sections), `catalog/`, `enquiry/`, `forms/`, `shared/` (SectionHead, PageIntro, ShopFacts), `illustrations/`, `icons/`, `ui/` (Button, Sheet).

## Rules

- **Never hardcode** business details or product data/prices. Use `siteConfig` and `getProducts()`.
- **Every UI string goes in both `en.ts` and `hi.ts`.** The `Dictionary` type fails the build if Hindi is missing a key. Links go through `localePath(lang, path)`.
- **Server components by default.** `"use client"` only for interactivity (enquiry, menus, language switch, forms).
- **Design:** follow [docs/DESIGN.md](docs/DESIGN.md). Tokens only (`bg-signal`, `text-ink`, `border-ink`…), never raw hex. `signal` yellow = the primary action. 2px ink borders, square corners, Teko for display, mono for labels/IDs.
- **No invented claims.** No fake testimonials, stats, coverage, certifications or response times.
- **Brand names:** not an authorised STIHL (or any brand) dealer. Model numbers only for compatibility; show `siteConfig.brandDisclaimer` near compatible parts. Never use brand logos.
- **Mobile first:** check at 390px. Tap targets ≥ 44px. `next/image` with `sizes`.
- Prices are `number | null` rupees; `null` = "Ask for price".

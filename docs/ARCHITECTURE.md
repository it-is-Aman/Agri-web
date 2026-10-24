# Architecture

## Stack
Next.js 15 (App Router, Turbopack) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Radix Dialog (via `ui/sheet`) · Vercel. No database or backend.

## Routing & languages

```
src/middleware.ts        /shop → (rewrite) /en/shop     /hi/shop → as is     /en/shop → 308 /shop
src/app/
  [lang]/layout.tsx      root layout: <html lang>, fonts, JSON-LD, header, footer, mobile bar, enquiry drawer
  [lang]/page.tsx        home
  [lang]/shop/           catalogue (filters via ?q ?model ?category ?sub ?stock ?sort)
  [lang]/shop/[id]/      product (Product JSON-LD)
  [lang]/repair|dealers|about|contact/
  [lang]/not-found.tsx + [...rest]/   404 inside the site layout
  sitemap.ts robots.ts   sitemap includes every product in both languages
next.config.ts           redirects from old MVP URLs (/products, /services, /accessories, /blog)
```

Every page sets canonical + `hreflang` alternates via `src/lib/seo.ts`.

## Data flow

```
Google Sheet ──Publish to web (CSV)──▶ getProducts()  ──▶ server components
                                         │ fetch + ISR (CATALOG_REVALIDATE_SECONDS, default 300)
                                         └ unreachable / not configured → sample.ts
.env / Vercel env ──▶ src/config/site.ts ──▶ header, footer, contact, JSON-LD, WhatsApp links
```

- `lib/catalog/sheet.ts` — CSV parser + row → `Product`.
- `lib/catalog/query.ts` — `filterProducts`, `relatedProducts`, `productName/Description(p, lang)`. Model matching ignores spaces/case (`fs120` = `FS 120`).
- Shop filtering is server-side through URL params — plain links, no client JS, shareable URLs.

## Enquiry flow

1. `AddToEnquiry` → `useEnquiry().add()` → stored in `localStorage` (`agri-enquiry-v1`).
2. `EnquiryDrawer` lists items with quantities, optional name + pincode.
3. "Send on WhatsApp" opens `wa.me/<number>?text=…` built by `buildEnquiryMessage`.
4. Repair and dealer pages use `WhatsAppForm` → `buildFormMessage`.

The list is cart-shaped so online payment for spare parts can replace step 3.

## Later: backend
Supabase (Postgres + auth) with a small `/admin`, Razorpay for payments. Only `getProducts()` changes; pages don't.

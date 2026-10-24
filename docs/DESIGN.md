# Design system — "Field Manual"

The site looks like a machinery service manual and parts catalogue: signal yellow on ink black, bone paper with a blueprint grid, numbered sections, spec tables, part IDs and model numbers in mono. Yellow-and-black is the visual language of machines and tools, and it stays readable in bright sunlight on a cheap phone.

## Colour

Defined in `src/app/globals.css`, exposed as Tailwind colours. Use the token, never the hex.

| Token | Hex | Use |
|---|---|---|
| `signal` | `#FFC20E` | The one thing to press (WhatsApp, Search, Send), highlights, section index chips, ticker, dealer band |
| `signal-deep` | `#E8AB00` | Hover on signal |
| `ink` | `#121210` | Text, borders (2px), dark bands, secondary buttons |
| `graphite` | `#2A2925` | Body copy on light, hover on ink |
| `steel` | `#66635B` | Secondary text, labels |
| `bone` | `#F3F1EA` | Page background |
| `paper` | `#FBFAF6` | Cards, tables, forms |
| `line` | `#D9D5CA` | Hairlines |
| `go` / `stop` | `#2B6E2E` / `#B8361A` | Stock status only |

Ink text on signal is ~13:1; white is never used on yellow.

## Type

| Role | Font | Tailwind |
|---|---|---|
| Display — headings, buttons, prices, big numbers | **Teko** (condensed; Latin + Devanagari) | `font-display` — h1–h3 get it automatically, uppercase |
| Body | **Archivo**, with **Noto Sans Devanagari** for Hindi glyphs | `font-sans` (default) |
| Labels, part IDs, model numbers | **IBM Plex Mono** | `font-mono`, `.spec-label` |

17px base. Hindi automatically gets looser line-height on display text and no letter-spacing on labels (see the `:lang(hi)` rules in `globals.css`).

## Signature elements

| Element | Where | Component / class |
|---|---|---|
| Blueprint grid paper | Hero, page intros, product photos, dark bands | `.grid-paper`, `.grid-paper-dark` |
| Section index `[01] — LABEL` + huge title | Every section | `SectionHead` |
| Yellow slab highlight on one hero word | Hero | `Hero.tsx` |
| Rotating "Since 2014" stamp | Hero photo | `Hero.tsx` → `YearsStamp` |
| Registration (crop) marks around photos | Hero, product, about | `.crop-marks` |
| Hard offset shadow `5px 5px 0 ink` | Cards on hover, search, forms | `shadow-[5px_5px_0_var(--ink)]` |
| Model ticker | Under hero | `ModelTicker` |
| Chapter index list | Home "What we do" | `CategoryIndex` |
| Spec tables with dashed rules | Product, shop facts | `<dl>` pattern in `ShopFacts` |
| Outlined giant step numbers | "How ordering works" | `ProcessSteps` |
| Stencilled price: small mono ₹ + Teko digits | Cards, product | `Price` |
| Line-art part drawings | Category rows, backgrounds | `PartIcons` |

## Components

- `Button` variants: `signal` (primary action), `ink`, `outline`, `outline-light` (on dark), `ghost`, `link`. Sizes: `sm` 36px, default 44px, `lg` 56px. Square corners (2px radius).
- `PartCard` — label strip (type + stock) / photo on grid / name / fits / price / Add to enquiry. Whole card is clickable.
- `StockLabel`, `ModelTag`, `Price`, `ModelSearch` (GET form, works without JS).
- Forms: `FieldInput`, `FieldTextarea`, `FieldChoice` (radio tiles), `WhatsAppForm` (composes a WhatsApp message).

## Layout & interaction

- Mobile first, tested at 390px. Content `max-w-7xl`, `px-4`.
- Header: black utility strip (city, hours, phone) + bone bar with 2px ink rule.
- Phones: fixed bottom bar Call · WhatsApp · Enquiry; `main` content clears it via footer padding.
- Motion: ticker and stamp rotation only, both stop under `prefers-reduced-motion`. Hover = small lift + hard shadow.
- Images: `next/image` with `sizes`; product photos sit on grid paper with `mix-blend-multiply` so white-background shots blend in.

## Voice

- Plain words a farmer would use. Short sentences. Hindi as people speak it, keeping trade words (ब्रश कटर, कार्बोरेटर).
- Facts only: years, city, what we repair, how ordering works. No invented numbers, reviews or guarantees.
- Brand names only for compatibility, always with the not-affiliated disclaimer.

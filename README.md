# AgriTools — website

Website for AgriTools, Noida: brush cutter, chainsaw and garden-machine spare parts, accessories and repair. Customers browse parts and prices, then enquire on WhatsApp or by phone. English and Hindi.

Built with Next.js 15, TypeScript and Tailwind CSS. Prices and stock come from a Google Sheet, so they can be updated daily without touching code.

## Run locally

```bash
pnpm install
cp .env.example .env.local   # fill in phone, address, etc.
pnpm dev                     # http://localhost:3000  (Hindi: /hi)
```

## Docs

| Doc | For |
|---|---|
| [docs/PRICE_SHEET.md](docs/PRICE_SHEET.md) | Updating prices & stock from the Google Sheet |
| [docs/CONTENT.md](docs/CONTENT.md) | Changing text, translations, photos |
| [docs/DEPLOY.md](docs/DEPLOY.md) | Vercel, environment variables, domain |
| [docs/DESIGN.md](docs/DESIGN.md) | Colours, type, components, tone |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | How the code fits together |
| [docs/ROADMAP.md](docs/ROADMAP.md) | What's done and what's next |
| [CLAUDE.md](CLAUDE.md) | Rules for AI-assisted development |

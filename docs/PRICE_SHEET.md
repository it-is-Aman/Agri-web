# Updating prices & stock (Google Sheet)

The website reads its product list from a Google Sheet. Edit the sheet from your phone or computer — the site picks up changes within ~5 minutes. No code change, no redeploy.

## One-time setup

1. Create a new Google Sheet. **File → Import → Upload** `docs/price-sheet-template.csv` (choose "Replace current sheet").
2. **File → Share → Publish to web** → select the sheet tab → format **Comma-separated values (.csv)** → **Publish**. Copy the link.
3. In Vercel → Project → Settings → Environment Variables, set `PRODUCTS_SHEET_CSV_URL` to that link. Redeploy once.
   (Locally: put it in `.env.local`.)

Keep the sheet itself private to your staff (normal sharing); "Publish to web" exposes only the CSV of that tab.

## Columns

| Column | What to write | Example |
|---|---|---|
| `id` | Short unique name used in the page URL. Don't change once live. Blank = made from `name`. | `trimmer-head-auto-cut` |
| `name` | Product name in English | `Trimmer Head – Auto Cut` |
| `name_hindi` | Product name in Hindi (shown on Hindi pages) | `ट्रिमर हेड – ऑटो कट` |
| `category` | `machines`, `spare-parts` or `accessories` | `spare-parts` |
| `subcategory` | Free text, used for filters | `Trimmer Head` |
| `price` | Selling price in ₹, numbers only. Blank = "Ask for price" | `450` |
| `mrp` | Optional, shows as struck-through | `600` |
| `in_stock` | `yes` / `no` | `yes` |
| `compatible_with` | Model numbers, comma separated | `FS 55, FS 120` |
| `description` | One or two lines in English | |
| `description_hindi` | Same in Hindi. Blank = English shown on Hindi pages | |
| `image` | Image path or link. Blank = placeholder | `/img/trimmer-head.jpg` |
| `featured` | `yes` to show on the home page | `no` |
| `hidden` | `yes` to hide without deleting the row | |

Don't rename or reorder the header row's column names (order doesn't matter, names do).

## If something goes wrong

If the sheet can't be reached or the header row is broken, the site keeps working with the built-in sample list and logs a `[catalog]` error in Vercel logs. Fix the sheet and it recovers on its own.

## Later

When you outgrow the sheet (orders, many staff, stock history), only `src/lib/catalog/index.ts → getProducts()` changes to read from a database. Pages stay the same.

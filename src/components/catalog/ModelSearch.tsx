import { Search } from "lucide-react"
import { localePath, type Dictionary, type Locale } from "@/i18n"
import { Button } from "@/components/ui/button"
import { ModelTag } from "./ModelTag"

// Plain GET form → /shop?q=…  Works without JavaScript.
export function ModelSearch({
  lang,
  t,
  popularModels = [],
  defaultValue,
  tone = "dark",
}: {
  lang: Locale
  t: Dictionary
  popularModels?: string[]
  defaultValue?: string
  tone?: "dark" | "light"
}) {
  const shop = localePath(lang, "/shop")
  return (
    <div>
      <form action={shop} method="get" role="search">
        <label htmlFor="part-search" className={tone === "dark" ? "spec-label text-ink/70" : "spec-label text-bone/70"}>
          {t.search.label}
        </label>
        <div className="mt-2 flex rounded-md border-2 border-ink bg-paper shadow-[5px_5px_0_var(--ink)] focus-within:ring-4 focus-within:ring-signal/50">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 size-5 -translate-y-1/2 text-steel" />
            <input
              id="part-search"
              name="q"
              type="search"
              defaultValue={defaultValue}
              placeholder={t.search.placeholder}
              autoComplete="off"
              enterKeyHint="search"
              className="h-14 w-full rounded-md bg-transparent pl-11 pr-3 font-mono text-base text-ink outline-none placeholder:font-sans placeholder:text-steel/80"
            />
          </div>
          <Button type="submit" variant="signal" size="lg" className="rounded-l-none border-l-2 border-ink max-sm:px-4">
            {t.search.button}
          </Button>
        </div>
      </form>
      {popularModels.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          <span className={tone === "dark" ? "spec-label mr-1 text-steel" : "spec-label mr-1 text-bone/60"}>
            {t.search.popular}
          </span>
          {popularModels.map((m) => (
            <ModelTag key={m} model={m} href={`${shop}?model=${encodeURIComponent(m)}`} />
          ))}
        </div>
      )}
    </div>
  )
}

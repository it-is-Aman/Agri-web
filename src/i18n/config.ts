export const locales = ["en", "hi"] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = "en"

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value)

// English lives at "/", Hindi at "/hi". Middleware rewrites "/x" → "/en/x" internally.
export const localePath = (lang: Locale, path = "/") => {
  const clean = path.startsWith("/") ? path : `/${path}`
  if (lang === defaultLocale) return clean
  return clean === "/" ? `/${lang}` : `/${lang}${clean}`
}

// "{n} items" + { n: 3 } → "3 items". Dictionaries hold plain strings so they can be passed to client components.
export const fmt = (template: string, vars: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? `{${key}}`))

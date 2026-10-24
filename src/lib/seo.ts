import type { Metadata } from "next"
import { localePath, locales, type Locale } from "@/i18n/config"

// Canonical + hreflang alternates for a path that exists in every language.
export function alternates(lang: Locale, path: string): Metadata["alternates"] {
  return {
    canonical: localePath(lang, path),
    languages: {
      ...Object.fromEntries(locales.map((l) => [l === "hi" ? "hi-IN" : "en-IN", localePath(l, path)])),
      "x-default": localePath("en", path),
    },
  }
}

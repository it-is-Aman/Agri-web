import { en, type Dictionary } from "./en"
import { hi } from "./hi"
import type { Locale } from "./config"

export * from "./config"
export type { Dictionary }

const dictionaries: Record<Locale, Dictionary> = { en, hi }

export const getDictionary = (lang: Locale) => dictionaries[lang]

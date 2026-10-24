import Link from "next/link"
import { fullAddress, phoneDisplay, siteConfig, telLink, whatsappLink } from "@/config/site"
import { localePath, type Dictionary, type Locale } from "@/i18n"
import { CATEGORIES } from "@/lib/catalog/types"
import { Logo } from "./Logo"

export function SiteFooter({ lang, t }: { lang: Locale; t: Dictionary }) {
  const { registration } = siteConfig
  const regs = [
    registration.gstin && `${t.facts.gstin} ${registration.gstin}`,
    registration.udyam && `${t.facts.udyam} ${registration.udyam}`,
    registration.iec && `${t.facts.iec} ${registration.iec}`,
  ].filter(Boolean)

  const heading = "spec-label mb-4 text-signal"
  const link = "text-bone/75 transition-colors hover:text-signal"

  return (
    <footer className="grid-paper-dark bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-4 pb-28 pt-16 md:pb-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo href={localePath(lang, "/")} tone="light" />
            <p className="mt-5 max-w-xs text-bone/70">{t.footer.tagline}</p>
          </div>

          <div>
            <p className={heading}>{t.footer.shop}</p>
            <ul className="space-y-2.5">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link href={localePath(lang, `/shop?category=${c.slug}`)} className={link}>
                    {t.categories[c.slug].title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={localePath(lang, "/repair")} className={link}>
                  {t.nav.repair}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={heading}>{t.footer.company}</p>
            <ul className="space-y-2.5">
              {(["about", "dealers", "contact"] as const).map((key) => (
                <li key={key}>
                  <Link href={localePath(lang, `/${key}`)} className={link}>
                    {t.nav[key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={heading}>{t.footer.reach}</p>
            <ul className="space-y-2.5">
              {phoneDisplay() && (
                <li>
                  <a href={telLink()} className={`${link} font-mono`}>
                    {phoneDisplay()}
                  </a>
                </li>
              )}
              <li>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={link}>
                  {t.common.whatsapp}
                </a>
              </li>
              {siteConfig.email && (
                <li>
                  <a href={`mailto:${siteConfig.email}`} className={link}>
                    {siteConfig.email}
                  </a>
                </li>
              )}
              <li className="text-bone/75">{fullAddress()}</li>
              {siteConfig.shopHours && <li className="text-bone/75">{siteConfig.shopHours}</li>}
            </ul>
          </div>
        </div>

        {/* Oversized wordmark — the manual's back cover */}
        <p
          aria-hidden="true"
          className="mt-16 select-none font-display text-[22vw] font-semibold uppercase leading-[0.75] text-bone/[0.06] md:text-[11rem]"
        >
          {siteConfig.name}
        </p>

        <div className="mt-6 grid gap-4 border-t border-bone/15 pt-6 text-sm text-bone/55 md:grid-cols-[1fr_auto]">
          <p className="max-w-3xl">{siteConfig.brandDisclaimer}</p>
          <div className="md:text-right">
            {regs.length > 0 && <p className="font-mono text-xs">{regs.join(" · ")}</p>}
            <p className="mt-1">
              © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

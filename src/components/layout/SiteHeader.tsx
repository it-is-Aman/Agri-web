import { Phone, Truck } from "lucide-react"
import { phoneDisplay, siteConfig, telLink, whatsappLink } from "@/config/site"
import { localePath, type Dictionary, type Locale } from "@/i18n"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { EnquiryButton } from "@/components/enquiry/EnquiryButton"
import { HeaderNav, type NavItem } from "./HeaderNav"
import { LanguageSwitch } from "./LanguageSwitch"
import { Logo } from "./Logo"
import { MobileNav } from "./MobileNav"

export function navItems(lang: Locale, t: Dictionary): NavItem[] {
  return [
    { href: localePath(lang, "/shop"), label: t.nav.shop },
    { href: localePath(lang, "/repair"), label: t.nav.repair },
    { href: localePath(lang, "/dealers"), label: t.nav.dealers },
    { href: localePath(lang, "/about"), label: t.nav.about },
    { href: localePath(lang, "/contact"), label: t.nav.contact },
  ]
}

export function SiteHeader({ lang, t }: { lang: Locale; t: Dictionary }) {
  const items = navItems(lang, t)

  return (
    <header className="sticky top-0 z-40">
      {/* Utility strip */}
      <div className="bg-ink text-bone/80">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:text-sm">
          <p className="flex items-center gap-2 truncate">
            <span className="size-2 shrink-0 rounded-full bg-signal" />
            <span className="truncate">
              {siteConfig.address.city}
              {siteConfig.shopHours && <span className="hidden sm:inline"> · {siteConfig.shopHours}</span>}
            </span>
          </p>
          <p className="hidden items-center gap-2 md:flex">
            <Truck className="size-4 text-signal" /> {t.common.shipsIndia}
          </p>
          {phoneDisplay() && (
            <a href={telLink()} className="flex shrink-0 items-center gap-1.5 font-mono hover:text-signal">
              <Phone className="size-3.5" /> {phoneDisplay()}
            </a>
          )}
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b-2 border-ink bg-bone/95 backdrop-blur supports-[backdrop-filter]:bg-bone/85">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-stretch justify-between gap-4 px-4">
          <Logo href={localePath(lang, "/")} className="self-center" />
          <HeaderNav items={items} />
          <div className="flex items-center gap-2">
            <LanguageSwitch
              lang={lang}
              label={t.common.language}
              ariaLabel={t.common.languageLabel}
              className="max-sm:hidden"
            />
            <EnquiryButton label={t.common.enquiry} />
            <Button asChild variant="signal" className="max-md:hidden">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="size-5" /> {t.common.whatsapp}
              </a>
            </Button>
            <MobileNav items={items} labels={{ menu: t.nav.menu, callUs: t.common.callUs }} />
          </div>
        </div>
      </div>
    </header>
  )
}

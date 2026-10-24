import Link from "next/link"
import { en } from "@/i18n/en"
import { hi } from "@/i18n/hi"
import { Button } from "@/components/ui/button"

// not-found doesn't receive route params, so show both languages.
export default function NotFound() {
  return (
    <section className="grid-paper border-b-2 border-ink">
      <div className="mx-auto max-w-7xl px-4 py-24">
        <p className="font-display text-[10rem] font-semibold leading-[0.8] text-transparent [-webkit-text-stroke:3px_var(--ink)]">
          404
        </p>
        <h1 className="mt-6 text-6xl">{en.notFound.title}</h1>
        <p lang="hi" className="mt-2 font-display text-4xl">
          {hi.notFound.title}
        </p>
        <p className="mt-6 max-w-lg text-lg text-graphite">{en.notFound.body}</p>
        <p lang="hi" className="mt-1 max-w-lg text-graphite">
          {hi.notFound.body}
        </p>
        <Button asChild variant="signal" size="lg" className="mt-8">
          <Link href="/shop">{en.notFound.cta}</Link>
        </Button>
      </div>
    </section>
  )
}

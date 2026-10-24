import { NextResponse, type NextRequest } from "next/server"

// English is served without a prefix ("/shop"), Hindi under "/hi/shop".
// Internally every English URL is rewritten to the [lang]=en route.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === "/hi" || pathname.startsWith("/hi/")) return NextResponse.next()

  // Keep one canonical English URL: /en/x → /x
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.replace(/^\/en/, "") || "/"
    return NextResponse.redirect(url, 308)
  }

  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  // Skip Next internals, API routes and any file with an extension (images, robots.txt, sitemap.xml…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}

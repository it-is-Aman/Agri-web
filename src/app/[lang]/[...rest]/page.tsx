import { notFound } from "next/navigation"

// Unknown URLs render [lang]/not-found inside the site layout (there is no root layout above [lang]).
export default function CatchAll() {
  notFound()
}

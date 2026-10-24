import { formatPrice } from "@/lib/catalog/format"

export type EnquiryItem = { id: string; name: string; price: number | null; qty: number }

type Labels = { messageIntro: string; messageName: string; messagePincode: string; askPrice: string }

// One WhatsApp message listing every item — the shop replies with price, stock and delivery.
export function buildEnquiryMessage(
  items: EnquiryItem[],
  labels: Labels,
  customer: { name?: string; pincode?: string } = {},
) {
  const lines = items.map(
    (item, i) =>
      `${i + 1}. ${item.name} × ${item.qty}  [${item.id}]  ${item.price !== null ? formatPrice(item.price) : labels.askPrice}`,
  )
  const footer = [
    customer.name && `${labels.messageName}: ${customer.name}`,
    customer.pincode && `${labels.messagePincode}: ${customer.pincode}`,
  ].filter(Boolean)
  return [labels.messageIntro, "", ...lines, ...(footer.length ? ["", ...footer] : [])].join("\n")
}

// Generic "label: value" message for the repair and dealer forms.
export function buildFormMessage(intro: string, fields: { label: string; value: string }[]) {
  return [intro, "", ...fields.filter((f) => f.value.trim()).map((f) => `${f.label}: ${f.value.trim()}`)].join("\n")
}

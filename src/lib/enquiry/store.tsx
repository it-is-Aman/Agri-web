"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import type { EnquiryItem } from "./message"

const STORAGE_KEY = "agri-enquiry-v1"

type EnquiryContextValue = {
  items: EnquiryItem[]
  count: number
  open: boolean
  setOpen: (open: boolean) => void
  add: (item: Omit<EnquiryItem, "qty">, qty?: number) => void
  setQty: (id: string, qty: number) => void
  remove: (id: string) => void
  clear: () => void
}

const EnquiryContext = createContext<EnquiryContextValue | null>(null)

// Cart-shaped enquiry list kept in localStorage. Online checkout can replace "send" later.
export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<EnquiryItem[]>([])
  const [loaded, setLoaded] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) setItems(JSON.parse(saved))
    } catch {
      // Private mode or corrupted data — start empty.
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {}
  }, [items, loaded])

  const add = useCallback((item: Omit<EnquiryItem, "qty">, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === item.id)
      if (existing) return prev.map((i) => (i.id === item.id ? { ...i, ...item, qty: i.qty + qty } : i))
      return [...prev, { ...item, qty }]
    })
  }, [])

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: Math.max(1, Math.min(999, qty)) } : i)))
  }, [])

  const remove = useCallback((id: string) => setItems((prev) => prev.filter((i) => i.id !== id)), [])
  const clear = useCallback(() => setItems([]), [])

  const value = useMemo(
    () => ({ items, count: items.reduce((n, i) => n + i.qty, 0), open, setOpen, add, setQty, remove, clear }),
    [items, open, add, setQty, remove, clear],
  )

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
}

export function useEnquiry() {
  const ctx = useContext(EnquiryContext)
  if (!ctx) throw new Error("useEnquiry must be used inside <EnquiryProvider>")
  return ctx
}

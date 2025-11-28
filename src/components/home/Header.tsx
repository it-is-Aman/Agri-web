'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, MessageCircle, Leaf } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const router = useRouter()
    return (
        <>
            {/* Header */}
            < header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm" >
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div
                            className="flex items-center space-x-2 hover:cursor-pointer"
                            onClick={() => { router.push("/") }}
                        >
                            <Leaf className="h-8 w-8 text-emerald-600 animate-pulse-slow" />
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-foreground">{process.env.NEXT_PUBLIC_NAME_HINDI}</span>
                                <span className="text-xs text-muted-foreground hidden sm:inline">{process.env.NEXT_PUBLIC_NAME_ENGLISH}</span>
                            </div>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href="/products" className="text-foreground hover:text-primary transition-colors font-medium">
                                Products
                            </Link>
                            <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
                                Services
                            </Link>
                            <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
                                Blog
                            </Link>
                            <Link href="/about" className="text-foreground hover:text-primary transition-colors font-medium">
                                About
                            </Link>
                            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
                                Contact
                            </Link>
                        </nav>

                        {/* Mobile Nav Toggle */}
                        <div className="md:hidden flex items-center">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-emerald-700 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                                aria-label="Open main menu"
                                onClick={() => setMobileMenuOpen((open) => !open)}
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        <div className="hidden md:flex items-center space-x-3">
                            <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2 bg-transparent hover-lift">
                                <Phone className="h-4 w-4" />
                                <span>{process.env.NEXT_PUBLIC_PHONE}</span>
                            </Button>
                            <Button size="sm" className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white border border-amber-300 hover-lift">
                                <MessageCircle className="h-4 w-4 mr-2" />
                                WhatsApp करें
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                {
                    mobileMenuOpen && (
                        <div className="md:hidden bg-background border-t border-border shadow-lg animate-slide-in-left">
                            <nav className="flex flex-col px-4 py-4 space-y-2">
                                <Link href="/products" className="text-foreground hover:text-primary py-2 px-2 rounded transition-colors">
                                    Products
                                </Link>
                                <Link href="/services" className="text-foreground hover:text-primary py-2 px-2 rounded transition-colors">
                                    Services
                                </Link>
                                <Link href="/blog" className="text-foreground hover:text-primary py-2 px-2 rounded transition-colors">
                                    Blog
                                </Link>
                                <Link href="/about" className="text-foreground hover:text-primary py-2 px-2 rounded transition-colors">
                                    About
                                </Link>
                                <Link href="/contact" className="text-foreground hover:text-primary py-2 px-2 rounded transition-colors">
                                    Contact
                                </Link>
                            </nav>
                        </div>
                    )
                }
            </header >
        </>
    )
}
'use client'

import React from 'react'
import { X, Check } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'

interface Product {
    id: number
    name: string
    image: string
    price: string
    features: string[]
    specifications: Record<string, string>
}

interface ProductComparisonProps {
    products: Product[]
    onClose: () => void
}

export function ProductComparison({ products, onClose }: ProductComparisonProps) {
    if (products.length === 0) return null

    const allSpecs = Array.from(
        new Set(products.flatMap(p => Object.keys(p.specifications)))
    )

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
            <Card className="max-w-6xl w-full max-h-[90vh] overflow-auto">
                <CardHeader className="flex flex-row items-center justify-between sticky top-0 bg-white z-10 border-b">
                    <CardTitle className="text-emerald-700">
                        Product Comparison | उत्पाद तुलना
                    </CardTitle>
                    <Button variant="ghost" size="sm" onClick={onClose}>
                        <X className="h-5 w-5" />
                    </Button>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="space-y-4">
                                {/* Product Image */}
                                <div className="relative aspect-square rounded-xl overflow-hidden border-2 border-emerald-200">
                                    <Image
                                        src={`/img/${product.image.replace('/', '')}`}
                                        alt={product.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Product Name */}
                                <h3 className="font-bold text-lg text-center">{product.name}</h3>

                                {/* Price */}
                                <div className="text-center">
                                    <span className="text-2xl font-bold text-emerald-700">{product.price}</span>
                                </div>

                                {/* Features */}
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-sm text-muted-foreground">Features:</h4>
                                    {product.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <Check className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Specifications */}
                                <div className="space-y-2">
                                    <h4 className="font-semibold text-sm text-muted-foreground">Specifications:</h4>
                                    {allSpecs.map((spec) => (
                                        <div key={spec} className="text-sm">
                                            <span className="font-medium">{spec}:</span>{' '}
                                            <span className="text-muted-foreground">
                                                {product.specifications[spec] || 'N/A'}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Action Button */}
                                <Button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white">
                                    Select This Product
                                </Button>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

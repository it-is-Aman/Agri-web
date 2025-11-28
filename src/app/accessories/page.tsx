"use client"

import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, MessageCircle, Phone, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Accessories data (reuse from products)
const accessories = [
    {
        id: 4,
        name: "ब्रश कटर ब्लेड सेट | Brush Cutter Blade Set",
        category: "Accessories",
        forProduct: "Brush Cutters",
        description:
            "अधिकांश ब्रश कटर मॉडल के साथ संगत उच्च गुणवत्ता वाले प्रतिस्थापन ब्लेड। High-quality replacement blades compatible with most brush cutter models.",
        image: "/brush-cutter-replacement-blades-set.jpg",
        price: "₹850",
        originalPrice: "₹1,200",
        features: ["कठोर स्टील", "सार्वभौमिक फिट", "3 का सेट", "लंबे समय तक चलने वाला"],
        specifications: {
            Material: "Carbon Steel (Hardened)",
            Diameter: "255mm",
            Thickness: "1.4mm",
            Teeth: "40T",
        },
        inStock: true,
        origin: "आयातित गुणवत्ता | Imported Quality",
    },
    {
        id: 5,
        name: "टिलर रोटरी ब्लेड | Tiller Rotary Blades",
        category: "Accessories",
        forProduct: "Power Tillers",
        description:
            "भारतीय मिट्टी की स्थितियों के लिए डिज़ाइन किए गए पावर टिलर के लिए टिकाऊ रोटरी ब्लेड। Durable rotary blades for power tillers, designed for Indian soil conditions.",
        image: "/power-tiller-rotary-blades-farming-equipment.jpg",
        price: "₹2,400",
        originalPrice: "₹3,000",
        features: ["हीट ट्रीटेड", "जंग प्रतिरोधी", "6 का सेट", "आसान स्थापना"],
        specifications: {
            Material: "Alloy Steel (Heat Treated)",
            Length: "180mm",
            Width: "65mm",
            Mounting: "Standard Bolt",
        },
        inStock: false,
        origin: "स्थानीय निर्मित | Locally Made",
    },
]

const accessoryCategories = ["All Accessories", "Brush Cutters", "Power Tillers", "Sprayers"]

export default function AccessoriesPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("All Accessories")

    const filteredAccessories = accessories.filter((item) => {
        const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesCategory =
            selectedCategory === "All Accessories" || item.forProduct === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        <span className="bg-gradient-to-r from-green-700 to-emerald-700 bg-clip-text text-transparent">
                            Accessories
                        </span>
                        <br />
                        <span className="text-amber-700">उपकरण सहायक | Product Accessories</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Find compatible accessories and spare parts for your agriculture equipment.
                    </p>
                </div>

                {/* Search & Filter */}
                <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <input
                            type="text"
                            placeholder="Search accessories..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 pr-4 py-2 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
                        />
                        <svg
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600 h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                            />
                        </svg>
                    </div>
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="py-2 px-4 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-600 w-full md:w-48"
                    >
                        {accessoryCategories.map((cat) => (
                            <option key={cat} value={cat}>
                                {cat}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Accessories Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredAccessories.map((item) => (
                        <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-shadow border-green-700 border-2 rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-100">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={"/img/" + item.image.replace("/", "")}
                                    alt={item.name}
                                    className="w-full h-full p-4 object-cover hover:scale-105 transition-transform duration-300 rounded-2xl "
                                    width={500}
                                    height={300}
                                />
                                {!item.inStock && (
                                    <div className="absolute top-2 right-2">
                                        <Badge variant="destructive">Out of Stock</Badge>
                                    </div>
                                )}
                                {item.originalPrice && (
                                    <div className="absolute top-2 left-2">
                                        <Badge className="bg-red-500 text-white">
                                            Save ₹
                                            {Number.parseInt(item.originalPrice.replace(/[₹,]/g, "")) -
                                                Number.parseInt(item.price.replace(/[₹,]/g, ""))}
                                        </Badge>
                                    </div>
                                )}
                                <Leaf className="absolute bottom-2 right-2 h-7 w-7 text-green-600 bg-white rounded-full p-1 shadow-md" />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg line-clamp-2 flex items-center gap-2">
                                    <Leaf className="h-5 w-5 text-green-600" />
                                    {item.name}
                                </CardTitle>
                                <Badge variant="secondary" className="mt-1 text-xs bg-green-100 text-green-800 border-green-300">
                                    {item.category}
                                </Badge>
                                <CardDescription className="line-clamp-2 text-green-900">
                                    {item.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-wrap gap-1">
                                    {item.features.map((feature, index) => (
                                        <Badge key={index} variant="outline" className="text-xs bg-green-100 text-green-800 border-green-300">
                                            {feature}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-green-700">{item.price}</span>
                                    {item.originalPrice && (
                                        <span className="text-sm text-muted-foreground line-through">{item.originalPrice}</span>
                                    )}
                                    <Button size="sm" disabled={!item.inStock} className="bg-green-600 hover:bg-green-700 text-white rounded-full">
                                        {item.inStock ? "Enquire Now" : "Out of Stock"}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                {filteredAccessories.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">No accessories found matching your criteria.</p>
                        <Button
                            variant="outline"
                            onClick={() => {
                                setSearchTerm("")
                                setSelectedCategory("All Accessories")
                            }}
                            className="mt-4"
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}
            </div>

            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
                    <MessageCircle className="h-6 w-6" />
                </Button>
            </div>
        </div>
    )
}

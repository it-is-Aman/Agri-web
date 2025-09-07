"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Phone, MessageCircle, Leaf, ArrowLeft } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Professional Brush Cutter BC-520",
    category: "Brush Cutters",
    description: "Heavy-duty brush cutter with 52cc engine for clearing thick vegetation and maintaining farmland",
    image: "/professional-brush-cutter-in-agricultural-field.jpg",
    price: "₹18,500",
    originalPrice: "₹22,000",
    features: ["52cc Engine", "Anti-vibration", "Easy Start", "Dual Handle"],
    specifications: {
      Engine: "52cc 2-stroke",
      Power: "2.2 HP",
      Weight: "7.5 kg",
      "Cutting Width": "255mm",
    },
    inStock: true,
  },
  {
    id: 2,
    name: "Power Tiller PT-700",
    category: "Power Tillers",
    description: "Efficient 7HP tiller for soil preparation and cultivation in small to medium farms",
    image: "/power-tiller-machine-working-in-farm-soil.jpg",
    price: "₹45,000",
    originalPrice: "₹52,000",
    features: ["7HP Engine", "Adjustable Width", "Fuel Efficient", "Forward & Reverse"],
    specifications: {
      Engine: "7HP Diesel",
      "Tilling Width": "600-900mm",
      Weight: "85 kg",
      "Fuel Tank": "3.5L",
    },
    inStock: true,
  },
  {
    id: 3,
    name: "Agricultural Sprayer AS-16L",
    category: "Sprayers",
    description: "High-capacity 16L sprayer for pesticides and fertilizers with uniform coverage",
    image: "/agricultural-sprayer-equipment-for-farming.jpg",
    price: "₹3,200",
    originalPrice: "₹4,000",
    features: ["16L Capacity", "Adjustable Nozzle", "Lightweight", "Comfortable Straps"],
    specifications: {
      Capacity: "16 Liters",
      Material: "HDPE Tank",
      Weight: "2.8 kg",
      Pressure: "0.15-0.4 MPa",
    },
    inStock: true,
  },
  {
    id: 4,
    name: "Brush Cutter Blade Set",
    category: "Spare Parts",
    description: "High-quality replacement blades compatible with most brush cutter models",
    image: "/brush-cutter-replacement-blades-set.jpg",
    price: "₹850",
    originalPrice: "₹1,200",
    features: ["Hardened Steel", "Universal Fit", "Set of 3", "Long Lasting"],
    specifications: {
      Material: "Carbon Steel",
      Diameter: "255mm",
      Thickness: "1.4mm",
      Teeth: "40T",
    },
    inStock: true,
  },
  {
    id: 5,
    name: "Tiller Rotary Blades",
    category: "Spare Parts",
    description: "Durable rotary blades for power tillers, designed for Indian soil conditions",
    image: "/power-tiller-rotary-blades-farming-equipment.jpg",
    price: "₹2,400",
    originalPrice: "₹3,000",
    features: ["Heat Treated", "Corrosion Resistant", "Set of 6", "Easy Installation"],
    specifications: {
      Material: "Alloy Steel",
      Length: "180mm",
      Width: "65mm",
      Mounting: "Standard Bolt",
    },
    inStock: false,
  },
  {
    id: 6,
    name: "Compact Brush Cutter BC-330",
    category: "Brush Cutters",
    description: "Lightweight 33cc brush cutter perfect for small farms and garden maintenance",
    image: "/compact-brush-cutter-small-farming-tool.jpg",
    price: "₹12,500",
    originalPrice: "₹15,000",
    features: ["33cc Engine", "Lightweight", "Easy Maneuver", "Low Vibration"],
    specifications: {
      Engine: "33cc 2-stroke",
      Power: "1.6 HP",
      Weight: "5.2 kg",
      "Cutting Width": "230mm",
    },
    inStock: true,
  },
]

const categories = ["All Products", "Brush Cutters", "Power Tillers", "Sprayers", "Spare Parts"]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Products")
  const [sortBy, setSortBy] = useState("name")

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "All Products" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return Number.parseInt(a.price.replace(/[₹,]/g, "")) - Number.parseInt(b.price.replace(/[₹,]/g, ""))
        case "price-high":
          return Number.parseInt(b.price.replace(/[₹,]/g, "")) - Number.parseInt(a.price.replace(/[₹,]/g, ""))
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5" />
                <Leaf className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">AgriTools India</span>
              </Link>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" className="hidden sm:flex items-center space-x-2 bg-transparent">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Our Products</h1>
          <p className="text-muted-foreground">Discover our complete range of agriculture tools and spare parts</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Sort by Name</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute top-2 right-2">
                    <Badge variant="destructive">Out of Stock</Badge>
                  </div>
                )}
                {product.originalPrice && (
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-red-500 text-white">
                      Save ₹
                      {Number.parseInt(product.originalPrice.replace(/[₹,]/g, "")) -
                        Number.parseInt(product.price.replace(/[₹,]/g, ""))}
                    </Badge>
                  </div>
                )}
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                    <Badge variant="secondary" className="mt-1 text-xs">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="line-clamp-2">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {product.features.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{product.features.length - 3} more
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Link href={`/products/${product.id}`}>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </Link>
                    <Button size="sm" disabled={!product.inStock}>
                      {product.inStock ? "Enquire Now" : "Out of Stock"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All Products")
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="mb-6 opacity-90">Contact us directly for custom requirements or specific product inquiries</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="mr-2 h-5 w-5" />
              Call: +91 98765 43210
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>
        </div>
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

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Phone, MessageCircle, Leaf, ArrowLeft, CheckCircle, Truck, Shield, Wrench } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "Professional Brush Cutter BC-520",
    category: "Brush Cutters",
    description:
      "Heavy-duty brush cutter with 52cc engine for clearing thick vegetation and maintaining farmland. Perfect for professional use and large-scale farming operations.",
    longDescription:
      "The Professional Brush Cutter BC-520 is engineered for demanding agricultural tasks. With its powerful 52cc 2-stroke engine, this brush cutter delivers exceptional performance for clearing thick vegetation, maintaining farmland, and managing overgrown areas. The anti-vibration system ensures comfortable operation during extended use, while the easy-start mechanism reduces operator fatigue.",
    images: [
      "/professional-brush-cutter-in-agricultural-field.jpg",
      "/brush-cutter-close-up-details.jpg",
      "/brush-cutter-engine-specifications.jpg",
    ],
    price: "₹18,500",
    originalPrice: "₹22,000",
    features: ["52cc Engine", "Anti-vibration", "Easy Start", "Dual Handle", "Adjustable Harness", "Safety Guard"],
    specifications: {
      "Engine Type": "52cc 2-stroke Air-cooled",
      "Power Output": "2.2 HP / 1.6 kW",
      Weight: "7.5 kg",
      "Cutting Width": "255mm",
      "Fuel Tank": "1.2L",
      "Starting System": "Recoil Start",
      "Handle Type": "Dual Handle with Anti-vibration",
      "Cutting Attachment": "Metal Blade & Nylon Line",
    },
    inStock: true,
    warranty: "2 Years",
    applications: ["Farm Land Clearing", "Roadside Maintenance", "Garden Management", "Vegetation Control"],
    includes: [
      "Brush Cutter Unit",
      "Metal Cutting Blade",
      "Nylon Cutting Head",
      "Shoulder Harness",
      "Tool Kit",
      "User Manual",
    ],
  },
  {
    id: 2,
    name: "Power Tiller PT-700",
    category: "Power Tillers",
    description: "Efficient 7HP tiller for soil preparation and cultivation in small to medium farms",
    longDescription:
      "The Power Tiller PT-700 is designed for efficient soil preparation and cultivation. With its robust 7HP diesel engine, this tiller provides excellent fuel efficiency and reliable performance for small to medium-sized farms. The adjustable tilling width and forward/reverse functionality make it versatile for various farming operations.",
    images: [
      "/power-tiller-machine-working-in-farm-soil.jpg",
      "/power-tiller-engine-close-up.jpg",
      "/power-tiller-rotary-blades-detail.jpg",
    ],
    price: "₹45,000",
    originalPrice: "₹52,000",
    features: [
      "7HP Engine",
      "Adjustable Width",
      "Fuel Efficient",
      "Forward & Reverse",
      "Easy Maintenance",
      "Durable Build",
    ],
    specifications: {
      "Engine Type": "7HP Single Cylinder Diesel",
      "Power Output": "7 HP / 5.2 kW",
      Weight: "85 kg",
      "Tilling Width": "600-900mm (Adjustable)",
      "Fuel Tank": "3.5L",
      Transmission: "Gear Type",
      "Tilling Depth": "150-200mm",
      Speed: "Forward: 2.5-3.5 km/h, Reverse: 1.5 km/h",
    },
    inStock: true,
    warranty: "3 Years",
    applications: ["Soil Preparation", "Seedbed Preparation", "Weeding", "Ridging", "Puddling"],
    includes: ["Tiller Unit", "Rotary Blades Set", "Side Covers", "Tool Kit", "Operator Manual", "Spare Parts Kit"],
  },
]

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border">
              <Image
                src={product.images[0] || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
                width={500}
                height={500}
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg border">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    width={500}
                    height={500}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-muted-foreground text-lg">{product.description}</p>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-primary">{product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">{product.originalPrice}</span>
              )}
              {product.originalPrice && (
                <Badge className="bg-red-500 text-white">
                  Save ₹
                  {Number.parseInt(product.originalPrice.replace(/[₹,]/g, "")) -
                    Number.parseInt(product.price.replace(/[₹,]/g, ""))}
                </Badge>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-green-600 font-medium">In Stock</span>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="font-semibold mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center space-x-6 py-4 border-y border-border">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm">{product.warranty} Warranty</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-primary" />
                <span className="text-sm">Free Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wrench className="h-5 w-5 text-primary" />
                <span className="text-sm">Service Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button size="lg" className="w-full">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Quote via WhatsApp
              </Button>
              <Button variant="outline" size="lg" className="w-full bg-transparent">
                <Phone className="mr-2 h-5 w-5" />
                Call for Price: +91 98765 43210
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {/* Description */}
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Product Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {product.applications.map((application, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{application}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What&apos;s Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.includes.map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Specifications */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index}>
                      <div className="flex justify-between items-start">
                        <span className="text-sm font-medium text-muted-foreground">{key}</span>
                        <span className="text-sm text-right">{value}</span>
                      </div>
                      {index < Object.entries(product.specifications).length - 1 && <Separator className="mt-3" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter((p) => p.id !== product.id && p.category === product.category)
              .slice(0, 3)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedProduct.images[0] || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      width={500}
                      height={300}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{relatedProduct.name}</CardTitle>
                    <CardDescription>{relatedProduct.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{relatedProduct.price}</span>
                      <Link href={`/products/${relatedProduct.id}`}>
                        <Button size="sm">View Details</Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
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

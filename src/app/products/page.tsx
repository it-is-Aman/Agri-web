"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Phone, MessageCircle, Leaf, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const products = [
	{
		id: 1,
		name: "भारत ब्रश कटर प्रो | Bharat Brush Cutter Pro BC-520",
		category: "Brush Cutters",
		description:
			"भारतीय खेतों के लिए विशेष रूप से डिज़ाइन किया गया। मोटी वनस्पति और घास काटने के लिए 52cc इंजन के साथ। Specially designed for Indian farms. 52cc engine for cutting thick vegetation and grass.",
		image: "/professional-brush-cutter-in-agricultural-field.jpg",
		price: "₹18,500",
		originalPrice: "₹22,000",
		features: ["52cc Japanese Engine", "मानसून प्रतिरोधी", "आसान स्टार्ट", "Dual Handle"],
		specifications: {
			Engine: "52cc 2-stroke (Japan made)",
			Power: "2.2 HP",
			Weight: "7.5 kg",
			"Cutting Width": "255mm",
		},
		inStock: true,
		origin: "भारत में बना | Made for India",
	},
	{
		id: 2,
		name: "किसान पावर टिलर | Kisan Power Tiller PT-700",
		category: "Power Tillers",
		description:
			"छोटे से मध्यम भारतीय खेतों के लिए कुशल 7HP टिलर। मिट्टी की तैयारी और खेती के लिए। Efficient 7HP tiller for small to medium Indian farms. For soil preparation and cultivation.",
		image: "/power-tiller-machine-working-in-farm-soil.jpg",
		price: "₹85,000",
		originalPrice: "₹95,000",
		features: ["7HP Diesel Engine", "समायोज्य चौड़ाई", "ईंधन की बचत", "Forward & Reverse"],
		specifications: {
			Engine: "7HP Diesel (Kirloskar)",
			"Tilling Width": "600-900mm",
			Weight: "85 kg",
			"Fuel Tank": "3.5L",
		},
		inStock: true,
		origin: "भारतीय इंजन | Indian Engine",
	},
	{
		id: 3,
		name: "कृषि स्प्रेयर प्रो | Krishi Sprayer Pro AS-16L",
		category: "Sprayers",
		description:
			"कीटनाशक और उर्वरक के लिए उच्च क्षमता 16L स्प्रेयर। समान कवरेज के साथ। High-capacity 16L sprayer for pesticides and fertilizers with uniform coverage.",
		image: "/agricultural-sprayer-equipment-for-farming.jpg",
		price: "₹3,500",
		originalPrice: "₹4,200",
		features: ["16L Capacity", "समायोज्य नोज़ल", "हल्का वजन", "आरामदायक पट्टियां"],
		specifications: {
			Capacity: "16 Liters",
			Material: "HDPE Tank (UV Protected)",
			Weight: "2.8 kg",
			Pressure: "0.15-0.4 MPa",
		},
		inStock: true,
		origin: "भारत निर्मित | Made in India",
	},
	{
		id: 4,
		name: "ब्रश कटर ब्लेड सेट | Brush Cutter Blade Set",
		category: "Spare Parts",
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
		category: "Spare Parts",
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
	{
		id: 6,
		name: "कॉम्पैक्ट ब्रश कटर | Compact Brush Cutter BC-330",
		category: "Brush Cutters",
		description:
			"छोटे खेतों और बगीचे के रखरखाव के लिए उपयुक्त हल्का 33cc ब्रश कटर। Lightweight 33cc brush cutter perfect for small farms and garden maintenance.",
		image: "/compact-brush-cutter-small-farming-tool.jpg",
		price: "₹12,500",
		originalPrice: "₹15,000",
		features: ["33cc Engine", "हल्का वजन", "आसान चलाना", "कम कंपन"],
		specifications: {
			Engine: "33cc 2-stroke",
			Power: "1.6 HP",
			Weight: "5.2 kg",
			"Cutting Width": "230mm",
		},
		inStock: true,
		origin: "किफायती विकल्प | Affordable Option",
	},
]

const categories = ["सभी उत्पाद | All Products", "Brush Cutters", "Power Tillers", "Sprayers", "स्पेयर पार्ट्स | Spare Parts"]

export default function ProductsPage() {
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedCategory, setSelectedCategory] = useState("सभी उत्पाद | All Products")
	const [sortBy, setSortBy] = useState("name")

	const filteredProducts = products
		.filter((product) => {
			const matchesSearch =
				product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.description.toLowerCase().includes(searchTerm.toLowerCase())
			const matchesCategory =
				selectedCategory === "सभी उत्पाद | All Products" || product.category === selectedCategory
			return matchesSearch && matchesCategory
		})
		.sort((a, b) => {
			switch (sortBy) {
				case "price-low":
					return (
						Number.parseInt(a.price.replace(/[₹,]/g, "")) -
						Number.parseInt(b.price.replace(/[₹,]/g, ""))
					)
				case "price-high":
					return (
						Number.parseInt(b.price.replace(/[₹,]/g, "")) -
						Number.parseInt(a.price.replace(/[₹,]/g, ""))
					)
				case "name":
				default:
					return a.name.localeCompare(b.name)
			}
		})

	return (
		<div className="min-h-screen bg-gradient-to-br from-emerald-50/30 via-white to-amber-50/30">
			{/* Header */}
			<header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
				<div className="container mx-auto px-4 py-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center space-x-4">
							<Link href="/" className="flex items-center space-x-2">
								<ArrowLeft className="h-5 w-5" />
								<Leaf className="h-8 w-8 text-emerald-600" />
								<span className="text-xl font-bold text-foreground">
									{process.env.NEXT_PUBLIC_NAME_HINDI}
								</span>
							</Link>
						</div>

						<div className="flex items-center space-x-3">
							<Button
								variant="outline"
								size="sm"
								className="hidden sm:flex items-center space-x-2 bg-transparent"
							>
								<Phone className="h-4 w-4" />
								<span>+91 98765 43210</span>
							</Button>
							<Button
								size="sm"
								className="bg-emerald-600 hover:bg-emerald-700 text-white border border-amber-300"
							>
								<MessageCircle className="h-4 w-4 mr-2" />
								WhatsApp करें
							</Button>
						</div>
					</div>
				</div>
			</header>

			<div className="container mx-auto px-4 py-8">
				{/* Page Header */}
				<div className="mb-8 text-center">
					<h1 className="text-4xl font-bold text-foreground mb-4">
						<span className="bg-gradient-to-r from-emerald-700 to-green-700 bg-clip-text text-transparent">
							हमारे उत्पाद
						</span>
						<br />
						<span className="text-amber-700">Our Products</span>
					</h1>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
						भारतीय किसानों के लिए विशेष रूप से डिज़ाइन किए गए प्रामाणिक कृषि उपकरण खोजें
						<br />
						<em className="text-emerald-600">Discover authentic agriculture tools specially designed for Indian farmers</em>
					</p>
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
						<Select
							value={selectedCategory}
							onValueChange={setSelectedCategory}
						>
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
								<SelectItem value="price-low">
									Price: Low to High
								</SelectItem>
								<SelectItem value="price-high">
									Price: High to Low
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				{/* Products Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProducts.map((product) => (
						<Card
							key={product.id}
							className="overflow-hidden hover:shadow-xl transition-shadow border-green-700 border-2 rounded-2xl bg-gradient-to-br from-green-50 via-white to-green-100"
						>
							<div className="relative aspect-[4/3] overflow-hidden">
								<Image
									src={"/img/" + product.image.replace("/", "")}
									alt={product.name}
									className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 rounded-xl border border-green-200"
									width={500}
									height={300}
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
											{Number.parseInt(
												product.originalPrice.replace(/[₹,]/g, "")
											) -
												Number.parseInt(product.price.replace(/[₹,]/g, ""))}
										</Badge>
									</div>
								)}
								<Leaf className="absolute bottom-2 right-2 h-7 w-7 text-green-600 bg-white rounded-full p-1 shadow-md" />
							</div>
							<CardHeader>
								<div className="flex items-start justify-between">
									<div>
										<CardTitle className="text-lg line-clamp-2 flex items-center gap-2">
											<Leaf className="h-5 w-5 text-green-600" />
											{product.name}
										</CardTitle>
										<Badge
											variant="secondary"
											className="mt-1 text-xs bg-green-100 text-green-800 border-green-300"
										>
											{product.category}
										</Badge>
									</div>
								</div>
								<CardDescription className="line-clamp-2 text-green-900">
									{product.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex flex-wrap gap-1">
									{product.features.slice(0, 3).map((feature, index) => (
										<Badge
											key={index}
											variant="outline"
											className="text-xs bg-green-100 text-green-800 border-green-300"
										>
											{feature}
										</Badge>
									))}
									{product.features.length > 3 && (
										<Badge
											variant="outline"
											className="text-xs bg-green-100 text-green-800 border-green-300"
										>
											+{product.features.length - 3} more
										</Badge>
									)}
								</div>
								<div className="flex items-center justify-between">
									<div className="space-y-1">
										<div className="flex items-center space-x-2">
											<span className="text-xl font-bold text-green-700">
												{product.price}
											</span>
											{product.originalPrice && (
												<span className="text-sm text-muted-foreground line-through">
													{product.originalPrice}
												</span>
											)}
										</div>
									</div>
									<div className="flex space-x-2">
										<Link href={`/products/${product.id}`}>
											<Button
												variant="outline"
												size="sm"
												className="bg-green-600 hover:bg-green-700 text-white rounded-full"
											>
												View Details
											</Button>
										</Link>
										<div className="relative group">
											<Button
												size="sm"
												disabled={!product.inStock}
												className="bg-green-600 hover:bg-green-700 text-white rounded-full"
											>
												{product.inStock ? "Enquire Now" : "Out of Stock"}
											</Button>
											{product.inStock && (
												<span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs bg-green-700 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
													Get expert advice or a quick quote
												</span>
											)}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{filteredProducts.length === 0 && (
					<div className="text-center py-12">
						<p className="text-muted-foreground text-lg">
							No products found matching your criteria.
						</p>
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
					<h2 className="text-2xl font-bold mb-4">
						Can&apos;t Find What You&apos;re Looking For?
					</h2>
					<p className="mb-6 opacity-90">
						Contact us directly for custom requirements or specific product
						inquiries
					</p>
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

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
		category: "Accessories",
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

const categories = [
	"सभी उत्पाद | All Products",
	"Brush Cutters",
	"Power Tillers",
	"Sprayers",
	"Accessories"
]

export default function ProductsPage() {
	const [searchTerm, setSearchTerm] = useState("")
	const [selectedCategory, setSelectedCategory] = useState("सभी उत्पाद | All Products")
	const [sortBy, setSortBy] = useState("name")

	// Filter out accessories for main products grid
	const mainProductCategories = ["Brush Cutters", "Power Tillers", "Sprayers"];
	const filteredProducts = products
		.filter((product) => {
			const matchesSearch =
				product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				product.description.toLowerCase().includes(searchTerm.toLowerCase())
			const matchesCategory =
				selectedCategory === "सभी उत्पाद | All Products"
					? mainProductCategories.includes(product.category)
					: product.category === selectedCategory
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
		<div className="min-h-screen bg-gradient-to-br from-emerald-50/30 via-white to-amber-50/30 pattern-diagonal">
			<div className="container mx-auto px-4 py-8">
				{/* Page Header */}
				<div className="mb-8 text-center animate-fade-in">
					<h1 className="text-responsive-lg font-bold text-foreground mb-4">
						<span className="text-emerald-700">
							हमारे उत्पाद
						</span>
						<br />
						<span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Our Products</span>
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

				{/* Add Accessories Button */}
				<div className="mb-8 text-right">
					<Link href="/accessories">
						<Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
							View Accessories
						</Button>
					</Link>
				</div>

				{/* Products Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{filteredProducts.map((product, index) => (
						<Card
							key={product.id}
							className="overflow-hidden hover-lift border-2 border-emerald-200 hover:border-emerald-400 rounded-3xl bg-gradient-to-br from-white via-emerald-50/50 to-amber-50/30 animate-fade-in"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="relative aspect-[4/3] overflow-hidden">
								<Image
									src={"/img/" + product.image.replace("/", "")}
									alt={product.name}
									className="w-full h-full object-cover hover-scale"
									width={500}
									height={300}
								/>
								{!product.inStock && (
									<div className="absolute top-3 right-3">
										<Badge variant="destructive" className="shadow-lg">Out of Stock</Badge>
									</div>
								)}
								{product.originalPrice && (
									<div className="absolute top-3 left-3 flex flex-col gap-2">
										<Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
											Save ₹
											{Number.parseInt(
												product.originalPrice.replace(/[₹,]/g, "")
											) -
												Number.parseInt(product.price.replace(/[₹,]/g, ""))}
										</Badge>
										<Badge className="bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg">
											{Math.round(((Number.parseInt(product.originalPrice.replace(/[₹,]/g, "")) - Number.parseInt(product.price.replace(/[₹,]/g, ""))) / Number.parseInt(product.originalPrice.replace(/[₹,]/g, ""))) * 100)}% OFF
										</Badge>
									</div>
								)}
								<Leaf className="absolute top-3 right-3 h-8 w-8 text-emerald-600 bg-white/90 rounded-full p-1.5 shadow-lg border border-emerald-300" />
							</div>
							<CardHeader>
								<CardTitle className="text-lg line-clamp-2">
									{product.name}
								</CardTitle>
								<div className="flex items-center gap-2 mt-2">
									<Badge
										variant="secondary"
										className="text-xs bg-gradient-to-r from-emerald-100 to-amber-100 text-emerald-800 border-emerald-300"
									>
										{product.category}
									</Badge>
									<Badge className="text-xs bg-saffron text-white">
										{product.origin}
									</Badge>
								</div>
								<CardDescription className="line-clamp-3 text-emerald-900 mt-2">
									{product.description}
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex flex-wrap gap-2">
									{product.features.slice(0, 3).map((feature, idx) => (
										<Badge
											key={idx}
											variant="outline"
											className="text-xs bg-emerald-50 text-emerald-800 border-emerald-300"
										>
											{feature}
										</Badge>
									))}
									{product.features.length > 3 && (
										<Badge
											variant="outline"
											className="text-xs bg-amber-50 text-amber-800 border-amber-300"
										>
											+{product.features.length - 3} more
										</Badge>
									)}
								</div>
								<div className="space-y-3">
									<div className="flex items-center justify-between">
										<div>
											<span className="text-2xl font-bold text-emerald-700">
												{product.price}
											</span>
											{product.originalPrice && (
												<span className="text-sm text-muted-foreground line-through ml-2">
													{product.originalPrice}
												</span>
											)}
										</div>
									</div>
									<div className="flex gap-2">
										<Link href={`/products/${product.id}`} className="flex-1">
											<Button
												variant="outline"
												size="sm"
												className="w-full border-emerald-600 text-emerald-700 hover:bg-emerald-50"
											>
												View Details
											</Button>
										</Link>
										<Button
											size="sm"
											disabled={!product.inStock}
											className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-full border border-amber-300 shadow-md hover-lift disabled:opacity-50"
										>
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
				<div className="mt-16 bg-gradient-to-r from-emerald-700 via-green-700 to-emerald-800 text-white rounded-2xl p-8 text-center shadow-xl animate-fade-in">
					<h2 className="text-responsive-md font-bold mb-4">
						क्या आप जो खोज रहे हैं वह नहीं मिल रहा? | Can't Find What You're Looking For?
					</h2>
					<p className="mb-6 opacity-90 max-w-2xl mx-auto">
						कस्टम आवश्यकताओं या विशिष्ट उत्पाद पूछताछ के लिए सीधे हमसे संपर्क करें
						<br />
						<em className="text-amber-200">Contact us directly for custom requirements or specific product inquiries</em>
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-amber-50 border-2 border-amber-300 shadow-lg hover-lift">
							<Phone className="mr-2 h-5 w-5" />
							Call: {process.env.NEXT_PUBLIC_PHONE}
						</Button>
						<Button
							size="lg"
							variant="outline"
							className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-emerald-700 shadow-lg hover-lift"
						>
							<MessageCircle className="mr-2 h-5 w-5" />
							WhatsApp Us
						</Button>
					</div>
				</div>
			</div>

			{/* Floating WhatsApp Button */}
			<div className="fixed bottom-6 right-6 z-50">
				<div className="relative group">
					<Button size="lg" className="rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-2xl border-2 border-amber-300 animate-bounce-subtle hover-glow">
						<MessageCircle className="h-6 w-6" />
					</Button>
					<span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
				</div>
			</div>
		</div>
	)
}

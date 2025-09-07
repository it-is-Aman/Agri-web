"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Calendar, Clock, User, ArrowRight, Phone, MessageCircle, Leaf, ArrowLeft } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "How to Maintain a Brush Cutter for 5+ Years",
    excerpt:
      "Essential maintenance tips to extend your brush cutter's lifespan and ensure optimal performance throughout farming seasons.",
    content:
      "Learn the complete maintenance guide for brush cutters including cleaning, blade care, engine maintenance, and seasonal storage tips.",
    category: "Maintenance",
    author: "Rajesh Sharma",
    publishDate: "2024-01-15",
    readTime: "8 min read",
    image: "/blog-brush-cutter-maintenance-guide.jpg",
    tags: ["Brush Cutter", "Maintenance", "Equipment Care", "Farming Tips"],
    featured: true,
  },
  {
    id: 2,
    title: "Top 5 Agriculture Tools Every Farmer Needs",
    excerpt:
      "Discover the essential agriculture tools that can transform your farming efficiency and productivity in Indian conditions.",
    content: "A comprehensive guide to must-have farming equipment for small to medium-scale farmers in India.",
    category: "Equipment Guide",
    author: "Priya Patel",
    publishDate: "2024-01-10",
    readTime: "6 min read",
    image: "/blog-essential-agriculture-tools-india.jpg",
    tags: ["Agriculture Tools", "Farming Equipment", "Productivity", "India"],
    featured: true,
  },
  {
    id: 3,
    title: "How to Save Fuel in Agriculture Machines",
    excerpt:
      "Practical tips and techniques to reduce fuel consumption in your farming equipment and cut operational costs.",
    content:
      "Learn fuel-saving techniques for tractors, tillers, and other agriculture machinery to reduce farming costs.",
    category: "Cost Saving",
    author: "Amit Kumar",
    publishDate: "2024-01-05",
    readTime: "5 min read",
    image: "/blog-fuel-saving-agriculture-machines.jpg",
    tags: ["Fuel Efficiency", "Cost Saving", "Agriculture Machines", "Farming Tips"],
    featured: false,
  },
  {
    id: 4,
    title: "Choosing the Right Power Tiller for Your Farm",
    excerpt:
      "Complete buying guide for power tillers including size considerations, engine types, and features for different farm sizes.",
    content: "Everything you need to know before purchasing a power tiller for your farming operations.",
    category: "Buying Guide",
    author: "Rajesh Sharma",
    publishDate: "2023-12-28",
    readTime: "7 min read",
    image: "/blog-power-tiller-buying-guide.jpg",
    tags: ["Power Tiller", "Buying Guide", "Farm Equipment", "Agriculture"],
    featured: false,
  },
  {
    id: 5,
    title: "Seasonal Equipment Maintenance Checklist",
    excerpt:
      "A comprehensive checklist for maintaining your agriculture equipment before and after each farming season.",
    content: "Seasonal maintenance tips to keep your farming equipment in top condition year-round.",
    category: "Maintenance",
    author: "Priya Patel",
    publishDate: "2023-12-20",
    readTime: "10 min read",
    image: "/blog-seasonal-equipment-maintenance.jpg",
    tags: ["Maintenance", "Seasonal Care", "Equipment", "Farming"],
    featured: false,
  },
  {
    id: 6,
    title: "Understanding Agriculture Sprayer Types and Uses",
    excerpt:
      "Learn about different types of agriculture sprayers, their applications, and how to choose the right one for your crops.",
    content: "Complete guide to agriculture sprayers including manual, battery, and engine-powered options.",
    category: "Equipment Guide",
    author: "Amit Kumar",
    publishDate: "2023-12-15",
    readTime: "6 min read",
    image: "/blog-agriculture-sprayer-types-guide.jpg",
    tags: ["Sprayers", "Agriculture Equipment", "Crop Protection", "Farming"],
    featured: false,
  },
]

const categories = ["All Posts", "Maintenance", "Equipment Guide", "Buying Guide", "Cost Saving"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Posts")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.slice(0, 3)

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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Agriculture Knowledge Hub</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert tips, guides, and insights to help you get the most out of your agriculture equipment and farming
            operations.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge>{post.category}</Badge>
                    <Badge variant="outline" className="text-xs">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-xl line-clamp-2">
                    <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
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
          </div>
        </div>

        {/* All Posts */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">All Articles</h2>
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3 aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge>{post.category}</Badge>
                          {post.featured && (
                            <Badge variant="outline" className="text-xs">
                              Featured
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl line-clamp-2">
                          <Link href={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link href={`/blog/${post.id}`}>
                          <Button variant="outline" size="sm" className="bg-transparent">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No articles found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("All Posts")
                  }}
                  className="mt-4 bg-transparent"
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Posts */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Articles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex space-x-3">
                    <div className="w-16 h-16 overflow-hidden rounded-lg flex-shrink-0">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link href={`/blog/${post.id}`}>
                        <h4 className="text-sm font-medium line-clamp-2 hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                      </Link>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(post.publishDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => {
                    const count = blogPosts.filter((post) => post.category === category).length
                    return (
                      <div key={category} className="flex items-center justify-between">
                        <button
                          onClick={() => setSelectedCategory(category)}
                          className="text-sm hover:text-primary transition-colors"
                        >
                          {category}
                        </button>
                        <Badge variant="secondary" className="text-xs">
                          {count}
                        </Badge>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Stay Updated</CardTitle>
                <CardDescription>
                  Get the latest agriculture tips and equipment guides delivered to your inbox.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Your email address" type="email" />
                <Button className="w-full">Subscribe to Newsletter</Button>
              </CardContent>
            </Card>
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

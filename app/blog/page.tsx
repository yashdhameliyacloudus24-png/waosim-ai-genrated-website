import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

export const metadata: Metadata = {
  title: "Travel Blog - WaoSim | eSIM Tips & Travel Guides",
  description:
    "Discover travel tips, eSIM guides, and destination insights from WaoSim. Stay informed about global connectivity and travel technology.",
  openGraph: {
    title: "Travel Blog - WaoSim",
    description: "Travel tips, eSIM guides, and destination insights",
    type: "website",
  },
}

const blogPosts = [
  {
    id: "top-10-esim-destinations-2024",
    title: "Top 10 Travel Destinations with Best eSIM Coverage in 2024",
    excerpt:
      "Discover the world's most connected destinations where your eSIM will work flawlessly. From bustling cities to remote islands, these locations offer excellent network coverage.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Travel Tips",
    image: "/travel-destinations-world-map.jpg",
    featured: true,
  },
  {
    id: "esim-vs-physical-sim-guide",
    title: "eSIM vs Physical SIM: Complete Guide for Travelers",
    excerpt:
      "Understanding the differences between eSIM and traditional SIM cards can help you make the right choice for your travels. Learn about the pros, cons, and best use cases.",
    author: "Mike Rodriguez",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Technology",
    image: "/esim-technology-smartphone.jpg",
  },
  {
    id: "digital-nomad-connectivity-tips",
    title: "Digital Nomad's Guide to Staying Connected Worldwide",
    excerpt:
      "Essential connectivity tips for digital nomads working remotely from anywhere. Discover how to maintain reliable internet access across multiple countries.",
    author: "Emma Thompson",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "Digital Nomad",
    image: "/digital-nomad-working-laptop-beach.jpg",
  },
  {
    id: "europe-esim-travel-guide",
    title: "Ultimate Europe eSIM Travel Guide: 27 Countries, One Plan",
    excerpt:
      "Planning a European adventure? Our comprehensive guide covers everything you need to know about using eSIM across Europe's 27 countries.",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "12 min read",
    category: "Regional Guides",
    image: "/europe-travel-landmarks.jpg",
  },
  {
    id: "business-travel-esim-benefits",
    title: "Why Business Travelers Choose eSIM Over Roaming",
    excerpt:
      "Discover how eSIM technology is revolutionizing business travel with cost savings, convenience, and reliable connectivity for professionals on the go.",
    author: "Lisa Wang",
    date: "2024-01-05",
    readTime: "7 min read",
    category: "Business Travel",
    image: "/business-traveler-airport.jpg",
  },
  {
    id: "asia-pacific-connectivity-guide",
    title: "Asia-Pacific Connectivity: Best eSIM Plans for the Region",
    excerpt:
      "From Tokyo to Sydney, explore the best eSIM options for traveling across the Asia-Pacific region. Compare plans, coverage, and pricing.",
    author: "James Liu",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Regional Guides",
    image: "/placeholder-x535r.png",
  },
]

const categories = ["All", "Travel Tips", "Technology", "Digital Nomad", "Regional Guides", "Business Travel"]

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">Travel Blog</h1>
          <p className="text-lg md:text-xl text-slate-600  mx-auto leading-relaxed">
            Discover travel tips, eSIM guides, and destination insights to help you stay connected wherever your journey
            takes you.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "secondary"}
              className="px-4 py-2 cursor-pointer hover:bg-cyan-600 hover:text-white transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="text-center mb-8">
              <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">Featured Article</Badge>
            </div>
            <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8 lg:p-12">
                  <Badge variant="secondary" className="mb-4">
                    {featuredPost.category}
                  </Badge>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-slate-500 mb-6">
                    <User className="h-4 w-4 mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center text-cyan-600 font-medium hover:text-cyan-700 transition-colors"
                  >
                    Read Full Article
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-slate-700">{post.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight group-hover:text-cyan-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed text-sm">{post.excerpt}</p>
                <div className="flex items-center text-xs text-slate-500 mb-4">
                  <User className="h-3 w-3 mr-1" />
                  <span className="mr-3">{post.author}</span>
                  <Calendar className="h-3 w-3 mr-1" />
                  <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="h-3 w-3 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-cyan-600 font-medium text-sm hover:text-cyan-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">Stay Updated</h2>
          <p className="text-slate-600 mb-8 mx-auto">
            Get the latest travel tips, eSIM guides, and destination insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

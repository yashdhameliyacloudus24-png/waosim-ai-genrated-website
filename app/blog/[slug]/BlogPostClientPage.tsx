"use client";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// This would typically come from a CMS or database
const blogPosts = {
  "top-10-esim-destinations-2024": {
    title: "Top 10 Travel Destinations with Best eSIM Coverage in 2024",
    excerpt:
      "Discover the world's most connected destinations where your eSIM will work flawlessly. From bustling cities to remote islands, these locations offer excellent network coverage.",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Travel Tips",
    image: "/travel-destinations-world-map.jpg",
    content: `
      <p>In today's connected world, staying online while traveling is no longer a luxury—it's a necessity. Whether you're a digital nomad, business traveler, or vacation enthusiast, having reliable internet access can make or break your travel experience.</p>

      <p>eSIM technology has revolutionized how we stay connected abroad, eliminating the need for physical SIM cards and providing instant connectivity. However, not all destinations are created equal when it comes to eSIM coverage and network quality.</p>

      <h2>1. Singapore</h2>
      <p>Singapore leads the pack with exceptional 5G coverage and multiple carrier options. The city-state's advanced telecommunications infrastructure ensures blazing-fast speeds throughout the island.</p>

      <h2>2. South Korea</h2>
      <p>Home to some of the world's fastest internet speeds, South Korea offers excellent eSIM coverage with widespread 5G availability in major cities like Seoul and Busan.</p>

      <h2>3. Japan</h2>
      <p>Japan's extensive network coverage reaches even remote areas, making it perfect for travelers exploring both urban centers and rural regions. Major carriers offer comprehensive eSIM support.</p>

      <h2>4. United Kingdom</h2>
      <p>The UK provides reliable coverage across England, Scotland, Wales, and Northern Ireland. London, in particular, offers excellent connectivity for business travelers.</p>

      <h2>5. Germany</h2>
      <p>As Europe's economic powerhouse, Germany boasts robust network infrastructure with good coverage in both cities and countryside areas.</p>

      <h2>6. United States</h2>
      <p>With multiple major carriers supporting eSIM, the US offers extensive coverage across all 50 states, though rural areas may have varying signal strength.</p>

      <h2>7. Australia</h2>
      <p>Australia's major cities provide excellent eSIM coverage, with improving connectivity in regional areas. Perfect for both business and leisure travelers.</p>

      <h2>8. Netherlands</h2>
      <p>The Netherlands offers comprehensive coverage in this compact country, with excellent speeds in Amsterdam, Rotterdam, and other major cities.</p>

      <h2>9. Switzerland</h2>
      <p>Despite its mountainous terrain, Switzerland provides surprisingly good coverage even in alpine regions, making it ideal for adventure travelers.</p>

      <h2>10. United Arab Emirates</h2>
      <p>The UAE, particularly Dubai and Abu Dhabi, offers world-class connectivity with extensive 5G networks and multiple eSIM-compatible carriers.</p>

      <h2>Tips for Choosing the Right eSIM Plan</h2>
      <p>When selecting an eSIM plan for these destinations, consider factors like data allowance, validity period, and network coverage. Always check compatibility with your device before traveling.</p>

      <p>Remember that network performance can vary within countries, so it's wise to research specific regions you'll be visiting. With the right eSIM plan, you can enjoy seamless connectivity in any of these top destinations.</p>
    `,
  },
  // Add more blog posts here...
};

type Props = {
  params: { slug: string };
};

export default function BlogPostClientPage({ params }: Props) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  const shareUrl = `https://waosim.com/blog/${params.slug}`;

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-cyan-600 hover:text-cyan-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-8">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-xl mb-8">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>

            {/* Share Buttons */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm font-medium text-slate-700">Share:</span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`,
                      "_blank"
                    )
                  }
                >
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
                      "_blank"
                    )
                  }
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    window.open(
                      `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
                      "_blank"
                    )
                  }
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    navigator.share?.({ title: post.title, url: shareUrl })
                  }
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none text-slate-600 mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="bg-slate-50 rounded-xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {post.author}
                </h3>
                <p className="text-slate-600">
                  Travel technology expert and digital nomad with over 5 years
                  of experience helping travelers stay connected worldwide.
                  Passionate about making international connectivity simple and
                  affordable for everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    Technology
                  </Badge>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    eSIM vs Physical SIM: Complete Guide for Travelers
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Understanding the differences between eSIM and traditional
                    SIM cards...
                  </p>
                  <Link
                    href="/blog/esim-vs-physical-sim-guide"
                    className="text-cyan-600 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    Regional Guides
                  </Badge>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    Ultimate Europe eSIM Travel Guide
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">
                    Planning a European adventure? Our comprehensive guide
                    covers everything...
                  </p>
                  <Link
                    href="/blog/europe-esim-travel-guide"
                    className="text-cyan-600 text-sm font-medium"
                  >
                    Read More →
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, Zap, Shield, Smartphone, Clock, DollarSign, Search, ArrowRight, Wifi } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"
import { TrustBadges } from "@/components/trust-badges"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSlider } from "@/components/testimonials-slider"
import { StickyCTA } from "@/components/sticky-cta"
import { FloatingSupport } from "@/components/floating-support"

const popularCountries = [
  { name: "United States", flag: "🇺🇸", price: "$4.50", data: "1GB" },
  { name: "United Kingdom", flag: "🇬🇧", price: "$3.99", data: "1GB" },
  { name: "Japan", flag: "🇯🇵", price: "$5.99", data: "1GB" },
  { name: "France", flag: "🇫🇷", price: "$3.50", data: "1GB" },
  { name: "Germany", flag: "🇩🇪", price: "$3.75", data: "1GB" },
  { name: "Australia", flag: "🇦🇺", price: "$6.99", data: "1GB" },
]

const features = [
  {
    icon: <Zap className="h-8 w-8 text-secondary" />,
    title: "Instant Activation",
    description: "Get connected in seconds with QR code activation. No waiting, no hassle.",
  },
  {
    icon: <Globe className="h-8 w-8 text-secondary" />,
    title: "Global Coverage",
    description: "Access data in 190+ countries and regions worldwide with one eSIM.",
  },
  {
    icon: <DollarSign className="h-8 w-8 text-secondary" />,
    title: "Affordable Plans",
    description: "Competitive pricing with no hidden fees. Pay only for what you need.",
  },
  {
    icon: <Shield className="h-8 w-8 text-secondary" />,
    title: "Secure & Reliable",
    description: "Bank-grade security with 99.9% network uptime guarantee.",
  },
  {
    icon: <Smartphone className="h-8 w-8 text-secondary" />,
    title: "Easy Setup",
    description: "Compatible with all eSIM-enabled devices. Setup in under 2 minutes.",
  },
  {
    icon: <Clock className="h-8 w-8 text-secondary" />,
    title: "24/7 Support",
    description: "Round-the-clock customer support whenever you need assistance.",
  },
]

const steps = [
  {
    step: "1",
    title: "Choose Your Destination",
    description: "Select your travel destination from our list of 190+ countries and regions.",
  },
  {
    step: "2",
    title: "Pick Your Plan",
    description: "Choose the perfect data plan that fits your travel duration and usage needs.",
  },
  {
    step: "3",
    title: "Activate & Connect",
    description: "Scan the QR code to install your eSIM and start using data immediately.",
  },
]

export function Homepage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 py-20 lg:py-32 overflow-hidden">
        <AnimatedBackground />
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="mb-6 text-sm font-medium px-4 py-2 bg-white/80 backdrop-blur-sm animate-bounce-in"
            >
              <Wifi className="h-4 w-4 mr-2" />
              Trusted by 500K+ travelers worldwide
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-balance mb-6 leading-tight animate-slide-up">
              Stay Connected
              <span className="gradient-text block">Anywhere</span>
            </h1>
            <p
              className="text-lg md:text-xl text-slate-600 mx-auto mb-8 leading-relaxed text-pretty animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Get instant eSIM activation for 190+ countries. No more expensive roaming charges or hunting for WiFi.
              Connect seamlessly wherever your journey takes you.
            </p>

            {/* Search Bar */}
            <div className="mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search countries or regions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 text-lg bg-white/80 backdrop-blur-sm border-white/20 focus:bg-white transition-all duration-300 hover-lift"
                />
              </div>
            </div>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
              >
                <Link href="/buy-esim">
                  Browse eSIM Plans
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 bg-white/80 backdrop-blur-sm border-white/30 hover:bg-white transition-all duration-300 hover-lift"
              >
                <Link href="/supported-devices">Check Device Compatibility</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Popular Destinations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Popular Destinations</h2>
            <p className="text-lg md:text-xl text-slate-600 mx-auto leading-relaxed">
              Get started with our most popular eSIM plans for top travel destinations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {popularCountries.map((country, index) => (
              <Card
                key={country.name}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-md hover-lift bg-gradient-to-br from-white to-slate-50 card-glow animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                    {country.flag}
                  </div>
                  <h3 className="font-semibold text-sm mb-2 text-balance text-slate-900">{country.name}</h3>
                  <p className="text-xs text-slate-500 mb-2">{country.data} from</p>
                  <p className="font-bold text-cyan-600 text-lg">{country.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg border-slate-200 hover:bg-slate-50 transition-all duration-300 hover-lift bg-transparent"
            >
              <Link href="/buy-esim">
                View All Countries
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">How It Works</h2>
            <p className="text-lg md:text-xl text-slate-600 mx-auto leading-relaxed">
              Get connected in 3 simple steps - it's that easy
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="text-center relative animate-slide-in-left"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg hover-lift animate-pulse-glow">
                  {step.step}
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 text-pretty leading-relaxed mx-auto">{step.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block h-6 w-6 text-slate-400 absolute top-10 -right-6 xl:-right-12 animate-float" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">Why Choose WaoSim?</h2>
            <p className="text-lg md:text-xl text-slate-600 mx-auto leading-relaxed">
              Everything you need for seamless global connectivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover-lift bg-gradient-to-br from-white to-slate-50 card-glow perspective-card animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 card-inner">
                  <div className="mb-6 p-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl w-fit animate-pulse-glow">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-pretty leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Testimonials */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">What Our Customers Say</h2>
            <p className="text-lg md:text-xl text-slate-600 mx-auto leading-relaxed">
              Join thousands of satisfied travelers worldwide
            </p>
          </div>

          <TestimonialsSlider />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-animated-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/travel-destinations-world-map.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-600/90 to-blue-600/90" />
        <AnimatedBackground />
        <div className="relative mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance animate-slide-up">
            Ready to Stay Connected Worldwide?
          </h2>
          <p
            className="text-lg md:text-xl mb-10 opacity-90 text-pretty leading-relaxed mx-auto animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            Join over 500,000 travelers who trust WaoSim for their global connectivity needs. Get instant activation and
            reliable coverage wherever you go.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-4 bg-white text-cyan-600 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <Link href="/buy-esim">
                Get Your eSIM Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 bg-transparent backdrop-blur-sm transition-all duration-300 hover-lift"
            >
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>

      <StickyCTA />
      <FloatingSupport />
    </div>
  )
}

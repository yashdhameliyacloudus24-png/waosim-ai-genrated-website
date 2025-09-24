"use client"

import { useState } from "react"
import { ArrowLeft, Globe, MapPin, Wifi, Clock, Check, Star, Shield, Headphones } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CartIcon } from "@/components/cart-icon"
import { useCart } from "@/contexts/cart-context"
import Link from "next/link"

type Plan = {
  id: string
  name: string
  price: number
  data: string
  validity: string
  speed: string
  hotspot: boolean
  features: string[]
}

type PlanData = {
  name: string
  flag: string
  type: "country" | "region"
  description: string
  coverage: string
  network: string
  countries?: string[]
  plans: Plan[]
}

type Props = {
  plan: PlanData
}

export function PlanDetailsPage({ plan }: Props) {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [showAllCountries, setShowAllCountries] = useState(false)
  const { dispatch } = useCart()

  const handleAddToCart = (planItem: Plan) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: planItem.id,
        name: planItem.name,
        price: planItem.price,
        data: planItem.data,
        validity: planItem.validity,
        country: plan.name,
        flag: plan.flag,
      },
    })
    setSelectedPlan(planItem.id)
  }

  const displayCountries = plan.countries ? (showAllCountries ? plan.countries : plan.countries.slice(0, 12)) : []

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Globe className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">WaoSim</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/buy-esim" className="text-primary font-medium">
                Buy eSIM
              </Link>
              <Link href="/my-esims" className="text-muted-foreground hover:text-foreground">
                My eSIMs
              </Link>
              <Button variant="outline" size="sm">
                Support
              </Button>
              <CartIcon />
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span>→</span>
          <Link href="/buy-esim" className="hover:text-foreground">
            Buy eSIM
          </Link>
          <span>→</span>
          <span className="text-foreground">{plan.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/buy-esim">
            <Button variant="ghost" className="pl-0">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all plans
            </Button>
          </Link>
        </div>

        {/* Plan Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <span className="text-6xl">{plan.flag}</span>
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">{plan.name}</h1>
              <div className="flex items-center space-x-4">
                <Badge variant={plan.type === "region" ? "secondary" : "outline"} className="text-sm">
                  {plan.type === "region" ? (
                    <>
                      <Globe className="h-4 w-4 mr-1" /> Region Plan
                    </>
                  ) : (
                    <>
                      <MapPin className="h-4 w-4 mr-1" /> Country Plan
                    </>
                  )}
                </Badge>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">4.8</span>
                  <span className="text-sm text-muted-foreground">(2,341 reviews)</span>
                </div>
              </div>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">{plan.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Plans Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground mb-6">Available Plans</h2>
            <div className="space-y-4">
              {plan.plans.map((planItem, index) => (
                <Card
                  key={planItem.id}
                  className={`relative ${selectedPlan === planItem.id ? "ring-2 ring-primary" : ""}`}
                >
                  {planItem.features.includes("Most popular") && (
                    <div className="absolute -top-3 left-4">
                      <Badge className="bg-secondary text-secondary-foreground">Most Popular</Badge>
                    </div>
                  )}
                  {planItem.features.includes("Best value") && (
                    <div className="absolute -top-3 left-4">
                      <Badge className="bg-accent text-accent-foreground">Best Value</Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{planItem.name}</CardTitle>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-primary">${planItem.price}</div>
                        <div className="text-sm text-muted-foreground">One-time payment</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Wifi className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{planItem.data}</div>
                          <div className="text-sm text-muted-foreground">High-speed data</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{planItem.validity}</div>
                          <div className="text-sm text-muted-foreground">Validity period</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {planItem.features
                        .filter((f) => !f.includes("popular") && !f.includes("value"))
                        .map((feature) => (
                          <Badge key={feature} variant="outline" className="text-xs">
                            <Check className="h-3 w-3 mr-1" />
                            {feature}
                          </Badge>
                        ))}
                    </div>

                    <Button className="w-full" size="lg" onClick={() => handleAddToCart(planItem)}>
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Coverage Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Coverage Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="font-medium mb-1">Network Coverage</div>
                  <div className="text-sm text-muted-foreground">{plan.coverage}</div>
                </div>
                <div>
                  <div className="font-medium mb-1">Partner Networks</div>
                  <div className="text-sm text-muted-foreground">{plan.network}</div>
                </div>
                {plan.countries && (
                  <div>
                    <div className="font-medium mb-2">Included Countries ({plan.countries.length})</div>
                    <div className="grid grid-cols-2 gap-1 text-sm">
                      {displayCountries.map((country) => (
                        <div key={country} className="text-muted-foreground">
                          {country}
                        </div>
                      ))}
                    </div>
                    {plan.countries.length > 12 && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="mt-2 p-0 h-auto"
                        onClick={() => setShowAllCountries(!showAllCountries)}
                      >
                        {showAllCountries ? "Show less" : `Show all ${plan.countries.length} countries`}
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Why Choose WaoSim?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Instant activation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">No physical SIM needed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Works on iOS & Android</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Money-back guarantee</span>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <Headphones className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="font-medium mb-1">Need Help?</div>
                  <div className="text-sm text-muted-foreground mb-4">Our support team is available 24/7</div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="cursor-pointer w-full">
            <AccordionItem value="compatibility">
              <AccordionTrigger>Is my device compatible?</AccordionTrigger>
              <AccordionContent>
                Our eSIMs work with most modern smartphones and tablets that support eSIM technology. This includes
                iPhone XS and newer, Google Pixel 3 and newer, Samsung Galaxy S20 and newer, and many other devices.
                Check your device settings for eSIM support.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="activation">
              <AccordionTrigger>How do I activate my eSIM?</AccordionTrigger>
              <AccordionContent>
                After purchase, you'll receive a QR code via email. Simply scan the QR code with your device's camera in
                the eSIM settings, or manually enter the activation details. The process takes just a few minutes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="hotspot">
              <AccordionTrigger>Can I use hotspot/tethering?</AccordionTrigger>
              <AccordionContent>
                Yes! All our plans support hotspot and tethering functionality, so you can share your connection with
                other devices like laptops, tablets, or other phones.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="validity">
              <AccordionTrigger>When does my plan validity start?</AccordionTrigger>
              <AccordionContent>
                Your plan validity starts from the moment you activate the eSIM on your device, not from the purchase
                date. You can purchase in advance and activate when you're ready to use it.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 WaoSim. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

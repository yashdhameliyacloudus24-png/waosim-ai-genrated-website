"use client"

import type React from "react"

import { useState } from "react"
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  Headphones,
  FileText,
  Smartphone,
  CreditCard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

const supportCategories = [
  "General Inquiry",
  "eSIM Activation Help",
  "Technical Issues",
  "Billing & Payments",
  "Device Compatibility",
  "Refund Request",
  "Partnership Inquiry",
  "Other",
]

const contactMethods = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Support",
    description: "Get detailed help via email",
    contact: "support@waosim.com",
    responseTime: "Within 2 hours",
    availability: "24/7",
    action: "Send Email",
    href: "mailto:support@waosim.com",
  },
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone Support",
    description: "Speak directly with our team",
    contact: "+1 (555) 123-4567",
    responseTime: "Immediate",
    availability: "24/7",
    action: "Call Now",
    href: "tel:+15551234567",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Live Chat",
    description: "Real-time chat support",
    contact: "Available on website",
    responseTime: "< 1 minute",
    availability: "24/7",
    action: "Start Chat",
    href: "#",
  },
]

const supportTopics = [
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "eSIM Activation",
    description: "Help with QR codes, manual setup, and device configuration",
    articles: 12,
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Billing & Plans",
    description: "Questions about pricing, invoices, and plan changes",
    articles: 8,
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Payments & Refunds",
    description: "Payment methods, refund requests, and billing issues",
    articles: 6,
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Technical Support",
    description: "Troubleshooting connectivity and performance issues",
    articles: 15,
  },
]

const faqData = [
  {
    question: "How long does eSIM activation take?",
    answer:
      "eSIM activation is typically instant. After purchase, you'll receive a QR code via email within minutes. Scanning the QR code activates your eSIM immediately.",
  },
  {
    question: "What if my eSIM isn't working?",
    answer:
      "First, ensure your device is eSIM compatible and connected to WiFi. Try restarting your device and checking your cellular settings. If issues persist, contact our support team for assistance.",
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer:
      "Yes, we offer a 7-day money-back guarantee for unused eSIMs. Contact our support team with your order details to process a refund.",
  },
  {
    question: "Do you offer support in multiple languages?",
    answer:
      "Currently, our support is available in English. However, our team can assist with basic inquiries in Spanish, French, and German.",
  },
  {
    question: "How can I check my data usage?",
    answer:
      "You can monitor your data usage through your device's cellular settings or by logging into your account on our website. We also send usage alerts at 50%, 80%, and 90% of your data limit.",
  },
]

export function ContactSupportPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    message: "",
    orderNumber: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const isFormValid = () => {
    return formData.name && formData.email && formData.category && formData.subject && formData.message
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4">Message Sent Successfully!</h1>
          <p className="text-muted-foreground mb-6">
            Thank you for contacting us. We've received your message and will respond within 2 hours.
          </p>
          <div className="space-y-3">
            <Button className="w-full" onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/">Return to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              We're Here to
              <span className="text-primary block">Help You</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              Get 24/7 support for all your eSIM needs. Our expert team is ready to assist with activation,
              troubleshooting, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary" />
                <span>24/7 Support Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Average Response: 2 Hours</span>
              </div>
              <div className="flex items-center space-x-2">
                <Headphones className="h-4 w-4 text-primary" />
                <span>Expert Technical Team</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose How to Reach Us</h2>
            <p className="text-xl text-muted-foreground">Multiple ways to get the help you need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                      {method.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contact:</span>
                      <span className="font-medium">{method.contact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response:</span>
                      <span className="font-medium">{method.responseTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Available:</span>
                      <Badge variant="outline">{method.availability}</Badge>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <a href={method.href}>{method.action}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="orderNumber">Order Number (if applicable)</Label>
                      <Input
                        id="orderNumber"
                        value={formData.orderNumber}
                        onChange={(e) => handleInputChange("orderNumber", e.target.value)}
                        placeholder="OLY-ABC123"
                      />
                    </div>
                  </div>

                  {/* Support Category */}
                  <div>
                    <Label htmlFor="category">Support Category *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {supportCategories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Subject */}
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      placeholder="Brief description of your issue"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Please provide as much detail as possible about your issue or question..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={!isFormValid() || isSubmitting}>
                    {isSubmitting ? (
                      "Sending Message..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Support Topics */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Support Topics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                      {topic.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm">{topic.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{topic.description}</p>
                      <p className="text-xs text-primary mt-1">{topic.articles} articles</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">support@waosim.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Support Hours</p>
                    <p className="text-sm text-muted-foreground">24/7 - Always Available</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Headquarters</p>
                    <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/my-esims">
                    <Smartphone className="h-4 w-4 mr-2" />
                    Check My eSIMs
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/supported-devices">
                    <FileText className="h-4 w-4 mr-2" />
                    Device Compatibility
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/buy-esim">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Buy New eSIM
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Quick answers to common questions</p>
          </div>

          <Accordion type="single" collapsible className="max-w-xxxl mx-auto">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  )
}

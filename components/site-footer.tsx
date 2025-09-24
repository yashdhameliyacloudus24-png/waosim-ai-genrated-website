"use client"

import Link from "next/link"
import { Globe, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  product: [
    { name: "Buy eSIM", href: "/buy-esim" },
    { name: "My eSIMs", href: "/my-esims" },
    { name: "Supported Devices", href: "/supported-devices" },
  ],
  support: [
    { name: "Contact Support", href: "/contact" },
    { name: "Help Center", href: "/contact" },
    { name: "Installation Guide", href: "/guide" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refunds" },
  ],
}

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "LinkedIn", href: "#", icon: Linkedin },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Globe className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">WaoSim</h3>
                <p className="text-sm text-muted-foreground">Global eSIM Provider</p>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 ">
              Stay connected anywhere in the world with our reliable eSIM solutions. Trusted by over 500,000 travelers
              worldwide.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-1 h-9" />
                <Button size="sm">Subscribe</Button>
              </div>
              <p className="text-xs text-muted-foreground">Get travel tips and exclusive offers</p>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-foreground">Contact</h4>
              <div className="space-y-1">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Mail className="h-3 w-3" />
                  <span>support@waosim.com</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <Phone className="h-3 w-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 text-sm text-muted-foreground">
            <p>&copy; 2024 WaoSim. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span>Available in 190+ countries</span>
              <span>•</span>
              <span>24/7 Support</span>
              <span>•</span>
              <span>Instant Activation</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex items-center justify-center w-8 h-8 rounded-full bg-muted hover:bg-accent transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CartProvider } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Buy eSIM Plans for Any Country or Region – WaoSim",
  description:
    "Browse and purchase affordable eSIM plans for global travel. Choose from country or region-specific plans with instant activation.",
  generator: "WaoSim",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable}`}>
        <CartProvider>
          <SiteHeader />
          <Suspense fallback={null}>{children}</Suspense>
          <SiteFooter />
          <CartSidebar />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  )
}

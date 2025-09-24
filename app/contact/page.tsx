import type { Metadata } from "next"
import { ContactSupportPage } from "@/components/contact-support-page"

export const metadata: Metadata = {
  title: "Contact Support - Get Help with Your eSIM | WaoSim",
  description:
    "Need help with your eSIM? Contact our 24/7 support team. Get assistance with activation, troubleshooting, billing, and more. Multiple ways to reach us.",
  keywords: "eSIM support, customer service, help center, contact us, technical support, activation help",
}

export default function ContactPage() {
  return <ContactSupportPage />
}

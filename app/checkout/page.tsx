import type { Metadata } from "next"
import { CheckoutPage } from "@/components/checkout-page"

export const metadata: Metadata = {
  title: "Checkout – WaoSim",
  description: "Complete your eSIM purchase with secure payment options.",
}

export default function Checkout() {
  return <CheckoutPage />
}

import type { Metadata } from "next"
import { SuccessPage } from "@/components/success-page"

export const metadata: Metadata = {
  title: "Order Confirmed – WaoSim",
  description: "Your eSIM order has been confirmed. Get your installation instructions and start using your eSIM.",
}

export default function Success() {
  return <SuccessPage />
}

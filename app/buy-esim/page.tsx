import type { Metadata } from "next"
import { BuyESimPage } from "@/components/buy-esim-page"

export const metadata: Metadata = {
  title: "Buy eSIM Plans for Any Country or Region – WaoSim",
  description:
    "Browse and purchase affordable eSIM plans for global travel. Choose from country or region-specific plans with instant activation.",
}

export default function BuyESim() {
  return <BuyESimPage />
}

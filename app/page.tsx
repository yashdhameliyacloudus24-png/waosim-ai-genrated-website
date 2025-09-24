import type { Metadata } from "next"
import { Homepage } from "@/components/homepage"

export const metadata: Metadata = {
  title: "WaoSim - Global eSIM Provider | Stay Connected Anywhere",
  description:
    "Get instant eSIM activation for over 200 countries. Affordable data plans, global coverage, and seamless connectivity for travelers worldwide.",
  keywords: "eSIM, global connectivity, travel data, international roaming, mobile data plans",
  openGraph: {
    title: "WaoSim - Global eSIM Provider",
    description: "Stay connected anywhere with our global eSIM solutions",
    type: "website",
  },
}

export default function HomePage() {
  return <Homepage />
}

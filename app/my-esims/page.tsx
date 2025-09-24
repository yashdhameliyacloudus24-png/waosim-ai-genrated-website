import type { Metadata } from "next"
import MyESimDashboard from "@/components/my-esim-dashboard"

export const metadata: Metadata = {
  title: "My eSIMs - WaoSim Dashboard",
  description: "Manage your eSIM plans, track data usage, and view installation guides for your WaoSim eSIMs.",
  keywords: "eSIM management, data usage, mobile plans, WaoSim dashboard",
}

export default function MyESimsPage() {
  return <MyESimDashboard />
}

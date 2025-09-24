import type { Metadata } from "next"
import { SupportedDevicesPage } from "@/components/supported-devices-page"

export const metadata: Metadata = {
  title: "Supported Devices - eSIM Compatibility | WaoSim",
  description:
    "Check if your device supports eSIM technology. Browse our comprehensive list of compatible smartphones, tablets, and smartwatches from Apple, Samsung, Google, and more.",
  keywords: "eSIM compatible devices, iPhone eSIM, Android eSIM, device compatibility, supported smartphones",
}

export default function SupportedDevices() {
  return <SupportedDevicesPage />
}

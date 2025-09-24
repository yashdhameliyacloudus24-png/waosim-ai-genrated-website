"use client"

import { useState, useMemo } from "react"
import { Search, Smartphone, Tablet, Watch, Check, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Device = {
  id: string
  name: string
  brand: string
  category: "smartphone" | "tablet" | "smartwatch" | "laptop"
  esimSupport: boolean
  releaseYear: number
  notes?: string
  image?: string
}

const devices: Device[] = [
  // Apple Devices
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },
  {
    id: "iphone-15-plus",
    name: "iPhone 15 Plus",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },
  { id: "iphone-15", name: "iPhone 15", brand: "Apple", category: "smartphone", esimSupport: true, releaseYear: 2023 },
  {
    id: "iphone-14-pro-max",
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "iphone-14-plus",
    name: "iPhone 14 Plus",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2022,
  },
  { id: "iphone-14", name: "iPhone 14", brand: "Apple", category: "smartphone", esimSupport: true, releaseYear: 2022 },
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2021,
  },
  {
    id: "iphone-13-pro",
    name: "iPhone 13 Pro",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2021,
  },
  {
    id: "iphone-13-mini",
    name: "iPhone 13 mini",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2021,
  },
  { id: "iphone-13", name: "iPhone 13", brand: "Apple", category: "smartphone", esimSupport: true, releaseYear: 2021 },
  {
    id: "iphone-12-pro-max",
    name: "iPhone 12 Pro Max",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2020,
  },
  {
    id: "iphone-12-pro",
    name: "iPhone 12 Pro",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2020,
  },
  {
    id: "iphone-12-mini",
    name: "iPhone 12 mini",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2020,
  },
  { id: "iphone-12", name: "iPhone 12", brand: "Apple", category: "smartphone", esimSupport: true, releaseYear: 2020 },
  {
    id: "iphone-se-3",
    name: "iPhone SE (3rd generation)",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "iphone-11-pro-max",
    name: "iPhone 11 Pro Max",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2019,
  },
  {
    id: "iphone-11-pro",
    name: "iPhone 11 Pro",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2019,
  },
  { id: "iphone-11", name: "iPhone 11", brand: "Apple", category: "smartphone", esimSupport: true, releaseYear: 2019 },
  {
    id: "iphone-xs-max",
    name: "iPhone XS Max",
    brand: "Apple",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2018,
  },
  { id: "iphone-xs", name: "iPhone XS", brand: "Apple", category: "smartphone", esimSupport: true, releaseYear: 2018 },
  { id: "iphone-xr", name: "iPhone XR", brand: "Apple", category: "smartphone", esimSupport: true, releaseYear: 2018 },

  // Apple Tablets
  {
    id: "ipad-pro-12-9-6",
    name: "iPad Pro 12.9-inch (6th generation)",
    brand: "Apple",
    category: "tablet",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "ipad-pro-11-4",
    name: "iPad Pro 11-inch (4th generation)",
    brand: "Apple",
    category: "tablet",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "ipad-air-5",
    name: "iPad Air (5th generation)",
    brand: "Apple",
    category: "tablet",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "ipad-10",
    name: "iPad (10th generation)",
    brand: "Apple",
    category: "tablet",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "ipad-mini-6",
    name: "iPad mini (6th generation)",
    brand: "Apple",
    category: "tablet",
    esimSupport: true,
    releaseYear: 2021,
  },

  // Apple Watch
  {
    id: "apple-watch-ultra-2",
    name: "Apple Watch Ultra 2",
    brand: "Apple",
    category: "smartwatch",
    esimSupport: true,
    releaseYear: 2023,
  },
  {
    id: "apple-watch-series-9",
    name: "Apple Watch Series 9",
    brand: "Apple",
    category: "smartwatch",
    esimSupport: true,
    releaseYear: 2023,
  },
  {
    id: "apple-watch-ultra",
    name: "Apple Watch Ultra",
    brand: "Apple",
    category: "smartwatch",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "apple-watch-series-8",
    name: "Apple Watch Series 8",
    brand: "Apple",
    category: "smartwatch",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "apple-watch-se-2",
    name: "Apple Watch SE (2nd generation)",
    brand: "Apple",
    category: "smartwatch",
    esimSupport: true,
    releaseYear: 2022,
  },

  // Samsung Devices
  {
    id: "galaxy-s24-ultra",
    name: "Galaxy S24 Ultra",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2024,
  },
  {
    id: "galaxy-s24-plus",
    name: "Galaxy S24+",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2024,
  },
  {
    id: "galaxy-s24",
    name: "Galaxy S24",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2024,
  },
  {
    id: "galaxy-s23-ultra",
    name: "Galaxy S23 Ultra",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },
  {
    id: "galaxy-s23-plus",
    name: "Galaxy S23+",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },
  {
    id: "galaxy-s23",
    name: "Galaxy S23",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },
  {
    id: "galaxy-s22-ultra",
    name: "Galaxy S22 Ultra",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "galaxy-s22-plus",
    name: "Galaxy S22+",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "galaxy-s22",
    name: "Galaxy S22",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "galaxy-s21-ultra",
    name: "Galaxy S21 Ultra",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2021,
  },
  {
    id: "galaxy-s21-plus",
    name: "Galaxy S21+",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2021,
  },
  {
    id: "galaxy-s21",
    name: "Galaxy S21",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2021,
  },
  {
    id: "galaxy-s20-ultra",
    name: "Galaxy S20 Ultra",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2020,
  },
  {
    id: "galaxy-s20-plus",
    name: "Galaxy S20+",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2020,
  },
  {
    id: "galaxy-s20",
    name: "Galaxy S20",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2020,
  },
  {
    id: "galaxy-note-20-ultra",
    name: "Galaxy Note 20 Ultra",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2020,
  },
  {
    id: "galaxy-note-20",
    name: "Galaxy Note 20",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2020,
  },
  {
    id: "galaxy-z-fold-5",
    name: "Galaxy Z Fold5",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },
  {
    id: "galaxy-z-flip-5",
    name: "Galaxy Z Flip5",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },
  {
    id: "galaxy-z-fold-4",
    name: "Galaxy Z Fold4",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2022,
  },
  {
    id: "galaxy-z-flip-4",
    name: "Galaxy Z Flip4",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2022,
  },

  // Google Devices
  {
    id: "pixel-8-pro",
    name: "Pixel 8 Pro",
    brand: "Google",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },
  { id: "pixel-8", name: "Pixel 8", brand: "Google", category: "smartphone", esimSupport: true, releaseYear: 2023 },
  { id: "pixel-7a", name: "Pixel 7a", brand: "Google", category: "smartphone", esimSupport: true, releaseYear: 2023 },
  {
    id: "pixel-7-pro",
    name: "Pixel 7 Pro",
    brand: "Google",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2022,
  },
  { id: "pixel-7", name: "Pixel 7", brand: "Google", category: "smartphone", esimSupport: true, releaseYear: 2022 },
  { id: "pixel-6a", name: "Pixel 6a", brand: "Google", category: "smartphone", esimSupport: true, releaseYear: 2022 },
  {
    id: "pixel-6-pro",
    name: "Pixel 6 Pro",
    brand: "Google",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2021,
  },
  { id: "pixel-6", name: "Pixel 6", brand: "Google", category: "smartphone", esimSupport: true, releaseYear: 2021 },
  { id: "pixel-5a", name: "Pixel 5a", brand: "Google", category: "smartphone", esimSupport: true, releaseYear: 2021 },
  { id: "pixel-5", name: "Pixel 5", brand: "Google", category: "smartphone", esimSupport: true, releaseYear: 2020 },
  {
    id: "pixel-4a-5g",
    name: "Pixel 4a (5G)",
    brand: "Google",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2020,
  },
  { id: "pixel-4a", name: "Pixel 4a", brand: "Google", category: "smartphone", esimSupport: true, releaseYear: 2020 },
  {
    id: "pixel-4-xl",
    name: "Pixel 4 XL",
    brand: "Google",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2019,
  },
  { id: "pixel-4", name: "Pixel 4", brand: "Google", category: "smartphone", esimSupport: true, releaseYear: 2019 },
  {
    id: "pixel-3a-xl",
    name: "Pixel 3a XL",
    brand: "Google",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2019,
  },
  { id: "pixel-3a", name: "Pixel 3a", brand: "Google", category: "smartphone", esimSupport: true, releaseYear: 2019 },
  {
    id: "pixel-3-xl",
    name: "Pixel 3 XL",
    brand: "Google",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2018,
  },
  { id: "pixel-3", name: "Pixel 3", brand: "Google", category: "smartphone", esimSupport: true, releaseYear: 2018 },

  // Other Brands with Limited Support
  {
    id: "oneplus-12",
    name: "OnePlus 12",
    brand: "OnePlus",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2024,
  },
  {
    id: "oneplus-11",
    name: "OnePlus 11",
    brand: "OnePlus",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },
  {
    id: "xiaomi-13-pro",
    name: "Xiaomi 13 Pro",
    brand: "Xiaomi",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },
  {
    id: "oppo-find-x6-pro",
    name: "OPPO Find X6 Pro",
    brand: "OPPO",
    category: "smartphone",
    esimSupport: true,
    releaseYear: 2023,
  },

  // Non-eSIM Devices (for comparison)
  {
    id: "iphone-x",
    name: "iPhone X",
    brand: "Apple",
    category: "smartphone",
    esimSupport: false,
    releaseYear: 2017,
    notes: "Physical SIM only",
  },
  {
    id: "iphone-8-plus",
    name: "iPhone 8 Plus",
    brand: "Apple",
    category: "smartphone",
    esimSupport: false,
    releaseYear: 2017,
    notes: "Physical SIM only",
  },
  {
    id: "iphone-8",
    name: "iPhone 8",
    brand: "Apple",
    category: "smartphone",
    esimSupport: false,
    releaseYear: 2017,
    notes: "Physical SIM only",
  },
  {
    id: "galaxy-s10",
    name: "Galaxy S10",
    brand: "Samsung",
    category: "smartphone",
    esimSupport: false,
    releaseYear: 2019,
    notes: "Physical SIM only",
  },
  {
    id: "pixel-2",
    name: "Pixel 2",
    brand: "Google",
    category: "smartphone",
    esimSupport: false,
    releaseYear: 2017,
    notes: "Physical SIM only",
  },
]

const brands = ["All Brands", "Apple", "Samsung", "Google", "OnePlus", "Xiaomi", "OPPO"]
const categories = ["All Categories", "smartphone", "tablet", "smartwatch", "laptop"]
const supportStatus = ["All Devices", "eSIM Supported", "Not Supported"]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "smartphone":
      return <Smartphone className="h-4 w-4" />
    case "tablet":
      return <Tablet className="h-4 w-4" />
    case "smartwatch":
      return <Watch className="h-4 w-4" />
    default:
      return <Smartphone className="h-4 w-4" />
  }
}

const faqData = [
  {
    question: "How do I know if my device supports eSIM?",
    answer:
      "Check your device settings for 'Cellular Plans' or 'Mobile Plans' options. On iPhone, go to Settings > Cellular. On Android, go to Settings > Network & Internet > Mobile Network. If you see options to add a cellular plan, your device supports eSIM.",
  },
  {
    question: "Can I use both physical SIM and eSIM at the same time?",
    answer:
      "Yes, most modern devices support dual SIM functionality, allowing you to use both a physical SIM and eSIM simultaneously. This is perfect for keeping your home number while using a travel eSIM.",
  },
  {
    question: "What if my device isn't listed here?",
    answer:
      "If your device isn't listed, it likely doesn't support eSIM technology. However, new devices are constantly being released. Contact our support team if you have questions about a specific device model.",
  },
  {
    question: "Do all carriers support eSIM on compatible devices?",
    answer:
      "While your device may support eSIM, not all carriers have enabled eSIM functionality. WaoSim works with major network operators worldwide to provide eSIM services on all compatible devices.",
  },
  {
    question: "Can I transfer my eSIM to a new device?",
    answer:
      "eSIMs are typically tied to a specific device and cannot be transferred. If you get a new device, you'll need to purchase a new eSIM plan. However, you can usually deactivate the old eSIM when setting up the new one.",
  },
]

export function SupportedDevicesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("All Brands")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedSupport, setSelectedSupport] = useState("All Devices")

  const filteredDevices = useMemo(() => {
    return devices.filter((device) => {
      const matchesSearch =
        device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        device.brand.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesBrand = selectedBrand === "All Brands" || device.brand === selectedBrand
      const matchesCategory = selectedCategory === "All Categories" || device.category === selectedCategory
      const matchesSupport =
        selectedSupport === "All Devices" ||
        (selectedSupport === "eSIM Supported" && device.esimSupport) ||
        (selectedSupport === "Not Supported" && !device.esimSupport)

      return matchesSearch && matchesBrand && matchesCategory && matchesSupport
    })
  }, [searchTerm, selectedBrand, selectedCategory, selectedSupport])

  const supportedCount = filteredDevices.filter((d) => d.esimSupport).length
  const totalCount = filteredDevices.length

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance mb-6">
              eSIM Compatible
              <span className="text-primary block">Devices</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty">
              Check if your smartphone, tablet, or smartwatch supports eSIM technology. Browse our comprehensive
              compatibility database.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>500+ Compatible Devices</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>Updated Weekly</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>All Major Brands</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 ">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search devices or brands..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Brand" />
                </SelectTrigger>
                <SelectContent>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "All Categories" ? category : category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedSupport} onValueChange={setSelectedSupport}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Support" />
                </SelectTrigger>
                <SelectContent>
                  {supportStatus.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p className="text-muted-foreground">
              Showing {totalCount} devices ({supportedCount} eSIM compatible)
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>eSIM Supported</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>Not Supported</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Device Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredDevices.map((device) => (
              <Card key={device.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      {getCategoryIcon(device.category)}
                      <Badge variant="outline" className="text-xs">
                        {device.category}
                      </Badge>
                    </div>
                    <Badge variant={device.esimSupport ? "default" : "destructive"} className="text-xs">
                      {device.esimSupport ? (
                        <>
                          <Check className="h-3 w-3 mr-1" />
                          Supported
                        </>
                      ) : (
                        <>
                          <X className="h-3 w-3 mr-1" />
                          Not Supported
                        </>
                      )}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm leading-tight">{device.name}</h3>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{device.brand}</span>
                      <span>{device.releaseYear}</span>
                    </div>
                    {device.notes && <p className="text-xs text-muted-foreground italic">{device.notes}</p>}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredDevices.length === 0 && (
            <div className="text-center py-12">
              <Smartphone className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No devices found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* How to Check Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Check eSIM Support</h2>
            <p className="text-xl text-muted-foreground">Follow these steps to verify if your device supports eSIM</p>
          </div>

          <Tabs defaultValue="ios" className="mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ios">iOS (iPhone/iPad)</TabsTrigger>
              <TabsTrigger value="android">Android</TabsTrigger>
            </TabsList>

            <TabsContent value="ios" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="h-5 w-5" />
                    <span>Check eSIM Support on iOS</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    <li>
                      Open the <strong>Settings</strong> app on your iPhone or iPad
                    </li>
                    <li>
                      Tap <strong>Cellular</strong> or <strong>Mobile Data</strong>
                    </li>
                    <li>
                      Look for <strong>Add Cellular Plan</strong> or <strong>Add eSIM</strong> option
                    </li>
                    <li>If you see this option, your device supports eSIM</li>
                    <li>
                      You can also dial <strong>*#06#</strong> to see if an EID number appears
                    </li>
                  </ol>
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Note:</strong> eSIM support requires iOS 12.1 or later and is available on iPhone XS, XR,
                      and newer models.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="android" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Smartphone className="h-5 w-5" />
                    <span>Check eSIM Support on Android</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal list-inside space-y-3 text-sm">
                    <li>
                      Open the <strong>Settings</strong> app on your Android device
                    </li>
                    <li>
                      Tap <strong>Network & Internet</strong> or <strong>Connections</strong>
                    </li>
                    <li>
                      Tap <strong>Mobile Network</strong> or <strong>SIM Manager</strong>
                    </li>
                    <li>
                      Look for <strong>Add carrier</strong>, <strong>Add mobile plan</strong>, or{" "}
                      <strong>Download a SIM</strong>
                    </li>
                    <li>If available, your device supports eSIM</li>
                    <li>
                      Alternatively, dial <strong>*#06#</strong> to check for an EID number
                    </li>
                  </ol>
                  <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <p className="text-sm text-green-800 dark:text-green-200">
                      <strong>Note:</strong> eSIM support varies by manufacturer and requires Android 9 or later. Menu
                      names may differ between brands.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Common questions about eSIM device compatibility</p>
          </div>

          <Accordion type="single" collapsible className="mx-auto">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Device Compatible? Get Your eSIM Now!</h2>
          <p className="text-xl mb-8 opacity-90 mx-auto">
            If your device supports eSIM, you're ready to enjoy seamless global connectivity with WaoSim.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3" asChild>
              <a href="/buy-esim">Browse eSIM Plans</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <a href="/contact">Need Help?</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

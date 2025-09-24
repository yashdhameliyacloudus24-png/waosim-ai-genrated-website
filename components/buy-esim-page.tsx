"use client"

import { useState, useMemo } from "react"
import { Search, Filter, Globe, MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CartIcon } from "@/components/cart-icon"
import Link from "next/link"

// Dummy data for countries and regions
const esimPlans = [
  // Countries
  {
    id: "usa",
    name: "United States",
    type: "country",
    flag: "🇺🇸",
    region: "North America",
    coverage: "Nationwide coverage",
    startingPrice: 5,
    planCount: 3,
  },
  {
    id: "uk",
    name: "United Kingdom",
    type: "country",
    flag: "🇬🇧",
    region: "Europe",
    coverage: "England, Scotland, Wales, N. Ireland",
    startingPrice: 8,
    planCount: 4,
  },
  {
    id: "japan",
    name: "Japan",
    type: "country",
    flag: "🇯🇵",
    region: "Asia",
    coverage: "All major cities and regions",
    startingPrice: 12,
    planCount: 3,
  },
  {
    id: "australia",
    name: "Australia",
    type: "country",
    flag: "🇦🇺",
    region: "Oceania",
    coverage: "Major cities and regional areas",
    startingPrice: 15,
    planCount: 2,
  },
  {
    id: "canada",
    name: "Canada",
    type: "country",
    flag: "🇨🇦",
    region: "North America",
    coverage: "Coast to coast coverage",
    startingPrice: 10,
    planCount: 3,
  },
  {
    id: "germany",
    name: "Germany",
    type: "country",
    flag: "🇩🇪",
    region: "Europe",
    coverage: "Nationwide 4G/5G coverage",
    startingPrice: 6,
    planCount: 4,
  },
  // Regions
  {
    id: "europe",
    name: "Europe",
    type: "region",
    flag: "🇪🇺",
    region: "Multi-Country",
    coverage: "28 countries included",
    startingPrice: 25,
    planCount: 5,
    countries: ["France", "Germany", "Spain", "Italy", "Netherlands", "Belgium", "Austria", "Switzerland"],
  },
  {
    id: "asia-pacific",
    name: "Asia Pacific",
    type: "region",
    flag: "🌏",
    region: "Multi-Country",
    coverage: "15 countries included",
    startingPrice: 30,
    planCount: 3,
    countries: ["Japan", "South Korea", "Singapore", "Thailand", "Malaysia", "Philippines", "Vietnam"],
  },
  {
    id: "middle-east",
    name: "Middle East",
    type: "region",
    flag: "🕌",
    region: "Multi-Country",
    coverage: "12 countries included",
    startingPrice: 20,
    planCount: 4,
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
  },
]

const regions = ["All Regions", "Europe", "Asia", "North America", "Oceania", "Middle East", "Multi-Country"]

export function BuyESimPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("All Regions")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredPlans = useMemo(() => {
    return esimPlans.filter((plan) => {
      const matchesSearch = plan.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesRegion = selectedRegion === "All Regions" || plan.region === selectedRegion
      return matchesSearch && matchesRegion
    })
  }, [searchTerm, selectedRegion])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Globe className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">WaoSim</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/buy-esim" className="text-primary font-medium">
                Buy eSIM
              </Link>
              <Link href="/my-esims" className="text-muted-foreground hover:text-foreground">
                My eSIMs
              </Link>
              <Button variant="outline" size="sm">
                Support
              </Button>
              <CartIcon />
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Choose Your eSIM Plan</h1>
          <p className="text-lg text-muted-foreground mx-auto">
            Get connected instantly with our global eSIM plans. Choose from individual countries or multi-country
            regions for seamless travel connectivity.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search countries or regions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedRegion} onValueChange={setSelectedRegion}>
            <SelectTrigger className="w-full md:w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Filter by region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region} value={region}>
                  {region}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex border rounded-lg p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="px-3"
            >
              Grid
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="px-3"
            >
              List
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPlans.length} {filteredPlans.length === 1 ? "plan" : "plans"}
          </p>
        </div>

        {/* Plans Grid/List */}
        <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
          {filteredPlans.map((plan) => (
            <Card key={plan.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <Link href={`/buy-esim/${plan.id}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{plan.flag}</span>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {plan.name}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">{plan.region}</p>
                      </div>
                    </div>
                    <Badge variant={plan.type === "region" ? "secondary" : "outline"}>
                      {plan.type === "region" ? (
                        <>
                          <Globe className="h-3 w-3 mr-1" /> Region
                        </>
                      ) : (
                        <>
                          <MapPin className="h-3 w-3 mr-1" /> Country
                        </>
                      )}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Coverage</p>
                      <p className="text-sm font-medium">{plan.coverage}</p>
                      {plan.countries && (
                        <p className="text-xs text-muted-foreground mt-1">
                          Including: {plan.countries.slice(0, 3).join(", ")}
                          {plan.countries.length > 3 && ` +${plan.countries.length - 3} more`}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Starting from</p>
                        <p className="text-2xl font-bold text-primary">${plan.startingPrice}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-muted-foreground">{plan.planCount} plans</p>
                        <Button size="sm" className="mt-1">
                          View Plans
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPlans.length === 0 && (
          <div className="text-center py-12">
            <Globe className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No plans found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 WaoSim. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

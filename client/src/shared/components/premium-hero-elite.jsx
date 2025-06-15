"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Search, Sun, Moon } from "lucide-react"
import { Button } from "@/shared/components/ui/button"
import { Input } from "@/shared/components/ui/input"
import { useTheme } from "next-themes"

// Vehicle categories
const CATEGORIES = [
  {
    id: "two-wheeler",
    name: "Two Wheeler",
    icon: "🏍️",
    brands: ["Michelin", "Bridgestone", "JK Tyre"],
    popular: "90/90-18, 120/80-17",
  },
  {
    id: "four-wheeler",
    name: "Four Wheeler",
    icon: "🚗",
    brands: ["Goodyear", "Michelin", "Bridgestone"],
    popular: "205/55R16, 195/65R15",
  },
  {
    id: "light-commercial",
    name: "Light Commercial",
    icon: "🚐",
    brands: ["Yokohoma", "Goodyear", "JK Tyre"],
    popular: "185R14C, 195R15C",
  },
  {
    id: "trucks",
    name: "Trucks",
    icon: "🚚",
    brands: ["Bridgestone", "Michelin", "Kelly"],
    popular: "11R22.5, 295/80R22.5",
  },
]

// Premium brands
const BRANDS = [
  { name: "Goodyear", logo: "/placeholder.svg?height=40&width=120&text=Goodyear" },
  { name: "Michelin", logo: "/placeholder.svg?height=40&width=120&text=Michelin" },
  { name: "Bridgestone", logo: "/placeholder.svg?height=40&width=120&text=Bridgestone" },
  { name: "JK Tyre", logo: "/placeholder.svg?height=40&width=120&text=JK+Tyre" },
  { name: "Yokohoma", logo: "/placeholder.svg?height=40&width=120&text=Yokohoma" },
  { name: "Kelly", logo: "/placeholder.svg?height=40&width=120&text=Kelly" },
]

export default function PremiumHeroElite() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setTheme("light")
  }, [setTheme])

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-600"></div>
            <span className="text-xl font-bold text-gray-900">TyreMaster</span>
          </div>

          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Premium Tyres for
            <span className="block text-blue-600">Every Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Discover our extensive collection of high-quality tyres from world-renowned manufacturers
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="flex bg-white rounded-full shadow-lg border border-gray-200 p-2">
              <Search className="h-6 w-6 text-gray-400 ml-4 my-auto" />
              <Input
                placeholder="Search by tyre size or vehicle model..."
                className="border-0 bg-transparent text-lg focus-visible:ring-0"
              />
              <Button className="rounded-full bg-blue-600 hover:bg-blue-700 px-8">Search</Button>
            </div>
          </div>
        </div>

        {/* Compact Categories Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Shop by Vehicle Type</h2>
          </div>

          {/* Compact Category List */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {CATEGORIES.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group cursor-pointer p-4 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl">{category.icon}</div>
                    <div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">{category.popular}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {category.brands.slice(0, 3).map((brand) => (
                      <span key={brand} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        {brand}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-xs group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                  >
                    Browse Collection
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Showcase with Marquee */}
        <div className="bg-white rounded-3xl shadow-lg p-8 overflow-hidden">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Authorized Dealer for Premium Brands</h2>
          <div className="relative">
            <div className="flex animate-marquee space-x-16">
              {[...BRANDS, ...BRANDS].map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="flex-shrink-0">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    width={120}
                    height={40}
                    className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-12 py-6 rounded-full">
            Book Professional Fitting Service
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const galleryImages = [
  {
    id: 1,
    src: "/images/secret-santa.jpg",
    alt: "Secret Santa Gift Exchange",
    category: "Projects",
    description: "Members exchanging gifts during our annual Secret Santa event",
  },
  {
    id: 2,
    src: "/images/she-talks.jpg",
    alt: "She Talks Event",
    category: "Events",
    description: "Women empowerment session bringing together community members",
  },
  {
    id: 3,
    src: "/images/open-mic.jpg",
    alt: "Open Mic Night",
    category: "Events",
    description: "Community members enjoying our creative open mic session",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Book Donation, 2024",
    category: "Projects",
    description: "Delivery of books to community library",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Leadership Workshop",
    category: "Events",
    description: "Workshop participants developing skills",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Tree Planting",
    category: "Projects",
    description: "Members planting trees in municipal park",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=500&width=600",
    alt: "Health Fair",
    category: "Events",
    description: "Free medical consultations for the community",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=500",
    alt: "Monthly Meeting",
    category: "Meetings",
    description: "Members discussing upcoming projects",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=600&width=500",
    alt: "Food Campaign",
    category: "Projects",
    description: "Food collection for needy families",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Gala Dinner",
    category: "Events",
    description: "Annual fundraising event",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=500&width=400",
    alt: "Digital Education",
    category: "Projects",
    description: "Youth learning digital skills",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=400&width=400",
    alt: "Well Construction",
    category: "Projects",
    description: "Artesian well construction in rural community",
  },
  {
    id: 13,
    src: "/placeholder.svg?height=600&width=600",
    alt: "Leadership Team",
    category: "Meetings",
    description: "Official leadership team photo 2024",
  },
  {
    id: 14,
    src: "/placeholder.svg?height=400&width=500",
    alt: "Volunteers in Action",
    category: "Projects",
    description: "Volunteers distributing donations",
  },
  {
    id: 15,
    src: "/placeholder.svg?height=500&width=600",
    alt: "Achievement Celebration",
    category: "Events",
    description: "Celebrating important club milestones",
  },
]

const categories = [
  { en: "All" },
  { en: "Projects" },
  { en: "Events" },
  { en: "Meetings" },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages =
    selectedCategory.en === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory.en)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl opacity-90 leading-relaxed">Explore our memories and moments.</p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory.en === category.en ? "default" : "outline"}
                className={`${
                  selectedCategory.en === category.en
                    ? "bg-navy-900 text-white"
                    : "border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.en}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="break-inside-avoid animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end">
                        <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="font-semibold mb-1">{image.alt}</h3>
                          <p className="text-sm opacity-90">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                    <div className="relative">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={800}
                        height={600}
                        className="w-full h-auto object-contain max-h-[80vh]"
                      />
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-navy-900 mb-2">{image.alt}</h3>
                        <p className="text-gray-600 mb-4">{image.description}</p>
                        <div className="flex items-center gap-2">
                          <span className="px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-sm">
                            {image.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Share Your Moments</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contribute to our gallery by sharing your photos and experiences with us.
          </p>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-4 text-lg">
            Get In Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

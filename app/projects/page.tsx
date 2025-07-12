"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, Users } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Secret Santa Gift Exchange",
    description: "Spreading joy and building connections through our annual Secret Santa tradition",
    fullDescription:
      "Our annual Secret Santa event brings together club members and community partners to exchange thoughtful gifts and strengthen bonds. This heartwarming tradition fosters unity and spreads holiday cheer throughout our community.",
    image: "/images/secret-santa.jpg",
    category: "Community Service",
    date: "2024",
    impact: "50+ participants engaged",
    volunteers: 15,
  },
  {
    id: 2,
    title: "Food Bazaar",
    description: "A convention to showcase the artistry of African cuisines with 10+ traditional dishes",
    fullDescription:
      "Our Food Bazaar celebrates the rich culinary heritage of Africa, featuring over 10 traditional dishes prepared by local chefs and community members. This cultural event promotes diversity and brings people together through food.",
    image: "/images/food-bazaar-poster.jpg",
    category: "Cultural",
    date: "2024",
    impact: "200+ people served",
    volunteers: 25,
  },
  {
    id: 3,
    title: "Sanitary Pad Donation Drive",
    description: "Supporting orphanage girls with essential sanitary products for their health and dignity",
    fullDescription:
      "Our sanitary pad donation drive at Balsadan Orphanage ensures that young girls have access to essential hygiene products. This initiative promotes health, dignity, and continued education for vulnerable girls in our community.",
    image: "/images/sanitary-donation.jpg",
    category: "Health",
    date: "2024",
    impact: "100+ girls supported",
    volunteers: 20,
  },
  {
    id: 4,
    title: "Bottle Collection Drive",
    description: "Environmental initiative collecting bottles to fund sanitary pads for girl children",
    fullDescription:
      "This innovative environmental project combines sustainability with social impact. By collecting plastic bottles for recycling, we raise funds to purchase sanitary pads for underprivileged girls, addressing both environmental and social needs.",
    image: "/images/bottle-collection.jpg",
    category: "Environment",
    date: "2024",
    impact: "1000+ bottles collected",
    volunteers: 30,
  },
  {
    id: 5,
    title: "She Talks",
    description: "Empowering women through dialogue and community building",
    fullDescription:
      "She Talks is a platform for women to share experiences, discuss challenges, and build supportive networks. This initiative promotes gender equality and provides a safe space for meaningful conversations about women's issues.",
    image: "/images/she-talks.jpg",
    category: "Empowerment",
    date: "2024",
    impact: "40+ women participated",
    volunteers: 12,
  },
  {
    id: 6,
    title: "Open Mic Night",
    description: "Providing a platform for creative expression and community talent",
    fullDescription:
      "Our Open Mic Night creates opportunities for local artists, poets, musicians, and speakers to showcase their talents. This event builds community connections and celebrates the diverse creative abilities within our network.",
    image: "/images/open-mic.jpg",
    category: "Arts & Culture",
    date: "2024",
    impact: "60+ attendees",
    volunteers: 18,
  },
  {
    id: 7,
    title: "Breast Cancer Awareness",
    description: "Online session promoting breast and cervical cancer awareness",
    fullDescription:
      "Our comprehensive online awareness session educates the community about breast and cervical cancer prevention, early detection, and treatment options. Led by healthcare professionals, this initiative saves lives through education.",
    image: "/images/breast-cancer.jpg",
    category: "Health",
    date: "2024",
    impact: "150+ participants online",
    volunteers: 8,
  },
]

const categories = ["All", "Community Service", "Health", "Environment", "Cultural", "Empowerment", "Arts & Culture"]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Explore our diverse range of impactful projects, each dedicated to making a positive difference in our
              community and beyond.
            </p>
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
                variant={selectedCategory === category ? "default" : "outline"}
                className={`${
                  selectedCategory === category
                    ? "bg-navy-900 text-white"
                    : "border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-gold-500 text-navy-900">{project.category}</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                  <CardTitle className="text-navy-900">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      {project.volunteers} Volunteers
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-navy-900 hover:bg-navy-800">View Details</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-navy-900">{project.title}</DialogTitle>
                        <DialogDescription>
                          <Badge className="w-fit mb-4 bg-gold-100 text-gold-800">{project.category}</Badge>
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={300}
                          className="rounded-lg object-cover w-full"
                        />
                        <p className="text-gray-700 leading-relaxed">{project.fullDescription}</p>
                        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                          <div>
                            <h4 className="font-semibold text-navy-900 mb-2">Impact</h4>
                            <p className="text-gray-600">{project.impact}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-navy-900 mb-2">Volunteers</h4>
                            <p className="text-gray-600">{project.volunteers} volunteers</p>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us in making a difference! Explore opportunities to volunteer, donate, or partner with us on our
            impactful projects.
          </p>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-4 text-lg">
            Join Us
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

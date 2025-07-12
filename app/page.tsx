"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Users, Heart, Target, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const featuredProjects = [
  {
    id: 1,
    title: "Secret Santa Gift Exchange",
    description: "Spreading joy and building connections through our annual Secret Santa tradition",
    image: "/images/secret-santa.jpg",
    date: "2024",
  },
  {
    id: 2,
    title: "Food Bazaar",
    description: "A convention to showcase the artistry of African cuisines with 10+ traditional dishes",
    image: "/images/food-bazaar-poster.jpg",
    date: "2024",
  },
  {
    id: 3,
    title: "Sanitary Pad Donation Drive",
    description: "Supporting orphanage girls with essential sanitary products for their health and dignity",
    image: "/images/sanitary-donation.jpg",
    date: "2024",
  },
  {
    id: 4,
    title: "Bottle Collection Drive",
    description: "Environmental initiative collecting bottles to fund sanitary pads for girl children",
    image: "/images/bottle-collection.jpg",
    date: "2024",
  },
]

const stats = [
  { number: 150, label: "Members Impacted", icon: Users },
  { number: 50, label: "Projects Completed", icon: Target },
  { number: 500, label: "Lives Touched", icon: Heart },
  { number: 5, label: "Communities Served", icon: Globe },
]

export default function HomePage() {
  const [currentProject, setCurrentProject] = useState(0)
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const animateStats = () => {
      stats.forEach((stat, index) => {
        let current = 0
        const increment = stat.number / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.number) {
            current = stat.number
            clearInterval(timer)
          }
          setAnimatedStats((prev) => {
            const newStats = [...prev]
            newStats[index] = Math.floor(current)
            return newStats
          })
        }, 50)
      })
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats()
          observer.disconnect()
        }
      })
    })

    const statsElement = document.getElementById("stats-section")
    if (statsElement) {
      observer.observe(statsElement)
    }

    return () => observer.disconnect()
  }, [])

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % featuredProjects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/80 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gold-400 bg-clip-text text-transparent">
              Rotaract Club of Umang
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-gold-400">Service, Community, Leadership</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Transforming lives through community service and youth leadership development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300"
              >
                Join Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-16 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-gold-400" />
                  <div className="text-4xl font-bold text-gold-400 mb-2">{animatedStats[index].toLocaleString()}+</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-navy-900 mb-6">About Us</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 2015, the Rotaract Club is dedicated to community projects and leadership development. We are
                an organization of young people committed to making a difference in our community through volunteer
                service.
              </p>
              <Link href="/about">
                <Button className="bg-navy-900 hover:bg-navy-800 text-white">Learn More</Button>
              </Link>
            </div>
            <div className="animate-fade-in-right">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Rotaract Club Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about some of our most impactful projects that are transforming lives in our community.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {featuredProjects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <Card className="border-0 shadow-none">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardContent className="p-8 flex flex-col justify-center">
                          <Badge className="w-fit mb-4 bg-gold-100 text-gold-800">{project.date}</Badge>
                          <CardTitle className="text-2xl text-navy-900 mb-4">{project.title}</CardTitle>
                          <CardDescription className="text-lg text-gray-600">{project.description}</CardDescription>
                        </CardContent>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevProject}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextProject}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="flex justify-center mt-6 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? "bg-navy-900" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentProject(index)}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white bg-transparent"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us and be part of a community dedicated to service and social transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-4 text-lg">
                Get in Touch
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

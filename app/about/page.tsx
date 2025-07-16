"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const leadership = [
  {
    name: "Winnee Patrick",
    role: "President",
    image: "/images/winnee.jpg",
    description: "Visionary leader with passion for community development and social impact",
  },
  {
    name: "Parita Bheda",
    role: "Secretary",
    image: "/images/parita.png",
    description: "Responsible for club communication and documentation",
  },
  {
    name: "Killian Okoth",
    role: "Vice President",
    image: "/placeholder.svg?height=200&width=200",
    description: "Expert in project management and social mobilization",
  },
  {
    name: "Noela Boaz",
    role: "Treasurer",
    image: "/images/noela.png",
    description: "Financial manager with experience in non-profit organizations",
  },
  {
    name: "Safura Joseph",
    role: "Community Service Director",
    image: "/placeholder.svg?height=200&width=200",
    description: "Coordinates community outreach and service initiatives",
  },
  {
    name: "Mubarak Bashir",
    role: "Project Chair",
    image: "/placeholder.svg?height=200&width=200",
    description: "Oversees project planning and implementation",
  },
  {
    name: "Bernardo Dramos",
    role: "International Service Director",
    image: "/images/bernardo1.png",
    description: "Manages international partnerships and global initiatives",
  },
  {
    name: "Lennox Galanje",
    role: "Social Media Coordinator",
    image: "/images/lennox.png",
    description: "Handles digital presence and online community engagement",
  },
  {
    name: "Ibrahim Mohammad",
    role: "Sergeant at Arms",
    image: "/placeholder.svg?height=200&width=200",
    description: "Maintains order and protocol during club meetings",
  },
  {
    name: "Albert Nixon",
    role: "Professional Development Chair",
    image: "/images/albert.png",
    description: "Focuses on member skill development and career growth",
  },
  {
    name: "Nobert Peter",
    role: "Membership Chair",
    image: "/images/norbert.png",
    description: "Responsible for recruitment and integration of new members",
  },
  {
    name: "Victor Abraham",
    role: "Editorial Chair",
    image: "/images/victor.png",
    description: "Manages club publications and editorial content",
  },
  {
    name: "Joseph Amenyo Geyevu",
    role: "IPP and Club Advisor",
    image: "/images/joseph.png",
    description: "Provides guidance and mentorship to club leadership",
  },
]

const generalBodyMembers = [
  {
    name: "Paulo Mathayo",
    image: "/images/paulo.jpg",
    description: "Active member and contributing to initiatives",
  },
  {
    name: "Ibrahim Auwal",
    image: "/placeholder.svg?height=200&width=200",
    description: "Active member and contributing to initiatives",
  },
  {
    name: "Aditya",
    image: "/placeholder.svg?height=200&width=200",
    description: "Active member and contributing to initiatives",
  },
  {
    name: "Jerry",
    image: "/placeholder.svg?height=200&width=200",
    description: "Active member and contributing to initiatives",
  },
  {
    name: "Manas",
    image: "/placeholder.svg?height=200&width=200",
    description: "Active member and contributing to initiatives",
  },
  {
    name: "Ganesh",
    image: "/placeholder.svg?height=200&width=200",
    description: "Active member and contributing to initiatives",
  },
  
]

const values = [
  {
    title: { en: "Service" },
    description: {
      en: "We dedicate our time and energy to serve our community",
    },
  },
  {
    title: { en: "Leadership" },
    description: {
      en: "We develop leaders capable of transforming the world",
    },
  },
  {
    title: { en: "Community" },
    description: {
      pt: "Construímos pontes e fortalecemos laços comunitários",
      en: "We build bridges and strengthen community bonds",
    },
  },
  {
    title: { en: "Integrity" },
    description: {
      pt: "Agimos com honestidade e transparência em tudo que fazemos",
      en: "We act with honesty and transparency in everything we do",
    },
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Learn more about our mission, values, and the team behind our community initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-navy-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To foster leadership, promote ethical standards, and improve the community through the power of service.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2021, we have been dedicated to making a positive impact through various community projects
                and initiatives.
              </p>
            </div>
            <div className="animate-fade-in-right">
              <Image
                src="/images/about-pic.jpg"
                alt="Rotaract Mission"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-navy-900 text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-navy-900">{value.title.en}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{value.description.en}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy-900 mb-4">Our Leadership</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated individuals leading our club and driving our initiatives forward.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-navy-900">{member.name}</CardTitle>
                  <Badge className="w-fit mx-auto bg-gold-100 text-gold-800">{member.role}</Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600">{member.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* General Body Members */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-navy-900 text-center mb-12">General Body Members</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {generalBodyMembers.map((member, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-navy-900">{member.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600">{member.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Become a part of our dynamic team and contribute to meaningful community projects. We welcome passionate
            individuals who are ready to make a difference.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-navy-900 font-semibold px-8 py-4 text-lg">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}

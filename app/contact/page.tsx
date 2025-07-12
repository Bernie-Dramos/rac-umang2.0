"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: { en: "Email" },
      value: "racumang22@gmail.com",
      description: { en: "Send us a message" },
    },
    {
      icon: Phone,
      title: { en: "Phone" },
      value: "+91 12345 67890",
      description: { pt: "Ligue para nós", en: "Give us a call" },
    },
    {
      icon: MapPin,
      title: { en: "Address" },
      value: "Nashik",
      description: { en: "Maharashtra, India" },
    },
  ]

  const socialMedia = [
    { icon: Facebook, name: "Facebook", url: "#", color: "text-blue-600" },
    { icon: Instagram, name: "Instagram", url: "#", color: "text-pink-600" },
    { icon: Linkedin, name: "LinkedIn", url: "#", color: "text-blue-700" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy-900">Send Message</CardTitle>
                  <CardDescription>Send Message Description</CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-600 mb-2">Message sent!</h3>
                      <p className="text-gray-600">We'll respond soon. Thank you for your interest!</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-navy-900 hover:bg-navy-800 text-white py-3">
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-navy-900 mb-6">Get in Touch</h2>
                  <p className="text-lg text-gray-600 mb-8">Get in Touch Description</p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-navy-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-navy-900" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-navy-900 mb-1">{info.title["en"]}</h3>
                          <p className="text-lg font-medium text-gray-900 mb-1">{info.value}</p>
                          <p className="text-gray-600">{info.description["en"]}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-semibold text-navy-900 mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    {socialMedia.map((social, index) => {
                      const Icon = social.icon
                      return (
                        <a
                          key={index}
                          href={social.url}
                          className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors ${social.color}`}
                          aria-label={social.name}
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Building } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "/1.png",
    "/5.png",
    "/9.png"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const projects = [
    {
      title: "Skyline Tech Hub",
      location: "San Francisco, CA",
      year: "2024",
      category: "Commercial",
      description: "A 60-story sustainable skyscraper featuring a unique twisting facade and seismic dampening systems designed for high-intensity zones.",
      image: "/1.png",
      services: ["Structural Engineering", "Performance-Based Design", "BIM Coordination"]
    },
    {
      title: "Harbor View Residences",
      location: "Vancouver, BC",
      year: "2023",
      category: "Residential",
      description: "Luxury waterfront residential complex comprising three towers connected by a podium, utilizing advanced foundation systems for soft soil conditions.",
      image: "/3.png",
      services: ["Foundation Design", "Structural Analysis", "Construction Support"]
    },
    {
      title: "Apex Manufacturing Plant",
      location: "Detroit, MI",
      year: "2023",
      category: "Industrial",
      description: "Large-scale automated manufacturing facility requiring long-span roof trusses and vibration control for sensitive machinery.",
      image: "/5.png",
      services: ["Industrial Design", "Steel Structures", "Vibration Analysis"]
    },
    {
      title: "Civic Arts Center",
      location: "Austin, TX",
      year: "2022",
      category: "Cultural",
      description: "An architectural landmark featuring complex geometric steel connections and exposed concrete structures.",
      image: "/7.png",
      services: ["Structural Artistry", "Concrete Design", "Geometric Analysis"]
    },
    {
      title: "Metropolitan Transit Hub",
      location: "Chicago, IL",
      year: "2024",
      category: "Infrastructure",
      description: "Multi-modal transit station integrating underground rail tunnels with surface-level bus terminals and commercial spaces.",
      image: "/9.png",
      services: ["Infrastructure Engineering", "Underground Structures", "Load Testing"]
    }
  ]

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Hero Section with Sliding Carousel */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-[#1F3B64] to-[#1F3B64] text-white pt-20 overflow-hidden">
        {/* Animated Background Images - Sliding Carousel */}
        <div className="absolute inset-0 flex">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: `url('${heroImages[currentImageIndex]}')`
              }}
            />
          </AnimatePresence>
        </div>
        
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-16 sm:py-20 md:py-24 text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#C0C7CF] max-w-3xl mx-auto px-4">
            Showcasing excellence in structural engineering across diverse sectors
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredProject === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#1F3B64] to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-90' : 'opacity-60'
                  }`}></div>
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <Badge className="bg-[#1F3B64] text-white mb-1.5 sm:mb-2 text-xs sm:text-sm">{project.category}</Badge>
                    <h3 className="text-white font-bold text-base sm:text-lg md:text-xl">{project.title}</h3>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-[#7C8A97] mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <CardDescription className="text-sm sm:text-base text-[#7C8A97]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="border-[#1F3B64] text-[#1F3B64] text-xs sm:text-sm">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1F3B64] text-white">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">2000+</div>
              <div className="text-sm sm:text-base text-[#C0C7CF]">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-sm sm:text-base text-[#C0C7CF]">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-sm sm:text-base text-[#C0C7CF]">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Calculator, Microscope, Globe, Code, Languages } from "lucide-react"

export function ProgramsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const programs = [
    {
      icon: Calculator,
      title: "Mathematics",
      grades: "K-12",
      description:
        "Master arithmetic, algebra, geometry, and calculus through problem-solving and practical examples that make math fun and intuitive.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: BookOpen,
      title: "English",
      grades: "K-12",
      description:
        "Build strong grammar, writing, and reading comprehension skills while exploring the beauty of classic and modern literature.",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: Microscope,
      title: "Natural Science",
      grades: "K-12",
      description:
        "Dive into biology, chemistry, and physics through hands-on experiments and engaging discussions about the natural world.",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Globe,
      title: "Social Science",
      grades: "K-12",
      description:
        "Understand human society, history, and geography through critical thinking and interactive activities that connect past and present.",
      color: "from-orange-500/20 to-amber-500/20",
    },
    {
      icon: Languages,
      title: "Amharic & Ge'ez",
      grades: "K-12",
      description:
        "Enhance your Amharic and Ge'ez communication, writing, and reading skills while exploring Ethiopian culture and literature.",
      color: "from-rose-500/20 to-red-500/20",
    },
    {
      icon: Code,
      title: "Computer Science",
      grades: "6-12",
      description:
        "Learn coding, web development, and computational thinking to prepare for a technology-driven future.",
      color: "from-indigo-500/20 to-violet-500/20",
    },
  ]

  const handleEnrollNow = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="programs" ref={ref} className="py-24 md:py-32 scroll-smooth">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Comprehensive <span className="text-primary">Learning Programs</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Tailored tutoring programs designed to meet the unique needs of every student
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent group overflow-hidden relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <program.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-serif font-bold text-foreground">{program.title}</h3>
                    <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {program.grades}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                  <Button
                    variant="ghost"
                    onClick={handleEnrollNow}
                    className="group-hover:text-accent transition-colors"
                  >
                    Enroll Now →
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

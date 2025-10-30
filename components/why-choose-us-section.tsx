"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Users, Clock, TrendingUp, Shield, Sparkles } from "lucide-react"

export function WhyChooseUsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reasons = [
    {
      icon: GraduationCap,
      title: "Qualified Tutors",
      description: "Experienced educators with proven track records in their subjects",
    },
    {
      icon: Users,
      title: "Personalized Approach",
      description: "One-on-one attention tailored to each student's learning style",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Sessions that fit your family's busy schedule",
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "95% of our students show significant grade improvement",
    },
    {
      icon: Shield,
      title: "Safe & Trusted",
      description: "Background-checked tutors and secure learning environment",
    },
    {
      icon: Sparkles,
      title: "Interactive Learning",
      description: "Engaging methods that make learning fun and effective",
    },
  ]

  return (
    <section id="why-us" ref={ref} className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Why Choose <span className="text-primary">Excellence Tutor</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            We're committed to providing the highest quality tutoring experience for your child
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full border-2 border-transparent hover:border-accent">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <reason.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

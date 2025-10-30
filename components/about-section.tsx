"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Award, Target, Heart } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower every student with personalized education that unlocks their full potential",
    },
    {
      icon: Award,
      title: "Our Vision",
      description: "Creating a world where quality education is accessible to all students at home",
    },
    {
      icon: Heart,
      title: "Our Values",
      description: "Excellence, integrity, and dedication to student success in every tutoring session",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Transforming Education, <span className="text-primary">One Student at a Time</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Excellence Tutor provides personalized home tutoring that adapts to each student's unique learning style,
            pace, and goals
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            በቂ ልምድና እውቀት ባላቸው የአዲስ አበባ ዩኒቨርሲቲ ሰቃይ ተማሪዎች ቤት ለቤት የማስጠናት አገልግሎት በመስጠት ተማሪዎች በአጭር ጊዜ ለውጥ እንዲያመጡ እናስችላለን።
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-accent group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
        >
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <img src="/hometutor.jpg" alt="Students learning" className="w-full h-full object-cover opacity-80" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Award, Target, Heart } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower every student with personalized home tutoring that helps them reach academic excellence and lifelong confidence.",
    },
    {
      icon: Award,
      title: "Our Vision",
      description:
        "We envision a world where every student receives high-quality, one-on-one education tailored to their goals, right at home.",
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "We are driven by excellence, integrity, and dedication to every student's personal growth and academic success.",
    },
  ]

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 bg-muted/30" itemScope itemType="https://schema.org/AboutPage">
      <div className="container mx-auto px-4">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <header>
            <h1
              className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance"
              itemProp="headline"
            >
              About <span className="text-primary">Excellence Home Tutor</span>
            </h1>
          </header>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty mb-4"
            itemProp="description"
          >
            Excellence Home Tutor is a trusted personalized tutoring service that helps students of all grades excel in
            school. Our one-on-one lessons are designed to match each learner’s pace, learning style, and academic
            goals. We aim to make education engaging, effective, and truly personal.
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            በቂ ልምድና እውቀት ባላቸው የአዲስ አበባ ዩኒቨርሲቲ ሰቃይ ተማሪዎች ቤት ለቤት የማስጠናት አገልግሎት በመስጠት ተማሪዎች በአጭር ጊዜ ለውጥ
            እንዲያመጡ እናስችላለን።
          </p>
        </motion.article>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card
                className="p-8 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-accent group"
                itemScope
                itemType="https://schema.org/CreativeWork"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-4" itemProp="name">
                  {feature.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed" itemProp="text">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
        >
          <Image
            src="/hometutor.jpg"
            alt="A home tutor helping students learn in a focused environment"
            width={1600}
            height={900}
            className="w-full h-full object-cover opacity-80"
          />
        </motion.figure>
      </div>
    </section>
  )
}

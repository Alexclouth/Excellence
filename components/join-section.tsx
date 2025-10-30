"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, GraduationCap, ArrowRight } from "lucide-react"

export function JoinSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const options = [
    {
      icon: GraduationCap,
      title: "Join as a Student",
      description: "Start your journey to academic excellence with personalized tutoring",
      benefits: ["One-on-one sessions", "Flexible scheduling", "Progress tracking", "All subjects K-12"],
      cta: "Enroll Now",
      gradient: "from-primary to-primary/70",
      link: "https://forms.gle/zc91QFWNeK1pHNPj7",
    },
    {
      icon: UserPlus,
      title: "Become a Tutor",
      description: "Share your expertise and make a difference in students' lives",
      benefits: ["Competitive pay", "Flexible hours", "Professional development", "Supportive community"],
      cta: "Apply Today",
      gradient: "from-accent to-accent/70",
      link: "https://forms.gle/t76t21sbT8GKhn1GA",
    },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Join Our <span className="text-primary">Learning Community</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Whether you're seeking tutoring or want to become a tutor, we'd love to have you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <Card className="p-8 md:p-10 h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent group relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${option.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <option.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-4">{option.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{option.description}</p>
                  <ul className="space-y-3 mb-8">
                    {option.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 bg-accent rounded-full" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <a href={option.link} target="_blank">
                    <Button
                      size="lg"
                      className={`w-full bg-gradient-to-r ${option.gradient} text-primary-foreground hover:opacity-90 transition-opacity`}
                    >
                      {option.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

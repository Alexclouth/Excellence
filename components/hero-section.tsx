"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/students-studying-in-modern-bright-classroom-with-.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/60 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/30 to-primary/20 animate-gradient" />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-accent/40 to-primary/40 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border border-accent/30 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-semibold">
              ልህቀት ቤት ለቤት አስጠኚዎች
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-foreground mb-6 leading-tight text-balance"
        >
          Inspiring Academic{" "}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Excellence
          </span>
          <br />
          Through Personalized Tutoring
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed"
        >
          Expert home tutoring for students from Kindergarten to Grade 12 in Math, English, Science, and more
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="text-lg text-amber-600 px-8 py-6 rounded-full border-2 border-primary/50 hover:bg-gradient-to-r hover:from-primary/10 hover:via-accent/10 hover:to-primary/10 hover:border-accent transition-all bg-transparent hover:scale-105"
          >
            Start Learning Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <a href="tel:+251944331290">
            <Button
              size="lg"
              variant="outline"
              className="bg-gradient-to-r cursor-pointer from-primary via-accent to-primary text-primary-foreground hover:shadow-2xl hover:shadow-accent/50 text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
            >
              📞 +251944331290
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "310+", label: "Students Taught" },
            { number: "490+", label: "Expert Tutors" },
            { number: "95%", label: "Success Rate" },
            { number: "3+", label: "Years Experience" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-serif mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3"
      >
        {/* Shimmer Line */}
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-[2px] h-6 bg-gradient-to-b from-accent/0 via-accent/70 to-accent/0 rounded-full"
        />

        {/* Scroll Mouse */}
        <div className="relative w-8 h-12 rounded-full border border-accent/40 bg-gradient-to-b from-primary/10 via-transparent to-primary/5 backdrop-blur-sm shadow-[0_0_12px_-2px_rgba(0,0,0,0.2)] overflow-hidden">
          {/* Inner Glow */}
          <div className="absolute inset-0 rounded-full border border-white/10 blur-[1px]" />

          {/* Moving Dot */}
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-gradient-to-b from-accent to-primary rounded-full shadow-[0_0_10px_2px_rgba(0,0,0,0.2)]"
          />
        </div>
      </motion.div>
    </section>
  )
}

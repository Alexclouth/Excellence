"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  image?: string
}

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      name: "Mekonnen Amare",
      role: "Parent of 9th Grader",
      content:
        "Excellence Tutor transformed my daughter's approach to math. Her grades improved from B to A in just three months!",
      rating: 5,
    },
    {
      name: "Muluken Beshir",
      role: "Parent of 7th Grader",
      content:
        "The personalized attention and flexible scheduling made all the difference. Our son now loves learning! I recommended this tutor service to all of you.",
      rating: 5,
      image: "/muluken.png",
    },
    {
      name: "Eliyas Dessie",
      role: "Parent of 6th Grader",
      content:
        "Outstanding tutors who truly care about student success. The improvement in my child's confidence is remarkable.",
      rating: 5,
      image: "/eliyas.png",
    },
    {
      name: "Zenebe Molla",
      role: "Parent of 12th Grader",
      content:
        "Thanks to Excellence Tutor, my daughter got accepted into her dream university. Highly recommended!",
      rating: 5,
     
    },
    {
      name: "Anteneh Getachew",
      role: "Parent of 8th Grader",
      content:
        "I’m really impressed with the tutoring service! Both of my cousins have shown great improvement since joining. The tutors are patient, professional, and truly dedicated. I can clearly see the positive change in their confidence and academic performance. I highly recommend it!",
      rating: 5,
      
    },
    {
      name: "Smachew Mamo",
      role: "Parent of 4th Grader",
      content:
        "እስካሁን እኔ ብዙ አስጠኚዎች ልጄን አስጠንተዋል ለውጥ በልጄ ላይ አላየሁም excellence አስጠኒዎች ግን ልጄ ከጀመረ አሁን 3ወር ሁኖታል እጅግ በጣም የሚገርም ለውጥ አምጥቷል ሳልናገር የማላልፈው ነገር አለ የሚገርመው ልጄ ለኔ እና ለባለቤቴ የሚመልስልን መልስ ልክ አልነበረም በስነምግባርም ታንጿል በጣም በጣም አመሰግናለሁ በዚህ ቀጥሉበት አመሰግናለሁ።",
      rating: 5,
      image: "/smachew.png",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentIndex]
  const firstLetter = current.name.charAt(0).toUpperCase()

  return (
    <section id="testimonials" ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            What <span className="text-primary">Parents Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Real stories from families who've experienced the Excellence Tutor difference
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="p-8 md:p-12 shadow-2xl border-2 relative overflow-hidden">
              <Quote className="absolute top-8 right-8 w-24 h-24 text-accent/10" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  {current.image ? (
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-accent/20"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-accent/20 border-4 border-accent/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-accent">{firstLetter}</span>
                    </div>
                  )}
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{current.name}</h4>
                    <p className="text-muted-foreground">{current.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                  "{current.content}"
                </p>
              </div>
            </Card>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full w-12 h-12 border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent bg-transparent"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-accent w-8" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full w-12 h-12 border-2 hover:bg-accent hover:text-accent-foreground hover:border-accent bg-transparent"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

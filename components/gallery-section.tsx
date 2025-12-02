"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function GallerySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const images = [
    { src: "https://res.cloudinary.com/dewutmxvk/image/upload/v1764705743/giving_tutor_arsetk.jpg", alt: "Student studying" },
    { src: "https://res.cloudinary.com/dewutmxvk/image/upload/v1764705743/maths_teacher_lpz5sc.jpg", alt: "Math tutoring" },
    { src: "https://res.cloudinary.com/dewutmxvk/image/upload/v1764705871/science_teacher_cqaah0.avif", alt: "Science learning" },
    { src: "https://res.cloudinary.com/dewutmxvk/image/upload/v1764705743/english_teacher_qzc6zg.jpg", alt: "English session" },
    { src: "https://res.cloudinary.com/dewutmxvk/image/upload/v1764705929/University-graduates-in-Ethiopia-800x500_l5cdav.webp", alt: "Students success" },
    { src: "https://res.cloudinary.com/dewutmxvk/image/upload/v1764705961/studentsGroup_yngqtw.jpg", alt: "Our tutors" },
  ]

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 text-balance">
            Learning in <span className="text-primary">Action</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Glimpses of our tutoring sessions and student success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-primary-foreground font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

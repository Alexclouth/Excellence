"use client"

import type React from "react"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactSection() {
  const ref = useRef(null)
  const formRef = useRef<HTMLFormElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    if (formRef.current) {
      emailjs
        .sendForm(
          "service_dls7dnk", // 🟢 replace with your EmailJS service ID
          "template_ra2f25f", // 🟢 replace with your EmailJS template ID
          formRef.current,
          "_Iv1OHOurgBeawuu9" // 🟢 replace with your EmailJS public key
        )
        .then(
          () => {
            setStatus("Message sent successfully!")
            setFormData({ name: "", email: "", phone: "", message: "" })
          },
          (error) => {
            console.error(error.text)
            setStatus("Failed to send message. Please try again.")
          }
        )
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      content: "+251944331290",
      link: "tel:+251944331290",
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "alazeralphilo@gmail.com",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Addis Ababa, Ethiopia",
    },
    {
      icon: Globe,
      title: "Available Anytime",
      content: "Online communication 24/7",
      link: "",
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We’re always available online — message us anytime and we’ll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 md:p-10 shadow-xl border-2">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Send us a message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>

                {status && (
                  <p className="text-center text-sm mt-4 text-muted-foreground">{status}</p>
                )}
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 8 }}
                className="block"
              >
                <Card className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-accent group">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <info.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{info.title}</h4>
                      <p className="text-muted-foreground">{info.content}</p>
                    </div>
                  </div>
                </Card>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

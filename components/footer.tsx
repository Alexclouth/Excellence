"use client"

import { Facebook, Phone, Instagram, Send, Mail } from "lucide-react"
import React from "react"

interface FooterItem {
  name: string
  link: string
}

interface FooterSection {
  id: string
  items: (string | FooterItem)[]
}

interface SocialLink {
  icon: React.ElementType
  href: string
  label: string
}

export function Footer(): React.JSX.Element {
  const footerLinks: Record<string, FooterSection> = {
    Programs: {
      id: "#programs",
      items: [
        "Mathematics",
        "English",
        "Natural Science",
        "Social Science",
        "Computer Science",
        "Amharic",
      ],
    },
    Company: {
      id: "#about",
      items: [
        { name: "About Us", link: "#about" },
        { name: "Programs", link: "#programs" },
        { name: "Why Us", link: "#why-us" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Contact", link: "#contact" },
      ],
    },
    Support: {
      id: "#contact",
      items: [
        "Help Center",
        "Contact Us",
        "FAQs",
      ],
    },
  }

  const socialLinks: SocialLink[] = [
    { icon: Facebook, href: "https://www.facebook.com/HomeTutorInAddisAbaba", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/excellence_hometutor1", label: "Instagram" },
    { icon: Send, href: "https://t.me/excellencetutor", label: "Telegram" },
    { icon: Phone, href: "tel:+251956358473", label: "Phone" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground scroll-smooth">
      <div className="container mx-auto px-4 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo + Social */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-serif font-bold mb-4">Excellence Tutor</h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-6 max-w-md">
              Inspiring academic excellence through personalized tutoring for
              students from Kindergarten to Grade 12.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([section, { id, items }]) => (
            <div key={section}>
              <h4 className="font-bold text-lg mb-4">{section}</h4>
              <ul className="space-y-2">
                {items.map((item, index) => {
                  const key = typeof item === "string" ? `${section}-${item}-${index}` : `${section}-${item.name}-${index}`
                  const name = typeof item === "string" ? item : item.name
                  const link = typeof item === "string" ? id : item.link

                  return (
                    <li key={key}>
                      <a
                        href={link}
                        className="text-primary-foreground/80 hover:text-accent transition-colors"
                      >
                        {name}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 text-sm">
              © 2025 Excellence Tutor. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
              <Mail className="w-4 h-4" />
              <a
                href="mailto:alazeralphilo@gmail.com"
                className="hover:text-accent transition-colors"
              >
                alazeralphilo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

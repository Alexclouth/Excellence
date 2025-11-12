"use client"

import HomePage from "../page"
import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Head from "next/head"

export default function SectionPage() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const section = pathname.replace("/", "")
    if (section) {
      const el = document.getElementById(section)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      } else {
        setTimeout(() => {
          const retryEl = document.getElementById(section)
          if (retryEl) retryEl.scrollIntoView({ behavior: "smooth" })
          else router.push("/")
        }, 600)
      }
    }
  }, [pathname, router])

  // --- SEO Configuration ---
  const seo = {
    about: {
      title: "About Us | Excellence Home Tutor",
      description:
        "Learn about Excellence Home Tutor’s mission, vision, and values — personalized tutoring that helps students reach their full potential.",
    },
    programs: {
      title: "Tutoring Programs | Excellence Home Tutor",
      description:
        "Explore our personalized tutoring programs for all grades and subjects — designed to match each student’s learning style.",
    },
    "why-choose-us": {
      title: "Why Choose Us | Excellence Home Tutor",
      description:
        "See why parents trust Excellence Home Tutor — professional, caring, and result-driven home tutoring services.",
    },
    testimonials: {
      title: "Testimonials | Excellence Home Tutor",
      description:
        "Hear what students and parents say about our dedicated home tutoring services in Addis Ababa.",
    },
    join: {
      title: "Join Our Team | Excellence Home Tutor",
      description:
        "Become a tutor at Excellence Home Tutor — inspire students and make a difference through quality education.",
    },
    contact: {
      title: "Contact Us | Excellence Home Tutor",
      description:
        "Get in touch with Excellence Home Tutor for personalized tutoring services or partnership opportunities.",
    },
  } as const

  // Narrow the type so TS knows the valid keys
  type SectionKey = keyof typeof seo
  const section = pathname.replace("/", "") as SectionKey

  const meta =
    seo[section] ||
    ({
      title: "Excellence Home Tutor | Personalized Home Tutoring in Addis Ababa",
      description:
        "Professional one-to-one tutoring for students from kindergarten to grade 12. Achieve academic success with Excellence Home Tutor.",
    } as const)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Excellence Home Tutor",
    url: "https://www.excellencehometutor.com",
    logo: "https://www.excellencehometutor.com/favicon.png",
    description: meta.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "Ethiopia",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+251912345678",
      contactType: "Customer Service",
    },
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={`https://www.excellencehometutor.com/${section}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <HomePage />
    </>
  )
}

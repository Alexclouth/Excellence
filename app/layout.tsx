import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Excellence Home Tutor | Best Tutoring in Addis Ababa",
    template: "%s | Excellence Home Tutor",
  },
  description:
    "Professional one-to-one home tutoring in Addis Ababa. Excellence Home Tutor provides expert tutoring for primary, secondary, and high school students.",
  keywords: [
    "tutor in Addis Ababa",
    "home tutor in addis ababa",
    "home tutor near me",
    "tutor near me",
    "tutor in Ethiopia",
    "Ethio home tutor",
    "kelem tutor",
    "mefthe tutor",
    "አስጠኚ ይፈልጋሉ",
    "ቤት ለቤት አስጠኚ",
    "አስጠኚ በአዲስ አበባ",
    "አስጠኚ በኢትዮጵያ",
    "private tutor ethiopia",
    "tutoring in addis ababa",
    "female tutor in addis ababa",
    "male tutor in addis ababa",
    "home tutor",
    "tutoring service",
    "Addis Ababa tutor",
    "math tutor",
    "private tutor",
    "private tutor in addis ababa",
    "science tutor",
    "Excellence Home Tutor",
  ],
  metadataBase: new URL("https://www.excellencehometutor.com"),
  openGraph: {
    title: "Excellence Home Tutor — Expert Tutoring in Addis Ababa",
    description:
      "Personalized tutoring services for students from Kindergarten to Grade 12 in Addis Ababa, Ethiopia.",
    url: "https://www.excellencehometutor.com",
    siteName: "Excellence Home Tutor",
    images: [
      {
        url: "https://www.excellencehometutor.com/logo.png",
        width: 800,
        height: 600,
        alt: "Excellence Home Tutor Logo",
      },
    ],
    locale: "en_ET",
    type: "website",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://www.excellencehometutor.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Excellence Home Tutor | Tutoring in Addis Ababa",
    description:
      "Professional home tutoring services in Addis Ababa. Learn with experienced tutors in math, science, and languages.",
    images: ["https://www.excellencehometutor.com/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "Excellence Home Tutor",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ✅ Schema markup for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Excellence Home Tutor",
              "url": "https://www.excellencehometutor.com",
              "logo": "https://www.excellencehometutor.com/logo.png",
              "description":
                "Professional one-to-one tutoring in Addis Ababa for all school levels.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Addis Ababa",
                "addressCountry": "Ethiopia",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+251944331290",
                "contactType": "customer service",
              },
            }),
          }}
        />
      </head>

      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfair.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

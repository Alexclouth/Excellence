import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// =========================
//        🔥 METADATA
// =========================

export const metadata: Metadata = {
  title: {
    default: "Tutoring in Addis Ababa | Excellence Home Tutor",
    template: "%s | Excellence Home Tutor",
  },

  description:
    "Excellence Home Tutor offers home tutoring in Addis Ababa for Kindergarten to Grade 12. High-quality tutors in math, English, science, and more.",

  keywords: [
    "tutor in Addis Ababa",
    "home tutor in addis ababa",
    "private tutor near me",
    "tutor Ethiopia",
    "female tutor Addis Ababa",
    "male tutor Addis Ababa",
    "አስጠኚ",
    "ቤት ለቤት አስጠኚ",
    "Excellence Home Tutor",
  ],

  metadataBase: new URL("https://www.excellencehometutor.com"),

  openGraph: {
    title: "Tutors in Addis Ababa — Excellence Home Tutor",
    description:
      "Professional one-to-one tutoring services in Addis Ababa for primary and secondary students.",
    url: "https://www.excellencehometutor.com",
    siteName: "Excellence Home Tutor",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Excellence Tutor Logo",
      },
    ],
    locale: "en_ET",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },

  alternates: {
    canonical: "https://www.excellencehometutor.com",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tutors in Addis Ababa | Excellence Tutor",
    description:
      "Top-rated private home tutoring in Addis Ababa for K-12 students.",
    site: "@excellencehometutor",
    creator: "@excellencehometutor",
    images: ["/logo.png"],
  },

  generator: "Next.js | Excellence Tutor",
};

// ===================================================
//       🔥 ROOT LAYOUT — OPTIMIZED FOR SEO
// ===================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* =========================================
              🔥 JSON-LD — Local Business Schema
              Boosts Local SEO + Google Ranking
        ========================================== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Excellence Home Tutor",
              "image": "https://www.excellencehometutor.com/logo.png",
              "logo": "https://www.excellencehometutor.com/logo.png",
              "url": "https://www.excellencehometutor.com",
              "description":
                "Professional home tutoring in Addis Ababa for kindergarten, primary, and high school students.",
              "telephone": "+251956358473",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gurd Shola",
                "addressLocality": "Addis Ababa",
                "addressRegion": "Addis Ababa",
                "addressCountry": "ET",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+251956358473",
                "contactType": "customer service",
                "availableLanguage": ["English", "Amharic"],
              },
              "areaServed": [
                "Bole",
                "Yeka",
                "CMC",
                "Piassa",
                "Saris",
                "Addis Ababa",
              ],
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
  );
}

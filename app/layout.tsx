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

export const metadata: Metadata = {
  title: {
    default: "Tutoring in Addis Ababa | Excellence Home Tutor",
    template: "%s | Excellence Home Tutor",
  },
  description:
    "Home tutoring in Addis Ababa. Excellence Home Tutor provides expert tutoring for primary, secondary, and high school students across Ethiopia.",
  keywords: [
    "tutor in Addis Ababa",
    "home tutor in addis ababa",
    "private tutor near me",
    "home tutor near me",
    "tutor in Ethiopia",
    "Ethio home tutor",
    "Kelem tutor",
    "mefthe tutor",
    "አስጠኚ",
    "ቤት ለቤት አስጠኚ",
    "private tutor Ethiopia",
    "tutoring service Addis Ababa",
    "female tutor Addis Ababa",
    "male tutor Addis Ababa",
    "Excellence Home Tutor",
  ],
  metadataBase: new URL("https://www.excellencehometutor.com"),

  // OpenGraph for shared links
  openGraph: {
    title: "Excellence Home Tutor — Expert Tutoring in Addis Ababa",
    description:
      "Personalized tutoring services for students from Kindergarten to Grade 12 in Addis Ababa, Ethiopia.",
    url: "https://www.excellencehometutor.com",
    siteName: "Excellence Home Tutor",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Excellence Home Tutor Logo",
      },
    ],
    locale: "en_ET",
    type: "website",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  alternates: {
    canonical: "https://www.excellencehometutor.com",
  },

  twitter: {
    card: "summary_large_image",
    site: "@excellencehometutor",
    creator: "@excellencehometutor",
    title: "Excellence Home Tutor | Tutoring in Addis Ababa",
    description:
      "Professional home tutoring services in Addis Ababa for all grade levels.",
    images: ["/logo.png"],
  },

  generator: "Next.js + Excellence Home Tutor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 🔥 SEO Boost — Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Excellence Home Tutor",
              "url": "https://www.excellencehometutor.com",
              "image": "https://www.excellencehometutor.com/logo.png",
              "logo": "https://www.excellencehometutor.com/logo.png",
              "description":
                "Professional one-to-one tutoring in Addis Ababa for primary, secondary, and high school students.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Addis Ababa",
                "addressRegion": "Addis Ababa",
                "addressCountry": "ET",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+251944331290",
                "contactType": "customer service",
                "availableLanguage": ["English", "Amharic"],
              },
              "areaServed": "Addis Ababa, Ethiopia",
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

import React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"

import "./globals.css"

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Onward Physical Therapy & Pilates | Lubbock, TX",
  description:
    "Personalized one-on-one physical therapy and Clinical Pilates in Lubbock, TX. Expert care from Channing Stewart, PT, DPT. Book your session today.",
  openGraph: {
    title: "Onward Physical Therapy & Pilates | Lubbock, TX",
    description:
      "Personalized one-on-one physical therapy and Clinical Pilates in Lubbock, TX. Expert care from Channing Stewart, PT, DPT.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

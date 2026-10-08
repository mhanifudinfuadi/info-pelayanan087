import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LenisProvider } from "@/components/lenis-provider"
import ClickSpark from "@/components/click-spark"
import "./globals.css"

const _inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const _jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Info Layanan KPP | Pajak? Santai.",
  description:
    "Temukan informasi layanan KPP dengan bahasa yang simpel, mulai dari NPWP, SPT, pembayaran pajak, sampai konsultasi.",
  keywords: [
    "KPP",
    "layanan KPP",
    "layanan pajak",
    "NPWP",
    "SPT",
    "pembayaran pajak",
    "konsultasi pajak",
    "KPP Madya Dua Jakarta Barat",
    "KPP 087",
    "Coretax DJP",
  ],
  generator: "Next.js",
}

export const viewport: Viewport = {
  themeColor: "#263788",
  colorScheme: "light",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`${_inter.variable} font-sans antialiased`}>
        <ClickSpark
          sparkColor="#FFE804"
          sparkSize={12}
          sparkRadius={20}
          sparkCount={8}
          duration={400}
          easing="ease-out"
        >
          <LenisProvider>{children}</LenisProvider>
        </ClickSpark>

        <Analytics />
      </body>
    </html>
  )
}
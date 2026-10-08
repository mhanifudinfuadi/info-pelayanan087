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
<p>
  Info layanan KPP yang kamu butuhin, mulai dari{" "}
  <strong>NPWP,</strong>{" "}<strong>SPT,</strong> bayar pajak, sampai konsultasi{" "}
  jadi lebih gampang buat dicari.
</p>
  keywords: [
    "KPP",
    "layanan KPP",
    "layanan pajak",
    "NPWP",
    "SPT",
    "pembayaran pajak",
    "konsultasi pajak",
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

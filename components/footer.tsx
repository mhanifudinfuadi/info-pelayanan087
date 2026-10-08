"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Phone, MapPin, Mail } from "lucide-react"

const links = [
  { title: "Layanan", items: [["NPWP", "https://pajak.go.id/coretaxpedia/"], ["SPT", "https://pajak.go.id/coretaxpedia/"], ["Pembayaran", "https://pajak.go.id/coretaxpedia/"], ["Konsultasi", "https://pajak.go.id/coretaxpedia/"]] },
  { title: "Mulai", items: [["Cara mulai", "#cara-mulai"], ["Layanan online", "#online"], ["Beranda", "#hero"]] },
]

export function Footer() {
  return (
    <footer className="relative bg-[#070f32] text-white pt-16 pb-7 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr] gap-12 pb-12">
          <div>
            <a href="#hero" aria-label="Kembali ke beranda Info Layanan KPP" className="block w-24 h-14 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe804] rounded-md">
              <Image src="/public/immages/logoweb.png" alt="Direktorat Jenderal Pajak" fill className="object-contain object-left" />
            </a>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-7">Pajak nggak harus bikin pusing.</h2>
            <p className="text-white/55 max-w-md mt-4 leading-relaxed">Mulai dari info yang kamu butuhin, lalu lanjutkan ke kanal resmi kami.</p>
            <a href="https://www.pajak.go.id/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-7 bg-[#ffe804] text-[#070f32] px-5 py-3 rounded-xl font-bold">
              Kunjungi pajak.go.id <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {links.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-[#ffe804] text-sm tracking-wide">{section.title}</h3>
              <ul className="mt-5 space-y-3">
                {section.items.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-white/60 hover:text-white transition-colors">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-7 grid md:grid-cols-4 gap-4 text-xs text-white/45 font-mono">
          <a href="tel:1500200" className="flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4" /> Kring Pajak 1500 200</a>
          <a href="https://www.pajak.go.id/id/daftar-unit-kerja?title=dua+jakarta+barat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><MapPin className="w-4 h-4" /> KPP Madya Dua Jakarta Barat</a>
          <a href="mailto:kpp.087@pajak.go.id" className="flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4" /> kpp.087@pajak.go.id</a>
          <div className="md:text-right">© 2026 Info Layanan KPP</div>
        </div>
      </div>

      <motion.div
        className="absolute -bottom-24 right-0 text-[15rem] md:text-[24rem] font-black text-white/[.025] leading-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        DJP
      </motion.div>
    </footer>
  )
}

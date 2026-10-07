"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, BookOpen, Bell, Instagram } from "lucide-react"

const info = [
  { icon: BookOpen, label: "Edukasi", title: "Belajar pajak tanpa bahasa ribet", text: "Cari informasi dan edukasi perpajakan dari sumber resmi.", href: "https://edukasi.pajak.go.id/" },
  { icon: Bell, label: "Info terbaru", title: "Jangan ketinggalan update", text: "Pantau pengumuman, layanan, dan informasi terbaru DJP.", href: "https://www.instagram.com/pajakmadyaduajakbar/" },
  { icon: Instagram, label: "Media sosial KPP", title: "Ikuti kanal KPP 087", text: "Temukan informasi layanan dan edukasi KPP Madya Dua Jakarta Barat.", href: "https://www.instagram.com/pajakmadyaduajakbar/" },
]

export function SocialSection() {
  return (
    <section id="konsultasi" className="relative py-20 md:py-28 bg-[#eaf0ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <span className="font-mono text-[#263788] text-xs tracking-[.25em]">KANAL RESMI</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#070f32] tracking-tight mt-2">Stay updated.</h2>
          </div>
          <p className="max-w-md text-[#53607f]">Untuk informasi yang bersifat resmi, selalu lanjutkan ke kanal DJP.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {info.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i*.08 }}
              whileHover={{ y: -7 }}
              className="group rounded-3xl bg-white border border-[#dce3f3] p-7"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#263788] text-[#ffe804] flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <div className="font-mono text-xs tracking-widest text-[#263788] mt-10">{item.label}</div>
              <h3 className="text-2xl font-black text-[#070f32] mt-2">{item.title}</h3>
              <p className="text-[#53607f] leading-relaxed mt-3">{item.text}</p>
              <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#263788]">
                Buka kanal resmi <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

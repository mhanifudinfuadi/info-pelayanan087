"use client"

import { motion } from "framer-motion"
import { ArrowRight, BriefcaseBusiness, GraduationCap, Store, UserRound } from "lucide-react"

const audiences = [
  { icon: UserRound, title: "Wajib Pajak", text: "Butuh info layanan harian yang gampang dipahami.", href: "https://www.pajak.go.id/", external: true },
  { icon: BriefcaseBusiness, title: "Karyawan & Profesional", text: "Cari alur SPT, administrasi, atau layanan digital.", href: "https://pajak.go.id/coretaxpedia/", external: true },
  { icon: Store, title: "Pelaku Usaha", text: "Butuh info perpajakan untuk kegiatan usaha.", href: "https://pajak.go.id/coretaxpedia/", external: true },
  { icon: GraduationCap, title: "Generasi Muda", text: "Baru mulai kenal pajak? Mulai dari yang paling dasar.", href: "https://edukasi.pajak.go.id/", external: true },
]

export function LifestyleSection() {
  return (
    <section className="relative py-20 md:py-28 bg-[#212c5f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="text-center mb-12">
          <span className="font-mono text-[#ffe804] text-xs tracking-[.25em]">BUAT SIAPA?</span>
          <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight mt-3">Pajak itu dekat.</h2>
          <p className="max-w-2xl mx-auto mt-4 text-white/60">Apa pun tahapmu, yang penting tahu harus mulai dari mana.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((item, i) => (
            <motion.a
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i*.08 }}
              whileHover={{ y: -8 }}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="rounded-3xl bg-white/[.06] border border-white/10 p-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe804]"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#ffe804] text-[#070f32] flex items-center justify-center">
                <item.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black text-white mt-10">{item.title}</h3>
              <p className="text-white/55 leading-relaxed mt-3">{item.text}</p>
              <ArrowRight className="w-5 h-5 text-[#ffe804] mt-8" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

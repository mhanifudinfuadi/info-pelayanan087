"use client"

import { motion } from "framer-motion"
import { ArrowRight, Globe2, Building2, HelpCircle, ExternalLink } from "lucide-react"

const steps = [
  { n: "01", title: "Pilih kebutuhan", text: "Mulai dari layanan yang paling sesuai: NPWP, SPT, pembayaran, atau konsultasi.", href: "#layanan" },
  { n: "02", title: "Cek jalur online", text: "Kalau bisa selesai secara online, lanjut lewat kanal resmi DJP.", href: "https://pajak.go.id/coretaxpedia/", external: true },
  { n: "03", title: "Siapkan yang perlu", text: "Baca syarat dan langkahnya dulu supaya prosesnya lebih lancar.", href: "https://www.pajak.go.id/", external: true },
  { n: "04", title: "Ke KPP bila perlu", text: "Kalau memang harus datang, cari KPP dan layanan yang sesuai.", href: "https://www.pajak.go.id/id/daftar-unit-kerja?title=dua+jakarta+barat", external: true },
]

const onlineCards = [
  { icon: Globe2, eyebrow: "Bisa online?", title: "Coba dulu", text: "Mulai dari kanal digital DJP.", href: "https://pajak.go.id/coretaxpedia/" },
  { icon: Building2, eyebrow: "Perlu datang?", title: "Cari KPP", text: "Datang kalau proses memang membutuhkan layanan tatap muka.", href: "https://www.pajak.go.id/id/daftar-unit-kerja?title=dua+jakarta+barat" },
  { icon: HelpCircle, eyebrow: "Masih bingung?", title: "Minta bantuan", text: "Hubungi WhatsApp layanan atau Helpdesk KPP Madya Dua Jakarta Barat.", href: "https://wa.me/6282114918955" },
]

export function ActivationsSection() {
  return (
    <section id="cara-mulai" className="relative py-20 md:py-28 bg-[#070f32] text-white overflow-hidden">
      <div className="absolute -right-28 top-10 w-96 h-96 rounded-full bg-[#263788]/30 blur-3xl" />
      <div className="absolute -left-24 bottom-0 w-80 h-80 rounded-full bg-[#ffe804]/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-6">
        <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-start">
          <div>
            <span className="font-mono text-[#ffe804] text-xs tracking-[.25em]">NGGAK TAHU MULAI DARI MANA?</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[.95] mt-4">Mulai dari<br /><span className="text-[#ffe804]">sini aja.</span></h2>
            <p className="mt-6 text-white/65 max-w-md leading-relaxed">Nggak perlu langsung hafal istilah pajak. <br />Ikuti alurnya satu per satu.</p>
          </div>

          <div className="space-y-3">
            {steps.map((step, i) => (
              <motion.a
                key={step.n}
                href={step.href}  
                target={step.external ? "_blank" : undefined}
                rel={step.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 6 }}
                className="group rounded-2xl border border-white/10 bg-white/[.04] p-5 flex gap-5 items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe804]"
              >
                <span className="font-mono text-[#ffe804] text-xs pt-1">{step.n}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed mt-1">{step.text}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-white/25 group-hover:text-[#ffe804] transition-colors mt-1" />
              </motion.a>
            ))}
          </div>
        </div>

        <div id="online" className="mt-16 grid md:grid-cols-3 gap-4">
          {onlineCards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl bg-white p-6 text-[#070f32]"
              >
                <Icon className="w-6 h-6 text-[#263788]" />
                <div className="font-mono text-[10px] tracking-widest text-[#53607f] mt-5">{card.eyebrow}</div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-black mt-1">{card.title}</h3>
                  <ExternalLink className="w-4 h-4 text-[#263788] opacity-60" />
                </div>
                <p className="text-sm text-[#53607f] mt-2 leading-relaxed">{card.text}</p>
                {card.title === "Minta bantuan" ? (
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a href="https://wa.me/6282297002049" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#263788] px-4 py-3 text-xs font-bold text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe804]">
                      WhatsApp Pelayanan
                    </a>
                    <a href="https://wa.me/6282297002056" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-[#263788]/20 px-4 py-3 text-xs font-bold text-[#263788] hover:bg-[#ffe804] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe804]">
                      WhatsApp Helpdesk
                    </a>
                  </div>
                ) : (
                  <a href={card.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-[#263788] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe804]">
                    Buka kanal resmi <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

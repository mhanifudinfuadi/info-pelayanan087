"use client"

import { motion, AnimatePresence, useSpring, type Variants } from "framer-motion"
import { useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight, FileText, CreditCard, MessageCircle, UserRound } from "lucide-react"

const services = [
  {
    id: 1,
    name: "NPWP",
    tagline: "IDENTITAS PAJAK",
    description: "Mulai dari pendaftaran, perubahan data, sampai hal-hal yang perlu kamu tahu soal NPWP.",
    icon: UserRound,
    accent: "#263788",
    bg: "from-[#263788]/15 via-[#263788]/5 to-transparent",
    href: "https://pajak.go.id/coretaxpedia/", external: true,
  },
  {
    id: 2,
    name: "SPT",
    tagline: "LAPOR PAJAK",
    description: "Cari tahu apa yang perlu disiapkan dan ke mana harus lanjut sebelum lapor SPT.",
    icon: FileText,
    accent: "#c89221",
    bg: "from-[#ffc91b]/20 via-[#ffc91b]/5 to-transparent",
    href: "https://pajak.go.id/coretaxpedia/", external: true,
  },
  {
    id: 3,
    name: "Bayar Pajak",
    tagline: "PEMBAYARAN",
    description: "Pahami alurnya dulu, lalu lanjutkan pembayaran lewat kanal resmi yang tersedia.",
    icon: CreditCard,
    accent: "#212c5f",
    bg: "from-[#212c5f]/15 via-[#212c5f]/5 to-transparent",
    href: "https://pajak.go.id/coretaxpedia/", external: true,
  },
  {
    id: 4,
    name: "Konsultasi",
    tagline: "BUTUH BANTUAN?",
    description: "Kalau masih bingung, temukan jalur konsultasi dan layanan resmi DJP/KPP.",
    icon: MessageCircle,
    accent: "#263788",
    bg: "from-[#263788]/15 via-[#ffe804]/10 to-transparent",
    href: "https://pajak.go.id/coretaxpedia/", external: true,
  },
]

const variants: Variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 260 : -260, opacity: 0, scale: .92, rotateY: direction > 0 ? 10 : -10 }),
  center: { x: 0, opacity: 1, scale: 1, rotateY: 0, transition: { type: "spring", stiffness: 280, damping: 28 } },
  exit: (direction: number) => ({ x: direction > 0 ? -260 : 260, opacity: 0, scale: .92, rotateY: direction > 0 ? -10 : 10, transition: { duration: .25 } }),
}

export function FlavorCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [page, setPage] = useState(0)
  const rotateX = useSpring(0, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 150, damping: 20 })
  const current = services[index]

  const paginate = (next: number) => {
    const n = (index + next + services.length) % services.length
    setDirection(next)
    setPage((p) => p + 1)
    setIndex(n)
  }

  return (
    <section id="layanan" className="relative py-20 md:py-28 bg-[#f7f9ff] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10">
          <div>
            <span className="font-mono text-[#263788] text-xs tracking-[.25em]">LAYANAN YANG SERING DICARI</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#070f32] mt-2">Mau ngurus apa?</h2>
          </div>
          <p className="max-w-md text-[#53607f]">Pilih kebutuhanmu. Kita mulai dari yang paling simpel.</p>
        </div>

        <div
          className="relative min-h-[470px] md:min-h-[430px] rounded-[2rem] overflow-hidden border border-[#dce3f3] bg-white"
          onMouseMove={(e) => {
            const r = e.currentTarget.getBoundingClientRect()
            rotateY.set(((e.clientX-r.left)/r.width-.5)*5)
            rotateX.set(-((e.clientY-r.top)/r.height-.5)*5)
          }}
          onMouseLeave={() => { rotateX.set(0); rotateY.set(0) }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${current.bg}`} />
          <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full blur-3xl opacity-70" style={{ backgroundColor: `${current.accent}18` }} />

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative z-10 min-h-[470px] md:min-h-[430px] grid md:grid-cols-[1fr_.8fr] items-center gap-8 p-8 md:p-14"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-7" style={{ backgroundColor: `${current.accent}12`, color: current.accent }}>
                  <current.icon className="w-8 h-8" />
                </div>
                <span className="font-mono text-xs tracking-[.25em]" style={{ color: current.accent }}>{current.tagline}</span>
                <h3 className="text-5xl md:text-7xl font-black tracking-[-.05em] text-[#070f32] mt-2">{current.name}</h3>
                <p className="mt-5 max-w-xl text-lg text-[#53607f] leading-relaxed">{current.description}</p>
                <a href={current.href} target={current.external ? "_blank" : undefined} rel={current.external ? "noopener noreferrer" : undefined} className="inline-flex items-center gap-2 mt-7 font-bold text-[#263788]">
                  Lihat alurnya <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="hidden md:flex justify-center">
                <div className="relative w-64 h-64 rounded-[2.5rem] bg-[#263788] flex items-center justify-center shadow-2xl shadow-[#263788]/20 rotate-6">
                  <div className="absolute inset-4 rounded-[2rem] border border-white/15" />
                  <current.icon className="w-28 h-28 text-[#ffe804]" strokeWidth={1.25} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-7 left-8 right-8 flex items-center justify-between z-20">
            <div className="flex gap-2">
              {services.map((s, i) => (
                <button key={s.id} aria-label={`Layanan ${s.name}`} onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); setPage((p) => p+1) }} className={`h-2 rounded-full transition-all ${i === index ? "w-10 bg-[#263788]" : "w-2 bg-[#263788]/20"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => paginate(-1)} className="w-11 h-11 rounded-full border border-[#dce3f3] bg-white flex items-center justify-center"><ChevronLeft className="w-5 h-5" /></button>
              <button onClick={() => paginate(1)} className="w-11 h-11 rounded-full bg-[#263788] text-white flex items-center justify-center"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

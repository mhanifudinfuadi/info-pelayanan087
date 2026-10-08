"use client"

import type React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { UserPlus, FileText, WalletCards, Headset, ExternalLink } from "lucide-react"

const features = [
  { icon: UserPlus, title: "NPWP", subtitle: "Daftar & Kelola", description: "Mulai dari identitas perpajakan tanpa muter-muter.", accent: "#263788", href: "https://pajak.go.id/coretaxpedia/", external: true },
  { icon: FileText, title: "SPT", subtitle: "Lapor", description: "Tahu apa yang perlu disiapkan sebelum lapor.", accent: "#c89221", href: "https://pajak.go.id/coretaxpedia/", external: true },
  { icon: WalletCards, title: "Bayar", subtitle: "Pajak", description: "Pahami alur pembayaran dan kanal resminya.", accent: "#212c5f", href: "https://pajak.go.id/coretaxpedia/", external: true },
  { icon: Headset, title: "Bantuan", subtitle: "Konsultasi", description: "Cari jawaban di Coretaxpedia atau lanjut ke kanal bantuan WhatsApp.", accent: "#ffc91b", href: "https://pajak.go.id/coretaxpedia/", external: true },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(0), y = useMotionValue(0)
  const xs = useSpring(x, { stiffness: 300, damping: 30 }), ys = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(ys, [-.5,.5], ["7deg","-7deg"])
  const rotateY = useTransform(xs, [-.5,.5], ["-7deg","7deg"])

  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX-r.left)/r.width-.5); y.set((e.clientY-r.top)/r.height-.5)
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index*.08, duration: .55 }}
      onMouseMove={move}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { x.set(0); y.set(0); setHovered(false) }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative group"
    >
      <motion.div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `linear-gradient(135deg, ${feature.accent}, transparent 60%)` }} />
      <a
        href={feature.href}
        target={feature.external ? "_blank" : undefined}
        rel={feature.external ? "noopener noreferrer" : undefined}
        className="relative block h-full rounded-3xl border border-[#dce3f3] bg-white p-7 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe804]"
        aria-label={`${feature.title} — buka layanan resmi`}
      >
        <motion.div animate={{ scale: hovered ? 1.08 : 1, rotate: hovered ? 4 : 0 }} className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ backgroundColor: `${feature.accent}12`, color: feature.accent }}>
          <feature.icon className="w-7 h-7" />
        </motion.div>
        <div className="mt-14">
          <div className="font-mono text-xs tracking-widest" style={{ color: feature.accent }}>{feature.subtitle}</div>
          <h3 className="text-4xl font-black text-[#070f32] tracking-tight mt-1">{feature.title}</h3>
          <p className="mt-3 text-[#53607f] leading-relaxed">{feature.description}</p>
        </div>
        <div className="absolute right-5 bottom-5 flex items-center gap-2 font-mono text-xs text-[#263788]/40">0{index+1}<ExternalLink className="w-3.5 h-3.5" /></div>
      </a>
    </motion.div>
  )
}

export function BentoGrid() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="mb-10">
          <span className="font-mono text-[#263788] text-xs tracking-[.25em]">PICK YOUR NEED</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#070f32] mt-2">Yang kamu cari, ada di sini.</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4" style={{ perspective: 1000 }}>
          {features.map((feature, index) => <FeatureCard key={feature.title} feature={feature} index={index} />)}
        </div>
      </div>
    </section>
  )
}

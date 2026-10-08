"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ExternalLink, Search } from "lucide-react"
import { useRef } from "react"

const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

export function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 180]),
    springConfig
  )

  const textX1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -70]),
    springConfig
  )

  const textX2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 70]),
    springConfig
  )

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0.92]),
    springConfig
  )

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [1, 0]),
    springConfig
  )

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-white noise-overlay"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,232,4,.15),transparent_28%),radial-gradient(circle_at_85%_70%,rgba(38,55,136,.12),transparent_32%)]" />

      <motion.div
        style={{ y }}
        className="absolute -right-20 top-28 w-72 h-72 rounded-full bg-[#ffe804]/15 blur-3xl"
      />

      <motion.div
        style={{ y }}
        className="absolute -left-20 bottom-10 w-80 h-80 rounded-full bg-[#263788]/10 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 md:px-6 pt-28 pb-14">
        <motion.div style={{ scale, opacity }} className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#263788]/15 bg-[#eaf0ff] px-4 py-2 font-mono text-[11px] tracking-widest text-[#263788]"
          >
            <span className="w-2 h-2 rounded-full bg-[#ffe804] animate-pulse" />
            INFO LAYANAN KPP
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-7 text-[clamp(3.4rem,10vw,8rem)] font-black tracking-[-.065em] leading-[.84] text-[#070f32]"
          >
            Pajak?
            <span className="block text-[#263788]">Santai.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-7 max-w-2xl text-lg md:text-2xl text-[#53607f] leading-relaxed"
          >
            Info layanan KPP yang kamu butuhin, mulai dari
            <strong className="text-[#212c5f]">
            NPWP, SPT, bayar pajak, sampai konsultasi
            </strong>
            jadi lebih gampang buat dicari.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#layanan"
              className="inline-flex items-center justify-center gap-2 bg-[#263788] text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-[#263788]/15"
            >
              Mulai di sini
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://www.pajak.go.id/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#dce3f3] bg-white text-[#212c5f] px-6 py-3.5 rounded-xl font-bold"
            >
              Situs DJP
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="hidden lg:block absolute right-6 top-[22%] w-[min(38vw,460px)]"
        >
          <a
            href="https://www.pajak.go.id/id/daftar-unit-kerja?title=dua+jakarta+barat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Cari KPP Madya Dua Jakarta Barat"
            className="group relative block overflow-hidden rounded-[2rem] border border-[#dce3f3] bg-white shadow-2xl shadow-[#070f32]/10 rotate-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe804]"
          >
            <div className="relative aspect-[745/435]">
              <Image
                src="/djp-kpp-hero.jpg"
                alt="Ilustrasi layanan KPP dan DJP"
                fill
                priority
                sizes="(max-width: 1280px) 38vw, 460px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#070f32]/75 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="font-mono text-[10px] tracking-[.25em] text-[#ffe804]">
                  KPP MADYA DUA JAKARTA BARAT
                </div>

                <div className="mt-2 text-2xl font-black">
                  Info layanan, satu pintu.
                </div>
              </div>

              <div className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-mono tracking-widest text-[#263788] opacity-0 group-hover:opacity-100 transition-opacity">
                PROFIL KPP ↗
              </div>
            </div>
          </a>

          <a
            href="tel:1500200"
            className="absolute -left-7 -bottom-6 rounded-2xl bg-[#ffe804] px-5 py-4 shadow-xl -rotate-3 hover:scale-[1.02] transition-transform"
          >
            <div className="font-mono text-[10px] tracking-widest text-[#070f32]/60">
              BUTUH BANTUAN?
            </div>

            <div className="mt-1 font-black text-[#070f32]">
              Kring Pajak 1500 200
            </div>
          </a>
        </motion.div>

        <motion.div
          style={{ x: textX1 }}
          className="hidden md:block absolute right-6 top-[30%] text-[#263788]/[.07] font-black text-[12rem] leading-none select-none"
        >
          PAJAK
        </motion.div>

        <motion.div
          style={{ x: textX2 }}
          className="hidden md:block absolute right-14 bottom-12 text-[#ffe804]/50 font-black text-[7rem] leading-none select-none"
        >
          #PajaKita
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl"
        >
          {[
            ["01", "Cari layanan", Search, "#layanan"],
            ["02", "Pahami langkahnya", ArrowRight, "#cara-mulai"],
            ["03", "Lanjut ke kanal resmi", ExternalLink, "https://www.pajak.go.id/"],
          ].map(([n, label, Icon, href]) => {
            const I = Icon as typeof Search
            const external = String(href).startsWith("http")

            return (
              <a
                key={n as string}
                href={href as string}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="rounded-2xl border border-[#dce3f3] bg-white/80 backdrop-blur p-4 flex items-center gap-3 hover:border-[#263788]/30 hover:-translate-y-0.5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffe804]"
              >
                <span className="font-mono text-xs text-[#263788]">
                  {n as string}
                </span>

                <span className="text-sm font-semibold text-[#212c5f]">
                  {label as string}
                </span>

                <I className="ml-auto w-4 h-4 text-[#53607f]" />
              </a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const navItems = [
  { label: "Layanan", href: "#layanan" },
  { label: "Cara Mulai", href: "#cara-mulai" },
  { label: "Online", href: "#online" },
  { label: "Konsultasi", href: "#konsultasi" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setIsOpen(false)

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    window.addEventListener("resize", onResize)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("resize", onResize)
    }
  }, [isOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-sm" : "bg-white/80 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 min-w-0 shrink" aria-label="Info Layanan KPP">
          <div className="relative flex items-center justify-center shrink-0 rounded-xl bg-white ring-1 ring-[#dce3f3] px-1.5 py-1 sm:ring-0 sm:px-0 sm:py-0 sm:bg-transparent">
            <Image
              src="/images/logoweb.png"
              alt="Direktorat Jenderal Pajak"
              width={400}
              height={240}
              priority
              className="h-9 w-auto object-contain sm:h-16 md:h-[72px]"
            />
          </div>
          <span className="hidden sm:block h-7 w-px bg-[#dce3f3]" />
          <span className="text-[#212c5f] font-semibold text-[13px] sm:text-sm leading-tight truncate">
            Info Layanan
            <span className="block text-[#53607f] font-normal text-[11px] sm:text-sm truncate">KPP Madya Dua Jakbar</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[#212c5f] hover:text-[#263788] text-sm font-semibold transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <motion.a
            href="#layanan"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#263788] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-sm"
          >
            Mulai di sini →
          </motion.a>
        </nav>

        <button
          type="button"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="lg:hidden shrink-0 w-11 h-11 rounded-full border border-[#dce3f3] text-[#212c5f] flex items-center justify-center active:bg-[#eaf0ff]"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Tutup menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="lg:hidden fixed inset-0 top-16 sm:top-20 z-40 bg-[#070f32]/30 backdrop-blur-sm cursor-default"
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden relative z-50 border-t border-[#dce3f3] bg-white shadow-lg overflow-hidden"
            >
              <nav className="px-4 sm:px-5 py-3 space-y-1 max-h-[calc(100dvh-10rem)] overflow-y-auto">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center justify-between px-4 py-3.5 rounded-xl hover:bg-[#eaf0ff] text-[#212c5f] font-semibold"
                >
                  {item.label}
                  <ChevronDown className="-rotate-90 w-4 h-4" />
                </motion.a>
              ))}
              <a
                href="#layanan"
                onClick={() => setIsOpen(false)}
                className="mt-2 block text-center bg-[#263788] text-white px-5 py-3.5 rounded-xl font-bold"
              >
                Mulai di sini →
              </a>
            </nav>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

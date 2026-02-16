"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { JANE_APP_URL } from "@/lib/constants"

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/services", label: "SERVICES" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
]

export function Navigation({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const useDark = variant === "dark" && !scrolled && !isOpen
  const textColor = useDark ? "text-[#13273F]" : "text-[#F5F2EC]"
  const textMuted = useDark ? "text-[#13273F]/60" : "text-[#F5F2EC]/80"
  const lineColor = useDark ? "bg-[#13273F]/30" : "bg-[#F5F2EC]/40"
  const subtextColor = useDark ? "text-[#13273F]" : "text-[#F5F2EC]/80"

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-[#13273F] shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex flex-col items-center gap-1">
          <span className={`font-serif text-2xl font-thin tracking-[0.25em] ${textColor} lg:text-3xl`}>
            ONWARD
          </span>
          <span className={`h-px w-full ${lineColor}`} />
          <span className={`font-sans text-[8px] font-medium tracking-[0.3em] ${subtextColor} lg:text-[9px]`}>
            PHYSICAL THERAPY & PILATES
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold tracking-[0.2em] ${textMuted} transition-colors hover:${textColor}`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={JANE_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#D4CD5E] px-6 py-2.5 text-xs font-semibold tracking-[0.2em] text-[#13273F] transition-all hover:bg-[#c5be50] hover:shadow-md"
          >
            LET'S GET MOVING!
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`${textColor} md:hidden`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-[#BFCED7]/20 bg-[#13273F] md:hidden">
          <div className="flex flex-col items-center gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold tracking-[0.2em] text-[#F5F2EC]"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={JANE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#D4CD5E] px-8 py-3 text-xs font-semibold tracking-[0.2em] text-[#13273F]"
              onClick={() => setIsOpen(false)}
            >
              LET'S GET MOVING!
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

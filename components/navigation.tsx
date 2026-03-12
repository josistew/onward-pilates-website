"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { JANE_APP_URL } from "@/lib/constants"

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "#how-it-works", label: "HOW IT WORKS" },
  { href: "#services", label: "SERVICES" },
  { href: "#about", label: "ABOUT" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F2EC] shadow-md"
          : "bg-[#F5F2EC]"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <Link href="/">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Image
              src="/logo-mark.png"
              alt=""
              height={56}
              width={73}
              quality={100}
              style={{ height: '56px', width: 'auto', display: 'block' }}
            />
            <Image
              src="/logo-wordmark.png"
              alt="Onward Physical Therapy & Pilates"
              height={28}
              width={216}
              quality={100}
              style={{ height: '28px', width: 'auto', display: 'block' }}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-semibold tracking-[0.2em] text-[#13273F]/60 transition-colors duration-300 hover:text-[#13273F]"
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
            BOOK NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-[#13273F] md:hidden"
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
              BOOK NOW
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

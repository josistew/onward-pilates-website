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
        scrolled || isOpen
          ? "bg-[#13273F]/95 shadow-md backdrop-blur-sm"
          : "bg-[#F5F2EC]/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 lg:py-4">
        <Link href="/" className="flex items-center gap-3 lg:gap-4">
          <Image
            src={scrolled || isOpen ? "/images/logo-pill-white.png" : "/images/logo-pill-navy.png"}
            alt=""
            width={36}
            height={54}
            className="h-[44px] w-auto lg:h-[50px]"
          />
          <Image
            src={scrolled || isOpen ? "/images/logo-header-white.png" : "/images/logo-header-navy.png"}
            alt="Onward Physical Therapy & Pilates"
            width={180}
            height={50}
            className="h-[36px] w-auto lg:h-[44px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold tracking-[0.2em] transition-colors duration-300 ${scrolled || isOpen ? "text-[#F5F2EC]/70 hover:text-[#F5F2EC]" : "text-[#13273F]/60 hover:text-[#13273F]"}`}
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
          className={`md:hidden transition-colors duration-300 ${scrolled || isOpen ? "text-[#F5F2EC]" : "text-[#13273F]"}`}
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

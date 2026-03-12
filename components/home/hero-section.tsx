"use client"

import Image from "next/image"
import Link from "next/link"
import { JANE_APP_URL } from "@/lib/constants"
import { useEffect, useState, useRef } from "react"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setLoaded(true)
    
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        if (rect.bottom > 0) {
          setScrollY(window.scrollY * 0.15)
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#F5F2EC]"
    >
      {/* Architectural grid lines - editorial feel */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-0 h-full w-px bg-[#13273F]/[0.04]" />
        <div className="absolute left-[50%] top-0 hidden h-full w-px bg-[#13273F]/[0.04] lg:block" />
        <div className="absolute right-[8%] top-0 h-full w-px bg-[#13273F]/[0.04]" />
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1800px] flex-col px-6 pt-24 pb-16 md:px-10 md:pt-28 lg:flex-row lg:items-stretch lg:gap-0 lg:px-0 lg:pt-0 lg:pb-0">
        
        {/* Left column - Typography & Content */}
        <div className="flex flex-col justify-center lg:w-[55%] lg:py-32 lg:pl-[8%] lg:pr-16 xl:pr-24">
          
          {/* Eyebrow */}
          <div
            className={`transition-all duration-700 delay-200 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <p className="text-[10px] font-semibold tracking-[0.4em] text-[#948277]">
              LUBBOCK, TEXAS
            </p>
          </div>

          {/* Main headline - stacked editorial style */}
          <div className="mt-6 md:mt-8">
            <h1
              className={`font-serif font-normal leading-[0.88] tracking-[-0.03em] text-[#13273F] transition-all duration-1000 delay-300 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span 
                className="block"
                style={{ fontSize: 'clamp(3.8rem, 10vw, 9rem)' }}
              >
                Move
              </span>
              <span 
                className="block italic text-[#948277]"
                style={{ 
                  fontSize: 'clamp(3.8rem, 10vw, 9rem)',
                  marginTop: '-0.08em'
                }}
              >
                Onward
              </span>
            </h1>
          </div>

          {/* Subhead with accent line */}
          <div
            className={`mt-8 flex items-start gap-4 md:mt-10 transition-all duration-700 delay-500 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="mt-2.5 h-px w-10 bg-[#D4CD5E] flex-shrink-0" />
            <div>
              <p className="text-[11px] font-semibold tracking-[0.25em] text-[#D4CD5E]">
                PHYSICAL THERAPY & CLINICAL PILATES
              </p>
              <p className="mt-4 max-w-md text-[1rem] leading-[1.8] text-[#5A6B7A] md:text-[1.05rem]">
                One-on-one care that uses Clinical Pilates as a treatment tool. 
                Not a class — a personalized plan to help you heal, strengthen, 
                and move with confidence.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-wrap items-center gap-4 md:mt-12 transition-all duration-700 delay-600 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <a
              href={JANE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#13273F] px-8 py-4 text-[11px] font-semibold tracking-[0.2em] text-[#F5F2EC] transition-all duration-300 hover:shadow-[0_12px_40px_-8px_rgba(19,39,63,0.35)]"
            >
              <span className="relative z-10">BOOK EVALUATION</span>
              <div className="absolute inset-0 bg-[#1d3654] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
            <Link
              href="#how-it-works"
              className="group flex items-center gap-2 px-2 py-4 text-[11px] font-semibold tracking-[0.15em] text-[#13273F] transition-colors duration-300 hover:text-[#948277]"
            >
              <span>HOW IT WORKS</span>
              <svg 
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Credentials badge */}
          <div
            className={`mt-12 md:mt-16 transition-all duration-700 delay-700 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-4 border-l-2 border-[#E5D0CF] pl-4">
              <div>
                <p className="text-[12px] font-semibold tracking-[0.05em] text-[#13273F]">
                  Channing Stewart
                </p>
                <p className="mt-0.5 text-[10px] tracking-[0.02em] text-[#948277]">
                  PT, DPT &bull; STOTT Pilates Certified
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Photo composition */}
        <div className="relative mt-12 lg:mt-0 lg:w-[45%]">
          {/* Photo container with intentional asymmetry */}
          <div 
            className={`relative h-[500px] md:h-[600px] lg:h-full transition-all duration-1200 delay-400 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {/* Main image - bleeds to edge on desktop */}
            <div 
              className="absolute inset-0 lg:left-8 lg:right-0 lg:top-0 lg:bottom-0 overflow-hidden"
              style={{ transform: `translateY(${scrollY}px)` }}
            >
              <div className="relative h-full w-full">
                <Image
                  src="/images/channing-standing.jpg"
                  alt="Channing Stewart, Doctor of Physical Therapy, in her Lubbock studio"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Subtle tonal overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#F5F2EC]/20 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating accent elements */}
            <div 
              className={`absolute -left-4 top-1/4 z-10 transition-all duration-1000 delay-800 lg:-left-12 ${
                loaded ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              }`}
            >
              <div className="h-24 w-1 bg-[#D4CD5E]" />
            </div>

            {/* Bottom detail card with logo */}
            <div 
              className={`absolute -bottom-6 left-6 z-10 flex items-center gap-4 bg-[#13273F] p-5 md:left-0 lg:-left-16 lg:bottom-24 transition-all duration-700 delay-900 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              <Image
                src="/images/logo-pill-white.png"
                alt=""
                width={40}
                height={60}
                className="h-12 w-auto opacity-80"
              />
              <div>
                <p className="text-[9px] font-semibold tracking-[0.3em] text-[#D4CD5E]">
                  ONE-ON-ONE
                </p>
                <p className="mt-0.5 font-serif text-lg tracking-tight text-[#F5F2EC]">
                  Care
                </p>
              </div>
            </div>

            {/* Geometric accent */}
            <div 
              className={`absolute right-8 top-8 z-10 hidden lg:block transition-all duration-700 delay-1000 ${
                loaded ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
            >
              <div className="h-16 w-16 border border-[#BFCED7]/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transition-all duration-700 delay-1100 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] font-semibold tracking-[0.3em] text-[#948277]">
            SCROLL
          </span>
          <div className="h-8 w-px bg-[#948277]/40 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

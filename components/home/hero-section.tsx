"use client"

import Image from "next/image"
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
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1800px] flex-row items-stretch gap-0 px-4 pt-28 pb-16 sm:px-6 md:px-10 md:pt-32 lg:px-0 lg:pt-24 lg:pb-0">
        
        {/* Left column - Typography & Content */}
        <div className="flex w-[55%] flex-col justify-center sm:w-[50%] lg:w-[55%] lg:py-32 lg:pl-[8%] lg:pr-16 xl:pr-24">
          
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
          <div className="mt-4 md:mt-6">
            <h1
              className={`font-serif font-normal leading-[0.88] tracking-[-0.03em] text-[#13273F] transition-all duration-1000 delay-300 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              <span 
                className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              >
                Move
              </span>
              <span 
                className="block italic text-[#948277] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                style={{ 
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
            <div className="mt-2 h-px w-12 bg-[#D4CD5E] flex-shrink-0 md:mt-3 md:w-16" />
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-[#D4CD5E] md:text-base lg:text-lg">
                PHYSICAL THERAPY & CLINICAL PILATES
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
              <span className="relative z-10">LET'S GET MOVING</span>
              <div className="absolute inset-0 bg-[#1d3654] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>

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
                  PT, DPT &bull; STOTT Pilates Trained
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Photo composition */}
        <div className="relative w-[45%] sm:w-[50%] lg:w-[45%]">
          {/* Photo container with intentional asymmetry */}
          <div 
            className={`relative h-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px] transition-all duration-1200 delay-400 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {/* Main image - bleeds to edge on desktop */}
            <div 
              className="absolute inset-0 overflow-hidden lg:left-8 lg:right-0 lg:top-20 lg:bottom-0"
              style={{ transform: `translateY(${scrollY}px)` }}
            >
              <div className="relative h-full w-full">
                <Image
                  src="/images/channing-hero.jpg"
                  alt="Channing Stewart, Doctor of Physical Therapy, with Pilates equipment in her Lubbock studio"
                  fill
                  className="object-cover object-[center_15%] scale-125"
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

    </section>
  )
}

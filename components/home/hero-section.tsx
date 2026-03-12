"use client"

import Image from "next/image"
import Link from "next/link"
import { JANE_APP_URL } from "@/lib/constants"
import { useEffect, useState, useRef } from "react"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#F5F2EC]"
    >
      {/* Animated grain texture */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Subtle radial glow that follows mouse */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-40 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(212,205,94,0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Large decorative logo - the wow factor */}
      <div 
        className={`pointer-events-none absolute right-[-10%] top-1/2 -translate-y-1/2 transition-all duration-[2000ms] ease-out ${
          loaded ? "opacity-[0.04] translate-x-0 scale-100" : "opacity-0 translate-x-20 scale-95"
        }`}
        style={{
          transform: `translateY(calc(-50% + ${(mousePos.y - 0.5) * -20}px)) translateX(${(mousePos.x - 0.5) * -10}px)`,
        }}
      >
        <Image
          src="/images/logo-pill-navy.png"
          alt=""
          width={800}
          height={1200}
          className="h-[120vh] w-auto max-w-none select-none"
          priority
        />
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute h-1 w-1 rounded-full bg-[#D4CD5E]/40 transition-all duration-1000 ${
              loaded ? "opacity-100" : "opacity-0"
            }`}
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float-${i % 3} ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-32 md:px-10 lg:flex-row lg:items-center lg:gap-16 lg:px-16 xl:gap-24">
        
        {/* Left column - Content */}
        <div className="flex-1 lg:max-w-xl">
          
          {/* Animated line + eyebrow */}
          <div
            className={`flex items-center gap-4 transition-all duration-700 delay-300 ${
              loaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="h-px w-12 bg-gradient-to-r from-[#D4CD5E] to-[#D4CD5E]/0" />
            <p className="text-[10px] font-semibold tracking-[0.4em] text-[#948277]">
              LUBBOCK, TEXAS
            </p>
          </div>

          {/* Main headline with staggered reveal */}
          <div className="mt-8">
            <h1 className="font-serif font-normal leading-[0.9] tracking-[-0.03em] text-[#13273F]">
              <span 
                className={`block transition-all duration-1000 delay-400 ${
                  loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ fontSize: 'clamp(4rem, 12vw, 8rem)' }}
              >
                Move
              </span>
              <span 
                className={`block italic transition-all duration-1000 delay-500 ${
                  loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
                }`}
                style={{ 
                  fontSize: 'clamp(4rem, 12vw, 8rem)',
                  marginTop: '-0.05em',
                  background: 'linear-gradient(135deg, #948277 0%, #6B5B50 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Onward
              </span>
            </h1>
          </div>

          {/* Service badge */}
          <div
            className={`mt-8 transition-all duration-700 delay-600 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[#D4CD5E]/30 bg-[#D4CD5E]/10 px-4 py-2">
              <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D4CD5E]" />
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#948277]">
                PHYSICAL THERAPY & CLINICAL PILATES
              </span>
            </div>
          </div>

          {/* Description */}
          <p
            className={`mt-8 max-w-md text-[1.05rem] leading-[1.85] text-[#5A6B7A] transition-all duration-700 delay-700 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            One-on-one care that uses Clinical Pilates as a treatment tool. 
            Not a class — a personalized plan to help you heal, strengthen, 
            and move with confidence.
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 delay-800 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <a
              href={JANE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-full bg-[#13273F] px-8 py-4 text-[11px] font-semibold tracking-[0.18em] text-[#F5F2EC] transition-all duration-500 hover:shadow-[0_20px_50px_-12px_rgba(19,39,63,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                BOOK YOUR EVALUATION
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[#1d3654] to-[#13273F] transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <Link
              href="#how-it-works"
              className="group flex items-center gap-2 px-4 py-4 text-[11px] font-semibold tracking-[0.15em] text-[#13273F] transition-all duration-300 hover:text-[#948277]"
            >
              <span className="relative">
                HOW IT WORKS
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#948277] transition-all duration-300 group-hover:w-full" />
              </span>
            </Link>
          </div>

          {/* Credentials */}
          <div
            className={`mt-14 transition-all duration-700 delay-900 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-px bg-gradient-to-b from-[#E5D0CF] to-transparent" />
              <div>
                <p className="text-[13px] font-semibold tracking-[0.03em] text-[#13273F]">
                  Channing Stewart
                </p>
                <p className="mt-1 text-[11px] tracking-[0.02em] text-[#948277]">
                  PT, DPT &bull; STOTT Pilates Certified
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Photo */}
        <div 
          className={`relative mt-16 lg:mt-0 lg:flex-1 transition-all duration-1200 delay-500 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
          }`}
        >
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Decorative frame */}
            <div 
              className={`absolute -inset-4 rounded-[2rem] border border-[#D4CD5E]/20 transition-all duration-1000 delay-700 ${
                loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />
            
            {/* Secondary decorative frame */}
            <div 
              className={`absolute -inset-8 rounded-[2.5rem] border border-[#13273F]/5 transition-all duration-1000 delay-800 ${
                loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-[#13273F]/10">
              <div className="aspect-[3/4] w-full">
                <Image
                  src="/images/channing-standing.jpg"
                  alt="Channing Stewart, Doctor of Physical Therapy, in her Lubbock studio"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#13273F]/20 via-transparent to-transparent" />
            </div>

            {/* Floating logo accent */}
            <div 
              className={`absolute -left-6 top-8 z-10 transition-all duration-700 delay-1000 lg:-left-10 ${
                loaded ? "translate-x-0 opacity-100 rotate-0" : "-translate-x-4 opacity-0 -rotate-12"
              }`}
            >
              <div className="rounded-2xl bg-[#13273F] p-4 shadow-xl">
                <Image
                  src="/images/logo-pill-white.png"
                  alt=""
                  width={40}
                  height={60}
                  className="h-14 w-auto"
                />
              </div>
            </div>

            {/* Stats accent */}
            <div 
              className={`absolute -bottom-4 -right-4 z-10 transition-all duration-700 delay-1100 lg:-right-8 ${
                loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              <div className="rounded-xl bg-white/90 p-5 shadow-xl backdrop-blur-sm">
                <p className="text-[9px] font-semibold tracking-[0.25em] text-[#948277]">PERSONALIZED</p>
                <p className="mt-1 text-2xl font-serif text-[#13273F]">1:1</p>
                <p className="text-[10px] tracking-wide text-[#5A6B7A]">Sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 z-20 -translate-x-1/2 transition-all duration-700 delay-1200 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] font-semibold tracking-[0.35em] text-[#948277]">
            EXPLORE
          </span>
          <div className="relative h-10 w-5 rounded-full border border-[#948277]/30">
            <div className="absolute left-1/2 top-2 h-2 w-0.5 -translate-x-1/2 animate-bounce rounded-full bg-[#948277]" />
          </div>
        </div>
      </div>

      {/* CSS for floating animation */}
      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(-5px); }
        }
      `}</style>
    </section>
  )
}

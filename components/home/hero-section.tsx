"use client"

import Image from "next/image"
import Link from "next/link"
import { JANE_APP_URL } from "@/lib/constants"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#F5F2EC]">
      {/* Subtle dot texture */}
      <div className="absolute inset-0 opacity-[0.025]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #13273F 0.5px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-12 md:px-10 md:pt-32 md:pb-16 lg:px-16 lg:pt-36 lg:pb-20">
        {/* Top row: Eyebrow + Headline */}
        <div
          className={`transition-all duration-700 delay-200 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="h-[2px] w-8 bg-[#D4CD5E]" />
            <p className="text-[10px] font-semibold tracking-[0.35em] text-[#948277]">
              LUBBOCK, TX
            </p>
          </div>
        </div>

        <h1
          className={`mt-4 font-serif font-normal leading-[0.95] tracking-[-0.02em] text-[#13273F] transition-all duration-1000 delay-400 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
        >
          Move <em style={{ fontStyle: 'italic' }}>Onward</em>
        </h1>

        <div
          className={`mt-3 transition-all duration-700 delay-600 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-xs font-medium tracking-[0.2em] text-[#D4CD5E]">
            PHYSICAL THERAPY & CLINICAL PILATES
          </p>
        </div>

        {/* Content row: copy left, photo right */}
        <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-[1fr_1fr] md:gap-10 lg:mt-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-14 xl:gap-20">
          {/* Left — copy + CTAs */}
          <div
            className={`flex flex-col justify-center transition-all duration-800 delay-700 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="h-[2px] w-12 bg-[#13273F]/15" />
            <p className="mt-5 text-[1.05rem] leading-[1.75] text-[#5A6B7A]">
              One-on-one physical therapy that uses Clinical Pilates
              as a treatment tool. Not a class — a personalized plan
              to help you heal, strengthen, and move with confidence.
            </p>

            <div className="mt-7 flex flex-wrap items-start gap-3">
              <a
                href={JANE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full bg-[#13273F] px-7 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-[#F5F2EC] transition-all duration-300 hover:shadow-[0_8px_30px_-6px_rgba(19,39,63,0.4)]"
              >
                <span className="relative z-10">BOOK YOUR EVALUATION</span>
                <div className="absolute inset-0 bg-[#1d3654] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>
              <Link
                href="#how-it-works"
                className="rounded-full border border-[#13273F]/20 px-7 py-3.5 text-[11px] font-semibold tracking-[0.2em] text-[#13273F] transition-all duration-300 hover:border-[#13273F]/40 hover:bg-[#13273F]/[0.03]"
              >
                HOW IT WORKS
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="h-7 w-[2px] bg-[#E5D0CF]" />
              <div>
                <p className="text-[11px] font-semibold tracking-[0.08em] text-[#13273F]">
                  CHANNING STEWART, PT, DPT
                </p>
                <p className="mt-0.5 text-[10px] tracking-[0.04em] text-[#948277]">
                  Doctor of Physical Therapy &bull; STOTT Pilates Trained
                </p>
              </div>
            </div>
          </div>

          {/* Right — Photo */}
          <div
            className={`relative transition-all duration-1200 delay-500 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <div className="relative mx-auto max-w-[480px] md:mx-0 md:ml-auto">
              {/* Decorative offset border */}
              <div className="absolute -bottom-2.5 -right-2.5 h-full w-full rounded-2xl border border-[#D4CD5E]/25" />

              {/* Photo */}
              <div className="relative overflow-hidden rounded-2xl shadow-[0_16px_48px_-12px_rgba(19,39,63,0.12)]">
                <Image
                  src="/images/channing-relaxed.jpg"
                  alt="Channing Stewart, Doctor of Physical Therapy"
                  width={480}
                  height={580}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>

              {/* Olive accent */}
              <div
                className={`absolute -left-4 top-1/3 h-14 w-[3px] rounded-full bg-[#D4CD5E] transition-all duration-700 delay-1000 ${
                  loaded ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-[1px] bg-gradient-to-r from-transparent via-[#D4CD5E]/30 to-transparent" />
    </section>
  )
}

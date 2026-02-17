import Link from "next/link"
import { JANE_APP_URL } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[75vh] items-center bg-[#13273F]">
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center lg:px-8">
        <div className="mb-6 h-px w-16 bg-[#D4CD5E]" />
        <h1 className="font-serif text-5xl font-normal leading-tight tracking-wide text-[#F5F2EC] md:text-7xl lg:text-8xl">
          Move Onward
        </h1>
        <p className="mt-3 font-serif text-xl italic text-[#BFCED7] md:text-2xl">
          Restoration through Movement
        </p>
        <div className="mt-6 h-px w-24 bg-[#D4CD5E]" />
        <p className="mt-8 max-w-lg text-base leading-relaxed tracking-wide text-[#BFCED7] md:text-lg">
          Personalized one-on-one physical therapy and Clinical Pilates in Lubbock, TX. Expert care designed to help you heal, strengthen, and move with confidence.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={JANE_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#D4CD5E] px-8 py-3.5 text-sm font-semibold tracking-[0.2em] text-[#13273F] transition-all hover:bg-[#c5be50] hover:shadow-lg"
          >
            LET'S GET MOVING!
          </a>
          <Link
            href="#services"
            className="rounded-full border-2 border-[#BFCED7] px-8 py-3.5 text-sm font-semibold tracking-[0.2em] text-[#F5F2EC] transition-all hover:bg-[#BFCED7]/10"
          >
            OUR SERVICES
          </Link>
        </div>
      </div>
    </section>
  )
}

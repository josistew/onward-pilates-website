import Image from "next/image"
import { JANE_APP_URL } from "@/lib/constants"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-[#13273F] py-24 lg:py-32">
      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/channing-standing.jpg"
          alt=""
          fill
          className="object-cover object-top"
          quality={50}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-8">
        <Image
          src="/images/logo-oval-navy.png"
          alt="Onward PT & Pilates"
          width={80}
          height={112}
          className="mb-8"
        />
        <p className="text-xs font-semibold tracking-[0.3em] text-[#D4CD5E]">
          READY TO BEGIN?
        </p>
        <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-[#F5F2EC] md:text-5xl">
          <span className="text-balance">Ready to Move Onward?</span>
        </h2>
        <div className="mt-4 h-px w-16 bg-[#D4CD5E]" />
        <p className="mt-6 max-w-lg text-base leading-relaxed text-[#BFCED7]">
          Your first step is a one-on-one evaluation with Channing. She&apos;ll assess where you are,
          understand where you want to be, and build a plan to get you there. No referral needed.
        </p>
        <a
          href={JANE_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 rounded-full bg-[#D4CD5E] px-10 py-4 text-sm font-semibold tracking-[0.2em] text-[#13273F] transition-all hover:bg-[#c5be50] hover:shadow-lg"
        >
          BOOK YOUR EVALUATION
        </a>
      </div>
    </section>
  )
}

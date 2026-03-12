import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PhilosophySection() {
  return (
    <section className="bg-[#13273F] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Photo */}
          <div className="relative aspect-[3/4] max-h-[600px] overflow-hidden rounded-2xl">
            <Image
              src="/images/channing-casual.jpg"
              alt="Channing Stewart sitting casually"
              fill
              className="object-cover object-top"
              quality={85}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#D4CD5E]">
              MEET YOUR THERAPIST
            </p>
            <h2 className="font-serif text-3xl font-light leading-tight tracking-wide text-[#F5F2EC] md:text-4xl">
              <span className="text-balance">Channing Stewart, PT, DPT</span>
            </h2>
            <div className="h-px w-16 bg-[#D4CD5E]" />
            <p className="text-base leading-relaxed text-[#BFCED7]">
              Channing is a licensed Doctor of Physical Therapy and trained STOTT Pilates instructor.
              She brings a unique blend of clinical expertise and movement-based care to every session,
              treating the whole person, not just the diagnosis.
            </p>
            <p className="text-base leading-relaxed text-[#BFCED7]">
              Her approach is shaped by her own journey: three ACL injuries and rehabilitations,
              years of collegiate volleyball, a background in inpatient neuro rehab, and a deep love
              for helping people move without pain or limitation.
            </p>
            <p className="text-base leading-relaxed text-[#BFCED7]">
              Every session is fully one-on-one, unhurried, and built around you: your body, your goals,
              your timeline. No insurance-driven time constraints. No shared appointments.
              Just focused, personalized care.
            </p>
            <Link
              href="#about"
              className="mt-2 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#D4CD5E] transition-colors hover:text-[#F5F2EC]"
            >
              MORE ABOUT CHANNING
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

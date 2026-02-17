import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function PhilosophySection() {
  return (
    <section className="bg-muted/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Photo placeholder */}
          <div className="relative aspect-[3/4] max-h-[500px] overflow-hidden rounded-lg bg-[#E5D0CF]">
            <div className="flex h-full items-center justify-center text-primary/30">
              <span className="text-lg tracking-widest">Channing Photo</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
              MEET YOUR THERAPIST
            </p>
            <h2 className="font-serif text-3xl font-light leading-tight tracking-wide text-primary md:text-4xl">
              <span className="text-balance">Channing Stewart, PT, DPT</span>
            </h2>
            <div className="h-px w-16 bg-accent" />
            <p className="text-base leading-relaxed text-muted-foreground">
              With a Doctorate in Physical Therapy and training in STOTT Pilates, Channing brings a unique blend of clinical expertise and movement-based care to every session. Her mission is simple: help you feel stronger, move better, and live a pain free life with minimal limitations.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              Every session is fully one-on-one, tailored to your goals, and designed to get you where you want to be, whether that is recovering from an injury, building strength, or moving with more confidence.
            </p>
            <Link
              href="#about"
              className="mt-2 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary transition-colors hover:text-muted-foreground"
            >
              MEET CHANNING
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

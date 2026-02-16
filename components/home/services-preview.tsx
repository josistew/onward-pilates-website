import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { JANE_APP_URL } from "@/lib/constants"

const services = [
  {
    title: "Physical Therapy",
    description:
      "Skilled one-on-one, cash-based physical therapy specializing in orthopedic rehab, vestibular and balance therapy, core stability, and injury prevention.",
    color: "bg-[#BFCED7]",
  },
  {
    title: "Clinical Pilates",
    description:
      "Private Clinical Pilates sessions blending STOTT Pilates principles with functional movement for core strength, alignment, and whole-body conditioning.",
    color: "bg-[#E5D0CF]",
  },
]

export function ServicesPreview() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            WHAT WE OFFER
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-primary md:text-5xl">
            <span className="text-balance">Our Services</span>
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-lg bg-card transition-shadow hover:shadow-lg"
            >
              {/* Placeholder image area */}
              <div className={`relative aspect-[4/3] ${service.color}`}>
                <div className="flex h-full items-center justify-center text-primary/30">
                  <span className="text-xs tracking-widest">Photo Placeholder</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-serif text-xl font-medium text-primary">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="mt-2 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] text-primary transition-colors hover:text-muted-foreground"
                >
                  LEARN MORE
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

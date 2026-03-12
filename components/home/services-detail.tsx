import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { JANE_APP_URL } from "@/lib/constants"

const services = [
  {
    title: "Physical Therapy",
    subtitle: "ONE-ON-ONE | CASH-BASED | NO REFERRAL NEEDED",
    description:
      "Every patient starts here. Your first session is a comprehensive physical therapy evaluation — Channing will assess how you move, identify what's causing your pain or limitations, and build a treatment plan around your specific goals. This is not a group class or a generic stretching session.",
    details: [
      "Full movement assessment & evaluation",
      "Manual therapy & hands-on treatment",
      "Therapeutic exercise & neuromuscular re-education",
      "Clinical Pilates (Reformer, Cadillac, Stability Chair) used as a treatment tool",
      "Movement retraining & injury prevention strategies",
    ],
    whoItsFor: [
      "Post-surgery or injury recovery",
      "Chronic or recurring pain",
      "Pelvic floor dysfunction",
      "Pre & postpartum care",
      "Balance & vestibular issues",
      "Anyone wanting to move better without pain",
    ],
    image: "/images/pt-resistance-band.jpg",
    imageAlt: "Physical therapy session with resistance band",
    color: "bg-[#BFCED7]",
  },
  {
    title: "Clinical Pilates",
    subtitle: "PRIVATE SESSIONS | STOTT PILATES (MERRITHEW)",
    description:
      "Once you've been evaluated and cleared, or if you're looking for guided strength and movement work without a medical concern, Clinical Pilates sessions are available as standalone private sessions. These are still one-on-one with Channing — not a group class.",
    details: [
      "Private Reformer-based sessions",
      "Customized to your level, body, and goals",
      "Core strength, alignment, and functional movement",
      "Informed by STOTT Pilates (Merrithew) principles",
      "Complements your PT plan or stands alone for wellness",
    ],
    whoItsFor: [
      "Building core strength & stability",
      "Improving flexibility & mobility",
      "Enhancing posture & alignment",
      "Complementing a fitness routine with precision movement",
    ],
    image: "/images/reformer-session.jpg",
    imageAlt: "Clinical Pilates session on the Reformer",
    color: "bg-[#E5D0CF]",
  },
]

export function ServicesDetail() {
  return (
    <section id="services" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            WHAT WE OFFER
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-primary md:text-5xl">
            <span className="text-balance">Our Services</span>
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Every session is one-on-one with Channing — a licensed Doctor of Physical Therapy.
            No aides, no group classes, no rushing.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid items-start gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  quality={85}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5 lg:pt-8">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-muted-foreground">
                  {service.subtitle}
                </p>
                <h3 className="font-serif text-3xl font-light tracking-wide text-primary md:text-4xl">
                  {service.title}
                </h3>
                <div className="h-px w-12 bg-accent" />
                <p className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold tracking-[0.15em] text-primary">
                    WHAT&apos;S INCLUDED
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {service.details.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-semibold tracking-[0.15em] text-primary">
                    WHO IT&apos;S FOR
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {service.whoItsFor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <div className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/30" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={JANE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary transition-colors hover:text-muted-foreground"
                >
                  BOOK NOW
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

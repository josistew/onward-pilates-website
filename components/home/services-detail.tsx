import { ArrowRight } from "lucide-react"
import { JANE_APP_URL } from "@/lib/constants"

const services = [
  {
    title: "Physical Therapy",
    subtitle: "One-on-One | Cash-Based",
    description:
      "Skilled one-on-one physical therapy with a focus on individualized, movement-based care. Free from the constraints of insurance-driven timelines, each session gives you the time and attention you deserve.",
    whoItsFor: [
      "Post orthopedic surgery or injury",
      "Chronic pain",
      "Pelvic pain",
      "Pre or post partum wellness",
      "Balance or vestibular issues",
      "Injury prevention",
      "Loss of functional mobility",
    ],
    whatToExpect:
      "A comprehensive evaluation followed by a personalized treatment plan. Sessions include manual therapy, therapeutic exercise, neuromuscular re-education, and movement retraining tailored to your specific goals.",
    color: "bg-[#BFCED7]",
  },
  {
    title: "Clinical Pilates",
    subtitle: "Private Sessions | STOTT Pilates",
    description:
      "Private Clinical Pilates sessions informed by STOTT Pilates (Merrithew) principles. Build core strength, improve alignment, and enhance functional movement in a supportive, one-on-one setting.",
    whoItsFor: [
      "Building core strength",
      "Improving flexibility & mobility",
      "Enhancing posture & alignment",
      "Complementing your fitness routine with mindful movement",
    ],
    whatToExpect:
      "Reformer-based sessions customized to your level and goals. Each session focuses on controlled, precise movements that build strength from the inside out.",
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
            Every session is one-on-one, tailored to your goals, and designed to help you move forward with confidence.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Photo placeholder */}
              <div className={`relative aspect-[4/3] overflow-hidden rounded-lg ${service.color}`}>
                <div className="flex h-full items-center justify-center text-primary/30">
                  <span className="text-lg tracking-widest">{service.title} Photo</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5">
                <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground">
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
                    WHO IT&apos;S FOR
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {service.whoItsFor.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="h-1 w-1 shrink-0 rounded-full bg-primary/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold tracking-[0.15em] text-primary">
                    WHAT TO EXPECT
                  </h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.whatToExpect}
                  </p>
                </div>
                <a
                  href={JANE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-primary transition-colors hover:text-muted-foreground"
                >
                  LET&apos;S GET MOVING!
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

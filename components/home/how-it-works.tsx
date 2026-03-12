import Image from "next/image"
import { JANE_APP_URL } from "@/lib/constants"

const steps = [
  {
    number: "01",
    title: "Book Your Evaluation",
    description:
      "Your first visit is a full physical therapy evaluation, not a Pilates class. Channing will assess your movement, discuss your history, and understand your goals. No referral needed for your first 30 days.",
  },
  {
    number: "02",
    title: "Get Your Personalized Plan",
    description:
      "Based on your evaluation, Channing builds a treatment plan tailored to your body, your goals, and your life. This may include manual therapy, therapeutic exercises, and Clinical Pilates on the Reformer, all as part of your PT care.",
  },
  {
    number: "03",
    title: "Heal, Strengthen, Move Forward",
    description:
      "Every session is one-on-one with Channing. No aides, no shared appointments. You get her full attention for the entire session as you work through your plan and progress toward your goals.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            WHAT TO EXPECT
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-primary md:text-5xl">
            <span className="text-balance">This Isn&apos;t a Pilates Class</span>
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Onward is a <strong className="font-semibold text-primary">cash-based physical therapy practice</strong> that
            uses Clinical Pilates as one of many treatment tools. Your first appointment is a comprehensive evaluation
            with a licensed Doctor of Physical Therapy, and every session after is built around your personalized care plan.
          </p>
        </div>

        {/* Steps + Image grid */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Steps */}
          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="font-serif text-4xl font-light text-accent/60">
                    {step.number}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl font-medium tracking-wide text-primary">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            <a
              href={JANE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit rounded-full bg-primary px-8 py-3.5 text-sm font-semibold tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              SCHEDULE YOUR EVALUATION
            </a>
          </div>

          {/* Image */}
          <div className="relative aspect-[3/4] max-h-[600px] overflow-hidden rounded-2xl">
            <Image
              src="/images/pilates-ball-exercise.jpg"
              alt="Clinical Pilates exercise with stability ball"
              fill
              className="object-cover object-center"
              quality={85}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { JANE_APP_URL } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Onward Physical Therapy & Pilates",
  description:
    "Meet Channing Stewart, PT, DPT, licensed physical therapist and STOTT Pilates instructor providing personalized one-on-one care in Lubbock, TX.",
  openGraph: {
    title: "About | Onward Physical Therapy & Pilates",
    description:
      "Meet Channing Stewart, PT, DPT. Personalized physical therapy and Pilates in Lubbock, TX.",
  },
}

export default function AboutPage() {
  return (
    <main>
      <Navigation variant="dark" />

      {/* Hero */}
      <section className="flex items-center bg-muted/40 pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            OUR STORY
          </p>
          <h1 className="mt-4 font-serif text-5xl font-light tracking-wide text-primary md:text-6xl lg:text-7xl">
            About Onward
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />
        </div>
      </section>

      {/* Channing's Story */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Photo placeholder */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#E5D0CF]">
              <div className="flex h-full items-center justify-center text-primary/30">
                <span className="text-lg tracking-widest">Channing Portrait</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                MEET YOUR THERAPIST
              </p>
              <h2 className="font-serif text-3xl font-light leading-tight tracking-wide text-primary md:text-4xl">
                <span className="text-balance">Channing Stewart, PT, DPT</span>
              </h2>
              <div className="h-px w-16 bg-accent" />
              <p className="text-base leading-relaxed text-muted-foreground">
                Channing is a licensed physical therapist in the state of Texas and a trained Pilates instructor through Merrithew (STOTT Pilates). Her desire is to provide skilled one-on-one, cash-based physical therapy services with a faith-filled focus on individualized, movement-based care.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                She specializes in orthopedic rehabilitation, vestibular and balance rehabilitation, core and pelvic stability, pre and post natal training, injury prevention, and functional strength training using Pilates-informed principles and manual therapy skills.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Channing received her Bachelor of Science in Exercise Science from Lubbock Christian University in 2018 and went on to complete her Doctorate of Physical Therapy through the Texas Tech Health Sciences Center in Lubbock, TX in 2021.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Approach */}
      <section className="bg-secondary/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                MY APPROACH
              </p>
              <h2 className="font-serif text-4xl font-light leading-tight tracking-wide text-primary md:text-5xl">
                <span className="text-balance">What Makes Onward Different</span>
              </h2>
              <div className="h-px w-16 bg-accent" />
              <p className="text-base leading-relaxed text-muted-foreground">
                Channing has a background in the inpatient rehab neuro setting as well as the ortho world, having played collegiate volleyball. Her love for physical therapy and Pilates came from overcoming 3 ACL injuries and rehabilitations.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Through her practice, she blends evidence-based rehabilitation, her training in STOTT Pilates, her athletic background, and years of working with the neuro population to create treatment plans tailored to each client&apos;s goals, lifestyle, and needs.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                She is passionate about providing Spirit-led, high-quality, and personalized physical therapy without the constraints of insurance-driven care, allowing for longer sessions, focused attention, and collaborative goal setting.
              </p>
            </div>

            {/* Photo placeholder */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#BFCED7]">
              <div className="flex h-full items-center justify-center text-primary/30">
                <span className="text-lg tracking-widest">Studio Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
              WHAT GUIDES ME
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-primary md:text-5xl">
              My Values
            </h2>
            <div className="mt-4 h-px w-16 bg-accent" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Faith-Filled Care",
                description:
                  "Every session is grounded in a spirit-led approach, creating a compassionate and supportive environment for healing and growth.",
              },
              {
                title: "One-on-One Focus",
                description:
                  "No shared appointments, no distractions. Your session is entirely dedicated to you, with personalized attention every step of the way.",
              },
              {
                title: "Movement-Based Healing",
                description:
                  "Combining evidence-based physical therapy with Pilates-informed principles to address the root cause and build lasting strength.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 rounded-lg bg-card p-8"
              >
                <h3 className="font-serif text-xl font-medium text-primary">
                  {value.title}
                </h3>
                <div className="h-px w-10 bg-accent" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-muted/40 py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            CREDENTIALS
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-primary md:text-5xl">
            Education & Training
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />

          <div className="mt-12 flex flex-col gap-6">
            {[
              "Doctorate of Physical Therapy, Texas Tech Health Sciences Center, 2021",
              "B.S. Exercise Science, Lubbock Christian University, 2018",
              "STOTT Pilates Trained, Merrithew",
              "Licensed Physical Therapist, State of Texas",
            ].map((credential) => (
              <div
                key={credential}
                className="border-b border-border pb-4 text-base text-muted-foreground"
              >
                {credential}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-8">
          <h2 className="font-serif text-4xl font-light tracking-wide text-primary-foreground md:text-5xl">
            <span className="text-balance">Ready to Move Onward?</span>
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/70">
            Take the first step toward a stronger, more confident you. Book your session today.
          </p>
          <a
            href={JANE_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 rounded-full bg-primary-foreground px-10 py-4 text-sm font-semibold tracking-[0.2em] text-primary transition-all hover:bg-primary-foreground/90 hover:shadow-lg"
          >
            LET'S GET MOVING!
          </a>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  )
}

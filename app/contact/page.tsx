import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, Instagram } from "lucide-react"
import { CONTACT_INFO, JANE_APP_URL, INSTAGRAM_URL } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Onward Physical Therapy & Pilates",
  description:
    "Get in touch with Onward Physical Therapy & Pilates in Lubbock, TX. Book a consultation, ask questions, or learn more about our services.",
  openGraph: {
    title: "Contact | Onward Physical Therapy & Pilates",
    description:
      "Reach out to Onward PT & Pilates in Lubbock, TX.",
  },
}

export default function ContactPage() {
  return (
    <main>
      <Navigation variant="dark" />

      {/* Hero */}
      <section className="flex items-center bg-muted/40 pb-16 pt-32 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            GET IN TOUCH
          </p>
          <h1 className="mt-4 font-serif text-5xl font-light tracking-wide text-primary md:text-6xl lg:text-7xl">
            Contact Us
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Ready to start your journey? We would love to hear from you. Reach out to book a session or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="flex flex-col gap-10">
              <div>
                <h2 className="font-serif text-3xl font-light tracking-wide text-primary">
                  Let&apos;s Connect
                </h2>
                <div className="mt-3 h-px w-12 bg-accent" />
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/40">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-primary">
                      PHONE
                    </h3>
                    <a
                      href={CONTACT_INFO.phoneHref}
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/40">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-primary">
                      EMAIL
                    </h3>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/40">
                    <Instagram className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-primary">
                      INSTAGRAM
                    </h3>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      @onward.ptlbk
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-muted/40 p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We&apos;re a private practice in Lubbock, TX. Location details are shared upon booking.
                </p>
              </div>

              <div>
                <a
                  href={JANE_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  LET'S GET MOVING!
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-light tracking-wide text-primary">
                  Send a Message
                </h2>
                <div className="mt-3 h-px w-12 bg-accent" />
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  )
}

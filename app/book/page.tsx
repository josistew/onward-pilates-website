import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { JANE_APP_URL } from "@/lib/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Session | Onward Physical Therapy & Pilates",
  description:
    "Book your one-on-one physical therapy or Clinical Pilates session with Channing Stewart, PT, DPT in Lubbock, TX.",
  openGraph: {
    title: "Book a Session | Onward Physical Therapy & Pilates",
    description:
      "Book your session with Onward PT & Pilates in Lubbock, TX.",
  },
}

export default function BookPage() {
  return (
    <main>
      <Navigation />

      {/* Hero */}
      <section className="flex items-center bg-muted/40 pb-8 pt-32 lg:pb-12 lg:pt-40">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            BOOK YOUR SESSION
          </p>
          <h1 className="mt-4 font-serif text-5xl font-light tracking-wide text-primary md:text-6xl lg:text-7xl">
            Schedule
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Select a session type below to view available times and book directly.
          </p>
        </div>
      </section>

      {/* Jane App Embed */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <iframe
            src={JANE_APP_URL}
            title="Book a session with Onward Physical Therapy & Pilates"
            className="h-[500px] w-full rounded-lg border border-border md:h-[700px]"
            loading="lazy"
            allow="payment"
          />
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Having trouble viewing the scheduler?{" "}
            <a
              href={JANE_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-primary"
            >
              Open the booking page directly
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

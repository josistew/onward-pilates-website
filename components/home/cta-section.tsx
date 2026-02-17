import { JANE_APP_URL } from "@/lib/constants"

export function CTASection() {
  return (
    <section className="bg-primary py-24 lg:py-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-8">
        <p className="text-xs font-semibold tracking-[0.3em] text-primary-foreground/60">
          READY TO BEGIN?
        </p>
        <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-primary-foreground md:text-5xl">
          <span className="text-balance">Ready to Move Onward?</span>
        </h2>
        <div className="mt-4 h-px w-16 bg-accent" />
        <p className="mt-6 max-w-md text-base leading-relaxed text-primary-foreground/70">
          Take the first step toward a stronger, more confident you. Book your session with Channing and start your journey today.
        </p>
        <a
          href={JANE_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 rounded-full bg-primary-foreground px-10 py-4 text-sm font-semibold tracking-[0.2em] text-primary transition-all hover:bg-primary-foreground/90 hover:shadow-lg"
        >
          LET'S GET MOVING!
        </a>
        <img
          src="/images/logo-icon.png"
          alt="Onward PT & Pilates"
          className="mt-12 h-42 w-auto"
        />
      </div>
    </section>
  )
}

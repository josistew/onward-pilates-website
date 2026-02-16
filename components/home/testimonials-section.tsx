const testimonials = [
  {
    quote:
      "After my knee surgery, I was nervous about recovery. Channing not only got me back on my feet, she made me stronger than before. I cannot recommend Onward enough.",
    name: "Sarah M.",
    role: "Post-Surgical Recovery",
  },
  {
    quote:
      "The one-on-one attention is unmatched. Every session is tailored exactly to what my body needs that day. I have never felt more in tune with my movement.",
    name: "Jennifer L.",
    role: "Clinical Pilates Client",
  },
  {
    quote:
      "I came in with chronic back pain I had dealt with for years. The integrated approach of PT and Pilates has been life-changing. I finally feel like myself again.",
    name: "Michael R.",
    role: "Chronic Pain Management",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            TESTIMONIALS
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-primary md:text-5xl">
            <span className="text-balance">What Our Clients Say</span>
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-6 rounded-lg bg-card p-8"
            >
              <svg
                className="h-8 w-8 text-accent"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
              </svg>
              <p className="flex-1 font-serif text-lg font-light italic leading-relaxed text-primary">
                {testimonial.quote}
              </p>
              <div>
                <p className="text-sm font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-lg bg-secondary/20 p-12 text-center">
        <h3 className="font-serif text-2xl font-light text-primary">
          Thank You
        </h3>
        <div className="h-px w-12 bg-accent" />
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          We have received your message and will get back to you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        setSubmitted(true)
      }}
      className="flex flex-col gap-6"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-xs font-semibold tracking-wider text-primary"
        >
          NAME
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
          placeholder="Your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-xs font-semibold tracking-wider text-primary"
        >
          EMAIL
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="phone"
          className="text-xs font-semibold tracking-wider text-primary"
        >
          PHONE <span className="font-normal text-muted-foreground">(optional)</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
          placeholder="(555) 000-0000"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="interest"
          className="text-xs font-semibold tracking-wider text-primary"
        >
          I&apos;M INTERESTED IN...
        </label>
        <select
          id="interest"
          name="interest"
          className="rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="physical-therapy">Physical Therapy</option>
          <option value="pilates">Clinical Pilates</option>
          <option value="pt-pilates">PT + Pilates</option>
          <option value="not-sure">Not Sure</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs font-semibold tracking-wider text-primary"
        >
          MESSAGE
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="resize-none rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none"
          placeholder="Tell us about your goals or any questions you have..."
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md"
      >
        SEND MESSAGE
      </button>
    </form>
  )
}

import Link from "next/link"
import { Instagram } from "lucide-react"
import { JANE_APP_URL, INSTAGRAM_URL, CONTACT_INFO } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start gap-0">
              <span className="font-serif text-2xl font-thin tracking-[0.15em] text-primary-foreground">
                ONWARD
              </span>
              <span className="font-sans text-[7px] font-light tracking-[0.2em] text-primary-foreground/80">
                PHYSICAL THERAPY & PILATES
              </span>
            </div>
            <p className="text-sm italic text-primary-foreground/60">
              Helping you move forward, one session at a time.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-5 w-5" />
              @onward.ptlbk
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-[0.2em]">QUICK LINKS</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                Home
              </Link>
              <Link href="/services" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                Services
              </Link>
              <Link href="/about" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                About
              </Link>
              <Link href="/contact" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                Contact
              </Link>
              <a href={JANE_APP_URL} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground">
                Book Online
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold tracking-[0.2em]">GET IN TOUCH</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/60">
              <a href={`mailto:${CONTACT_INFO.email}`} className="transition-colors hover:text-primary-foreground">
                {CONTACT_INFO.email}
              </a>
              <a href={CONTACT_INFO.phoneHref} className="transition-colors hover:text-primary-foreground">
                {CONTACT_INFO.phone}
              </a>
              <p>Lubbock, TX &mdash; Private Practice</p>
              <p className="text-xs text-primary-foreground/40">
                Location details shared upon booking.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-xs text-primary-foreground/40">
            &copy; {new Date().getFullYear()} Onward Physical Therapy & Pilates, PLLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

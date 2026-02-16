"use client"

import { JANE_APP_URL } from "@/lib/constants"

export function FloatingCTA() {
  return (
    <a
      href={JANE_APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-primary px-6 py-3 text-xs font-semibold tracking-[0.15em] text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl md:hidden"
    >
      LET'S GET MOVING!
    </a>
  )
}

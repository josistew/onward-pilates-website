import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesPreview } from "@/components/home/services-preview"
import { PhilosophySection } from "@/components/home/philosophy-section"
import { QuizSection } from "@/components/home/quiz-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CTASection } from "@/components/home/cta-section"

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <PhilosophySection />
      <QuizSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}

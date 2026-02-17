import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingCTA } from "@/components/floating-cta"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesDetail } from "@/components/home/services-detail"
import { PhilosophySection } from "@/components/home/philosophy-section"
import { AboutSection } from "@/components/home/about-section"
import { QuizSection } from "@/components/home/quiz-section"
import { CTASection } from "@/components/home/cta-section"

export default function Page() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <ServicesDetail />
      <PhilosophySection />
      <AboutSection />
      <QuizSection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </main>
  )
}

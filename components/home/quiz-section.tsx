"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { RotateCcw } from "lucide-react"
import { JANE_APP_URL } from "@/lib/constants"

type Answer = {
  label: string
  pt: number
  pilates: number
}

type Question = {
  question: string
  answers: Answer[]
}

const questions: Question[] = [
  {
    question: "What best describes you?",
    answers: [
      { label: "Recovering from injury", pt: 1, pilates: 0 },
      { label: "Build strength & improve movement", pt: 0, pilates: 1 },
      { label: "Pregnant or less than 12 months postpartum", pt: 1, pilates: 0 },
      { label: "Not sure", pt: 0, pilates: 0 },
    ],
  },
  {
    question: "Are you currently experiencing pain or discomfort?",
    answers: [
      { label: "Yes, regularly", pt: 1, pilates: 0 },
      { label: "Occasionally", pt: 0, pilates: 0 },
      { label: "No", pt: 0, pilates: 1 },
    ],
  },
  {
    question: "Are you currently seeing a doctor for this concern?",
    answers: [
      { label: "Yes", pt: 1, pilates: 0 },
      { label: "No", pt: 0, pilates: 1 },
    ],
  },
]

type Result = "pt" | "pilates" | "tie"

const results: Record<Result, { title: string; description: string }> = {
  pt: {
    title: "Physical Therapy",
    description:
      "Based on your answers, one-on-one Physical Therapy may be the best starting point. Channing will create a personalized plan to address your pain, restore function, and get you moving confidently again. No doctor\u2019s referral is needed for your first 30 days of treatment, and if one is ever required, Channing will guide you through the process.",
  },
  pilates: {
    title: "Clinical Pilates",
    description:
      "Based on your answers, Clinical Pilates could be a great fit. Build strength, improve flexibility, and move better with guided Reformer-based sessions tailored to your body and goals.",
  },
  tie: {
    title: "Let\u2019s Chat",
    description:
      "Your answers suggest you could benefit from either service, or a combination of both! Let\u2019s connect so Channing can help you find the perfect fit.",
  },
}

export function QuizSection() {
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState({ pt: 0, pilates: 0 })
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [transitioning, setTransitioning] = useState(false)

  const handleAnswer = useCallback(
    (answer: Answer, index: number) => {
      if (selectedIndex !== null) return
      setSelectedIndex(index)

      const newScores = {
        pt: scores.pt + answer.pt,
        pilates: scores.pilates + answer.pilates,
      }
      setScores(newScores)

      setTimeout(() => {
        setTransitioning(true)
        setTimeout(() => {
          setStep(step + 1)
          setSelectedIndex(null)
          setTransitioning(false)
        }, 300)
      }, 400)
    },
    [scores, step, selectedIndex]
  )

  const handleRetake = useCallback(() => {
    setTransitioning(true)
    setTimeout(() => {
      setStep(0)
      setScores({ pt: 0, pilates: 0 })
      setSelectedIndex(null)
      setTransitioning(false)
    }, 300)
  }, [])

  const result: Result =
    scores.pt > scores.pilates
      ? "pt"
      : scores.pilates > scores.pt
        ? "pilates"
        : "tie"

  const isResult = step >= questions.length

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            FIND YOUR FIT
          </p>
          <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-primary md:text-5xl">
            <span className="text-balance">
              Which Service Is Right for You?
            </span>
          </h2>
          <div className="mt-4 h-px w-16 bg-accent" />
        </div>

        {/* Progress dots */}
        <div className="mb-10 flex items-center justify-center gap-2.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                i < step
                  ? "bg-accent"
                  : i === step && !isResult
                    ? "bg-accent"
                    : "border-2 border-accent/40 bg-transparent"
              }`}
            />
          ))}
        </div>

        {/* Content area */}
        <div className="relative min-h-[320px]">
          {/* Questions */}
          {!isResult && (
            <div
              className={`transition-all duration-300 ease-out ${
                transitioning
                  ? "translate-y-4 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <h3 className="mb-8 text-center font-serif text-2xl font-light tracking-wide text-primary md:text-3xl">
                {questions[step].question}
              </h3>

              <div className="flex flex-col gap-4">
                {questions[step].answers.map((answer, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(answer, i)}
                    disabled={selectedIndex !== null}
                    className={`rounded-lg bg-card px-6 py-5 text-left text-base leading-relaxed text-primary transition-all duration-200 hover:scale-[1.02] hover:shadow-md ${
                      selectedIndex === i
                        ? "scale-[1.02] border-2 border-accent shadow-md"
                        : "border-2 border-transparent"
                    }`}
                  >
                    {answer.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {isResult && (
            <div
              className={`flex flex-col items-center text-center transition-all duration-500 ease-out ${
                transitioning
                  ? "scale-95 opacity-0"
                  : "scale-100 opacity-100"
              }`}
            >
              <div className="w-full rounded-lg bg-card p-8 md:p-12">
                <p className="text-xs font-semibold tracking-[0.3em] text-accent">
                  YOUR RECOMMENDATION
                </p>
                <h3 className="mt-4 font-serif text-3xl font-light tracking-wide text-primary md:text-4xl">
                  {results[result].title}
                </h3>
                <div className="mx-auto mt-4 h-px w-12 bg-accent" />
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {results[result].description}
                </p>

                <div className="mt-10 flex flex-col items-center gap-4">
                  {result === "tie" ? (
                    <Link
                      href="/contact"
                      className="rounded-full bg-primary px-10 py-4 text-sm font-semibold tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                    >
                      GET IN TOUCH
                    </Link>
                  ) : (
                    <a
                      href={JANE_APP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary px-10 py-4 text-sm font-semibold tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                    >
                      LET'S GET MOVING!
                    </a>
                  )}

                  <button
                    onClick={handleRetake}
                    className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
                  >
                    <RotateCcw className="h-3 w-3" />
                    RETAKE QUIZ
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

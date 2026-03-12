import Image from "next/image"

export function AboutSection() {
  return (
    <>
      {/* Approach + Studio Photos */}
      <section id="about" className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                MY APPROACH
              </p>
              <h2 className="font-serif text-4xl font-light leading-tight tracking-wide text-primary md:text-5xl">
                <span className="text-balance">What Makes Onward Different</span>
              </h2>
              <div className="h-px w-16 bg-accent" />
              <p className="text-base leading-relaxed text-muted-foreground">
                Most PT clinics run on high volume. You see a therapist for 10 minutes,
                then get handed off to an aide. At Onward, you get Channing for your
                <strong className="font-semibold text-primary"> entire session</strong>, every time.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                As a cash-based practice, Onward isn&apos;t bound by insurance-driven time limits or
                treatment restrictions. That means longer sessions, focused attention, and a treatment
                plan built around what you actually need, not what an insurance company approves.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground">
                Channing blends evidence-based rehabilitation with her training in STOTT Pilates,
                her athletic background, and years of working with both orthopedic and neurological
                patients. The result is care that&apos;s thorough, personalized, and Spirit-led.
              </p>
            </div>

            {/* Photo mosaic */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/channing-equipment.jpg"
                  alt="Channing surrounded by Pilates equipment"
                  fill
                  className="object-cover"
                  quality={80}
                />
              </div>
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-xl">
                <Image
                  src="/images/studio-cadillac.jpg"
                  alt="The Onward studio with Cadillac Pilates equipment"
                  fill
                  className="object-cover"
                  quality={80}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#E5D0CF]/20 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
              WHAT GUIDES ME
            </p>
            <h2 className="mt-4 font-serif text-4xl font-light tracking-wide text-primary md:text-5xl">
              My Values
            </h2>
            <div className="mt-4 h-px w-16 bg-accent" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Faith-Filled Care",
                description:
                  "Every session is grounded in a spirit-led approach, creating a compassionate and supportive environment for healing and growth.",
              },
              {
                title: "One-on-One Focus",
                description:
                  "No shared appointments, no aides, no distractions. Your session is entirely dedicated to you with Channing's full attention, every minute.",
              },
              {
                title: "Movement-Based Healing",
                description:
                  "Combining evidence-based physical therapy with Clinical Pilates to address the root cause, not just the symptoms, and build lasting strength.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-4 rounded-2xl bg-card p-8 shadow-sm"
              >
                <h3 className="font-serif text-xl font-medium text-primary">
                  {value.title}
                </h3>
                <div className="h-px w-10 bg-accent" />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials + Equipment photos */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Equipment photos */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/stability-chair.jpg"
                  alt="Merrithew Stability Chair"
                  fill
                  className="object-cover"
                  quality={80}
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/reformer-closeup.jpg"
                  alt="Reformer session close-up"
                  fill
                  className="object-cover"
                  quality={80}
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/equipment-flatlay.jpg"
                  alt="Merrithew Pilates equipment"
                  fill
                  className="object-cover"
                  quality={80}
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-xl">
                <Image
                  src="/images/balance-work.jpg"
                  alt="Balance and stability training"
                  fill
                  className="object-cover"
                  quality={80}
                />
              </div>
            </div>

            {/* Credentials */}
            <div className="flex flex-col gap-6">
              <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                CREDENTIALS
              </p>
              <h2 className="font-serif text-4xl font-light tracking-wide text-primary md:text-5xl">
                Education & Training
              </h2>
              <div className="h-px w-16 bg-accent" />

              <div className="mt-4 flex flex-col gap-6">
                {[
                  {
                    credential: "Doctorate of Physical Therapy",
                    detail: "Texas Tech University Health Sciences Center, 2021",
                  },
                  {
                    credential: "B.S. Exercise Science",
                    detail: "Lubbock Christian University, 2018",
                  },
                  {
                    credential: "STOTT Pilates Trained",
                    detail: "Merrithew: Reformer, Cadillac, Stability Chair, Matwork",
                  },
                  {
                    credential: "Licensed Physical Therapist",
                    detail: "State of Texas",
                  },
                ].map((item) => (
                  <div
                    key={item.credential}
                    className="border-b border-border pb-4"
                  >
                    <p className="font-serif text-lg text-primary">{item.credential}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

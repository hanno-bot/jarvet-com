export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight" style={{ color: "var(--navy)" }}>
            JARVET
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-md text-white transition-colors bg-[var(--navy)] hover:bg-[var(--navy-light)]"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center pt-20"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-3xl">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-6"
              style={{ color: "var(--gold)" }}
            >
              Business Strategy Consulting
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              From Strategy
              <br />
              to Execution.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              I help organizations formulate clear strategies and turn them into
              measurable results. No fluff, no frameworks for the sake of
              frameworks — just focused work that moves the needle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md text-base font-semibold transition-colors bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]"
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-md text-base font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>
            How I Help
          </h2>
          <p className="text-lg text-gray-500 mb-16 max-w-2xl">
            Focused strategic advisory for organizations that want clarity and results.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strategy Formulation",
                description:
                  "Define where to play and how to win. I work with leadership teams to develop strategies grounded in market reality, competitive positioning, and organizational strengths.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                  </svg>
                ),
              },
              {
                title: "Execution Planning",
                description:
                  "Bridge the gap between strategy and action. I translate strategic intent into concrete initiatives, milestones, and accountability structures that drive results.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                  </svg>
                ),
              },
              {
                title: "Growth Advisory",
                description:
                  "Unlock the next stage of growth. Whether scaling operations, entering new markets, or optimizing your business model, I provide the strategic clarity to move forward with confidence.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                ),
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-8 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-md flex items-center justify-center mb-6"
                  style={{ backgroundColor: "var(--navy)", color: "var(--gold)" }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--navy)" }}>
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32" style={{ backgroundColor: "var(--light)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                About
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: "var(--navy)" }}>
                Hanno Jarvet
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I am a business strategy consultant specializing in helping
                  organizations move from strategic vision to tangible outcomes.
                  With deep expertise in strategy formulation and execution, I
                  work alongside leadership teams to craft strategies that are
                  ambitious yet actionable.
                </p>
                <p>
                  My approach is straightforward: understand the business deeply,
                  identify the highest-leverage opportunities, and build a clear
                  path to capture them. I believe the best strategies are ones
                  that get executed — and I stay engaged through implementation
                  to ensure that happens.
                </p>
                <p>
                  Whether you&apos;re a growing startup defining your competitive
                  position or an established organization navigating
                  transformation, I bring the strategic rigor and hands-on
                  partnership to help you succeed.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div
                className="w-full max-w-sm aspect-[3/4] rounded-lg flex items-end justify-center"
                style={{
                  background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                }}
              >
                <div className="text-center pb-8">
                  <div
                    className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold"
                    style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
                  >
                    HJ
                  </div>
                  <p className="text-white font-semibold text-lg">Hanno Jarvet</p>
                  <p className="text-gray-400 text-sm">Strategy Consultant</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-16" style={{ color: "var(--navy)" }}>
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Hanno helped us cut through the noise and focus on what truly mattered. Within six months, we had a clear strategy and the momentum to execute it.",
                name: "Client Name",
                role: "CEO, Company",
              },
              {
                quote:
                  "What sets Hanno apart is his ability to stay with you through execution. He doesn't just hand over a deck — he rolls up his sleeves and helps make it happen.",
                name: "Client Name",
                role: "Managing Director, Company",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="p-8 rounded-lg border border-gray-100"
                style={{ backgroundColor: "var(--light)" }}
              >
                <div className="mb-6" style={{ color: "var(--gold)" }}>
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold" style={{ color: "var(--navy)" }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section
        id="contact"
        className="py-24 md:py-32"
        style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Get Started
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Move Forward?
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Whether you&apos;re looking to define your strategy, accelerate execution,
            or navigate a critical growth phase — let&apos;s talk. Book a free
            consultation to discuss your challenges and explore how I can help.
          </p>
          <a
            href="mailto:hanno@jarvet.com"
            className="inline-flex items-center justify-center px-10 py-4 rounded-md text-lg font-semibold transition-colors bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]"
          >
            Book a Consultation
          </a>
          <p className="text-gray-400 mt-6 text-sm">
            Or reach out directly at{" "}
            <a href="mailto:hanno@jarvet.com" className="underline hover:text-white transition-colors">
              hanno@jarvet.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Hanno Jarvet. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#services" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

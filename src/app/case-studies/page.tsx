import type { Metadata } from "next";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "Case Studies — Jarvet Consulting",
  description:
    "Client success stories from Jarvet Consulting. See how strategic consulting has helped leaders transform their organizations.",
  alternates: { canonical: "https://jarvet.com/case-studies" },
};

const caseStudies = [
  {
    organization: "Krakul",
    client: "Kristjan Tozen",
    role: "CEO, Krakul, Estonia\u2019s leading product development consultancy",
    challenge:
      "Redefining value proposition in a service and consulting business to better position in the market.",
    approach:
      "Redefined value proposition, improved team agility, developed a better fee system, and focused sales pitches for higher impact.",
    result:
      "Transformed from an engineering services provider to a technology partner for clients.",
    quote:
      "Hanno is... something else. His unique charisma, deep industry knowledge, no-bullshit mentality, and endless analogies & idioms guides you towards the right solution without giving you an answer straight away. True partner that any enterprise would benefit from \u2014 does it with you not for you, which has a larger ROI in the long run. He helped us at Krakul to redefine our value proposition. 10/10 would recommend!",
  },
  {
    organization: "Georg Ots Tallinn Music College",
    client: "Ivo Lille",
    role: "Head Master, Georg Ots Tallinn Music College",
    challenge:
      "Needed a new strategy to move to a more student-outcome focused organization.",
    approach:
      "Strategic focus alignment and organizational direction change, enabling rapid cultural and operational transformation.",
    result:
      "Unprecedented speed of change, new services and international opportunities, now serving as an exemplar to peer institutions.",
    quote:
      "The Georg Ots Tallinn Music College needed to set a new strategy to move to a more student outcome focused organisation. Hanno helped us to agree on a strategic focus and to turn our organisation in a new direction in record time. The positive changes that I see in the behaviors and attitudes of our people have taken root and have led to a host of new services and international opportunities. The school has been able to conduct changes at an unprecedented speed and is currently serving as an exemplar to others.",
  },
  {
    organization: "Net Group",
    client: "Priit Kongo",
    role: "Founder, Net Group",
    challenge:
      "Moving up the value chain to deliver greater impact and improve business outcomes.",
    approach:
      "End-to-end transformation across strategy, marketing, sales, and delivery to reposition in the market.",
    result:
      "Markedly improved profitability and revenue, deeper customer relationships, expanded to more countries and industries.",
    quote:
      "As a result of our cooperation we have markedly improved our profitability, revenue and moved further up the value chain. Changes in our strategy, marketing, sales and delivery have resulted in both significantly improved customer outcomes and employee satisfaction. We now have deeper relationships with our customers and are making a bigger impact on their bottom lines in more countries and industries.",
  },
  {
    organization: "Tallinna J\u00e4\u00e4tmete Taaskasutuskeskus",
    client: "Regina Raukas",
    role: "Chairman of the Executive Board, Tallinna J\u00e4\u00e4tmete Taaskasutuskeskus AS",
    challenge:
      "Needed to arrive at the core strategic challenge quickly and agree on a direction.",
    approach:
      "Environmental mapping, scenario planning, and threat assessment to rapidly surface the most critical strategic issues.",
    result:
      "Core insights identified in record time, alternative courses of action agreed upon for further development.",
    quote:
      "Hanno helped us to arrive at the core challenge in our strategy very quickly and was able to lead us to our core insights rapidly. He helped map our current environment, possible strategic scenarios and threats. We agreed on alternative courses of action and further directions to develop in more detail. His insights and perspective were valuable in getting us to this point in record time.",
  },
  {
    organization: "Begin.eu",
    client: "Mikko Prii",
    role: "Founder and CEO, Begin.eu",
    challenge:
      "Needed a transformative strategic approach to unlock the organization\u2019s full potential.",
    approach:
      "Strategic Turnaround Blueprint with personalized attention and deep understanding of the organization\u2019s unique challenges.",
    result:
      "Profound changes in strategic approach with measurable business results.",
    quote:
      "Partnering with Hanno and his team for the Strategic Turnaround Blueprint was a game-changer for our organization. In just a short period, we saw profound changes in our strategic approach, which translated into measurable business results. The level of personalization and attention to detail in understanding our unique challenges was exceptional. This isn\u2019t just another consulting service; it\u2019s a transformative experience that redefines the way you look at your business and its potential. If you\u2019re on the fence about this, I urge you to take the leap \u2014 it\u2019s an investment in your organization\u2019s future that pays off manifold.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <header>
        <nav
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
          aria-label="Main navigation"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight"
              style={{ color: "var(--navy)" }}
            >
              JARVET
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/#services"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                About
              </Link>
              <Link
                href="/updates"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Updates
              </Link>
              <Link
                href="/case-studies"
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--navy)" }}
              >
                Case Studies
              </Link>
              <Link
                href="/#contact"
                className="text-sm font-semibold px-5 py-2.5 rounded-md text-white transition-colors bg-[var(--navy)] hover:bg-[var(--navy-light)]"
              >
                Book a Free Session
              </Link>
            </div>
            <MobileMenu
              links={[
                { href: "/#services", label: "Services", isLink: true },
                { href: "/#about", label: "About", isLink: true },
                { href: "/updates", label: "Updates", isLink: true },
                { href: "/case-studies", label: "Case Studies", isLink: true },
              ]}
              ctaHref="/#contact"
              ctaLabel="Book a Free Session"
            />
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-24">
        {/* Page Header */}
        <section className="max-w-6xl mx-auto px-6 mb-20">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Case Studies
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Client Success Stories
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Strategic partnerships that have helped leaders transform their
            organizations, unlock new opportunities, and achieve measurable
            results.
          </p>
        </section>

        {/* Case Study Cards */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <article
                key={study.organization}
                className="rounded-lg border border-gray-100 bg-white overflow-hidden"
              >
                {/* Card Header */}
                <div
                  className="px-8 py-6"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
                  }}
                >
                  <h2 className="text-2xl font-bold text-white">
                    {study.organization}
                  </h2>
                  <p className="text-gray-300 text-sm mt-1">
                    {study.client} &mdash; {study.role}
                  </p>
                </div>

                {/* Challenge / Approach / Result */}
                <div className="grid md:grid-cols-3 gap-0 md:gap-0">
                  {[
                    { label: "Challenge", text: study.challenge },
                    { label: "Approach", text: study.approach },
                    { label: "Result", text: study.result },
                  ].map((section) => (
                    <div
                      key={section.label}
                      className="px-8 py-6 border-b md:border-b-0 md:border-r border-gray-100 last:border-0"
                    >
                      <p
                        className="text-xs font-semibold tracking-widest uppercase mb-2"
                        style={{ color: "var(--gold)" }}
                      >
                        {section.label}
                      </p>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {section.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <div
                  className="px-8 py-6 border-t border-gray-100"
                  style={{ backgroundColor: "var(--light)" }}
                >
                  <div className="flex gap-4">
                    <div
                      className="shrink-0 mt-1"
                      style={{ color: "var(--gold)" }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 leading-relaxed italic text-sm">
                        &ldquo;{study.quote}&rdquo;
                      </p>
                      <p
                        className="font-semibold text-sm mt-3"
                        style={{ color: "var(--navy)" }}
                      >
                        {study.client}
                      </p>
                      <p className="text-xs text-gray-400">{study.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="mt-24 py-24"
          style={{
            background:
              "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Book a free 30-minute strategy session with Hanno. Discuss your
              specific challenges, receive expert insights, and learn how the
              Strategic Turnaround Blueprint can work for you.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-10 py-4 rounded-md text-lg font-semibold transition-colors bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]"
            >
              Book a Free Session
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-8 border-t border-gray-100 bg-white"
        aria-label="Site footer"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Jarvet Consulting. All rights
            reserved.
          </p>
          <nav aria-label="Footer navigation">
            <div className="flex items-center gap-6">
              <Link
                href="/#services"
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#about"
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/case-studies"
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Case Studies
              </Link>
              <Link
                href="/#contact"
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Contact
              </Link>
              <a
                href="https://www.linkedin.com/in/hannojarvet/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </>
  );
}

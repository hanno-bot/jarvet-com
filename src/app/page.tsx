import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);
  return (
    <>
      {/* Navigation */}
      <header>
        <nav
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100"
          aria-label="Main navigation"
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" className="text-xl font-bold tracking-tight" style={{ color: "var(--navy)" }}>
              JARVET
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#what-you-get" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                What You Get
              </a>
              <a href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Testimonials
              </a>
              <Link href="/updates" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Updates
              </Link>
              <a
                href="#contact"
                className="text-sm font-semibold px-5 py-2.5 rounded-md text-white transition-colors bg-[var(--navy)] hover:bg-[var(--navy-light)]"
              >
                Book a Free Session
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section
          aria-label="Introduction"
          className="min-h-screen flex items-center pt-20"
          style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)" }}
        >
          <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
            <div className="max-w-3xl">
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-6"
                style={{ color: "var(--gold)" }}
              >
                Strategic Consulting for Modern Leaders
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Turning Challenges
                <br />
                into Opportunities.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                I offer bespoke strategic consulting, specializing in rapid
                turnarounds for businesses facing today&apos;s fast-paced market
                changes. Utilizing innovative methods like Wardley Mapping, I equip
                leaders with tailored strategies for immediate impact and long-term
                success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-md text-base font-semibold transition-colors bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]"
                >
                  Book a Free 30-Minute Strategy Session
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
        <section id="services" aria-label="Services" className="py-24 md:py-32 bg-white">
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
              Ideal for CEOs, CTOs, founders, and executives aiming to stay ahead
              of the curve and drive meaningful change.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Customized Strategic Solutions",
                  description:
                    "Tailoring strategies specifically to your organization's unique needs and goals ensures more effective and impactful outcomes, directly addressing your specific challenges and leveraging your unique strengths.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
                    </svg>
                  ),
                },
                {
                  title: "Rapid Adaptation to Market Changes",
                  description:
                    "Our approach enables businesses to swiftly adjust and respond to the fast-paced, ever-changing market conditions, keeping you competitive and ahead of industry shifts.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                  ),
                },
                {
                  title: "Enhanced Decision-Making",
                  description:
                    "Utilizing advanced tools like Wardley Mapping, we provide deep insights and clarity, empowering leaders to make more informed and strategic decisions.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                    </svg>
                  ),
                },
                {
                  title: "Long-Term Success and Growth",
                  description:
                    "Beyond immediate results, our service is geared towards building a solid foundation for sustained growth and success, positioning your organization for future opportunities.",
                  icon: (
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                  ),
                },
              ].map((service) => (
                <article
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
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section id="what-you-get" aria-label="What you get" className="py-24 md:py-32" style={{ backgroundColor: "var(--light)" }}>
          <div className="max-w-6xl mx-auto px-6">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              What You Get
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>
              The Strategic Turnaround Blueprint
            </h2>
            <p className="text-lg text-gray-500 mb-16 max-w-2xl">
              A comprehensive, customized strategy engagement designed to give you
              the insights, tools, and confidence to navigate today&apos;s dynamic
              business landscape.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  number: "01",
                  title: "A Personalized Blueprint",
                  description:
                    "Receive a custom-crafted Strategic Turnaround Blueprint, meticulously tailored to meet the unique needs and aspirations of your organization.",
                },
                {
                  number: "02",
                  title: "Interactive Workshops",
                  description:
                    "Engage in three 90-minute intensive workshops, where we collaborate to map out your current value stream and capabilities, providing a hands-on, immersive experience.",
                },
                {
                  number: "03",
                  title: "Exclusive Tools and Resources",
                  description:
                    "Gain access to our suite of exclusive tools and resources, including the innovative Wardley Mapping techniques, empowering you with cutting-edge strategic planning tools.",
                },
                {
                  number: "04",
                  title: "Customized Strategic Report",
                  description:
                    "Obtain a detailed report that outlines your organization's strategic situational awareness, complete with actionable steps for improvement, ensuring you have a clear path forward.",
                },
              ].map((item) => (
                <article
                  key={item.number}
                  className="flex gap-6 p-8 rounded-lg bg-white border border-gray-100"
                >
                  <span
                    className="text-3xl font-bold shrink-0"
                    style={{ color: "var(--gold)" }}
                    aria-hidden="true"
                  >
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "var(--navy)" }}>
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" aria-label="About Hanno Jarvet" className="py-24 md:py-32 bg-white">
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
                    I offer bespoke strategic consulting, specializing in rapid
                    turnarounds for businesses facing today&apos;s fast-paced market
                    changes. Utilizing innovative methods like Wardley Mapping, I
                    equip leaders with tailored strategies for immediate impact and
                    long-term success in a dynamic business environment.
                  </p>
                  <p>
                    My approach is straightforward: understand the business deeply,
                    identify the highest-leverage opportunities, and build a clear
                    path to capture them. I believe the best strategies are ones
                    that get executed — and I stay engaged through implementation
                    to ensure that happens.
                  </p>
                  <p>
                    My service is ideal for CEOs, CTOs, founders, and executives
                    aiming to stay ahead of the curve and drive meaningful change.
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
                  role="img"
                  aria-label="Hanno Jarvet, Strategic Consultant"
                >
                  <div className="text-center pb-8">
                    <div
                      className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold"
                      style={{ backgroundColor: "var(--gold)", color: "var(--navy)" }}
                      aria-hidden="true"
                    >
                      HJ
                    </div>
                    <p className="text-white font-semibold text-lg">Hanno Jarvet</p>
                    <p className="text-gray-400 text-sm">Strategic Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" aria-label="Client testimonials" className="py-24 md:py-32" style={{ backgroundColor: "var(--light)" }}>
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
                    "Hanno helped us to arrive at the core challenge in our strategy very quickly and was able to lead us to our core insights rapidly. He helped map our current environment, possible strategic scenarios and threats. We agreed on alternative courses of action and further directions to develop in more detail. His insights and perspective were valuable in getting us to this point in record time.",
                  name: "Regina Raukas",
                  role: "Chairman of the Executive Board, Tallinna Jaatmete Taaskasutuskeskus AS",
                },
                {
                  quote:
                    "Hanno is... something else. His unique charisma, deep industry knowledge, no-bullshit mentality, and endless analogies & idioms guides you towards the right solution without giving you an answer straight away. True partner that any enterprise would benefit from — does it with you not for you, which has a larger ROI in the long run. He helped us at Krakul to redefine our value proposition. 10/10 would recommend!",
                  name: "Kristjan Tozen",
                  role: "CEO, Krakul, Estonia's leading product development consultancy",
                },
                {
                  quote:
                    "The Georg Ots Tallinn Music College needed to set a new strategy to move to a more student outcome focused organisation. Hanno helped us to agree on a strategic focus and to turn our organisation in a new direction in record time. The positive changes that I see in the behaviors and attitudes of our people have taken root and have led to a host of new services and international opportunities. The school has been able to conduct changes at an unprecedented speed and is currently serving as an exemplar to others.",
                  name: "Ivo Lille",
                  role: "Head Master, Georg Ots Tallinn Music College",
                },
                {
                  quote:
                    "As a result of our cooperation we have markedly improved our profitability, revenue and moved further up the value chain. Changes in our strategy, marketing, sales and delivery have resulted in both significantly improved customer outcomes and employee satisfaction. We now have deeper relationships with our customers and are making a bigger impact on their bottom lines in more countries and industries.",
                  name: "Priit Kongo",
                  role: "Founder, Net Group",
                },
              ].map((testimonial, i) => (
                <blockquote
                  key={i}
                  className="p-8 rounded-lg border border-gray-100 bg-white"
                >
                  <div className="mb-6" style={{ color: "var(--gold)" }}>
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer>
                    <p className="font-semibold" style={{ color: "var(--navy)" }}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </footer>
                </blockquote>
              ))}
            </div>

            {/* Featured Testimonial */}
            <blockquote
              className="mt-8 p-10 rounded-lg"
              style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%)" }}
            >
              <div className="mb-6" style={{ color: "var(--gold)" }}>
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg italic max-w-4xl">
                &ldquo;Partnering with Hanno and his team for the Strategic Turnaround
                Blueprint was a game-changer for our organization. In just a short
                period, we saw profound changes in our strategic approach, which
                translated into measurable business results. The level of
                personalization and attention to detail in understanding our unique
                challenges was exceptional. This isn&apos;t just another consulting
                service; it&apos;s a transformative experience that redefines the way you
                look at your business and its potential. If you&apos;re on the fence
                about this, I urge you to take the leap — it&apos;s an investment in
                your organization&apos;s future that pays off manifold.&rdquo;
              </p>
              <footer>
                <p className="text-white font-semibold">Mikko Prii</p>
                <p className="text-gray-400 text-sm">Founder and CEO, Begin.eu</p>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Latest Updates Section */}
        {recentPosts.length > 0 && (
          <section aria-label="Latest updates" className="py-24 md:py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6">
              <p
                className="text-sm font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--gold)" }}
              >
                Latest Updates
              </p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "var(--navy)" }}>
                Insights &amp; Updates
              </h2>
              <p className="text-lg text-gray-500 mb-16 max-w-2xl">
                Thoughts on strategy, leadership, and turning challenges into opportunities.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {recentPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/updates/${post.slug}`}
                    className="group p-8 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 block"
                  >
                    <time className="text-sm text-gray-400" dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h3
                      className="text-xl font-bold mt-2 mb-3 group-hover:underline"
                      style={{ color: "var(--navy)" }}
                    >
                      {post.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">{post.summary}</p>
                  </Link>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/updates"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-md text-sm font-semibold transition-colors border border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  style={{ color: "var(--navy)" }}
                >
                  View All Updates
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section id="faq" aria-label="Frequently asked questions" className="py-24 md:py-32 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-4"
              style={{ color: "var(--gold)" }}
            >
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-16" style={{ color: "var(--navy)" }}>
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {[
                {
                  question: "What exactly does the Strategic Turnaround Blueprint involve?",
                  answer:
                    "The Strategic Turnaround Blueprint is a comprehensive, customized strategy plan. It involves analyzing your current business state, identifying key areas for improvement, and developing a tailored strategy using innovative tools like Wardley Mapping. The blueprint focuses on aligning your strategic goals with market realities for effective decision-making and sustainable growth.",
                },
                {
                  question: "How is this service different from traditional business consulting?",
                  answer:
                    "Unlike traditional consulting, which often relies on generic, one-size-fits-all solutions, our service is highly personalized and adaptive. We focus on rapid, agile strategy development that's specifically tailored to your business's unique needs and challenges. Our use of advanced tools like Wardley Mapping also sets us apart, providing deeper insights and more actionable strategies.",
                },
                {
                  question: "How much time will this require from me and my team?",
                  answer:
                    "We value your time and have designed our services to be as efficient as possible. The initial blueprint process involves three 90-minute workshops, along with some additional time for data gathering and discussions. We aim to minimize disruption to your daily operations while maximizing the value and impact of our service.",
                },
                {
                  question: "Why should I book a call with Hanno?",
                  answer:
                    "Booking a call is a great opportunity to discuss your specific challenges and goals directly with an expert. It's a chance to receive initial insights and understand how the Strategic Turnaround Blueprint can be tailored to your needs. This call is a no-obligation, high-value opportunity to explore how we can help transform your organization's strategy for lasting success.",
                },
              ].map((faq, i) => (
                <article key={i} className="border-b border-gray-100 pb-8">
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--navy)" }}>
                    {faq.question}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA Section */}
        <section
          id="contact"
          aria-label="Book a consultation"
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
              Transform Your Strategy with Expert Insights
            </h2>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Book a personalized, free 30-minute strategy session with Hanno.
              Discuss your specific challenges, receive expert insights tailored to
              your unique situation, and learn exactly how the Strategic Turnaround
              Blueprint can work for you.
            </p>
            <p className="text-gray-400 mb-10 leading-relaxed">
              No obligation — just a focused conversation about your organization&apos;s future.
            </p>
            <a
              href="mailto:hanno@jarvet.com"
              className="inline-flex items-center justify-center px-10 py-4 rounded-md text-lg font-semibold transition-colors bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]"
            >
              Book Your Free 30-Minute Strategy Session
            </a>
            <p className="text-gray-400 mt-6 text-sm">
              Or reach out directly at{" "}
              <a href="mailto:hanno@jarvet.com" className="underline hover:text-white transition-colors">
                hanno@jarvet.com
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-100 bg-white" aria-label="Site footer">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Jarvet Consulting. All rights reserved.
          </p>
          <nav aria-label="Footer navigation">
            <div className="flex items-center gap-6">
              <a href="#services" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                Services
              </a>
              <a href="#about" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                About
              </a>
              <a href="#testimonials" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                Contact
              </a>
              <a
                href="https://www.linkedin.com/in/hannojarvet/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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

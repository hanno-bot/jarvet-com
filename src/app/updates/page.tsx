import { getAllPosts } from "@/lib/posts";
import type { Metadata } from "next";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

export const metadata: Metadata = {
  title: "Updates",
  description:
    "Insights on strategy, leadership, and organizational transformation from Hanno Jarvet.",
  alternates: { canonical: "https://jarvet.com/updates" },
};

export default function UpdatesPage() {
  const posts = getAllPosts();

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
                className="text-sm font-medium transition-colors"
                style={{ color: "var(--navy)" }}
              >
                Updates
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
        <div className="max-w-3xl mx-auto px-6">
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-4"
            style={{ color: "var(--gold)" }}
          >
            Updates
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "var(--navy)" }}
          >
            Insights &amp; Updates
          </h1>
          <p className="text-lg text-gray-500 mb-16 max-w-2xl">
            Thoughts on strategy, leadership, and turning challenges into
            opportunities.
          </p>

          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/updates/${post.slug}`} className="block">
                  <time className="text-sm text-gray-400" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2
                    className="text-xl font-bold mt-1 mb-2 group-hover:underline"
                    style={{ color: "var(--navy)" }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed">
                    {post.summary}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2.5 py-1 rounded-full"
                          style={{
                            backgroundColor: "var(--light)",
                            color: "var(--slate)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

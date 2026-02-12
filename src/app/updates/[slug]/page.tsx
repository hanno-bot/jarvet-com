import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MobileMenu from "@/components/MobileMenu";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: meta.title,
      description: meta.summary,
      alternates: { canonical: `https://jarvet.com/updates/${slug}` },
      openGraph: {
        title: meta.title,
        description: meta.summary,
        type: "article",
        publishedTime: meta.date,
        authors: ["Hanno Jarvet"],
        url: `https://jarvet.com/updates/${slug}`,
      },
    };
  } catch {
    return {};
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.summary,
    datePublished: meta.date,
    author: {
      "@type": "Person",
      name: "Hanno Jarvet",
      url: "https://jarvet.com",
    },
    publisher: {
      "@type": "Person",
      name: "Hanno Jarvet",
      url: "https://jarvet.com",
    },
    url: `https://jarvet.com/updates/${slug}`,
    keywords: meta.tags,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jarvet.com/updates/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
        <article className="max-w-3xl mx-auto px-6">
          <Link
            href="/updates"
            className="text-sm font-medium text-gray-400 hover:text-gray-600 transition-colors mb-8 inline-block"
          >
            &larr; All Updates
          </Link>

          <header className="mb-12">
            <time className="text-sm text-gray-400" dateTime={meta.date}>
              {new Date(meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1
              className="text-3xl md:text-4xl font-bold mt-2 mb-4"
              style={{ color: "var(--navy)" }}
            >
              {meta.title}
            </h1>
            {meta.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {meta.tags.map((tag: string) => (
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
          </header>

          <div className="prose prose-lg prose-slate max-w-none prose-headings:text-[var(--navy)] prose-a:text-[var(--navy)] prose-a:underline prose-strong:text-[var(--navy)]">
            <MDXRemote source={content} />
          </div>
        </article>
      </main>
    </>
  );
}

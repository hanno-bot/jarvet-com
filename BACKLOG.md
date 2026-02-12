# Backlog

Shared task list for all Claude agents (CLI and Desktop). Agents should check this file before starting work and pick the highest-priority unfinished task.

## Priority Levels
- **P0** — Critical / blocking
- **P1** — High priority
- **P2** — Medium priority
- **P3** — Nice to have

## Format
- `[ ]` — Not started
- `[~]` — In progress (note which agent/session is working on it)
- `[x]` — Done

---

## Tasks

### P0 — Critical: SEO & LLM Discoverability

- [x] **Metadata & Open Graph** — Expand `layout.tsx` metadata: add Open Graph (title, description, image, url, type), Twitter card, canonical URL, keywords, author, and `metadataBase`
- [x] **Structured data (JSON-LD)** — Person, ProfessionalService, WebSite, FAQPage schema in layout.tsx
- [x] **Semantic HTML** — `<header>`, `<main>`, `<footer>` landmarks, `<article>` for cards, `<blockquote>` for testimonials, `aria-label` on sections/nav, `aria-hidden` on decorative SVGs
- [x] **robots.txt** — `src/app/robots.ts` allowing all crawlers including GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended, cohere-ai
- [x] **sitemap.xml** — `src/app/sitemap.ts` with homepage entry
- [x] **llms.txt** — `/llms.txt` route describing who Hanno is, services, contact info for LLM crawlers
- [x] **Favicon & OG image** — SVG favicon via `icon.svg`, dynamic OG image via `opengraph-image.tsx` (Next.js file conventions)
- [x] **Canonical URL & `metadataBase`** — Set `metadataBase` to `https://jarvet.com`, canonical in alternates

### P1 — High Priority: Blog / Updates

- [x] **Blog infrastructure** — @next/mdx, gray-matter, next-mdx-remote, MDX config in next.config.ts. Posts in `src/content/posts/` with YAML frontmatter
- [x] **Blog listing page** — `src/app/updates/page.tsx` with date sorting, tags, SEO metadata
- [x] **Blog post page** — `src/app/updates/[slug]/page.tsx` with generateStaticParams, generateMetadata, MDXRemote rendering
- [x] **Blog post styling** — @tailwindcss/typography for prose styling
- [x] **Blog JSON-LD** — BlogPosting structured data on each post page
- [x] **Blog in sitemap** — sitemap.ts updated with blog post URLs and lastModified from frontmatter
- [x] **Blog RSS feed** — `/updates/feed.xml` route handler
- [x] **Nav + homepage link** — "Updates" in nav, "Latest Updates" section on homepage with recent posts
- [x] **First post** — "Turning Strategy Into Action" seed post

### P1 — High Priority: Other

- [x] Replace placeholder testimonials with real client quotes — Done (CLI agent)
- [x] Deploy to Vercel and configure custom domain — Done (CLI agent, deployed to jarvet.com)
- [x] Add alt text to all visual elements (SVG icons, profile placeholder) — aria-hidden on decorative SVGs, aria-label on profile placeholder

### P2 — Medium Priority

- [x] Add analytics (Vercel Analytics) — @vercel/analytics installed, Analytics component in layout.tsx
- [x] Improve mobile responsiveness and test on various screen sizes — MobileMenu component with hamburger toggle added to all pages
- [x] Add a contact form (e.g., with Formspree or Supabase edge function) — ContactForm component with Formspree integration
- [x] Add page transitions / scroll animations — FadeIn component with IntersectionObserver for scroll-triggered animations
- [x] Add LinkedIn/social links to footer — LinkedIn icon added to footer nav

### P3 — Nice to Have

- [x] Add dark/light mode toggle — ThemeToggle component with localStorage persistence, system preference detection, FOUC prevention script
- [x] Add case studies page — `/case-studies` page with all 5 client success stories

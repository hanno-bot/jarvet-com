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

- [ ] **Blog infrastructure** — Install `@next/mdx` and `gray-matter`, configure `next.config.ts` for MDX support. Posts live in `src/content/posts/` as `.mdx` files with YAML frontmatter (title, date, summary, tags)
- [ ] **Blog listing page** — Create `src/app/updates/page.tsx` showing all posts sorted by date, with title, date, summary, and tags
- [ ] **Blog post page** — Create `src/app/updates/[slug]/page.tsx` with dynamic routing, `generateStaticParams`, and `generateMetadata` for per-post SEO (OG title, description, canonical)
- [ ] **Blog post styling** — Add Tailwind Typography plugin (`@tailwindcss/typography`) for clean prose styling in posts
- [ ] **Blog JSON-LD** — Add `BlogPosting` structured data to each post page (headline, datePublished, author, description)
- [ ] **Blog in sitemap** — Update `sitemap.ts` to include all blog post URLs with `lastModified` from frontmatter dates
- [ ] **Blog RSS feed** — Add `/updates/feed.xml` route for RSS subscribers and LLM crawlers
- [ ] **Nav + homepage link** — Add "Updates" link to site nav and an "Latest Updates" section on the homepage showing the 2–3 most recent posts
- [ ] **First post** — Write a seed post (e.g., "Why I'm writing here") so the blog isn't empty at launch

### P1 — High Priority: Other

- [x] Replace placeholder testimonials with real client quotes — Done (CLI agent)
- [x] Deploy to Vercel and configure custom domain — Done (CLI agent, deployed to jarvet.com)
- [x] Add alt text to all visual elements (SVG icons, profile placeholder) — aria-hidden on decorative SVGs, aria-label on profile placeholder

### P2 — Medium Priority

- [ ] Add analytics (Vercel Analytics or similar)
- [ ] Improve mobile responsiveness and test on various screen sizes
- [ ] Add a contact form (e.g., with Formspree or Supabase edge function)
- [ ] Add page transitions / scroll animations
- [ ] Add LinkedIn/social links to footer

### P3 — Nice to Have

- [ ] Add dark/light mode toggle
- [ ] Add case studies page

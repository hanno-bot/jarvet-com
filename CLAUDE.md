# Claude Agent Instructions

## Project
jarvet-com — Professional portfolio site for Hanno Jarvet (business strategy consultant). Built with Next.js 16, React 19, Tailwind CSS 4, TypeScript.

## Shared Backlog
**Before starting work, always read `BACKLOG.md`** in the repo root. This is the single source of truth for task prioritization across all Claude sessions (CLI and Desktop).

### Backlog Rules
1. Pick the highest-priority unfinished task (`[ ]`) unless the user directs otherwise
2. Mark a task `[~]` with a note when you start it (e.g., `[~] Deploy to Vercel — CLI agent working`)
3. Mark it `[x]` when done
4. Add new tasks the user requests to the backlog with an appropriate priority
5. Don't work on tasks another agent has marked `[~]` — pick the next one

## Code Conventions
- Source code is in `src/app/`
- Use Tailwind utility classes for styling
- CSS variables are defined in `globals.css` (navy, gold, slate, light palette)
- Keep components in `src/app/` unless the project grows enough to warrant `src/components/`

## Deployment
- Target: Vercel
- Build: `npm run build`
- Dev: `npm run dev --turbopack`

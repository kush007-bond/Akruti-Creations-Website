# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite)
npm run build     # TypeScript check + Vite build
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

## Architecture

This is a **React 19 + Vite + TypeScript** SPA for Akruti Creations, a design and print studio. It uses **React Router v7** for client-side routing and **Framer Motion** for animations.

### Routing (src/App.tsx)
Pages are lazy-loaded via `React.lazy` + `Suspense`. Routes: `/`, `/projects`, `/projects/:id`, `/services`, `/contact`. All routes are wrapped in `<Layout>` which provides Navbar, Footer, CustomCursor, and page-transition animations via `AnimatePresence`.

### Data Layer (src/data/)
All content is static TypeScript — no API calls:
- `projects.ts` — exports `Project[]` with typed interface. Each project has `id`, `title`, `category`, `image`, `description`, `size` (`'small' | 'medium' | 'large'`), optional `gallery[]`, `tags[]`, etc.
- `services.ts` — services content

The `size` field on projects controls the grid column span in the Projects page (large=12col, medium=7col, small=5col).

### Theming (src/index.css + src/components/ThemeToggle.tsx)
- **Tailwind v4** with `@theme` block — custom tokens: `--color-accent` (#E9B741 yellow), `--color-base`, `--color-surface`, `--color-foreground`, `--color-text-muted`
- Theme switching via `data-theme` attribute on `<html>`. Dark is default. State persisted to `localStorage` key `akruti-theme`.
- Use Tailwind classes `bg-base`, `bg-surface`, `text-foreground`, `text-accent`, `text-text-muted` — not hardcoded hex values.
- Headings use `font-heading` (Plus Jakarta Sans), body uses `font-body` (Inter). Both loaded from Google Fonts in `index.html`.
- Custom cursor hides native cursor on `md:` and above — `CustomCursor` component handles this.

### Component Structure
- `src/components/` — shared components (Navbar, Footer, Layout, ThemeToggle, CustomCursor, MagneticButton, Counter, ScrollToTop)
- `src/components/home/` — home page sections (HeroCarousel, Philosophy, Process, Stats, Industries, FeaturedProject, CTA)
- `src/pages/` — page components (Home, Projects, ProjectDetail, Services, Contact)

### Animation Patterns
Framer Motion is used pervasively. Common patterns:
- `whileInView` with `viewport={{ once: false }}` for scroll-triggered animations
- `AnimatePresence` + `motion.div` keyed on `location.pathname` in Layout for page transitions
- `layoutId="nav-underline"` on the active nav indicator for shared layout animation

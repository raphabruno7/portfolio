# raphaelbruno.dev

My personal site and developer portfolio, live at **[raphaelbruno.dev](https://www.raphaelbruno.dev)**.
A statically generated Next.js site: a home page, a projects section, a blog, a
"now" page and an advisory page. Content is MDX under `content/`, rendered at build
time — no backend.

Built on the open-source [`timmyomahony-portfolio`](https://github.com/timmyomahony/timmyomahony-portfolio)
template, adapted and rewritten for my own content and projects.

## Stack

Next.js (App Router) · TypeScript · Tailwind · MDX content · `next-sitemap` ·
deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Content

MDX lives in `content/`:

- `content/posts/` — blog posts
- `content/projects/` — project write-ups
- `content/now/` — the "now" page

Site-wide values (name, links, email) are in `portfolio.config.js`.

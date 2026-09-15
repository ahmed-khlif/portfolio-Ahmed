# Ahmed Khlif — Portfolio

Personal portfolio site for **Ahmed Khlif**, a Software Engineer based in Sfax, Tunisia who builds
AI-powered applications and scalable web & mobile systems.

- **Live**: [ahmedkhlif.me](https://ahmedkhlif.me)
- **Contact**: [khlif.ahmed.dev@gmail.com](mailto:khlif.ahmed.dev@gmail.com) · +216 94 272 455
- **GitHub**: [@ahmed-khlif](https://github.com/ahmed-khlif) · **LinkedIn**: [in/ahmed-khlif](https://www.linkedin.com/in/ahmed-khlif)

---

## What's on the site

| Route | What it shows |
| --- | --- |
| `/` | Hero, headline outcomes, selected work, toolkit, experience, education, certifications, languages |
| `/projects` | All case studies with search + filter by type and focus (12 projects) |
| `/projects/[id]` | Full case study: role, tech stack, headline metrics, description and page breakdowns |
| `/experience` | Timeline of internships and freelance work |
| `/experience/[id]` | Role summary and key achievements per position |
| `/education` | Engineering degree, Master's, Bachelor's |
| `/skills` | Six grouped skill categories with per-technology hover emphasis, plus certifications |
| `/contributions` | Open-source projects maintained on GitHub |
| `/blogs` | Notes (empty by default — add Markdown files to publish) |
| `/contact` | Contact form plus direct channels (email, phone, WhatsApp, LinkedIn, GitHub) |
| `/resume` | Redirects to the CV (`public/CV_Ahmed_Khlif.pdf`) |

## Tech stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [React 19](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: react-hook-form + zod
- **Themes**: next-themes · **Content**: Markdown via gray-matter + remark
- **Email**: nodemailer (SMTP) with a Google Form fallback

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`.

Copy `.env.copy` to `.env.local` and fill in what you need — every variable is optional, see
[Contact form](#contact-form) below.

## Project structure

```
app/
  (root)/            marketing pages (home, projects, experience, education, skills, …)
  api/contact/       contact form endpoint (SMTP → Google Form fallback)
  layout.tsx         fonts, metadata, theme provider
  manifest.ts        PWA manifest
  sitemap.ts         sitemap (includes the blog routes)
components/
  common/            nav, footer, social dock, command menu, page shell
  projects/          project card, filters, case-study description
  experience/        timeline
  skills/            skill groups, certifications, hover styles
  forms/             contact form
config/              ← all personal content lives here
content/blogs/       Markdown posts (empty by default)
information/         site overview + structure notes
lib/                 blog helpers, utils (cn, date formatting)
public/              images, CV, project artwork
```

## Where to edit content

Everything personal is data, not markup — you can update the whole site without touching a component:

| What | File |
| --- | --- |
| Name, role, email, phone, location, availability, CV path | `config/site.ts` |
| Social links (dock + footer) | `config/socials.ts` |
| Work experience | `config/experience.ts` |
| Projects / case studies | `config/projects.ts` |
| Education | `config/education.ts` |
| Certifications | `config/certifications.ts` |
| Skills (name, description, rating, icon) | `config/skills.ts` |
| Open-source contributions | `config/contributions.ts` |
| Page titles, descriptions, metadata | `config/pages.ts` |
| Navigation + footer links | `config/routes.ts` |
| Skill / category unions | `config/constants.ts` |
| Skill pill hover colours | `components/skills/skill-hover.ts` |
| Available icons | `components/common/icons.tsx` |
| Colour palettes | `app/globals.css` |
| Themes exposed in the switcher | `components/common/mode-toggle.tsx` + `app/layout.tsx` |

## Contact form

`/api/contact` tries these in order and returns an explicit error if none are configured:

1. **SMTP (preferred)** — set `SMTP_HOST`, `SMTP_USER`, `SMTP_PASSWORD`
   (optionally `SMTP_PORT`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`). Messages arrive by email with
   the sender set as `Reply-To`.
2. **Google Form fallback** — set `GOOGLE_FORM_LINK` plus the four `GOOGLE_FORM_FIELD_ID_*` entry ids.
3. **Not configured** — responds `503` telling the visitor to email directly, and the form surfaces
   that message instead of failing silently.

## Themes

Seven palettes ship in `app/globals.css` and all seven are selectable from the theme switcher:
light, dark, paper, retro, aurora, synthwave, cyberpunk — plus a `system` option.

## Writing notes

Drop a Markdown file into `content/blogs/` with front matter:

```md
---
title: "Post title"
date: "2026-01-01"
description: "One-line summary."
tags: ["engineering", "ai"]
coverImage: "/blogs/cover.png"
readingTime: 6
featured: true
---

Content here (GFM is supported).
```

The listing page, the post page and the sitemap pick it up automatically. There is a built-in empty
state while the folder is empty.

## Media conventions

- Project artwork: `public/projects/<project-id>/cover.svg` (or `.png` for real screenshots) —
  referenced by `companyLogoImg` in `config/projects.ts`.
- Case-study illustrations: same folder, referenced from `pagesInfoArr`.
- Company logos in the experience timeline: `public/experience/<name>-logo.svg`.
- Portrait: `public/profile-img.jpg`. Social preview: `public/og-image.png`.

## Deployment

Built for [Vercel](https://vercel.com/new). Set `siteConfig.url` in `config/site.ts` to the production
domain before deploying so canonical URLs, Open Graph tags and the sitemap are correct.

## Credits

Built on the open-source [minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio)
template by [Naman Barkiya](https://github.com/namanbarkiya) (MIT). The design system, content, data
layer and components have been substantially reworked for this site.

## License

MIT
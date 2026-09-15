# Project structure

Auto-generated from the repository (excluding `node_modules`, `.next`, `.git` and `.vercel`).

```
.
├── app
│   ├── (root)
│   │   ├── blogs
│   │   │   ├── [slug]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── community
│   │   │   └── route.ts
│   │   ├── contact
│   │   │   └── page.tsx
│   │   ├── contributions
│   │   │   └── page.tsx
│   │   ├── education
│   │   │   └── page.tsx
│   │   ├── experience
│   │   │   ├── [expId]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── projects
│   │   │   ├── [projectId]
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── resume
│   │   │   └── page.tsx
│   │   ├── skills
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── api
│   │   ├── contact
│   │   │   └── route.ts
│   │   └── github-stars
│   │       └── route.ts
│   ├── apple-icon.png
│   ├── favicon.ico
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── manifest.ts
│   └── sitemap.ts
├── assets
│   └── fonts
│       ├── CalSans-SemiBold.ttf
│       ├── CalSans-SemiBold.woff
│       ├── CalSans-SemiBold.woff2
│       ├── Inter-Bold.ttf
│       └── Inter-Regular.ttf
├── components
│   ├── blogs
│   │   └── blog-card.tsx
│   ├── common
│   │   ├── analytics.tsx
│   │   ├── animated-link.tsx
│   │   ├── animated-page-transition.tsx
│   │   ├── animated-section.tsx
│   │   ├── animated-text.tsx
│   │   ├── client-page-wrapper.tsx
│   │   ├── command-menu.tsx
│   │   ├── github-star-badge.tsx
│   │   ├── icons.tsx
│   │   ├── main-nav.tsx
│   │   ├── mobile-nav.tsx
│   │   ├── mode-toggle.tsx
│   │   ├── page-container.tsx
│   │   ├── page-header.tsx
│   │   ├── scroll-animation.tsx
│   │   ├── scroll-controls.tsx
│   │   ├── share-profile-button.tsx
│   │   ├── site-footer.tsx
│   │   ├── social-dock.tsx
│   │   └── theme-provider.tsx
│   ├── contact
│   │   └── github-redirect-card.tsx
│   ├── contributions
│   │   └── contribution-card.tsx
│   ├── education
│   │   └── education-timeline.tsx
│   ├── experience
│   │   ├── experience-card.tsx
│   │   └── timeline.tsx
│   ├── forms
│   │   └── contact-form.tsx
│   ├── modals
│   │   └── custom-modal.tsx
│   ├── projects
│   │   ├── project-card.tsx
│   │   ├── project-description.tsx
│   │   └── project-filters.tsx
│   ├── skills
│   │   ├── certifications.tsx
│   │   ├── rating.tsx
│   │   ├── skill-hover.ts
│   │   └── skills-card.tsx
│   └── ui
│       ├── accordion.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── chip.tsx
│       ├── chip-container.tsx
│       ├── custom-tooltip.tsx
│       ├── dialog.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── modal.tsx
│       ├── responsive-tabs.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── tooltip.tsx
│       └── use-toast.ts
├── config
│   ├── certifications.ts
│   ├── constants.ts
│   ├── contributions.ts
│   ├── education.ts
│   ├── experience.ts
│   ├── pages.ts
│   ├── projects.ts
│   ├── routes.ts
│   ├── site.ts
│   ├── skills.ts
│   └── socials.ts
├── content
│   ├── _archive
│   │   └── blogs
│   │       ├── 3d-card-threejs-blender.md
│   │       ├── aeo-vs-seo-chatgpt-ranking.md
│   │       ├── building-production-ai-chatbot-convot.md
│   │       ├── how-i-got-150-stars-nextjs-portfolio-template.md
│   │       ├── niya-fastapi-starter-template.md
│   │       └── niya-saas-starter-template.md
│   └── blogs
├── hooks
│   ├── use-lock-body.ts
│   └── use-modal-store.ts
├── information
│   ├── overview.md
│   └── structure.md
├── lib
│   ├── blogs.ts
│   └── utils.ts
├── providers
│   ├── animation-provider.tsx
│   └── modal-provider.tsx
├── public
│   ├── blogs
│   │   ├── niya-fastpi.png
│   │   └── star-history-portfolio.svg
│   ├── experience
│   │   ├── builtdesign-logo.png
│   │   ├── djagora-logo.svg
│   │   ├── fablab-logo.svg
│   │   ├── freelance-logo.svg
│   │   ├── keys-logo.png
│   │   ├── muzeai-logo.png
│   │   └── tawer-logo.svg
│   ├── projects
│   │   ├── apex
│   │   │   ├── app_1.webp
│   │   │   ├── app_2.webp
│   │   │   ├── app_3.webp
│   │   │   ├── app_4.webp
│   │   │   ├── app_5.webp
│   │   │   ├── app_6.webp
│   │   │   ├── app_7.webp
│   │   │   ├── db.webp
│   │   │   └── logo.png
│   │   ├── builtdesign
│   │   │   ├── cli_dashboard_1.webp
│   │   │   ├── cli_dashboard_2.webp
│   │   │   ├── cli_dashboard_3.webp
│   │   │   ├── landing_1.webp
│   │   │   ├── landing_2.webp
│   │   │   ├── landing_3.webp
│   │   │   ├── landing_4.webp
│   │   │   ├── landing_5.webp
│   │   │   ├── landing_6.webp
│   │   │   ├── logo.png
│   │   │   └── pdf_opt.webp
│   │   ├── builtdesign-blogs
│   │   │   ├── blog_1.webp
│   │   │   ├── blog_2.webp
│   │   │   ├── blog_3.webp
│   │   │   ├── blog_4.webp
│   │   │   ├── blog_5.webp
│   │   │   └── logo.png
│   │   ├── card
│   │   │   ├── card_1.webp
│   │   │   ├── card_2.webp
│   │   │   ├── card_3.webp
│   │   │   ├── card_4.webp
│   │   │   └── logo.png
│   │   ├── cirql
│   │   │   ├── logo.png
│   │   │   ├── web_1.png
│   │   │   ├── web_2.png
│   │   │   ├── web_3.png
│   │   │   └── web_4.png
│   │   ├── convot
│   │   │   └── logo.png
│   │   ├── devsweeper
│   │   │   ├── cover.svg
│   │   │   └── safety.svg
│   │   ├── fablab-tap
│   │   │   ├── cover.svg
│   │   │   └── tap.svg
│   │   ├── hindi-keyboard
│   │   │   ├── logo.png
│   │   │   ├── web_1.png
│   │   │   ├── web_2.png
│   │   │   └── web_3.png
│   │   ├── idigix
│   │   │   ├── cover.svg
│   │   │   └── search.svg
│   │   ├── invited-plus
│   │   │   └── cover.png
│   │   ├── iris-mlops
│   │   │   ├── cover.svg
│   │   │   └── pipeline.svg
│   │   ├── niya
│   │   │   └── logo.png
│   │   ├── portfolio
│   │   │   └── logo.png
│   │   ├── saleslens-bi
│   │   │   ├── architecture.svg
│   │   │   └── cover.svg
│   │   ├── savora
│   │   │   ├── architecture.svg
│   │   │   └── cover.svg
│   │   ├── smartcare
│   │   │   └── cover.png
│   │   ├── spiralis
│   │   │   └── cover.png
│   │   ├── student-qa
│   │   │   ├── cover.svg
│   │   │   └── pipeline.svg
│   │   ├── supercareer
│   │   │   └── logo.png
│   │   ├── superquotes
│   │   │   ├── app_1.webp
│   │   │   ├── app_2.webp
│   │   │   ├── app_3.webp
│   │   │   ├── app_4.webp
│   │   │   ├── app_5.webp
│   │   │   ├── app_6.webp
│   │   │   ├── app_7.webp
│   │   │   └── logo.png
│   │   ├── tdg-platform
│   │   │   ├── architecture.svg
│   │   │   └── cover.svg
│   │   └── tensho
│   │       └── cover.png
│   ├── apple-icon.png
│   ├── CV_Ahmed_Khlif.pdf
│   ├── icon.svg
│   ├── icon-dark-32x32.png
│   ├── icon-light-32x32.png
│   ├── logo.png
│   ├── next.svg
│   ├── og-image.png
│   ├── placeholder.jpg
│   ├── placeholder.svg
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   ├── profile-img.jpg
│   ├── robots.txt
│   └── vercel.svg
├── .env.copy
├── .env.local
├── .gitignore
├── .prettierrc
├── AGENTS.md
├── CLAUDE.md
├── components.json
├── dev-server.error.log
├── dev-server.log
├── eslint.config.mjs
├── LICENSE
├── next.config.js
├── next-env.d.ts
├── package.json
├── package-lock.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.js
├── postcss.config.mjs
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── tsconfig.tsbuildinfo
```

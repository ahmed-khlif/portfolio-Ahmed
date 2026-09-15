import Link from "next/link";

import { CommandMenu } from "@/components/common/command-menu";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { ScrollControls } from "@/components/common/scroll-controls";
import { SiteFooter } from "@/components/common/site-footer";
import { SocialDock } from "@/components/common/social-dock";
import { routesConfig } from "@/config/routes";

const gustavoAssistiveRow = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/contact", label: "Contact" },
];

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-3 focus:text-sm focus:font-medium focus:shadow-lg"
        id="gustavo-skip-link"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70 md:isolate">
        {/* Quick-access pill row pinned to the top on small phones, so the visitor
            doesn't have to rely on the hamburger drawer to jump between the major
            sections. Hidden on md+ where the desktop nav is visible. */}
        <nav
          className="flex items-center gap-2 border-b border-border/40 bg-muted/40 px-4 py-2 text-xs font-medium text-muted-foreground md:hidden"
          aria-label="Quick links"
        >
          {gustavoAssistiveRow.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded bg-background px-2 py-1 text-[11px] font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center px-4 py-3 sm:px-6 lg:px-8">
          <MainNav items={routesConfig.mainNav}>
            <div className="flex shrink-0 items-center gap-1.5">
              <CommandMenu />
              <ModeToggle />
            </div>
          </MainNav>
        </div>
      </header>

      <main id="main-content" tabIndex={-1} className="container flex-1 outline-none">
        {children}
      </main>

      <SiteFooter />
      <ScrollControls />
      <SocialDock />
    </div>
  );
}

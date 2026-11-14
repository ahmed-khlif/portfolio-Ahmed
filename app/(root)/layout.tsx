import { CommandMenu } from "@/components/common/command-menu";
import { MainNav } from "@/components/common/main-nav";
import { ModeToggle } from "@/components/common/mode-toggle";
import { PortfolioAssistant } from "@/components/common/portfolio-assistant";
import { ScrollControls } from "@/components/common/scroll-controls";
import { SiteFooter } from "@/components/common/site-footer";
import { SocialDock } from "@/components/common/social-dock";
import { routesConfig } from "@/config/routes";

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
      <PortfolioAssistant />
    </div>
  );
}

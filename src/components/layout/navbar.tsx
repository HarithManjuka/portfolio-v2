import Link from "next/link";

import { DesktopNavigation } from "@/components/layout/desktop-navigation";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

import { primaryNavigationAction } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/**
 * Shared floating Navbar.
 *
 * Desktop and mobile interactivity are isolated in Client Components.
 * The intro animation may control visibility via the site-header class.
 */
export function Navbar() {
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 pt-4 sm:pt-5">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="flex min-h-18 items-center justify-between gap-3 rounded-full border border-border bg-surface/85 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-6"
        >
          <Link
            href="/"
            aria-label={`${siteConfig.brandName} — Homepage`}
            className="group flex min-w-0 shrink-0 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent text-sm font-extrabold tracking-tight text-accent-foreground transition-transform duration-200 group-hover:scale-105">
              {siteConfig.initials}
            </span>

            <span className="flex min-w-0 flex-col">
              <span className="truncate text-sm leading-tight font-semibold tracking-tight text-foreground sm:text-base">
                {siteConfig.brandName}
              </span>

              <span className="mt-1 text-[10px] font-medium tracking-[0.14em] text-muted uppercase">
                {siteConfig.role}
              </span>
            </span>
          </Link>

          <DesktopNavigation />

          <div className="flex shrink-0 items-center gap-2">
            <div className="hidden xl:block">
              <ThemeToggle />
            </div>

            <div className="hidden xl:block">
              <ButtonLink
                href={primaryNavigationAction.href}
                variant="primary"
                size="sm"
                className="rounded-full"
              >
                {primaryNavigationAction.label}
              </ButtonLink>
            </div>

            <MobileMenu />
          </div>
        </nav>
      </Container>
    </header>
  );
}

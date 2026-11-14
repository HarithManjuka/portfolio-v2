import Link from "next/link";

import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

import { navigationItems, primaryNavigationAction } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/**
 * Shared navigation for the portfolio.
 *
 * Server Component:
 * - Brand and links are server-rendered.
 * - ThemeToggle handles its own client-side behavior.
 *
 * Mobile overlay navigation will be added separately.
 */
export function Navbar() {
  const desktopNavigation = navigationItems.filter((item) => item.id !== "contact");

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-5">
      <Container>
        <nav
          aria-label="Primary navigation"
          className="flex min-h-18 items-center justify-between gap-4 rounded-full border border-border bg-surface/85 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-6"
        >
          {/* Brand identity */}
          <Link
            href="/"
            aria-label={`${siteConfig.brandName} — Homepage`}
            className="group flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-sm font-extrabold tracking-tight text-accent-foreground transition-transform duration-200 group-hover:scale-105">
              {siteConfig.initials}
            </span>

            <span className="flex flex-col">
              <span className="text-sm leading-tight font-semibold tracking-tight text-foreground sm:text-base">
                {siteConfig.brandName}
              </span>

              <span className="mt-1 text-[10px] font-medium tracking-[0.14em] text-muted uppercase">
                {siteConfig.role}
              </span>
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 xl:flex">
            {desktopNavigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors duration-200 hover:bg-surface-elevated hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />

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
          </div>
        </nav>
      </Container>
    </header>
  );
}

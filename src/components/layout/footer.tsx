import Link from "next/link";

import { Container } from "@/components/ui/container";
import { navigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface text-foreground">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent font-bold text-accent-foreground">
                {siteConfig.initials}
              </span>

              <span className="text-lg font-semibold">{siteConfig.brandName}</span>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-muted">{siteConfig.description}</p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h2 className="mb-5 text-sm font-semibold">Quick Links</h2>

            <ul className="grid grid-cols-2 gap-x-5 gap-y-3">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Professional profile */}
          <div className="space-y-5">
            <h2 className="text-sm font-semibold">Connect</h2>

            <a
              href="https://github.com/HarithManjuka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              GitHub Profile
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </a>

            <p className="text-sm text-muted">Explore my projects and software engineering work.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-border py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.brandName}. All rights reserved.
          </p>

          <Link
            href="/#main-content"
            className="transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            Back to top ↑
          </Link>
        </div>
      </Container>
    </footer>
  );
}

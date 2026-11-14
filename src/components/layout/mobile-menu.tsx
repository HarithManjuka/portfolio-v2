"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import { navigationItems, primaryNavigationAction } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { useActiveSection } from "@/hooks/use-active-section";

export function MobileMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  const menuItems = navigationItems.filter((item) => item.id !== "contact");

  function openMenu() {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
      setIsOpen(true);
    }
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  // Ensure background scrolling is locked
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // If the screen becomes desktop-sized, close the mobile menu.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");

    function handleBreakpointChange() {
      if (mediaQuery.matches) {
        dialogRef.current?.close();
      }
    }

    mediaQuery.addEventListener("change", handleBreakpointChange);

    return () => {
      mediaQuery.removeEventListener("change", handleBreakpointChange);
    };
  }, []);

  return (
    <div className="xl:hidden">
      {/* Hamburger trigger */}
      <button
        type="button"
        onClick={openMenu}
        aria-label="Open navigation menu"
        aria-haspopup="dialog"
        aria-controls="mobile-navigation-dialog"
        aria-expanded={isOpen}
        className="inline-flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border border-border bg-surface text-foreground transition-colors hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span className="h-0.5 w-5 rounded-full bg-current" />
        <span className="h-0.5 w-5 rounded-full bg-current" />
        <span className="h-0.5 w-5 rounded-full bg-current" />
      </button>

      {/* Full-screen modal navigation */}
      <dialog
        ref={dialogRef}
        id="mobile-navigation-dialog"
        aria-labelledby="mobile-navigation-title"
        onClose={() => setIsOpen(false)}
        className="mobile-navigation fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none flex-col bg-background p-0 text-foreground"
      >
        {/* Mobile menu header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-sm font-extrabold text-accent-foreground">
              {siteConfig.initials}
            </span>

            <div className="flex flex-col">
              <span id="mobile-navigation-title" className="text-sm font-semibold">
                {siteConfig.brandName}
              </span>

              <span className="text-xs text-muted">Navigation</span>
            </div>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            autoFocus
            aria-label="Close navigation menu"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-border bg-surface text-xl transition-colors hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        {/* Navigation content */}
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 py-8">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex w-full max-w-md flex-col gap-1"
          >
            {menuItems.map((item, index) => {
              const isActive = activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={isActive ? "location" : undefined}
                  className={[
                    "group flex min-h-14 items-center gap-5 rounded-xl px-4 py-3",
                    "text-2xl font-semibold tracking-tight transition-colors",
                    "focus-visible:outline-2 focus-visible:outline-accent",
                    isActive
                      ? "bg-surface text-accent"
                      : "text-foreground hover:bg-surface hover:text-accent",
                  ].join(" ")}
                >
                  <span className="text-xs font-medium text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{item.label}</span>
                </Link>
              );
            })}

            {/* Primary Contact action */}
            <Link
              href={primaryNavigationAction.href}
              onClick={closeMenu}
              className="mt-6 flex min-h-12 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {primaryNavigationAction.label}
            </Link>
          </nav>
        </div>

        {/* Bottom utility area */}
        <div className="flex items-center justify-between border-t border-border px-6 py-5">
          <span className="text-xs text-muted">Portfolio 2.0</span>

          <ThemeToggle />
        </div>
      </dialog>
    </div>
  );
}

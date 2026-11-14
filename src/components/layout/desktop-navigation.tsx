"use client";

import Link from "next/link";

import { navigationItems } from "@/config/navigation";
import { useActiveSection } from "@/hooks/use-active-section";

export function DesktopNavigation() {
  const activeSection = useActiveSection();

  const items = navigationItems.filter((item) => item.id !== "contact");

  return (
    <div className="hidden items-center gap-1 xl:flex">
      {items.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <Link
            key={item.id}
            href={item.href}
            aria-current={isActive ? "location" : undefined}
            className={[
              "relative rounded-full px-3 py-2 text-sm font-medium",
              "transition-colors duration-200",
              "focus-visible:outline-2 focus-visible:outline-accent",
              isActive
                ? "bg-surface-elevated text-accent"
                : "text-muted hover:bg-surface-elevated hover:text-foreground",
            ].join(" ")}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

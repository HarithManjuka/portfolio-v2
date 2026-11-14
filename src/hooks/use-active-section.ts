"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navigationItems } from "@/config/navigation";
import type { SectionId } from "@/types/navigation";

export function useActiveSection(): SectionId | null {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    let animationFrame = 0;

    function updateActiveSection() {
      const readingPosition = window.innerHeight * 0.4;
      let currentSection: SectionId | null = null;

      for (const item of navigationItems) {
        const element = document.getElementById(item.id);

        if (!element) continue;

        const bounds = element.getBoundingClientRect();

        if (bounds.top <= readingPosition && bounds.bottom > readingPosition) {
          currentSection = item.id;
          break;
        }
      }

      setActiveSection((previous) => (previous === currentSection ? previous : currentSection));
    }

    function handleScroll() {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  return pathname === "/" ? activeSection : null;
}

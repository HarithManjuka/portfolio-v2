import type { NavigationItem } from "@/types/navigation";

/**
 * Shared navigation links for the portfolio.
 *
 * The final homepage sections must use matching IDs.
 */
export const navigationItems = [
  {
    id: "about",
    label: "About",
    href: "/#about",
  },
  {
    id: "skills",
    label: "Skills",
    href: "/#skills",
  },
  {
    id: "experience",
    label: "Experience",
    href: "/#experience",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/#projects",
  },
  {
    id: "education",
    label: "Education",
    href: "/#education",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/#contact",
  },
] as const satisfies readonly NavigationItem[];

/**
 * Primary Navbar CTA.
 */
export const primaryNavigationAction = {
  label: "Contact",
  href: "/#contact",
} as const satisfies Pick<NavigationItem, "label" | "href">;

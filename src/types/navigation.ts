/**
 * Identifiers for the sections on the portfolio homepage.
 */
export type SectionId = "about" | "skills" | "experience" | "projects" | "education" | "contact";

/**
 * Navigation item shared by desktop and mobile menus.
 */
export interface NavigationItem {
  id: SectionId;
  label: string;
  href: `/#${SectionId}`;
}

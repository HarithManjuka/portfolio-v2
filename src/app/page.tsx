import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Surface } from "@/components/ui/surface";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-20 text-foreground">
      <Container>
        <div className="flex flex-col items-center gap-10">
          <ThemeToggle />

          <div className="flex max-w-3xl flex-col items-center gap-5 text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">
              Personal Portfolio
            </p>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {siteConfig.name}
            </h1>

            <p className="text-xl font-medium text-muted sm:text-2xl">{siteConfig.role}</p>

            <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {siteConfig.description}
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink href="#component-preview" variant="primary">
                Explore Components
              </ButtonLink>

              <ButtonLink href="#component-preview" variant="secondary">
                View Preview
              </ButtonLink>
            </div>
          </div>

          <section
            id="component-preview"
            className="w-full space-y-8 pt-20"
            aria-label="Reusable component preview"
          >
            <SectionHeading
              eyebrow="Design System"
              title="Reusable UI Components"
              description="A consistent, accessible, and maintainable foundation for the portfolio."
              align="center"
            />

            <div className="grid gap-6 md:grid-cols-2">
              <Surface>
                <h3 className="text-xl font-semibold text-foreground">Component Architecture</h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  Reusable components help maintain consistent styling and reduce duplication.
                </p>
              </Surface>

              <Surface>
                <h3 className="text-xl font-semibold text-foreground">Theme Compatibility</h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  All components automatically adapt to dark and light modes using semantic design
                  tokens.
                </p>
              </Surface>
            </div>
          </section>

          <p className="text-sm text-muted">Portfolio 2.0 — Currently Under Development</p>
        </div>
      </Container>
    </main>
  );
}

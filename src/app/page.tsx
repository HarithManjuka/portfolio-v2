import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { navigationItems } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      {/* Temporary hero until the cinematic intro is implemented */}
      <section id="home" aria-labelledby="home-title" className="flex min-h-svh items-center py-36">
        <Container>
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
            <p className="text-sm font-semibold tracking-[0.3em] text-accent uppercase">
              Personal Portfolio
            </p>

            <h1 id="home-title" className="text-4xl font-bold tracking-tight sm:text-6xl">
              {siteConfig.name}
            </h1>

            <p className="text-2xl font-medium text-muted">{siteConfig.role}</p>

            <p className="max-w-2xl leading-7 text-muted">{siteConfig.description}</p>

            <a
              href="#about"
              className="mt-6 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
            >
              Explore Portfolio ↓
            </a>
          </div>
        </Container>
      </section>

      {/* Section shells — content will be implemented later */}
      {navigationItems.map((item, index) => (
        <section
          key={item.id}
          id={item.id}
          aria-labelledby={`${item.id}-title`}
          className={[
            "flex min-h-[65svh] items-center border-t border-border py-24",
            index % 2 === 0 ? "bg-surface/40" : "bg-background",
          ].join(" ")}
        >
          <Container>
            <SectionHeading
              eyebrow={`0${index + 1} / Portfolio`}
              title={item.label}
              description="Section content will be developed in the upcoming portfolio implementation phase."
            />

            <p id={`${item.id}-title`} className="sr-only">
              {item.label} section
            </p>

            <div className="mt-10 rounded-2xl border border-dashed border-border p-8 text-sm text-muted">
              Content implementation upcoming.
            </div>
          </Container>
        </section>
      ))}
    </main>
  );
}

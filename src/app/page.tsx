import { CinematicHero } from "@/components/hero/cinematic-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { navigationItems } from "@/config/navigation";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background text-foreground">
      <CinematicHero />

      {/* Keep the six existing homepage section shells */}
      {navigationItems.map((item, index) => (
        <section
          key={item.id}
          id={item.id}
          aria-label={item.label}
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

            <div className="mt-10 rounded-2xl border border-dashed border-border p-8 text-sm text-muted">
              Content implementation upcoming.
            </div>
          </Container>
        </section>
      ))}
    </main>
  );
}

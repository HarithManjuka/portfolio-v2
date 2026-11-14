
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-20 text-foreground">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center">
        <p className="text-accent text-sm font-medium uppercase tracking-[0.3em]">
          Personal Portfolio
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {siteConfig.name}
        </h1>

        <h2 className="text-muted text-xl font-medium sm:text-2xl">
          {siteConfig.role}
        </h2>

        <p className="text-muted max-w-2xl text-base leading-7 sm:text-lg">
          {siteConfig.description}
        </p>

        <div className="mt-4 border-t border-border pt-6">
          <p className="text-muted text-sm">
            Portfolio 2.0 — Currently Under Development
          </p>
        </div>
      </div>
    </main>
  );
}

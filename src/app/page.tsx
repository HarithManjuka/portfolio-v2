import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-neutral-400">
          Personal Portfolio
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {siteConfig.name}
        </h1>

        <h2 className="text-xl font-medium text-neutral-300 sm:text-2xl">
          {siteConfig.role}
        </h2>

        <p className="max-w-2xl text-base leading-7 text-neutral-400 sm:text-lg">
          {siteConfig.description}
        </p>

        <div className="mt-4 border-t border-neutral-800 pt-6">
          <p className="text-sm text-neutral-500">
            Portfolio 2.0 — Currently Under Development
          </p>
        </div>
      </div>
    </main>
  );
}
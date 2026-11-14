"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/config/site";

const INTRO_STORAGE_KEY = "portfolio-v2:intro-completed";
const INTRO_DURATION_MS = 2600;

type IntroPhase = "intro" | "ready";

export function CinematicHero() {
  const [phase, setPhase] = useState<IntroPhase>("intro");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const finishIntro = useCallback(() => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    try {
      window.sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    } catch {
      // Continue normally if browser storage is unavailable.
    }

    setPhase("ready");
  }, []);

  useEffect(() => {
    if (phase !== "intro") return;

    let alreadyCompleted = false;

    try {
      alreadyCompleted = window.sessionStorage.getItem(INTRO_STORAGE_KEY) === "true";
    } catch {
      // An unavailable storage API must not block the homepage.
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadyCompleted || reducedMotion) {
      const frame = requestAnimationFrame(() => setPhase("ready"));

      return () => cancelAnimationFrame(frame);
    }

    const previousOverflow = document.body.style.overflow;

    document.documentElement.dataset.intro = "playing";
    document.body.style.overflow = "hidden";

    timerRef.current = setTimeout(finishIntro, INTRO_DURATION_MS);

    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      document.body.style.overflow = previousOverflow;
      delete document.documentElement.dataset.intro;
    };
  }, [phase, finishIntro]);

  const introVisible = phase === "intro";

  return (
    <>
      {/* Opening cinematic sequence */}
      {introVisible && (
        <div
          className="cinematic-intro fixed inset-0 z-[100] flex min-h-dvh items-center justify-center overflow-hidden bg-[#090A10] text-white"
          role="presentation"
        >
          <div aria-hidden="true" className="cinematic-intro-grid absolute inset-0" />

          <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center">
            <div
              aria-hidden="true"
              className="cinematic-intro-emblem relative flex h-48 w-48 items-center justify-center rounded-full border border-[#F16D73]/40 sm:h-60 sm:w-60"
            >
              <div className="absolute inset-4 rounded-full border border-dashed border-[#F16D73]/35" />

              <div className="absolute inset-8 rounded-full bg-[#F16D73]/10 blur-2xl" />

              <span className="relative text-6xl font-black tracking-[-0.12em] text-[#F16D73] drop-shadow-[0_0_28px_#F16D73] sm:text-7xl">
                HM<span className="text-white">.</span>
              </span>
            </div>

            <div className="cinematic-intro-copy space-y-3">
              <p className="text-xs font-semibold tracking-[0.35em] text-[#F16D73] uppercase">
                Initializing experience
              </p>

              <h2 className="text-xl font-semibold tracking-[0.08em] sm:text-2xl">
                {siteConfig.brandName}
              </h2>

              <p className="text-xs tracking-[0.22em] text-white/60 uppercase">
                Software engineering × thoughtful design
              </p>
            </div>

            <div aria-hidden="true" className="h-px w-48 overflow-hidden bg-white/15">
              <div className="cinematic-progress h-full bg-[#F16D73]" />
            </div>
          </div>

          <button
            type="button"
            onClick={finishIntro}
            className="absolute right-5 bottom-6 z-20 min-h-11 rounded-full border border-white/25 px-5 text-xs font-semibold tracking-wide text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-10 sm:bottom-10"
          >
            Skip intro
            <span aria-hidden="true" className="ml-2">
              ↗
            </span>
          </button>
        </div>
      )}

      {/* Main homepage hero */}
      <section
        id="home"
        aria-labelledby="hero-title"
        className="cinematic-hero relative isolate flex min-h-svh items-center overflow-hidden bg-background text-foreground"
      >
        <div
          aria-hidden="true"
          className="cinematic-hero-grid pointer-events-none absolute inset-0 -z-10"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-[-15%] -z-10 h-[550px] w-[550px] rounded-full bg-accent/10 blur-[120px]"
        />

        <Container>
          <div className="grid min-h-svh items-center gap-12 pt-36 pb-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-28">
            {/* Hero copy */}
            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
              <p className="mb-7 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-accent uppercase sm:text-sm">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_currentColor]"
                />
                Software Engineer
              </p>

              <h1
                id="hero-title"
                className="max-w-4xl text-[clamp(2.8rem,6vw,6.5rem)] leading-[1.06] font-bold tracking-[-0.055em]"
              >
                Building digital
                <br />
                <span className="text-accent">experiences</span>
                <br />
                that matter.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-muted sm:text-lg">
                I&apos;m {siteConfig.brandName}. I engineer modern web applications with a focus on
                clean architecture, intuitive interfaces, and purposeful solutions.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <Link
                  href="/#projects"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Explore Projects
                  <span aria-hidden="true" className="ml-2">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-surface/70 px-7 text-sm font-semibold transition-colors hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  Let&apos;s Connect
                </Link>
              </div>

              <div className="mt-12 flex items-center gap-4 text-xs tracking-[0.15em] text-muted uppercase">
                <span className="h-px w-10 bg-border" />
                Explore the portfolio
              </div>
            </div>

            {/* Holographic identity — replace with portrait later */}
            <div
              aria-hidden="true"
              className="cinematic-portrait relative mx-auto flex w-full max-w-[430px] items-center justify-center lg:max-w-[520px]"
            >
              <div className="cinematic-portrait-halo absolute inset-[10%] rounded-full bg-accent/15 blur-3xl" />

              <div className="cinematic-portrait-ring relative flex aspect-square w-[min(78vw,440px)] items-center justify-center rounded-full border border-accent/30">
                <div className="absolute inset-5 rounded-full border border-dashed border-accent/25" />

                <div className="absolute inset-12 rounded-full border border-accent/15 bg-surface/50 backdrop-blur-sm" />

                <div className="relative flex aspect-square w-[54%] items-center justify-center rounded-[28%] border border-accent/30 bg-surface/80 shadow-[0_0_90px_rgba(241,109,115,0.12)]">
                  <span className="text-[clamp(4rem,10vw,7.5rem)] leading-none font-black tracking-[-0.14em] text-accent">
                    {siteConfig.initials}
                  </span>
                </div>

                <span className="absolute -bottom-4 rounded-full border border-border bg-background px-5 py-2 text-[10px] font-semibold tracking-[0.2em] text-muted uppercase">
                  Harith Manjuka
                </span>
              </div>
            </div>
          </div>
        </Container>

        <a
          href="#about"
          className="absolute bottom-5 left-1/2 z-10 -translate-x-1/2 rounded-full px-4 py-2 text-xs text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent lg:right-12 lg:left-auto lg:translate-x-0"
        >
          Scroll to explore ↓
        </a>
      </section>
    </>
  );
}

"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";

const subscribe = () => () => {};

function useHasMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDark = resolvedTheme !== "light";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      disabled={!hasMounted}
      aria-label={hasMounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Change color theme"}
      aria-pressed={hasMounted ? !isDark : undefined}
      className="cursor-pointer rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors duration-200 hover:bg-surface-elevated focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-default disabled:opacity-60"
    >
      {!hasMounted ? "Theme" : isDark ? "☀ Light mode" : "☾ Dark mode"}
    </button>
  );
}

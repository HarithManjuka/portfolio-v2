
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type SurfaceProps = HTMLAttributes<HTMLDivElement>;

export function Surface({
  className,
  children,
  ...props
}: SurfaceProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

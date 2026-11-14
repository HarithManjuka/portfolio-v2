import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">{eyebrow}</p>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="max-w-2xl text-base leading-7 text-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}

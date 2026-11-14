
import Link from "next/link";
import type {
  ButtonHTMLAttributes,
  ComponentProps,
} from "react";

import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonStyleProps;

type ButtonLinkProps = ComponentProps<typeof Link> &
  ButtonStyleProps;

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium " +
  "transition-colors duration-200 focus-visible:outline-2 " +
  "focus-visible:outline-offset-2 focus-visible:outline-accent " +
  "disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-foreground hover:opacity-90",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-elevated",
  ghost:
    "text-foreground hover:bg-surface-elevated",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

function getButtonStyles(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
) {
  return cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={getButtonStyles(variant, size, className)}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={getButtonStyles(variant, size, className)}
      {...props}
    />
  );
}

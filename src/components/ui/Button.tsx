"use client";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Phone, ArrowRight, AlertTriangle } from "lucide-react";
import { type ButtonHTMLAttributes, forwardRef } from "react";

// ─── Base Button ─────────────────────────────────────────────────

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline"
  | "emergency"
  | "white";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-red)] hover:bg-[var(--color-red-dark)] text-white shadow-[var(--shadow-cta)] hover:shadow-lg active:scale-[0.98]",
  secondary:
    "bg-[var(--color-navy)] hover:bg-[var(--color-navy-light)] text-white shadow-[var(--shadow-card)] active:scale-[0.98]",
  ghost:
    "bg-transparent hover:bg-[var(--color-muted)] text-[var(--color-navy)] active:scale-[0.98]",
  outline:
    "bg-transparent border-2 border-[var(--color-navy)] text-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white active:scale-[0.98]",
  emergency:
    "bg-[var(--color-red)] hover:bg-[var(--color-red-dark)] text-white animate-pulse-slow ring-2 ring-[var(--color-red)] ring-offset-2 shadow-[var(--shadow-cta)] active:scale-[0.98]",
  white:
    "bg-white hover:bg-[var(--color-cream)] text-[var(--color-navy)] shadow-[var(--shadow-card)] active:scale-[0.98]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2 gap-1.5",
  md: "text-base px-5 py-2.5 gap-2",
  lg: "text-lg px-6 py-3 gap-2",
  xl: "text-xl px-8 py-4 gap-3 font-bold",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      icon,
      iconPosition = "left",
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          "inline-flex items-center justify-center font-semibold rounded-[var(--radius-btn)] transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
          variantClasses[variant],
          sizeClasses[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            {icon && iconPosition === "left" && (
              <span className="shrink-0">{icon}</span>
            )}
            {children}
            {icon && iconPosition === "right" && (
              <span className="shrink-0">{icon}</span>
            )}
          </>
        )}
      </button>
    );
  }
);
Button.displayName = "Button";

// ─── Call Button ─────────────────────────────────────────────────

export interface CallButtonProps {
  size?: ButtonSize;
  variant?: "primary" | "secondary" | "white" | "outline";
  fullWidth?: boolean;
  className?: string;
  label?: string;
}

export function CallButton({
  size = "lg",
  variant = "primary",
  fullWidth = false,
  className,
  label,
}: CallButtonProps) {
  return (
    <a
      href={siteConfig.phoneTel}
      aria-label={`Call ${siteConfig.phoneDisplay}`}
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-[var(--radius-btn)] transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
    >
      <Phone className="shrink-0" size={size === "xl" ? 22 : size === "lg" ? 20 : 16} />
      <span>{label ?? siteConfig.phoneDisplay}</span>
    </a>
  );
}

// ─── Quote Button ─────────────────────────────────────────────────

export interface QuoteButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
  label?: string;
  href?: string;
}

export function QuoteButton({
  size = "lg",
  variant = "primary",
  fullWidth = false,
  className,
  label = "Get Free Inspection",
  href = "/contact",
}: QuoteButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-[var(--radius-btn)] transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
    >
      <span>{label}</span>
      <ArrowRight className="shrink-0" size={size === "xl" ? 22 : 18} />
    </a>
  );
}

// ─── Emergency Button ─────────────────────────────────────────────

export function EmergencyButton({
  size = "xl",
  fullWidth = false,
  className,
}: {
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}) {
  return (
    <a
      href={siteConfig.phoneTel}
      aria-label="Emergency pest removal — call now"
      className={cn(
        "inline-flex items-center justify-center font-bold rounded-[var(--radius-btn)] transition-all duration-200 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-[var(--color-red)] text-white ring-2 ring-[var(--color-red)] ring-offset-2 shadow-[var(--shadow-cta)] hover:bg-[var(--color-red-dark)] active:scale-[0.98]",
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
    >
      <AlertTriangle className="shrink-0 animate-bounce" size={22} />
      <span>Emergency? Call Now</span>
      <Phone className="shrink-0" size={20} />
    </a>
  );
}

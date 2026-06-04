import { cn } from "@/lib/utils";
import type { ReactNode, ElementType } from "react";

// ─── Container ────────────────────────────────────────────────────

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  narrow?: boolean;
}

export function Container({
  children,
  className,
  as: Tag = "div",
  narrow = false,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        narrow ? "max-w-4xl" : "max-w-7xl",
        className
      )}
    >
      {children}
    </Tag>
  );
}

// ─── Section ─────────────────────────────────────────────────────

export type SectionPadding = "xs" | "sm" | "md" | "lg" | "xl" | "none";
export type SectionBackground = "white" | "muted" | "navy" | "navy-light" | "red" | "cream";

const paddingMap: Record<SectionPadding, string> = {
  none: "",
  xs: "py-6",
  sm: "py-10 md:py-12",
  md: "py-14 md:py-20",
  lg: "py-20 md:py-28",
  xl: "py-28 md:py-36",
};

const bgMap: Record<SectionBackground, string> = {
  white: "bg-white",
  muted: "bg-[var(--color-muted)]",
  navy: "bg-[var(--color-navy)]",
  "navy-light": "bg-[var(--color-navy-light)]",
  red: "bg-[var(--color-red)]",
  cream: "bg-[var(--color-cream)]",
};

export interface SectionProps {
  children: ReactNode;
  padding?: SectionPadding;
  background?: SectionBackground;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article" | "aside";
}

export function Section({
  children,
  padding = "md",
  background = "white",
  className,
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(paddingMap[padding], bgMap[background], className)}
    >
      {children}
    </Tag>
  );
}

// ─── Section Header ───────────────────────────────────────────────

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "dark" | "light";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  theme = "light",
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[align];

  return (
    <div className={cn("mb-10 md:mb-14", alignClass, className)}>
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-red)] mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-black leading-tight",
          theme === "dark" ? "text-white" : "text-[var(--color-navy)]"
        )}
        style={{ fontFamily: "var(--font-barlow)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base md:text-lg leading-relaxed max-w-2xl",
            align === "center" && "mx-auto",
            theme === "dark"
              ? "text-white/70"
              : "text-[var(--color-slate-custom)]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Patriotic Divider ────────────────────────────────────────────

export interface DividerProps {
  className?: string;
  variant?: "stars" | "line" | "wave";
}

export function Divider({ className, variant = "stars" }: DividerProps) {
  if (variant === "line") {
    return (
      <div
        className={cn(
          "w-full h-px bg-gradient-to-r from-transparent via-[var(--color-navy-100)] to-transparent",
          className
        )}
        role="separator"
        aria-hidden="true"
      />
    );
  }

  if (variant === "wave") {
    return (
      <div className={cn("w-full overflow-hidden leading-none", className)} aria-hidden="true">
        <svg
          viewBox="0 0 1200 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-8 fill-[var(--color-muted)]"
        >
          <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z" />
        </svg>
      </div>
    );
  }

  // Stars variant
  return (
    <div
      className={cn("flex items-center gap-3 py-2", className)}
      role="separator"
      aria-hidden="true"
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[var(--color-navy-100)]" />
      <div className="flex items-center gap-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={cn(
              "text-xs",
              i % 2 === 0 ? "text-[var(--color-red)]" : "text-[var(--color-navy)]"
            )}
          >
            ★
          </span>
        ))}
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[var(--color-navy-100)]" />
    </div>
  );
}

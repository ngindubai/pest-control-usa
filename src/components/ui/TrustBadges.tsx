"use client";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import {
  ShieldCheck,
  Clock,
  Leaf,
  Users,
  Award,
  BadgeCheck,
} from "lucide-react";

// ─── Individual Trust Badge ───────────────────────────────────────

export type TrustBadgeType =
  | "licensed"
  | "insured"
  | "coverage"
  | "same-day"
  | "guarantee"
  | "eco"
  | "family-safe";

const badgeData: Record<
  TrustBadgeType,
  { icon: React.ReactNode; label: string; sub?: string }
> = {
  licensed: {
    icon: <ShieldCheck size={22} />,
    label: "Licensed & Insured",
    sub: "50 states + DC",
  },
  insured: {
    icon: <BadgeCheck size={22} />,
    label: "Fully Insured",
    sub: "General liability",
  },
  coverage: {
    icon: <Users size={22} />,
    label: siteConfig.stats.statesCovered + " States + DC",
    sub: "Nationwide network",
  },
  "same-day": {
    icon: <Clock size={22} />,
    label: "Same-Day Service",
    sub: "Available now",
  },
  guarantee: {
    icon: <Award size={22} />,
    label: "Satisfaction Guarantee",
    sub: "We make it right",
  },
  eco: {
    icon: <Leaf size={22} />,
    label: "Eco-Friendly",
    sub: "Green treatments",
  },
  "family-safe": {
    icon: <Users size={22} />,
    label: "Family & Pet Safe",
    sub: "Non-toxic options",
  },
};

export interface TrustBadgeProps {
  type: TrustBadgeType;
  layout?: "horizontal" | "vertical";
  className?: string;
}

export function TrustBadge({
  type,
  layout = "horizontal",
  className,
}: TrustBadgeProps) {
  const data = badgeData[type];
  return (
    <div
      className={cn(
        "flex items-center gap-3",
        layout === "vertical" && "flex-col text-center gap-2",
        className
      )}
    >
      <div className="text-[var(--color-red)] shrink-0" aria-hidden="true">
        {data.icon}
      </div>
      <div className={cn(layout === "vertical" && "text-center")}>
        <p className="font-bold text-[var(--color-navy)] text-sm leading-tight">
          {data.label}
        </p>
        {data.sub && (
          <p className="text-xs text-[var(--color-slate-custom)]">{data.sub}</p>
        )}
      </div>
    </div>
  );
}

// ─── Trust Bar (horizontal strip of all badges) ───────────────────

export interface TrustBarProps {
  badges?: TrustBadgeType[];
  className?: string;
  background?: "white" | "muted" | "navy";
}

const defaultBadges: TrustBadgeType[] = [
  "licensed",
  "insured",
  "coverage",
  "same-day",
  "guarantee",
  "eco",
  "family-safe",
];

export function TrustBar({
  badges = defaultBadges,
  className,
  background = "white",
}: TrustBarProps) {
  const bgMap = {
    white: "bg-white border-y border-[var(--color-navy-100)]",
    muted: "bg-[var(--color-muted)] border-y border-[var(--color-navy-100)]",
    navy: "bg-[var(--color-navy)]",
  };
  const textColor = background === "navy" ? "text-white" : "";

  return (
    <div className={cn(bgMap[background], "py-4 overflow-hidden", className)}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {badges.map((type) => {
            const data = badgeData[type];
            return (
              <div
                key={type}
                className={cn("flex items-center gap-2 text-sm", textColor)}
              >
                <span
                  className={
                    background === "navy"
                      ? "text-[var(--color-red)]"
                      : "text-[var(--color-red)]"
                  }
                  aria-hidden="true"
                >
                  {data.icon}
                </span>
                <span
                  className={cn(
                    "font-semibold",
                    background === "navy"
                      ? "text-white"
                      : "text-[var(--color-navy)]"
                  )}
                >
                  {data.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Guarantee Badge (seal style) ────────────────────────────────

export function GuaranteeBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex flex-col items-center justify-center w-24 h-24 rounded-full bg-[var(--color-navy)] text-white text-center border-4 border-[var(--color-red)] shadow-[var(--shadow-cta)]",
        className
      )}
      role="img"
      aria-label="100% Satisfaction Guarantee"
    >
      <Award size={20} className="text-[var(--color-red)] mb-0.5" aria-hidden="true" />
      <span className="text-[9px] font-black uppercase tracking-wide leading-tight">
        100%
        <br />
        Guaranteed
      </span>
    </div>
  );
}

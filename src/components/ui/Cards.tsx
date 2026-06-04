"use client";

import { cn } from "@/lib/utils";
import { StarRating } from "./StarRating";
import { BadgeCheck, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Service, Review } from "@/types";

// ─── Service Card ─────────────────────────────────────────────────

export interface ServiceCardProps {
  service: Pick<
    Service,
    "slug" | "title" | "shortDescription" | "icon" | "emergencyAvailable"
  >;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col gap-3 p-5 bg-white rounded-[var(--radius-card)] border border-[var(--color-navy-100)] shadow-[var(--shadow-card)] hover:border-[var(--color-red)] hover:shadow-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2",
        className
      )}
      aria-label={`${service.title} — learn more`}
    >
      {service.emergencyAvailable && (
        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-red-50 text-[var(--color-red)] border border-red-200">
          24/7
        </span>
      )}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-[var(--color-navy-50)] group-hover:bg-[var(--color-red)] transition-colors duration-300"
        aria-hidden="true"
      >
        {service.icon}
      </div>
      <div>
        <h3 className="font-bold text-[var(--color-navy)] text-base group-hover:text-[var(--color-red)] transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-sm text-[var(--color-slate-custom)] mt-1 leading-relaxed line-clamp-2">
          {service.shortDescription}
        </p>
      </div>
      <div className="flex items-center gap-1 text-sm font-semibold text-[var(--color-red)] mt-auto">
        Learn more
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

// ─── Review Card ──────────────────────────────────────────────────

export interface ReviewCardProps {
  review: Review;
  compact?: boolean;
  className?: string;
}

export function ReviewCard({ review, compact = false, className }: ReviewCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 p-5 bg-white rounded-[var(--radius-card)] border border-[var(--color-navy-100)] shadow-[var(--shadow-card)]",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-[var(--color-navy)] text-sm">
              {review.author}
            </span>
            {review.verified && (
              <BadgeCheck
                size={16}
                className="text-[var(--color-red)] shrink-0"
                aria-label="Verified review"
              />
            )}
          </div>
          <p className="text-xs text-[var(--color-slate-custom)] mt-0.5">
            {review.location} &middot; {review.service}
          </p>
        </div>
        <span className="text-xs text-[var(--color-slate-custom)] shrink-0">
          {review.date}
        </span>
      </div>
      <StarRating rating={review.rating} size="sm" />
      <p
        className={cn(
          "text-sm text-gray-700 leading-relaxed",
          compact && "line-clamp-3"
        )}
      >
        {review.body}
      </p>
      <p className="text-xs text-[var(--color-slate-custom)] capitalize">
        via {review.source}
      </p>
    </div>
  );
}

// ─── Stats Card ───────────────────────────────────────────────────

export interface StatsCardProps {
  number: string;
  label: string;
  icon?: React.ReactNode;
  className?: string;
}

export function StatsCard({ number, label, icon, className }: StatsCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center gap-2 p-6",
        className
      )}
    >
      {icon && (
        <div className="text-[var(--color-red)] mb-1" aria-hidden="true">
          {icon}
        </div>
      )}
      <span
        className="text-4xl font-black text-white leading-none"
        style={{ fontFamily: "var(--font-barlow)" }}
      >
        {number}
      </span>
      <span className="text-sm font-medium text-white/70 uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

// ─── Process Card ─────────────────────────────────────────────────

export interface ProcessCardProps {
  step: number;
  title: string;
  description: string;
  isLast?: boolean;
  className?: string;
}

export function ProcessCard({
  step,
  title,
  description,
  isLast = false,
  className,
}: ProcessCardProps) {
  return (
    <div className={cn("flex flex-col items-center text-center relative", className)}>
      {!isLast && (
        <div
          className="hidden md:block absolute top-7 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-[var(--color-red)] to-[var(--color-navy-100)]"
          aria-hidden="true"
        />
      )}
      <div
        className="w-14 h-14 rounded-full bg-[var(--color-navy)] text-white flex items-center justify-center text-xl font-black mb-4 z-10 shrink-0 ring-4 ring-white shadow-[var(--shadow-card)]"
        style={{ fontFamily: "var(--font-barlow)" }}
        aria-hidden="true"
      >
        {step}
      </div>
      <h3
        className="font-bold text-[var(--color-navy)] text-lg mb-2"
        style={{ fontFamily: "var(--font-barlow)" }}
      >
        {title}
      </h3>
      <p className="text-sm text-[var(--color-slate-custom)] leading-relaxed max-w-[200px]">
        {description}
      </p>
    </div>
  );
}

// ─── Blog Preview Card ────────────────────────────────────────────

export interface BlogPreviewCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: number;
  slug: string;
  categorySlug: string;
  featuredImage?: string;
  className?: string;
}

export function BlogPreviewCard({
  title,
  excerpt,
  category,
  date,
  readTime,
  slug,
  categorySlug,
  className,
}: BlogPreviewCardProps) {
  return (
    <Link
      href={`/blog/${categorySlug}/${slug}`}
      className={cn(
        "group flex flex-col bg-white rounded-[var(--radius-card)] border border-[var(--color-navy-100)] shadow-[var(--shadow-card)] overflow-hidden hover:shadow-lg transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2",
        className
      )}
    >
      <div className="h-48 bg-gradient-to-br from-[var(--color-navy)] to-[var(--color-navy-light)] flex items-center justify-center">
        <span className="text-4xl" aria-hidden="true">📰</span>
      </div>
      <div className="flex flex-col gap-2 p-5 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--color-red-50)] text-[var(--color-red)]">
            {category}
          </span>
          <span className="text-xs text-[var(--color-slate-custom)]">
            {date} &middot; {readTime} min read
          </span>
        </div>
        <h3 className="font-bold text-[var(--color-navy)] text-base leading-snug group-hover:text-[var(--color-red)] transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-[var(--color-slate-custom)] line-clamp-2 leading-relaxed">
          {excerpt}
        </p>
        <div className="flex items-center gap-1 text-sm font-semibold text-[var(--color-red)] mt-auto pt-2">
          Read article
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

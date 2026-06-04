"use client";

import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "xs" | "sm" | "md" | "lg";
  showNumber?: boolean;
  reviewCount?: string;
  className?: string;
}

const sizeMap = { xs: 10, sm: 14, md: 18, lg: 22 };

export function StarRating({
  rating,
  maxRating = 5,
  size = "md",
  showNumber = false,
  reviewCount,
  className,
}: StarRatingProps) {
  const px = sizeMap[size];

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      aria-label={`${rating} out of ${maxRating} stars`}
      role="img"
    >
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }).map((_, i) => {
          const filled = i < Math.floor(rating);
          const partial = !filled && i < rating;
          return (
            <Star
              key={i}
              size={px}
              className={cn(
                filled || partial ? "text-amber-400" : "text-gray-200"
              )}
              fill={filled ? "#fbbf24" : partial ? "url(#half)" : "none"}
              strokeWidth={1.5}
              aria-hidden="true"
            />
          );
        })}
      </div>
      {showNumber && (
        <span className="font-bold text-[var(--color-navy)] text-sm ml-0.5">
          {rating.toFixed(1)}
        </span>
      )}
      {reviewCount && (
        <span className="text-[var(--color-slate-custom)] text-xs">
          ({reviewCount} reviews)
        </span>
      )}
    </div>
  );
}

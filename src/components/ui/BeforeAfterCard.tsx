"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRef, useState, useCallback } from "react";

// ─── Before/After Slider ──────────────────────────────────────────

export interface BeforeAfterCardProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  caption?: string;
  className?: string;
  initialPosition?: number; // 0–100
}

export function BeforeAfterCard({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before pest treatment",
  afterAlt = "After pest treatment",
  caption,
  className,
  initialPosition = 50,
}: BeforeAfterCardProps) {
  const [position, setPosition] = useState(initialPosition);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (dragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches[0]) updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const stopDrag = () => { dragging.current = false; };
  const startDrag = () => { dragging.current = true; };

  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)] select-none group",
        className
      )}
    >
      <div
        ref={containerRef}
        className="relative aspect-[4/3] cursor-col-resize"
        onMouseMove={onMouseMove}
        onMouseDown={startDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onTouchMove={onTouchMove}
        onTouchStart={startDrag}
        onTouchEnd={stopDrag}
        role="img"
        aria-label={`Before and after comparison: ${beforeAlt} vs ${afterAlt}`}
      >
        {/* After (base layer) */}
        <div className="absolute inset-0">
          <Image
            src={afterSrc}
            alt={afterAlt}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={beforeSrc}
            alt={beforeAlt}
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-black/60 text-white text-xs font-bold px-2 py-1 rounded">
            BEFORE
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-[var(--color-red)] text-white text-xs font-bold px-2 py-1 rounded">
            AFTER
          </span>
        </div>

        {/* Slider handle */}
        <div
          className="absolute inset-y-0 z-20 flex items-center justify-center pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-0.5 h-full bg-white/70" />
          <div className="absolute w-8 h-8 rounded-full bg-white shadow-lg border-2 border-[var(--color-red)] flex items-center justify-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M4 7L1 4M1 4L4 1M1 4H13M10 7L13 10M13 10L10 13M13 10H1" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {caption && (
        <figcaption className="px-4 py-3 bg-white text-xs text-[var(--color-slate-custom)] text-center border-t border-[var(--color-navy-100)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

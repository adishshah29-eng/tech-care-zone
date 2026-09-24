"use client";

import { useReveal } from "@/lib/useReveal";

export function SectionHead2({
  title,
  lede,
  align = "left",
}: {
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  const ref = useReveal<HTMLDivElement>();
  const alignClass = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div ref={ref} className={`v2-reveal max-w-2xl ${alignClass}`}>
      <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold text-[var(--v2-ink)]">
        {title}
      </h2>
      {lede && (
        <p className="mt-3 text-[1.05rem] leading-relaxed text-[var(--v2-ink-soft)]">
          {lede}
        </p>
      )}
    </div>
  );
}

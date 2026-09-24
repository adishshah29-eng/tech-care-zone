"use client";

import { useReveal } from "@/lib/useReveal";

export function DiagramTag({
  children,
  tone = "orange",
}: {
  children: React.ReactNode;
  tone?: "orange" | "blue" | "ink";
}) {
  const toneClasses = {
    orange: "bg-orange text-[var(--paper-raised)] border-orange",
    blue: "bg-blue text-[var(--paper-raised)] border-blue",
    ink: "bg-[var(--ink)] text-[var(--paper-raised)] border-[var(--ink)]",
  }[tone];

  return (
    <span
      className={`font-spec inline-flex h-7 min-w-7 items-center justify-center rounded-full border px-2 text-[13px] font-medium leading-none ${toneClasses}`}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  title,
  lede,
  align = "left",
}: {
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  const ref = useReveal<HTMLDivElement>();
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div ref={ref} className={`reveal max-w-2xl ${alignClass}`}>
      <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-bold text-[var(--ink)]">
        {title}
      </h2>
      {lede && (
        <p className="mt-3 text-[var(--ink-soft)] text-[1.05rem] leading-relaxed">
          {lede}
        </p>
      )}
    </div>
  );
}

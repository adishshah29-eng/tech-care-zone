"use client";

import { useReveal } from "@/lib/useReveal";
import { PcbSide, type PcbVariant } from "./PcbArt1";

export function DiagramTag({
  children,
  tone = "orange",
}: {
  children: React.ReactNode;
  tone?: "orange" | "blue" | "ink";
}) {
  const toneClasses = {
    orange: "bg-brand text-[var(--paper-raised)] border-brand",
    blue: "bg-navy text-[var(--paper-raised)] border-navy",
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

const artVariants: PcbVariant[] = ["chip", "bus", "nodes"];

export function SectionHeading({
  title,
  lede,
  align = "left",
  art = true,
}: {
  title: string;
  lede?: string;
  align?: "left" | "center";
  art?: boolean;
}) {
  const ref = useReveal<HTMLDivElement>();
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const variant = artVariants[title.length % artVariants.length];
  return (
    <div className="relative">
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
      {art && (
        <PcbSide
          variant={variant}
          className="pointer-events-none absolute bottom-0 right-0 hidden w-[240px] xl:block"
        />
      )}
    </div>
  );
}

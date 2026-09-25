"use client";

import Image from "next/image";
import { ArrowRight } from "../icons";
import { business, stats } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";

export function Hero2() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--v2-border)]">
      <div className="absolute inset-0">
        <Image
          src="/v2/hero.webp"
          alt="Technician repairing a smartphone under warm workshop lamp light"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--v2-bg)] via-[var(--v2-bg)]/90 to-[var(--v2-bg)]/75 md:via-[var(--v2-bg)]/85 md:to-[var(--v2-bg)]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--v2-bg)] via-transparent to-transparent" />
      </div>

      <div ref={ref} className="v2-reveal relative mx-auto max-w-6xl px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
        <h1 className="max-w-2xl text-[clamp(2.4rem,6vw,4.4rem)] font-bold leading-[1.03] text-[var(--v2-ink)]">
          We fix Apple devices &amp; all laptop brands
        </h1>

        <p className="mt-6 max-w-lg text-[1.1rem] leading-relaxed text-[var(--v2-ink-soft)]">
          Expert repair for iPhone, iPad, iMac, MacBook, Lenovo, Dell, HP,
          Acer &amp; Asus. Fast turnaround, genuine parts, warranty on every
          repair.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a
            href="#contact"
            className="v2-btn v2-btn-amber inline-flex items-center gap-2 rounded px-7 py-3.5 v2-mono text-[14px] font-bold uppercase tracking-[0.08em]"
          >
            Book a Repair
            <ArrowRight size={16} />
          </a>
          <a
            href="#services"
            className="v2-mono text-[14px] font-medium uppercase tracking-[0.08em] text-[var(--v2-ink)] underline decoration-[var(--v2-ink-faint)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--v2-amber)]"
          >
            Explore Services
          </a>
        </div>

        <div className="v2-mono mt-14 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l-2 border-[var(--v2-amber)] pl-3">
              <dt className="text-[11px] uppercase tracking-[0.1em] text-[var(--v2-ink-faint)]">
                {stat.label}
              </dt>
              <dd className="mt-1 text-[1.4rem] font-bold text-[var(--v2-ink)]">
                {stat.value}
                {stat.suffix ?? ""}
              </dd>
            </div>
          ))}
        </div>
      </div>

      <p className="v2-mono relative border-t border-[var(--v2-border)] bg-[var(--v2-bg)]/80 px-5 py-2.5 text-center text-[12px] uppercase tracking-[0.12em] text-[var(--v2-ink-faint)] sm:px-8">
        {business.tagline}
      </p>
    </section>
  );
}

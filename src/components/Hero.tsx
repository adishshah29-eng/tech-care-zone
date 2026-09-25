"use client";

import { ArrowRight } from "./icons";
import { business, stats } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";
import { HeroBoardArt } from "./HeroBoardArt";

const faultCallouts = [
  { n: "1", label: "Screen" },
  { n: "2", label: "Battery" },
  { n: "3", label: "Water damage" },
  { n: "4", label: "Motherboard" },
];

export function Hero() {
  const textRef = useReveal<HTMLDivElement>();
  const artRef = useReveal<HTMLDivElement>();

  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--paper-line-strong)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div ref={textRef} className="reveal">
          <div className="font-spec inline-flex items-center gap-2 rounded-sm border border-[var(--paper-line-strong)] bg-[var(--paper-raised)] px-3 py-1.5 text-[12px] uppercase tracking-[0.1em] text-[var(--ink-soft)]">
            Fig. 1 — Device Repair
          </div>

          <h1 className="mt-5 text-[clamp(2.4rem,5.5vw,4.2rem)] font-bold leading-[1.02] text-[var(--ink)]">
            We fix Apple devices &amp; all laptop brands
          </h1>

          <p className="mt-6 max-w-lg text-[1.1rem] leading-relaxed text-[var(--ink-soft)]">
            Expert repair for iPhone, iPad, iMac, MacBook, Lenovo, Dell, HP,
            Acer &amp; Asus. Fast turnaround, genuine parts, warranty on every
            repair.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="stamp-btn inline-flex items-center gap-2 rounded-sm bg-[var(--brand)] px-6 py-3 font-spec text-[14px] font-semibold uppercase tracking-[0.06em] text-[var(--paper-raised)] transition-transform hover:-rotate-1"
            >
              Book a Repair
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="font-spec text-[14px] font-medium uppercase tracking-[0.06em] text-[var(--ink)] underline decoration-[var(--ink-faint)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--brand)]"
            >
              Explore Services
            </a>
          </div>

          <dl className="font-spec mt-12 grid max-w-lg grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--paper-line-strong)] pt-6 sm:grid-cols-4 sm:gap-x-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[11px] uppercase tracking-[0.08em] text-[var(--ink-faint)]">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-[1.3rem] font-semibold text-[var(--ink)]">
                  {stat.value}
                  {stat.suffix ?? ""}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div ref={artRef} className="reveal relative mx-auto w-full max-w-md lg:max-w-none" style={{ transitionDelay: "120ms" }}>
          <HeroBoardArt />

          <ul className="font-spec mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.06em] text-[var(--ink-soft)]">
            {faultCallouts.map((f) => (
              <li key={f.n} className="flex items-center gap-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--brand)] text-[10px] text-[var(--paper-raised)]">
                  {f.n}
                </span>
                {f.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="border-t border-[var(--paper-line-strong)] bg-[var(--paper-raised)] px-5 py-2.5 text-center font-spec text-[12px] uppercase tracking-[0.08em] text-[var(--ink-faint)] sm:px-8">
        {business.tagline}
      </p>
    </section>
  );
}

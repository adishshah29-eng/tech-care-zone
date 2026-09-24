"use client";

import { ArrowRight } from "./icons";
import { business, stats } from "@/lib/content";
import { useReveal } from "@/lib/useReveal";

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
              className="stamp-btn inline-flex items-center gap-2 rounded-sm bg-[var(--orange)] px-6 py-3 font-spec text-[14px] font-semibold uppercase tracking-[0.06em] text-[var(--paper-raised)] transition-transform hover:-rotate-1"
            >
              Book a Repair
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="font-spec text-[14px] font-medium uppercase tracking-[0.06em] text-[var(--ink)] underline decoration-[var(--ink-faint)] decoration-2 underline-offset-4 transition-colors hover:decoration-[var(--orange)]"
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
          <svg
            viewBox="0 0 460 420"
            className="w-full"
            role="img"
            aria-label="Diagram of a phone and laptop with numbered fault callouts for screen, battery, water damage and motherboard"
          >
            <rect x="0" y="0" width="460" height="420" fill="var(--paper-raised)" stroke="var(--paper-line-strong)" rx="6" />

            {/* laptop */}
            <g>
              <path
                d="M60 300 L340 300 L360 320 L40 320 Z"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="2"
              />
              <rect x="80" y="160" width="240" height="140" rx="4" fill="none" stroke="var(--ink)" strokeWidth="2" />
              <rect x="94" y="174" width="212" height="112" rx="2" fill="var(--paper)" stroke="var(--ink-faint)" strokeWidth="1.5" />
            </g>

            {/* phone */}
            <g>
              <rect x="290" y="60" width="110" height="220" rx="16" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2.5" />
              <rect x="302" y="80" width="86" height="180" rx="3" fill="var(--paper-raised)" stroke="var(--ink-faint)" strokeWidth="1.5" />
              <rect x="330" y="70" width="30" height="6" rx="3" fill="var(--ink-faint)" />
            </g>

            {/* leaders */}
            <line x1="345" y1="95" x2="410" y2="60" className="leader-line" />
            <line x1="345" y1="160" x2="430" y2="140" className="leader-line" />
            <line x1="200" y1="180" x2="130" y2="115" className="leader-line" />
            <line x1="240" y1="230" x2="330" y2="250" className="leader-line" />

            {/* numbered callouts */}
            {[
              { cx: 420, cy: 50 },
              { cx: 440, cy: 130 },
              { cx: 120, cy: 100 },
              { cx: 342, cy: 258 },
            ].map((pos, i) => (
              <g key={i}>
                <circle cx={pos.cx} cy={pos.cy} r="13" fill="var(--orange)" />
                <text
                  x={pos.cx}
                  y={pos.cy + 4}
                  textAnchor="middle"
                  fontSize="13"
                  fontFamily="var(--font-spec)"
                  fill="var(--paper-raised)"
                >
                  {i + 1}
                </text>
              </g>
            ))}
          </svg>

          <ul className="font-spec mt-4 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.06em] text-[var(--ink-soft)]">
            {faultCallouts.map((f) => (
              <li key={f.n} className="flex items-center gap-1.5">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--orange)] text-[10px] text-[var(--paper-raised)]">
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

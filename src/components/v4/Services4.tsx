"use client";

import { useState } from "react";
import { serviceIconMap } from "../icons";
import { SectionHead4 } from "./SectionHead4";
import { ScrollReveal3 } from "../v3/ScrollReveal3";
import { appleServices, laptopServices } from "@/lib/content";

export function Services4() {
  const [tab, setTab] = useState<"apple" | "laptop">("apple");
  const list = tab === "apple" ? appleServices : laptopServices;

  return (
    <section id="services" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="v4-panel p-6 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHead4
              title="Expert repair services"
              lede="From cracked screens to complex motherboard repairs — Apple devices & all major laptop brands covered."
            />
            <div className="v4-mono flex border border-[var(--v4-trace-dim)] text-[12px] uppercase tracking-[0.08em]">
              {(["apple", "laptop"] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={tab === key}
                  onClick={() => setTab(key)}
                  className={`px-5 py-2.5 transition-colors ${
                    tab === key
                      ? "bg-[var(--v4-gold)] font-bold text-[var(--v4-gold-ink)]"
                      : "text-[var(--v4-silk-soft)] hover:text-[var(--v4-silk)]"
                  }`}
                >
                  {key === "apple" ? "Apple" : "Laptop"}
                </button>
              ))}
            </div>
          </div>

          <ScrollReveal3 key={tab} stagger className="mt-10 border-t border-[var(--v4-trace-dim)]">
            {list.map((s) => {
              const Icon = serviceIconMap[s.icon];
              return (
                <div
                  key={s.id}
                  className="grid items-start gap-x-6 gap-y-2 border-b border-[var(--v4-trace-dim)] py-5 transition-colors hover:bg-[rgba(90,149,204,0.07)] sm:grid-cols-[48px_1.1fr_2fr_auto] sm:px-3"
                >
                  <span className="v4-mono text-[12px] text-[var(--v4-silk-faint)]">{s.tag}</span>
                  <h3 className="flex items-center gap-3 text-[1.05rem] font-semibold text-[var(--v4-silk)]">
                    <Icon size={20} strokeWidth={1.6} className="shrink-0 text-[var(--v4-gold)]" />
                    {s.name}
                  </h3>
                  <p className="text-[0.93rem] leading-relaxed text-[var(--v4-silk-soft)]">{s.copy}</p>
                  <p className="v4-mono text-[11px] uppercase tracking-[0.08em] text-[var(--v4-trace)] sm:text-right">
                    {s.spec}
                  </p>
                </div>
              );
            })}
          </ScrollReveal3>
        </div>
      </div>
    </section>
  );
}

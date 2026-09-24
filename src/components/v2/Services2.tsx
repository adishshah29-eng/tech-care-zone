"use client";

import { useState } from "react";
import { serviceIconMap } from "../icons";
import { SectionHead2 } from "./SectionHead2";
import { appleServices, laptopServices, type Service } from "@/lib/content";

function Tile({ service }: { service: Service }) {
  const Icon = serviceIconMap[service.icon];
  return (
    <div className="v2-card group relative flex flex-col gap-4 rounded p-6 transition-colors hover:border-[var(--v2-amber)]">
      <div className="flex items-center justify-between">
        <Icon size={22} strokeWidth={1.7} className="text-[var(--v2-amber)]" />
        <span className="v2-mono text-[11px] text-[var(--v2-ink-faint)]">
          {service.tag}
        </span>
      </div>
      <h3 className="text-[1.02rem] font-bold text-[var(--v2-ink)]">{service.name}</h3>
      <p className="text-[0.9rem] leading-relaxed text-[var(--v2-ink-soft)]">
        {service.copy}
      </p>
      <p className="v2-mono mt-auto pt-2 text-[11px] uppercase tracking-[0.06em] text-[var(--v2-green)]">
        {service.spec}
      </p>
    </div>
  );
}

export function Services2() {
  const [tab, setTab] = useState<"apple" | "laptop">("apple");
  const list = tab === "apple" ? appleServices : laptopServices;

  return (
    <section id="services" className="border-b border-[var(--v2-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead2
            title="Expert repair services"
            lede="From cracked screens to complex motherboard repairs — Apple devices & all major laptop brands covered."
          />

          <div className="v2-mono flex gap-1 rounded border border-[var(--v2-border)] p-1 text-[12px] uppercase tracking-[0.06em]">
            {(["apple", "laptop"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                aria-pressed={tab === key}
                className={`rounded px-4 py-2 transition-colors ${
                  tab === key
                    ? "bg-[var(--v2-amber)] text-[var(--v2-amber-ink)]"
                    : "text-[var(--v2-ink-soft)] hover:text-[var(--v2-ink)]"
                }`}
              >
                {key === "apple" ? "Apple" : "Laptop"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service) => (
            <Tile key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

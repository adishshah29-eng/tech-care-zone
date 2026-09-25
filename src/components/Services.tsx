"use client";

import { useState } from "react";
import { serviceIconMap } from "./icons";
import { SectionHeading } from "./DiagramTag";
import { appleServices, laptopServices, type Service } from "@/lib/content";

function ServiceTile({ service, tone }: { service: Service; tone: "orange" | "blue" }) {
  const Icon = serviceIconMap[service.icon];
  const accent = tone === "orange" ? "var(--brand)" : "var(--navy)";

  return (
    <div className="relative pt-2">
      <div className="flex items-center gap-0">
        <span
          className="font-spec flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12px] font-semibold text-[var(--paper-raised)]"
          style={{ backgroundColor: accent }}
        >
          {service.tag}
        </span>
        <span
          aria-hidden
          className="h-0 flex-1 max-w-6 border-t border-dashed"
          style={{ borderColor: accent }}
        />
        <Icon size={22} strokeWidth={1.75} color={accent} className="shrink-0" />
      </div>

      <div className="mt-4">
        <h3 className="font-display text-[1.05rem] font-bold text-[var(--ink)]">
          {service.name}
        </h3>
        <p className="mt-1.5 max-w-sm text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
          {service.copy}
        </p>
        <p
          className="font-spec mt-3 border-t border-dashed pt-2 text-[12px] uppercase tracking-[0.05em]"
          style={{ borderColor: "var(--paper-line-strong)", color: accent }}
        >
          {service.spec}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const [tab, setTab] = useState<"apple" | "laptop">("apple");
  const list = tab === "apple" ? appleServices : laptopServices;
  const tone = tab === "apple" ? "orange" : "blue";

  return (
    <section id="services" className="border-b border-[var(--paper-line-strong)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            art={false}
            title="Expert repair services"
            lede="From cracked screens to complex motherboard repairs — Apple devices & all major laptop brands covered."
          />

          <div className="font-spec flex gap-1 rounded-sm border border-[var(--paper-line-strong)] bg-[var(--paper-raised)] p-1 text-[13px] uppercase tracking-[0.05em]">
            {(["apple", "laptop"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                aria-pressed={tab === key}
                className={`rounded-sm px-4 py-2 transition-colors ${
                  tab === key
                    ? key === "apple"
                      ? "bg-[var(--brand)] text-[var(--paper-raised)]"
                      : "bg-[var(--navy)] text-[var(--paper-raised)]"
                    : "text-[var(--ink-soft)] hover:text-[var(--ink)]"
                }`}
              >
                {key === "apple" ? "Apple Sheet" : "Laptop Sheet"}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service) => (
            <ServiceTile key={service.id} service={service} tone={tone} />
          ))}
        </div>
      </div>
    </section>
  );
}

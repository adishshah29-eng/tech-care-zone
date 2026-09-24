"use client";

import { useState } from "react";
import { serviceIconMap } from "../icons";
import { SectionHead3 } from "./SectionHead3";
import { ScrollReveal3 } from "./ScrollReveal3";
import { appleServices, laptopServices, type Service } from "@/lib/content";

const blockColors = ["var(--v3-white)", "var(--v3-yellow)", "var(--v3-violet)"];

function Tile({ service, i }: { service: Service; i: number }) {
  const Icon = serviceIconMap[service.icon];
  const bg = blockColors[i % blockColors.length];
  const rotate = i % 2 === 0 ? "-1deg" : "1deg";

  return (
    <div
      className="v3-border v3-shadow flex flex-col gap-3 p-6"
      style={{ backgroundColor: bg, transform: `rotate(${rotate})` }}
    >
      <div className="flex items-center justify-between">
        <span className="v3-border flex h-10 w-10 items-center justify-center bg-[var(--v3-ink)]">
          <Icon size={20} strokeWidth={2} className="text-[var(--v3-yellow)]" />
        </span>
        <span className="text-[12px] font-bold uppercase">{service.tag}</span>
      </div>
      <h3 className="text-[1.1rem] font-bold uppercase leading-tight">{service.name}</h3>
      <p className="text-[0.92rem] font-medium leading-relaxed">{service.copy}</p>
      <p className="mt-auto border-t-2 border-[var(--v3-ink)] pt-2 text-[12px] font-bold uppercase">
        {service.spec}
      </p>
    </div>
  );
}

export function Services3() {
  const [tab, setTab] = useState<"apple" | "laptop">("apple");
  const list = tab === "apple" ? appleServices : laptopServices;

  return (
    <section id="services" className="border-b-4 border-[var(--v3-ink)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHead3
            title="Repair Menu"
            lede="Cracked screens to chip-level motherboard work — Apple and every major laptop brand."
          />

          <div className="v3-border flex bg-[var(--v3-white)] text-[13px] font-bold uppercase">
            {(["apple", "laptop"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setTab(key)}
                aria-pressed={tab === key}
                className={`px-5 py-2.5 ${
                  tab === key ? "bg-[var(--v3-ink)] text-white" : "text-[var(--v3-ink)]"
                }`}
              >
                {key === "apple" ? "Apple" : "Laptop"}
              </button>
            ))}
          </div>
        </div>

        <ScrollReveal3 key={tab} stagger className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => (
            <Tile key={service.id} service={service} i={i} />
          ))}
        </ScrollReveal3>
      </div>
    </section>
  );
}

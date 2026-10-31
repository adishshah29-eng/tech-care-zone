"use client";

import { useState } from "react";
import Image from "next/image";
import { deviceIconMap } from "../icons";
import { SectionHead2 } from "./SectionHead2";
import { appleDevices, laptopBrands, type DeviceEntry } from "@/lib/content";

// Image shown for each device on hover. Swap any path for a dedicated photo
// (e.g. "/v2/devices/iphone-15.webp") without touching the component logic.
const DEFAULT_IMAGE = {
  src: "/v2/circuit.webp",
  alt: "Macro photo of an iPhone motherboard during repair",
};

const deviceImages: Record<string, { src: string; alt: string }> = {
  "iPhone 15 Series": { src: "/v2/circuit.webp", alt: "iPhone logic board close-up" },
  "iPhone 14 Series": { src: "/v2/repair-action.webp", alt: "Technician repairing an iPhone" },
  "iPhone 13 & Older": { src: "/v2/workbench.webp", alt: "Repair workbench with phone parts" },
  "iPad Pro": { src: "/v2/repair-action.webp", alt: "Technician repairing a tablet" },
  "iPad Air / Mini": { src: "/v2/workbench.webp", alt: "Repair workbench with tablet parts" },
  "MacBook Pro M1/M2/M3": { src: "/v2/hero.webp", alt: "MacBook repair in progress" },
  "MacBook Air": { src: "/v2/workbench.webp", alt: "MacBook Air on the repair bench" },
  'iMac 24" / 27"': { src: "/v2/repair-action.webp", alt: "iMac repair" },
  Lenovo: { src: "/v2/hero.webp", alt: "Lenovo laptop repair" },
  Dell: { src: "/v2/workbench.webp", alt: "Dell laptop repair" },
  HP: { src: "/v2/repair-action.webp", alt: "HP laptop repair" },
  Acer: { src: "/v2/hero.webp", alt: "Acer laptop repair" },
  Asus: { src: "/v2/circuit.webp", alt: "Asus laptop board repair" },
};

function Row({
  device,
  active,
  onActivate,
}: {
  device: DeviceEntry;
  active: boolean;
  onActivate: (name: string | null) => void;
}) {
  const Icon = deviceIconMap[device.icon];
  return (
    <li
      tabIndex={0}
      onMouseEnter={() => onActivate(device.name)}
      onMouseLeave={() => onActivate(null)}
      onFocus={() => onActivate(device.name)}
      onBlur={() => onActivate(null)}
      onClick={() => onActivate(device.name)}
      className={`flex cursor-pointer items-center gap-4 border-b border-[var(--v2-border)] py-3.5 transition-colors last:border-b-0 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--v2-amber)] ${
        active ? "bg-white/[0.04]" : ""
      }`}
    >
      <Icon size={18} strokeWidth={1.7} className="shrink-0 text-[var(--v2-amber)]" />
      <span className="flex-1 text-[0.95rem] font-medium text-[var(--v2-ink)]">
        {device.name}
      </span>
      <span className="v2-mono hidden text-[11px] uppercase tracking-[0.04em] text-[var(--v2-ink-faint)] sm:block">
        {device.detail}
      </span>
    </li>
  );
}

export function Devices2() {
  const [active, setActive] = useState<string | null>(null);
  const images = [DEFAULT_IMAGE.src, ...Object.values(deviceImages).map((i) => i.src)];
  const unique = Array.from(new Set(images));
  const current = active ? deviceImages[active] ?? DEFAULT_IMAGE : DEFAULT_IMAGE;
  return (
    <section id="devices" className="border-b border-[var(--v2-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead2
          title="Devices we repair"
          lede="From iPhones to Dell laptops — we have the expertise and tools to fix any device, any brand."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded border border-[var(--v2-border)]">
            {unique.map((src) => (
              <Image
                key={src}
                src={src}
                alt={src === current.src ? current.alt : ""}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={`object-cover transition-opacity duration-500 ${
                  src === current.src ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--v2-bg)]/70 via-transparent to-transparent" />
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="v2-mono text-[12px] uppercase tracking-[0.1em] text-[var(--v2-amber)]">
                Apple Devices
              </h3>
              <ul className="mt-4 border-t border-[var(--v2-border)]">
                {appleDevices.map((d) => (
                  <Row key={d.name} device={d} active={active === d.name} onActivate={setActive} />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="v2-mono text-[12px] uppercase tracking-[0.1em] text-[var(--v2-amber)]">
                Laptop Brands
              </h3>
              <ul className="mt-4 border-t border-[var(--v2-border)]">
                {laptopBrands.map((d) => (
                  <Row key={d.name} device={d} active={active === d.name} onActivate={setActive} />
                ))}
              </ul>
              <p className="mt-5 border-t border-[var(--v2-border)] pt-4 text-[0.9rem] text-[var(--v2-ink-soft)]">
                <strong className="text-[var(--v2-ink)]">Any other brand?</strong> Call
                us — we repair most laptop brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

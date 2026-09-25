import Image from "next/image";
import { deviceIconMap } from "../icons";
import { SectionHead2 } from "./SectionHead2";
import { appleDevices, laptopBrands, type DeviceEntry } from "@/lib/content";

function Row({ device }: { device: DeviceEntry }) {
  const Icon = deviceIconMap[device.icon];
  return (
    <li className="flex items-center gap-4 border-b border-[var(--v2-border)] py-3.5 last:border-b-0">
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
  return (
    <section id="devices" className="border-b border-[var(--v2-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead2
          title="Devices we repair"
          lede="From iPhones to Dell laptops — we have the expertise and tools to fix any device, any brand."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded border border-[var(--v2-border)]">
            <Image
              src="/v2/circuit.webp"
              alt="Macro photo of an iPhone motherboard during repair"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--v2-bg)]/70 via-transparent to-transparent" />
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="v2-mono text-[12px] uppercase tracking-[0.1em] text-[var(--v2-amber)]">
                Apple Devices
              </h3>
              <ul className="mt-4 border-t border-[var(--v2-border)]">
                {appleDevices.map((d) => (
                  <Row key={d.name} device={d} />
                ))}
              </ul>
            </div>

            <div>
              <h3 className="v2-mono text-[12px] uppercase tracking-[0.1em] text-[var(--v2-amber)]">
                Laptop Brands
              </h3>
              <ul className="mt-4 border-t border-[var(--v2-border)]">
                {laptopBrands.map((d) => (
                  <Row key={d.name} device={d} />
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

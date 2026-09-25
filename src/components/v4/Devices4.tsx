import Image from "next/image";
import { deviceIconMap } from "../icons";
import { SectionHead4 } from "./SectionHead4";
import { ScrollReveal3 } from "../v3/ScrollReveal3";
import { appleDevices, laptopBrands, type DeviceEntry } from "@/lib/content";

function Row({ device }: { device: DeviceEntry }) {
  const Icon = deviceIconMap[device.icon];
  return (
    <li className="flex items-center gap-4 border-b border-[var(--v4-trace-dim)] py-3 last:border-b-0">
      <Icon size={18} strokeWidth={1.6} className="shrink-0 text-[var(--v4-gold)]" />
      <span className="flex-1 text-[0.95rem] font-medium text-[var(--v4-silk)]">{device.name}</span>
      <span className="v4-mono hidden text-right text-[10px] uppercase tracking-[0.06em] text-[var(--v4-silk-faint)] sm:block">
        {device.detail}
      </span>
    </li>
  );
}

export function Devices4() {
  return (
    <section id="devices" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="v4-panel p-6 sm:p-10">
          <SectionHead4
            title="Devices we repair"
            lede="From iPhones to Dell laptops — we have the expertise and tools to fix any device, any brand."
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <ScrollReveal3>
              <div className="relative aspect-[5/4] overflow-hidden border border-[var(--v4-trace-dim)]">
                <Image
                  src="/v3/board-macro.webp"
                  alt="Macro photo of an iPhone motherboard during repair"
                  fill
                  sizes="(min-width: 1024px) 480px, 90vw"
                  className="object-cover"
                />
              </div>
            </ScrollReveal3>

            <ScrollReveal3 stagger className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="v4-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--v4-gold)]">
                  Apple Devices
                </h3>
                <ul className="mt-3 border-t border-[var(--v4-trace-dim)]">
                  {appleDevices.map((d) => (
                    <Row key={d.name} device={d} />
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="v4-mono text-[12px] font-medium uppercase tracking-[0.12em] text-[var(--v4-gold)]">
                  Laptop Brands
                </h3>
                <ul className="mt-3 border-t border-[var(--v4-trace-dim)]">
                  {laptopBrands.map((d) => (
                    <Row key={d.name} device={d} />
                  ))}
                </ul>
                <p className="mt-4 border-t border-[var(--v4-trace-dim)] pt-4 text-[0.9rem] text-[var(--v4-silk-soft)]">
                  <strong className="text-[var(--v4-silk)]">Any other brand?</strong> Call us — we repair most laptop brands.
                </p>
              </div>
            </ScrollReveal3>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { deviceIconMap } from "../icons";
import { SectionHead3 } from "./SectionHead3";
import { ScrollReveal3 } from "./ScrollReveal3";
import { appleDevices, laptopBrands, type DeviceEntry } from "@/lib/content";

function Chip({ device }: { device: DeviceEntry }) {
  const Icon = deviceIconMap[device.icon];
  return (
    <div className="v3-border flex items-center gap-3 bg-[var(--v3-white)] px-4 py-3">
      <Icon size={18} strokeWidth={2} />
      <div>
        <p className="text-[0.9rem] font-bold uppercase leading-none">{device.name}</p>
        <p className="mt-1 text-[10px] font-semibold uppercase text-[var(--v3-ink)]/60">
          {device.detail}
        </p>
      </div>
    </div>
  );
}

export function Devices3() {
  return (
    <section id="devices" className="border-b-4 border-[var(--v3-ink)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead3
          title="Devices we repair"
          tone="red"
          lede="From iPhones to Dell laptops — any device, any brand, any damage."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="v3-border v3-shadow-lg relative aspect-square -rotate-1 overflow-hidden bg-[var(--v3-white)] p-2">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/v3/board-macro.webp"
                alt="Macro photo of an iPhone motherboard during repair, Apple logo visible"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <ScrollReveal3 stagger className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="v3-border inline-block bg-[var(--v3-red)] px-3 py-1 text-[12px] font-bold uppercase text-white">
                Apple Devices
              </h3>
              <div className="mt-4 grid gap-3">
                {appleDevices.map((d) => (
                  <Chip key={d.name} device={d} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="v3-border inline-block bg-[var(--v3-blue)] px-3 py-1 text-[12px] font-bold uppercase text-white">
                Laptop Brands
              </h3>
              <div className="mt-4 grid gap-3">
                {laptopBrands.map((d) => (
                  <Chip key={d.name} device={d} />
                ))}
              </div>
              <p className="v3-border mt-4 bg-[var(--v3-yellow)] p-3 text-[0.85rem] font-bold uppercase">
                Any other brand? Call us.
              </p>
            </div>
          </ScrollReveal3>
        </div>
      </div>
    </section>
  );
}

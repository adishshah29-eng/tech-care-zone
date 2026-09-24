import { deviceIconMap } from "./icons";
import { SectionHeading } from "./DiagramTag";
import { appleDevices, laptopBrands, type DeviceEntry } from "@/lib/content";

function DeviceRow({ device, tone }: { device: DeviceEntry; tone: "orange" | "blue" }) {
  const Icon = deviceIconMap[device.icon];
  const accent = tone === "orange" ? "var(--orange)" : "var(--blue)";

  return (
    <li className="flex items-center gap-4 border-b border-dashed border-[var(--paper-line-strong)] py-3.5 last:border-b-0">
      <Icon size={20} strokeWidth={1.75} color={accent} className="shrink-0" />
      <span className="font-display flex-1 text-[0.98rem] font-bold text-[var(--ink)]">
        {device.name}
      </span>
      <span className="font-spec hidden text-right text-[12px] uppercase tracking-[0.04em] text-[var(--ink-faint)] sm:block">
        {device.detail}
      </span>
    </li>
  );
}

export function Devices() {
  return (
    <section id="devices" className="border-b border-[var(--paper-line-strong)] bg-[var(--paper-raised)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Devices we repair"
          lede="From iPhones to Dell laptops — we have the expertise and tools to fix any device, any brand."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="font-spec text-[13px] uppercase tracking-[0.08em] text-[var(--orange)]">
              Apple Devices
            </h3>
            <ul className="mt-4 border-t border-[var(--paper-line-strong)]">
              {appleDevices.map((d) => (
                <DeviceRow key={d.name} device={d} tone="orange" />
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-spec text-[13px] uppercase tracking-[0.08em] text-[var(--blue)]">
              Laptop Brands We Repair
            </h3>
            <ul className="mt-4 border-t border-[var(--paper-line-strong)]">
              {laptopBrands.map((d) => (
                <DeviceRow key={d.name} device={d} tone="blue" />
              ))}
            </ul>
            <p className="mt-5 border-t border-dashed border-[var(--paper-line-strong)] pt-4 text-[0.95rem] text-[var(--ink-soft)]">
              <strong className="text-[var(--ink)]">Any other brand?</strong>{" "}
              Call us — we repair most laptop brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

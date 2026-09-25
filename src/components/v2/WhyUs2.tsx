import { whyUsIconMap } from "../icons";
import { SectionHead2 } from "./SectionHead2";
import { whyUs } from "@/lib/content";

export function WhyUs2() {
  return (
    <section id="why-us" className="border-b border-[var(--v2-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead2
          title="Powai's most trusted repair centre"
          lede="Apple devices & all major laptop brands — expert technicians, genuine parts, honest pricing."
        />

        <div className="v2-mono mt-14 flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-[var(--v2-ink-faint)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--v2-green)]" />
          Status readout
        </div>
        <div className="v2-glow-line mt-3" />

        <div className="mt-8 grid divide-y divide-[var(--v2-border)] sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {whyUs.map((item, i) => {
            const Icon = whyUsIconMap[item.icon];
            return (
              <div
                key={item.title}
                className={`flex flex-col gap-3 py-6 sm:px-6 sm:py-0 ${i === 0 ? "sm:pl-0" : ""}`}
              >
                <Icon size={24} strokeWidth={1.6} className="text-[var(--v2-amber)]" />
                <h3 className="text-[1.02rem] font-bold text-[var(--v2-ink)]">
                  {item.title}
                </h3>
                <p className="text-[0.9rem] leading-relaxed text-[var(--v2-ink-soft)]">
                  {item.copy}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

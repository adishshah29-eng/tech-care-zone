import { processIconMap } from "../icons";
import { SectionHead4 } from "./SectionHead4";
import { ScrollReveal3 } from "../v3/ScrollReveal3";
import { process } from "@/lib/content";

export function Process4() {
  return (
    <section id="process" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="v4-panel p-6 sm:p-10">
          <SectionHead4
            title="Simple 4-step repair process"
            lede="Getting your device repaired is easy. Here's what happens from start to finish."
          />

          <ScrollReveal3 stagger className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-[15px] hidden h-px bg-[var(--v4-trace)] lg:block"
            />
            {process.map((item) => {
              const Icon = processIconMap[item.icon];
              return (
                <div key={item.step} className="relative">
                  <span className="v4-mono relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--v4-gold)] bg-[var(--v4-mask)] text-[11px] font-bold text-[var(--v4-gold)]">
                    {item.step}
                  </span>
                  <Icon size={22} strokeWidth={1.6} className="mt-5 text-[var(--v4-trace)]" />
                  <h3 className="mt-3 text-[1.1rem] font-semibold text-[var(--v4-silk)]">{item.title}</h3>
                  <p className="mt-2 text-[0.93rem] leading-relaxed text-[var(--v4-silk-soft)]">{item.copy}</p>
                </div>
              );
            })}
          </ScrollReveal3>
        </div>
      </div>
    </section>
  );
}

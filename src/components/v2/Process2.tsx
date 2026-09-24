import { processIconMap } from "../icons";
import { SectionHead2 } from "./SectionHead2";
import { process } from "@/lib/content";

export function Process2() {
  return (
    <section className="border-b border-[var(--v2-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead2
          title="Simple 4-step repair process"
          lede="Getting your device repaired is easy. Here's what happens from start to finish."
        />

        <div className="mt-14 flex flex-col sm:flex-row">
          {process.map((item, i) => {
            const Icon = processIconMap[item.icon];
            return (
              <div key={item.step} className="relative flex-1 border-t-2 border-[var(--v2-border)] pt-6 sm:border-l-2 sm:border-t-0 sm:pl-6 sm:pt-0">
                <span
                  className="v2-mono absolute -top-[15px] left-0 flex h-7 w-7 items-center justify-center rounded-full border-2 text-[11px] font-bold sm:-left-[15px] sm:top-0"
                  style={{
                    borderColor: "var(--v2-amber)",
                    background: "var(--v2-bg)",
                    color: "var(--v2-amber)",
                  }}
                >
                  {item.step}
                </span>
                <Icon size={22} strokeWidth={1.6} className="mt-6 text-[var(--v2-ink-soft)] sm:mt-2" />
                <h3 className="mt-3 text-[1.02rem] font-bold text-[var(--v2-ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[240px] text-[0.9rem] leading-relaxed text-[var(--v2-ink-soft)]">
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

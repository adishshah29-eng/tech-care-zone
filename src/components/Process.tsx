import { processIconMap } from "./icons";
import { SectionHeading } from "./DiagramTag";
import { process } from "@/lib/content";

export function Process() {
  return (
    <section className="border-b border-[var(--paper-line-strong)] bg-[var(--paper-raised)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Simple 4-step repair process"
          lede="Getting your device repaired is easy. Here's what happens from start to finish."
        />

        <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden
            className="pointer-events-none absolute top-6 hidden h-px w-full border-t border-dashed border-[var(--paper-line-strong)] lg:block"
          />
          {process.map((item) => {
            const Icon = processIconMap[item.icon];
            return (
              <li key={item.step} className="relative flex flex-col gap-3">
                <div className="relative z-10 flex items-center gap-3">
                  <span className="font-spec flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand)] bg-[var(--paper-raised)] text-[15px] font-semibold text-[var(--brand)]">
                    {item.step}
                  </span>
                  <Icon size={22} strokeWidth={1.75} className="text-[var(--ink-soft)]" />
                </div>
                <h3 className="font-display text-[1.05rem] font-bold text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                  {item.copy}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

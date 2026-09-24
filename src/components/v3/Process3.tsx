import { processIconMap } from "../icons";
import { SectionHead3 } from "./SectionHead3";
import { ScrollReveal3 } from "./ScrollReveal3";
import { process } from "@/lib/content";

const colors = ["var(--v3-red)", "var(--v3-blue)", "var(--v3-yellow)", "var(--v3-violet)"];

export function Process3() {
  return (
    <section id="process" className="border-b-4 border-[var(--v3-ink)] bg-[var(--v3-white)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead3 title="How it works" tone="blue" lede="Four steps. No jargon, no surprises." />

        <ScrollReveal3 stagger className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((item, i) => {
            const Icon = processIconMap[item.icon];
            return (
              <div key={item.step} className="v3-border v3-shadow bg-[var(--v3-bg)] p-6">
                <span
                  className="v3-border mb-4 inline-flex h-12 w-12 items-center justify-center text-[1.1rem] font-bold text-white"
                  style={{ backgroundColor: colors[i] }}
                >
                  {item.step}
                </span>
                <Icon size={22} strokeWidth={2} className="mb-2" />
                <h3 className="text-[1.05rem] font-bold uppercase">{item.title}</h3>
                <p className="mt-2 text-[0.9rem] font-medium leading-relaxed">{item.copy}</p>
              </div>
            );
          })}
        </ScrollReveal3>
      </div>
    </section>
  );
}

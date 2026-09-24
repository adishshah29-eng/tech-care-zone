import { whyUsIconMap } from "../icons";
import { SectionHead3 } from "./SectionHead3";
import { ScrollReveal3 } from "./ScrollReveal3";
import { whyUs } from "@/lib/content";

const colors = ["var(--v3-yellow)", "var(--v3-red)", "var(--v3-blue)", "var(--v3-violet)"];

export function WhyUs3() {
  return (
    <section className="border-b-4 border-[var(--v3-ink)] bg-[var(--v3-white)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead3
          title="Why Powai trusts us"
          lede="No fine print. No excuses. Just honest, fast repair work."
        />

        <ScrollReveal3 stagger className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => {
            const Icon = whyUsIconMap[item.icon];
            return (
              <div
                key={item.title}
                className="v3-border v3-shadow flex flex-col gap-3 p-6"
                style={{ backgroundColor: colors[i], transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)` }}
              >
                <Icon size={26} strokeWidth={2} />
                <h3 className="text-[1.05rem] font-bold uppercase leading-tight">{item.title}</h3>
                <p className="text-[0.9rem] font-medium leading-relaxed">{item.copy}</p>
              </div>
            );
          })}
        </ScrollReveal3>
      </div>
    </section>
  );
}

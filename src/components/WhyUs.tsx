import { whyUsIconMap } from "./icons";
import { SectionHeading } from "./DiagramTag";
import { whyUs } from "@/lib/content";

const rotations = ["-2.5deg", "1.5deg", "-1deg", "2deg"];

export function WhyUs() {
  return (
    <section id="why-us" className="border-b border-[var(--paper-line-strong)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Powai's most trusted repair centre"
          lede="Apple devices & all major laptop brands — expert technicians, genuine parts, honest pricing."
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, i) => {
            const Icon = whyUsIconMap[item.icon];
            return (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div
                  className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-[var(--green)] text-[var(--green)]"
                  style={{ transform: `rotate(${rotations[i]})` }}
                >
                  <div className="flex h-[88px] w-[88px] flex-col items-center justify-center gap-1 rounded-full border border-[var(--green)]">
                    <Icon size={26} strokeWidth={1.75} />
                    <span className="font-spec text-[9px] uppercase tracking-[0.06em]">
                      Verified
                    </span>
                  </div>
                </div>
                <h3 className="font-display mt-5 text-[1.05rem] font-bold text-[var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-[0.92rem] leading-relaxed text-[var(--ink-soft)]">
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

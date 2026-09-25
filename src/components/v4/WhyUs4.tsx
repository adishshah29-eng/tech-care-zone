import Image from "next/image";
import { whyUsIconMap } from "../icons";
import { SectionHead4 } from "./SectionHead4";
import { ScrollReveal3 } from "../v3/ScrollReveal3";
import { whyUs } from "@/lib/content";

function ChipIcon({ children }: { children: React.ReactNode }) {
  const pins =
    "absolute bg-[var(--v4-gold)] [background-image:none]";
  return (
    <span className="relative inline-flex h-14 w-14 items-center justify-center border border-[var(--v4-trace)] bg-[var(--v4-mask-2)] text-[var(--v4-silk)]">
      {[0, 1, 2].map((i) => (
        <span key={`t${i}`} className={`${pins} -top-[5px] h-[5px] w-[3px]`} style={{ left: 11 + i * 14 }} />
      ))}
      {[0, 1, 2].map((i) => (
        <span key={`b${i}`} className={`${pins} -bottom-[5px] h-[5px] w-[3px]`} style={{ left: 11 + i * 14 }} />
      ))}
      {[0, 1, 2].map((i) => (
        <span key={`l${i}`} className={`${pins} -left-[5px] h-[3px] w-[5px]`} style={{ top: 11 + i * 14 }} />
      ))}
      {[0, 1, 2].map((i) => (
        <span key={`r${i}`} className={`${pins} -right-[5px] h-[3px] w-[5px]`} style={{ top: 11 + i * 14 }} />
      ))}
      {children}
    </span>
  );
}

export function WhyUs4() {
  return (
    <section id="why-us" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="v4-panel grid gap-10 p-6 sm:p-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <SectionHead4
              title="Powai's most trusted repair centre"
              lede="Apple devices & all major laptop brands — expert technicians, genuine parts, honest pricing."
            />
            <ScrollReveal3 stagger className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {whyUs.map((item) => {
                const Icon = whyUsIconMap[item.icon];
                return (
                  <div key={item.title} className="flex gap-5">
                    <ChipIcon>
                      <Icon size={22} strokeWidth={1.6} className="text-[var(--v4-gold)]" />
                    </ChipIcon>
                    <div>
                      <h3 className="text-[1.05rem] font-semibold text-[var(--v4-silk)]">{item.title}</h3>
                      <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[var(--v4-silk-soft)]">{item.copy}</p>
                    </div>
                  </div>
                );
              })}
            </ScrollReveal3>
          </div>

          <ScrollReveal3>
            <div className="relative aspect-[4/5] overflow-hidden border border-[var(--v4-trace-dim)]">
              <Image
                src="/v3/action-macro.webp"
                alt="Close-up of a technician's hands repairing a phone with tweezers"
                fill
                sizes="(min-width: 1024px) 360px, 90vw"
                className="object-cover"
              />
            </div>
          </ScrollReveal3>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { ArrowRight } from "../icons";
import { business, stats } from "@/lib/content";
import { ScrollReveal3 } from "./ScrollReveal3";

export function Hero3() {
  return (
    <section id="top" className="border-b-4 border-[var(--v3-ink)] bg-[var(--v3-yellow)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <ScrollReveal3>
          <span className="v3-border inline-block -rotate-2 bg-[var(--v3-white)] px-3 py-1 text-[13px] font-bold uppercase">
            Powai&apos;s Repair Squad
          </span>

          <h1 className="mt-5 text-[clamp(2.6rem,6.5vw,4.6rem)] font-bold uppercase leading-[0.98]">
            We fix Apple
            <br />
            <span className="v3-border bg-[var(--v3-white)] px-2">&amp; laptops</span>
            <br />
            fast.
          </h1>

          <p className="mt-6 max-w-md text-[1.1rem] font-semibold leading-relaxed">
            iPhone, iPad, iMac, MacBook, Lenovo, Dell, HP, Acer &amp; Asus.
            Genuine parts. Warranty on every single repair.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="v3-border v3-shadow-lg v3-press inline-flex items-center gap-2 bg-[var(--v3-red)] px-7 py-4 text-[15px] font-bold uppercase text-white"
            >
              Book a Repair
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="v3-border v3-shadow v3-press inline-flex items-center bg-[var(--v3-white)] px-6 py-4 text-[15px] font-bold uppercase"
            >
              See Services
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="v3-border bg-[var(--v3-white)] px-4 py-3"
                style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
              >
                <p className="text-[10px] font-bold uppercase text-[var(--v3-ink)]/70">
                  {stat.label}
                </p>
                <p className="text-[1.3rem] font-bold">
                  {stat.value}
                  {stat.suffix ?? ""}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal3>

        <div className="relative mx-auto w-full max-w-sm rotate-2">
          <span className="v3-border absolute -left-10 -top-6 -rotate-6 overflow-hidden bg-[var(--v3-white)] p-1.5 shadow-[4px_4px_0_var(--v3-ink)]">
            <span className="relative block h-20 w-20 overflow-hidden">
              <Image
                src="/v3/action-macro.webp"
                alt="Close-up of a technician's hands repairing a phone"
                fill
                className="object-cover"
              />
            </span>
          </span>

          <div className="v3-border v3-shadow-lg overflow-hidden bg-[var(--v3-white)] p-3">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/v3/portrait.webp"
                alt="Smiling repair technician at the workbench"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="mt-3 text-center text-[13px] font-bold uppercase">
              {business.tagline}
            </p>
          </div>
          <span className="v3-border absolute -bottom-5 -left-5 -rotate-6 bg-[var(--v3-blue)] px-3 py-1.5 text-[12px] font-bold uppercase text-white">
            6-Month Warranty
          </span>
        </div>
      </div>
    </section>
  );
}

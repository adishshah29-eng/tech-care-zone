import Image from "next/image";
import { ArrowRight } from "../icons";
import { business, stats } from "@/lib/content";
import { ScrollReveal3 } from "../v3/ScrollReveal3";

export function Hero4() {
  return (
    <section id="top" className="pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <ScrollReveal3>
          <h1 className="text-[clamp(2.5rem,6vw,4.4rem)] font-bold leading-[1.02] text-[var(--v4-silk)]">
            We fix Apple devices <span className="text-[var(--v4-trace)]">&amp; every laptop brand</span> down to the board.
          </h1>

          <p className="mt-6 max-w-lg text-[1.1rem] leading-relaxed text-[var(--v4-silk-soft)]">
            Expert repair for iPhone, iPad, iMac, MacBook, Lenovo, Dell, HP, Acer &amp; Asus.
            Fast turnaround, genuine parts, warranty on every repair.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="v4-btn-gold v4-mono inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-[13px] font-bold uppercase tracking-[0.1em]"
            >
              Book a Repair
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="v4-btn-ghost v4-mono inline-flex items-center rounded-sm px-6 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em]"
            >
              Explore Services
            </a>
          </div>

          <dl className="v4-mono mt-12 grid max-w-xl grid-cols-2 border border-[var(--v4-trace-dim)] bg-[var(--v4-panel)] sm:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-4 py-3 ${i > 0 ? "sm:border-l sm:border-[var(--v4-trace-dim)]" : ""} ${i % 2 === 1 ? "border-l border-[var(--v4-trace-dim)] sm:border-l" : ""} ${i > 1 ? "border-t border-[var(--v4-trace-dim)] sm:border-t-0" : ""}`}
              >
                <dt className="text-[10px] uppercase tracking-[0.1em] text-[var(--v4-silk-faint)]">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-[1.15rem] font-bold text-[var(--v4-gold)]">
                  {stat.value}
                  {stat.suffix ?? ""}
                </dd>
              </div>
            ))}
          </dl>
        </ScrollReveal3>

        <ScrollReveal3>
          <div className="v4-panel mx-auto max-w-md p-3">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/v3/portrait.webp"
                alt="Smiling repair technician at the workbench"
                fill
                sizes="(min-width: 1024px) 420px, 90vw"
                className="object-cover"
                priority
              />
            </div>
            <p className="v4-mono mt-3 text-center text-[11px] uppercase tracking-[0.14em] text-[var(--v4-silk-soft)]">
              {business.tagline}
            </p>
          </div>
        </ScrollReveal3>
      </div>
    </section>
  );
}

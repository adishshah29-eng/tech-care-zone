import { SectionHead4 } from "./SectionHead4";
import { ScrollReveal3 } from "../v3/ScrollReveal3";
import { reviews } from "@/lib/content";

export function Reviews4() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="v4-panel p-6 sm:p-10">
          <SectionHead4
            title="What our customers say"
            lede="Real reviews from real customers across Mumbai who trusted us with their Apple devices."
          />

          <ScrollReveal3 stagger className="mt-12 grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <figure key={r.name} className="flex flex-col border-t border-[var(--v4-trace)] pt-5">
                <div className="flex gap-1.5" role="img" aria-label="5 out of 5 rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="h-2.5 w-2.5 rounded-full bg-[var(--v4-gold)]" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[0.97rem] leading-relaxed text-[var(--v4-silk)]">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="v4-mono mt-5 text-[11px] uppercase tracking-[0.08em] text-[var(--v4-silk-faint)]">
                  <span className="text-[var(--v4-silk-soft)]">{r.name}</span> — {r.place}
                </figcaption>
              </figure>
            ))}
          </ScrollReveal3>
        </div>
      </div>
    </section>
  );
}

import { SectionHead3 } from "./SectionHead3";
import { ScrollReveal3 } from "./ScrollReveal3";
import { reviews } from "@/lib/content";

const colors = ["var(--v3-white)", "var(--v3-yellow)"];

export function Reviews3() {
  return (
    <section className="border-b-4 border-[var(--v3-ink)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead3
          title="Real talk from real customers"
          tone="red"
          lede="Every review below is genuine — from actual Mumbai customers."
        />

        <ScrollReveal3 stagger className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <figure
              key={review.name}
              className="v3-border v3-shadow flex flex-col justify-between p-6"
              style={{
                backgroundColor: colors[i % 2],
                transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
              }}
            >
              <div>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <span key={s} className="v3-border h-3 w-3 bg-[var(--v3-red)]" />
                  ))}
                </div>
                <blockquote className="mt-4 text-[0.95rem] font-medium leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t-2 border-[var(--v3-ink)] pt-3 text-[12px] font-bold uppercase">
                {review.name} — {review.place}
              </figcaption>
            </figure>
          ))}
        </ScrollReveal3>
      </div>
    </section>
  );
}

import { SectionHead2 } from "./SectionHead2";
import { reviews } from "@/lib/content";

export function Reviews2() {
  return (
    <section className="border-b border-[var(--v2-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHead2
          title="What our customers say"
          lede="Real reviews from real customers across Mumbai who trusted us with their Apple devices."
        />

        <div className="v2-mono mt-10 flex items-center justify-between border-b border-[var(--v2-border)] pb-2 text-[11px] uppercase tracking-[0.1em] text-[var(--v2-ink-faint)]">
          <span>Log entry</span>
          <span>Rating</span>
        </div>

        <div className="divide-y divide-[var(--v2-border)]">
          {reviews.map((review, i) => (
            <div key={review.name} className="grid gap-3 py-7 sm:grid-cols-[110px_1fr_140px] sm:items-start sm:gap-6">
              <span className="v2-mono text-[12px] text-[var(--v2-ink-faint)]">
                #{String(i + 1).padStart(3, "0")}
              </span>

              <div>
                <p className="text-[0.98rem] leading-relaxed text-[var(--v2-ink)]">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="v2-mono mt-3 text-[11px] uppercase tracking-[0.08em] text-[var(--v2-ink-faint)]">
                  <span className="text-[var(--v2-ink-soft)]">{review.name}</span> — {review.place}
                </p>
              </div>

              <div className="v2-mono flex gap-3 sm:justify-end sm:text-right">
                <span className="flex items-center gap-1 text-[var(--v2-green)]">
                  {"5.0"}
                  <span className="text-[11px] text-[var(--v2-ink-faint)]">/5.0</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

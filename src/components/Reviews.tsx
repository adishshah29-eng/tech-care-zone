import { SectionHeading } from "./DiagramTag";
import { reviews } from "@/lib/content";

function RatingPunch() {
  return (
    <div className="flex gap-1" role="img" aria-label="5 out of 5 rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="h-2.5 w-2.5 rounded-[2px] bg-[var(--brand)]" />
      ))}
    </div>
  );
}

export function Reviews() {
  return (
    <section className="border-b border-[var(--paper-line-strong)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="What our customers say"
          lede="Real reviews from real customers across Mumbai who trusted us with their Apple devices."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="relative flex flex-col justify-between border border-[var(--paper-line-strong)] bg-[var(--paper-raised)] p-6"
            >
              <span
                className="stamp-rotate font-spec pointer-events-none absolute -right-3 -top-3 flex h-14 w-14 items-center justify-center rounded-full border border-dashed border-[var(--green)] text-[7px] uppercase tracking-[0.1em] text-[var(--green)]"
                aria-hidden
              >
                Verified · Verified
              </span>

              <div>
                <RatingPunch />
                <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-[var(--ink)]">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              </div>

              <figcaption className="font-spec mt-6 border-t border-dashed border-[var(--paper-line-strong)] pt-3 text-[12px] uppercase tracking-[0.05em] text-[var(--ink-faint)]">
                <span className="font-semibold text-[var(--ink-soft)]">{review.name}</span>
                {" — "}
                {review.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

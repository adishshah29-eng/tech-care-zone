import { ScrollReveal3 } from "../v3/ScrollReveal3";

export function SectionHead4({ title, lede }: { title: string; lede?: string }) {
  return (
    <ScrollReveal3 className="max-w-2xl">
      <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.05] text-[var(--v4-silk)]">
        {title}
      </h2>
      {lede && (
        <p className="mt-3 text-[1.05rem] leading-relaxed text-[var(--v4-silk-soft)]">{lede}</p>
      )}
    </ScrollReveal3>
  );
}

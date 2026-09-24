import { ScrollReveal3 } from "./ScrollReveal3";

export function SectionHead3({
  title,
  lede,
  tone = "ink",
}: {
  title: string;
  lede?: string;
  tone?: "ink" | "red" | "blue";
}) {
  const toneColor = { ink: "var(--v3-ink)", red: "var(--v3-red)", blue: "var(--v3-blue)" }[tone];

  return (
    <ScrollReveal3 className="max-w-2xl">
      <h2
        className="text-[clamp(2rem,4.5vw,3.2rem)] font-bold uppercase leading-[1.02]"
        style={{ color: toneColor }}
      >
        {title}
      </h2>
      {lede && (
        <p className="mt-3 text-[1.05rem] font-medium leading-relaxed text-[var(--v3-ink)]">
          {lede}
        </p>
      )}
    </ScrollReveal3>
  );
}

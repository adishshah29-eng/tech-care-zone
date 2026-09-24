import { Phone, MessageCircle } from "../icons";
import { business } from "@/lib/content";

export function ClosingCta2() {
  return (
    <section className="border-b border-[var(--v2-border)] py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-bold text-[var(--v2-ink)]">
          Ready to get your device fixed?
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${business.phoneHref}`}
            className="v2-btn v2-btn-amber inline-flex items-center gap-2 rounded px-5 py-2.5 v2-mono text-[13px] font-bold uppercase tracking-[0.06em]"
          >
            <Phone size={16} />
            Call Now
          </a>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="v2-btn inline-flex items-center gap-2 rounded border border-[var(--v2-border)] px-5 py-2.5 v2-mono text-[13px] font-bold uppercase tracking-[0.06em] text-[var(--v2-ink)] hover:border-[var(--v2-amber)]"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

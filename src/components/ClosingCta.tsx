import { Phone, MessageCircle } from "./icons";
import { business } from "@/lib/content";

export function ClosingCta() {
  return (
    <section className="border-b border-[var(--paper-line-strong)] bg-[var(--brand)] py-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-bold text-[var(--paper-raised)]">
          Ready to get your device fixed?
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${business.phoneHref}`}
            className="inline-flex items-center gap-2 rounded-sm border-2 border-[var(--paper-raised)] bg-[var(--paper-raised)] px-5 py-2.5 font-spec text-[13px] font-semibold uppercase tracking-[0.05em] text-[var(--brand-ink)]"
          >
            <Phone size={16} />
            Call Now
          </a>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border-2 border-[var(--paper-raised)] px-5 py-2.5 font-spec text-[13px] font-semibold uppercase tracking-[0.05em] text-[var(--paper-raised)]"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

import { Phone, MessageCircle } from "../icons";
import { business } from "@/lib/content";

export function ClosingCta3() {
  return (
    <section className="border-b-4 border-[var(--v3-ink)] bg-[var(--v3-red)] py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold uppercase text-white">
          Ready to get fixed?
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={`tel:${business.phoneHref}`}
            className="v3-border v3-shadow v3-press inline-flex items-center gap-2 bg-[var(--v3-yellow)] px-5 py-2.5 text-[13px] font-bold uppercase"
          >
            <Phone size={16} />
            Call Now
          </a>
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="v3-border v3-shadow v3-press inline-flex items-center gap-2 bg-[var(--v3-white)] px-5 py-2.5 text-[13px] font-bold uppercase"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

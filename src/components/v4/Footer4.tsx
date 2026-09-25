import { Logo } from "@/components/Logo";
import { Phone, MessageCircle } from "../icons";
import { business, footerLinks } from "@/lib/content";

function Col({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="v4-mono text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--v4-silk-faint)]">
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-[0.9rem] text-[var(--v4-silk-soft)]">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Footer4() {
  return (
    <footer className="pb-14 pt-12">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="v4-panel p-6 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 border-b border-[var(--v4-trace-dim)] pb-8 sm:flex-row sm:items-center">
            <h2 className="text-[clamp(1.5rem,3vw,2.1rem)] font-semibold text-[var(--v4-silk)]">
              Ready to get your device fixed?
            </h2>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${business.phoneHref}`}
                className="v4-btn-gold v4-mono inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.1em]"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href={business.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="v4-btn-ghost v4-mono inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.1em]"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo variant="light" full className="h-14 w-auto" />
              <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-[var(--v4-silk-soft)]">
                Mumbai&apos;s most trusted Apple device repair centre. We fix iPhones, iPads, MacBooks and iMacs with
                genuine parts and expert care.
              </p>
            </div>
            <Col title="Services" items={footerLinks.services} />
            <Col title="Devices" items={footerLinks.devices} />
            <Col title="Company" items={footerLinks.company} />
          </div>

          <div className="v4-mono mt-12 flex flex-col justify-between gap-2 border-t border-[var(--v4-trace-dim)] pt-6 text-[11px] uppercase tracking-[0.1em] text-[var(--v4-silk-faint)] sm:flex-row">
            <span>
              © {new Date().getFullYear()} {business.name}. All rights reserved. Mumbai, India.
            </span>
            <span id="pcb-status" className="text-[var(--v4-gold)]">
              ROUTING 0%
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

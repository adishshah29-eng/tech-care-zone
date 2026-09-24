import { business, footerLinks } from "@/lib/content";

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-spec text-[12px] uppercase tracking-[0.08em] text-[var(--ink-faint)]">
        {title}
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-[0.9rem] text-[var(--ink-soft)]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-spec flex h-9 w-9 items-center justify-center rounded border-2 border-[var(--ink)] text-[13px] font-semibold">
                {business.shortName}
              </span>
              <span className="font-display text-[1rem] font-bold">{business.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-[0.9rem] leading-relaxed text-[var(--ink-soft)]">
              Mumbai&apos;s most trusted Apple device repair centre. We fix
              iPhones, iPads, MacBooks and iMacs with genuine parts and expert
              care.
            </p>
            <p className="font-spec mt-4 text-[12px] uppercase tracking-[0.06em] text-[var(--ink-faint)]">
              {business.tagline}
            </p>
          </div>

          <FooterColumn title="Services" items={footerLinks.services} />
          <FooterColumn title="Devices" items={footerLinks.devices} />
          <FooterColumn title="Company" items={footerLinks.company} />
        </div>

        <div className="mt-14 border-t border-dashed border-[var(--paper-line-strong)] pt-6 text-[0.85rem] text-[var(--ink-faint)]">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
          Mumbai, India.
        </div>
      </div>
    </footer>
  );
}

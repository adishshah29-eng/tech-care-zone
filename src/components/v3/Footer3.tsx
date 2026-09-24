import { business, footerLinks } from "@/lib/content";

function Col({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-[12px] font-bold uppercase">{title}</h3>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li key={item} className="text-[0.9rem] font-medium">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function Footer3() {
  return (
    <footer className="bg-[var(--v3-white)] py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="v3-border flex h-9 w-9 items-center justify-center bg-[var(--v3-yellow)] text-[13px] font-black">
                {business.shortName}
              </span>
              <span className="text-[1rem] font-bold uppercase">{business.name}</span>
            </div>
            <p className="mt-4 max-w-xs text-[0.9rem] font-medium leading-relaxed">
              Mumbai&apos;s most trusted Apple device repair centre. We fix
              iPhones, iPads, MacBooks and iMacs with genuine parts and
              expert care.
            </p>
            <p className="mt-4 text-[11px] font-bold uppercase text-[var(--v3-ink)]/60">
              {business.tagline}
            </p>
          </div>

          <Col title="Services" items={footerLinks.services} />
          <Col title="Devices" items={footerLinks.devices} />
          <Col title="Company" items={footerLinks.company} />
        </div>

        <div className="mt-14 border-t-4 border-[var(--v3-ink)] pt-6 text-[0.85rem] font-medium">
          © {new Date().getFullYear()} {business.name}. All rights reserved. Mumbai, India.
        </div>
      </div>
    </footer>
  );
}

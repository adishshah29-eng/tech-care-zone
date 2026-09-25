"use client";

import { useState } from "react";
import { Logo } from "@/components/Logo";
import { Menu, X } from "./icons";
import { business } from "@/lib/content";

const links = [
  { href: "#services", label: "Services" },
  { href: "#devices", label: "Devices" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--paper-line-strong)] bg-[var(--paper)]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center gap-3">
          <Logo variant="dark" className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-spec text-[13px] uppercase tracking-[0.08em] text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="stamp-btn hidden rounded-sm bg-[var(--brand)] px-4 py-2 font-spec text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--paper-raised)] transition-transform hover:-rotate-1 sm:inline-block"
          >
            Book Repair
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded border border-[var(--paper-line-strong)] md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-[var(--paper-line-strong)] px-5 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-spec py-2 text-[13px] uppercase tracking-[0.08em] text-[var(--ink-soft)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-sm border-2 border-[var(--brand)] bg-[var(--brand)] px-4 py-2 text-center font-spec text-[13px] font-semibold uppercase tracking-[0.06em] text-[var(--paper-raised)]"
          >
            Book Repair
          </a>
        </nav>
      )}
    </header>
  );
}

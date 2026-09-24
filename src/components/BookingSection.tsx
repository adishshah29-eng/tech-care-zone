"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock, ArrowRight } from "./icons";
import { SectionHeading } from "./DiagramTag";
import { business, deviceOptions, issueOptions } from "@/lib/content";

const fieldClass =
  "w-full border-0 border-b-2 border-dashed border-[var(--paper-line-strong)] bg-transparent py-2.5 text-[0.95rem] text-[var(--ink)] placeholder:text-[var(--ink-faint)] focus:border-[var(--orange)] focus:outline-none";

export function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="border-b border-[var(--paper-line-strong)] bg-[var(--paper-raised)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Book your repair today"
          lede="Fill in the form below or contact us directly. We'll get back to you within minutes."
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <ContactRow icon={MapPin} label="Visit Us">
              {business.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </ContactRow>
            <ContactRow icon={Phone} label="Call Us">
              <a href={`tel:${business.phoneHref}`} className="hover:text-[var(--orange)]">
                {business.phone}
              </a>
              <span className="block text-[var(--ink-faint)]">Mon–Sat · 10am–8pm</span>
            </ContactRow>
            <ContactRow icon={MessageCircle} label="WhatsApp">
              <a href={business.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-[var(--orange)]">
                {business.phone}
              </a>
              <span className="block text-[var(--ink-faint)]">Chat for quick quotes</span>
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <span className="block text-[var(--ink-faint)]">Available on request</span>
            </ContactRow>
            <ContactRow icon={Clock} label="Working Hours">
              {business.hours.map((h) => (
                <span key={h.days} className="block">
                  {h.days}: {h.time}
                </span>
              ))}
            </ContactRow>
          </div>

          <div className="relative border border-[var(--paper-line-strong)] bg-[var(--paper)] p-6 sm:p-8">
            <div className="pointer-events-none absolute -left-[9px] top-8 flex flex-col gap-3" aria-hidden>
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="h-3.5 w-3.5 rounded-full border border-[var(--paper-line-strong)] bg-[var(--paper-raised)]" />
              ))}
            </div>
            <p className="font-spec text-[12px] uppercase tracking-[0.08em] text-[var(--ink-faint)]">
              Repair Order — Form No. TCZ-01
            </p>

            {submitted ? (
              <div className="mt-8 border border-dashed border-[var(--green)] p-6 text-center">
                <p className="font-display text-[1.2rem] font-bold text-[var(--green)]">
                  Order logged.
                </p>
                <p className="mt-2 text-[0.95rem] text-[var(--ink-soft)]">
                  We&apos;ll get back to you within minutes. For anything urgent, call or
                  WhatsApp us at {business.phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 grid gap-6 sm:grid-cols-2">
                <label className="sm:col-span-1">
                  <span className="font-spec text-[11px] uppercase tracking-[0.06em] text-[var(--ink-faint)]">
                    Your Name
                  </span>
                  <input required name="name" type="text" placeholder="Full name" className={fieldClass} />
                </label>

                <label className="sm:col-span-1">
                  <span className="font-spec text-[11px] uppercase tracking-[0.06em] text-[var(--ink-faint)]">
                    Phone Number
                  </span>
                  <input required name="phone" type="tel" placeholder="10-digit mobile number" className={fieldClass} />
                </label>

                <label className="sm:col-span-1">
                  <span className="font-spec text-[11px] uppercase tracking-[0.06em] text-[var(--ink-faint)]">
                    Device
                  </span>
                  <select required name="device" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select your device
                    </option>
                    {deviceOptions.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="sm:col-span-1">
                  <span className="font-spec text-[11px] uppercase tracking-[0.06em] text-[var(--ink-faint)]">
                    Issue
                  </span>
                  <select required name="issue" defaultValue="" className={fieldClass}>
                    <option value="" disabled>
                      Select issue type
                    </option>
                    {issueOptions.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="sm:col-span-2">
                  <span className="font-spec text-[11px] uppercase tracking-[0.06em] text-[var(--ink-faint)]">
                    Describe Your Problem
                  </span>
                  <textarea
                    name="description"
                    rows={3}
                    placeholder="Tell us what happened"
                    className={`${fieldClass} resize-none`}
                  />
                </label>

                <button
                  type="submit"
                  className="stamp-btn inline-flex w-fit items-center gap-2 rounded-sm bg-[var(--orange)] px-6 py-3 font-spec text-[14px] font-semibold uppercase tracking-[0.06em] text-[var(--paper-raised)] transition-transform hover:-rotate-1 sm:col-span-2"
                >
                  Send Repair Request
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof MapPin;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <Icon size={20} strokeWidth={1.75} className="mt-1 shrink-0 text-[var(--orange)]" />
      <div>
        <p className="font-display text-[0.98rem] font-bold text-[var(--ink)]">{label}</p>
        <div className="mt-1 text-[0.92rem] leading-relaxed text-[var(--ink-soft)]">
          {children}
        </div>
      </div>
    </div>
  );
}

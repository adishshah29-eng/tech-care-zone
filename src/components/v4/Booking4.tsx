"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, MessageCircle, Mail, Clock, ArrowRight } from "../icons";
import { SectionHead4 } from "./SectionHead4";
import { business, deviceOptions, issueOptions, readBookingForm, whatsappBookingUrl } from "@/lib/content";

const field =
  "mt-1.5 w-full border border-[var(--v4-trace-dim)] bg-[var(--v4-mask)] px-3.5 py-2.5 text-[0.95rem] text-[var(--v4-silk)] placeholder:text-[var(--v4-silk-faint)] focus:border-[var(--v4-gold)] focus:outline-none";
const label = "v4-mono text-[11px] uppercase tracking-[0.08em] text-[var(--v4-silk-faint)]";

function Row({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <Icon size={20} strokeWidth={1.6} className="mt-1 shrink-0 text-[var(--v4-gold)]" />
      <div>
        <p className="font-semibold text-[var(--v4-silk)]">{title}</p>
        <div className="mt-1 text-[0.92rem] leading-relaxed text-[var(--v4-silk-soft)]">{children}</div>
      </div>
    </div>
  );
}

export function Booking4() {
  const [done, setDone] = useState(false);
  const [waUrl, setWaUrl] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const url = whatsappBookingUrl(readBookingForm(e.currentTarget));
    setWaUrl(url);
    setDone(true);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="v4-panel p-6 sm:p-10">
          <SectionHead4
            title="Book your repair today"
            lede="Fill in the form below or contact us directly. We'll get back to you within minutes."
          />

          <div className="mt-12 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="space-y-6">
              <Row icon={MapPin} title="Visit Us">
                {business.addressLines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </Row>
              <Row icon={Phone} title="Call Us">
                <a href={`tel:${business.phoneHref}`} className="hover:text-[var(--v4-gold)]">{business.phone}</a>
                <span className="block text-[var(--v4-silk-faint)]">Mon–Sat · 10am–8pm</span>
              </Row>
              <Row icon={MessageCircle} title="WhatsApp">
                <a href={business.whatsappHref} target="_blank" rel="noreferrer" className="hover:text-[var(--v4-gold)]">{business.phone}</a>
                <span className="block text-[var(--v4-silk-faint)]">Chat for quick quotes</span>
              </Row>
              <Row icon={Mail} title="Email">
                <span className="text-[var(--v4-silk-faint)]">Available on request</span>
              </Row>
              <Row icon={Clock} title="Working Hours">
                {business.hours.map((h) => (
                  <span key={h.days} className="block">{h.days}: {h.time}</span>
                ))}
              </Row>
            </div>

            <div className="border border-[var(--v4-trace-dim)] bg-[var(--v4-mask-2)] p-6 sm:p-8">
              <p className="v4-mono text-[11px] uppercase tracking-[0.12em] text-[var(--v4-silk-faint)]">
                Service request — TCZ-01
              </p>
              {done ? (
                <div className="mt-8 border border-[var(--v4-gold)] p-6 text-center">
                  <p className="text-[1.15rem] font-semibold text-[var(--v4-gold)]">Request logged.</p>
                  <p className="mt-2 text-[0.95rem] text-[var(--v4-silk-soft)]">
                    WhatsApp should open with your details filled in, just hit send. <a href={waUrl} target="_blank" rel="noreferrer" className="underline">Didn&apos;t open? Tap here.</a> For anything urgent, call or WhatsApp us at {business.phone}.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
                  <label>
                    <span className={label}>Your Name</span>
                    <input required name="name" type="text" placeholder="Full name" className={field} />
                  </label>
                  <label>
                    <span className={label}>Phone Number</span>
                    <input required name="phone" type="tel" placeholder="10-digit mobile number" className={field} />
                  </label>
                  <label>
                    <span className={label}>Device</span>
                    <select required name="device" defaultValue="" className={field}>
                      <option value="" disabled>Select your device</option>
                      {deviceOptions.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </label>
                  <label>
                    <span className={label}>Issue</span>
                    <select required name="issue" defaultValue="" className={field}>
                      <option value="" disabled>Select issue type</option>
                      {issueOptions.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </label>
                  <label className="sm:col-span-2">
                    <span className={label}>Describe Your Problem</span>
                    <textarea name="description" rows={3} placeholder="Tell us what happened" className={`${field} resize-none`} />
                  </label>
                  <button
                    type="submit"
                    className="v4-btn-gold v4-mono inline-flex w-fit items-center gap-2 rounded-sm px-6 py-3 text-[13px] font-bold uppercase tracking-[0.1em] sm:col-span-2"
                  >
                    Send Repair Request
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

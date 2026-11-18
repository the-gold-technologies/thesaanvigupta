"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { services, waLink } from "@/lib/site";

const field =
  "w-full rounded-xl border border-bronze/25 bg-white/90 px-4 py-3 text-cocoa outline-none transition placeholder:text-cocoa/40 focus:border-bronze focus:ring-2 focus:ring-bronze/20 shadow-sm";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", service: services[0].title, dob: "", tob: "", pob: "", message: "" });
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF((v) => ({ ...v, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      "Namaste Saanvi ma'am, I would like to book a consultation.",
      "",
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      `Service: ${f.service}`,
      f.dob && `Date of birth: ${f.dob}`,
      f.tob && `Time of birth: ${f.tob}`,
      f.pob && `Place of birth: ${f.pob}`,
      f.message && `Concern: ${f.message}`,
    ].filter(Boolean);
    window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={submit} className="rounded-3xl border border-bronze/25 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-9">
      <h2 className="font-display text-2xl uppercase tracking-[0.05em] text-midnight">Book your consultation</h2>
      <p className="mt-2 text-sm text-cocoa/75">Fill in your details. WhatsApp will open with your message ready to send.</p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa/70">Full name *</span>
          <input required value={f.name} onChange={set("name")} className={field} placeholder="Your name" autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa/70">Phone *</span>
          <input required type="tel" value={f.phone} onChange={set("phone")} className={field} placeholder="+91" autoComplete="tel" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa/70">Service</span>
          <select value={f.service} onChange={set("service")} className={field}>
            {services.map((s) => (
              <option key={s.slug} className="bg-cream text-cocoa">{s.title}</option>
            ))}
            <option className="bg-cream text-cocoa">Not sure yet, please guide me</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa/70">Date of birth</span>
          <input type="date" value={f.dob} onChange={set("dob")} className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa/70">Time of birth</span>
          <input type="time" value={f.tob} onChange={set("tob")} className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa/70">Place of birth</span>
          <input value={f.pob} onChange={set("pob")} className={field} placeholder="City, State" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-cocoa/70">What would you like guidance on?</span>
          <textarea rows={4} value={f.message} onChange={set("message")} className={field} placeholder="Career, marriage, home Vastu, business…" />
        </label>
      </div>

      <button type="submit" className="btn-midnight mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold">
        <Send className="h-4 w-4" /> Send on WhatsApp
      </button>
    </form>
  );
}

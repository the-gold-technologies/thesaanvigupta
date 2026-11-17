"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { services, waLink } from "@/lib/site";

const field =
  "w-full rounded-xl border border-gold/15 bg-night/60 px-4 py-3 text-ivory outline-none transition [color-scheme:dark] placeholder:text-muted/60 focus:border-gold/60 focus:ring-2 focus:ring-gold/20";

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
    <form onSubmit={submit} className="gold-border glass rounded-3xl p-6 sm:p-9">
      <h2 className="font-display text-2xl text-ivory">Book your consultation</h2>
      <p className="mt-2 text-sm text-muted">Fill in your details. WhatsApp will open with your message ready to send.</p>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">Full name *</span>
          <input required value={f.name} onChange={set("name")} className={field} placeholder="Your name" autoComplete="name" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">Phone *</span>
          <input required type="tel" value={f.phone} onChange={set("phone")} className={field} placeholder="+91" autoComplete="tel" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">Service</span>
          <select value={f.service} onChange={set("service")} className={field}>
            {services.map((s) => (
              <option key={s.slug} className="bg-night">{s.title}</option>
            ))}
            <option className="bg-night">Not sure yet, please guide me</option>
          </select>
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">Date of birth</span>
          <input type="date" value={f.dob} onChange={set("dob")} className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">Time of birth</span>
          <input type="time" value={f.tob} onChange={set("tob")} className={field} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">Place of birth</span>
          <input value={f.pob} onChange={set("pob")} className={field} placeholder="City, State" />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted">What would you like guidance on?</span>
          <textarea rows={4} value={f.message} onChange={set("message")} className={field} placeholder="Career, marriage, home Vastu, business…" />
        </label>
      </div>

      <button type="submit" className="btn-gold mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold">
        <Send className="h-4 w-4" /> Send on WhatsApp
      </button>
    </form>
  );
}

import { Phone } from "lucide-react";
import Reveal from "./Reveal";
import { WhatsAppIcon } from "./Icons";
import { site, waLink } from "@/lib/site";

export default function CtaBand({
  title = "Your problem has a solution.",
  highlight = "Let's find it today.",
}: {
  title?: string;
  highlight?: string;
}) {
  return (
    <section className="relative px-5 py-20 sm:px-6">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-gold/25 px-6 py-16 text-center sm:px-12 sm:py-20">
        {/* cosmic backdrop */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet/70 via-night to-[#2a1208]" />
        <div className="absolute left-1/2 top-full h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-gradient-to-t from-saffron/0 via-saffron/30 to-gold/50 blur-2xl" />
        <div className="spin-slow absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-gold/15" />
        <div className="spin-slower absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/10" />

        <div className="relative">
          <span className="glyph text-4xl text-gold">ॐ</span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl leading-tight text-ivory sm:text-5xl">
            {title} <span className="text-gold-gradient">{highlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            One conversation can change the direction of your life. Reach out on WhatsApp or call, and Saanvi&apos;s team will
            schedule your consultation.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <a href={`tel:${site.phonePrimaryRaw}`} className="btn-ghost inline-flex w-full items-center justify-center gap-2 rounded-full bg-night/40 px-8 py-4 font-medium sm:w-auto">
              <Phone className="h-4 w-4 text-gold" /> Call {site.phonePrimary}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

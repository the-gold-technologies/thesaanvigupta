import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import BronzeWheel from "./BronzeWheel";
import { Divider } from "./Ornament";
import { site, waLink } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="paper px-5 pb-24 sm:px-6">
      <Reveal className="sky relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-gold/25 px-6 py-16 text-center sm:px-12 sm:py-20">
        <BronzeWheel className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] opacity-40" stroke="#e9c27a" glyph="#e9c27a" />
        <BronzeWheel className="pointer-events-none absolute -bottom-48 -left-48 h-[480px] w-[480px] opacity-25" stroke="#e9c27a" glyph="#e9c27a" />
        <div className="pointer-events-none absolute left-1/2 top-full h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(233,194,122,0.35),transparent)]" />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-3xl uppercase leading-tight text-cream sm:text-5xl">
            Your problem has a solution.
            <span className="mt-2 block font-script text-5xl normal-case text-gold sm:text-7xl">Let&apos;s find it today</span>
          </h2>
          <Divider tone="dark" className="mt-5 justify-center" />
          <p className="mx-auto mt-6 max-w-xl text-cream/70">
            One conversation can change the direction of your life. Reach out on WhatsApp or call, and Saanvi&apos;s team will
            schedule your consultation.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold sm:w-auto">
              <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <a href={`tel:${site.phonePrimaryRaw}`} className="btn-ghost inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-medium sm:w-auto">
              <Phone className="h-4 w-4 text-gold" /> Call {site.phonePrimary}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

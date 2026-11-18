import { Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import BronzeWheel from "./BronzeWheel";
import { Divider } from "./Ornament";
import { site, waLink } from "@/lib/site";

export default function FinalCta() {
  return (
    <section className="paper px-5 pb-24 sm:px-6">
      <Reveal className="parchment-sky relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-umber/40 shadow-[0_40px_90px_-50px_rgba(62,54,46,0.8)] px-6 py-16 text-center sm:px-12 sm:py-20">
        <BronzeWheel
          className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] opacity-45"
          stroke="#e3c9a6"
          glyph="#e3c9a6"
        />
        <BronzeWheel
          className="pointer-events-none absolute -bottom-48 -left-48 h-[480px] w-[480px] opacity-30"
          stroke="#e3c9a6"
          glyph="#e3c9a6"
        />
        <div className="pointer-events-none absolute left-1/2 top-full h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgba(134,93,54,0.6),transparent)]" />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-3xl uppercase leading-tight text-cream sm:text-5xl">
            Your problem has a solution.
            <span className="mt-2 block font-script text-5xl normal-case text-latte sm:text-7xl">
              Let&apos;s find it today
            </span>
          </h2>
          <Divider tone="warm" className="mt-5 justify-center" />
          <p className="mx-auto mt-6 max-w-xl text-cream/80">
            One conversation can change the direction of your life. Reach out on
            WhatsApp or call, and Saanvi&apos;s team will schedule your
            consultation.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold sm:w-auto bg-latte text-mocha transition hover:bg-cream"
            >
              <WhatsAppIcon className="h-5 w-5" /> Chat on WhatsApp
            </a>
            <a
              href={`tel:${site.phonePrimaryRaw}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-latte/40 px-8 py-4 font-medium text-cream transition hover:bg-white/10 sm:w-auto"
            >
              <Phone className="h-4 w-4 text-latte" /> Call {site.phonePrimary}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, Plus } from "lucide-react";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { Divider, PlanetDots } from "./Ornament";
import { faqs, site, waLink } from "@/lib/site";

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="paper relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <div className="flex items-center gap-3">
            <PlanetDots />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-bronze">FAQ</span>
          </div>
          <h2 className="mt-5 font-display text-[1.9rem] uppercase leading-[1.12] text-midnight sm:text-4xl">
            Questions,
            <span className="mt-1 block font-script text-[3.2rem] normal-case leading-[0.95] text-bronze sm:text-[4rem]">answered</span>
          </h2>
          <Divider className="mt-4" />
          <div className="mt-8 rounded-2xl bg-midnight p-6 text-cream">
            <p className="font-serif text-xl">Still have a question?</p>
            <p className="mt-1 text-sm text-cream/60">Ask directly. We usually reply within a few hours.</p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row lg:flex-col xl:flex-row">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold">
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
              <a href={`tel:${site.phonePrimaryRaw}`} className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm">
                <Phone className="h-4 w-4 text-gold" /> {site.phonePrimary}
              </a>
            </div>
          </div>
        </Reveal>

        <div className="divide-y divide-bronze/20 border-y border-bronze/20">
          {faqs.map((f, i) => {
            const on = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(on ? null : i)}
                  aria-expanded={on}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className={`font-serif text-xl transition sm:text-[1.4rem] ${on ? "text-bronze-deep" : "text-midnight"}`}>{f.q}</span>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                      on ? "rotate-45 border-midnight bg-midnight text-gold" : "border-bronze/40 text-bronze"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 leading-relaxed text-cocoa/70">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

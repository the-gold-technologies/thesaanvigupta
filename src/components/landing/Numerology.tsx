"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { WhatsAppIcon } from "@/components/Icons";
import { Divider, PlanetDots, Sparkle } from "./Ornament";
import { numberMeanings, waLink } from "@/lib/site";

const reduce = (n: number): number => {
  while (n > 9) n = String(n).split("").reduce((a, d) => a + Number(d), 0);
  return n;
};

function calc(dob: string) {
  const [y, m, d] = dob.split("-").map(Number);
  if (!y || !m || !d) return null;
  return {
    moolank: reduce(d),
    bhagyank: reduce(`${y}${m}${d}`.split("").reduce((a, c) => a + Number(c), 0)),
  };
}

function NumberTile({ n, label, sub }: { n: number; label: string; sub: string }) {
  const m = numberMeanings[n];
  return (
    <div className="relative overflow-hidden rounded-2xl border border-latte/20 bg-white/[0.06] p-5">
      <div className="flex items-center gap-4">
        <span className="relative grid h-16 w-16 shrink-0 place-items-center">
          <span className="spin-mid absolute inset-0 rounded-full border border-dashed" style={{ borderColor: `${m.color}88` }} />
          <span className="font-display text-3xl" style={{ color: m.color, textShadow: `0 0 24px ${m.color}` }}>
            {n}
          </span>
        </span>
        <div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-latte">{label}</div>
          <div className="text-[11px] text-cream/70">{sub}</div>
          <div className="mt-1 flex items-center gap-2 font-display text-cream">
            <span className="glyph" style={{ color: m.color }}>{m.glyph}</span> {m.planet}
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-cream/85">{m.traits}</p>
    </div>
  );
}

export default function Numerology() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calc>>(null);

  return (
    <section id="numerology" className="relative scroll-mt-24 bg-parchment py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <div className="flex items-center gap-3">
            <PlanetDots />
            <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-bronze">Free numerology calculator</span>
          </div>
          <h2 className="mt-5 font-display text-[1.9rem] uppercase leading-[1.12] text-midnight sm:text-4xl md:text-[2.6rem]">
            Discover the numbers
            <span className="mt-1 block font-script text-[3.2rem] normal-case leading-[0.95] text-bronze sm:text-[4rem]">
              that shape your destiny
            </span>
          </h2>
          <Divider className="mt-4" />
          <p className="mt-6 max-w-md leading-relaxed text-cocoa/75">
            Enter your date of birth to reveal your <strong className="text-cocoa">Moolank</strong> (root number) and{" "}
            <strong className="text-cocoa">Bhagyank</strong> (destiny number), and the planets that rule them.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setResult(calc(dob));
            }}
            className="mt-8 flex max-w-md flex-col gap-3 rounded-2xl border border-bronze/25 bg-cream p-2 shadow-[0_20px_40px_-30px_rgba(43,31,24,0.5)] sm:flex-row"
          >
            <label htmlFor="dob" className="sr-only">Date of birth</label>
            <input
              id="dob"
              type="date"
              required
              value={dob}
              max={new Date().toISOString().slice(0, 10)}
              onChange={(e) => setDob(e.target.value)}
              className="flex-1 rounded-xl bg-transparent px-4 py-3 text-cocoa outline-none focus-visible:ring-2 focus-visible:ring-bronze/40"
            />
            <button type="submit" className="btn-midnight inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold">
              <Sparkles className="h-4 w-4 text-gold" /> Reveal my numbers
            </button>
          </form>
        </Reveal>

        {/* energy card */}
        <Reveal delay={0.1}>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-umber/40 bg-gradient-to-br from-[#93683f] via-[#66513f] to-[#4a3e35] p-6 shadow-[0_40px_80px_-40px_rgba(62,54,46,0.6)] sm:p-8">
            <div className="text-[11px] uppercase font-semibold tracking-[0.3em] text-latte">Your number energy</div>
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key={`${result.moolank}-${result.bhagyank}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-6 space-y-4"
                >
                  <NumberTile n={result.moolank} label="Moolank" sub="Root number · your personality" />
                  <NumberTile n={result.bhagyank} label="Bhagyank" sub="Destiny number · your life path" />
                  <a
                    href={waLink(
                      `Namaste Saanvi ma'am, my Moolank is ${result.moolank} and Bhagyank is ${result.bhagyank}. I would like a detailed numerology reading.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-latte text-mocha transition hover:bg-cream"
                  >
                    <WhatsAppIcon className="h-4 w-4" /> Get my full numerology report
                  </a>
                </motion.div>
              ) : (
                <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid min-h-[340px] place-items-center text-center">
                  <div>
                    <div className="relative mx-auto grid h-40 w-40 place-items-center">
                      <span className="spin-slow absolute inset-0 rounded-full border border-dashed border-latte/50" />
                      <span className="absolute inset-6 rounded-full border border-latte/25" />
                      <Sparkle className="h-14 w-14 text-latte drop-shadow-[0_0_20px_#e3c9a6]" />
                    </div>
                    <p className="mt-6 font-serif text-2xl text-cream">Your numbers are waiting.</p>
                    <p className="mt-1 text-sm text-cream/70">Enter your birth date to begin.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

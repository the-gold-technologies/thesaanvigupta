"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { WhatsAppIcon } from "@/components/Icons";
import { numberMeanings, waLink } from "@/lib/site";

const reduce = (n: number): number => {
  while (n > 9)
    n = String(n)
      .split("")
      .reduce((a, d) => a + Number(d), 0);
  return n;
};

function calc(dob: string) {
  const [y, m, d] = dob.split("-").map(Number);
  if (!y || !m || !d) return null;
  const moolank = reduce(d);
  const bhagyank = reduce(
    `${y}${m}${d}`.split("").reduce((a, c) => a + Number(c), 0)
  );
  return { moolank, bhagyank };
}

function NumberOrb({
  n,
  label,
  sub,
}: {
  n: number;
  label: string;
  sub: string;
}) {
  const m = numberMeanings[n];
  return (
    <div className="glass flex flex-col items-center rounded-3xl p-6 text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
        {label}
      </div>
      <div className="text-[11px] text-muted">{sub}</div>
      <div className="relative my-6 grid h-32 w-32 place-items-center">
        <span
          className="spin-mid absolute inset-0 rounded-full border border-dashed"
          style={{ borderColor: `${m.color}66` }}
        />
        <span
          className="absolute inset-3 rounded-full blur-xl"
          style={{ background: `${m.color}33` }}
        />
        <span
          className="relative font-display text-6xl"
          style={{ color: m.color, textShadow: `0 0 30px ${m.color}` }}
        >
          {n}
        </span>
      </div>
      <div className="flex items-center gap-2 font-display text-lg text-ivory">
        <span className="glyph text-2xl" style={{ color: m.color }}>
          {m.glyph}
        </span>{" "}
        {m.planet}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{m.traits}</p>
    </div>
  );
}

export default function NumerologyTool() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calc>>(null);

  return (
    <section id="numerology" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Free Numerology Calculator"
          title="Discover the numbers"
          highlight="that shape your destiny."
          sub="Enter your date of birth to reveal your Moolank (root number) and Bhagyank (destiny number), and the planets that rule them."
        />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setResult(calc(dob));
          }}
          className="gold-border glass mx-auto mt-12 flex max-w-xl flex-col gap-3 rounded-full p-2 sm:flex-row sm:rounded-full"
        >
          <label htmlFor="dob" className="sr-only">
            Date of birth
          </label>
          <input
            id="dob"
            type="date"
            required
            value={dob}
            max={new Date().toISOString().slice(0, 10)}
            onChange={(e) => setDob(e.target.value)}
            className="flex-1 rounded-full bg-transparent px-6 py-3.5 text-ivory outline-none [color-scheme:dark] placeholder:text-muted"
          />
          <button
            type="submit"
            className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-semibold"
          >
            <Sparkles className="h-4 w-4" /> Reveal my numbers
          </button>
        </form>

        <AnimatePresence mode="wait">
          {result && (
            <motion.div
              key={`${result.moolank}-${result.bhagyank}`}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <NumberOrb
                  n={result.moolank}
                  label="Moolank"
                  sub="Root number: your personality"
                />
                <NumberOrb
                  n={result.bhagyank}
                  label="Bhagyank"
                  sub="Destiny number: your life path"
                />
              </div>
              <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-gold/20 bg-gradient-to-r from-violet/30 to-gold/10 p-6 text-center md:flex-row md:text-left">
                <p className="text-ivory/90">
                  This is just the surface. Your{" "}
                  <span className="text-gold">
                    name number, lucky colours, favourable dates
                  </span>{" "}
                  and compatibility reveal much more.
                </p>
                <a
                  href={waLink(
                    `Namaste Saanvi ma'am, my Moolank is ${result.moolank} and Bhagyank is ${result.bhagyank}. I would like a detailed numerology reading.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 font-semibold"
                >
                  <WhatsAppIcon className="h-5 w-5" /> Get full report
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

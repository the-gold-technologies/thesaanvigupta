"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Baby,
  Briefcase,
  Building2,
  CheckCircle2,
  Coins,
  Heart,
  HeartPulse,
  House,
  Scale,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { WhatsAppIcon } from "@/components/Icons";
import { problems, services, waLink } from "@/lib/site";

const ICONS = {
  briefcase: Briefcase,
  heart: Heart,
  coins: Coins,
  pulse: HeartPulse,
  building: Building2,
  house: House,
  baby: Baby,
  scale: Scale,
};

export default function ProblemSolver() {
  const [active, setActive] = useState(problems[0].key);
  const p = problems.find((x) => x.key === active)!;

  return (
    <section id="problems" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="What's troubling you?"
          title="Tell us your problem."
          highlight="The stars will show the way."
          sub="Choose what's on your mind and see how Vedic astrology, Vastu and numerology explain it, and how Saanvi helps you solve it."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)]">
          {/* Selector */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {problems.map((x) => {
              const Icon = ICONS[x.icon];
              const on = x.key === active;
              return (
                <button
                  key={x.key}
                  onClick={() => setActive(x.key)}
                  aria-pressed={on}
                  className={`group relative flex flex-col items-start gap-3 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                    on
                      ? "border-gold/70 bg-gradient-to-br from-gold/20 via-ink/95 to-night-2/95 shadow-[0_0_40px_-12px_rgba(233,194,122,0.6)]"
                      : "border-gold/10 bg-night-2/85 hover:border-gold/40 hover:bg-ink/90"
                  }`}
                >
                  <span
                    className={`grid h-10 w-10 place-items-center rounded-full transition ${
                      on
                        ? "bg-gold text-night"
                        : "bg-gold/10 text-gold group-hover:bg-gold/20"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={`text-sm font-semibold sm:text-base ${on ? "text-ivory" : "text-ivory/80"}`}
                  >
                    {x.label}
                  </span>
                  {on && (
                    <motion.span
                      layoutId="probGlow"
                      className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gold/20 blur-2xl"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Answer panel */}
          <div className="gold-border glass relative overflow-hidden rounded-3xl p-6 sm:p-10">
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/40 blur-3xl" />
            <AnimatePresence mode="wait">
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <h3 className="font-display text-2xl leading-snug text-ivory sm:text-3xl">
                  {p.headline}
                </h3>

                <div className="mt-7 rounded-2xl border border-gold/15 bg-night/50 p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    <Sparkles className="h-4 w-4" /> What the stars say
                  </div>
                  <p className="mt-3 leading-relaxed text-muted">{p.stars}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.planets.map((pl) => (
                      <span
                        key={pl}
                        className="rounded-full border border-saffron/40 bg-saffron/10 px-3 py-1 text-xs text-saffron"
                      >
                        {pl}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    How Saanvi solves it
                  </div>
                  <ul className="mt-4 space-y-3">
                    {p.solution.map((s, k) => (
                      <motion.li
                        key={s}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + k * 0.1 }}
                        className="flex gap-3 text-ivory/90"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                        {s}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href={waLink(
                      `Namaste Saanvi ma'am, I need guidance regarding ${p.label.toLowerCase()}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold"
                  >
                    <WhatsAppIcon className="h-5 w-5" /> Solve my{" "}
                    {p.label.split(" ")[0].toLowerCase()} problem
                  </a>
                  <div className="flex flex-wrap gap-2 text-sm text-muted">
                    via
                    {p.services.map((slug) => {
                      const s = services.find((x) => x.slug === slug)!;
                      return (
                        <Link
                          key={slug}
                          href={`/services/${slug}`}
                          className="text-gold underline-offset-4 hover:underline"
                        >
                          {s.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Baby, Briefcase, Building2, Check, Coins, Heart, HeartPulse, House, Orbit, Scale } from "lucide-react";
import { Heading, Sparkle } from "./Ornament";
import { WhatsAppIcon } from "@/components/Icons";
import { problems, services, waLink } from "@/lib/site";

const ICONS = { briefcase: Briefcase, heart: Heart, coins: Coins, pulse: HeartPulse, building: Building2, house: House, baby: Baby, scale: Scale };

export default function Problems() {
  const [active, setActive] = useState(problems[0].key);
  const p = problems.find((x) => x.key === active)!;
  const ActiveIcon = ICONS[p.icon];

  return (
    <section id="problems" className="sky relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      {/* warm horizon glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(233,194,122,0.18),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <Heading
          tone="dark"
          eyebrow="What's troubling you?"
          title="Tell us your problem,"
          script="the stars will show the way"
          sub="Pick what's on your mind to see how your chart and your space explain it, and how Saanvi helps you solve it."
        />

        {/* problem chips */}
        <div className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-2.5" role="tablist" aria-label="Choose a problem">
          {problems.map((x) => {
            const Icon = ICONS[x.icon];
            const on = x.key === active;
            return (
              <button
                key={x.key}
                role="tab"
                aria-selected={on}
                onClick={() => setActive(x.key)}
                className={`relative inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition ${
                  on ? "border-gold text-midnight" : "border-white/15 text-cream/80 hover:border-gold/60 hover:text-cream"
                }`}
              >
                {on && <motion.span layoutId="probPill" className="absolute inset-0 rounded-full bg-gold" transition={{ type: "spring", bounce: 0.2, duration: 0.5 }} />}
                <Icon className="relative h-4 w-4" />
                <span className="relative font-medium">{x.label}</span>
              </button>
            );
          })}
        </div>

        {/* dashboard */}
        <AnimatePresence mode="wait">
          <motion.div
            key={p.key}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2"
            role="tabpanel"
          >
            {/* headline tile */}
            <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-[#2a1d12] via-midnight to-midnight p-7 md:col-span-2 sm:p-9">
              <span className="pointer-events-none absolute -bottom-20 left-1/3 h-48 w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(233,194,122,0.35),transparent)]" />
              <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
                <span className="grid h-20 w-20 shrink-0 place-items-center rounded-full border border-gold/50 text-gold shadow-[0_0_50px_-12px_#e9c27a]">
                  <ActiveIcon className="h-9 w-9" strokeWidth={1.3} />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-gold">{p.label}</div>
                  <h3 className="mt-2 font-serif text-2xl leading-snug text-cream sm:text-[2rem]">{p.headline}</h3>
                </div>
              </div>
            </div>

            {/* what the stars say */}
            <div className="relative overflow-hidden rounded-3xl border border-[#8fb6e0]/25 bg-gradient-to-br from-[#14213f] to-midnight p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#8fb6e0]/50 text-[#8fb6e0]">
                  <Orbit className="h-5 w-5" />
                </span>
                <span className="text-sm text-[#8fb6e0]">What the stars say</span>
              </div>
              <p className="mt-5 leading-relaxed text-cream/75">{p.stars}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.planets.map((pl) => (
                  <span key={pl} className="rounded-full border border-[#8fb6e0]/30 bg-[#8fb6e0]/10 px-3 py-1 text-xs text-[#cfe0f3]">
                    {pl}
                  </span>
                ))}
              </div>
            </div>

            {/* how it's solved */}
            <div className="relative overflow-hidden rounded-3xl border border-[#7fc4b4]/25 bg-gradient-to-br from-[#10302c] to-midnight p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#7fc4b4]/50 text-[#7fc4b4]">
                  <Sparkle className="h-5 w-5" />
                </span>
                <span className="text-sm text-[#7fc4b4]">How Saanvi solves it</span>
              </div>
              <ul className="mt-5 space-y-3">
                {p.solution.map((s) => (
                  <li key={s} className="flex gap-3 text-cream/85">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#7fc4b4]" />
                    <span className="leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA bar */}
            <div className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-gold/25 bg-white/[0.03] p-4 pl-6 text-center md:col-span-2 md:flex-row md:text-left">
              <div className="text-sm text-cream/70">
                Recommended:{" "}
                {p.services.map((slug, k) => {
                  const s = services.find((x) => x.slug === slug)!;
                  return (
                    <span key={slug}>
                      {k > 0 && " & "}
                      <Link href={`/services/${slug}`} className="text-gold underline-offset-4 hover:underline">
                        {s.title}
                      </Link>
                    </span>
                  );
                })}
              </div>
              <a
                href={waLink(`Namaste Saanvi ma'am, I need guidance regarding ${p.label.toLowerCase()}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                <WhatsAppIcon className="h-4 w-4" /> Get guidance on {p.label.split(" ")[0].toLowerCase()}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

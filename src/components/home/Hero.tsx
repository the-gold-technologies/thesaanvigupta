"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import HorizonRing from "@/components/HorizonRing";
import { site, waLink } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center overflow-hidden px-5 pt-32 sm:pt-36"
      // --d = diameter of the eclipse disc; only its upper half is shown
      style={{ ["--d" as string]: "clamp(560px, 145vw, 1080px)" }}
    >
      {/* ── Copy (above the circle) ── */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.a
          href={site.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-night-2/80 py-1.5 pl-1.5 pr-4 text-xs text-muted backdrop-blur transition hover:border-gold/50 sm:text-sm"
        >
          <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/60">
            <Image src="/images/saanvi.webp" alt="" fill sizes="32px" className="scale-[1.6] object-cover object-[50%_25%]" priority />
          </span>
          <span className="text-ivory">Aacharya Saanvi Gupta</span>
          <span className="text-gold/40">|</span>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" /> {site.googleRating}
            <span className="hidden sm:inline">&nbsp;· {site.googleReviewCount} reviews</span>
          </span>
        </motion.a>

        <h1 className="mt-6 font-serif text-[3rem] font-medium leading-[0.95] tracking-[-0.01em] text-ivory sm:text-7xl lg:text-[6rem]">
          <motion.span
            className="block [text-wrap:balance]"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.35, ease }}
          >
            Every problem has a
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.55, ease }}
          >
            <em className="text-gold-gradient pr-1">planetary</em> answer.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Astrology, Vastu and Numerology for your career, marriage, money, health and home, with clear guidance and practical
          remedies.
        </motion.p>
      </div>

      {/* ── Eclipse dome: only the top ~30% is shown; the CTA sits inside its dark part ── */}
      <div className="relative mt-9 min-h-[168px] sm:mt-11 sm:min-h-0" style={{ width: "var(--d)", height: "calc(var(--d) * 0.2)" }}>
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0"
          style={{ height: "var(--d)" }}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.3, ease }}
        >
          {/* thin zodiac ring around the disc (disc = inner 80% of the ring box) */}
          <HorizonRing className="absolute left-1/2 top-1/2 h-[125%] w-[125%] -translate-x-1/2 -translate-y-1/2" />

          {/* corona glow */}
          <div className="absolute inset-0 rounded-full shadow-[0_-30px_110px_-10px_rgba(233,194,122,0.45),0_-70px_200px_-30px_rgba(240,122,58,0.25)]" />

          {/* dark disc with bright rim */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 50% 0%, #17112f 0%, #0a0720 30%, #05030c 70%)",
              boxShadow:
                "inset 0 2px 0 rgba(255,236,200,0.95), inset 0 14px 50px -14px rgba(233,194,122,0.5), 0 0 0 1px rgba(233,194,122,0.35)",
            }}
          />
        </motion.div>

        {/* CTA inside the dome */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease }}
          className="relative z-10 flex flex-col items-center justify-center gap-4 pt-10 sm:flex-row sm:gap-6 sm:pt-14"
        >
          <a
            href={waLink("Namaste Saanvi ma'am, I am facing a problem and need your guidance.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold group inline-flex items-center gap-3 rounded-full py-2 pl-7 pr-2 text-base font-semibold"
          >
            Ask your question
            <span className="grid h-10 w-10 place-items-center rounded-full bg-night text-gold transition group-hover:translate-x-0.5">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <a href={`tel:${site.phonePrimaryRaw}`} className="text-sm text-muted underline decoration-gold/40 underline-offset-[6px] transition hover:text-gold">
            or call {site.phonePrimary}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

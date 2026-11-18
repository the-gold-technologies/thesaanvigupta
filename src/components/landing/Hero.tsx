"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Compass, HeartHandshake, Landmark, Leaf, Phone, Star } from "lucide-react";
import BronzeWheel from "./BronzeWheel";
import { Divider, Sparkle } from "./Ornament";
import { site, waLink } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const BENEFITS = [
  { Icon: Compass, title: "Clear direction", text: "for career & business" },
  { Icon: HeartHandshake, title: "Harmony", text: "in love & marriage" },
  { Icon: Landmark, title: "Prosperity", text: "through Vastu & numbers" },
  { Icon: Leaf, title: "Peace of mind", text: "for you & your family" },
];

export default function Hero() {
  return (
    <section className="paper relative overflow-hidden pt-28 lg:pt-40">
      {/* faint crescent + stars, top-right like the reference art */}
      <svg className="pointer-events-none absolute right-[6%] top-28 hidden h-24 w-24 text-antique/70 lg:block" viewBox="0 0 100 100" aria-hidden>
        <path d="M62 10a40 40 0 1 0 28 64A34 34 0 1 1 62 10z" fill="currentColor" />
      </svg>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* ── Copy ── */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.a
            href={site.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-bronze/25 bg-white/70 px-4 py-1.5 text-xs text-cocoa/80 shadow-sm backdrop-blur transition hover:border-bronze/60 sm:text-sm"
          >
            <span className="flex text-jupiter">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="font-semibold text-cocoa">{site.googleRating}</span>
            <span>· {site.googleReviewCount}+ Google reviews</span>
          </motion.a>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="mt-7 text-[11px] font-semibold uppercase tracking-[0.4em] text-bronze"
          >
            Astrology <span className="text-antique">•</span> Vastu <span className="text-antique">•</span> Numerology
          </motion.p>

          <h1 className="mt-4 font-display uppercase text-midnight">
            <motion.span
              className="block text-[2.4rem] leading-[1.05] tracking-[0.01em] sm:text-6xl lg:text-[4.1rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease }}
            >
              Every problem
              <br />
              has a
            </motion.span>
            <motion.span
              className="-mt-1 block font-script text-[3.9rem] normal-case leading-[0.95] text-bronze sm:text-[6rem] lg:text-[5.6rem] xl:text-[6.4rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease }}
            >
              planetary answer
            </motion.span>
          </h1>

          <Divider className="mt-4 justify-center lg:justify-start" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-cocoa/75 sm:text-lg lg:mx-0"
          >
            Aacharya Saanvi Gupta reads your <strong className="font-semibold text-cocoa">birth chart</strong>, your{" "}
            <strong className="font-semibold text-cocoa">home&apos;s energy</strong> and your{" "}
            <strong className="font-semibold text-cocoa">numbers</strong> to bring clarity to career, marriage, money and health,
            with remedies that fit real life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease }}
            className="mt-9 flex flex-col items-center gap-5 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={waLink("Namaste Saanvi ma'am, I am facing a problem and need your guidance.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-midnight group inline-flex items-center gap-4 rounded-2xl py-3 pl-3 pr-6 text-left"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/50 text-gold">
                <Sparkle className="h-5 w-5" />
              </span>
              <span className="leading-tight">
                <span className="block text-[10px] uppercase tracking-[0.3em] text-cream/60">Book your</span>
                <span className="block text-sm font-semibold uppercase tracking-[0.12em]">
                  Personal <span className="text-gold">Consultation</span>
                </span>
              </span>
              <ArrowRight className="h-4 w-4 text-gold transition group-hover:translate-x-1" />
            </a>
            <a
              href={`tel:${site.phonePrimaryRaw}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-bronze-deep underline decoration-bronze/40 underline-offset-[6px] transition hover:text-bronze"
            >
              <Phone className="h-4 w-4" /> {site.phonePrimary}
            </a>
          </motion.div>
        </div>

        {/* ── Portrait in an arch, set inside the zodiac wheel ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease }}
          className="relative mx-auto aspect-square w-full max-w-[540px]"
        >
          <BronzeWheel className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-[18%] overflow-hidden rounded-t-full rounded-b-[2rem] border-4 border-cream shadow-[0_30px_60px_-25px_rgba(43,31,24,0.55)] ring-1 ring-bronze/40">
            <Image
              src="/images/saanvi.webp"
              alt="Aacharya Saanvi Gupta holding Samarangana Sutradhara, an ancient treatise on Vastu"
              fill
              sizes="(max-width: 1024px) 70vw, 360px"
              className="object-cover object-[50%_20%]"
              preload
            />
          </div>

          {/* floating credential cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease }}
            className="float absolute bottom-[8%] left-0 rounded-2xl border border-bronze/20 bg-white/90 px-3 py-2 shadow-xl backdrop-blur sm:bottom-[14%] sm:left-[2%] sm:px-4 sm:py-3"
          >
            <div className="font-display text-xl text-bronze-deep sm:text-2xl">20+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-cocoa/60">Years of practice</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 1.3, ease }}
            className="absolute right-0 top-[4%] rounded-2xl bg-midnight px-3 py-2 text-cream shadow-xl sm:right-[2%] sm:top-[16%] sm:px-4 sm:py-3"
            style={{ animation: "float 8s ease-in-out infinite 1s" }}
          >
            <div className="font-display text-xl text-gold sm:text-2xl">10,000+</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-cream/60">Consultations</div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Benefit strip ── */}
      <div className="relative mx-auto mt-14 max-w-6xl px-5 pb-16 sm:px-6 lg:mt-10">
        <div className="grid grid-cols-2 gap-y-8 rounded-[1.75rem] border border-bronze/15 bg-white/60 px-4 py-8 shadow-[0_20px_50px_-30px_rgba(43,31,24,0.35)] backdrop-blur sm:px-8 md:grid-cols-4 md:divide-x md:divide-bronze/15">
          {BENEFITS.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              className="flex flex-col items-center px-2 text-center"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-bronze/40 text-bronze">
                <Icon className="h-6 w-6" strokeWidth={1.4} />
              </span>
              <span className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-midnight">{title}</span>
              <span className="mt-1 text-xs text-cocoa/60">{text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

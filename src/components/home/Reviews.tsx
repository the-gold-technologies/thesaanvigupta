"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { GoogleIcon } from "@/components/Icons";
import { reviews, site } from "@/lib/site";

export default function Reviews() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = reviews.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(t);
  }, [paused, n]);

  const r = reviews[i];

  return (
    <section id="reviews" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading eyebrow="Client stories" title="Real people." highlight="Real clarity." />

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex items-center gap-4 rounded-2xl px-6 py-4 transition hover:border-gold/50"
          >
            <GoogleIcon className="h-8 w-8" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl text-ivory">{site.googleRating}</span>
                <span className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </span>
              </div>
              <div className="text-xs text-muted">Based on {site.googleReviewCount} Google reviews</div>
            </div>
          </a>
        </div>

        <div
          className="gold-border glass relative mx-auto mt-10 max-w-4xl overflow-hidden rounded-[2rem] p-8 sm:p-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <Quote className="absolute right-8 top-8 h-20 w-20 text-gold/10" />
          <div className="relative min-h-[260px] sm:min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={r.name}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 font-serif text-xl leading-relaxed text-ivory/95 sm:text-2xl">
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-gold to-saffron font-display text-lg font-bold text-night">
                    {r.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-semibold text-ivory">{r.name}</span>
                    <span className="flex items-center gap-1.5 text-xs text-muted">
                      <GoogleIcon className="h-3 w-3" /> Google review · {r.date}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {reviews.map((x, k) => (
                <button
                  key={x.name}
                  onClick={() => setI(k)}
                  aria-label={`Show review ${k + 1}`}
                  className={`h-2 rounded-full transition-all ${k === i ? "w-8 bg-gold" : "w-2 bg-gold/30 hover:bg-gold/60"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setI((v) => (v - 1 + n) % n)}
                aria-label="Previous review"
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold transition hover:bg-gold hover:text-night"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setI((v) => (v + 1) % n)}
                aria-label="Next review"
                className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 text-gold transition hover:bg-gold hover:text-night"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

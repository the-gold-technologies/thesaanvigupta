"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GoogleIcon } from "@/components/Icons";
import { Heading } from "./Ornament";
import { reviews, site } from "@/lib/site";

export default function Testimonials() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("figure");
    el.scrollBy({ left: dir * ((card?.clientWidth ?? 360) + 20), behavior: "smooth" });
  };

  return (
    <section id="reviews" className="paper relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <Heading eyebrow="Client stories" title="Real people," script="real clarity" />

        <Reveal className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <a
            href={site.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-bronze/20 bg-white/70 px-5 py-3 transition hover:border-bronze/50"
          >
            <GoogleIcon className="h-8 w-8" />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-2xl text-midnight">{site.googleRating}</span>
                <span className="flex text-jupiter">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </span>
              </div>
              <div className="text-xs text-cocoa/60">Based on {site.googleReviewCount} Google reviews</div>
            </div>
          </a>
          <div className="flex gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Previous reviews"
              className="grid h-11 w-11 place-items-center rounded-full border border-bronze/40 text-bronze-deep transition hover:bg-bronze-deep hover:text-cream"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Next reviews"
              className="grid h-11 w-11 place-items-center rounded-full border border-bronze/40 text-bronze-deep transition hover:bg-bronze-deep hover:text-cream"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        <div
          ref={track}
          className="-mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
        >
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className={`relative flex w-[85%] shrink-0 snap-start flex-col rounded-[1.6rem] p-7 sm:w-[360px] ${
                i % 2 === 0 ? "border border-bronze/15 bg-white shadow-[0_24px_50px_-35px_rgba(43,31,24,0.5)]" : "border border-umber/40 bg-mocha shadow-[0_24px_50px_-35px_rgba(43,31,24,0.45)]"
              }`}
            >
              <Quote className={`h-9 w-9 ${i % 2 === 0 ? "text-bronze/25" : "text-latte/60"}`} />
              <blockquote className={`mt-4 flex-1 font-serif text-lg leading-relaxed ${i % 2 === 0 ? "text-cocoa/85" : "text-cream/90"}`}>
                {r.text}
              </blockquote>
              <figcaption className={`mt-6 flex items-center gap-3 border-t ${i % 2 === 0 ? "border-bronze/15" : "border-latte/20"} pt-5`}>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-antique to-bronze font-display text-lg text-white">
                  {r.name.charAt(0)}
                </span>
                <span>
                  <span className={`block font-semibold ${i % 2 === 0 ? "text-mocha" : "text-cream"}`}>{r.name}</span>
                  <span className={`flex items-center gap-1.5 text-xs ${i % 2 === 0 ? "text-cocoa/55" : "text-latte/80"}`}>
                    <GoogleIcon className="h-3 w-3" /> Google review · {r.date}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

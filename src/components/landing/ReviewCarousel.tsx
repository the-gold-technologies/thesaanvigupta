"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GoogleIcon } from "@/components/Icons";
import type { Review } from "@/lib/google-reviews";

/** Horizontally scrolling review cards with prev/next buttons. */
export default function ReviewCarousel({
  reviews,
  live,
}: {
  reviews: Review[];
  live: boolean;
}) {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("figure");
    el.scrollBy({
      left: dir * ((card?.clientWidth ?? 360) + 20),
      behavior: "smooth",
    });
  };

  return (
    <>
      <Reveal className="mt-14 flex items-center justify-between gap-4">
        <p className="flex items-center gap-2 text-sm text-cocoa/65">
          {live && (
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mercury opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mercury" />
            </span>
          )}
          {live
            ? "Latest reviews, live from Google"
            : "What clients say on Google"}
        </p>
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
            key={`${r.name}-${i}`}
            className={`relative flex w-[85%] shrink-0 snap-start flex-col rounded-[1.6rem] p-7 sm:w-[360px] ${
              i % 2 === 0
                ? "border border-bronze/15 bg-white shadow-[0_24px_50px_-35px_rgba(43,31,24,0.5)]"
                : "border border-umber/40 bg-mocha shadow-[0_24px_50px_-35px_rgba(43,31,24,0.45)]"
            }`}
          >
            <div className="flex items-start justify-between">
              <Quote
                className={`h-9 w-9 ${i % 2 === 0 ? "text-bronze/25" : "text-latte/60"}`}
              />
              <span className="flex text-jupiter">
                {Array.from({ length: r.rating ?? 5 }).map((_, k) => (
                  <Star key={k} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
            </div>
            <blockquote
              className={`mt-4 line-clamp-[9] flex-1 font-serif text-lg leading-relaxed ${i % 2 === 0 ? "text-cocoa/85" : "text-cream/90"}`}
            >
              {r.text}
            </blockquote>
            <figcaption
              className={`mt-6 flex items-center gap-3 border-t ${i % 2 === 0 ? "border-bronze/15" : "border-latte/20"} pt-5`}
            >
              {r.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={r.photo}
                  alt=""
                  width={44}
                  height={44}
                  referrerPolicy="no-referrer"
                  className="h-11 w-11 rounded-full object-cover"
                />
              ) : (
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-antique to-bronze font-display text-lg text-white">
                  {r.name.charAt(0)}
                </span>
              )}
              <span>
                <span
                  className={`block font-semibold ${i % 2 === 0 ? "text-mocha" : "text-cream"}`}
                >
                  {r.name}
                </span>
                <span
                  className={`flex items-center gap-1.5 text-xs ${i % 2 === 0 ? "text-cocoa/55" : "text-latte/80"}`}
                >
                  <GoogleIcon className="h-3 w-3" /> Google review · {r.date}
                </span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}

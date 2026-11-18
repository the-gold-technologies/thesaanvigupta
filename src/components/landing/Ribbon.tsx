import { Sparkle } from "./Ornament";

const WORDS = [
  "Ancient wisdom",
  "Practical remedies",
  "Vastu without demolition",
  "Personalised for you",
  "Kundali & Prashna",
  "Numerology",
  "Tarot guidance",
];

/** Mocha ribbon with a slow marquee, like the reference poster footer. */
export default function Ribbon() {
  const row = [...WORDS, ...WORDS];
  return (
    <div
      className="parchment-sky relative overflow-hidden border-y border-umber/40 py-5"
      aria-label="Ancient wisdom, practical remedies, personalised for you"
    >
      <div className="marquee flex w-max items-center gap-8" aria-hidden>
        {row.map((w, i) => (
          <span
            key={i}
            className="flex items-center gap-8 whitespace-nowrap text-xs font-medium uppercase tracking-[0.35em] text-cream/90 sm:text-sm"
          >
            {w}
            <Sparkle className="h-3 w-3 text-latte" />
          </span>
        ))}
      </div>
    </div>
  );
}

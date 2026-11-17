const SIGNS = ["♈ Mesha", "♉ Vrishabha", "♊ Mithuna", "♋ Karka", "♌ Simha", "♍ Kanya", "♎ Tula", "♏ Vrishchika", "♐ Dhanu", "♑ Makara", "♒ Kumbha", "♓ Meena"];
const TOPICS = ["Astrology", "Vastu Shastra", "Numerology", "Prashna Kundali", "Tarot", "Kundali Matching", "Muhurat", "Name Correction", "Business Vastu", "Gemstones", "Remedies", "Sade Sati"];

export default function ZodiacMarquee() {
  const items = SIGNS.flatMap((s, i) => [
    { glyph: s.slice(0, 1) + "︎", text: s.slice(2) },
    { glyph: "", text: TOPICS[i] },
  ]);
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-gold/15 bg-gradient-to-r from-violet/15 via-night-2/95 to-violet/15 py-5" aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-night to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-night to-transparent" />
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-sm uppercase tracking-[0.25em]">
            <span className={t.glyph ? "text-gold" : "text-ivory/70"}>
              {t.glyph && <span className="glyph mr-2 text-lg">{t.glyph}</span>}
              {t.text}
            </span>
            <span className="glyph text-gold/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

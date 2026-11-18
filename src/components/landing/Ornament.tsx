import Reveal from "@/components/Reveal";

/** Four-point star used as a divider jewel (as in the logo / references). */
export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M12 0c.6 6.2 5.8 11.4 12 12-6.2.6-11.4 5.8-12 12-.6-6.2-5.8-11.4-12-12C6.2 11.4 11.4 6.2 12 0z" />
    </svg>
  );
}

/** —— ✦ —— divider */
export function Divider({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const line = tone === "light" ? "via-bronze/50" : "via-gold/50";
  const star = tone === "light" ? "text-antique" : "text-gold";
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-hidden>
      <span className={`h-px w-16 bg-gradient-to-r from-transparent ${line} to-transparent sm:w-24`} />
      <Sparkle className={`h-3.5 w-3.5 ${star}`} />
      <span className={`h-px w-16 bg-gradient-to-r from-transparent ${line} to-transparent sm:w-24`} />
    </div>
  );
}

/** Navagraha dots row — the coloured planets from the logo. */
export function PlanetDots({ className = "" }: { className?: string }) {
  const dots = ["bg-mercury", "bg-cocoa", "bg-sun", "bg-mars", "bg-jupiter"];
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`} aria-hidden>
      {dots.map((c, i) => (
        <span key={i} className={`rounded-full ${c} ${i === 2 ? "h-2.5 w-2.5" : "h-1.5 w-1.5"}`} />
      ))}
    </span>
  );
}

/**
 * Section heading for the landing page.
 * Big Cinzel title with an optional flowing script word, echoing the logo lettering.
 */
export function Heading({
  eyebrow,
  title,
  script,
  sub,
  tone = "light",
  align = "center",
}: {
  eyebrow: string;
  title: string;
  script?: string;
  sub?: string;
  tone?: "light" | "dark";
  align?: "center" | "left";
}) {
  const center = align === "center";
  const dark = tone === "dark";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <PlanetDots />
        <span className={`text-[11px] font-semibold uppercase tracking-[0.35em] ${dark ? "text-gold" : "text-bronze"}`}>{eyebrow}</span>
      </div>
      <h2
        className={`mt-5 font-display text-[1.9rem] uppercase leading-[1.12] tracking-[0.02em] sm:text-4xl md:text-[2.75rem] ${
          dark ? "text-cream" : "text-midnight"
        }`}
      >
        {title}
        {script && (
          <span
            className={`mt-1 block font-script text-[3.2rem] normal-case leading-[0.9] tracking-normal sm:text-[4.2rem] ${
              dark ? "text-gold" : "text-bronze"
            }`}
          >
            {script}
          </span>
        )}
      </h2>
      <Divider tone={tone} className={`mt-5 ${center ? "justify-center" : ""}`} />
      {sub && <p className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? "text-cream/70" : "text-cocoa/70"}`}>{sub}</p>}
    </Reveal>
  );
}

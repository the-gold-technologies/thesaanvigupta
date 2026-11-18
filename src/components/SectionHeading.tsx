import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  sub,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  sub?: string;
  align?: "center" | "left";
}) {
  const center = align === "center";
  return (
    <Reveal className={`${center ? "mx-auto text-center" : ""} max-w-3xl`}>
      <div
        className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
      >
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
        <span className="glyph text-gold">✦</span>
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </span>
        <span className="glyph text-gold">✦</span>
        <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold" />
      </div>
      <h2 className="mt-5 font-display text-3xl leading-tight text-ivory sm:text-4xl md:text-5xl">
        {title}{" "}
        {highlight && <span className="text-gold-gradient">{highlight}</span>}
      </h2>
      {sub && (
        <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
          {sub}
        </p>
      )}
    </Reveal>
  );
}

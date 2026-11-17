import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ZodiacWheel from "./ZodiacWheel";
import Reveal from "./Reveal";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  sub,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  sub?: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-40 md:pb-24 md:pt-48">
      <ZodiacWheel className="pointer-events-none absolute -right-48 -top-24 h-[640px] w-[640px] opacity-40 md:-right-24" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <Reveal>
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs text-muted">
            <Link href="/" className="hover:text-gold">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" />
                {c.href ? <Link href={c.href} className="hover:text-gold">{c.label}</Link> : <span className="text-gold">{c.label}</span>}
              </span>
            ))}
          </nav>
          <div className="mt-8 text-xs font-semibold uppercase tracking-[0.35em] text-gold">✦ {eyebrow}</div>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl">
            {title} {highlight && <span className="text-gold-gradient">{highlight}</span>}
          </h1>
          {sub && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{sub}</p>}
        </Reveal>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, ClipboardList, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Reviews from "@/components/home/Reviews";
import CtaBand from "@/components/CtaBand";
import { WhatsAppIcon } from "@/components/Icons";
import { services, site, waLink } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: `${s.title} in Noida & Delhi NCR`,
    description: `${s.short} ${s.title} by Aacharya Saanvi Gupta: 20+ years of experience and a 4.9★ Google rating.`,
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  const others = services.filter((x) => x.slug !== s.slug);

  return (
    <>
      <PageHero
        eyebrow={`Ruled by ${s.planet}`}
        title={s.title}
        sub={s.short}
        crumbs={[{ label: "Services", href: "/services" }, { label: s.title }]}
      />

      <section className="relative py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.4fr_0.8fr]">
          <div>
            <Reveal>
              <div className="flex items-start gap-6">
                <span className="glyph hidden h-20 w-20 shrink-0 place-items-center rounded-3xl border border-gold/40 bg-night/60 text-4xl text-gold shadow-[0_0_40px_-10px_rgba(233,194,122,0.8)] sm:grid">
                  {s.glyph}
                </span>
                <p className="text-lg leading-relaxed text-ivory/90">{s.intro}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-14 font-display text-2xl sm:text-3xl">
                What it <span className="text-gold-gradient">helps with</span>
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.helpsWith.map((h) => (
                  <li key={h} className="glass flex gap-3 rounded-2xl p-4 text-sm text-ivory/90">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" /> {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-14 font-display text-2xl sm:text-3xl">
                How your <span className="text-gold-gradient">session works</span>
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {s.process.map((p, i) => (
                  <div key={p.title} className="gold-border relative rounded-2xl bg-night-2/90 p-6">
                    <span className="font-display text-4xl text-gold/30">0{i + 1}</span>
                    <h3 className="mt-2 font-display text-lg text-ivory">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Booking card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="gold-border glass rounded-3xl p-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                <ClipboardList className="h-4 w-4" /> Keep these ready
              </div>
              <ul className="mt-5 space-y-3">
                {s.youShare.map((y) => (
                  <li key={y} className="flex items-center gap-3 text-sm text-ivory/90">
                    <span className="glyph text-gold">✦</span> {y}
                  </li>
                ))}
              </ul>
              <div className="section-divider my-7" />
              <a
                href={waLink(`Namaste Saanvi ma'am, I would like to book a ${s.title} consultation.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold"
              >
                <WhatsAppIcon className="h-5 w-5" /> Book {s.title}
              </a>
              <a href={`tel:${site.phonePrimaryRaw}`} className="btn-ghost mt-3 flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm">
                <Phone className="h-4 w-4 text-gold" /> {site.phonePrimary}
              </a>
              <p className="mt-5 text-center text-xs text-muted">In person in Noida · Phone · Video call</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 space-y-2">
              <div className="px-1 text-xs font-semibold uppercase tracking-[0.25em] text-muted">Other services</div>
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-gold/10 bg-night-2/85 px-5 py-4 transition hover:border-gold/40"
                >
                  <span className="flex items-center gap-3 text-sm text-ivory/90">
                    <span className="glyph text-gold">{o.glyph}</span> {o.title}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-gold transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </Reveal>
          </aside>
        </div>
      </section>

      <Reviews />
      <CtaBand />
    </>
  );
}

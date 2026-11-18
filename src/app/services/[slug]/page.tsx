import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2, ClipboardList, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/landing/Testimonials";
import FinalCta from "@/components/landing/FinalCta";
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
    <div className="bg-cream text-cocoa">
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
                <span className="glyph hidden h-20 w-20 shrink-0 place-items-center rounded-3xl border border-bronze/30 bg-[#93683f]/15 text-4xl text-bronze-deep shadow-[0_10px_25px_-10px_rgba(62,54,46,0.3)] sm:grid">
                  {s.glyph}
                </span>
                <p className="text-lg leading-relaxed text-cocoa/90">{s.intro}</p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-14 font-display text-2xl uppercase tracking-[0.05em] text-midnight sm:text-3xl">
                What it <span className="font-script normal-case text-bronze text-[1.2em]">helps with</span>
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.helpsWith.map((h) => (
                  <li key={h} className="flex items-start gap-3 rounded-2xl border border-bronze/20 bg-white/80 p-4 text-sm text-cocoa shadow-sm">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-bronze" /> {h}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-14 font-display text-2xl uppercase tracking-[0.05em] text-midnight sm:text-3xl">
                How your <span className="font-script normal-case text-bronze text-[1.2em]">session works</span>
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {s.process.map((p, i) => (
                  <div key={p.title} className="relative rounded-2xl border border-bronze/20 bg-white/80 p-6 shadow-sm">
                    <span className="font-display text-4xl text-bronze/30">0{i + 1}</span>
                    <h3 className="mt-2 font-display text-lg text-midnight">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cocoa/70">{p.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Booking card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal className="relative overflow-hidden rounded-3xl border border-umber/40 bg-gradient-to-br from-[#93683f] via-[#66513f] to-[#4a3e35] p-7 text-cream shadow-[0_30px_60px_-35px_rgba(62,54,46,0.6)]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-latte">
                <ClipboardList className="h-4 w-4" /> Keep these ready
              </div>
              <ul className="mt-5 space-y-3">
                {s.youShare.map((y) => (
                  <li key={y} className="flex items-center gap-3 text-sm text-cream/90">
                    <span className="glyph text-latte">✦</span> {y}
                  </li>
                ))}
              </ul>
              <div className="my-7 h-px bg-latte/20" />
              <a
                href={waLink(`Namaste Saanvi ma'am, I would like to book a ${s.title} consultation.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-latte px-6 py-3.5 font-semibold text-mocha transition hover:bg-cream"
              >
                <WhatsAppIcon className="h-5 w-5" /> Book {s.title}
              </a>
              <a
                href={`tel:${site.phonePrimaryRaw}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-full border border-latte/40 px-6 py-3.5 text-sm font-medium text-cream transition hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-latte" /> {site.phonePrimary}
              </a>
              <p className="mt-5 text-center text-xs text-cream/70">In person in Noida · Phone · Video call</p>
            </Reveal>

            <Reveal delay={0.1} className="mt-6 space-y-2">
              <div className="px-1 text-xs font-semibold uppercase tracking-[0.25em] text-bronze">Other services</div>
              {others.map((o) => (
                <Link
                  key={o.slug}
                  href={`/services/${o.slug}`}
                  className="group flex items-center justify-between rounded-2xl border border-bronze/20 bg-white/70 px-5 py-4 transition hover:border-bronze/50 hover:bg-white"
                >
                  <span className="flex items-center gap-3 text-sm text-cocoa">
                    <span className="glyph text-bronze">{o.glyph}</span> {o.title}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-bronze transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ))}
            </Reveal>
          </aside>
        </div>
      </section>

      <Testimonials />
      <FinalCta />
    </div>
  );
}

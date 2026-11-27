import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone, Star } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/landing/FaqSection";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { site, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description: `Book an astrology, Vastu or numerology consultation with Aacharya Saanvi Gupta in Sector 121, Noida. Call ${site.phonePrimary} or WhatsApp.`,
};

export default function ContactPage() {
  const cards = [
    {
      Icon: WhatsAppIcon,
      title: "WhatsApp",
      value: site.phonePrimary,
      href: waLink(),
      ext: true,
    },
    {
      Icon: Phone,
      title: "Call us",
      value: `${site.phonePrimary} · ${site.phoneSecondary}`,
      href: `tel:${site.phonePrimaryRaw}`,
    },
    {
      Icon: Mail,
      title: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
    {
      Icon: MapPin,
      title: "Visit",
      value: site.address,
      href: site.mapUrl,
      ext: true,
    },
  ];

  return (
    <div className="bg-cream text-cocoa">
      <PageHero
        eyebrow="Contact"
        title="Let's begin your"
        highlight="journey to clarity."
        sub="Book in person at our Noida office, or consult online from anywhere in the world."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="relative pb-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {cards.map(({ Icon, title, value, href, ext }, i) => (
              <Reveal key={title} delay={i * 0.06}>
                <a
                  href={href}
                  {...(ext
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="group flex items-start gap-5 rounded-2xl border border-bronze/20 bg-white/80 p-5 shadow-sm transition hover:border-bronze/50 hover:bg-white"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-bronze/10 text-bronze-deep transition group-hover:bg-bronze-deep group-hover:text-cream">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                      {title}
                    </span>
                    <span className="mt-1 block font-medium text-cocoa">
                      {value}
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal
              delay={0.3}
              className="flex items-start gap-5 rounded-2xl border border-bronze/20 bg-white/80 p-5 shadow-sm"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-bronze/10 text-bronze-deep">
                <Clock className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-[0.25em] text-bronze">
                  Consultations
                </span>
                <span className="mt-1 block text-cocoa/80">
                  By appointment: in person, phone or video call
                </span>
              </span>
            </Reveal>
            <Reveal delay={0.35} className="flex gap-3 pt-2">
              {[
                {
                  href: site.socials.instagram,
                  Icon: InstagramIcon,
                  label: "Instagram",
                },
                {
                  href: site.socials.facebook,
                  Icon: FacebookIcon,
                  label: "Facebook",
                },
                {
                  href: site.socials.linkedin,
                  Icon: LinkedInIcon,
                  label: "LinkedIn",
                },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-bronze/30 text-bronze-deep transition hover:bg-bronze-deep hover:text-cream"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      {/* ── Dedicated Map Section with Google Rating & Reviews ── */}
      <section
        id="location"
        className="parchment-sky relative border-t border-mocha py-16 md:py-24 text-cream"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-10 text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.35em] text-latte">
              ✦ Visit Our Centre
            </div>
            <h2 className="mt-3 font-display text-3xl uppercase text-cream sm:text-4xl">
              Find Us in{" "}
              <span className="font-script normal-case text-latte text-[1.2em]">
                Noida
              </span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-cream/80 sm:text-base">
              Consultations in person by prior appointment at Sector 121, Noida.
              Also available online worldwide.
            </p>
          </div>

          <Reveal className="relative overflow-hidden rounded-3xl border border-latte/20 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.8)]">
            {/* Compact 2-line Google rating card */}
            <div className="absolute left-3 top-3 z-10 w-[calc(100%-24px)] max-w-[340px] rounded-xl border border-stone-200/90 bg-white px-3 py-2.5 shadow-xl sm:left-4 sm:top-4">
              {/* Line 1: rating + actions */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <GoogleIcon className="h-5 w-5 shrink-0" />
                  <span className="font-display text-lg font-bold leading-none text-stone-900">
                    {site.googleRating}
                  </span>
                  <div className="flex text-[#f4b400]">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-1.5">
                  <a
                    href={site.googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#f6edd9] px-2.5 py-1 text-[11px] font-semibold text-[#664d36] transition hover:bg-[#ebdcc0] hover:text-[#4a3724]"
                  >
                    Reviews
                  </a>
                  <a
                    href={site.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-stone-300 bg-white px-2.5 py-1 text-[11px] font-semibold text-stone-700 transition hover:bg-stone-50 hover:text-stone-900"
                  >
                    Directions
                  </a>
                </div>
              </div>

              {/* Line 2: review count + location */}
              <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-stone-600">
                <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                <span className="truncate">
                  {site.googleReviewCount}+ Google reviews · Sector 121, Noida
                </span>
              </div>
            </div>

            {/* Iframe is shifted up so Google's built-in place card is cropped out */}
            <div className="relative h-[480px] w-full overflow-hidden sm:h-[540px] lg:h-[620px]">
              <iframe
                title="ASG Consultants location map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                className="absolute inset-x-0 -top-[150px] h-[calc(100%+150px)] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </div>
  );
}

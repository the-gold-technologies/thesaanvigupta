import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FaqSection from "@/components/landing/FaqSection";
import {
  FacebookIcon,
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

        <Reveal className="mx-auto mt-12 max-w-7xl px-5 sm:px-6">
          <div className="overflow-hidden rounded-3xl border border-bronze/25 shadow-sm">
            <iframe
              title="ASG Consultants location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
              className="h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      <FaqSection />
    </div>
  );
}

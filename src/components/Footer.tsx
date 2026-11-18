import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { services, site, waLink } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="sky relative border-t border-gold/20">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-24 w-24 place-items-center rounded-full bg-cream p-2 ring-1 ring-gold/50 shadow-[0_0_40px_-10px_rgba(233,194,122,0.6)]">
              <Image src="/images/logo.png" alt="Aacharya Saanvi Gupta logo" width={60} height={60} className="h-20 w-20 object-contain" />
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-cream/65">
            Astrology, Vastu and Numerology that guides you — never frightens you. 20+ years of helping families and businesses
            find clarity, balance and growth.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: site.socials.instagram, Icon: InstagramIcon, label: "Instagram" },
              { href: site.socials.facebook, Icon: FacebookIcon, label: "Facebook" },
              { href: site.socials.linkedin, Icon: LinkedInIcon, label: "LinkedIn" },
              { href: waLink(), Icon: WhatsAppIcon, label: "WhatsApp" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/25 text-gold transition hover:border-gold hover:bg-gold hover:text-midnight"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-cream/65 transition hover:text-gold">
                  <span className="glyph mr-2 text-gold/70">{s.glyph}</span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { l: "About Saanvi", h: "/about" },
              { l: "All Services", h: "/services" },
              { l: "Free Numerology Calculator", h: "/#numerology" },
              { l: "Client Reviews", h: "/#reviews" },
              { l: "FAQs", h: "/#faq" },
              { l: "Book a Consultation", h: "/contact" },
            ].map((x) => (
              <li key={x.l}>
                <Link href={x.h} className="text-cream/65 transition hover:text-gold">
                  {x.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-[0.25em] text-gold">Reach Us</h3>
          <ul className="mt-5 space-y-4 text-sm text-cream/65">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={site.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">
                {site.address}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                <a href={`tel:${site.phonePrimaryRaw}`} className="block hover:text-gold">{site.phonePrimary}</a>
                <a href={`tel:${site.phoneSecondaryRaw}`} className="block hover:text-gold">{site.phoneSecondary}</a>
              </span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Aacharya Saanvi Gupta · ASG Consultants. All rights reserved.</p>
          <p className="text-center md:text-right">
            Guidance is based on Vedic astrology, Vastu and numerology traditions and is not a substitute for medical, legal or
            financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}

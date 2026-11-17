import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { services, site, waLink } from "@/lib/site";
import { FacebookIcon, InstagramIcon, LinkedInIcon, WhatsAppIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-gold/15 bg-night/80 backdrop-blur">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-ivory/95 p-1 ring-1 ring-gold/50">
              <Image src="/images/logo.png" alt="Aacharya Saanvi Gupta logo" width={60} height={60} className="h-14 w-14 object-contain" />
            </span>
          </Link>
          <p className="mt-5 text-sm leading-relaxed text-muted">
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
                className="grid h-10 w-10 place-items-center rounded-full border border-gold/25 text-gold transition hover:border-gold hover:bg-gold hover:text-night"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-muted transition hover:text-gold">
                  <span className="glyph mr-2 text-gold/70">{s.glyph}</span>
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold">Explore</h3>
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
                <Link href={x.h} className="text-muted transition hover:text-gold">
                  {x.l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold">Reach Us</h3>
          <ul className="mt-5 space-y-4 text-sm text-muted">
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
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted/80 md:flex-row">
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

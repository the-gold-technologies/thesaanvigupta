import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms",
  description:
    "Privacy Policy and Terms & Conditions for thesaanvigupta.com: how Aacharya Saanvi Gupta collects, uses and protects your information, and the terms for using this website and its services.",
  alternates: { canonical: "/privacy-policy" },
};

type Clause = { title: string; text: string };

const PRIVACY: Clause[] = [
  {
    title: "Information Collection",
    text: "We may collect personal information such as your name, email address, and phone number when you voluntarily provide it through our website or during the booking process. We may also collect non-personal information, such as browsing history and cookies.",
  },
  {
    title: "Use of Information",
    text: "We use your personal information to provide you with our services, respond to your inquiries, and improve our website. We do not sell or rent your information to third parties.",
  },
  {
    title: "Data Security",
    text: "We take reasonable measures to protect your personal information from unauthorized access or disclosure. However, no data transmission over the internet is completely secure.",
  },
  {
    title: "Cookies",
    text: "We may use cookies to enhance your browsing experience. You can disable cookies in your browser settings if you prefer not to have them stored.",
  },
  {
    title: "Third-Party Services",
    text: "We may use third-party services to process payments or analyze website traffic. These services have their own privacy policies, and we are not responsible for their practices.",
  },
  {
    title: "Changes to Privacy Policy",
    text: "We reserve the right to modify this Privacy Policy at any time. We will notify you of any significant changes via our website.",
  },
];

const TERMS: Clause[] = [
  {
    title: "Acceptance of Terms",
    text: "By accessing or using this website, you agree to be bound by these Terms and Conditions, and you acknowledge that you have read, understood, and agree to comply with them. If you do not agree to these terms, please do not use this website.",
  },
  {
    title: "Services Offered",
    text: "We offer services related to Vastu, Numerology, Astrology, and Prashna Kundali. These services are provided for personal insight purposes only.",
  },
  {
    title: "Age Restriction",
    text: "You must be at least 18 years of age to use our services and website. By using this website and services, you confirm that you are of legal age.",
  },
  {
    title: "Privacy and Data Collection",
    text: "Please review our Privacy Policy above for details on how we collect, use, and protect your personal information.",
  },
  {
    title: "Intellectual Property",
    text: "All content on this website, including text, images, and trademarks, is protected by copyright and other intellectual property laws. You may not use, reproduce, or distribute any content from this website without prior written consent.",
  },
  {
    title: "Limitation of Liability",
    text: "In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of this website or our services.",
  },
  {
    title: "Third-Party Links",
    text: "Our website may contain links to third-party websites or services. We are not responsible for the content or practices of these third-party sites.",
  },
  {
    title: "Changes to Terms",
    text: "We reserve the right to modify these Terms and Conditions at any time. It is your responsibility to regularly review these terms to stay informed of any updates.",
  },
];

const slug = (prefix: string, t: string) =>
  `${prefix}-${t.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

function PolicyBlock({
  id,
  prefix,
  Icon,
  eyebrow,
  title,
  clauses,
}: {
  id: string;
  prefix: string;
  Icon: typeof ShieldCheck;
  eyebrow: string;
  title: string;
  clauses: Clause[];
}) {
  return (
    <section id={id} className="scroll-mt-32">
      <Reveal className="flex items-center gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-umber to-bronze-deep text-cream shadow-[0_12px_24px_-12px_rgba(92,67,52,0.8)]">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-bronze">
            {eyebrow}
          </p>
          <h2 className="font-display text-2xl uppercase text-midnight sm:text-3xl">
            {title}
          </h2>
        </div>
      </Reveal>

      <ol className="mt-8 space-y-4">
        {clauses.map((c, i) => (
          <li key={c.title} id={slug(prefix, c.title)} className="scroll-mt-32">
            <Reveal
              delay={Math.min(i, 4) * 0.04}
              className="group flex gap-5 rounded-2xl border border-bronze/15 bg-white/70 p-5 shadow-[0_20px_40px_-34px_rgba(43,31,24,0.55)] transition duration-500 hover:border-bronze/30 hover:bg-white sm:p-6"
            >
              <span className="font-display text-2xl leading-none text-tan transition duration-500 group-hover:text-umber">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg text-midnight">
                  {c.title}
                </h3>
                <p className="mt-2 leading-relaxed text-cocoa/75">{c.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream text-cocoa">
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        highlight="& Terms"
        sub="How we collect, use and protect your information, and the terms for using this website and our services."
        crumbs={[{ label: "Privacy Policy" }]}
        tone="dark"
      />

      <div className="paper relative py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Sidebar: contents */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <nav
              aria-label="On this page"
              className="rounded-3xl border border-bronze/15 bg-[#F5ECDF] p-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-bronze">
                On this page
              </p>
              <ul className="mt-4 space-y-1 text-sm">
                {[
                  {
                    href: "#privacy",
                    label: "Privacy Policy",
                    items: PRIVACY,
                    p: "privacy",
                  },
                  {
                    href: "#terms",
                    label: "Terms & Conditions",
                    items: TERMS,
                    p: "terms",
                  },
                ].map((g) => (
                  <li key={g.href}>
                    <a
                      href={g.href}
                      className="block rounded-lg px-2 py-1.5 font-semibold text-mocha transition hover:bg-cream hover:text-umber"
                    >
                      {g.label}
                    </a>
                    <ul className="mb-2 ml-2 hidden border-l border-bronze/20 lg:block">
                      {g.items.map((c) => (
                        <li key={c.title}>
                          <a
                            href={`#${slug(g.p, c.title)}`}
                            className="block py-1 pl-3 text-cocoa/60 transition hover:text-umber"
                          >
                            {c.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li>
                  <a
                    href="#contact"
                    className="block rounded-lg px-2 py-1.5 font-semibold text-mocha transition hover:bg-cream hover:text-umber"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <div className="min-w-0 space-y-16">
            <PolicyBlock
              id="privacy"
              prefix="privacy"
              Icon={ShieldCheck}
              eyebrow="Your data"
              title="Privacy Policy"
              clauses={PRIVACY}
            />
            <PolicyBlock
              id="terms"
              prefix="terms"
              Icon={FileText}
              eyebrow="Using this website"
              title="Terms & Conditions"
              clauses={TERMS}
            />

            {/* Contact */}
            <Reveal>
              <section
                id="contact"
                className="parchment-sky scroll-mt-32 overflow-hidden rounded-3xl border border-umber/40 p-7 text-cream sm:p-9"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-latte">
                  Questions?
                </p>
                <h2 className="mt-2 font-display text-2xl uppercase sm:text-3xl">
                  Contact us
                </h2>
                <p className="mt-3 max-w-xl text-cream/75">
                  If you have any questions about this Privacy Policy or these
                  Terms, please reach out.
                </p>
                <ul className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
                  <li className="flex gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-latte" />
                    <a
                      href={`mailto:${site.email}`}
                      className="break-all hover:text-latte"
                    >
                      {site.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-latte" />
                    <a
                      href={`tel:${site.phonePrimaryRaw}`}
                      className="hover:text-latte"
                    >
                      {site.phonePrimary}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-latte" />
                    <span>{site.address}</span>
                  </li>
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center rounded-full bg-latte px-6 py-3 text-sm font-semibold text-mocha transition hover:bg-cream"
                >
                  Go to contact page
                </Link>
              </section>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

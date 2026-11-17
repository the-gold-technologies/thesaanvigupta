import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import StarField from "@/components/StarField";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { site } from "@/lib/site";

const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Aacharya Saanvi Gupta | Best Astrologer & Vastu Consultant in Noida & Delhi",
    template: "%s | Aacharya Saanvi Gupta",
  },
  description:
    "Award-winning astrologer, Vastu consultant and numerologist in Noida & Delhi NCR with 20+ years of experience and 10,000+ consultations. Astrology, Vastu without demolition, Numerology, Prashna Kundali & Tarot.",
  keywords: [
    "best vastu consultant in noida",
    "vastu consultant delhi",
    "astrologer in noida",
    "numerologist in noida",
    "prashna kundali",
    "tarot card reading noida",
    "Saanvi Gupta",
  ],
  openGraph: {
    title: "Aacharya Saanvi Gupta — Astrology · Vastu · Numerology",
    description: "Every problem has a planetary answer. 20+ years, 10,000+ consultations, 4.9★ on Google.",
    url: site.url,
    siteName: "Aacharya Saanvi Gupta",
    images: ["/images/saanvi.webp"],
    locale: "en_IN",
    type: "website",
  },
  icons: { icon: "/images/logo.png" },
};

export const viewport: Viewport = {
  themeColor: "#06040f",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Aacharya Saanvi Gupta — ASG Consultants",
  image: `${site.url}/images/saanvi.webp`,
  url: site.url,
  telephone: site.phonePrimaryRaw,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "115, Cleo Street, Sector 121",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  areaServed: ["Noida", "Delhi", "Delhi NCR", "India"],
  sameAs: Object.values(site.socials),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${manrope.variable} antialiased`}>
      <body className="relative min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <StarField />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

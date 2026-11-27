import { Phone } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

/**
 * Sticky "Call Us" / "Message Us" buttons pinned to the bottom corners.
 * On mobile they become a full-width split bar.
 */
export default function StickyContact() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex md:inset-x-5 md:bottom-5 md:justify-between">
      <a
        href={`tel:${site.phonePrimaryRaw}`}
        aria-label={`Call ${site.phonePrimary}`}
        className="pointer-events-auto flex flex-1 items-center justify-center gap-2 bg-mars px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_-8px_rgba(194,58,44,0.7)] transition hover:bg-[#a52f23] md:flex-none md:rounded-lg md:py-3"
      >
        <Phone className="h-4 w-4" /> Call Us
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp"
        className="pointer-events-auto relative flex flex-1 items-center justify-center gap-2 bg-[#1f9d55] px-5 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white shadow-[0_10px_30px_-8px_rgba(31,157,85,0.7)] transition hover:bg-[#188247] md:flex-none md:rounded-lg md:py-3"
      >
        <span className="pulse-ring absolute inset-0 hidden rounded-lg bg-[#25D366] md:block" />
        <WhatsAppIcon className="relative h-4.5 w-4.5" />
        <span className="relative">Message Us</span>
      </a>
    </div>
  );
}

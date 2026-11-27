import { PhoneCall } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

const CALL_BG =
  "bg-gradient-to-br from-[#9a6c40] via-umber to-bronze-deep shadow-[0_14px_30px_-10px_rgba(92,67,52,0.75)]";
const WA_BG =
  "bg-gradient-to-br from-[#2bd66f] via-[#1fb757] to-[#128c7e] shadow-[0_14px_30px_-10px_rgba(18,140,126,0.7)]";

/**
 * Sticky "Call Us" / "WhatsApp" quick actions.
 * Mobile: one floating dock with two equal buttons.
 * Desktop: small icon buttons in the bottom corners that slide open on hover
 * to show the number / chat label.
 */
export default function StickyContact() {
  return (
    <>
      {/* Mobile dock */}
      <div className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 md:hidden">
        <div className="flex gap-2 rounded-2xl border border-sand/80 bg-cream/85 p-1.5 shadow-[0_18px_40px_-14px_rgba(43,31,24,0.45)] backdrop-blur-md">
          <a
            href={`tel:${site.phonePrimaryRaw}`}
            aria-label={`Call ${site.phonePrimary}`}
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-cream transition-transform duration-300 ease-smooth active:scale-[0.97] ${CALL_BG}`}
          >
            <PhoneCall className="h-4 w-4" />
            Call Now
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message us on WhatsApp"
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-white transition-transform duration-300 ease-smooth active:scale-[0.97] ${WA_BG}`}
          >
            <WhatsAppIcon className="h-4.5 w-4.5" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Desktop corner pills */}
      <div className="pointer-events-none fixed inset-x-6 bottom-6 z-50 hidden items-end justify-between md:flex">
        <a
          href={`tel:${site.phonePrimaryRaw}`}
          aria-label={`Call ${site.phonePrimary}`}
          className={`group pointer-events-auto flex items-center rounded-full border border-latte/30 p-1.5 text-cream ring-1 ring-black/5 transition-[transform,filter,box-shadow] duration-500 ease-smooth hover:-translate-y-0.5 hover:brightness-110 focus-visible:-translate-y-0.5 ${CALL_BG}`}
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-cream text-umber shadow-sm transition-transform duration-500 ease-smooth group-hover:rotate-12">
            <PhoneCall className="h-4.5 w-4.5" />
          </span>
          <span className="grid grid-cols-[0fr] opacity-0 transition-[grid-template-columns,opacity,margin] duration-500 ease-smooth group-hover:mx-3 group-hover:grid-cols-[1fr] group-hover:opacity-100 group-focus-visible:mx-3 group-focus-visible:grid-cols-[1fr] group-focus-visible:opacity-100">
            <span className="flex min-w-0 flex-col overflow-hidden whitespace-nowrap leading-tight">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-latte">
                Call Us
              </span>
              <span className="text-sm font-semibold tabular-nums">
                {site.phonePrimary}
              </span>
            </span>
          </span>
        </a>

        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Message us on WhatsApp"
          className={`group pointer-events-auto relative flex items-center rounded-full border border-white/30 p-1.5 text-white ring-1 ring-black/5 transition-[transform,filter,box-shadow] duration-500 ease-smooth hover:-translate-y-0.5 hover:brightness-110 focus-visible:-translate-y-0.5 ${WA_BG}`}
        >
          <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#128c7e] shadow-sm transition-transform duration-500 ease-smooth group-hover:scale-110">
            <WhatsAppIcon className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2bd66f] opacity-70" />
              <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-[#2bd66f]" />
            </span>
          </span>
          <span className="grid grid-cols-[0fr] opacity-0 transition-[grid-template-columns,opacity,margin] duration-500 ease-smooth group-hover:mx-3 group-hover:grid-cols-[1fr] group-hover:opacity-100 group-focus-visible:mx-3 group-focus-visible:grid-cols-[1fr] group-focus-visible:opacity-100">
            <span className="flex min-w-0 flex-col overflow-hidden whitespace-nowrap leading-tight">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
                WhatsApp
              </span>
              <span className="text-sm font-semibold">Chat with us</span>
            </span>
          </span>
        </a>
      </div>
    </>
  );
}

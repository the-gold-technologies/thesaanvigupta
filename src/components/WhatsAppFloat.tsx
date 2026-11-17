import { waLink } from "@/lib/site";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3"
    >
      <span className="hidden rounded-full border border-gold/30 bg-night/90 px-4 py-2 text-sm text-ivory opacity-0 shadow-xl backdrop-blur transition group-hover:opacity-100 md:block">
        Ask your question
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)]">
        <span className="pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </a>
  );
}

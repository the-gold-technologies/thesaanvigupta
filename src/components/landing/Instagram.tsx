import Image from "next/image";
import Reveal from "@/components/Reveal";
import { InstagramIcon } from "@/components/Icons";
import { Heading } from "./Ornament";
import { instagramPosts, site } from "@/lib/site";

/** Instagram follow card + optional embedded posts. */
export default function Instagram() {
  return (
    <section
      id="instagram"
      className="relative scroll-mt-36 bg-parchment py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <Heading
          eyebrow="On Instagram"
          title="Follow Saanvi"
          script="on Instagram"
          sub="Daily astrology guidance, Vastu tips and real moments from Saanvi's practice."
        />

        <Reveal className="mx-auto mt-10 flex max-w-md items-center gap-4 rounded-2xl border border-bronze/15 bg-white p-3 pr-4 shadow-[0_20px_40px_-30px_rgba(43,31,24,0.6)]">
          <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[conic-gradient(from_200deg,#f58529,#dd2a7b,#8134af,#515bd4,#f58529)] p-[2px]">
            <span className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-cream">
              <Image
                src="/images/logo.png"
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 object-contain"
              />
            </span>
          </span>
          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-midnight">
              @{site.instagramHandle}
            </p>
            <p className="truncate text-xs text-cocoa/60">
              Follow for daily guidance and remedies
            </p>
          </div>
          <a
            href={site.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-gradient-to-r from-[#dd2a7b] to-[#f58529] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            <InstagramIcon className="h-4 w-4" /> Follow
          </a>
        </Reveal>

        {instagramPosts.length > 0 && (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {instagramPosts.map((url) => (
              <Reveal
                key={url}
                className="overflow-hidden rounded-2xl border border-bronze/15 bg-white"
              >
                <iframe
                  src={`${url.replace(/\/?$/, "/")}embed`}
                  title="Instagram post"
                  loading="lazy"
                  className="h-[540px] w-full"
                />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { ExternalLink, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import { GoogleIcon } from "@/components/Icons";
import { Heading } from "./Ornament";
import ReviewCarousel from "./ReviewCarousel";
import { getGoogleReviews } from "@/lib/google-reviews";
import { site } from "@/lib/site";

/**
 * Client testimonials (live from Google when an API key is set).
 * `withRating` adds the Google rating card + map — used on the home page only.
 */
export default async function Testimonials({
  withRating = false,
}: { withRating?: boolean } = {}) {
  const { rating, count, reviews, live } = await getGoogleReviews();
  const placeUrl = `https://www.google.com/maps/place/?q=place_id:${site.googlePlaceId}`;

  return (
    <section
      id="reviews"
      className="paper relative scroll-mt-24 overflow-hidden py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {withRating ? (
          <Heading
            eyebrow="Verified reviews"
            title={`Rated ${rating.toFixed(1)} on Google`}
            script="by real clients"
            sub="See what people across Noida and Delhi NCR say, and find our centre on the map."
          />
        ) : (
          <Heading
            eyebrow="Client stories"
            title="Real people,"
            script="real clarity"
          />
        )}

        {withRating && (
          <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="flex flex-col items-center justify-between rounded-[1.6rem] border border-bronze/15 bg-white p-8 text-center shadow-[0_24px_50px_-35px_rgba(43,31,24,0.5)]">
              <div className="flex flex-col items-center">
                <GoogleIcon className="h-10 w-10" />
                <div className="mt-4 font-display text-6xl text-midnight">
                  {rating.toFixed(1)}
                </div>
                <div className="mt-2 flex text-jupiter">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <p className="mt-2 text-sm text-cocoa/60">
                  Based on {count}+ Google reviews
                </p>
              </div>
              <div className="mt-8 w-full">
                <a
                  href={placeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#b4531f] to-[#8a2f1a] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-12px_rgba(138,47,26,0.7)] transition hover:opacity-90"
                >
                  <GoogleIcon className="h-4 w-4 rounded-full bg-white p-0.5" />
                  Read Reviews on Google
                </a>
                <a
                  href={site.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xs font-semibold text-[#b4531f] hover:underline"
                >
                  Write a review ›
                </a>
              </div>
            </Reveal>

            <Reveal
              delay={0.08}
              className="relative min-h-[320px] overflow-hidden rounded-[1.6rem] border border-bronze/15 bg-white shadow-[0_24px_50px_-35px_rgba(43,31,24,0.5)]"
            >
              <iframe
                src={site.mapEmbedUrl}
                title="ASG Consultants on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />
              <a
                href={site.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-[#1a73e8] shadow"
              >
                Open in Maps <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Reveal>
          </div>
        )}

        <ReviewCarousel reviews={reviews} live={live} />
      </div>
    </section>
  );
}

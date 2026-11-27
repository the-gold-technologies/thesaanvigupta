import { reviews as fallbackReviews, site } from "./site";

export type Review = {
  name: string;
  date: string;
  text: string;
  rating?: number;
  photo?: string;
  url?: string;
};

export type ReviewData = {
  rating: number;
  count: number;
  reviews: Review[];
  live: boolean;
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: {
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: {
      displayName?: string;
      photoUri?: string;
      uri?: string;
    };
  }[];
};

/**
 * Live Google rating + latest reviews via the Places API (New).
 * Set GOOGLE_PLACES_API_KEY in the environment to enable it; the response
 * is cached and refreshed every hour. Without a key (or on any error) the
 * static reviews in site.ts are used.
 */
export async function getGoogleReviews(): Promise<ReviewData> {
  const fallback: ReviewData = {
    rating: site.googleRating,
    count: site.googleReviewCount,
    reviews: fallbackReviews,
    live: false,
  };

  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) return fallback;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${site.googlePlaceId}?languageCode=en`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: 3600 },
      }
    );
    if (!res.ok) return fallback;
    const data = (await res.json()) as PlacesResponse;

    const live = (data.reviews ?? [])
      .map((r) => ({
        name: r.authorAttribution?.displayName ?? "Google user",
        date: r.relativePublishTimeDescription ?? "",
        text: r.text?.text ?? r.originalText?.text ?? "",
        rating: r.rating,
        photo: r.authorAttribution?.photoUri,
        url: r.authorAttribution?.uri,
      }))
      .filter((r) => r.text && (r.rating ?? 5) >= 4);

    return {
      rating: data.rating ?? fallback.rating,
      count: data.userRatingCount ?? fallback.count,
      // Places returns at most 5 reviews; top up with saved ones
      reviews: [
        ...live,
        ...fallbackReviews.filter((f) => !live.some((l) => l.name === f.name)),
      ],
      live: true,
    };
  } catch {
    return fallback;
  }
}

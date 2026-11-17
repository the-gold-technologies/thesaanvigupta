# The Saanvi Gupta: Website Revamp

Modern, cosmic-themed redesign of [thesaanvigupta.com](https://www.thesaanvigupta.com) for Aacharya Saanvi Gupta (Astrologer · Vastu Consultant · Numerologist, Noida).

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · framer-motion · lucide-react

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Pages

| Route | Contents |
| --- | --- |
| `/` | Hero with rotating zodiac wheel, "What's troubling you?" problem solver, services, about, process, free numerology calculator, Google reviews, honours, FAQ, CTA |
| `/about` | Story, philosophy, journey timeline, honours, reviews |
| `/services` | All services, problem solver and process |
| `/services/[slug]` | Astrology, Vastu, Numerology, Prashna Kundali and Tarot detail pages (statically generated) |
| `/contact` | Contact cards, a booking form that opens WhatsApp with the details prefilled, map and FAQ |

## Editing content

All text, phone numbers, services, problems, reviews, awards and FAQs live in **`src/lib/site.ts`**. Edit that file and every page updates.

Images are in `public/images/` (`logo.png`, `saanvi.webp`).

## Key components

- `StarField`: fixed canvas starfield with twinkling, mouse parallax and shooting stars (respects reduced motion)
- `ZodiacWheel`: animated SVG wheel showing the 12 rashis (Sanskrit names), 27 nakshatra points, planet orbits and an 8-direction Vastu star
- `home/ProblemSolver`: interactive problem picker → planetary explanation → solution → prefilled WhatsApp CTA
- `home/NumerologyTool`: Moolank and Bhagyank calculator with each number's ruling planet

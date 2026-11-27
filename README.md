# The Saanvi Gupta — Official Website

Modern, luxury cosmic-themed digital home for **Aacharya Saanvi Gupta** — renowned Astrologer, Vastu Consultant, and Numerologist based in Noida, India.

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**, delivering an editorial-grade luxury experience rooted in Vedic aesthetics.

---

## 🌟 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom luxury theme tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or Node.js 20+
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd thesaanvigupta

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts local Next.js development server on port 3000 |
| `npm run build` | Compiles an optimized production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint checks across the codebase |
| `npm run format` | Formats all files using Prettier |
| `npm run format:check` | Verifies code formatting compliance |

---

## 🗺️ Page Architecture

| Route | Description |
|---|---|
| `/` | **Home**: Hero with rotating zodiac wheel, Vedic problem solver, services preview, interactive numerology calculator, podcast carousel, press features, reviews, awards, and booking CTAs. |
| `/about` | **About**: Aacharya Saanvi Gupta's story, Vedic lineage, philosophy, milestones & honours timeline, client testimonials. |
| `/services` | **Services**: Comprehensive directory of consultancies (Astrology, Vastu, Numerology, Prashna Kundali, Tarot). |
| `/services/[slug]` | **Service Details**: Dynamic dedicated pages with targeted benefits, step-by-step consultation journey, and direct booking. |
| `/vastu-coaching` | **Vastu Coaching**: Vedic Vastu masterclasses and certification courses, detailed syllabus, student outcomes, and enrollment. |
| `/media` | **Media & Press**: Curated TV broadcasts (Zee News, Bharat 24), podcasts (*In Conversation with Saanvi*), interviews, and video archives. |
| `/achievements` | **Achievements & Recognitions**: National awards, honours by dignitaries (e.g. Shri Yogi Adityanath), credential gallery, and featured articles. |
| `/blog/[slug]` | **Articles & Knowledge**: Deep-dive Vedic guides and astrological analysis in an editorial reading format with breadcrumb navigation. |
| `/contact` | **Contact & Consultations**: Interactive appointment form with pre-filled WhatsApp routing, location map, office coordinates, and FAQs. |
| `/privacy-policy` | **Privacy Policy & Terms**: Data protection, consultation disclaimer, cookie usage, and legal terms. |

---

## 💎 Key Features & Interactive Components

- **Cookie Preferences (`CookieConsent.tsx`)**:
  - Warm cream/ivory luxury dialog with instant Accept/Reject actions and `localStorage` persistence.
- **Floating Contact Hub (`StickyContact.tsx`)**:
  - Non-intrusive mobile & desktop quick-action pills for "Call Us" and "Message Us" with live pulse indicators.
- **Interactive Lightbox (`AwardPhoto.tsx`)**:
  - Full-screen high-res award viewer with arrow slide navigation and keyboard support.
- **Navigation Dropdowns (`Navbar.tsx`)**:
  - Sleek hover/click dropdowns with custom cosmic glyphs, active indicators, and click-to-dismiss functionality.
- **Numerology Calculator (`NumerologyTool.tsx`)**:
  - Instant Moolank and Bhagyank calculator with planetary rulers and personality breakdowns.
- **Vedic Problem Solver (`ProblemSolver.tsx`)**:
  - Interactive tool mapping everyday dilemmas (career, marriage, health, finances) to planetary insights and solutions.
- **Background Starfield (`StarField.tsx`)**:
  - High-performance HTML5 canvas starfield with twinkling, mouse parallax, and shooting stars (honors `prefers-reduced-motion`).

---

## 🎨 Design System & Palette

The visual identity combines warm ivory, parchment, antique bronze, and deep cocoa:

| Token | Hex Value | Usage |
|---|---|---|
| `cream` | `#fbf7ef` | Primary light background, cards, modals |
| `parchment` | `#f4ecdf` | Secondary warm tinted surfaces, inputs |
| `latte` | `#e3c9a6` | Warm golden accents, highlights |
| `bronze` | `#8a6a54` | Borders, subtle icons, badges, breadcrumbs |
| `bronze-deep` | `#5c4334` | Subheadings, prominent bronze accents |
| `mocha` / `midnight` | `#3e362e` | Headings, hero headers, dark button fills |
| `cocoa` | `#2b1f18` | Body text, high-contrast dark accents |

---

## 📁 Managing Content

All website content is organized cleanly in `src/lib/`:

- **`src/lib/site.ts`**:
  - General site configuration, contact numbers, social links, navigation items.
  - Services data, Vedic problems & solutions, honours, FAQs, and podcasts.
- **`src/lib/blog.ts`**:
  - Blog post metadata, summaries, read times, and editorial article content.
- **`src/lib/google-reviews.ts`**:
  - Verified client reviews, ratings, and feedback.
- **`public/`**:
  - Static media, logo (`public/images/logo.png`), portrait imagery, and badges.

---

## 📄 License & Ownership

© 2026 Aacharya Saanvi Gupta · ASG Consultants. All rights reserved.
Content and guidance are based on traditional Vedic astrology, Vastu Shastra, and numerology.

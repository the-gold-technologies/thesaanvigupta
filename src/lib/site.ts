export const site = {
  name: "Aacharya Saanvi Gupta",
  shortName: "Saanvi Gupta",
  url: "https://www.thesaanvigupta.com",
  tagline: "Astrologer · Vastu Consultant · Numerologist",
  phonePrimary: "+91 83838 99630",
  phonePrimaryRaw: "+918383899630",
  phoneSecondary: "+91 99108 19545",
  phoneSecondaryRaw: "+919910819545",
  whatsapp: "918383899630",
  email: "contact@thesaanvigupta.com",
  address:
    "ASG Consultants, 115, Cleo Street, Sector 121, Noida, Uttar Pradesh",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=ASG+Consultants+Cleo+Street+Sector+121+Noida",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJmV2ZEyblDDkR5xb_IfCXMNQ",
  googleRating: 4.9,
  googleReviewCount: 165,
  socials: {
    instagram: "https://www.instagram.com/astrosaanvigupta/",
    facebook: "https://www.facebook.com/astrosaanvigupta/",
    linkedin: "https://www.linkedin.com/in/astrosaanvigupta",
    // TODO: confirm the YouTube channel handle
    youtube: "https://www.youtube.com/@astrosaanvigupta",
  },
  instagramHandle: "astrosaanvigupta",
  /** Google Place ID (from the "write a review" link) — used for live reviews */
  googlePlaceId: "ChIJmV2ZEyblDDkR5xb_IfCXMNQ",
  mapEmbedUrl:
    "https://www.google.com/maps?q=ASG+Consultants,+115+Cleo+Street,+Sector+121,+Noida&output=embed",
  stats: [
    { value: 20, suffix: "+", label: "Years of practice" },
    { value: 10000, suffix: "+", label: "Consultations" },
    { value: 4.9, suffix: "★", label: "Google rating", decimals: 1 },
    { value: 5, suffix: "", label: "Awards & honours" },
  ],
};

export function waLink(
  message = "Namaste Saanvi ma'am, I would like to book a consultation."
) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Link for a service card: its dedicated page if it has one. */
export function serviceHref(s: { slug: string; href?: string }) {
  return s.href ?? `/services/${s.slug}`;
}

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Vastu Coaching", href: "/vastu-coaching" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  glyph: string;
  planet: string;
  intro: string;
  /** Set when the service has its own dedicated page instead of /services/[slug] */
  href?: string;
  helpsWith: string[];
  process: { title: string; text: string }[];
  youShare: string[];
};

export const services: Service[] = [
  {
    slug: "astrology-reading",
    title: "Astrology Reading",
    short:
      "Your birth chart, read in depth: what has shaped your past, what is unfolding now, and what lies ahead.",
    glyph: "☉",
    planet: "Sun",
    intro:
      "A Vedic birth chart (Janam Kundali) maps the sky at the exact moment you were born. Saanvi reads your planetary positions, dashas and transits to explain the patterns in your life — relationships, career, finances and personal growth — and gives you clear, practical guidance instead of fear.",
    helpsWith: [
      "Career direction, job changes and promotions",
      "Marriage timing, compatibility and Kundali matching",
      "Financial blocks and wealth periods",
      "Health and peace of mind",
      "Saturn (Sade Sati), Rahu–Ketu and difficult dashas",
      "Children, education and family matters",
    ],
    process: [
      {
        title: "Chart casting",
        text: "Your Kundali is prepared from your date, time and place of birth.",
      },
      {
        title: "Deep analysis",
        text: "Houses, planets, dashas and current transits are studied together.",
      },
      {
        title: "Guidance & remedies",
        text: "Simple, affordable remedies you can follow in daily life.",
      },
    ],
    youShare: [
      "Date of birth",
      "Exact time of birth",
      "Place of birth",
      "Your main concern",
    ],
  },
  {
    slug: "vastu-consultant",
    title: "Vastu Consultancy",
    short:
      "Balance the energy of your home, office or factory — with remedies that need no demolition.",
    glyph: "◈",
    planet: "Earth",
    intro:
      "Vastu Shastra is the ancient Indian science of space and direction. As an award-winning Vastu consultant in Noida and Delhi NCR, Saanvi studies your floor plan, entrances, and the placement of kitchen, bedrooms, toilets and lockers, then suggests corrections that work with your existing structure — no breaking walls required.",
    helpsWith: [
      "Homes, flats and villas — new or existing",
      "Offices, shops and showrooms",
      "Factories and commercial spaces",
      "Plot and property selection before you buy",
      "Locker, desk and bed placement for prosperity",
      "Remedies without demolition",
    ],
    process: [
      {
        title: "Plan study",
        text: "Share your floor plan or schedule a site visit.",
      },
      {
        title: "Direction mapping",
        text: "The 16 zones of your space are mapped and analysed.",
      },
      {
        title: "Practical corrections",
        text: "Colour, placement and element-based remedies — no demolition.",
      },
    ],
    youShare: [
      "Floor plan / layout",
      "Main door direction",
      "Photos or a site visit",
      "What is not working",
    ],
  },
  {
    slug: "numerology",
    title: "Numerology",
    short:
      "Your birth date and name carry a vibration. Discover your Moolank, Bhagyank and lucky numbers.",
    glyph: "✧",
    planet: "Mercury",
    intro:
      "Numerology studies the vibration of numbers in your date of birth and name. Your Moolank (root number) and Bhagyank (destiny number) reveal your strengths, challenges and natural path. Saanvi holds a diploma in Dynamic Numerology and helps with name corrections, business names, lucky numbers and favourable dates.",
    helpsWith: [
      "Moolank & Bhagyank analysis",
      "Name correction and spelling alignment",
      "Business and brand name selection",
      "Lucky numbers, colours and days",
      "Mobile number and vehicle number compatibility",
      "Choosing auspicious dates",
    ],
    process: [
      {
        title: "Number mapping",
        text: "Your birth date and name are converted into core numbers.",
      },
      {
        title: "Compatibility check",
        text: "Numbers are matched against your goals and chart.",
      },
      {
        title: "Alignment",
        text: "Name, number and date suggestions you can start using today.",
      },
    ],
    youShare: [
      "Full date of birth",
      "Full name (as you use it)",
      "Business name, if any",
      "Your goal",
    ],
  },
  {
    slug: "prashan-kundali",
    title: "Prashna Kundali",
    short:
      "No birth time? Ask your question — the chart of the moment you ask holds the answer.",
    glyph: "☾",
    planet: "Moon",
    intro:
      "Prashna Kundali (horary astrology) casts a chart for the exact moment a sincere question is asked. It is ideal when your birth time is unknown, or when you need a focused answer on one urgent matter — a decision, a deal, a relationship or a lost item.",
    helpsWith: [
      "Urgent yes / no decisions",
      "Will this deal, job or proposal work out?",
      "When birth details are unknown",
      "Lost items and travel questions",
      "Legal and property matters",
      "Complex or confusing situations",
    ],
    process: [
      {
        title: "Ask your question",
        text: "One clear, sincere question — that's all that's needed.",
      },
      {
        title: "Moment chart",
        text: "A chart is cast for the time your question is received.",
      },
      {
        title: "Focused answer",
        text: "A direct answer, with timing and guidance where possible.",
      },
    ],
    youShare: [
      "Your question",
      "Your current city",
      "Context of the situation",
    ],
  },
];

export type Problem = {
  key: string;
  label: string;
  icon:
    | "briefcase"
    | "heart"
    | "coins"
    | "pulse"
    | "building"
    | "house"
    | "baby"
    | "scale";
  headline: string;
  stars: string;
  planets: string[];
  solution: string[];
  services: string[];
};

export const problems: Problem[] = [
  {
    key: "career",
    label: "Career & Job",
    icon: "briefcase",
    headline: "Stuck in your job, or not getting the growth you deserve?",
    stars:
      "Career is read from your 10th house, the Sun and Saturn. A weak 10th lord or a heavy Saturn period often shows up as delays, office politics or a lack of recognition.",
    planets: ["Saturn", "Sun", "10th House"],
    solution: [
      "Find your strongest career periods (dashas) and the right time to switch",
      "Identify the fields your chart naturally supports",
      "Simple remedies for Saturn and the Sun — plus desk direction via Vastu",
    ],
    services: ["astrology-reading", "vastu-consultant"],
  },
  {
    key: "marriage",
    label: "Marriage & Love",
    icon: "heart",
    headline: "Marriage delayed, or love life going through a rough patch?",
    stars:
      "Relationships are read from your 7th house, Venus and Jupiter. Manglik dosha, Rahu–Ketu axis effects or a troubled 7th lord can create delays and misunderstandings.",
    planets: ["Venus", "Jupiter", "7th House"],
    solution: [
      "Kundali matching and compatibility analysis",
      "Find favourable marriage timing from your dashas",
      "Gentle remedies for harmony — including bedroom Vastu",
    ],
    services: ["astrology-reading", "prashan-kundali"],
  },
  {
    key: "money",
    label: "Money & Debt",
    icon: "coins",
    headline: "Earning well but money never stays? Debts piling up?",
    stars:
      "Wealth is read from the 2nd and 11th houses and Jupiter. In Vastu, the North zone governs cash flow and the South-West governs stability.",
    planets: ["Jupiter", "Mercury", "2nd & 11th House"],
    solution: [
      "Locate wealth yogas and your best earning periods",
      "Locker and North-zone Vastu corrections at home",
      "Lucky numbers and favourable dates for money decisions",
    ],
    services: ["vastu-consultant", "numerology"],
  },
  {
    key: "health",
    label: "Health & Peace",
    icon: "pulse",
    headline: "Constant stress, anxiety or health worries at home?",
    stars:
      "The Moon governs the mind, and the 6th house governs illness. A distressed Moon or a toilet in the North-East can disturb peace and sleep.",
    planets: ["Moon", "6th House", "North-East"],
    solution: [
      "Understand stressful transits and how long they will last",
      "Bedroom and North-East Vastu for calm and better sleep",
      "Moon-strengthening remedies for peace of mind",
    ],
    services: ["astrology-reading", "vastu-consultant"],
  },
  {
    key: "business",
    label: "Business Growth",
    icon: "building",
    headline: "Business not growing despite your hard work?",
    stars:
      "Business is seen through the 7th and 10th houses and Mercury. Office Vastu — entrance, seating and cash counter — directly affects footfall and decisions.",
    planets: ["Mercury", "Jupiter", "7th & 10th House"],
    solution: [
      "Business name and brand numerology",
      "Office, shop or factory Vastu — without demolition",
      "Muhurat for launches, deals and agreements",
    ],
    services: ["vastu-consultant", "numerology"],
  },
  {
    key: "home",
    label: "Home & Vastu Dosha",
    icon: "house",
    headline: "Something feels off in your home since you moved in?",
    stars:
      "Every direction of a home is ruled by an element and a planet. Misplaced kitchens, toilets or entrances create imbalances that show up as quarrels, losses or illness.",
    planets: ["16 Vastu Zones", "5 Elements"],
    solution: [
      "Complete directional mapping of your home",
      "Element-based remedies — colours, metals, placement",
      "No demolition and no costly reconstruction",
    ],
    services: ["vastu-consultant"],
  },
  {
    key: "children",
    label: "Children & Education",
    icon: "baby",
    headline: "Worried about your child's studies, focus or future?",
    stars:
      "Education is read from the 4th and 5th houses, Mercury and Jupiter. The study table's direction in Vastu plays a big role in focus.",
    planets: ["Mercury", "Jupiter", "5th House"],
    solution: [
      "Your child's natural talents and best-suited streams",
      "Study-room Vastu for focus and memory",
      "Mercury and Jupiter remedies before exams",
    ],
    services: ["astrology-reading", "vastu-consultant"],
  },
  {
    key: "legal",
    label: "Legal & Property",
    icon: "scale",
    headline: "Stuck in a court case or property dispute?",
    stars:
      "Disputes are read from the 6th house, Mars and Saturn. A Prashna Kundali can give a focused answer even without your birth time.",
    planets: ["Mars", "Saturn", "6th House"],
    solution: [
      "Prashna Kundali for a direct answer on your case",
      "Favourable timing for hearings and agreements",
      "Vastu checks before buying or selling property",
    ],
    services: ["prashan-kundali", "astrology-reading"],
  },
];

export const reviews = [
  {
    name: "Diksha Sindher",
    date: "Jan 2026",
    text: "Today I visited saanvi mam and she was truly a gem. She was very polite and spoke very kindly. She explained everything patiently and in great detail, making it easy to understand. Her guidance felt honest and genuine. I am very satisfied with the session and truly thankful to her for her calm nature, sincerity, and dedication to her work.",
  },
  {
    name: "Abhilasha Verma",
    date: "Nov 2025",
    text: "She is exceptionally good. The way she analysed my horoscope and explained every detail with clarity really impressed me. Her guidance was accurate, practical, and very helpful for my life decisions. I genuinely felt positive after meeting her. Highly recommended to anyone looking for real astrology insights 😊 thanks ma'am",
  },
  {
    name: "Vanshika Singh",
    date: "Sep 2025",
    text: "I had the pleasure of meeting saanvi mam today, and it was truly a beautiful and blessed experience. Their guidance was filled with positivity, wisdom, and compassion. Every word felt so comforting and accurate, giving me clarity and peace of mind. It felt less like a session and more like a soulful connection.",
  },
  {
    name: "Ankita Aggarwal",
    date: "Aug 2025",
    text: "Very well versed and intelligent maam is. She gives on point advice and solution for ongoing problems in life. Very understanding and soft spoken. Makes the client at ease.",
  },
  {
    name: "Vishal Mahajan",
    date: "Mar 2025",
    text: "I had an amazing experience with Saanvi Mam. Her predictions are incredibly accurate and insightful. She always approach everything with a positive and truthful attitude, which makes me feel confident and reassured. Highly recommend the services for anyone seeking guidance!",
  },
];

/** Awards. Add `image: "/images/awards/xyz.jpg"` to show a framed photo (tap to enlarge). */
export const achievements: {
  year: string;
  title: string;
  by: string;
  image?: string;
}[] = [
  {
    year: "2021",
    title: "Vastu Excellence Award",
    by: "Presented by the Chief Minister of Uttar Pradesh",
  },
  {
    year: "",
    title: "Excellence in Vastu",
    by: "Awarded by Professor B. B. Puri",
  },
  { year: "", title: '"Aacharya" Title', by: "Conferred at Mahagurukul" },
  {
    year: "",
    title: "Award of Honour",
    by: "Presented by Shri G. D. Vashist & Shri H. S. Rawat",
  },
  {
    year: "",
    title: "Community Recognition",
    by: "Green Avenue Residents Welfare Association",
  },
];

export const whyUs = [
  {
    title: "Satisfaction First",
    text: "Every session ends only when your questions have clear answers.",
  },
  {
    title: "20+ Years of Experience",
    text: "Thousands of charts, homes and businesses studied across India.",
  },
  {
    title: "Cost-Effective Remedies",
    text: "Simple, affordable remedies — no expensive rituals pushed on you.",
  },
  {
    title: "No Demolition Vastu",
    text: "Corrections that work with your existing home or office.",
  },
  {
    title: "Practical Approach",
    text: "Guidance that fits real life, not fear-based predictions.",
  },
];

export const faqs = [
  {
    q: "Who is Saanvi Gupta?",
    a: "Aacharya Saanvi Gupta is an award-winning astrologer, Vastu consultant and numerologist based in Noida, serving Delhi NCR and clients across India and abroad. She has over 20 years of experience and has completed 10,000+ consultations.",
  },
  {
    q: "What services does she offer?",
    a: "Astrology readings (Janam Kundali), Vastu consultancy for homes and businesses, Numerology, Prashna Kundali, and Vastu Coaching for anyone who wants to learn Vastu Shastra.",
  },
  {
    q: "How can I book a consultation?",
    a: `Message us on WhatsApp, call ${"+91 83838 99630"}, or email contact@thesaanvigupta.com. You can also fill the form on our contact page and it will open WhatsApp with your details ready to send.`,
  },
  {
    q: "Are consultations available online?",
    a: "Yes. Astrology, numerology and Prashna sessions can be done over phone or video call, and Vastu Coaching is available online too. Vastu can be done from your floor plan, or through a site visit in Delhi NCR.",
  },
  {
    q: "Will Vastu remedies require breaking walls?",
    a: "No. Saanvi specialises in remedies without demolition — using placement, colours, elements and simple corrections that work with your existing structure.",
  },
  {
    q: "Does she provide Vastu for offices and factories?",
    a: "Yes. Commercial Vastu for offices, shops, showrooms and factories is one of her core services, along with business-name numerology and muhurat for launches.",
  },
  {
    q: "What details should I keep ready?",
    a: "For astrology: date, exact time and place of birth. For numerology: full name and date of birth. For Vastu: your floor plan and main door direction.",
  },
];

/** Vedic numerology: number → ruling graha and traits */
export const numberMeanings: Record<
  number,
  { planet: string; glyph: string; traits: string; color: string }
> = {
  1: {
    planet: "Sun (Surya)",
    glyph: "☉",
    traits:
      "A natural leader — independent, ambitious and original. You shine when you take charge.",
    color: "#f5b942",
  },
  2: {
    planet: "Moon (Chandra)",
    glyph: "☾",
    traits:
      "Sensitive, intuitive and caring. You bring harmony and connect deeply with people.",
    color: "#dfe7f2",
  },
  3: {
    planet: "Jupiter (Guru)",
    glyph: "♃",
    traits:
      "Wise, optimistic and expressive. A born teacher and guide with strong values.",
    color: "#f2d24b",
  },
  4: {
    planet: "Rahu",
    glyph: "☊",
    traits:
      "Unconventional, hardworking and practical. You build things others can't imagine.",
    color: "#8fa3c7",
  },
  5: {
    planet: "Mercury (Budh)",
    glyph: "☿",
    traits:
      "Quick-witted, adaptable and communicative. Business and travel suit you well.",
    color: "#5fd39a",
  },
  6: {
    planet: "Venus (Shukra)",
    glyph: "♀",
    traits:
      "Charming, artistic and loving. Beauty, comfort and relationships matter to you.",
    color: "#f4a6c8",
  },
  7: {
    planet: "Ketu",
    glyph: "☋",
    traits:
      "Spiritual, analytical and deep. You seek truth beneath the surface.",
    color: "#b59cf0",
  },
  8: {
    planet: "Saturn (Shani)",
    glyph: "♄",
    traits:
      "Disciplined, patient and determined. Success comes steadily — and lasts.",
    color: "#7d8fe0",
  },
  9: {
    planet: "Mars (Mangal)",
    glyph: "♂",
    traits:
      "Courageous, energetic and protective. You are a fighter with a big heart.",
    color: "#f0664a",
  },
};

/* ------------------------------------------------------------------ */
/* Media, videos, podcasts, projects                                   */
/* Fill in the YouTube IDs (the part after "v=" or "/shorts/").        */
/* Cards without an ID link to the YouTube channel instead.            */
/* ------------------------------------------------------------------ */

export type Video = {
  /** YouTube video ID, e.g. "dQw4w9WgXcQ". Leave "" until available. */
  id: string;
  title: string;
  /** Bold word(s) shown in the caption */
  highlight?: string;
  caption?: string;
};

/** Publications / channels that have featured Saanvi. */
export const media: { name: string; kind: string; url?: string }[] = [
  { name: "NDTV", kind: "News channel" },
  { name: "Zee TV", kind: "Television" },
  { name: "Amar Ujala", kind: "Hindi daily" },
];

/** "Saanvi's guidance" — long-form YouTube videos. */
export const guidanceVideos: Video[] = [
  {
    id: "",
    title: "Vastu for a happy home",
    highlight: "Home Vastu",
    caption: "Simple corrections without demolition",
  },
  {
    id: "",
    title: "Marriage delays and remedies",
    highlight: "Marriage",
    caption: "What your Kundali says about timing",
  },
  {
    id: "",
    title: "Numbers that shape your destiny",
    highlight: "Numerology",
    caption: "Your Moolank and Bhagyank explained",
  },
];

/** YouTube Shorts (vertical). */
export const shorts: Video[] = [
  { id: "", title: "Lucky direction for your bed" },
  { id: "", title: "Main door Vastu tip" },
  { id: "", title: "Locker placement for wealth" },
  { id: "", title: "Study table direction" },
];

/** Television appearances. */
export const tvVideos: Video[] = [
  {
    id: "",
    title: "Saanvi Gupta on NDTV",
    highlight: "NDTV",
    caption: "Astrology & Vastu guidance",
  },
  {
    id: "",
    title: "Saanvi Gupta on Zee TV",
    highlight: "Zee TV",
    caption: "Vastu remedies for every home",
  },
];

/** Podcast appearances. */
export const podcasts: (Video & { show: string })[] = [
  {
    id: "",
    show: "Podcast",
    title: "Vastu, energy and the modern home",
    caption: "A conversation on living in balance",
  },
  {
    id: "",
    show: "Podcast",
    title: "Astrology without fear",
    caption: "Practical guidance over predictions",
  },
  {
    id: "",
    show: "Podcast",
    title: "The power of numbers",
    caption: "Numerology in everyday decisions",
  },
];

/** Instagram post URLs to embed, e.g. "https://www.instagram.com/p/ABC123/". */
export const instagramPosts: string[] = [];

/** Vastu project showcase. Add `image` and `location` for real projects. */
export const projects: {
  title: string;
  type: string;
  icon: "home" | "office" | "shop" | "factory" | "plot";
  text: string;
  focus: string[];
  location?: string;
  image?: string;
}[] = [
  {
    title: "Homes & Apartments",
    type: "Residential Vastu",
    icon: "home",
    text: "Flats, villas and independent houses balanced zone by zone — without breaking a single wall.",
    focus: [
      "Main entrance",
      "Kitchen placement",
      "Master bedroom",
      "Puja room",
      "Toilets",
    ],
  },
  {
    title: "Offices & Corporate Spaces",
    type: "Commercial Vastu",
    icon: "office",
    text: "Seating, entrances and cash zones aligned for better decisions, teamwork and growth.",
    focus: [
      "Owner's cabin",
      "Seating direction",
      "Reception",
      "Accounts & cash",
    ],
  },
  {
    title: "Shops & Showrooms",
    type: "Retail Vastu",
    icon: "shop",
    text: "Entrance, display and counter placement planned to support footfall and sales.",
    focus: ["Shop entrance", "Cash counter", "Display zones", "Storage"],
  },
  {
    title: "Factories & Industrial Units",
    type: "Industrial Vastu",
    icon: "factory",
    text: "Machinery, storage and dispatch zones mapped for smooth production and cash flow.",
    focus: ["Heavy machinery", "Raw material", "Finished goods", "Dispatch"],
  },
  {
    title: "Plots & New Property",
    type: "Pre-purchase Vastu",
    icon: "plot",
    text: "Plot shape, road position and directions checked before you buy or build.",
    focus: ["Plot shape", "Road facing", "Slope", "Surroundings"],
  },
];

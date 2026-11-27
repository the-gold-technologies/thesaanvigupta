/** Line illustrations for Vastu concepts. All use currentColor. */
type P = { className?: string; strokeWidth?: number };

const base = (sw = 1.5) => ({
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: sw,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

/** Vastu Purusha Mandala: 3×3 grid with the Brahmasthan at the centre. */
export const MandalaIcon = ({ className, strokeWidth }: P) => (
  <svg {...base(strokeWidth)} className={className}>
    <rect x="8" y="8" width="32" height="32" />
    <path d="M18.7 8v32M29.3 8v32M8 18.7h32M8 29.3h32" opacity="0.7" />
    <path d="M8 8l32 32M40 8L8 40" opacity="0.35" />
    <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
  </svg>
);

/** Direction compass with the four cardinal points. */
export const DirectionsIcon = ({ className, strokeWidth }: P) => (
  <svg {...base(strokeWidth)} className={className}>
    <circle cx="24" cy="24" r="17" />
    <circle cx="24" cy="24" r="12" opacity="0.5" />
    <path d="M24 9l3 15-3 15-3-15z" fill="currentColor" fillOpacity="0.25" />
    <path d="M9 24l15-3 15 3-15 3z" opacity="0.7" />
    <path d="M24 3v3M24 42v3M3 24h3M42 24h3" />
    <text
      x="24"
      y="2.5"
      fontSize="5"
      textAnchor="middle"
      fill="currentColor"
      stroke="none"
      style={{ fontFamily: "var(--font-cinzel), serif" }}
    >
      N
    </text>
  </svg>
);

/** Floor plan with rooms, a door swing and a north arrow. */
export const FloorPlanIcon = ({ className, strokeWidth }: P) => (
  <svg {...base(strokeWidth)} className={className}>
    <path d="M6 12h30v30H6z" />
    <path d="M22 12v14M6 26h10M22 26h14M28 26v16" opacity="0.75" />
    <path d="M16 26a6 6 0 0 0 6 6" strokeDasharray="1.5 1.5" opacity="0.6" />
    <path d="M42 14V4l-2.5 4M42 4l2.5 4" />
  </svg>
);

/** Kalash with mango leaves and coconut — a classic Vastu remedy. */
export const KalashIcon = ({ className, strokeWidth }: P) => (
  <svg {...base(strokeWidth)} className={className}>
    <ellipse cx="24" cy="12" rx="4.5" ry="5" />
    <path d="M19.5 15c-4-1-7 0-9 2M28.5 15c4-1 7 0 9 2M20 16c-2 2-4 3-6 3M28 16c2 2 4 3 6 3" />
    <path d="M17 19h14M18 19c-6 4-7 12-4 17h20c3-5 2-13-4-17" />
    <path d="M15 28h18" opacity="0.6" />
    <circle cx="24" cy="28" r="1.4" fill="currentColor" stroke="none" />
    <path d="M14 36l-1 4h22l-1-4" />
  </svg>
);

/** House with a toran over the door. */
export const HouseIcon = ({ className, strokeWidth }: P) => (
  <svg {...base(strokeWidth)} className={className}>
    <path d="M5 22L24 7l19 15" />
    <path d="M10 18v23h28V18" />
    <path d="M20 41V29h8v12" />
    <path
      d="M18 27c1 2 2 2 3 0 1 2 2 2 3 0 1 2 2 2 3 0 1 2 2 2 3 0"
      opacity="0.8"
    />
    <path d="M13 24h4v4h-4zM31 24h4v4h-4z" opacity="0.7" />
  </svg>
);

/** Shopfront with an awning. */
export const ShopIcon = ({ className, strokeWidth }: P) => (
  <svg {...base(strokeWidth)} className={className}>
    <path d="M8 8h32l3 9H5z" />
    <path
      d="M5 17c0 3 4.5 3 4.5 0 0 3 4.5 3 4.5 0 0 3 4.5 3 4.5 0 0 3 4.5 3 4.5 0 0 3 4.5 3 4.5 0 0 3 4.5 3 4.5 0 0 3 4.5 3 4.5 0 0 3 4.5 3 4.5 0"
      opacity="0.8"
    />
    <path d="M8 21v20h32V21" />
    <path d="M13 41V28h8v13M26 27h9v8h-9z" />
    <path d="M4 41h40" />
  </svg>
);

/** Office tower. */
export const OfficeIcon = ({ className, strokeWidth }: P) => (
  <svg {...base(strokeWidth)} className={className}>
    <path d="M12 42V8h18v34M30 18h8v24" />
    <path d="M16 13h3M23 13h3M16 19h3M23 19h3M16 25h3M23 25h3M16 31h3M23 31h3M33 23h2M33 29h2M33 35h2" />
    <path d="M18 42v-5h6v5M6 42h36" />
  </svg>
);

/** Factory with chimneys. */
export const FactoryIcon = ({ className, strokeWidth }: P) => (
  <svg {...base(strokeWidth)} className={className}>
    <path d="M6 42V24l9 5v-5l9 5v-5l9 5V12h6v30z" />
    <path d="M33 8c1-2 3-2 4-1s3 1 4-1" opacity="0.6" />
    <path d="M11 34h4M19 34h4M27 34h4M4 42h40" />
  </svg>
);

/** Land plot with boundary pegs and a north marker. */
export const PlotIcon = ({ className, strokeWidth }: P) => (
  <svg {...base(strokeWidth)} className={className}>
    <path d="M6 34l14-10 22 4-12 12z" />
    <path d="M6 34v3M20 24v3M42 28v3M30 40v3" opacity="0.7" />
    <path d="M14 33l8-2 8 3" strokeDasharray="1.5 2" opacity="0.6" />
    <path d="M34 18V6l-3 4M34 6l3 4" />
  </svg>
);

const SIGNS = [
  { g: "♈", n: "MESHA" },
  { g: "♉", n: "VRISHABHA" },
  { g: "♊", n: "MITHUNA" },
  { g: "♋", n: "KARKA" },
  { g: "♌", n: "SIMHA" },
  { g: "♍", n: "KANYA" },
  { g: "♎", n: "TULA" },
  { g: "♏", n: "VRISHCHIKA" },
  { g: "♐", n: "DHANU" },
  { g: "♑", n: "MAKARA" },
  { g: "♒", n: "KUMBHA" },
  { g: "♓", n: "MEENA" },
];

const C = 300;
const pt = (r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return {
    x: +(C + r * Math.cos(a)).toFixed(2),
    y: +(C + r * Math.sin(a)).toFixed(2),
  };
};

/** Navagraha planets on orbits — exact original brand palette & positions from reference */
const PLANETS = [
  { r: 178, deg: 20, size: 7, color: "#f07a3a", glow: "#ff9e66" }, // Sun (Surya - solar gold/orange)
  {
    r: 178,
    deg: 200,
    size: 6,
    color: "#ffffff",
    stroke: "rgba(138,106,84,0.55)",
    glow: "#dfd5c4",
  }, // Moon (Chandra - pearl white)
  { r: 150, deg: 110, size: 5, color: "#e2553a", glow: "#ff8a6a" }, // Mars (Mangal - ruby coral)
  { r: 150, deg: 290, size: 4.5, color: "#42b87c", glow: "#82e4b0" }, // Mercury (Budh - emerald)
  { r: 122, deg: 60, size: 6, color: "#e5b934", glow: "#ffdf79" }, // Jupiter (Guru - topaz gold)
  { r: 122, deg: 240, size: 5, color: "#d97fae", glow: "#f7b5d5" }, // Venus (Shukra - radiant rose)
  { r: 178, deg: 320, size: 5.5, color: "#4f65db", glow: "#95a3ff" }, // Saturn (Shani - sapphire blue)
];

export default function ZodiacWheel({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <defs>
        <radialGradient id="zw-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e3c9a6" stopOpacity="0.32" />
          <stop offset="65%" stopColor="#ebdcc7" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#fbf7ef" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zw-bronze" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#b48a4a" />
          <stop offset="50%" stopColor="#8a6a54" />
          <stop offset="100%" stopColor="#6c4d37" />
        </linearGradient>
        <filter id="zw-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Subtle celestial disc aura */}
      <circle cx={C} cy={C} r={296} fill="url(#zw-core)" />

      {/* Outer rotating ring: degree ticks + zodiac band */}
      <g className="spin-slow" style={{ transformOrigin: "300px 300px" }}>
        <circle
          cx={C}
          cy={C}
          r={292}
          fill="none"
          stroke="url(#zw-bronze)"
          strokeOpacity="0.75"
          strokeWidth="0.9"
        />
        <circle
          cx={C}
          cy={C}
          r={250}
          fill="none"
          stroke="url(#zw-bronze)"
          strokeOpacity="0.7"
          strokeWidth="0.9"
        />
        <circle
          cx={C}
          cy={C}
          r={226}
          fill="none"
          stroke="#8a6a54"
          strokeOpacity="0.45"
          strokeWidth="0.8"
        />
        {Array.from({ length: 72 }).map((_, i) => {
          const a = pt(292, i * 5);
          const b = pt(i % 6 === 0 ? 278 : 285, i * 5);
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#8a6a54"
              strokeOpacity={i % 6 === 0 ? 0.8 : 0.55}
              strokeWidth={i % 6 === 0 ? "1" : "0.7"}
            />
          );
        })}
        {SIGNS.map((s, i) => {
          const d1 = pt(250, i * 30);
          const d2 = pt(280, i * 30);
          const g = pt(265, i * 30 + 15);
          const n = pt(238, i * 30 + 15);
          return (
            <g key={s.n}>
              <line
                x1={d1.x}
                y1={d1.y}
                x2={d2.x}
                y2={d2.y}
                stroke="#8a6a54"
                strokeOpacity="0.65"
                strokeWidth="0.8"
              />
              <text
                x={g.x}
                y={g.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="20"
                fill="#5c412d"
                className="glyph font-normal"
                transform={`rotate(${i * 30 + 15} ${g.x} ${g.y})`}
              >
                {s.g + "︎"}
              </text>
              <text
                x={n.x}
                y={n.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="8"
                fontWeight="600"
                letterSpacing="2"
                fill="#7a5840"
                transform={`rotate(${i * 30 + 15} ${n.x} ${n.y})`}
              >
                {s.n}
              </text>
            </g>
          );
        })}
      </g>

      {/* Middle counter-rotating ring: 27 nakshatra ticks + constellation web */}
      <g className="spin-slower" style={{ transformOrigin: "300px 300px" }}>
        <circle
          cx={C}
          cy={C}
          r={206}
          fill="none"
          stroke="#8a6a54"
          strokeOpacity="0.5"
          strokeDasharray="2 6"
          strokeWidth="0.9"
        />
        {Array.from({ length: 27 }).map((_, i) => {
          const a = pt(206, (i * 360) / 27);
          return (
            <circle
              key={i}
              cx={a.x}
              cy={a.y}
              r={1.9}
              fill="#b48a4a"
              opacity="0.85"
            />
          );
        })}
        {/* Constellation web polygon */}
        <polygon
          points={[0, 4, 9, 13, 18, 22]
            .map((i) => {
              const p = pt(206, (i * 360) / 27);
              return `${p.x},${p.y}`;
            })
            .join(" ")}
          fill="none"
          stroke="#b48a4a"
          strokeOpacity="0.4"
          strokeWidth="0.8"
        />
      </g>

      {/* Planet orbits & glowing Navagraha spheres */}
      <g className="spin-mid" style={{ transformOrigin: "300px 300px" }}>
        {[178, 150, 122].map((r) => (
          <circle
            key={r}
            cx={C}
            cy={C}
            r={r}
            fill="none"
            stroke="#8a6a54"
            strokeOpacity="0.4"
            strokeWidth="0.8"
          />
        ))}
        {PLANETS.map((p, i) => {
          const c = pt(p.r, p.deg);
          return (
            <g key={i}>
              {/* Soft luminous atmospheric glow */}
              <circle
                cx={c.x}
                cy={c.y}
                r={p.size * 2.2}
                fill={p.glow}
                opacity="0.32"
                filter="url(#zw-glow)"
              />
              {/* Crisp spherical planet body */}
              <circle
                cx={c.x}
                cy={c.y}
                r={p.size}
                fill={p.color}
                stroke={p.stroke || "rgba(255, 255, 255, 0.45)"}
                strokeWidth="0.8"
              />
            </g>
          );
        })}
      </g>

      {/* Star-of-Vastu (8 directions) */}
      <g opacity="0.6">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = pt(108, i * 45);
          const b = pt(108, i * 45 + 135);
          return (
            <line
              key={i}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#8a6a54"
              strokeWidth="0.8"
            />
          );
        })}
      </g>
    </svg>
  );
}

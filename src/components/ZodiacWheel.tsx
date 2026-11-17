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
  return { x: +(C + r * Math.cos(a)).toFixed(2), y: +(C + r * Math.sin(a)).toFixed(2) };
};

/** Navagraha planets on orbits (colours echo the brand logo). */
const PLANETS = [
  { r: 178, deg: 20, size: 7, color: "#f07a3a", glow: "#ffb37a" }, // Sun
  { r: 178, deg: 200, size: 5, color: "#dfe7f2", glow: "#ffffff" }, // Moon
  { r: 150, deg: 110, size: 4.5, color: "#e2553a", glow: "#ff8a6a" }, // Mars
  { r: 150, deg: 290, size: 4, color: "#5fd39a", glow: "#9cf0c4" }, // Mercury
  { r: 122, deg: 60, size: 5.5, color: "#f2d24b", glow: "#fff0a0" }, // Jupiter
  { r: 122, deg: 240, size: 4.5, color: "#f4c6e0", glow: "#ffe2f1" }, // Venus
  { r: 178, deg: 320, size: 5, color: "#4b5bd6", glow: "#8f9bff" }, // Saturn
];

export default function ZodiacWheel({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <defs>
        <radialGradient id="zw-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e9c27a" stopOpacity="0.25" />
          <stop offset="60%" stopColor="#3b2370" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#06040f" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="zw-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8e2b0" />
          <stop offset="50%" stopColor="#c9963f" />
          <stop offset="100%" stopColor="#f8e2b0" />
        </linearGradient>
        <filter id="zw-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx={C} cy={C} r={296} fill="url(#zw-core)" />

      {/* Outer rotating ring: degree ticks + zodiac band */}
      <g className="spin-slow" style={{ transformOrigin: "300px 300px" }}>
        <circle cx={C} cy={C} r={292} fill="none" stroke="url(#zw-gold)" strokeOpacity="0.6" strokeWidth="1" />
        <circle cx={C} cy={C} r={250} fill="none" stroke="url(#zw-gold)" strokeOpacity="0.5" strokeWidth="1" />
        <circle cx={C} cy={C} r={226} fill="none" stroke="#e9c27a" strokeOpacity="0.25" strokeWidth="0.8" />
        {Array.from({ length: 72 }).map((_, i) => {
          const a = pt(292, i * 5);
          const b = pt(i % 6 === 0 ? 280 : 286, i * 5);
          return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#e9c27a" strokeOpacity="0.55" strokeWidth="0.8" />;
        })}
        {SIGNS.map((s, i) => {
          const d1 = pt(250, i * 30);
          const d2 = pt(280, i * 30);
          const g = pt(265, i * 30 + 15);
          const n = pt(238, i * 30 + 15);
          return (
            <g key={s.n}>
              <line x1={d1.x} y1={d1.y} x2={d2.x} y2={d2.y} stroke="#e9c27a" strokeOpacity="0.5" strokeWidth="0.8" />
              <text
                x={g.x}
                y={g.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="20"
                fill="#f3d79c"
                className="glyph"
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
                letterSpacing="2"
                fill="#b7aecb"
                transform={`rotate(${i * 30 + 15} ${n.x} ${n.y})`}
              >
                {s.n}
              </text>
            </g>
          );
        })}
      </g>

      {/* Middle counter-rotating ring: 27 nakshatra ticks */}
      <g className="spin-slower" style={{ transformOrigin: "300px 300px" }}>
        <circle cx={C} cy={C} r={206} fill="none" stroke="#e9c27a" strokeOpacity="0.3" strokeDasharray="2 6" />
        {Array.from({ length: 27 }).map((_, i) => {
          const a = pt(206, (i * 360) / 27);
          return <circle key={i} cx={a.x} cy={a.y} r={1.8} fill="#f3d79c" opacity="0.8" />;
        })}
        {/* Constellation lines */}
        <polyline
          points={[0, 4, 9, 13, 18, 22, 27].map((i) => { const p = pt(206, (i * 360) / 27); return `${p.x},${p.y}`; }).join(" ")}
          fill="none"
          stroke="#e9c27a"
          strokeOpacity="0.12"
        />
      </g>

      {/* Planet orbits */}
      <g className="spin-mid" style={{ transformOrigin: "300px 300px" }}>
        {[178, 150, 122].map((r) => (
          <circle key={r} cx={C} cy={C} r={r} fill="none" stroke="#b7aecb" strokeOpacity="0.14" />
        ))}
        {PLANETS.map((p, i) => {
          const c = pt(p.r, p.deg);
          return (
            <g key={i} filter="url(#zw-glow)">
              <circle cx={c.x} cy={c.y} r={p.size * 2.2} fill={p.glow} opacity="0.15" />
              <circle cx={c.x} cy={c.y} r={p.size} fill={p.color} />
            </g>
          );
        })}
      </g>

      {/* Star-of-Vastu (8 directions) */}
      <g opacity="0.35">
        {Array.from({ length: 8 }).map((_, i) => {
          const a = pt(108, i * 45);
          const b = pt(108, i * 45 + 135);
          return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#e9c27a" strokeWidth="0.6" />;
        })}
      </g>
    </svg>
  );
}

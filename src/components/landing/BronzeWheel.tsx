/**
 * Fine-line zodiac wheel drawn in the logo's bronze, with the navagraha
 * planets (logo colours) sitting on slowly turning orbits.
 */
const SIGNS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];

const C = 300;
const pt = (r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: +(C + r * Math.cos(a)).toFixed(2), y: +(C + r * Math.sin(a)).toFixed(2) };
};

const PLANETS = [
  { r: 196, deg: 30, size: 7, color: "#e0592a" }, // Sun
  { r: 196, deg: 210, size: 5, color: "#ffffff", stroke: "#8a6a54" }, // Moon
  { r: 164, deg: 120, size: 4.5, color: "#c23a2c" }, // Mars
  { r: 164, deg: 300, size: 4.5, color: "#3e8a52" }, // Mercury
  { r: 132, deg: 70, size: 5.5, color: "#e2b021" }, // Jupiter
  { r: 132, deg: 250, size: 4.5, color: "#e9b8c9" }, // Venus
  { r: 196, deg: 330, size: 5, color: "#2b1f18" }, // Saturn
];

export default function BronzeWheel({
  className = "",
  stroke = "#8a6a54",
  glyph = "#5c4334",
}: {
  className?: string;
  stroke?: string;
  glyph?: string;
}) {
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <g className="spin-slow" style={{ transformOrigin: "300px 300px" }}>
        <circle cx={C} cy={C} r={294} fill="none" stroke={stroke} strokeOpacity="0.45" />
        <circle cx={C} cy={C} r={246} fill="none" stroke={stroke} strokeOpacity="0.45" />
        {Array.from({ length: 72 }).map((_, i) => {
          const a = pt(294, i * 5);
          const b = pt(i % 6 === 0 ? 280 : 288, i * 5);
          return <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke={stroke} strokeOpacity="0.5" strokeWidth="0.8" />;
        })}
        {SIGNS.map((g, i) => {
          const d1 = pt(246, i * 30);
          const d2 = pt(280, i * 30);
          const p = pt(263, i * 30 + 15);
          return (
            <g key={g}>
              <line x1={d1.x} y1={d1.y} x2={d2.x} y2={d2.y} stroke={stroke} strokeOpacity="0.45" strokeWidth="0.8" />
              <text
                x={p.x}
                y={p.y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="19"
                fill={glyph}
                className="glyph"
                transform={`rotate(${i * 30 + 15} ${p.x} ${p.y})`}
              >
                {g + "︎"}
              </text>
            </g>
          );
        })}
      </g>

      <g className="spin-slower" style={{ transformOrigin: "300px 300px" }}>
        <circle cx={C} cy={C} r={226} fill="none" stroke={stroke} strokeOpacity="0.35" strokeDasharray="2 6" />
        {Array.from({ length: 27 }).map((_, i) => {
          const a = pt(226, (i * 360) / 27);
          return <circle key={i} cx={a.x} cy={a.y} r={1.6} fill={stroke} opacity="0.7" />;
        })}
      </g>

      <g className="spin-mid" style={{ transformOrigin: "300px 300px" }}>
        {[196, 164, 132].map((r) => (
          <circle key={r} cx={C} cy={C} r={r} fill="none" stroke={stroke} strokeOpacity="0.2" />
        ))}
        {PLANETS.map((p, i) => {
          const c = pt(p.r, p.deg);
          return (
            <g key={i}>
              <circle cx={c.x} cy={c.y} r={p.size * 2.2} fill={p.color} opacity="0.15" />
              <circle cx={c.x} cy={c.y} r={p.size} fill={p.color} stroke={p.stroke} strokeWidth={p.stroke ? 1 : 0} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

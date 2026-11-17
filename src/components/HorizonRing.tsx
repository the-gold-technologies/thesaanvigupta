/** Thin zodiac ring designed to sit just outside the hero eclipse disc (disc = inner 80%). */
const SIGNS = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"];
const C = 500;
const pt = (r: number, deg: number) => {
  const a = ((deg - 90) * Math.PI) / 180;
  return { x: +(C + r * Math.cos(a)).toFixed(2), y: +(C + r * Math.sin(a)).toFixed(2) };
};

export default function HorizonRing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 1000 1000" className={className} aria-hidden>
      <g className="spin-slow" style={{ transformOrigin: "500px 500px" }}>
        {/* fine degree ticks just outside the rim */}
        {Array.from({ length: 180 }).map((_, i) => {
          const major = i % 15 === 0;
          const a = pt(404, i * 2);
          const b = pt(major ? 420 : 410, i * 2);
          return (
            <line key={i} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#e9c27a" strokeOpacity={major ? 0.7 : 0.3} strokeWidth={major ? 1 : 0.6} />
          );
        })}
        <circle cx={C} cy={C} r={428} fill="none" stroke="#e9c27a" strokeOpacity="0.18" strokeWidth="0.8" />
        {SIGNS.map((g, i) => {
          const p = pt(442, i * 30 + 15);
          return (
            <text
              key={g}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="13"
              fill="#e9c27a"
              fillOpacity="0.75"
              className="glyph"
              transform={`rotate(${i * 30 + 15} ${p.x} ${p.y})`}
            >
              {g + "︎"}
            </text>
          );
        })}
        <circle cx={C} cy={C} r={458} fill="none" stroke="#e9c27a" strokeOpacity="0.12" strokeDasharray="1 7" />
      </g>
    </svg>
  );
}

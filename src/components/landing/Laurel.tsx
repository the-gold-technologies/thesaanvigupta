/** Gold laurel wreath (two leafy branches meeting at the bottom). */
export default function Laurel({ className = "" }: { className?: string }) {
  const leaves: { x: number; y: number; r: number }[] = [];
  const cx = 60;
  const cy = 60;
  const R = 48;
  for (const side of [-1, 1]) {
    for (let i = 0; i < 8; i++) {
      // from bottom (≈100°) up the side to the top (≈225°/315°)
      const deg = side === -1 ? 105 + i * 16 : 75 - i * 16;
      const a = (deg * Math.PI) / 180;
      leaves.push({
        x: cx + R * Math.cos(a),
        y: cy + R * Math.sin(a),
        r: deg + (side === -1 ? 60 : -60),
      });
    }
  }
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <defs>
        <linearGradient id="laurel-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3d999" />
          <stop offset="0.5" stopColor="#c9963f" />
          <stop offset="1" stopColor="#e9c27a" />
        </linearGradient>
      </defs>
      <path
        d="M 46 108 A 48 48 0 0 1 22 29 M 74 108 A 48 48 0 0 0 98 29"
        fill="none"
        stroke="url(#laurel-gold)"
        strokeWidth="1.4"
      />
      {leaves.map((l, i) => (
        <ellipse
          key={i}
          cx={l.x.toFixed(2)}
          cy={l.y.toFixed(2)}
          rx="8"
          ry="3.2"
          fill="url(#laurel-gold)"
          transform={`rotate(${l.r} ${l.x.toFixed(2)} ${l.y.toFixed(2)})`}
        />
      ))}
    </svg>
  );
}

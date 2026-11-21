/** SVG animado: gotas de limón, caldo y ají amarillo que se integran con las hebras aromáticas hasta formar una emulsión cremosa (leche de tigre / salsa huancaína). */
export default function FlavorEmulsion() {
  const drops = Array.from({ length: 12 }).map((_, i) => {
    const a = (i / 12) * Math.PI * 2;
    return {
      x: 200 + Math.cos(a) * 46,
      y: 210 + Math.sin(a) * 46,
      dx: `${Math.cos(a) * 150}px`,
      dy: `${Math.sin(a) * 150}px`,
      d: `${(i % 6) * 0.65}s`,
      r: 7 + (i % 3) * 2,
    };
  });
  const strands = Array.from({ length: 7 }).map((_, i) => {
    const a = (i / 7) * Math.PI * 2 + 0.3;
    const x1 = 200 + Math.cos(a) * 30,
      y1 = 210 + Math.sin(a) * 30;
    const x2 = 200 + Math.cos(a) * 120,
      y2 = 210 + Math.sin(a) * 120;
    const mx = 200 + Math.cos(a + 0.5) * 80,
      my = 210 + Math.sin(a + 0.5) * 80;
    return `M${x1.toFixed(1)} ${y1.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  });

  return (
    <div className="gel-scene relative mx-auto aspect-square w-full max-w-[460px]">
      <svg
        viewBox="0 0 400 420"
        className="h-full w-full"
        role="img"
        aria-label="Ilustración interactiva: emulsión perfecta de ají amarillo, limón peruano y hierbas aromáticas"
      >
        <defs>
          <filter id="fg-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="9" result="b" />
            <feColorMatrix
              in="b"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -10"
            />
          </filter>
          <radialGradient id="fg-gel" cx="45%" cy="40%" r="60%">
            <stop offset="0" stopColor="#fef08a" />
            <stop offset="0.55" stopColor="#f59e0b" />
            <stop offset="1" stopColor="#dc2626" />
          </radialGradient>
          <radialGradient id="fg-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#f59e0b" stopOpacity="0.35" />
            <stop offset="1" stopColor="#dc2626" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="210" r="190" fill="url(#fg-halo)" />
        <circle
          cx="200"
          cy="210"
          r="150"
          fill="none"
          stroke="rgba(255,255,255,0.1)"
          strokeDasharray="3 7"
        />
        {strands.map((d, i) => (
          <path
            key={i}
            d={d}
            className="fiber-strand"
            fill="none"
            stroke="#8CC63F"
            strokeOpacity="0.65"
            strokeWidth="3"
            strokeLinecap="round"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
        <g filter="url(#fg-goo)">
          <circle className="gel-blob" cx="200" cy="210" r="46" fill="url(#fg-gel)" />
          <circle
            className="gel-blob"
            cx="178"
            cy="196"
            r="26"
            fill="#f59e0b"
            style={{ animationDelay: "0.4s" }}
          />
          <circle
            className="gel-blob"
            cx="224"
            cy="226"
            r="24"
            fill="#dc2626"
            style={{ animationDelay: "0.9s" }}
          />
          {drops.map((p, i) => (
            <circle
              key={i}
              className="drop"
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill={i % 2 === 0 ? "#fde047" : "#fb7185"}
              style={{
                ["--dx" as string]: p.dx,
                ["--dy" as string]: p.dy,
                animationDelay: p.d,
              }}
            />
          ))}
        </g>
        <g fontSize="12" fontWeight="700">
          <g transform="translate(16 40)">
            <rect
              width="116"
              height="26"
              rx="13"
              fill="rgba(253,224,71,0.16)"
              stroke="rgba(253,224,71,0.55)"
            />
            <text x="58" y="17" textAnchor="middle" fill="#fef08a">
              limón & caldo
            </text>
          </g>
          <g transform="translate(262 60)">
            <rect
              width="124"
              height="26"
              rx="13"
              fill="rgba(140,198,63,0.16)"
              stroke="rgba(140,198,63,0.55)"
            />
            <text x="62" y="17" textAnchor="middle" fill="#d4f59c">
              culantro & ají
            </text>
          </g>
          <g transform="translate(128 372)">
            <rect
              width="144"
              height="26"
              rx="13"
              fill="rgba(245,158,11,0.2)"
              stroke="rgba(245,158,11,0.65)"
            />
            <text x="72" y="17" textAnchor="middle" fill="#fde68a">
              emulsión cremosa
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}

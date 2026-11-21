"use client";

import { useCallback, useRef, useState } from "react";

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/** Escena arrastrable día ↔ noche: cambia el cielo peruano y sugiere el plato ideal según la hora del día. */
export default function DayNightSlider() {
  const [v, setV] = useState(22);
  const [touched, setTouched] = useState(false);
  const scene = useRef<HTMLDivElement>(null);
  const t = v / 100;
  const dusk = clamp(1 - Math.abs(t - 0.5) * 2.4);
  const night = clamp((t - 0.45) / 0.45);
  const stars = clamp((t - 0.62) / 0.3);
  const sunX = 110 + t * 520;
  const sunY = 95 + Math.pow(t, 1.6) * 330;
  const sunO = 1 - clamp((t - 0.55) / 0.2);
  const moonY = 420 - clamp((t - 0.5) / 0.5) * 320;
  const hour = 7 + t * 15;
  const hh = Math.floor(hour);
  const mm = Math.round(((hour - hh) * 60) / 15) * 15;
  const time = `${String(hh + (mm === 60 ? 1 : 0)).padStart(2, "0")}:${String(
    mm === 60 ? 0 : mm
  ).padStart(2, "0")}`;

  const phase = t < 0.34 ? "Mañana · Desayuno" : t < 0.67 ? "Mediodía · Almuerzo" : "Noche · Cena";
  const dishRecommendation =
    t < 0.34
      ? "Pan con chicharrón, tamal criollo, quinua caliente o desayunos fríos"
      : t < 0.67
      ? "Ceviche fresco, lomo saltado, ají de gallina o menú familiar de S/ 20"
      : "Caldo de gallina, arroz chaufa al wok, anticuchos o emoliente caliente";

  const fromPointer = useCallback((clientX: number) => {
    const el = scene.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setV(Math.round(clamp((clientX - r.left) / r.width) * 100));
    setTouched(true);
  }, []);

  return (
    <div className="daynight bg-[#140a08] shadow-[0_40px_80px_-40px_rgba(20,10,8,0.75)]">
      <div
        ref={scene}
        className="relative aspect-[4/5] cursor-ew-resize select-none sm:aspect-[16/9]"
        onPointerDown={(e) => {
          if (e.pointerType === "mouse") e.preventDefault();
          (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
          fromPointer(e.clientX);
        }}
        onPointerMove={(e) => {
          if (e.buttons === 1 || e.pointerType === "touch") {
            if ((e.currentTarget as HTMLElement).hasPointerCapture(e.pointerId))
              fromPointer(e.clientX);
          }
        }}
      >
        <svg
          viewBox="0 0 800 450"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <defs>
            <linearGradient id="dn-day" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#38bdf8" />
              <stop offset="1" stopColor="#fef3c7" />
            </linearGradient>
            <linearGradient id="dn-dusk" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#7f1d1d" />
              <stop offset="0.55" stopColor="#ea580c" />
              <stop offset="1" stopColor="#fde047" />
            </linearGradient>
            <linearGradient id="dn-night" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#090403" />
              <stop offset="0.7" stopColor="#260c0a" />
              <stop offset="1" stopColor="#450a0a" />
            </linearGradient>
            <linearGradient id="dn-drink" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#F59E0B" />
              <stop offset="1" stopColor="#991B1B" />
            </linearGradient>
            <radialGradient id="dn-sun" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#fff7d1" />
              <stop offset="0.5" stopColor="#ffd166" />
              <stop offset="1" stopColor="#ffd166" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="dn-lamp" cx="50%" cy="50%" r="50%">
              <stop offset="0" stopColor="#ffcf8a" stopOpacity="0.55" />
              <stop offset="1" stopColor="#ffcf8a" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="800" height="450" fill="url(#dn-day)" />
          <rect width="800" height="450" fill="url(#dn-dusk)" opacity={dusk} />
          <rect width="800" height="450" fill="url(#dn-night)" opacity={night} />
          <g opacity={stars} fill="#fff">
            {[
              [60, 40, 1.6],
              [140, 90, 1.1],
              [230, 30, 1.4],
              [320, 70, 1],
              [410, 25, 1.5],
              [500, 85, 1.1],
              [590, 35, 1.3],
              [690, 70, 1],
              [760, 30, 1.4],
              [100, 160, 1],
              [380, 140, 0.9],
              [720, 150, 1.2],
            ].map(([x, y, r], i) => (
              <circle key={i} cx={x} cy={y} r={r} />
            ))}
          </g>
          <g opacity={sunO}>
            <circle cx={sunX} cy={sunY} r="90" fill="url(#dn-sun)" />
            <circle cx={sunX} cy={sunY} r="30" fill="#ffe08a" />
          </g>
          <g transform={`translate(640 ${moonY})`} opacity={clamp((t - 0.5) / 0.25)}>
            <circle r="30" fill="#fdf3d8" />
            <circle cx="12" cy="-8" r="26" fill="#180807" opacity={0.9 * night + 0.1} />
          </g>
          {/* Cordillera de los Andes y ciudad */}
          <path
            d="M0 330 C120 275 210 295 300 320 C400 265 520 285 620 315 C700 290 760 300 800 310 L800 450 L0 450 Z"
            fill={night > 0.5 ? "#211210" : "#b47b65"}
            opacity="0.9"
          />
          <path
            d="M0 330 C120 275 210 295 300 320 C400 265 520 285 620 315 C700 290 760 300 800 310 L800 450 L0 450 Z"
            fill="#1f100e"
            opacity={night}
          />
          <g fill={t > 0.5 ? "#170b09" : "#8c5846"}>
            {[
              [40, 300, 40, 150],
              [90, 270, 36, 180],
              [135, 310, 50, 140],
              [520, 285, 40, 165],
              [565, 255, 46, 195],
              [618, 300, 36, 150],
              [660, 275, 44, 175],
              [712, 305, 48, 145],
            ].map(([x, y, w, h], i) => (
              <rect key={i} x={x} y={y} width={w} height={h} rx="3" />
            ))}
          </g>
          <g fill="#ffd27a" opacity={night}>
            {[
              [100, 285],
              [112, 310],
              [100, 335],
              [150, 325],
              [530, 300],
              [578, 270],
              [590, 300],
              [578, 330],
              [672, 290],
              [684, 320],
              [725, 318],
            ].map(([x, y], i) => (
              <rect key={i} x={x} y={y} width="7" height="9" rx="1" />
            ))}
          </g>
          {/* Mesa familiar peruana y olla/plato humeante */}
          <circle cx="400" cy="330" r="190" fill="url(#dn-lamp)" opacity={night} />
          <rect x="0" y="392" width="800" height="58" fill={night > 0.5 ? "#3b1d14" : "#c99672"} />
          <rect x="0" y="392" width="800" height="58" fill="#26110b" opacity={night * 0.7} />
          <rect x="0" y="388" width="800" height="8" fill="#ffffff" opacity="0.18" />
          <ellipse cx="400" cy="396" rx="105" ry="13" fill="#ffffff" opacity="0.94" />
          <path
            d="M325 305 L475 305 L462 376 Q458 392 435 392 L365 392 Q342 392 338 376 Z"
            fill="#ffffff"
          />
          <path
            d="M333 311 L467 311 L456 373 Q453 386 432 386 L368 386 Q347 386 344 373 Z"
            fill="url(#dn-drink)"
          />
          <ellipse cx="400" cy="311" rx="66" ry="8" fill="#fbbf24" opacity="0.88" />
          <g
            className="steam"
            fill="none"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.85"
          >
            <path d="M375 292 C362 268 388 252 375 226" />
            <path d="M400 290 C387 262 413 246 400 214" />
            <path d="M425 292 C412 268 438 252 425 226" />
          </g>
        </svg>

        <div className="pointer-events-none absolute left-4 top-4 rounded-2xl border border-white/30 bg-black/35 px-4 py-2 text-white backdrop-blur-md sm:left-6 sm:top-6">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#fde047]">
            {phase}
          </p>
          <p className="font-playfair text-3xl font-extrabold tabular-nums">{time}</p>
        </div>

        <div className="pointer-events-none absolute right-4 top-4 max-w-[56%] rounded-2xl border border-white/30 bg-black/35 px-4 py-3 text-right text-white backdrop-blur-md sm:right-6 sm:top-6">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#fde047]">
            Sugerencia para esta hora
          </p>
          <p className="font-playfair text-sm font-bold leading-snug sm:text-lg">
            {dishRecommendation}
          </p>
        </div>

        {!touched && (
          <div className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 animate-pulse whitespace-nowrap rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#1f1210] shadow-lg sm:bottom-5 sm:px-4 sm:py-2 sm:text-sm">
            ← Arrastra para ver qué cocinar de la mañana a la noche →
          </div>
        )}
      </div>

      <div className="flex items-center gap-4 bg-[#140a08] px-5 py-4 text-white sm:px-7">
        <span aria-hidden>☀️</span>
        <label className="sr-only" htmlFor="dn-range">
          Hora del día en la cocina peruana
        </label>
        <input
          id="dn-range"
          type="range"
          min={0}
          max={100}
          value={v}
          onChange={(e) => {
            setV(Number(e.target.value));
            setTouched(true);
          }}
          aria-valuetext={`${phase}, ${time}`}
        />
        <span aria-hidden>🌙</span>
      </div>
    </div>
  );
}

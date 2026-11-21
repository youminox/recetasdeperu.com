"use client";

import { useEffect, useRef } from "react";

const STEPS = [
  {
    n: "01",
    t: "El Aderezo Madre (Cebolla, Ajo y Ají)",
    d: "La base de todo gran plato peruano: sofreír a fuego lento hasta que la cebolla transparente y el ají corte su acidez.",
  },
  {
    n: "02",
    t: "El Fondo, Hierbas y Sazón de Huerta",
    d: "Se incorpora el caldo concentrado, el toque de chicha de jora o pisco, y las hierbas aromáticas como culantro o huacatay.",
  },
  {
    n: "03",
    t: "Emulsión, Punto Exacto y Vapor en Mesa",
    d: "Se liga la salsa a fuego suave hasta lograr brillo y cuerpo, sirviéndose humeante para compartir en familia.",
  },
];

/** Escena fijada con GSAP ScrollTrigger: la olla de barro recibe el caldo, cae el aderezo de ajíes, se mezcla con remolino y sale el vapor en mesa. */
export default function ScrollStory() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;
    let io: IntersectionObserver | null = null;

    const init = async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        const q = gsap.utils.selector(el);
        if (reduce) {
          gsap.set(q(".water"), { attr: { y: 205, height: 185 } });
          gsap.set(q(".drink"), { opacity: 1 });
          gsap.set(q(".steam-g, .night, .moon, .stars"), { opacity: 1 });
          gsap.set(q(".step"), { opacity: 1 });
          gsap.set(q(".bar"), { scaleX: 1 });
          return;
        }
        gsap.set(q(".powder"), { opacity: 0 });
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=2000",
            scrub: 0.7,
            pin: q(".pin")[0],
            anticipatePin: 1,
          },
        });
        tl.to(q(".step-0"), { opacity: 1, duration: 0.2 }, 0)
          .to(q(".step-0 .dot"), { backgroundColor: "#DC2626", color: "#fff", duration: 0.2 }, 0)
          .to(q(".water"), { attr: { y: 205, height: 185 }, duration: 1 }, 0)
          .to(q(".pour"), { opacity: 1, duration: 0.15 }, 0)
          .to(q(".pour"), { opacity: 0, duration: 0.15 }, 0.9)
          .to(q(".step-0"), { opacity: 0.8, duration: 0.2 }, 1.05)
          .fromTo(
            q(".stick"),
            { opacity: 0, x: 120, y: -80, rotate: -10 },
            {
              opacity: 1,
              x: 0,
              y: 0,
              rotate: -38,
              transformOrigin: "50% 50%",
              duration: 0.45,
              ease: "power2.out",
            },
            1
          )
          .to(q(".step-1"), { opacity: 1, duration: 0.2 }, 1)
          .to(q(".step-1 .dot"), { backgroundColor: "#B45309", color: "#fff", duration: 0.2 }, 1)
          .fromTo(
            q(".powder"),
            { y: 0, opacity: 0 },
            { y: 150, opacity: 1, stagger: 0.025, duration: 0.5, ease: "power1.in" },
            1.35
          )
          .to(q(".powder"), { opacity: 0, duration: 0.15, stagger: 0.025 }, 1.75)
          .to(q(".drink"), { opacity: 1, duration: 0.7 }, 1.6)
          .to(q(".stick"), { opacity: 0, y: -60, duration: 0.3 }, 2.1)
          .to(q(".step-1"), { opacity: 0.8, duration: 0.2 }, 2.2)
          .to(q(".step-2"), { opacity: 1, duration: 0.2 }, 2.2)
          .to(q(".step-2 .dot"), { backgroundColor: "#8CC63F", color: "#1f3105", duration: 0.2 }, 2.2)
          .to(q(".swirl"), { opacity: 0.9, duration: 0.2 }, 2.2)
          .to(q(".swirl"), { rotate: 900, svgOrigin: "200 300", duration: 1 }, 2.2)
          .to(q(".swirl"), { opacity: 0, duration: 0.3 }, 3)
          .to(q(".steam-g"), { opacity: 1, duration: 0.4 }, 2.8)
          .to(q(".night"), { opacity: 1, duration: 0.6 }, 2.9)
          .fromTo(q(".moon"), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 3)
          .to(q(".stars"), { opacity: 1, duration: 0.5 }, 3.1)
          .to(q(".done"), { opacity: 1, y: 0, duration: 0.4 }, 3.2)
          .to(q(".bar"), { scaleX: 1, duration: 3.6 }, 0);
      }, el);
    };

    io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io?.disconnect();
          init();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io?.disconnect();
      ctx?.revert();
    };
  }, []);

  return (
    <section
      id="del-aderezo-a-tu-mesa"
      ref={root}
      className="relative bg-gradient-to-b from-white via-[#fff7ed] to-white"
    >
      <div className="pin flex min-h-[100svh] items-center overflow-hidden py-10 lg:py-14">
        <div className="wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div>
            <span className="eyebrow">Del aderezo a tu mesa</span>
            <h2 className="section-title mt-3">
              Tres tiempos. <span className="text-[#991b1b]">Sazón peruana auténtica.</span>
            </h2>
            <div className="mt-4 h-1.5 w-full max-w-sm overflow-hidden rounded bg-[var(--line)]">
              <div className="bar h-full origin-left scale-x-0 bg-gradient-to-r from-[#dc2626] via-[#f59e0b] to-[#8cc63f]" />
            </div>
            <ol className="mt-6 space-y-3 sm:mt-8 sm:space-y-5">
              {STEPS.map((s, i) => (
                <li key={s.n} className={`step step-${i} flex gap-4`} style={{ opacity: 0.8 }}>
                  <span className="dot grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white font-playfair font-extrabold text-[#1f1210] shadow-md">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-playfair text-lg font-bold sm:text-xl">{s.t}</p>
                    <p className="text-sm text-[#5c4a46] sm:text-base">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p
              className="done mt-6 hidden text-sm text-[var(--muted)] sm:block"
              style={{ opacity: 0, transform: "translateY(10px)" }}
            >
              Regla de oro de la cocina peruana: “Un aderezo bien dormido a fuego lento nunca repite
              y multiplica el aroma de cada ají.”
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[240px] sm:max-w-[350px] lg:max-w-[420px]">
            <svg
              viewBox="0 0 400 440"
              className="relative w-full drop-shadow-[0_30px_50px_rgba(120,25,15,0.25)]"
              role="img"
              aria-label="Animación culinaria: la olla recibe el fondo, se incorpora el aderezo de ajíes peruanos, se emulsiona y sale vapor"
            >
              <defs>
                <linearGradient id="ss-day" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#fde68a" />
                  <stop offset="1" stopColor="#fff7ed" />
                </linearGradient>
                <linearGradient id="ss-night" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#140a08" />
                  <stop offset="0.65" stopColor="#3b0d0c" />
                  <stop offset="1" stopColor="#6b1d14" />
                </linearGradient>
                <linearGradient id="ss-drink" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#F59E0B" />
                  <stop offset="0.5" stopColor="#DC2626" />
                  <stop offset="1" stopColor="#7F1D1D" />
                </linearGradient>
                <clipPath id="ss-cup">
                  <path d="M105 200 L295 200 L280 362 Q275 392 246 392 L154 392 Q125 392 120 362 Z" />
                </clipPath>
                <clipPath id="ss-panel">
                  <rect x="0" y="0" width="400" height="440" rx="36" />
                </clipPath>
              </defs>
              <g clipPath="url(#ss-panel)">
                <rect width="400" height="440" fill="url(#ss-day)" />
                <circle cx="330" cy="70" r="26" fill="#F59E0B" opacity="0.85" />
                <rect className="night" width="400" height="440" fill="url(#ss-night)" opacity="0" />
                <g className="stars" opacity="0" fill="#fef08a">
                  {[
                    [40, 40, 1.6],
                    [90, 90, 1.1],
                    [150, 30, 1.4],
                    [220, 70, 1],
                    [60, 150, 1.2],
                    [260, 30, 1.5],
                    [370, 150, 1.1],
                    [190, 120, 0.9],
                    [30, 230, 1],
                    [370, 240, 1.3],
                  ].map(([x, y, r], i) => (
                    <circle key={i} cx={x} cy={y} r={r} />
                  ))}
                </g>
                <g className="moon" opacity="0">
                  <circle cx="320" cy="78" r="28" fill="#fef3c7" />
                  <circle cx="333" cy="70" r="24" fill="#2b0b0a" />
                </g>
                {/* Base de mesa / plato de barro */}
                <ellipse cx="200" cy="402" rx="152" ry="20" fill="#ffffff" opacity="0.95" />
                <ellipse cx="200" cy="398" rx="112" ry="11" fill="#f3e2dc" />
                {/* Chorro de fondo / caldo */}
                <rect
                  className="pour"
                  x="196"
                  y="0"
                  width="8"
                  height="300"
                  rx="4"
                  fill="#fde68a"
                  opacity="0"
                />
                {/* Contenido de la olla */}
                <g clipPath="url(#ss-cup)">
                  <rect x="95" y="195" width="210" height="205" fill="#ffffff" opacity="0.35" />
                  <rect
                    className="water"
                    x="95"
                    y="390"
                    width="210"
                    height="0"
                    fill="#fde68a"
                    opacity="0.92"
                  />
                  <rect
                    className="drink"
                    x="95"
                    y="205"
                    width="210"
                    height="195"
                    fill="url(#ss-drink)"
                    opacity="0"
                  />
                  <g className="swirl" opacity="0">
                    <path
                      d="M200 300 m-60 0 a60 22 0 1 0 120 0 a60 22 0 1 0 -120 0"
                      fill="none"
                      stroke="#fde047"
                      strokeWidth="5"
                      strokeDasharray="40 30"
                      strokeLinecap="round"
                    />
                    <path
                      d="M200 300 m-32 0 a32 12 0 1 0 64 0 a32 12 0 1 0 -64 0"
                      fill="none"
                      stroke="#8cc63f"
                      strokeWidth="4"
                      strokeDasharray="22 18"
                      strokeLinecap="round"
                    />
                  </g>
                </g>
                {/* Olla peruana con asas */}
                <path
                  d="M105 200 L295 200 L280 362 Q275 392 246 392 L154 392 Q125 392 120 362 Z"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path
                  d="M105 200 L295 200 L280 362 Q275 392 246 392 L154 392 Q125 392 120 362 Z"
                  fill="none"
                  stroke="#b45309"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                {/* Asas laterales */}
                <path
                  d="M106 230 C76 230 76 285 112 292"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M294 230 C324 230 324 285 288 292"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M124 212 L136 360"
                  stroke="#ffffff"
                  strokeWidth="6"
                  opacity="0.55"
                  strokeLinecap="round"
                />
                {/* Vapor aromático */}
                <g
                  className="steam-g steam"
                  opacity="0"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="6"
                  strokeLinecap="round"
                >
                  <path d="M165 182 C150 155 180 140 165 110" />
                  <path d="M200 178 C185 150 215 132 200 96" />
                  <path d="M235 182 C220 155 250 140 235 110" />
                </g>
                {/* Cucharón / Sobre de Aderezo Peruano */}
                <g className="stick" opacity="0">
                  <g transform="translate(250 42)">
                    <rect
                      x="-74"
                      y="-18"
                      width="148"
                      height="36"
                      rx="8"
                      fill="#ffffff"
                      stroke="#f1deda"
                    />
                    <rect x="-74" y="-18" width="28" height="36" rx="8" fill="#991B1B" />
                    <rect x="26" y="-18" width="48" height="36" fill="#F59E0B" opacity="0.9" />
                    <text
                      x="-40"
                      y="5"
                      fontWeight="800"
                      fontSize="12"
                      fill="#991B1B"
                    >
                      ADEREZO
                    </text>
                  </g>
                </g>
                {/* Partículas de ají amarillo, panca y culantro */}
                {Array.from({ length: 18 }).map((_, i) => (
                  <circle
                    key={i}
                    className="powder"
                    cx={180 + ((i * 23) % 44)}
                    cy={96 + (i % 5) * 9}
                    r={2.5 + (i % 3)}
                    fill={i % 3 === 0 ? "#DC2626" : i % 3 === 1 ? "#F59E0B" : "#8CC63F"}
                    opacity="0"
                  />
                ))}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

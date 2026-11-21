"use client";

import Link from "next/link";
import { useState } from "react";

export type OrbitItem = {
  k: string;
  name: string;
  img: string | null;
  icon?: string;
  role: string;
  d: string;
  href: string;
};

/** Órbita de 8 ingredientes madre de la gastronomía peruana en anillos giratorios; al elegir uno se muestra su ficha y el enlace a sus recetas. */
export default function IngredientOrbit({
  items,
  center,
}: {
  items: OrbitItem[];
  center: string;
}) {
  const [active, setActive] = useState(0);
  const a = items[active];

  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
      <div className="orbit mx-auto w-full max-w-[540px]">
        <div className="orbit-ring" />
        <div className="orbit-ring r2" />
        <div className="absolute inset-[24%] grid place-items-center overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-[#fff7ed] via-white to-[#fee2e2] shadow-[inset_0_10px_40px_rgba(153,27,27,0.15),0_20px_40px_-15px_rgba(127,29,29,0.3)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={center}
            alt="Gastronomía del Perú y sus ingredientes ancestrales"
            width={400}
            height={400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="orbit-spin">
          {items.map((it, i) => {
            const ang = (i / items.length) * Math.PI * 2 - Math.PI / 2;
            const x = 50 + Math.cos(ang) * 44;
            const y = 50 + Math.sin(ang) * 44;
            const on = i === active;
            return (
              <div
                key={it.k}
                className="orbit-item absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onMouseEnter={() => setActive(i)}
                    aria-pressed={on}
                    aria-label={`Ver ingrediente ${it.name}`}
                    className={`group grid h-14 w-14 place-items-center overflow-hidden rounded-full border-[3px] bg-white shadow-lg transition-all duration-300 sm:h-[76px] sm:w-[76px] ${
                      on
                        ? "scale-110 border-[#dc2626] shadow-[0_12px_30px_-10px_rgba(220,38,38,0.85)]"
                        : "border-white hover:border-[#dc2626]/60"
                    }`}
                  >
                    {it.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={it.img}
                        alt={it.name}
                        width={76}
                        height={76}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-2xl sm:text-3xl" aria-hidden>
                        {it.icon}
                      </span>
                    )}
                  </button>
                  <span
                    className={`pointer-events-none absolute left-1/2 top-full mt-1.5 hidden -translate-x-1/2 whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold sm:block ${
                      on
                        ? "bg-[#dc2626] text-white"
                        : "bg-white/95 text-[#1f1210] shadow"
                    }`}
                  >
                    {it.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <span className="eyebrow">Ingrediente a ingrediente</span>
        <h2 className="section-title mt-3">
          Los 8 pilares que dan alma a <span className="text-[#991b1b]">cada plato peruano</span>
        </h2>
        <p className="mt-3 text-[var(--muted)]">
          Toca un ingrediente de la órbita. Descubrirás qué función cumple en el aderezo, cómo se
          trabaja en cocina casera y en qué recetas brilla.
        </p>
        <div
          key={active}
          className="card card-static spot mt-7 p-7"
          style={{ animation: "fadeup .5s ease both" }}
        >
          <div className="flex items-center gap-4">
            <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-2xl bg-[#fff7ed] border border-[#f1deda]">
              {a.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={a.img}
                  alt={a.name}
                  width={64}
                  height={64}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-3xl" aria-hidden>
                  {a.icon}
                </span>
              )}
            </div>
            <div>
              <p className="font-playfair text-2xl font-extrabold leading-tight text-[#1f1210]">
                {a.name}
              </p>
              <p className="text-sm font-semibold text-[#b91c1c]">{a.role}</p>
            </div>
          </div>
          <p className="mt-4 text-base sm:text-lg text-[var(--muted)]">{a.d}</p>
          <Link
            href={a.href}
            className="mt-5 inline-flex items-center gap-2 font-bold text-[#b91c1c] hover:underline"
          >
            Explorar recetas con {a.name} →
          </Link>
        </div>

        <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label="Ingredientes peruanos">
          {items.map((it, i) => (
            <button
              key={it.k}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                i === active
                  ? "border-[#dc2626] bg-[#dc2626] text-white"
                  : "border-[var(--line)] bg-white hover:border-[#dc2626]"
              }`}
            >
              {it.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

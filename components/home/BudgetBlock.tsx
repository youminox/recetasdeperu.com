"use client";

import Link from "next/link";
import { useState } from "react";
import OpenChatButton from "@/components/OpenChatButton";

export type BudgetOption = {
  key: string;
  label: string;
  perPortion: number;
  img: string;
  alt: string;
  desc: string;
  sampleDishes: string;
  href: string;
};

const money = (n: number) => `S/ ${n.toFixed(2)}`;

/**
 * Calculadora interactiva de presupuesto de menú familiar peruano en Soles (S/):
 * alterna entre Menú Económico de Mercado, Almuerzo Criollo Familiar y Banquete de Fin de Semana.
 */
export default function BudgetBlock({ options }: { options: BudgetOption[] }) {
  const [k, setK] = useState(options[0].key);
  const [diners, setDiners] = useState(4);
  const [daysPerWeek, setDaysPerWeek] = useState(5);

  const p = options.find((o) => o.key === k)!;
  const dailyCost = p.perPortion * diners;
  const weeklyCost = dailyCost * daysPerWeek;
  const monthlyCost = weeklyCost * 4.33;

  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="card card-static spot relative overflow-hidden p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#dc2626]/10 blur-3xl" />
        <div className="relative">
          <div
            className="inline-flex flex-wrap rounded-2xl bg-[#fff7ed] p-1 border border-[#f1deda]"
            role="tablist"
            aria-label="Tipo de menú"
          >
            {options.map((o) => (
              <button
                key={o.key}
                role="tab"
                type="button"
                aria-selected={o.key === k}
                onClick={() => setK(o.key)}
                className={`rounded-xl px-3.5 py-2 text-xs sm:text-sm font-bold transition ${
                  o.key === k
                    ? "bg-white text-[#b91c1c] shadow"
                    : "text-[var(--muted)] hover:text-[#1f1210]"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          <div className="mt-6 grid items-center gap-6 sm:grid-cols-[1fr_1.15fr]">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[250px] overflow-hidden rounded-2xl border border-[#f1deda] shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={p.img}
                src={p.img}
                alt={p.alt}
                className="h-full w-full object-cover"
                style={{ animation: "fadeup .45s ease both" }}
              />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#b45309]">
                Costo referencial de mercado en Perú
              </p>
              <p
                className="mt-1 font-playfair text-5xl font-extrabold tracking-tight text-[#1f1210]"
                aria-live="polite"
              >
                {money(p.perPortion)}
              </p>
              <p className="mt-1 text-base">
                <strong className="text-[#991b1b]">por plato / persona</strong>{" "}
                <span className="text-[var(--muted)]">cocinando en casa</span>
              </p>
              <p className="mt-2.5 text-sm text-[var(--muted)]">{p.desc}</p>
              <p className="mt-2 text-xs font-semibold text-[#7f1d1d]">
                🍲 Ejemplos: {p.sampleDishes}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={p.href}
              className="btn btn-buy shine flex-1 text-center text-sm sm:text-base"
              data-magnetic
            >
              Ver recetas de {p.label} →
            </Link>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-[#3b0808] via-[#140a08] to-[#431407] p-6 text-white sm:p-8">
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#f59e0b]/20 blur-3xl" />
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#fde047]">
          Calculadora de mercado familiar
        </p>
        <h3 className="mt-2 font-playfair text-2xl font-extrabold sm:text-3xl">
          ¿Cuánto necesitas para el menú de tu familia?
        </h3>
        <p className="mt-2 text-sm text-white/75">
          Ajusta cuántas personas comen en casa y cuántos días cocinas a la semana para estimar tu
          presupuesto en Soles.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="rp-diners"
              className="flex items-center justify-between text-sm font-semibold"
            >
              <span>Personas en la mesa</span>
              <span className="rounded-full bg-white/10 px-3 py-0.5 font-playfair text-lg text-[#fde047]">
                {diners}
              </span>
            </label>
            <input
              id="rp-diners"
              type="range"
              min={1}
              max={8}
              step={1}
              value={diners}
              onChange={(e) => setDiners(Number(e.target.value))}
              className="mt-2 w-full accent-[#f59e0b]"
            />
          </div>

          <div>
            <label
              htmlFor="rp-days"
              className="flex items-center justify-between text-sm font-semibold"
            >
              <span>Días por semana</span>
              <span className="rounded-full bg-white/10 px-3 py-0.5 font-playfair text-lg text-[#fde047]">
                {daysPerWeek}
              </span>
            </label>
            <input
              id="rp-days"
              type="range"
              min={1}
              max={7}
              step={1}
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(Number(e.target.value))}
              className="mt-2 w-full accent-[#f59e0b]"
            />
          </div>
        </div>

        <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
          {[
            ["Almuerzo del día", money(dailyCost)],
            [`Semana (${daysPerWeek} días)`, money(weeklyCost)],
            ["Mes estimado", money(monthlyCost)],
          ].map(([l, val], i) => (
            <div
              key={l}
              className={`glass flex flex-col-reverse p-3 ${
                i === 1 ? "border-[#fbbf24]/60 bg-[#fbbf24]/15" : ""
              }`}
            >
              <dt className="mt-1 text-[0.7rem] leading-tight text-white/70">{l}</dt>
              <dd
                className={`font-playfair font-extrabold ${
                  i === 1 ? "text-xl text-[#fde047] sm:text-2xl" : "text-lg sm:text-2xl"
                }`}
              >
                {val}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-white/60">
            *{diners} personas × {money(p.perPortion)} por plato = {money(dailyCost)} al día.
          </p>
          <OpenChatButton
            label={`Armar menú para ${diners} personas con IA`}
            prompt={`Hola Chef, somos ${diners} personas en casa y queremos armar un menú peruano (${p.label}) con unos ${money(dailyCost)} por día. ¿Qué recetas de la web me recomiendas?`}
            className="btn btn-lime !px-4 !py-2 text-xs"
          />
        </div>
      </div>
    </div>
  );
}

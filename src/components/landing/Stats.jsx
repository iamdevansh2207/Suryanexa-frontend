"use client";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal, Eyebrow, SectionShell } from "./Reveal";
import { LANDING } from "@/constants/testIds";

const STATS = [
  { value: 7, suffix: "", label: "Industry pillars on one network", decimals: 0 },
  { value: 6, suffix: "", label: "Seats in every governed vendor squad", decimals: 0 },
  { value: 0, suffix: "", label: "Leads visible to platform admins", decimals: 0 },
  { value: 100, suffix: "%", label: "Deliveries covered by video claim shield", decimals: 0 },
  { value: 2, suffix: "", label: "Proposal modes — efficiency vs. price", decimals: 0 },
  { value: 3, suffix: "", label: "Leaderboard tiers — area, city, state", decimals: 0 },
];

const Counter = ({ value, suffix, decimals, started }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Number((value * eased).toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, value, decimals]);
  return (
    <span className="font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
      {display.toFixed(decimals)}
      <span className="text-gradient-eco">{suffix}</span>
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <SectionShell id="stats" data-testid={LANDING.statsSection} className="py-16 lg:py-24">
      <div className="mb-10 max-w-3xl">
        <Eyebrow>The network in numbers</Eyebrow>
      </div>
      <div ref={ref} className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-slate-200 bg-slate-200 md:grid-cols-3">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.06} className="bg-white p-8 md:p-10">
            <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} started={inView} />
            <p className="mt-3 text-xs leading-relaxed text-slate-500 sm:text-sm">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  );
};

export default Stats;

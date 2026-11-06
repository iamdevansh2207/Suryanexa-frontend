"use client";
import { LANDING } from "@/constants/testIds";

const ITEMS = [
  "Blind-Vault Lead Privacy",
  "Mix & Match Kit Configurator",
  "6-Member Squad Governance",
  "Video Unloading Protocol",
  "Area · City · State Rankings",
  "Verified Trader Command Center",
  "Dispute-Proof PO Pipeline",
  "One Network, Zero Chaos",
];

const Marquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      data-testid={LANDING.marquee}
      className="relative overflow-hidden border-y border-slate-200 bg-white py-5"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#f7faf8] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#f7faf8] to-transparent" />
      <div className="animate-marquee flex w-max items-center">
        {row.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-display text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-amber-500" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

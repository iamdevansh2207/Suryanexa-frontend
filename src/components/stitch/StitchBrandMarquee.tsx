"use client";

import React from "react";
import { motion } from "framer-motion";

interface BrandItem {
  id: string;
  name: string;
  subtitle: string;
  subtitleColor: string;
  isLowercase?: boolean;
  renderIcon: () => React.ReactNode;
}

const BRANDS: BrandItem[] = [
  {
    id: "saatvik",
    name: "SAATVIK",
    subtitle: "SOLAR",
    subtitleColor: "text-amber-400",
    renderIcon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M4 18 C4 9 9 4 18 4 C14 8 12 14 14 18 Z" fill="#16a34a" />
        <circle cx="16" cy="16" r="4.5" fill="#f59e0b" />
      </svg>
    ),
  },
  {
    id: "tata",
    name: "TATA",
    subtitle: "POWER SOLAR",
    subtitleColor: "text-slate-400",
    renderIcon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <circle cx="12" cy="12" r="10" stroke="#38bdf8" strokeWidth="2" fill="none" />
        <path d="M7 8.5 L17 8.5 M12 8.5 L12 17" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "waaree",
    name: "WAAREE",
    subtitle: "ENERGIE",
    subtitleColor: "text-slate-400",
    renderIcon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M5 12 L9 7 L13 12 L9 17 Z" fill="#f59e0b" />
        <path d="M12 10 L16 5 L20 10 L16 15 Z" fill="#10b981" />
      </svg>
    ),
  },
  {
    id: "adani",
    name: "adani",
    subtitle: "solar",
    subtitleColor: "text-amber-400",
    isLowercase: true,
    renderIcon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M3 16 C8 11 16 11 21 16 C16 14 8 14 3 16 Z" fill="#f59e0b" />
        <path d="M4 13 C9 8 16 8 20 13 C16 11 9 11 4 13 Z" fill="#0d9488" />
        <path d="M5 10 C9 6 15 6 19 10 C15 8 9 8 5 10 Z" fill="#2563eb" />
      </svg>
    ),
  },
  {
    id: "vikram",
    name: "VIKRAM",
    subtitle: "SOLAR",
    subtitleColor: "text-slate-400",
    renderIcon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M12 2 L21 7 L21 17 L12 22 L3 17 L3 7 Z" stroke="#10b981" strokeWidth="1.8" fill="none" />
        <path d="M12 2 L12 22 M3 7 L21 17 M3 17 L21 7" stroke="#f59e0b" strokeWidth="1.2" strokeOpacity="0.85" />
      </svg>
    ),
  },
  {
    id: "premier",
    name: "PREMIER",
    subtitle: "ENERGIES",
    subtitleColor: "text-emerald-400",
    renderIcon: () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <circle cx="12" cy="12" r="7.5" stroke="#f59e0b" strokeWidth="2" fill="none" />
        <path d="M12 2 L12 6 M12 18 L12 22 M2 12 L6 12 M18 12 L22 12" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3.2" fill="#10b981" />
      </svg>
    ),
  },
];

// Repeat 4x to ensure an unbroken, seamless continuous loop on wide screens
const MARQUEE_ITEMS = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

export default function StitchBrandMarquee() {
  return (
    <section className="relative w-full bg-[#02201d] border-b border-emerald-950/60 py-7 overflow-hidden select-none">
      {/* Marquee Wrapper with fading mask on both ends */}
      <div
        className="relative w-full overflow-hidden flex items-center"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        }}
      >
        {/* Soft Left Fading Edge Overlay */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#02201d] to-transparent z-10" />

        {/* Soft Right Fading Edge Overlay */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#02201d] to-transparent z-10" />

        {/* Moving Marquee Strip: right to left */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 sm:gap-16 whitespace-nowrap will-change-transform py-2"
        >
          {MARQUEE_ITEMS.map((brand, idx) => (
            <div
              key={`${brand.id}-${idx}`}
              className="flex items-center gap-3 shrink-0 opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-default"
            >
              {/* Brand Logo Mark */}
              {brand.renderIcon()}

              {/* Brand Name Typography */}
              <div className="flex items-baseline gap-1.5 font-sans tracking-tight">
                <span
                  className={`font-black text-white text-sm sm:text-base ${
                    brand.isLowercase ? "lowercase tracking-normal font-bold" : "uppercase"
                  }`}
                >
                  {brand.name}
                </span>
                <span className={`text-[11px] sm:text-xs font-bold tracking-wider ${brand.subtitleColor}`}>
                  {brand.subtitle}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Play, ArrowRight, ShieldCheck, CheckCircle2, Lock, Zap } from "lucide-react";
import SolarEngineModel from "./SolarEngineModel";

const ROTATING_WORDS = [
  "Zero Margin Leakage",
  "Direct Depot Allocation",
  "Dispute-Proof Delivery",
  "Instant Kit Matching"
];

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-flex h-[1.25em] min-w-[12ch] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROTATING_WORDS[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="whitespace-nowrap text-emerald-400 font-extrabold"
        >
          {ROTATING_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function StitchHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -35]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative overflow-hidden bg-[#02201d] min-h-[87vh] flex items-center py-10 lg:py-14 text-white"
    >
      {/* Background Image with Cinematic Solar Overlays */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/hero-solar-bg.jpg"
          alt="Solar Rooftop Installation"
          className="w-full h-full object-cover object-center scale-[1.02]"
        />
        {/* Deep emerald gradient overlay ensuring crisp typography contrast on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02201d] via-[#02201d]/85 to-[#02201d]/60" />
        {/* Vertical fades for seamless navbar and footer/marquee transitions */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#02201d] via-transparent to-[#02201d]/40" />
      </div>

      {/* Soft ambient solar emerald glow highlights */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[500px] rounded-full bg-emerald-500/10 blur-[140px] z-0" />
      <div className="pointer-events-none absolute top-1/3 -right-20 w-[420px] h-[420px] rounded-full bg-teal-400/10 blur-[120px] z-0" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Content */}
          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white tracking-tight leading-[1.08] mb-6">
              From Bulk Warehouse <br />
              to Rooftop Wattage — <br />
              One Network, <RotatingWord />
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-emerald-100/80 leading-relaxed font-sans max-w-2xl mb-8">
              SuryaNexa is the dedicated B2B operating platform that connects bulk solar equipment traders, verified EPCs, and local installers with instant satellite sizing, Blind-Vault™ lead privacy, and dispute-proof ex-depot delivery.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#dashboard-preview"
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold font-display rounded-full text-zinc-950 bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 transition-all duration-200 group"
              >
                <Play className="w-4 h-4 mr-2 fill-zinc-950" />
                Explore Operations ERP
              </a>
              <a
                href="#pilot-cta"
                className="inline-flex items-center justify-center px-7 py-4 text-sm font-bold font-display rounded-full text-emerald-200 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 shadow-xs transition-all duration-200 group backdrop-blur-sm"
              >
                Request Verified Trader Access
                <ArrowRight className="ml-2 w-4 h-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-emerald-800/50">
              <div className="flex items-center space-x-2.5 text-xs font-sans font-semibold text-emerald-100/90">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>KYB-Verified Traders Only</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs font-sans font-semibold text-emerald-100/90">
                <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Blind-Vault™ Lead Sealing</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs font-sans font-semibold text-emerald-100/90">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Transit Video Escrow</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Solar OS Orbital Model placed directly on the Hero section */}
          <motion.div
            style={{ y: imgY }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center w-full"
          >
            <SolarEngineModel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

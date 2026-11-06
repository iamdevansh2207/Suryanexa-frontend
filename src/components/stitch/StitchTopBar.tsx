"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Activity } from "lucide-react";

export default function StitchTopBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-zinc-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] py-3"
          : "bg-white/70 backdrop-blur-md border-b border-zinc-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo with actual SuryaNexa image */}
        <a href="#top" className="flex items-center space-x-3 group">
          <img
            src="/nexa-logo.png"
            alt="SuryaNexa Logo"
            className="w-10 h-10 object-contain rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold font-display tracking-tight text-zinc-950 leading-tight">
              Surya<span className="text-emerald-600">Nexa</span>
            </span>
            <span className="text-[11px] font-sans font-medium tracking-wide text-zinc-600">
              Solar Operating Platform
            </span>
          </div>
        </a>

        {/* Center Status Badges - Professional, No AI/Code vibe */}
        <div className="hidden lg:flex items-center space-x-3 text-xs font-sans font-medium">
          <div className="flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-[11px] tracking-wide">VERIFIED B2B NETWORK</span>
          </div>
          <span className="text-zinc-300">/</span>
          <span className="text-zinc-700 flex items-center gap-1.5 font-semibold text-[11px]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 1,420 MW TRADED
          </span>
          <span className="text-zinc-300">/</span>
          <span className="text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200 font-semibold text-[11px]">
            PILOT COHORT ACTIVE
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <a
            className="hidden sm:inline-flex text-xs font-semibold text-zinc-700 hover:text-emerald-700 transition font-display px-3 py-2"
            href="#dashboard-preview"
          >
            Operations ERP
          </a>
          <a
            className="hidden sm:inline-flex text-xs font-semibold text-zinc-700 hover:text-emerald-700 transition font-display px-3 py-2"
            href="#lifecycle"
          >
            7 Stages
          </a>
          <a
            className="hidden sm:inline-flex text-xs font-semibold text-zinc-700 hover:text-emerald-700 transition font-display px-3 py-2"
            href="#playground"
          >
            OS Simulator
          </a>
          <a
            className="inline-flex items-center px-5 py-2.5 text-xs font-bold font-display rounded-full text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all duration-200"
            href="#pilot-cta"
          >
            Request Access
            <ArrowRight className="ml-1.5 w-3.5 h-3.5 text-white" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}

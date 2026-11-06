"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, Zap, Sparkles } from "lucide-react";

export function OrigamiHeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-between pt-28 pb-16 lg:py-0 overflow-hidden bg-[#fdfbf7]">
      {/* Background Subtle Paper Texture & Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5decf_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#fde68a]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-center relative z-10">
        {/* LEFT COLUMN: Editorial Typography & Brand Narrative */}
        <div className="lg:col-span-6 space-y-6 text-left">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f4eee2] border border-[#e2d6c0] text-[#78644e] text-xs font-mono font-bold tracking-wider uppercase"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
            <span>ORIGAMI FOLD & SATELLITE SOLAR OS</span>
          </motion.div>

          {/* Main Headline with Poppins Font */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1c1917] tracking-tight leading-[1.12] font-heading"
          >
            The Direct Bridge <br />
            from <span className="text-[#d97706]">Solar Traders</span> <br />
            to <span className="underline decoration-[#15803d]/40 decoration-wavy decoration-2 text-[#15803d]">Vendors & EPCs</span>
          </motion.h1>

          {/* Value Prop Subhead with Onest Font */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-[#57534e] max-w-lg leading-relaxed font-normal font-body"
          >
            Connecting bulk solar equipment traders to local installers. Eliminate stolen leads with <strong className="text-[#1c1917] font-semibold">Blind-Vault CRM</strong>, generate instant <strong className="text-[#1c1917] font-semibold">60s satellite visual quotes</strong>, and guarantee zero freight disputes.
          </motion.p>

          {/* CTA Buttons: Register Now & Book a Demo Call */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            {/* Primary: Register Now */}
            <a
              href="#register"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm bg-[#261c14] hover:bg-[#3d2e24] text-white shadow-xl shadow-[#261c14]/20 hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer group font-body"
            >
              <span>Register Now</span>
              <ArrowRight className="w-4 h-4 text-[#eab308] group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Secondary: Book a Demo Call */}
            <a
              href="#book-demo"
              className="flex items-center gap-2 px-7 py-4 rounded-full font-bold text-sm bg-[#fbf9f4] hover:bg-[#f3ede1] text-[#1c1917] border border-[#dcd3c1] shadow-sm hover:scale-[1.02] active:scale-[0.99] transition-all cursor-pointer font-body"
            >
              <PhoneCall className="w-4 h-4 text-[#d97706]" />
              <span>Book a Demo Call</span>
            </a>
          </motion.div>

          {/* Trust Telemetry Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-6 border-t border-[#e8dfcf] flex flex-wrap items-center gap-6 text-xs font-mono text-[#78716c]"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#15803d]" />
              <span>Verified DCR & ALMM Stock</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#d97706]" />
              <span>PM Surya Ghar Subsidy Ready</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The Layered Origami Paper-Cut Wave with Photorealistic 3D Solar Hardware */}
        <div className="lg:col-span-6 relative h-[440px] sm:h-[500px] lg:h-[560px] w-full flex items-center justify-center">
          {/* Outer Wave Envelope */}
          <div className="relative w-full h-full rounded-[40px] overflow-hidden bg-[#261c14] shadow-2xl shadow-[#261c14]/30 border border-[#e8dfcf]">
            {/* SVG MULTI-LAYER ORIGAMI PAPER-CUT WAVES */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 700 600"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Layer 1: Warm Golden Honey Paper Wave */}
              <path
                d="M700 0H0V600C0 600 120 540 220 460C320 380 340 280 430 210C530 130 630 110 700 80V0Z"
                fill="#f4ecd9"
                className="paper-cut-layer-1"
              />

              {/* Layer 2: Amber Ochre Fold Wave */}
              <path
                d="M700 60C620 90 530 110 440 180C350 250 320 340 240 420C170 490 80 540 0 570V600H700V60C700 60 700 60 700 60Z"
                fill="#deb87b"
                className="paper-cut-layer-2"
              />

              {/* Layer 3: Terracotta Copper Fold Wave */}
              <path
                d="M700 130C630 160 550 180 470 250C380 320 360 410 290 480C230 540 150 580 0 600H700V130Z"
                fill="#9e6638"
                className="paper-cut-layer-2"
              />

              {/* Layer 4: Deep Umber Espresso Cavity Wall */}
              <path
                d="M700 200C630 230 570 260 500 320C420 390 400 470 340 540C300 580 250 600 200 600H700V200Z"
                fill="#4d3322"
                className="paper-cut-layer-3"
              />

              {/* Layer 5: Darkest Inner Chamber with Electronic PCB Traces */}
              <path
                d="M700 280C640 310 590 340 530 400C460 470 440 540 390 600H700V280Z"
                fill="#261c14"
              />
            </svg>

            {/* Glowing Golden PCB Circuit Traces */}
            <div className="absolute right-4 bottom-16 w-64 h-64 pointer-events-none opacity-40">
              <svg viewBox="0 0 200 200" fill="none" className="w-full h-full stroke-[#eab308]">
                <path d="M10 50 H60 L80 70 H150" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M40 90 H90 L110 110 H180" strokeWidth="1.5" />
                <path d="M30 140 H80 L100 120 H160" strokeWidth="1.5" strokeDasharray="4 2" />
                <circle cx="150" cy="70" r="3" fill="#eab308" />
                <circle cx="180" cy="110" r="3" fill="#eab308" />
                <circle cx="160" cy="120" r="3" fill="#eab308" />
              </svg>
            </div>

            {/* HARDWARE COMPOSITION: Photorealistic 3D Solar Hardware */}
            <div className="absolute inset-0 flex items-center justify-end pr-6 sm:pr-12 pointer-events-auto">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex items-end gap-3 sm:gap-4 select-none"
              >
                {/* Foreground Smart Hybrid Inverter */}
                <motion.div
                  whileHover={{ scale: 1.04, y: -4 }}
                  className="w-28 sm:w-36 h-36 sm:h-44 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] border-2 border-white/80 shadow-2xl shadow-black/60 p-3 sm:p-4 flex flex-col justify-between z-20"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] sm:text-[9px] font-mono font-bold text-[#64748b] tracking-wider uppercase">
                      HYBRID 10kW
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#15803d] animate-pulse" />
                  </div>

                  <div className="my-auto rounded-lg bg-[#0f172a] p-2 text-center border border-white/10 shadow-inner">
                    <div className="text-[10px] font-mono text-[#38bdf8] font-bold">10.4 kW</div>
                    <div className="text-[7px] font-mono text-[#94a3b8] flex items-center justify-center gap-1 font-body">
                      <Zap className="w-2 h-2 text-[#eab308]" /> 98.4% Eff
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-[#cbd5e1] pt-1">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64748b]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#64748b]" />
                    </div>
                    <span className="text-[8px] font-bold font-mono text-[#15803d]">MPPT ACTIVE</span>
                  </div>
                </motion.div>

                {/* Primary Photovoltaic Monocrystalline Panels */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10 flex -space-x-4 sm:-space-x-6 items-end"
                >
                  {/* Panel 1 */}
                  <div className="w-28 sm:w-36 h-60 sm:h-72 rounded-xl bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0a0f1d] border-2 border-[#94a3b8] shadow-2xl shadow-black/80 p-2 sm:p-2.5 flex flex-col justify-between transform -rotate-1 hover:rotate-0 transition-transform">
                    <div className="grid grid-cols-2 gap-1 h-full opacity-70">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-sm border border-sky-400/30 bg-gradient-to-br from-blue-950 to-slate-900"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-1.5 text-[8px] font-mono text-sky-200">
                      <span>Tier-1 TopCon</span>
                      <span className="text-[#eab308] font-bold">550W</span>
                    </div>
                  </div>

                  {/* Panel 2 (Main Anchor) */}
                  <div className="w-32 sm:w-40 h-68 sm:h-80 rounded-xl bg-gradient-to-b from-[#090d16] via-[#162238] to-[#080d1a] border-2 border-[#cbd5e1] shadow-2xl shadow-black/90 p-2 sm:p-2.5 flex flex-col justify-between transform rotate-1 hover:rotate-0 transition-transform">
                    <div className="grid grid-cols-2 gap-1 h-full opacity-80">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-sm border border-sky-400/40 bg-gradient-to-br from-blue-900 to-slate-950 relative overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-sky-300/10 to-transparent" />
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-1.5 text-[8px] font-mono text-slate-200">
                      <span className="text-[#34d399] font-bold">Bi-Facial 99%</span>
                      <span className="text-[#eab308] font-bold">580W DCR</span>
                    </div>
                  </div>

                  {/* Panel 3 */}
                  <div className="hidden sm:block w-32 h-64 rounded-xl bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] border border-[#64748b] shadow-xl p-2 opacity-90 transform rotate-3">
                    <div className="grid grid-cols-2 gap-1 h-full opacity-50">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded-sm border border-sky-500/20 bg-slate-950"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Micro-Inverter Unit */}
                <div className="hidden sm:flex w-20 h-28 rounded-xl bg-[#f8fafc] border border-white/60 shadow-xl p-2 flex-col justify-between z-0 transform translate-y-[-40px]">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#eab308]" />
                  <div className="text-[7px] font-mono text-center text-[#475569] font-bold">
                    MICRO 800W
                  </div>
                  <div className="w-full h-1 bg-[#e2e8f0] rounded" />
                </div>
              </motion.div>
            </div>

            {/* Live Stock Reserve Floating Badge */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-30 bg-[#ffffff]/95 backdrop-blur-md border border-[#e2d6c0] rounded-2xl p-3 sm:p-4 shadow-xl shadow-[#261c14]/15 max-w-[220px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-[#15803d]" />
                <span className="text-[10px] font-mono font-bold text-[#1c1917] uppercase tracking-wider">
                  Live Stock Reserve
                </span>
              </div>
              <p className="text-xs font-bold text-[#1c1917] font-heading">5,400+ Panels Available</p>
              <p className="text-[10px] text-[#78716c] font-mono mt-0.5">Direct Factory Price Lock</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

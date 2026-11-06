"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Layers, Compass, Zap, FileSpreadsheet, CheckCircle2, RotateCw } from "lucide-react";

export function RooftopVisualizerSimulation() {
  const [panelCount, setPanelCount] = useState<number>(12);
  const [panelWattage, setPanelWattage] = useState<number>(550);
  const [tiltAngle, setTiltAngle] = useState<number>(18);
  const [activeTab, setActiveTab] = useState<"quick_quote" | "final_quote">("quick_quote");

  const totalKw = ((panelCount * panelWattage) / 1000).toFixed(2);
  const annualGenKwh = Math.round(Number(totalKw) * 1450);
  const estimatedSavings = Math.round((annualGenKwh * 7.5)).toLocaleString("en-IN");
  const estimatedGross = Math.round(Number(totalKw) * 55000);
  const subsidy = Number(totalKw) <= 3 ? 78000 : 78000;
  const netPayable = Math.max(0, estimatedGross - subsidy).toLocaleString("en-IN");

  return (
    <div className="relative rounded-2xl border border-white/[0.12] bg-[#0c1018]/90 backdrop-blur-2xl p-5 md:p-6 shadow-2xl shadow-black/80 overflow-hidden">
      {/* Simulation Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono tracking-wider text-slate-400 uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            SuryaCalc Sizing Engine v2.4 • Active Satellite Feed
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
            Azimuth 180° (True South)
          </span>
        </div>
      </div>

      {/* Main Rooftop Canvas Area */}
      <div className="relative mt-4 rounded-xl overflow-hidden border border-white/[0.08] bg-[#070a0f] h-[260px] md:h-[290px] flex items-center justify-center">
        {/* Subtle Satellite Roof Texture simulation */}
        <div
          className="absolute inset-0 opacity-40 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]"
        />

        {/* Shadow-Free Usable Perimeter outline */}
        <div className="absolute inset-6 rounded-lg border-2 border-dashed border-sky-400/30 flex items-center justify-center">
          <span className="absolute top-2 left-2 text-[10px] font-mono text-sky-400/60 uppercase">
            Usable Shadow-Free Boundary: 620 sq.ft
          </span>
        </div>

        {/* Solar Panel Grid */}
        <div className="relative z-10 grid grid-cols-4 md:grid-cols-6 gap-2 p-3 bg-slate-900/40 rounded-lg border border-white/[0.05] backdrop-blur-sm">
          {Array.from({ length: panelCount }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.03, type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-11 h-16 md:w-12 md:h-18 rounded bg-gradient-to-b from-sky-900/60 via-blue-950/70 to-slate-950 border border-sky-400/40 shadow-sm flex flex-col justify-between p-1 group cursor-pointer hover:border-amber-400 transition-colors"
            >
              <div className="flex justify-between items-center opacity-50 text-[7px] font-mono text-sky-200">
                <span>#{i + 1}</span>
                <Zap className="w-2 h-2 text-amber-400" />
              </div>
              <div className="w-full h-[1px] bg-sky-400/20 my-auto" />
              <div className="text-[8px] font-mono text-center text-slate-300">
                {panelWattage}W
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Simulation Badge Overlay */}
        <div className="absolute bottom-3 left-3 z-20 flex gap-2">
          <div className="bg-slate-950/90 border border-white/10 rounded-lg px-2.5 py-1 backdrop-blur-md">
            <span className="text-[10px] text-slate-400 block font-mono">Capacity</span>
            <span className="text-xs font-bold font-mono text-amber-400">{totalKw} kW</span>
          </div>
          <div className="bg-slate-950/90 border border-white/10 rounded-lg px-2.5 py-1 backdrop-blur-md">
            <span className="text-[10px] text-slate-400 block font-mono">Generation</span>
            <span className="text-xs font-bold font-mono text-emerald-400">{annualGenKwh} kWh/yr</span>
          </div>
        </div>

        <div className="absolute bottom-3 right-3 z-20">
          <button
            onClick={() => setPanelCount((c) => (c >= 18 ? 8 : c + 2))}
            className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 rounded-lg transition-colors cursor-pointer"
          >
            <RotateCw className="w-3 h-3" />
            Cycle Layout ({panelCount} panels)
          </button>
        </div>
      </div>

      {/* Dual Quotation Mode Toggle */}
      <div className="mt-5">
        <div className="grid grid-cols-2 p-1 bg-slate-900/60 rounded-xl border border-white/[0.06]">
          <button
            onClick={() => setActiveTab("quick_quote")}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "quick_quote"
                ? "bg-amber-500 text-slate-950 shadow-md font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            1. Quick Pre-Quote (60s Sizing)
          </button>
          <button
            onClick={() => setActiveTab("final_quote")}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeTab === "final_quote"
                ? "bg-sky-500 text-slate-950 shadow-md font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            2. Final Quote (Post-Audit 3-Tier)
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="mt-4 p-4 rounded-xl border border-white/[0.06] bg-slate-900/30">
          {activeTab === "quick_quote" ? (
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Solar Subsidy (PM Surya Ghar)</span>
                <span className="font-mono text-emerald-400 font-semibold">₹78,000 (Applied)</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Estimated Net EPC Investment</span>
                <span className="font-mono text-white font-bold text-sm">₹{netPayable}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Projected 25-Yr Tariff Savings</span>
                <span className="font-mono text-amber-400 font-semibold">₹{estimatedSavings} / yr</span>
              </div>
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[11px] text-slate-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" /> WhatsApp PDF dispatch ready
                </span>
                <span className="text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  Instant Conversion Engine
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-slate-800/40 border border-white/[0.05]">
                  <span className="text-[10px] text-slate-400 block font-mono">Standard</span>
                  <span className="text-xs font-bold text-slate-200">Tier-1 DCR</span>
                  <span className="text-[10px] text-emerald-400 block font-mono mt-1">₹52k / kW</span>
                </div>
                <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
                  <span className="text-[10px] text-amber-300 block font-mono">Premium ★</span>
                  <span className="text-xs font-bold text-amber-400">TopCon + Hybrid</span>
                  <span className="text-[10px] text-emerald-400 block font-mono mt-1">₹58k / kW</span>
                </div>
                <div className="p-2 rounded-lg bg-slate-800/40 border border-white/[0.05]">
                  <span className="text-[10px] text-slate-400 block font-mono">Executive</span>
                  <span className="text-xs font-bold text-slate-200">Micro-Inverters</span>
                  <span className="text-[10px] text-emerald-400 block font-mono mt-1">₹68k / kW</span>
                </div>
              </div>
              <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-sky-400" /> Real-time distributor price lock
                </span>
                <span className="font-mono text-sky-400">Dispute-Proof Contract</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


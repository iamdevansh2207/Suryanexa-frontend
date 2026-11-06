"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Zap,
  ShieldCheck,
  CheckCircle2,
  RotateCw,
  Compass,
  Layers,
  ArrowRight,
  TrendingUp,
  FileText,
  Sliders,
  DollarSign,
  Maximize2
} from "lucide-react";

export function InteractiveSolarDashboard() {
  const [panelCount, setPanelCount] = useState<number>(14);
  const [wattage, setWattage] = useState<number>(550);
  const [orientation, setOrientation] = useState<"portrait" | "landscape">("portrait");
  const [selectedTier, setSelectedTier] = useState<"standard" | "premium" | "executive">("premium");
  const [showQuoteDrawer, setShowQuoteDrawer] = useState<boolean>(false);

  // Solar Engineering Calculations
  const systemKw = Number(((panelCount * wattage) / 1000).toFixed(2));
  const roofAreaOccupied = Math.round(panelCount * (wattage >= 550 ? 27.5 : 24.5)); // sq.ft
  const annualGenKwh = Math.round(systemKw * 1480);
  const monthlySavingsInr = Math.round((annualGenKwh * 7.75) / 12);
  const annualSavingsInr = monthlySavingsInr * 12;
  const centralSubsidy = systemKw <= 3 ? 78000 : 78000; // PM Surya Ghar scheme

  const tierPrices = {
    standard: 52000, // per kW
    premium: 57500,  // per kW
    executive: 66000 // per kW
  };

  const grossCost = Math.round(systemKw * tierPrices[selectedTier]);
  const netPayable = Math.max(0, grossCost - centralSubsidy);
  const paybackYears = (netPayable / annualSavingsInr).toFixed(1);

  return (
    <div className="relative rounded-3xl border border-white/[0.12] bg-[#0c1017]/90 backdrop-blur-2xl p-4 sm:p-6 lg:p-7 shadow-2xl shadow-black/90 overflow-hidden group">
      {/* Top Telemetry Chrome Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block shadow-sm shadow-rose-500/50" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block shadow-sm shadow-amber-500/50" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block shadow-sm shadow-emerald-500/50" />
          </div>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <span className="text-xs font-mono tracking-wider text-slate-300 font-semibold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            SURYA-CALC™ SATELLITE ENGINE v3.8
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px]">
          <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center gap-1.5">
            <Compass className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: "12s" }} />
            Azimuth 180° • True South
          </span>
          <span className="hidden sm:inline-block px-2 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-white/5">
            Tilt 18.5°
          </span>
        </div>
      </div>

      {/* Main Grid: Interactive Rooftop Canvas & Live Telemetry Inspector */}
      <div className="mt-5 grid grid-cols-1 xl:grid-cols-12 gap-5">
        {/* Left Column (Canvas): Rooftop CAD Simulation */}
        <div className="xl:col-span-8 relative rounded-2xl border border-white/[0.08] bg-[#07090e] h-[320px] sm:h-[360px] flex flex-col justify-between p-4 overflow-hidden">
          {/* Subtle Industrial Grid */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />

          {/* Roof Shadow-Free Boundary */}
          <div className="absolute inset-4 rounded-xl border border-dashed border-sky-400/30 pointer-events-none flex items-start justify-end p-2">
            <span className="text-[10px] font-mono text-sky-400/70 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-400/20 backdrop-blur-sm">
              Shadow-Free Roof Boundary: 650 sq.ft
            </span>
          </div>

          {/* Panel Array Interactive Placement */}
          <div className="relative z-10 m-auto flex flex-wrap items-center justify-center gap-2 max-w-[90%] p-3 rounded-xl bg-slate-950/40 border border-white/[0.05] backdrop-blur-sm">
            {Array.from({ length: panelCount }).map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.02, type: "spring", stiffness: 350, damping: 22 }}
                className={`relative rounded-md transition-all duration-200 cursor-pointer group/panel ${
                  orientation === "portrait"
                    ? "w-11 h-18 sm:w-12 sm:h-20"
                    : "w-20 h-11 sm:w-22 sm:h-12"
                } bg-gradient-to-b from-sky-900/50 via-slate-900/90 to-blue-950/80 border border-sky-400/30 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/20 p-1 flex flex-col justify-between`}
              >
                <div className="flex justify-between items-center text-[7px] font-mono text-sky-300/70">
                  <span>P{idx + 1}</span>
                  <Zap className="w-2 h-2 text-amber-400 group-hover/panel:text-amber-300" />
                </div>
                {/* Photovoltaic Cell Busbar Lines */}
                <div className="space-y-1 my-auto opacity-30">
                  <div className="w-full h-px bg-sky-300" />
                  <div className="w-full h-px bg-sky-300" />
                  <div className="w-full h-px bg-sky-300" />
                </div>
                <div className="text-[8px] font-mono text-center text-slate-300 font-medium">
                  {wattage}W
                </div>
              </motion.div>
            ))}
          </div>

          {/* Canvas Bottom Control Bar */}
          <div className="relative z-20 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/[0.06] bg-[#07090e]/80 backdrop-blur-md rounded-lg px-2">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono">Capacity:</span>
              <span className="text-sm font-bold font-mono text-amber-400">{systemKw} kW</span>
              <span className="text-xs text-slate-500 font-mono">({roofAreaOccupied} sq.ft)</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setPanelCount((c) => (c <= 8 ? 20 : c - 2))}
                className="px-2.5 py-1 text-xs font-mono bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-lg text-slate-300 transition-colors cursor-pointer"
              >
                -2 Panels
              </button>
              <button
                onClick={() => setPanelCount((c) => (c >= 22 ? 8 : c + 2))}
                className="px-2.5 py-1 text-xs font-mono bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-lg text-slate-300 transition-colors cursor-pointer"
              >
                +2 Panels
              </button>
              <button
                onClick={() => setOrientation((o) => (o === "portrait" ? "landscape" : "portrait"))}
                className="p-1.5 text-xs bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                title="Rotate Orientation"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Live Proposal & Commercial Sizing Inspector */}
        <div className="xl:col-span-4 flex flex-col justify-between space-y-4">
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-900/50 border border-white/[0.07] backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                Annual Yield
              </span>
              <span className="text-lg font-bold font-mono text-white block mt-0.5">
                {annualGenKwh.toLocaleString("en-IN")}
                <span className="text-xs font-normal text-slate-400 ml-1">kWh</span>
              </span>
              <span className="text-[10px] text-emerald-400 font-mono block mt-1 flex items-center gap-1">
                <TrendingUp className="w-2.5 h-2.5" /> High Irradiance
              </span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/50 border border-white/[0.07] backdrop-blur-md">
              <span className="text-[10px] font-mono text-slate-400 block uppercase tracking-wider">
                Estimated Savings
              </span>
              <span className="text-lg font-bold font-mono text-emerald-400 block mt-0.5">
                ₹{monthlySavingsInr.toLocaleString("en-IN")}
                <span className="text-xs font-normal text-slate-400 ml-1">/mo</span>
              </span>
              <span className="text-[10px] text-slate-400 font-mono block mt-1">
                ₹{annualSavingsInr.toLocaleString("en-IN")} / yr
              </span>
            </div>
          </div>

          {/* Equipment Tier Selector */}
          <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/[0.07] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300 font-semibold uppercase tracking-wider">
                Hardware Config Tier
              </span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                Verified Trader Link
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "standard", name: "Standard", desc: "Tier-1 Mono", tag: "₹52k" },
                { id: "premium", name: "Premium ★", desc: "TopCon Bi-facial", tag: "₹57.5k" },
                { id: "executive", name: "Executive", desc: "Micro-Inverters", tag: "₹66k" },
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setSelectedTier(tier.id as any)}
                  className={`p-2 rounded-xl text-left transition-all border cursor-pointer ${
                    selectedTier === tier.id
                      ? "bg-amber-500/15 border-amber-500/50 text-white shadow-md shadow-amber-500/10"
                      : "bg-slate-900/40 border-white/[0.05] text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <span className="text-[11px] font-bold block">{tier.name}</span>
                  <span className="text-[9px] text-slate-400 block truncate">{tier.desc}</span>
                  <span className="text-[10px] font-mono text-amber-400 font-semibold block mt-1">
                    {tier.tag}/kW
                  </span>
                </button>
              ))}
            </div>

            {/* Financial Ledger */}
            <div className="pt-3 border-t border-white/[0.06] space-y-2 text-xs font-mono">
              <div className="flex justify-between text-slate-400">
                <span>Gross Turnkey EPC:</span>
                <span className="text-white">₹{grossCost.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Govt Subsidy (CFA):</span>
                <span className="text-emerald-400">-₹{centralSubsidy.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between font-bold text-sm pt-1 border-t border-white/[0.05]">
                <span className="text-slate-200">Net Client Investment:</span>
                <span className="text-amber-400">₹{netPayable.toLocaleString("en-IN")}</span>
              </div>
              <div className="text-[11px] text-slate-400 text-right">
                Payback Period: <strong className="text-emerald-400">{paybackYears} Years</strong>
              </div>
            </div>
          </div>

          {/* Action Trigger */}
          <button
            onClick={() => setShowQuoteDrawer(true)}
            className="w-full py-3.5 px-4 rounded-xl font-bold text-xs font-mono uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>Generate Client Dossier PDF</span>
          </button>
        </div>
      </div>

      {/* Instant Proposal Drawer Modal */}
      <AnimatePresence>
        {showQuoteDrawer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setShowQuoteDrawer(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#0c1018] p-6 sm:p-8 space-y-6 shadow-2xl relative"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Client Proposal Ready</h4>
                    <p className="text-xs text-slate-400 font-mono">SuryaNexa Pre-Quotation v2.4</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowQuoteDrawer(false)}
                  className="text-slate-400 hover:text-white text-xs font-mono px-2 py-1 rounded bg-slate-900"
                >
                  ESC
                </button>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900/50 border border-white/[0.05] flex justify-between">
                  <span className="text-slate-400">Rooftop System Capacity</span>
                  <span className="text-amber-400 font-bold">{systemKw} kW Solar Array</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-white/[0.05] flex justify-between">
                  <span className="text-slate-400">Hardware Tier Selected</span>
                  <span className="text-white capitalize">{selectedTier} (Verified DCR Tier-1)</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-white/[0.05] flex justify-between">
                  <span className="text-slate-400">PM Surya Ghar Subsidy Amount</span>
                  <span className="text-emerald-400 font-bold">₹{centralSubsidy.toLocaleString("en-IN")}</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/50 border border-white/[0.05] flex justify-between">
                  <span className="text-slate-400">Total Net Cost to Customer</span>
                  <span className="text-amber-400 font-bold text-sm">₹{netPayable.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  onClick={() => {
                    alert("Mock: Proposal PDF generated and WhatsApp dispatch triggered!");
                    setShowQuoteDrawer(false);
                  }}
                  className="flex-1 py-3.5 rounded-xl font-bold text-xs bg-emerald-500 hover:bg-emerald-400 text-slate-950 flex items-center justify-center gap-2 transition-all cursor-pointer font-mono"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Send via WhatsApp API</span>
                </button>
                <button
                  onClick={() => setShowQuoteDrawer(false)}
                  className="px-5 py-3.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


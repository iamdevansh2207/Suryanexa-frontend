"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Zap, Shield, BatteryCharging, ArrowUpRight } from "lucide-react";

export function ExpandingAccordionBands() {
  const [activeBand, setActiveBand] = useState<number>(0);

  const bands = [
    {
      id: 0,
      title: "Solar Panels",
      subtitle: "Tier-1 Mono Perc & TopCon Bi-Facial Modules",
      specs: "Wattage: 545W - 700W • Efficiency: 22.8% • DCR / ALMM Certified",
      bgClass: "bg-[#0d3b4c]",
      textColor: "text-white",
      badgeBg: "bg-sky-500/20 text-sky-300 border-sky-400/30",
      description: "Monocrystalline panels of truncate or bifacial cell design. Sourced directly from manufacturers for utility, commercial, and residential projects.",
      hardwareItems: [
        { label: "TopCon 580W Bi-Facial", spec: "99% Bifaciality", tag: "Hot Seller" },
        { label: "Mono PERC 550W DCR", spec: "PM Surya Ghar", tag: "Verified DCR" },
        { label: "All-Black Shingled", spec: "Architectural EPC", tag: "Premium" },
      ]
    },
    {
      id: 1,
      title: "Smart Inverters",
      subtitle: "Robust Grid-Tie, Hybrid & Microinverter Architectures",
      specs: "Capacities: 3kW - 120kW • MPPT Channels: Dual to Quad • 98.6% Efficiency",
      bgClass: "bg-[#f5f1e8]",
      textColor: "text-[#1c1917]",
      badgeBg: "bg-[#d97706]/15 text-[#d97706] border-[#d97706]/30",
      description: "Next-gen silicon carbide and IGBT power conditioning systems. Featuring real-time Wi-Fi/4G telemetry and automatic grid-islanding protection.",
      hardwareItems: [
        { label: "Hybrid 10kW 3-Phase", spec: "Battery Ready", tag: "Smart Storage" },
        { label: "Commercial 50kW On-Grid", spec: "Quad MPPT", tag: "Industrial" },
        { label: "Microinverter 800W Dual", spec: "Per-Panel Optimization", tag: "Roof Safety" },
      ]
    },
    {
      id: 2,
      title: "Lithium Energy Storage",
      subtitle: "High-Voltage LFP Packs, Rack Mounts & Battery Management Systems",
      specs: "Life: 6000+ Cycles (15 Yrs) • Chemistry: LiFePO4 • Modular Expansion",
      bgClass: "bg-[#84cc16]",
      textColor: "text-[#1c1917]",
      badgeBg: "bg-[#15803d]/20 text-[#0d532b] border-[#15803d]/30",
      description: "Modern energy storage packs, connections, rails, and hardware. Complete zero-downtime backup for residential and industrial microgrids.",
      hardwareItems: [
        { label: "Modular LFP 5.12 kWh Pack", spec: "Plug & Play Stack", tag: "Top Rated" },
        { label: "High-Voltage 20 kWh Commercial", spec: "BMS Integrated", tag: "Factory Backup" },
        { label: "Wall-Mount PowerVault 10kW", spec: "Slimline Enclosure", tag: "Residential" },
      ]
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#fdfbf7] border-b border-[#ede6d8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78644e] bg-[#f4eee2] px-3.5 py-1.5 rounded-full border border-[#e2d6c0] inline-block mb-3 font-bold">
            HORIZONTAL EXPANDING ACCORDION BANDS
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1c1917] font-heading tracking-tight leading-tight">
            Wholesale Catalog at Your Fingertips
          </h2>
          <p className="mt-3 text-[#57534e] text-sm sm:text-base font-body">
            Explore verified Tier-1 components locked with direct manufacturer pricing. Click any band to expand specs.
          </p>
        </div>

        {/* 3 Horizontal Expanding Bands */}
        <div className="space-y-4">
          {bands.map((band, idx) => {
            const isExpanded = activeBand === idx;
            return (
              <motion.div
                key={band.id}
                layout
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                onClick={() => setActiveBand(idx)}
                className={`rounded-[32px] p-6 sm:p-10 transition-all cursor-pointer shadow-lg overflow-hidden relative ${band.bgClass} ${band.textColor}`}
              >
                {/* Header Strip of the Band */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className={`text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full border font-bold ${band.badgeBg}`}>
                      CATALOG SECTION 0{idx + 1}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-extrabold font-heading mt-2">
                      {band.title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-80 font-body mt-1 max-w-xl">
                      {band.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono opacity-80 hidden sm:inline-block">
                      {isExpanded ? "Collapse Specs" : "Click to Expand"}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center">
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Drawer Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-8 border-t border-current/15 mt-8"
                    >
                      <p className="text-sm opacity-90 max-w-3xl leading-relaxed mb-6 font-body">
                        {band.description}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {band.hardwareItems.map((item, hIdx) => (
                          <div
                            key={hIdx}
                            className="p-5 rounded-2xl bg-black/5 dark:bg-white/10 border border-current/10 backdrop-blur-sm space-y-2 hover:bg-black/10 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/10 font-bold">
                                {item.tag}
                              </span>
                              <ArrowUpRight className="w-4 h-4 opacity-70" />
                            </div>
                            <h4 className="text-sm font-bold font-heading">{item.label}</h4>
                            <p className="text-xs font-mono opacity-80">{item.spec}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs opacity-90">
                        <span>{band.specs}</span>
                        <a
                          href="#register"
                          className="px-5 py-2.5 rounded-full font-bold bg-current text-current-contrast font-body shadow-md hover:scale-105 transition-transform"
                          style={{
                            backgroundColor: idx === 0 ? "#ffffff" : idx === 1 ? "#261c14" : "#1c1917",
                            color: idx === 0 ? "#0d3b4c" : "#ffffff",
                          }}
                        >
                          Reserve Bulk Allocation →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


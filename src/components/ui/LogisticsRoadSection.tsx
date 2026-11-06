"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Building2,
  Store,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Package,
  MapPin,
  Sparkles,
  PhoneCall
} from "lucide-react";

export function LogisticsRoadSection() {
  const [activeStop, setActiveStop] = useState<number>(1);

  const stops = [
    {
      id: 0,
      title: "Trader Warehouses",
      subtitle: "Tier-1 Bulk Supply Yards & Depots",
      desc: "Massive inventory of TopCon, DCR Mono PERC panels, and hybrid inverters stored under strict barcode tracking.",
      badge: "Stock Verified",
      color: "#d97706",
    },
    {
      id: 1,
      title: "Connected Dispatch",
      subtitle: "GPS-Tracked Transit with Escrow Lock",
      desc: "Trucks dispatched across national highways. GPS coordinates and milestone smart contracts ensure zero payment defaults.",
      badge: "Live Fleet Sync",
      color: "#15803d",
    },
    {
      id: 2,
      title: "Vendor Storefronts & Depots",
      subtitle: "Local Regional Installation Centers",
      desc: "Local EPC contractors and rooftop installers receive verified consignments with mandatory video unboxing proof.",
      badge: "Zero Damage Claims",
      color: "#261c14",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#f7f4ed] border-y border-[#e8dfcf] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#78644e] bg-[#ede5d5] px-3.5 py-1.5 rounded-full border border-[#dcd1be] inline-block mb-3 font-bold">
            WINDING S-CURVE ANIMATED LOGISTICS ROAD
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1c1917] font-heading tracking-tight leading-tight">
            A Handshake Across India — <br className="hidden sm:block" />
            <span className="text-[#d97706]">Our Logistics Journey</span>
          </h2>
          <p className="mt-3 text-[#57534e] text-sm sm:text-base font-body">
            Watch how bulk solar equipment moves seamlessly from national manufacturer warehouses to local rooftop installers.
          </p>
        </div>

        {/* 3 Interactive Milestone Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stops.map((stop, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStop(idx)}
              className={`p-6 rounded-3xl transition-all cursor-pointer border ${
                activeStop === idx
                  ? "bg-white border-[#d97706] shadow-xl shadow-[#d97706]/10 scale-[1.02]"
                  : "bg-[#fbf9f4] border-[#e2d9c8] hover:border-[#1c1917]/20"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs font-mono font-bold px-2.5 py-1 rounded-full text-white"
                  style={{ backgroundColor: stop.color }}
                >
                  STOP 0{idx + 1}
                </span>
                <span className="text-[11px] font-mono text-[#78716c] font-semibold">
                  {stop.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1c1917] font-heading">
                {stop.title}
              </h3>
              <p className="text-xs font-semibold text-[#d97706] font-body mt-0.5">
                {stop.subtitle}
              </p>
              <p className="text-xs text-[#57534e] font-body mt-2 leading-relaxed">
                {stop.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ILLUSTRATIVE S-CURVE LOGISTICS HIGHWAY CANVAS */}
        <div className="relative rounded-[36px] bg-[#ffffff] border border-[#e2d9c8] p-6 sm:p-12 shadow-2xl shadow-[#261c14]/5 overflow-hidden">
          {/* S-CURVE HIGHWAY VECTOR ROADWAY */}
          <div className="relative w-full h-[280px] sm:h-[340px] flex items-center justify-center">
            <svg
              className="w-full h-full"
              viewBox="0 0 1000 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Highway Bed (Light Warm Gray / Stone) */}
              <path
                d="M 50 160 C 200 40, 320 40, 500 160 C 680 280, 800 280, 950 160"
                stroke="#e5ded2"
                strokeWidth="56"
                strokeLinecap="round"
              />

              {/* Asphalt Road Surface */}
              <path
                d="M 50 160 C 200 40, 320 40, 500 160 C 680 280, 800 280, 950 160"
                stroke="#d3c9b9"
                strokeWidth="42"
                strokeLinecap="round"
              />

              {/* Animated Center Dashed Road Guideline */}
              <path
                d="M 50 160 C 200 40, 320 40, 500 160 C 680 280, 800 280, 950 160"
                stroke="#ffffff"
                strokeWidth="4"
                strokeDasharray="12 12"
                strokeLinecap="round"
                className="animate-pulse"
              />

              {/* Green Logistics Waypoints */}
              <circle cx="120" cy="130" r="14" fill="#d97706" />
              <circle cx="120" cy="130" r="22" stroke="#d97706" strokeWidth="2" strokeDasharray="4 4" className="animate-spin" />

              <circle cx="500" cy="160" r="14" fill="#15803d" />
              <circle cx="500" cy="160" r="24" stroke="#15803d" strokeWidth="2" strokeDasharray="4 4" className="animate-spin" />

              <circle cx="880" cy="190" r="14" fill="#261c14" />
              <circle cx="880" cy="190" r="22" stroke="#261c14" strokeWidth="2" strokeDasharray="4 4" className="animate-spin" />
            </svg>

            {/* LEFT MILESTONE ICON: Trader Warehouses & Bulk Storage */}
            <div className="absolute left-4 sm:left-12 top-6 sm:top-10 flex flex-col items-center select-none">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#faf7f2] border-2 border-[#e2d9c8] shadow-lg flex items-center justify-center text-[#d97706] mb-2 transform -rotate-2 hover:rotate-0 transition-transform">
                <Building2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#1c1917] bg-[#fdfbf7] px-2 py-0.5 rounded border border-[#e8dfcf]">
                1. Central Depot
              </span>
            </div>

            {/* CENTER MOVING TRUCKS ON ROADWAY */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{
                  x: [-80, 80, -80],
                  y: [10, -10, 10],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="flex items-center gap-6"
              >
                {/* Green Solar Delivery Truck */}
                <div className="p-3 rounded-2xl bg-[#15803d] text-white shadow-xl shadow-[#15803d]/30 flex items-center gap-2 border border-white/20">
                  <Truck className="w-6 h-6 text-white" />
                  <div className="text-[10px] font-mono font-bold leading-tight hidden sm:block">
                    <span>DISPATCH ACTIVE</span>
                    <span className="block text-[#a7f3d0]">GPS: MH → DL</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT MILESTONE ICON: Vendor Storefront & Local Rooftop */}
            <div className="absolute right-4 sm:right-12 bottom-6 sm:bottom-10 flex flex-col items-center select-none">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#faf7f2] border-2 border-[#e2d9c8] shadow-lg flex items-center justify-center text-[#15803d] mb-2 transform rotate-2 hover:rotate-0 transition-transform">
                <Store className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <span className="text-[11px] font-mono font-bold text-[#1c1917] bg-[#fdfbf7] px-2 py-0.5 rounded border border-[#e8dfcf]">
                3. Local Installer
              </span>
            </div>
          </div>

          {/* S-Curve Highway Footer Summary Badges */}
          <div className="mt-8 pt-6 border-t border-[#f0eae1] grid grid-cols-2 sm:grid-cols-4 gap-4 text-center font-mono text-xs">
            <div className="p-3 bg-[#faf7f2] rounded-2xl border border-[#ece4d6]">
              <span className="text-[10px] text-[#78716c] block">Verified Dispatch</span>
              <span className="font-bold text-[#15803d]">100% Barcode Tracked</span>
            </div>
            <div className="p-3 bg-[#faf7f2] rounded-2xl border border-[#ece4d6]">
              <span className="text-[10px] text-[#78716c] block">Pricing Transparency</span>
              <span className="font-bold text-[#d97706]">Direct Trader Negotiated</span>
            </div>
            <div className="p-3 bg-[#faf7f2] rounded-2xl border border-[#ece4d6]">
              <span className="text-[10px] text-[#78716c] block">Intermediary Broker</span>
              <span className="font-bold text-[#1c1917]">Zero Middlemen</span>
            </div>
            <div className="p-3 bg-[#faf7f2] rounded-2xl border border-[#ece4d6]">
              <span className="text-[10px] text-[#78716c] block">Transit SLA</span>
              <span className="font-bold text-[#15803d]">Escrow-Protected</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


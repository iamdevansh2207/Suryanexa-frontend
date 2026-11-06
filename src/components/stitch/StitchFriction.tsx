"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck } from "lucide-react";
import PhoneMockDashboard from "./PhoneMockDashboard";

const COMPARISONS = [
  {
    painTitle: "Unverified WhatsApp trade groups",
    painDesc:
      "Shadow brokers quote ghost inventory, inflate margins, and vanish when panel micro-cracks occur on site.",
    nexaTitle: "KYB-Audited Trader Command Center",
    nexaDesc:
      "Only OEM-authorized direct desks and verified stockists with bonded warehouses can list pallets on the open network.",
  },
  {
    painTitle: "High-intent rooftop leads get poached",
    painDesc:
      "Central CRM admins and call center staff routinely leak your high-margin commercial leads to competitor installers.",
    nexaTitle: "Blind-Vault™ Lead Privacy Protection",
    nexaDesc:
      "Envelope privacy protection ensures customer details and project margins are sealed and strictly owned by your firm.",
  },
  {
    painTitle: "Transit micro-cracks spark endless disputes",
    painDesc:
      "Truck drivers drop pallets, installers sign blindly, and OEM warranties get denied leaving EPCs with 6-week frozen cash.",
    nexaTitle: "Timestamped 180s Unloading Video Protocol",
    nexaDesc:
      "Unboxing video with barcode scan directly unlocks the delivery escrow or initiates instantaneous carrier insurance compensation.",
  },
  {
    painTitle: "Forced single-distributor bundled kits",
    painDesc:
      "Distributors tie in substandard inverters or mounting brackets to offload aging stock, destroying your project efficiency.",
    nexaTitle: "Cross-Trader Spot Engine & Kit Configurator",
    nexaDesc:
      "Mix Tier-1 TOPCon modules from Trader A with hybrid inverters from Trader B for maximum generation efficiency at spot prices.",
  },
];

export default function StitchFriction() {
  return (
    <section className="py-24 lg:py-32 bg-white border-t border-zinc-100 relative" id="friction">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-zinc-950 tracking-tight leading-tight">
            The solar trade still runs on chaos. <br />
            We run it on <span className="text-emerald-700">verified protocol.</span>
          </h2>
          <p className="text-base text-zinc-700 mt-4 max-w-2xl mx-auto font-sans leading-relaxed">
            Compare the friction of legacy multi-tier intermediaries against the automated trust of SuryaNexa, powered on-site by our mobile Field ERP.
          </p>
        </motion.div>

        {/* 2-Column Split: Mobile Mock Dashboard (Left) + Clean Aligned Comparisons (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Phone Mock Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col items-center justify-center"
          >
            <PhoneMockDashboard />
          </motion.div>

          {/* RIGHT: Clean Editorial Comparison List (No Cards / No Box Wrappers) */}
          <div className="lg:col-span-7">
            {/* Column Headers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 px-1 pb-4 mb-2 border-b border-zinc-200 text-xs font-mono font-bold uppercase tracking-wider">
              <span className="text-rose-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Legacy Friction (Chaos)
              </span>
              <span className="text-emerald-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                SuryaNexa Verified Protocol
              </span>
            </div>

            {/* Clean Rows List */}
            <div className="divide-y divide-zinc-200/70">
              {COMPARISONS.map((row, idx) => (
                <motion.div
                  key={row.painTitle}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 ${
                    idx !== 0 ? "pt-6 sm:pt-7" : "pt-2"
                  } pb-6 sm:pb-7`}
                >
                  {/* WRONG (Legacy Friction) */}
                  <div className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-rose-600 stroke-[2.5]" />
                    </span>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold font-display text-zinc-900 leading-snug">
                        {row.painTitle}
                      </h4>
                      <p className="text-xs text-zinc-600 leading-relaxed font-sans mt-1.5">
                        {row.painDesc}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT (SuryaNexa Solution Protocol) */}
                  <div className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[2.5]" />
                    </span>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold font-display text-zinc-950 leading-snug">
                        {row.nexaTitle}
                      </h4>
                      <p className="text-xs text-zinc-700 leading-relaxed font-sans mt-1.5">
                        {row.nexaDesc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

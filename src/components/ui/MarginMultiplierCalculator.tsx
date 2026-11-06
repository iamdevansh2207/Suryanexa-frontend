"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, ShieldAlert, Clock, ArrowRight, Zap } from "lucide-react";

export function MarginMultiplierCalculator() {
  const [monthlyKw, setMonthlyKw] = useState<number>(50);
  const [pricePerKw, setPricePerKw] = useState<number>(55000);

  // Financial Modeling Formulas based on Indian Solar EPC ground data:
  // 1. Average lead leakage without Blind Vault: ~12% of high-ticket inquiries lost to exfiltration
  // 2. Average drafting time per CAD quote without SuryaCalc: 3.5 hours
  // 3. Average transit damage & dispute claim rate without video unloading: ~2.8% of consignment value
  const monthlyRevenue = monthlyKw * pricePerKw;
  const annualRevenue = monthlyRevenue * 12;

  // Stolen Leads Recovered: ~12% recovery on conversion pipeline
  const recoveredLeadValueAnnual = Math.round(annualRevenue * 0.12);

  // Drafting hours saved: ~85% reduction in CAD drafting time (from 4 hours to 60s)
  const quotesPerMonth = Math.round(monthlyKw / 3.5);
  const hoursReclaimedPerYear = Math.round(quotesPerMonth * 3.5 * 12 * 0.85);

  // Freight disputes eliminated: ~2.8% saved on procurement dispute overhead
  const disputeLossesEliminatedAnnual = Math.round(annualRevenue * 0.028);

  // Total Net Profit Lift
  const totalNetProfitLift = recoveredLeadValueAnnual + disputeLossesEliminatedAnnual;

  return (
    <section id="roi-calculator" className="py-24 px-6 border-b border-[#ede6d8] bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#15803d] bg-[#dcfce7] px-3.5 py-1.5 rounded-full border border-[#bbf7d0] inline-block mb-3 font-semibold">
            Interactive Business Case
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1c1917] font-heading tracking-tight">
            Calculate Your Reclaimed Annual Profit
          </h2>
          <p className="mt-3 text-[#57534e] text-sm sm:text-base font-body">
            See the exact financial impact of eliminating internal lead theft, accelerating quotes from 48 hours to 60 seconds, and ending pallet damage disputes.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl border border-[#e2d9c8] bg-white p-6 sm:p-10 shadow-xl shadow-[#261c14]/5">
          {/* Left Column: Interactive Slider Controls */}
          <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-6">
            {/* Slider 1: Monthly Rooftop kW */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-[#1c1917] font-heading">
                  Monthly Installed Capacity (kW)
                </label>
                <span className="font-mono text-base font-extrabold text-[#d97706] bg-[#fef3c7] px-3 py-1 rounded-xl border border-[#fde68a]">
                  {monthlyKw} kW / mo
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="250"
                step="5"
                value={monthlyKw}
                onChange={(e) => setMonthlyKw(Number(e.target.value))}
                className="w-full h-2.5 bg-[#ede6d8] rounded-lg appearance-none cursor-pointer accent-[#d97706]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#a8a29e]">
                <span>10 kW (Starter EPC)</span>
                <span>100 kW</span>
                <span>250 kW (Enterprise EPC)</span>
              </div>
            </div>

            {/* Slider 2: Average EPC Turnkey Price per kW */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-[#1c1917] font-heading">
                  Average Turnkey Project Rate (₹ / kW)
                </label>
                <span className="font-mono text-base font-extrabold text-[#15803d] bg-[#dcfce7] px-3 py-1 rounded-xl border border-[#bbf7d0]">
                  ₹{pricePerKw.toLocaleString("en-IN")} / kW
                </span>
              </div>
              <input
                type="range"
                min="45000"
                max="80000"
                step="1000"
                value={pricePerKw}
                onChange={(e) => setPricePerKw(Number(e.target.value))}
                className="w-full h-2.5 bg-[#ede6d8] rounded-lg appearance-none cursor-pointer accent-[#15803d]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#a8a29e]">
                <span>₹45,000 (Standard DCR)</span>
                <span>₹60,000 (TopCon)</span>
                <span>₹80,000 (Premium Micro)</span>
              </div>
            </div>

            {/* Context Note */}
            <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#ece4d6] text-xs text-[#57534e] font-body flex items-start gap-3">
              <Zap className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
              <span>
                Based on audited operational figures from 40+ verified Indian solar contractors across Gujarat, Rajasthan, Maharashtra, and Delhi-NCR.
              </span>
            </div>
          </div>

          {/* Right Column: Live Yield & Savings Display */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-[#261c14] to-[#1c140d] text-white p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#eab308]/15 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#eab308] font-bold block mb-1">
                Projected Net Annual Margin Expansion
              </span>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight">
                +₹{totalNetProfitLift.toLocaleString("en-IN")}
                <span className="text-xs font-normal text-slate-400 ml-2 font-body">/ year</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <span className="flex items-center gap-2 text-slate-300">
                  <ShieldAlert className="w-4 h-4 text-[#eab308]" /> Stolen Leads Protected:
                </span>
                <span className="font-bold text-[#eab308] text-sm">
                  +₹{recoveredLeadValueAnnual.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <span className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-[#38bdf8]" /> CAD Engineering Reclaimed:
                </span>
                <span className="font-bold text-[#38bdf8] text-sm">
                  {hoursReclaimedPerYear} Hours / yr
                </span>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                <span className="flex items-center gap-2 text-slate-300">
                  <TrendingUp className="w-4 h-4 text-[#34d399]" /> Shipping Claims Eradicated:
                </span>
                <span className="font-bold text-[#34d399] text-sm">
                  +₹{disputeLossesEliminatedAnnual.toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#register"
                className="w-full py-4 rounded-xl font-bold text-xs uppercase tracking-wider font-mono bg-gradient-to-r from-[#d97706] to-[#f59e0b] hover:from-[#b45309] hover:to-[#d97706] text-white shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] cursor-pointer"
              >
                <span>Lock In Your Founding Margin Multiplier</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


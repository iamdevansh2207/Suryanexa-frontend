"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wifi,
  Battery,
  Signal,
  Bell,
  Camera,
  CheckCircle2,
  TrendingUp,
  MapPin,
  CheckSquare,
  Square,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  Layers,
  Compass,
  Database,
  ShieldCheck,
  Sun
} from "lucide-react";

export default function PhoneMockDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "projects" | "db" | "security">("overview");
  const [task1Checked, setTask1Checked] = useState(true);
  const [task2Checked, setTask2Checked] = useState(false);
  const [task3Checked, setTask3Checked] = useState(false);

  return (
    <div className="relative mx-auto select-none">
      {/* Ambient soft glow behind phone matching site emerald tones */}
      <div className="absolute -inset-4 bg-emerald-500/10 rounded-[60px] blur-2xl pointer-events-none" />

      {/* Realistic Smartphone Hardware Chassis (Titanium Black Frame) */}
      <div className="relative w-[310px] sm:w-[335px] h-[640px] sm:h-[680px] bg-zinc-950 rounded-[50px] p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.15)] border-[5px] border-zinc-800">
        {/* Hardware Side Buttons */}
        <div className="absolute -left-[9px] top-24 w-[4px] h-9 bg-zinc-700 rounded-l-md" />
        <div className="absolute -left-[9px] top-36 w-[4px] h-12 bg-zinc-700 rounded-l-md" />
        <div className="absolute -left-[9px] top-52 w-[4px] h-12 bg-zinc-700 rounded-l-md" />
        <div className="absolute -right-[9px] top-32 w-[4px] h-16 bg-zinc-700 rounded-r-md" />

        {/* Screen Bezel (Light Theme Canvas matching Desktop Dashboard) */}
        <div className="w-full h-full rounded-[40px] overflow-hidden bg-[#eef2f6] text-slate-900 flex flex-col justify-between relative border border-slate-300/80 shadow-inner">
          
          {/* 1. TOP HARDWARE NOTCH / DYNAMIC ISLAND & STATUS BAR */}
          <div className="relative pt-2.5 px-5 z-20 bg-white/90 backdrop-blur-md border-b border-slate-200/60">
            <div className="flex items-center justify-between text-[11px] font-sans font-semibold text-slate-800">
              <span className="font-bold">9:41</span>
              {/* Dynamic Island Pill */}
              <div className="w-24 h-4 bg-black rounded-full flex items-center justify-between px-2 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="w-2.5 h-2.5 rounded-full bg-zinc-900 border border-zinc-800" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-700">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5 text-emerald-600" />
              </div>
            </div>

            {/* APP HEADER BAR */}
            <div className="flex items-center justify-between pt-2 pb-2.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-zinc-950 p-1 flex items-center justify-center shadow-xs">
                  <img src="/solar-logo-card.png" alt="Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold font-display text-slate-900 tracking-tight flex items-center gap-1 leading-none">
                    SuryaNexa <span className="text-[8px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-1 py-0.2 rounded">FIELD ERP</span>
                  </h4>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">Dr. Noor · Tidewell EPC</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-[9px] font-mono font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Live</span>
                </div>
                <div className="relative">
                  <button className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 flex items-center justify-center text-slate-700 transition">
                    <Bell className="w-3.5 h-3.5" />
                  </button>
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-rose-500" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. SCROLLABLE SCREEN CONTENT */}
          <div className="flex-1 overflow-y-auto px-3 py-2.5 space-y-2.5 no-scrollbar text-left">
            
            {/* =========================================================================
                A. TOP GRAPH: TIMELINE PROGRESS / MILESTONE S-CURVE (REQUESTED AT TOP)
               ========================================================================= */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] p-3">
              {/* Header */}
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center">
                    <TrendingUp className="w-3 h-3" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold font-display text-slate-900 leading-tight">
                      Timeline progress
                    </h4>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[8px] font-mono font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-1.5 py-0.5 rounded-full">
                    +38% vs target
                  </span>
                  <span className="text-[9px] font-sans text-slate-500 font-semibold bg-slate-100 px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
                    All <ChevronDown className="w-2.5 h-2.5" />
                  </span>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-3 text-[8.5px] font-sans font-semibold text-slate-500 mb-1">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-0.5 bg-slate-300 inline-block rounded" /> Planned
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-0.5 bg-sky-600 inline-block rounded" /> Actual
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-0.5 bg-emerald-500 inline-block rounded" /> Forecast
                </span>
              </div>

              {/* SVG Curve Chart */}
              <div className="relative h-20 my-1 flex items-end">
                <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="phoneCurveGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0284c7" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#0284c7" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Shaded Area */}
                  <path
                    d="M 0 75 Q 60 70, 100 45 T 200 10 L 200 80 L 0 80 Z"
                    fill="url(#phoneCurveGradient)"
                  />
                  {/* Forecast dashed line */}
                  <path
                    d="M 140 28 L 200 10"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="3 3"
                  />
                  {/* Actual Curve */}
                  <path
                    d="M 0 75 Q 60 70, 100 45 T 140 28"
                    fill="none"
                    stroke="#0284c7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Current Position Marker */}
                  <circle cx="140" cy="28" r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="2" />
                </svg>

                {/* Floating "Today" Pin Tooltip */}
                <span className="absolute top-1 right-12 text-[8px] font-sans font-bold bg-slate-900 text-white px-1.5 py-0.5 rounded shadow-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Today · 95% On-track
                </span>
              </div>

              {/* Month Ticks */}
              <div className="flex justify-between text-[8px] font-sans text-slate-400 font-semibold pt-1 border-t border-slate-100">
                <span>Apr</span>
                <span>Jun</span>
                <span>Aug</span>
                <span className="text-slate-900 font-bold">Oct</span>
                <span>Dec</span>
                <span>Mar</span>
              </div>

              {/* Chart Footer Info */}
              <div className="pt-1.5 mt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px] font-sans">
                <span className="font-bold text-sky-700">Variance: &lt;1.2%</span>
                <span className="text-slate-500 font-medium">100% compliant SLD</span>
              </div>
            </div>

            {/* =========================================================================
                B. AI PROJECT INSIGHTS CARD (DEEP FOREST EMERALD FROM DESKTOP)
               ========================================================================= */}
            <div className="bg-[#064e3b] text-white rounded-2xl border border-emerald-600/30 p-3 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-400/10 rounded-full blur-xl pointer-events-none" />

              {/* Title */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                  </div>
                  <span className="text-[11px] font-sans font-bold text-emerald-100">
                    AI project insights
                  </span>
                </div>
                <span className="text-[9px] font-mono text-emerald-300/80 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-700/50">
                  REAL-TIME
                </span>
              </div>

              {/* Radial Score & Confidence */}
              <div className="flex items-center gap-2.5 mb-2">
                <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                  <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#0f3d32"
                      strokeWidth="3.5"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="3.5"
                      strokeDasharray="75, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute text-center leading-none">
                    <span className="font-display font-black text-xs text-white block">
                      75
                    </span>
                    <span className="text-[6.5px] font-sans text-emerald-300 uppercase">
                      /100
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-[10.5px] font-sans font-bold text-white leading-tight">
                    Delivery confidence
                  </p>
                  <p className="text-[9.5px] font-sans text-emerald-200/80 mt-0.5 leading-tight">
                    Good chance of on-time delivery across portfolio.
                  </p>
                </div>
              </div>

              {/* Key Insight Box */}
              <div className="p-2 rounded-xl bg-[#03291f] border border-emerald-500/20 text-[9.5px] font-sans">
                <p className="font-bold text-amber-300 flex items-center gap-1 mb-0.5">
                  <span>⚡</span> Key insight
                </p>
                <p className="text-emerald-100/90 leading-snug">
                  Pinecrest will miss COD by ~3 weeks unless transformer lead time is expedited.
                </p>
              </div>

              {/* Link CTA */}
              <button className="mt-2 w-full py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-[9.5px] font-sans font-bold text-white border border-white/15 transition flex items-center justify-center gap-1 cursor-pointer">
                <span>View full AI analysis</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>

            {/* =========================================================================
                C. ROW OF 4 COMPACT PASTEL KPI METRICS (MATCHING DESKTOP COLORS)
               ========================================================================= */}
            <div className="grid grid-cols-4 gap-1.5">
              {/* Active */}
              <div className="bg-[#E6F4EA] border border-[#CEEAD6] text-[#137333] rounded-xl p-1.5 flex flex-col justify-between">
                <span className="text-[8.5px] font-sans font-bold truncate">Active</span>
                <span className="text-base font-extrabold font-display text-slate-900 leading-none my-0.5">7</span>
                <span className="text-[7.5px] font-semibold opacity-85 truncate">+1 qtr</span>
              </div>
              {/* Built */}
              <div className="bg-[#F1F3F4] border border-[#DADCE0] text-[#3C4043] rounded-xl p-1.5 flex flex-col justify-between">
                <span className="text-[8.5px] font-sans font-bold truncate">Built</span>
                <span className="text-base font-extrabold font-display text-slate-900 leading-none my-0.5">32</span>
                <span className="text-[7.5px] font-semibold opacity-85 truncate">+2 yr</span>
              </div>
              {/* Delayed */}
              <div className="bg-[#FCE8E6] border border-[#FAD2CF] text-[#C5221F] rounded-xl p-1.5 flex flex-col justify-between">
                <span className="text-[8.5px] font-sans font-bold truncate">Delayed</span>
                <span className="text-base font-extrabold font-display text-slate-900 leading-none my-0.5">2</span>
                <span className="text-[7.5px] font-semibold opacity-85 truncate">Hold</span>
              </div>
              {/* Pending */}
              <div className="bg-[#FEF7E0] border border-[#FEEFC3] text-[#B06000] rounded-xl p-1.5 flex flex-col justify-between">
                <span className="text-[8.5px] font-sans font-bold truncate">Pending</span>
                <span className="text-base font-extrabold font-display text-slate-900 leading-none my-0.5">13</span>
                <span className="text-[7.5px] font-semibold opacity-85 truncate">3 today</span>
              </div>
            </div>

            {/* =========================================================================
                D. SITE-WISE PERFORMANCE SECTION
               ========================================================================= */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <h4 className="text-[11px] font-bold font-display text-slate-900">
                    Site-wise performance
                  </h4>
                </div>
                <span className="text-[9px] font-sans font-semibold text-emerald-700 hover:underline cursor-pointer">
                  All &gt;
                </span>
              </div>

              <div className="space-y-1.5">
                {/* Site 1 */}
                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="font-bold text-slate-900 truncate text-[10px]">
                      Cedar Flats Solar Farm
                    </p>
                    <span className="text-[7.5px] px-1 py-0.2 rounded font-bold bg-emerald-100 text-emerald-800">
                      On track
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[8.5px] text-slate-500 mb-0.5">
                    <span>Tooele, UT</span>
                    <span className="font-semibold text-slate-800">69%</span>
                  </div>
                  <div className="w-full h-1 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full rounded-full bg-emerald-600 w-[69%]" />
                  </div>
                </div>

                {/* Site 2 */}
                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="font-bold text-slate-900 truncate text-[10px]">
                      Marlow Ridge Battery Storage
                    </p>
                    <span className="text-[7.5px] px-1 py-0.2 rounded font-bold bg-emerald-100 text-emerald-800">
                      On track
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[8.5px] text-slate-500 mb-0.5">
                    <span>Kern, CA</span>
                    <span className="font-semibold text-slate-800">50%</span>
                  </div>
                  <div className="w-full h-1 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full rounded-full bg-sky-600 w-[50%]" />
                  </div>
                </div>

                {/* Site 3 */}
                <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-100">
                  <div className="flex items-center justify-between mb-0.5">
                    <p className="font-bold text-slate-900 truncate text-[10px]">
                      Ashgrove Rooftop Portfolio
                    </p>
                    <span className="text-[7.5px] px-1 py-0.2 rounded font-bold bg-emerald-100 text-emerald-800">
                      On track
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[8.5px] text-slate-500 mb-0.5">
                    <span>Columbus, OH</span>
                    <span className="font-semibold text-slate-800">89%</span>
                  </div>
                  <div className="w-full h-1 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full rounded-full bg-emerald-600 w-[89%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                E. MY TASKS SECTION
               ========================================================================= */}
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.06)] p-3">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <h4 className="text-[11px] font-bold font-display text-slate-900">
                    My tasks
                  </h4>
                </div>
                <span className="text-[9px] font-sans font-medium text-slate-500">
                  3 pending
                </span>
              </div>

              <div className="space-y-1.5">
                {/* Task 1 */}
                <div 
                  onClick={() => setTask1Checked(!task1Checked)}
                  className="flex items-start gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100 cursor-pointer hover:bg-slate-100 transition"
                >
                  <div className="mt-0.5 text-emerald-600">
                    {task1Checked ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5 text-slate-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-[10px] font-bold truncate ${task1Checked ? "line-through text-slate-400" : "text-slate-900"}`}>
                        Review RFI-245 (substation)
                      </p>
                      <span className="text-[7.5px] px-1 py-0.2 rounded font-mono font-bold bg-rose-100 text-rose-800">
                        HIGH
                      </span>
                    </div>
                    <p className="text-[8.5px] text-slate-500">Cedar Flats Farm</p>
                  </div>
                </div>

                {/* Task 2 */}
                <div 
                  onClick={() => setTask2Checked(!task2Checked)}
                  className="flex items-start gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100 cursor-pointer hover:bg-slate-100 transition"
                >
                  <div className="mt-0.5 text-emerald-600">
                    {task2Checked ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5 text-slate-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-[10px] font-bold truncate ${task2Checked ? "line-through text-slate-400" : "text-slate-900"}`}>
                        Approve MV cable order PO-8841
                      </p>
                      <span className="text-[7.5px] px-1 py-0.2 rounded font-mono font-bold bg-rose-100 text-rose-800">
                        HIGH
                      </span>
                    </div>
                    <p className="text-[8.5px] text-slate-500">Marlow Ridge Storage</p>
                  </div>
                </div>

                {/* Task 3 */}
                <div 
                  onClick={() => setTask3Checked(!task3Checked)}
                  className="flex items-start gap-2 p-1.5 rounded-lg bg-slate-50 border border-slate-100 cursor-pointer hover:bg-slate-100 transition"
                >
                  <div className="mt-0.5 text-emerald-600">
                    {task3Checked ? <CheckSquare className="w-3.5 h-3.5" /> : <Square className="w-3.5 h-3.5 text-slate-400" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className={`text-[10px] font-bold truncate ${task3Checked ? "line-through text-slate-400" : "text-slate-900"}`}>
                        Sign off Ashgrove roof inspection
                      </p>
                      <span className="text-[7.5px] px-1 py-0.2 rounded font-mono font-bold bg-amber-100 text-amber-800">
                        MEDIUM
                      </span>
                    </div>
                    <p className="text-[8.5px] text-slate-500">Ashgrove Portfolio</p>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================================
                F. ASK NEXA AI FLOATING ACTION STRIP
               ========================================================================= */}
            <div className="p-2.5 rounded-xl bg-[#064e3b] text-white flex items-center justify-between shadow-md cursor-pointer hover:bg-[#075b45] transition">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </div>
                <div>
                  <span className="text-[11px] font-sans font-bold text-white block leading-tight">
                    Ask NEXA AI
                  </span>
                  <span className="text-[8.5px] text-emerald-200/80">
                    Ask about permits, SLDs or delays
                  </span>
                </div>
              </div>
              <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[9px] font-mono font-bold flex items-center justify-center">
                4
              </span>
            </div>

          </div>

          {/* 3. BOTTOM APP NAVIGATION DOCK (WHITE / SLATE MATCHING DESKTOP BAR) */}
          <div className="pt-2 pb-2.5 px-3 bg-white/95 backdrop-blur-md border-t border-slate-200/90 flex items-center justify-around text-slate-400 text-[10px] z-20">
            <button 
              onClick={() => setActiveTab("overview")} 
              className={`flex flex-col items-center transition ${activeTab === "overview" ? "text-emerald-700 font-bold" : "hover:text-slate-700"}`}
            >
              <Layers className="w-4 h-4" />
              <span className="text-[8px] mt-0.5">Overview</span>
            </button>

            <button 
              onClick={() => setActiveTab("projects")} 
              className={`flex flex-col items-center transition ${activeTab === "projects" ? "text-emerald-700 font-bold" : "hover:text-slate-700"}`}
            >
              <Compass className="w-4 h-4" />
              <span className="text-[8px] mt-0.5">Projects</span>
            </button>

            {/* Center Floating Camera / Barcode Scanner Button */}
            <div className="-mt-5 w-10 h-10 rounded-full bg-[#064e3b] text-white flex items-center justify-center shadow-lg shadow-emerald-950/25 border-[3px] border-white cursor-pointer hover:scale-105 transition">
              <Camera className="w-4 h-4 text-emerald-300" />
            </div>

            <button 
              onClick={() => setActiveTab("db")} 
              className={`flex flex-col items-center transition ${activeTab === "db" ? "text-emerald-700 font-bold" : "hover:text-slate-700"}`}
            >
              <Database className="w-4 h-4" />
              <span className="text-[8px] mt-0.5">Live DB</span>
            </button>

            <button 
              onClick={() => setActiveTab("security")} 
              className={`flex flex-col items-center transition ${activeTab === "security" ? "text-emerald-700 font-bold" : "hover:text-slate-700"}`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[8px] mt-0.5">Security</span>
            </button>
          </div>

          {/* Phone Bottom Home Indicator Bar */}
          <div className="pb-1 bg-white/95">
            <div className="w-28 h-1 bg-slate-400/80 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}

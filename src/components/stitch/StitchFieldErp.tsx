"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Calendar as CalendarIcon,
  Bell,
  Search,
  Plus,
  Layers,
  Clock,
  Moon,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Building2,
  Users,
  Compass,
  HardHat,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Sparkles,
  Maximize2,
  Check,
  Radio,
  FileText,
  MapPin,
  Flame,
  PieChart
} from "lucide-react";

type RoleType = "traders" | "epc" | "consultants" | "installers";

interface RoleData {
  roleBadge: string;
  tenantName: string;
  tenantLocation: string;
  userInitials: string;
  greetingName: string;
  greetingSubtitle: string;
  weatherCity: string;
  weatherTemp: string;
  weatherWind: string;
  sitesCount: string;
  sunrise: string;
  sunset: string;
  daylightText: string;
  daylightSub: string;
  aiScore: number;
  aiConfidenceText: string;
  aiInsightText: string;
  kpis: {
    label: string;
    val: string;
    sub: string;
    color: "green" | "gray" | "red" | "blue" | "amber" | "slate";
  }[];
  budgetTitle: string;
  donutPercent: number;
  budgetBreakdown: { label: string; amount: string; dotColor: string }[];
  budgetFooter: string;
  timelineTitle: string;
  sites: { name: string; loc: string; spec: string; percent: string; status: "On track" | "Delayed" }[];
  tasks: { title: string; project: string; due: string; priority: "High" | "Medium" | "Urgent" }[];
  calendarEvents: { title: string; color: string }[];
  selectedDay: number;
}

const ROLES_DATA: Record<RoleType, RoleData> = {
  traders: {
    roleBadge: "TIER-1 STOCKIST & DEPOT COMMAND",
    tenantName: "Adani Waaree Stockist",
    tenantLocation: "Mundra & Surat Port Hubs",
    userInitials: "VS",
    greetingName: "Good morning, Vikram",
    greetingSubtitle:
      "4.2 MW inventory live across 3 bonded depots. 54 pallets dispatched, ₹1.8 Cr escrow in transit.",
    weatherCity: "Mundra Port Hub",
    weatherTemp: "82°F Clear",
    weatherWind: "14 mph W, gusts 20",
    sitesCount: "Live from 3 bonded depots",
    sunrise: "6:48",
    sunset: "18:22",
    daylightText: "8 h 45 min",
    daylightSub: "Depot loading cutoff at 19:30",
    aiScore: 88,
    aiConfidenceText: "High pallet turnover across Western corridor.",
    aiInsightText: "Mundra 585W TOPCon stock will reach 98% allocation by Friday at current dispatch velocity.",
    kpis: [
      { label: "Active allocations", val: "18", sub: "+3 bookings", color: "green" },
      { label: "Completed builds", val: "142", sub: "+12 vs last mo", color: "gray" },
      { label: "Delayed shipments", val: "1", sub: "Customs check", color: "red" },
      { label: "Freight live", val: "9", sub: "GPS telematics", color: "blue" },
      { label: "Pending signoffs", val: "5", sub: "2 ready", color: "amber" },
      { label: "Warehouse fill", val: "94%", sub: "4.2 MW capacity", color: "slate" },
    ],
    budgetTitle: "Escrow & Liquidity",
    donutPercent: 68,
    budgetBreakdown: [
      { label: "Total Inventory", amount: "₹18.4 Cr", dotColor: "bg-emerald-500" },
      { label: "In Transit", amount: "₹8.2 Cr", dotColor: "bg-sky-500" },
      { label: "Escrow Secured", amount: "₹4.6 Cr", dotColor: "bg-amber-500" },
      { label: "Spot Credit", amount: "₹5.6 Cr", dotColor: "bg-zinc-400" },
    ],
    budgetFooter: "↗ 42% · ₹2.1 Cr released this week",
    timelineTitle: "Pallet Allocation Curve",
    sites: [
      { name: "Mundra Port Depot", loc: "Gujarat", spec: "4.2 MWp", percent: "94%", status: "On track" },
      { name: "Surat Regional Hub", loc: "Gujarat", spec: "1.8 MWp", percent: "78%", status: "On track" },
      { name: "Greater Noida Depot", loc: "NCR", spec: "940 kW BOS", percent: "86%", status: "On track" },
      { name: "Bhiwandi Substation", loc: "MH", spec: "620 kW Cable", percent: "42%", status: "Delayed" },
    ],
    tasks: [
      { title: "Review 180s unboxing for PO #SX-2841", project: "Mundra · Pallet 4", due: "Today", priority: "Urgent" },
      { title: "Confirm 2x 40ft High-Cube allocation", project: "Surat Logistics", due: "Today", priority: "High" },
      { title: "Sign off e-Way bills for 54 inverters", project: "Pune Dispatch", due: "Tomorrow", priority: "Medium" },
    ],
    calendarEvents: [
      { title: "Mundra Depot container gate clearance (10:30 AM)", color: "bg-emerald-500" },
      { title: "Tier-1 price revision sync with Waaree Energies", color: "bg-sky-500" },
      { title: "Release escrow for PO #SX-2810 upon delivery", color: "bg-amber-500" },
    ],
    selectedDay: 21,
  },
  epc: {
    roleBadge: "EPC CONTRACTOR COMMAND CENTER",
    tenantName: "Tidewell Renewables",
    tenantLocation: "Salt Lake City HQ",
    userInitials: "NH",
    greetingName: "Good morning, Noor",
    greetingSubtitle:
      "7 builds are live across five states. 13 approvals and one delayed site need you today.",
    weatherCity: "Tooele Valley",
    weatherTemp: "61°F Clear",
    weatherWind: "12 mph NW, gusts 18",
    sitesCount: "Live from 6 sites",
    sunrise: "7:46",
    sunset: "18:38",
    daylightText: "8 h 58 min",
    daylightSub: "Crews stand down at 18:00",
    aiScore: 75,
    aiConfidenceText: "Good chance of on-time delivery across the portfolio.",
    aiInsightText: "Pinecrest will miss its COD by ~3 weeks unless transformer lead time is expedited.",
    kpis: [
      { label: "Active projects", val: "7", sub: "+1 this quarter", color: "green" },
      { label: "Completed builds", val: "32", sub: "+2 vs last year", color: "gray" },
      { label: "Delayed projects", val: "2", sub: "Same as last mo", color: "red" },
      { label: "Work packages", val: "17", sub: "1 start this wk", color: "blue" },
      { label: "Pending approvals", val: "13", sub: "3 due today", color: "amber" },
      { label: "Crew attendance", val: "90%", sub: "19 of 21 on site", color: "slate" },
    ],
    budgetTitle: "Budget utilization",
    donutPercent: 38,
    budgetBreakdown: [
      { label: "Total budget", amount: "$234M", dotColor: "bg-zinc-800" },
      { label: "Spent", amount: "$88.1M", dotColor: "bg-sky-500" },
      { label: "Committed", amount: "$26.7M", dotColor: "bg-emerald-500" },
      { label: "Remaining", amount: "$119M", dotColor: "bg-amber-400" },
    ],
    budgetFooter: "↗ 36% · 38% spent this month",
    timelineTitle: "Timeline progress",
    sites: [
      { name: "Cedar Flats Solar Farm", loc: "Tooele, UT", spec: "48 MWp Utility", percent: "69%", status: "On track" },
      { name: "Marlow Ridge Battery Storage", loc: "Kern, CA", spec: "120 MWh BESS", percent: "50%", status: "On track" },
      { name: "Ashgrove Rooftop Portfolio", loc: "Columbus, OH", spec: "6.2 MW · 14 roofs", percent: "89%", status: "On track" },
      { name: "Pinecrest Agrivoltaics", loc: "Yakima, WA", spec: "22 MWp Dual", percent: "31%", status: "Delayed" },
    ],
    tasks: [
      { title: "Review RFI-245 (substation B relocation)", project: "Cedar Flats Farm", due: "Today", priority: "High" },
      { title: "Approve MV cable order PO-8841", project: "Marlow Ridge Storage", due: "Today", priority: "High" },
      { title: "Sign off Ashgrove roof 4 inspection", project: "Ashgrove Portfolio", due: "Tomorrow", priority: "Medium" },
    ],
    calendarEvents: [
      { title: "Inspection · Weekly HSE walk — blocks 1–6", color: "bg-emerald-500" },
      { title: "Review RFI-245 (substation B relocation)", color: "bg-sky-500" },
      { title: "Approve MV cable order PO-8841", color: "bg-amber-500" },
    ],
    selectedDay: 21,
  },
  consultants: {
    roleBadge: "SOLAR CAD & NET-METERING DESK",
    tenantName: "Acuity Solar Advisory",
    tenantLocation: "Design & Liaison Division",
    userInitials: "AM",
    greetingName: "Good morning, Dr. Aris",
    greetingSubtitle:
      "12 satellite solar layouts queued. 5 DISCOM dossiers generated with 99.4% first-pass pass rate.",
    weatherCity: "Navi Mumbai Tech",
    weatherTemp: "79°F Fair",
    weatherWind: "8 mph SW, gusts 12",
    sitesCount: "Live across 12 CAD files",
    sunrise: "6:32",
    sunset: "18:15",
    daylightText: "9 h 10 min",
    daylightSub: "Satellite shadow model synced",
    aiScore: 92,
    aiConfidenceText: "Zero SLD compliance rejections across 48 submittals.",
    aiInsightText: "MSEDCL circular 42 automated: all single line diagrams now include lightning arrester loop auto-calc.",
    kpis: [
      { label: "Active CAD layouts", val: "12", sub: "Satellite AI sized", color: "green" },
      { label: "Completed SLDs", val: "28", sub: "CEIG compliant", color: "gray" },
      { label: "DISCOM rejections", val: "0", sub: "100% first-pass", color: "red" },
      { label: "Partner EPC squads", val: "6", sub: "Linked on net", color: "blue" },
      { label: "Pending signoffs", val: "3", sub: "Bescom & MSEDCL", color: "amber" },
      { label: "Subsidy accuracy", val: "99.8%", sub: "PM Surya Ghar", color: "slate" },
    ],
    budgetTitle: "Billable Engineering Ledger",
    donutPercent: 54,
    budgetBreakdown: [
      { label: "Total Milestones", amount: "₹38.5 L", dotColor: "bg-emerald-500" },
      { label: "CAD Billed", amount: "₹20.8 L", dotColor: "bg-sky-500" },
      { label: "Net-Metering", amount: "₹12.2 L", dotColor: "bg-amber-500" },
      { label: "Retainers", amount: "₹5.5 L", dotColor: "bg-zinc-400" },
    ],
    budgetFooter: "↗ 18% · 5 DISCOM dossiers cleared this month",
    timelineTitle: "SLD Drafting Milestones",
    sites: [
      { name: "Textile Mill Rooftop Solar", loc: "Surat, GJ", spec: "120 kWp CAD", percent: "95%", status: "On track" },
      { name: "Apex School Microgrid", loc: "Pune, MH", spec: "60 kWp Net-Meter", percent: "82%", status: "On track" },
      { name: "Sula Estate Solar Array", loc: "Nashik, MH", spec: "45 kWp Rooftop", percent: "60%", status: "On track" },
      { name: "Vapi Chemical Processing", loc: "Vapi, GJ", spec: "200 kWp CEIG", percent: "35%", status: "Delayed" },
    ],
    tasks: [
      { title: "Generate CEIG Single Line Diagram Rev 4", project: "Textile Mill 120kW", due: "Today", priority: "Urgent" },
      { title: "Run 3D shadow analysis for solstice", project: "Apex School 60kW", due: "Today", priority: "High" },
      { title: "Submit net-metering dossier to BESCOM", project: "Sula Estate 45kW", due: "Tomorrow", priority: "Medium" },
    ],
    calendarEvents: [
      { title: "DISCOM Technical Advisory webinar on PM Surya Ghar", color: "bg-emerald-500" },
      { title: "Structural wind-load audit for coastal solar farm", color: "bg-sky-500" },
      { title: "Sign off SLD certificate #MH-2026-904", color: "bg-amber-500" },
    ],
    selectedDay: 21,
  },
  installers: {
    roleBadge: "FIELD SQUAD CREW COMMAND",
    tenantName: "Squad Alpha Installation Unit",
    tenantLocation: "Baner Sector 4 Hub",
    userInitials: "AK",
    greetingName: "Good morning, Amit",
    greetingSubtitle:
      "4 rooftop technicians on site. 54 modules staging for crane lift. Daylight left: 8h 58m.",
    weatherCity: "Baner Rooftop Site",
    weatherTemp: "75°F Sunny",
    weatherWind: "7 mph NW, calm",
    sitesCount: "Active on Block A & B",
    sunrise: "6:40",
    sunset: "18:18",
    daylightText: "8 h 58 min",
    daylightSub: "Crane lift window until 14:00",
    aiScore: 94,
    aiConfidenceText: "Zero safety incidents across 320 consecutive days.",
    aiInsightText: "DC string voc within 0.2V variance across all 6 strings. Ready for inverter grid-tie test.",
    kpis: [
      { label: "Modules staged", val: "54", sub: "TOPCon 585W", color: "green" },
      { label: "Strings done", val: "12/16", sub: "MC4 crimped", color: "gray" },
      { label: "Safety flags", val: "0", sub: "100% clip-on", color: "red" },
      { label: "Active crew", val: "4", sub: "Squad Alpha", color: "blue" },
      { label: "180s video proof", val: "Done", sub: "Escrow unlocked", color: "amber" },
      { label: "Grounding loop", val: "0.8 Ω", sub: "Pass (<1.0Ω)", color: "slate" },
    ],
    budgetTitle: "Squad Milestone Ledger",
    donutPercent: 82,
    budgetBreakdown: [
      { label: "Total Squad Payout", amount: "₹4.2 L", dotColor: "bg-emerald-500" },
      { label: "Mechanical Mounting", amount: "₹2.1 L", dotColor: "bg-sky-500" },
      { label: "Electrical DC Wiring", amount: "₹1.4 L", dotColor: "bg-amber-500" },
      { label: "Commissioning", amount: "₹70 K", dotColor: "bg-zinc-400" },
    ],
    budgetFooter: "↗ 82% · Milestone 2 released by EPC",
    timelineTitle: "Daily Rooftop Cadence",
    sites: [
      { name: "Block A Module Mounting", loc: "Roof Deck 1", spec: "54 panels clamped", percent: "90%", status: "On track" },
      { name: "Cable Tray & DC Conduit", loc: "Riser Shaft B", spec: "120m run finished", percent: "75%", status: "On track" },
      { name: "Net-Metering Meter Box", loc: "Ground Substation", spec: "Bi-directional panel", percent: "80%", status: "On track" },
      { name: "Earthing Pit Resistance Test", loc: "South Yard Pit 3", spec: "Copper plate check", percent: "50%", status: "Delayed" },
    ],
    tasks: [
      { title: "Record 180s unboxing video of Sungrow inverters", project: "Baner Sector 4", due: "Today", priority: "Urgent" },
      { title: "Torque check all aluminum mid-clamps to 14 Nm", project: "Block A Roof Deck", due: "Today", priority: "High" },
      { title: "Megger insulation resistance test on DC strings", project: "Inverter Room Bay 2", due: "Tomorrow", priority: "Medium" },
    ],
    calendarEvents: [
      { title: "Morning Toolbox safety briefing (8:00 AM)", color: "bg-emerald-500" },
      { title: "Crane boom lift for pallet #3-5 rooftop transfer", color: "bg-sky-500" },
      { title: "Commissioning inspector pre-test signoff", color: "bg-amber-500" },
    ],
    selectedDay: 21,
  },
};

export default function StitchFieldErp() {
  const [activeRole, setActiveRole] = useState<RoleType>("epc");
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const data = ROLES_DATA[activeRole];

  return (
    <section
      className="py-14 lg:py-20 bg-white border-b border-zinc-200/80 relative overflow-hidden"
      id="dashboard-preview"
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section Headline & Role Switcher Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-6 gap-5">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-zinc-950 tracking-tight leading-tight">
              Unified Solar Operations.{" "}
              <span className="text-emerald-700">Tailored for every network role.</span>
            </h2>
          </div>

          {/* Interactive Role Switcher Pills */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
            <span className="text-[11px] font-sans font-bold text-zinc-500 uppercase tracking-wider">
              Switch Persona:
            </span>
            <div className="flex items-center gap-1 p-1 bg-zinc-100 rounded-2xl border border-zinc-200/90 shadow-xs overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveRole("epc")}
                className={`px-3 py-1 rounded-xl text-xs font-sans transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeRole === "epc"
                    ? "bg-[#18222D] text-white font-bold shadow-xs"
                    : "text-zinc-700 hover:text-zinc-950 hover:bg-white font-semibold"
                }`}
              >
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>EPC Vendor</span>
              </button>

              <button
                onClick={() => setActiveRole("traders")}
                className={`px-3 py-1 rounded-xl text-xs font-sans transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeRole === "traders"
                    ? "bg-[#18222D] text-white font-bold shadow-xs"
                    : "text-zinc-700 hover:text-zinc-950 hover:bg-white font-semibold"
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Solar Trader</span>
              </button>

              <button
                onClick={() => setActiveRole("consultants")}
                className={`px-3 py-1 rounded-xl text-xs font-sans transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeRole === "consultants"
                    ? "bg-[#18222D] text-white font-bold shadow-xs"
                    : "text-zinc-700 hover:text-zinc-950 hover:bg-white font-semibold"
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-emerald-400" />
                <span>Solar Consultant</span>
              </button>

              <button
                onClick={() => setActiveRole("installers")}
                className={`px-3 py-1 rounded-xl text-xs font-sans transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                  activeRole === "installers"
                    ? "bg-[#18222D] text-white font-bold shadow-xs"
                    : "text-zinc-700 hover:text-zinc-950 hover:bg-white font-semibold"
                }`}
              >
                <HardHat className="w-3.5 h-3.5 text-emerald-400" />
                <span>Field Installer</span>
              </button>
            </div>
          </div>
        </div>

        {/* 16:9 RATIO LANDSCAPE DESKTOP MONITOR FRAME */}
        <div className="relative rounded-3xl border border-zinc-300 bg-[#E8EEF4] shadow-[0_25px_80px_rgba(15,23,42,0.14)] overflow-hidden w-full lg:aspect-[16/9] flex flex-col">
          {/* 1. TOP BROWSER CHROME FRAME (Compact h-9) */}
          <div className="bg-[#1A232C] text-zinc-300 px-4 py-1.5 flex items-center justify-between border-b border-zinc-800 text-[11px] font-sans shrink-0">
            {/* Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-xs" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-xs" />
            </div>

            {/* Browser Tabs Simulation */}
            <div className="hidden md:flex items-center gap-1.5 bg-[#121A22] px-3 py-0.5 rounded-t-md border-t border-x border-zinc-700/60 text-[11px] text-zinc-200 font-sans">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-semibold truncate max-w-[180px]">Project Dashboard · SuryaNexa</span>
              <span className="text-zinc-500 ml-1.5 cursor-pointer">×</span>
            </div>

            {/* URL Search Bar */}
            <div className="flex items-center gap-2 bg-[#0F161E] border border-zinc-700/60 rounded-md px-3 py-0.5 text-zinc-400 font-sans text-[10px] w-64 sm:w-80 justify-center">
              <span className="text-emerald-400 text-xs">🔒</span>
              <span className="text-zinc-300 font-semibold">demo.suryanexa.com</span>
              <span className="text-zinc-500">/#/dashboard/{activeRole}</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-zinc-400 text-[10px] font-sans">
              <span className="text-emerald-400">● 16:9 Landscape</span>
            </div>
          </div>

          {/* 2. INNER APPLICATION SHELL (Dock + App Body, flex-1 min-h-0) */}
          <div className="flex flex-1 flex-col lg:flex-row overflow-hidden min-h-0">
            {/* Left Black Dock (Compact w-14 shrink-0) */}
            <div className="hidden lg:flex flex-col items-center justify-between py-4 px-2 bg-[#11171E] text-zinc-400 border-r border-zinc-800/80 w-14 shrink-0 h-full">
              <div className="flex flex-col items-center gap-3.5">
                {/* Brand Icon */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-emerald-600 text-white flex items-center justify-center font-display font-bold text-xs shadow-md">
                  ☀️
                </div>
                <div className="w-6 h-px bg-zinc-800 my-0.5" />

                {/* Vertical App Icons */}
                <button className="w-8 h-8 rounded-lg bg-zinc-800/90 text-white flex items-center justify-center hover:bg-zinc-700 transition">
                  <Search className="w-3.5 h-3.5" />
                </button>
                <button className="w-8 h-8 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 flex items-center justify-center transition">
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <button className="w-8 h-8 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 flex items-center justify-center transition">
                  <Layers className="w-3.5 h-3.5" />
                </button>
                <button className="w-8 h-8 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 flex items-center justify-center transition">
                  <Compass className="w-3.5 h-3.5" />
                </button>
                <button className="w-8 h-8 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 flex items-center justify-center transition">
                  <Moon className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bottom Dock Status */}
              <div className="flex flex-col items-center gap-2">
                <div className="text-[8px] font-sans text-zinc-500 font-bold text-center leading-tight">
                  Fri 6 <br />
                  <span className="text-zinc-400">12:37</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-800 text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
                  {data.userInitials}
                </div>
              </div>
            </div>

            {/* Main Application Container */}
            <div className="flex-1 bg-[#EEF2F6] flex flex-col overflow-hidden min-h-0 h-full">
              {/* Top Application Header Bar (Compact py-2 shrink-0) */}
              <div className="bg-white border-b border-zinc-200/90 px-4 sm:px-5 py-2 flex flex-col xl:flex-row xl:items-center justify-between gap-2 shadow-xs shrink-0">
                {/* Brand title + Nav pills */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-5">
                  {/* Brand */}
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-zinc-900 text-white flex items-center justify-center font-bold text-[11px] shadow-xs">
                      ⚡
                    </div>
                    <div>
                      <h4 className="font-display font-extrabold text-xs text-zinc-950 leading-tight">
                        SuryaNexa
                      </h4>
                      <p className="text-[8px] font-sans text-zinc-500 font-bold uppercase tracking-wider">
                        FIELD ERP
                      </p>
                    </div>
                  </div>

                  {/* Header Navigation Pills */}
                  <div className="flex items-center gap-1 overflow-x-auto text-[11px] font-sans font-semibold">
                    {[
                      { name: "Overview", badge: null },
                      { name: "Projects", badge: null },
                      { name: "Site", badge: "2" },
                      { name: "Supply", badge: "16" },
                      { name: "Money", badge: "13" },
                      { name: "Insights", badge: null },
                      { name: "Documents", badge: null },
                    ].map((tab) => (
                      <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`px-2.5 py-1 rounded-full transition-all flex items-center gap-1 cursor-pointer whitespace-nowrap ${
                          activeTab === tab.name
                            ? "bg-[#18222D] text-white font-bold shadow-xs"
                            : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
                        }`}
                      >
                        <span>{tab.name}</span>
                        {tab.badge && (
                          <span
                            className={`text-[8px] px-1 py-0.1 rounded-full font-bold ${
                              activeTab === tab.name
                                ? "bg-emerald-500 text-white"
                                : "bg-rose-500 text-white"
                            }`}
                          >
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Status Cluster */}
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-sans font-semibold text-zinc-700 bg-zinc-100/80 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>9:40 AM Live</span>
                  </div>

                  <div className="relative">
                    <button className="w-7 h-7 rounded-full bg-zinc-100 text-zinc-700 hover:bg-zinc-200 flex items-center justify-center transition">
                      <Bell className="w-3.5 h-3.5" />
                    </button>
                    <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-rose-500 text-white rounded-full text-[8px] font-bold flex items-center justify-center">
                      4
                    </span>
                  </div>

                  {/* Tenant / Organization Selector */}
                  <div className="hidden sm:flex items-center gap-1.5 pl-2 border-l border-zinc-200 text-left">
                    <div className="w-6 h-6 rounded-md bg-zinc-200 text-zinc-800 font-bold text-[10px] flex items-center justify-center">
                      {data.userInitials}
                    </div>
                    <div className="leading-tight">
                      <p className="text-[11px] font-sans font-bold text-zinc-900 truncate max-w-[130px]">
                        {data.tenantName}
                      </p>
                      <p className="text-[9px] font-sans text-zinc-500 truncate max-w-[130px]">
                        {data.tenantLocation}
                      </p>
                    </div>
                    <ChevronDown className="w-3 h-3 text-zinc-400" />
                  </div>

                  <div className="w-7 h-7 rounded-full bg-[#18222D] text-white flex items-center justify-center font-bold text-[10px]">
                    {data.userInitials}
                  </div>
                </div>
              </div>

              {/* Main Canvas Body: Compact 16:9 Landscape Layout with Smooth Internal Scroll if needed */}
              <div className="p-3 sm:p-4 lg:p-4.5 overflow-y-auto flex-1 min-h-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRole}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-3.5"
                  >
                    {/* LEFT COLUMN: 9 COLUMNS OUT OF 12 */}
                    <div className="lg:col-span-8 xl:col-span-9 space-y-3.5">
                      {/* ROW 1: Greeting & Daylight Arc (60%) + AI Insights Card (40%) */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
                        {/* 1. Greeting Card with Daylight Arc */}
                        <div className="md:col-span-7 bg-white rounded-2xl border border-zinc-200/90 shadow-xs p-4 sm:p-4.5 flex flex-col justify-between">
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                            <div>
                              <p className="text-[10px] font-sans text-zinc-500 font-semibold mb-0.5">
                                Wednesday, October 21, 2026
                              </p>
                              <h3 className="text-xl sm:text-2xl font-extrabold font-display text-zinc-950 tracking-tight">
                                {data.greetingName}
                              </h3>
                              <p className="text-[11px] sm:text-xs text-zinc-600 mt-1 font-sans font-medium max-w-sm leading-relaxed">
                                {data.greetingSubtitle}
                              </p>
                            </div>

                            {/* Daylight Left on Site Arc Gauge */}
                            <div className="bg-zinc-50/80 rounded-xl border border-zinc-200/80 p-2.5 text-center shrink-0 min-w-[145px]">
                              <p className="text-[9px] font-sans font-bold text-zinc-500 uppercase tracking-wider">
                                Daylight left on site
                              </p>
                              <div className="relative w-28 h-13 mx-auto mt-0.5 flex items-end justify-center">
                                <svg className="w-28 h-13" viewBox="0 0 100 50">
                                  <path
                                    d="M 10 50 A 40 40 0 0 1 90 50"
                                    fill="none"
                                    stroke="#e2e8f0"
                                    strokeWidth="6"
                                    strokeDasharray="3 3"
                                  />
                                  <path
                                    d="M 10 50 A 40 40 0 0 1 72 20"
                                    fill="none"
                                    stroke="#f59e0b"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                  />
                                  <circle cx="72" cy="20" r="4" fill="#f59e0b" className="animate-pulse" />
                                </svg>
                                <span className="absolute bottom-0 text-sm font-display font-extrabold text-zinc-950">
                                  {data.daylightText}
                                </span>
                              </div>
                              <div className="flex justify-between text-[8px] font-sans font-semibold text-zinc-400 px-1 mt-0.5">
                                <span>{data.sunrise}</span>
                                <span>{data.sunset}</span>
                              </div>
                              <p className="text-[9px] font-sans text-zinc-500 mt-0.5 font-semibold">
                                {data.daylightSub}
                              </p>
                            </div>
                          </div>

                          {/* Weather & Site Status Pills */}
                          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-zinc-100 text-[10px] font-sans font-semibold text-zinc-700">
                            <span className="flex items-center gap-1 bg-zinc-50 border border-zinc-200/80 px-2 py-0.5 rounded-md">
                              <span>🌤</span> {data.weatherTemp} · {data.weatherCity}
                            </span>
                            <span className="flex items-center gap-1 bg-zinc-50 border border-zinc-200/80 px-2 py-0.5 rounded-md">
                              <span>💨</span> {data.weatherWind}
                            </span>
                            <span className="flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                              {data.sitesCount}
                            </span>
                          </div>
                        </div>

                        {/* 2. Dark Emerald AI Project Insights Card */}
                        <div className="md:col-span-5 bg-[#0A332C] text-white rounded-2xl border border-emerald-600/30 p-4 sm:p-4.5 flex flex-col justify-between shadow-md relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

                          <div>
                            {/* Card Title */}
                            <div className="flex items-center gap-1.5 mb-2.5">
                              <div className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                                <Sparkles className="w-3 h-3" />
                              </div>
                              <span className="text-[11px] font-sans font-bold text-emerald-200">
                                AI project insights
                              </span>
                            </div>

                            {/* Radial Gauge Dial + Score */}
                            <div className="flex items-center gap-3 mb-2.5">
                              <div className="relative w-14 h-14 shrink-0 flex items-center justify-center">
                                <svg className="w-14 h-14 -rotate-90" viewBox="0 0 36 36">
                                  <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#13473E"
                                    strokeWidth="3.5"
                                  />
                                  <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#34D399"
                                    strokeWidth="3.5"
                                    strokeDasharray={`${data.aiScore}, 100`}
                                    strokeLinecap="round"
                                  />
                                </svg>
                                <div className="absolute text-center">
                                  <span className="font-display font-extrabold text-xs text-white block leading-none">
                                    {data.aiScore}
                                  </span>
                                  <span className="text-[7px] font-sans text-emerald-300/80 uppercase">
                                    /100
                                  </span>
                                </div>
                              </div>

                              <div>
                                <p className="text-[11px] font-sans font-bold text-white leading-tight">
                                  Delivery confidence
                                </p>
                                <p className="text-[10px] font-sans text-emerald-200/80 mt-0.5 leading-snug">
                                  {data.aiConfidenceText}
                                </p>
                              </div>
                            </div>

                            {/* Key Insight Box */}
                            <div className="p-2.5 rounded-xl bg-[#06241F] border border-emerald-500/20 text-[10px] font-sans">
                              <p className="font-bold text-emerald-300 flex items-center gap-1 mb-0.5 text-[10px]">
                                <span>⚡</span> Key insight
                              </p>
                              <p className="text-emerald-100/90 leading-relaxed text-[10px]">
                                {data.aiInsightText}
                              </p>
                            </div>
                          </div>

                          <button className="mt-2.5 w-full py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-[10px] font-sans font-bold text-white border border-white/15 transition flex items-center justify-center gap-1 cursor-pointer">
                            <span>View full AI analysis</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* ROW 2: 6 Pastel KPI Metric Tiles */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                        {data.kpis.map((kpi, idx) => {
                          const pastelStyles = {
                            green: "bg-[#E6F4EA] border-[#CEEAD6] text-[#137333]",
                            gray: "bg-[#F1F3F4] border-[#DADCE0] text-[#3C4043]",
                            red: "bg-[#FCE8E6] border-[#FAD2CF] text-[#C5221F]",
                            blue: "bg-[#E8F0FE] border-[#D2E3FC] text-[#1A73E8]",
                            amber: "bg-[#FEF7E0] border-[#FEEFC3] text-[#B06000]",
                            slate: "bg-[#F3F4F6] border-[#E5E7EB] text-[#374151]",
                          };

                          return (
                            <div
                              key={idx}
                              className={`rounded-xl p-2.5 border transition-all hover:shadow-xs flex flex-col justify-between ${
                                pastelStyles[kpi.color]
                              }`}
                            >
                              <span className="text-[10px] font-sans font-bold tracking-tight opacity-90 truncate">
                                {kpi.label}
                              </span>
                              <div className="my-1">
                                <span className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-zinc-950">
                                  {kpi.val}
                                </span>
                              </div>
                              <span className="text-[9px] font-sans font-semibold opacity-85 truncate">
                                {kpi.sub}
                              </span>
                            </div>
                          );
                        })}
                      </div>

                      {/* ROW 3: 3 Data Cards (Budget Donut, Timeline S-Curve, Site-Wise Performance) */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                        {/* 1. Budget Utilization Card with Donut Chart */}
                        <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-xs p-3.5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-1.5">
                                <PieChart className="w-3.5 h-3.5 text-zinc-500" />
                                <h4 className="text-[11px] font-bold font-display text-zinc-900">
                                  {data.budgetTitle}
                                </h4>
                              </div>
                            </div>

                            {/* Donut Chart with Centered % */}
                            <div className="relative w-22 h-22 mx-auto my-1 flex items-center justify-center">
                              <svg className="w-22 h-22 -rotate-90" viewBox="0 0 36 36">
                                <path
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                  fill="none"
                                  stroke="#e2e8f0"
                                  strokeWidth="4"
                                />
                                <path
                                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                  fill="none"
                                  stroke="#0284c7"
                                  strokeWidth="4"
                                  strokeDasharray={`${data.donutPercent}, 100`}
                                  strokeLinecap="round"
                                />
                              </svg>
                              <div className="absolute text-center">
                                <span className="text-sm font-extrabold font-display text-zinc-950 block leading-tight">
                                  {data.donutPercent}%
                                </span>
                                <span className="text-[8px] font-sans text-zinc-500 font-semibold uppercase">
                                  active
                                </span>
                              </div>
                            </div>

                            {/* Breakdown List */}
                            <div className="space-y-1 mt-1 pt-1 border-t border-zinc-100 text-[10px] font-sans">
                              {data.budgetBreakdown.map((item, i) => (
                                <div key={i} className="flex justify-between items-center text-zinc-700">
                                  <span className="text-zinc-600 font-medium text-[10px] flex items-center gap-1.5 truncate">
                                    <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                                    {item.label}
                                  </span>
                                  <span className="font-bold text-zinc-950 font-display">
                                    {item.amount}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 mt-2 border-t border-zinc-100 text-[9px] font-sans font-bold text-emerald-700">
                            <span>{data.budgetFooter}</span>
                          </div>
                        </div>

                        {/* 2. Timeline Progress S-Curve Card */}
                        <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-xs p-3.5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <div className="flex items-center gap-1.5">
                                <TrendingUp className="w-3.5 h-3.5 text-zinc-500" />
                                <h4 className="text-[11px] font-bold font-display text-zinc-900">
                                  {data.timelineTitle}
                                </h4>
                              </div>
                              <span className="text-[9px] font-sans text-zinc-600 font-semibold bg-zinc-100 px-1.5 py-0.2 rounded-full">
                                All ▾
                              </span>
                            </div>

                            {/* Legend */}
                            <div className="flex items-center gap-2.5 text-[8px] font-sans font-semibold text-zinc-500 mb-1">
                              <span className="flex items-center gap-1">
                                <span className="w-1.5 h-0.5 bg-zinc-400 inline-block" /> Planned
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="w-1.5 h-0.5 bg-sky-500 inline-block" /> Actual
                              </span>
                              <span className="flex items-center gap-1">
                                <span className="w-1.5 h-0.5 bg-emerald-500 inline-block" /> Forecast
                              </span>
                            </div>

                            {/* S-Curve Graphic Simulation */}
                            <div className="relative h-20 my-1 flex items-end">
                              <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                                <defs>
                                  <linearGradient id="scurveGradientCompact" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
                                    <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.0" />
                                  </linearGradient>
                                </defs>
                                <path
                                  d="M 0 75 Q 60 70, 100 45 T 200 10 L 200 80 L 0 80 Z"
                                  fill="url(#scurveGradientCompact)"
                                />
                                <path
                                  d="M 0 75 Q 60 70, 100 45 T 200 10"
                                  fill="none"
                                  stroke="#0284c7"
                                  strokeWidth="2.5"
                                />
                                <circle cx="150" cy="24" r="3.5" fill="#0284c7" />
                              </svg>
                              <span className="absolute top-0.5 right-6 text-[8px] font-sans font-bold bg-[#18222D] text-white px-1.5 py-0.2 rounded shadow-xs">
                                Today
                              </span>
                            </div>

                            <div className="flex justify-between text-[8px] font-sans text-zinc-400 font-semibold pt-1 border-t border-zinc-100">
                              <span>Apr</span>
                              <span>Jun</span>
                              <span>Aug</span>
                              <span className="text-zinc-950 font-bold">Oct</span>
                              <span>Dec</span>
                              <span>Mar</span>
                            </div>
                          </div>

                          <div className="pt-2 mt-2 border-t border-zinc-100 text-[9px] font-sans font-bold text-sky-700">
                            <span>Variance: &lt;1.2%</span>
                          </div>
                        </div>

                        {/* 3. Site-Wise Performance Card */}
                        <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-xs p-3.5 flex flex-col justify-between">
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                                <h4 className="text-[11px] font-bold font-display text-zinc-900">
                                  Site-wise performance
                                </h4>
                              </div>
                              <span className="text-[9px] font-sans font-semibold text-emerald-700 hover:underline cursor-pointer">
                                All &gt;
                              </span>
                            </div>

                            <div className="space-y-1.5 text-xs font-sans">
                              {data.sites.slice(0, 3).map((site, i) => (
                                <div
                                  key={i}
                                  className="p-1.5 rounded-lg bg-zinc-50 border border-zinc-100/90"
                                >
                                  <div className="flex items-center justify-between mb-0.5">
                                    <p className="font-bold text-zinc-950 truncate text-[10px]">
                                      {site.name}
                                    </p>
                                    <span
                                      className={`text-[8px] px-1 py-0.1 rounded font-bold ${
                                        site.status === "On track"
                                          ? "bg-emerald-100 text-emerald-800"
                                          : "bg-rose-100 text-rose-800"
                                      }`}
                                    >
                                      {site.status}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between text-[9px] text-zinc-500 mb-0.5">
                                    <span>{site.loc}</span>
                                    <span className="font-semibold text-zinc-800">{site.percent}</span>
                                  </div>
                                  <div className="w-full h-1 rounded-full bg-zinc-200 overflow-hidden">
                                    <div
                                      className={`h-full rounded-full ${
                                        site.status === "On track" ? "bg-emerald-600" : "bg-rose-500"
                                      }`}
                                      style={{ width: site.percent }}
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: 3 COLUMNS OUT OF 12 (Calendar + My Tasks + Floating Ask AI) */}
                    <div className="lg:col-span-4 xl:col-span-3 space-y-3.5">
                      {/* 1. CALENDAR & AGENDA WIDGET */}
                      <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-xs p-3.5">
                        <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-zinc-100">
                          <div className="flex items-center gap-1.5">
                            <CalendarIcon className="w-3.5 h-3.5 text-zinc-500" />
                            <h4 className="text-[11px] font-bold font-display text-zinc-900">
                              Calendar
                            </h4>
                          </div>
                          <span className="text-[9px] font-sans font-bold text-zinc-700">Oct 2026</span>
                        </div>

                        {/* Calendar Mini Grid (Days 1..31) */}
                        <div className="grid grid-cols-7 gap-0.5 text-center text-[9px] font-sans font-semibold mb-2">
                          {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                            <span key={d} className="text-zinc-400 py-0.5">
                              {d}
                            </span>
                          ))}
                          <span className="py-0.5 text-zinc-300"></span>
                          <span className="py-0.5 text-zinc-300"></span>
                          {Array.from({ length: 31 }, (_, idx) => {
                            const day = idx + 1;
                            const isToday = day === data.selectedDay;
                            const hasDot = [7, 14, 21, 22, 23, 28].includes(day);

                            return (
                              <button
                                key={day}
                                className={`py-0.5 rounded flex flex-col items-center justify-center transition cursor-pointer ${
                                  isToday
                                    ? "bg-[#18222D] text-white font-extrabold shadow-xs"
                                    : "text-zinc-700 hover:bg-zinc-100"
                                }`}
                              >
                                <span>{day}</span>
                                {hasDot && (
                                  <span
                                    className={`w-0.5 h-0.5 rounded-full ${
                                      isToday ? "bg-emerald-400" : "bg-sky-500"
                                    }`}
                                  />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        {/* Today's Events List */}
                        <div className="pt-2 border-t border-zinc-100">
                          <div className="flex items-center justify-between text-[10px] font-sans font-bold text-zinc-900 mb-1.5">
                            <span>Today</span>
                            <span className="text-[9px] font-semibold text-zinc-500">
                              {data.calendarEvents.length} events
                            </span>
                          </div>

                          <div className="space-y-1.5 text-xs font-sans">
                            {data.calendarEvents.map((ev, i) => (
                              <div
                                key={i}
                                className="p-1.5 rounded-lg bg-zinc-50 border border-zinc-100 flex items-start gap-1.5"
                              >
                                <span className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${ev.color}`} />
                                <p className="text-[10px] font-semibold text-zinc-800 leading-tight">
                                  {ev.title}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* 2. MY TASKS WIDGET */}
                      <div className="bg-white rounded-2xl border border-zinc-200/90 shadow-xs p-3.5 relative">
                        <div className="flex items-center justify-between mb-2 pb-1.5 border-b border-zinc-100">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            <h4 className="text-[11px] font-bold font-display text-zinc-900">
                              My tasks
                            </h4>
                          </div>
                          <span className="text-[9px] font-sans font-semibold text-zinc-500">
                            3 pending
                          </span>
                        </div>

                        <div className="space-y-2 text-xs font-sans">
                          {data.tasks.map((task, i) => (
                            <div
                              key={i}
                              className="p-2 rounded-lg border border-zinc-100 bg-white hover:bg-zinc-50 transition flex items-start gap-2 shadow-2xs"
                            >
                              <input
                                type="checkbox"
                                defaultChecked={i === 0}
                                className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-[10px] font-semibold text-zinc-900 leading-tight truncate">
                                  {task.title}
                                </p>
                                <div className="flex items-center justify-between mt-0.5 text-[9px] text-zinc-500">
                                  <span className="truncate max-w-[90px]">{task.project}</span>
                                  <span
                                    className={`px-1 py-0.1 rounded font-bold uppercase ${
                                      task.priority === "Urgent" || task.priority === "High"
                                        ? "bg-zinc-900 text-white"
                                        : "bg-zinc-100 text-zinc-700"
                                    }`}
                                  >
                                    {task.priority}
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Floating "Ask NEXA AI" Button */}
                        <div className="mt-3 pt-2 border-t border-zinc-100 flex justify-end">
                          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0A332C] hover:bg-[#07241F] text-white text-[10px] font-sans font-bold shadow-md shadow-emerald-950/20 transition cursor-pointer">
                            <Sparkles className="w-3 h-3 text-emerald-400" />
                            <span>Ask NEXA AI</span>
                            <span className="w-3.5 h-3.5 rounded-full bg-rose-500 text-white text-[8px] font-bold flex items-center justify-center">
                              4
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

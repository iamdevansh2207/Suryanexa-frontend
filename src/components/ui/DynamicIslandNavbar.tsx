"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  PhoneCall,
  Bell,
  LogOut,
  FileText,
  ShieldCheck,
  Lock,
  ArrowRight,
  Scale,
  ScrollText,
  Building,
  Mail,
  CheckCircle2,
  ExternalLink,
  User
} from "lucide-react";
import { toast } from "sonner";

export default function DynamicIslandNavbar() {
  const [activeMenu, setActiveMenu] = useState<"about" | "contact" | "policies" | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: "about" | "contact" | "policies") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 220);
  };

  const handleLoginToggle = () => {
    if (!isLoggedIn) {
      setIsLoggedIn(true);
      toast.success("Welcome back, Rajesh Sharma · Verified EPC Vendor");
    }
  };

  const handleLogout = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoggedIn(false);
    setShowUserMenu(false);
    setShowActivities(false);
    toast.info("Logged out successfully");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none w-full pt-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* TOP LEFT: SuryaNEXA Brand Logo & Name */}
        <div className="pointer-events-auto flex items-center gap-3">
          <Link href="#top" className="flex items-center gap-2.5 group">
            <img
              src="/nexa-logo.png"
              alt="SuryaNexa Logo"
              className="w-10 h-10 object-contain rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold font-display tracking-tight text-zinc-950 leading-none">
                <span>Surya</span>
                <span className="text-emerald-700">NEXA</span>
              </span>
              <span className="text-[10px] font-sans font-medium text-zinc-500 tracking-wider uppercase mt-0.5">
                Solar OS Network
              </span>
            </div>
          </Link>
        </div>

        {/* CENTER: Dynamic Island Capsule (About Us, Contact Us, Policies) */}
        <div
          className="pointer-events-auto relative"
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="flex items-center gap-1 sm:gap-2 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-2xl border border-zinc-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-zinc-300 transition-colors"
          >
            {/* About Us */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("about")}
            >
              <button
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200 cursor-pointer ${
                  activeMenu === "about"
                    ? "bg-zinc-100 text-zinc-950 shadow-xs"
                    : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50"
                }`}
              >
                About Us
              </button>
            </div>

            {/* Contact Us */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("contact")}
            >
              <button
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200 cursor-pointer ${
                  activeMenu === "contact"
                    ? "bg-zinc-100 text-zinc-950 shadow-xs"
                    : "text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50"
                }`}
              >
                Contact Us
              </button>
            </div>

            {/* Policies (Highlight Pill as in Hand-Drawn Sketch) */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("policies")}
            >
              <button
                className={`px-4 py-1.5 rounded-full text-xs font-sans transition-all duration-200 flex items-center gap-1.5 cursor-pointer font-bold ${
                  activeMenu === "policies"
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-700/25"
                    : "bg-emerald-600/10 text-emerald-800 border border-emerald-600/20 hover:bg-emerald-700 hover:text-white"
                }`}
              >
                <span>Policies</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    activeMenu === "policies" ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          </motion.div>

          {/* DROPDOWN CARDS ANCHORED BELOW DYNAMIC ISLAND */}
          <AnimatePresence>
            {/* 1. POLICIES DROPDOWN CARD (Directly Replicating Hand-Drawn Sketch Layout) */}
            {activeMenu === "policies" && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => handleMouseEnter("policies")}
                onMouseLeave={handleMouseLeave}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[560px] sm:w-[640px] max-w-[92vw]"
              >
                <div className="rounded-3xl border border-zinc-200 bg-white/95 backdrop-blur-2xl p-6 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.12)] text-zinc-900">
                  {/* Top Header: Parchment/Scroll Illustration with 'Policies' */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-zinc-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200/80 shadow-xs">
                        <ScrollText className="w-5 h-5 stroke-[2.2]" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold font-display text-zinc-950 leading-tight">
                          SuryaNexa Governance &amp; Policies
                        </h3>
                        <p className="text-[11px] font-sans text-zinc-600 font-medium">
                          Trust architecture protecting traders, installers, and project margins
                        </p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-sans font-bold bg-zinc-100 text-zinc-700 border border-zinc-200">
                      LEGAL SPEC V2.4
                    </span>
                  </div>

                  {/* Middle Section: 2 Columns (Bullets on Left, Compliance Preview on Right) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-5 mb-5 border-b border-zinc-100">
                    {/* Left Column: Key Policy Guarantees */}
                    <div className="space-y-3">
                      <span className="text-[10px] font-sans font-bold tracking-wider text-emerald-800 uppercase block">
                        Core Protections
                      </span>
                      <ul className="space-y-2.5 text-xs font-sans">
                        <li className="flex items-start gap-2 text-zinc-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>Blind-Vault Privacy:</strong> Zero consumer lead leakage to competitors.</span>
                        </li>
                        <li className="flex items-start gap-2 text-zinc-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>180s Video Escrow:</strong> Payout released upon verified unboxing footage.</span>
                        </li>
                        <li className="flex items-start gap-2 text-zinc-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span><strong>ALMM &amp; BIS Only:</strong> 100% compliant Tier-1 module &amp; inverter list.</span>
                        </li>
                      </ul>
                    </div>

                    {/* Right Column: Featured Compliance Box as shown in sketch */}
                    <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[11px] font-display font-bold text-zinc-950 flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Dispute Shield
                          </span>
                          <span className="text-[10px] font-sans font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                            100% Insured
                          </span>
                        </div>
                        <p className="text-[11px] font-sans text-zinc-600 leading-relaxed">
                          All transit consignments tracked via GPS telematics with automated damaged pallet insurance settlement.
                        </p>
                      </div>
                      <a
                        href="#escrow"
                        className="mt-3 text-[11px] font-display font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1 transition-colors"
                      >
                        Read Escrow Guidelines <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Bottom Section: 4-Column Legal Category Links (From Hand-Drawn Sketch) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-sans">
                    <div>
                      <span className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-wider block mb-1.5">
                        Trading Terms
                      </span>
                      <ul className="space-y-1 text-zinc-700 font-medium">
                        <li><a href="#terms" className="hover:text-emerald-700 transition-colors">Terms of Service</a></li>
                        <li><a href="#code" className="hover:text-emerald-700 transition-colors">Trader Code</a></li>
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-wider block mb-1.5">
                        Privacy Vault
                      </span>
                      <ul className="space-y-1 text-zinc-700 font-medium">
                        <li><a href="#privacy" className="hover:text-emerald-700 transition-colors">Privacy Policy</a></li>
                        <li><a href="#lead-vault" className="hover:text-emerald-700 transition-colors">Lead Ownership</a></li>
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-wider block mb-1.5">
                        Settlements
                      </span>
                      <ul className="space-y-1 text-zinc-700 font-medium">
                        <li><a href="#escrow-policy" className="hover:text-emerald-700 transition-colors">Escrow Terms</a></li>
                        <li><a href="#returns" className="hover:text-emerald-700 transition-colors">Transit Claims</a></li>
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] font-sans font-bold text-zinc-500 uppercase tracking-wider block mb-1.5">
                        Technical SLAs
                      </span>
                      <ul className="space-y-1 text-zinc-700 font-medium">
                        <li><a href="#discom-sla" className="hover:text-emerald-700 transition-colors">DISCOM SLAs</a></li>
                        <li><a href="#warranties" className="hover:text-emerald-700 transition-colors">Warranty Backing</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 2. ABOUT US DROPDOWN CARD */}
            {activeMenu === "about" && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => handleMouseEnter("about")}
                onMouseLeave={handleMouseLeave}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[500px] max-w-[92vw]"
              >
                <div className="rounded-3xl border border-zinc-200 bg-white/95 backdrop-blur-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] text-zinc-900">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <span className="text-xs font-sans font-bold text-zinc-500 uppercase tracking-wider">
                        About SuryaNexa
                      </span>
                      <h3 className="text-base font-bold font-display text-zinc-950 mt-1.5 leading-snug">
                        Democratizing India's Solar Procurement
                      </h3>
                      <p className="text-xs text-zinc-600 mt-2 leading-relaxed font-sans">
                        SuryaNexa connects verified equipment stockists directly to regional EPCs, removing ghost brokers and transit disputes.
                      </p>
                    </div>
                    <div className="space-y-2.5 text-xs font-sans">
                      <a href="#network" className="block p-3 rounded-2xl bg-zinc-50 hover:bg-emerald-50/60 border border-zinc-200/80 transition-colors group">
                        <strong className="text-zinc-950 font-display block group-hover:text-emerald-700">Bonded Supply Network</strong>
                        <span className="text-zinc-600 text-[11px]">Direct ex-depot allocations across Mundra, Surat &amp; Noida.</span>
                      </a>
                      <a href="#pillars" className="block p-3 rounded-2xl bg-zinc-50 hover:bg-emerald-50/60 border border-zinc-200/80 transition-colors group">
                        <strong className="text-zinc-950 font-display block group-hover:text-emerald-700">7 Connected Pillars</strong>
                        <span className="text-zinc-600 text-[11px]">Traders, installers, consultants, and utilities on one ledger.</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* 3. CONTACT US DROPDOWN CARD */}
            {activeMenu === "contact" && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => handleMouseEnter("contact")}
                onMouseLeave={handleMouseLeave}
                className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[520px] max-w-[92vw]"
              >
                <div className="rounded-3xl border border-zinc-200 bg-white/95 backdrop-blur-2xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] text-zinc-900">
                  <span className="text-xs font-sans font-bold text-emerald-700 uppercase tracking-wider block mb-3">
                    Direct Network Desks
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-sans">
                    <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                      <PhoneCall className="w-4 h-4 text-emerald-700 mb-2" />
                      <h4 className="font-bold font-display text-zinc-950">EPC Desk</h4>
                      <p className="text-zinc-600 mt-1 font-medium text-[11px]">+91 1800-SURYA-NEXA</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                      <Mail className="w-4 h-4 text-emerald-700 mb-2" />
                      <h4 className="font-bold font-display text-zinc-950">Trader Desk</h4>
                      <p className="text-zinc-600 mt-1 font-medium text-[11px]">traders@suryanexa.com</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                      <Building className="w-4 h-4 text-emerald-700 mb-2" />
                      <h4 className="font-bold font-display text-zinc-950">Central Hub</h4>
                      <p className="text-zinc-600 mt-1 font-medium text-[11px]">Surat · Pune · Delhi</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT: Action Cluster (Book Call + Morphing Login / Profile Hub) */}
        <div className="pointer-events-auto flex items-center gap-2.5">
          {/* Pill Button: Book Call */}
          <a
            href="#pilot-cta"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-sans font-bold bg-white text-zinc-800 border border-zinc-200/90 hover:border-zinc-300 hover:bg-zinc-50 shadow-xs transition-all duration-200"
          >
            <PhoneCall className="w-3.5 h-3.5 text-zinc-700" />
            <span className="hidden sm:inline">Book Call</span>
          </a>

          {/* Morphing Auth Cluster as Specified in Hand-Drawn Sketch */}
          <AnimatePresence mode="wait">
            {!isLoggedIn ? (
              /* State A: Single Pill Button 'Login / Sign up' */
              <motion.button
                key="login-btn"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                onClick={handleLoginToggle}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-display font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                <span>Login / Sign up</span>
              </motion.button>
            ) : (
              /* State B: Split into (1) Notification Circle Bell + (2) Rounded Rectangle Profile Hub */
              <motion.div
                key="user-hub"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2 relative"
              >
                {/* 1. Circle Button with Bell Icon (my activities as sketched) */}
                <div className="relative">
                  <button
                    onClick={() => setShowActivities(!showActivities)}
                    title="My Activities"
                    className="w-9 h-9 rounded-full bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-700 hover:text-zinc-950 flex items-center justify-center shadow-xs transition-all duration-200 relative cursor-pointer"
                  >
                    <Bell className="w-4 h-4 text-zinc-700" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </button>

                  {/* My Activities Dropdown */}
                  <AnimatePresence>
                    {showActivities && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-white border border-zinc-200 p-4 shadow-xl z-50 text-xs font-sans text-zinc-900"
                      >
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-100">
                          <span className="font-bold font-display text-zinc-950">My Activities</span>
                          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">2 Live</span>
                        </div>
                        <div className="space-y-2">
                          <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
                            <p className="font-semibold text-zinc-900">PO #SX-2841 in Transit</p>
                            <p className="text-[11px] text-zinc-600 mt-0.5">54x TOPCon 585W modules arriving Pune hub.</p>
                          </div>
                          <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100">
                            <p className="font-semibold text-zinc-900">Lead #4821 Sealed</p>
                            <p className="text-[11px] text-zinc-600 mt-0.5">Blind-Vault protected commercial inquiry.</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* 2. Rounded Rectangle: User Profile Pic + Name + Logout (Matching sketch annotations) */}
                <div className="relative">
                  <div
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full bg-white border border-zinc-200 shadow-xs hover:border-zinc-300 transition-all cursor-pointer"
                  >
                    {/* User profile pic */}
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-600 to-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      RS
                    </div>
                    {/* User's name */}
                    <span className="text-xs font-sans font-bold text-zinc-900 max-w-[100px] sm:max-w-[120px] truncate">
                      Rajesh Sharma
                    </span>
                    {/* Quick Logout button icon */}
                    <button
                      onClick={handleLogout}
                      title="Log Out"
                      className="ml-1 p-1 rounded-full hover:bg-zinc-100 text-zinc-500 hover:text-rose-600 transition-colors"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Profile Menu Dropdown with 'Terms of Use' & 'Legal' as sketched */}
                  <AnimatePresence>
                    {showUserMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        className="absolute right-0 top-full mt-2 w-52 rounded-2xl bg-white border border-zinc-200 p-2 shadow-xl z-50 text-xs font-sans text-zinc-900"
                      >
                        <div className="px-3 py-2 border-b border-zinc-100">
                          <p className="font-bold font-display text-zinc-950">Rajesh Sharma</p>
                          <p className="text-[10px] text-zinc-500 truncate">rajesh@suntechepc.in</p>
                        </div>
                        <div className="py-1">
                          <a href="#terms" className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 transition-colors">
                            <span>Terms of Use</span>
                            <ExternalLink className="w-3 h-3 text-zinc-400" />
                          </a>
                          <a href="#legal" className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 transition-colors">
                            <span>Legal &amp; Privacy</span>
                            <ExternalLink className="w-3 h-3 text-zinc-400" />
                          </a>
                        </div>
                        <div className="pt-1 border-t border-zinc-100">
                          <button
                            onClick={handleLogout}
                            className="w-full flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-rose-50 text-rose-600 font-semibold transition-colors text-left"
                          >
                            <LogOut className="w-3.5 h-3.5" />
                            <span>Sign Out</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

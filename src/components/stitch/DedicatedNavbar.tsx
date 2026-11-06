"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  PhoneCall,
  Bell,
  LogOut,
  ShieldCheck,
  ArrowRight,
  ScrollText,
  Building,
  Mail,
  CheckCircle2,
  ExternalLink,
  Menu,
  X,
  Activity
} from "lucide-react";
import { toast } from "sonner";

export default function DedicatedNavbar() {
  const [activeDropdown, setActiveDropdown] = useState<"policies" | "company" | "contact" | null>(null);
  const [activeLink, setActiveLink] = useState<string>("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu: "policies" | "company" | "contact") => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
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
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] w-full bg-[#faf8f3] transition-all duration-300 border-b ${
        scrolled
          ? "border-[#e5e1d4] shadow-[0_4px_20px_rgba(0,0,0,0.04)] bg-[#faf8f3]/95 backdrop-blur-md"
          : "border-[#ece8dc] shadow-none"
      }`}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 h-[74px] flex items-center justify-between">
        
        {/* =========================================================================
            1. LEFT: SURYANEXA BRAND LOGO (KEPT ON LEFT WITH INCREASED GAP TO NAV)
           ========================================================================= */}
        <div className="flex items-center shrink-0 mr-8 lg:mr-14 xl:mr-20 2xl:mr-28">
          <Link href="#top" onClick={() => setActiveLink("home")} className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-xl bg-zinc-950 p-1.5 flex items-center justify-center shadow-xs border border-zinc-800 transition-transform duration-200 group-hover:scale-105">
              <img
                src="/solar-logo-card.png"
                alt="SuryaNexa Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black font-display tracking-tight text-zinc-950 leading-none">
                Surya<span className="text-emerald-700">NEXA</span>
              </span>
              <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest mt-0.5">
                Solar OS Network
              </span>
            </div>
          </Link>
        </div>

        {/* =========================================================================
            2. CENTER: NAVIGATION ITEMS IN EXACT STYLE OF REFERENCE IMAGE
               - "Home" in rounded pill container with amber horizontal accent line
               - Clean text items with consistent spacing
               - Dropdown items with subtle chevron down
           ========================================================================= */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4 text-[13px] xl:text-sm font-sans font-medium text-zinc-700">
          
          {/* Active "Home" Pill with amber horizontal indicator line */}
          <Link
            href="#top"
            onClick={() => setActiveLink("home")}
            className={`relative px-4 py-1.5 rounded-full transition-all flex flex-col items-center justify-center cursor-pointer ${
              activeLink === "home"
                ? "bg-[#f2ecdf] text-zinc-950 font-bold shadow-xs"
                : "text-zinc-700 hover:text-zinc-950 hover:bg-[#f2ecdf]/50"
            }`}
          >
            <span>Home</span>
            {activeLink === "home" && (
              <span className="w-4 h-[2.5px] bg-amber-500 rounded-full mt-0.5 animate-in fade-in" />
            )}
          </Link>

          {/* Core Data Links */}
          <a
            href="#dashboard-preview"
            onClick={() => setActiveLink("erp")}
            className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeLink === "erp" ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-zinc-950"
            }`}
          >
            Field ERP
          </a>

          <a
            href="#friction"
            onClick={() => setActiveLink("protocol")}
            className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeLink === "protocol" ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-zinc-950"
            }`}
          >
            Protocol
          </a>

          <a
            href="#lifecycle"
            onClick={() => setActiveLink("lifecycle")}
            className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeLink === "lifecycle" ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-zinc-950"
            }`}
          >
            Lifecycle
          </a>

          <a
            href="#pricing"
            onClick={() => setActiveLink("pricing")}
            className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeLink === "pricing" ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-zinc-950"
            }`}
          >
            Pricing
          </a>

          {/* Solutions / Policies Dropdown with Chevron */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("policies")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer ${
                activeDropdown === "policies"
                  ? "text-zinc-950 font-bold"
                  : "text-zinc-700 hover:text-zinc-950"
              }`}
            >
              <span>Policies</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-zinc-500 transition-transform duration-200 ${
                  activeDropdown === "policies" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "policies" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[580px]"
                >
                  <div className="rounded-2xl border border-[#e5e1d4] bg-[#faf8f3] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] text-zinc-900">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#ece8dc]">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
                          <ScrollText className="w-4 h-4 stroke-[2.2]" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold font-display text-zinc-950 leading-tight">
                            SuryaNexa Governance &amp; Trust Policies
                          </h4>
                          <p className="text-[11px] text-zinc-600">
                            Immutable trade verification, escrow &amp; dispute rules
                          </p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white text-zinc-700 border border-[#e5e1d4]">
                        LEGAL SPEC V2.4
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pb-4 mb-4 border-b border-[#ece8dc]">
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider block">
                          Core Guarantees
                        </span>
                        <ul className="space-y-2 text-xs">
                          <li className="flex items-start gap-2 text-zinc-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span><strong>Blind-Vault™:</strong> Zero lead poaching by call centers.</span>
                          </li>
                          <li className="flex items-start gap-2 text-zinc-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span><strong>180s Video Escrow:</strong> Instant payout upon video scan.</span>
                          </li>
                          <li className="flex items-start gap-2 text-zinc-800">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span><strong>ALMM &amp; BIS Only:</strong> 100% compliant Tier-1 stock.</span>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-xl border border-[#ece8dc] bg-white/70 p-3 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-bold text-zinc-950 flex items-center gap-1.5 mb-1">
                            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Carrier Dispute Shield
                          </span>
                          <p className="text-[11px] text-zinc-600 leading-relaxed">
                            Transit damage covered by instantaneous carrier escrow compensation protocol.
                          </p>
                        </div>
                        <a
                          href="#friction"
                          className="mt-2 text-[11px] font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                        >
                          View Verified Protocol <ArrowRight className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    <div className="grid grid-cols-4 gap-3 text-xs">
                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block mb-1">Trading</span>
                        <ul className="space-y-1 text-zinc-700 font-medium text-[11px]">
                          <li><a href="#terms" className="hover:text-emerald-700">Terms of Service</a></li>
                          <li><a href="#code" className="hover:text-emerald-700">Trader Code</a></li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block mb-1">Privacy</span>
                        <ul className="space-y-1 text-zinc-700 font-medium text-[11px]">
                          <li><a href="#privacy" className="hover:text-emerald-700">Privacy Vault</a></li>
                          <li><a href="#leads" className="hover:text-emerald-700">Lead Encryption</a></li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block mb-1">Escrow</span>
                        <ul className="space-y-1 text-zinc-700 font-medium text-[11px]">
                          <li><a href="#escrow" className="hover:text-emerald-700">Escrow Terms</a></li>
                          <li><a href="#transit" className="hover:text-emerald-700">Transit Claims</a></li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block mb-1">Regulatory</span>
                        <ul className="space-y-1 text-zinc-700 font-medium text-[11px]">
                          <li><a href="#discom" className="hover:text-emerald-700">DISCOM SLAs</a></li>
                          <li><a href="#warranty" className="hover:text-emerald-700">OEM Warranty</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About Us Link / Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer ${
                activeDropdown === "company"
                  ? "text-zinc-950 font-bold"
                  : "text-zinc-700 hover:text-zinc-950"
              }`}
            >
              <span>About Us</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-zinc-500 transition-transform duration-200 ${
                  activeDropdown === "company" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[460px]"
                >
                  <div className="rounded-2xl border border-[#e5e1d4] bg-[#faf8f3] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] text-zinc-900">
                    <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                      ABOUT SURYANEXA
                    </span>
                    <h4 className="text-base font-bold font-display text-zinc-950 mb-2">
                      Democratizing India&apos;s Solar Procurement
                    </h4>
                    <p className="text-xs text-zinc-600 mb-4 leading-relaxed font-sans">
                      SuryaNexa connects verified equipment stockists directly to regional EPCs, removing ghost brokers and transit disputes.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <a href="#pillars" className="p-3 rounded-xl bg-white/70 hover:bg-emerald-50 border border-[#ece8dc] transition-colors block">
                        <strong className="text-zinc-950 block mb-0.5">7 Connected Pillars</strong>
                        <span className="text-[11px] text-zinc-600">Unified operations for EPCs, traders and installers.</span>
                      </a>
                      <a href="#friction" className="p-3 rounded-xl bg-white/70 hover:bg-emerald-50 border border-[#ece8dc] transition-colors block">
                        <strong className="text-zinc-950 block mb-0.5">Bonded Warehouses</strong>
                        <span className="text-[11px] text-zinc-600">Ex-depot allocations across Mundra, Surat and Noida.</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Us Link / Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer ${
                activeDropdown === "contact"
                  ? "text-zinc-950 font-bold"
                  : "text-zinc-700 hover:text-zinc-950"
              }`}
            >
              <span>Contact Us</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-zinc-500 transition-transform duration-200 ${
                  activeDropdown === "contact" ? "rotate-180" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "contact" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[480px]"
                >
                  <div className="rounded-2xl border border-[#e5e1d4] bg-[#faf8f3] p-5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] text-zinc-900">
                    <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider block mb-3">
                      DIRECT REGIONAL DESKS
                    </span>
                    <div className="grid grid-cols-3 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-white/80 border border-[#ece8dc]">
                        <PhoneCall className="w-4 h-4 text-emerald-700 mb-1.5" />
                        <h5 className="font-bold font-display text-zinc-950">EPC Desk</h5>
                        <p className="text-zinc-600 text-[11px] mt-1 font-mono">+91 1800-SURYA</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/80 border border-[#ece8dc]">
                        <Mail className="w-4 h-4 text-emerald-700 mb-1.5" />
                        <h5 className="font-bold font-display text-zinc-950">Trader Desk</h5>
                        <p className="text-zinc-600 text-[11px] mt-1 truncate font-mono">traders@suryanexa.com</p>
                      </div>
                      <div className="p-3 rounded-xl bg-white/80 border border-[#ece8dc]">
                        <Building className="w-4 h-4 text-emerald-700 mb-1.5" />
                        <h5 className="font-bold font-display text-zinc-950">Central Hub</h5>
                        <p className="text-zinc-600 text-[11px] mt-1">Surat · Pune · NCR</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* =========================================================================
            3. RIGHT: ACTION CLUSTER MATCHING REFERENCE IMAGE EXACTLY
               - Circular Bell Button
               - Pill "Log in" Button
               - Pill "Sign Up" Button
           ========================================================================= */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          
          {/* Notification Bell in Circular Frame as in screenshot */}
          <div className="relative">
            <button
              onClick={() => setShowActivities(!showActivities)}
              title="Notifications"
              className="w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-[#e2ddd0] text-zinc-700 hover:text-zinc-950 flex items-center justify-center shadow-xs transition-all cursor-pointer relative"
            >
              <Bell className="w-4 h-4 text-zinc-700 stroke-[2]" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </button>

            {/* Activities Dropdown Panel */}
            <AnimatePresence>
              {showActivities && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  className="absolute right-0 top-full mt-2 w-72 rounded-2xl bg-[#faf8f3] border border-[#e5e1d4] p-4 shadow-xl z-50 text-xs font-sans text-zinc-900"
                >
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#ece8dc]">
                    <span className="font-bold font-display text-zinc-950 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-emerald-600" /> Live Feed
                    </span>
                    <span className="text-[10px] text-emerald-800 bg-emerald-100/70 px-2 py-0.5 rounded-full font-bold">
                      2 Unread
                    </span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl bg-white border border-[#ece8dc]">
                      <p className="font-bold text-zinc-900 text-[11px]">PO #SX-2841 in Transit</p>
                      <p className="text-[10.5px] text-zinc-600 mt-0.5">54x TOPCon 585W arriving Pune depot.</p>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white border border-[#ece8dc]">
                      <p className="font-bold text-zinc-900 text-[11px]">Lead #4821 Sealed</p>
                      <p className="text-[10.5px] text-zinc-600 mt-0.5">Blind-Vault protected 120kW commercial bid.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Dedicated "Log in" Pill Button as in screenshot */}
          <AnimatePresence mode="wait">
            {!isLoggedIn ? (
              <button
                key="login-btn"
                onClick={handleLoginToggle}
                className="px-5 py-2 rounded-full text-sm font-bold text-zinc-900 bg-white/95 hover:bg-white border border-[#e2ddd0] shadow-xs hover:border-[#cfc9b9] transition-all cursor-pointer"
              >
                Log in
              </button>
            ) : (
              <div key="user-hub" className="relative">
                <div
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full bg-white border border-[#e2ddd0] shadow-xs hover:border-[#cfc9b9] transition-all cursor-pointer"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs">
                    RS
                  </div>
                  <span className="hidden sm:inline text-xs font-sans font-bold text-zinc-900 max-w-[90px] truncate">
                    Rajesh S.
                  </span>
                  <button
                    onClick={handleLogout}
                    title="Log Out"
                    className="p-1 rounded-full hover:bg-zinc-100 text-zinc-400 hover:text-rose-600 transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>

                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      className="absolute right-0 top-full mt-2 w-52 rounded-2xl bg-[#faf8f3] border border-[#e5e1d4] p-2 shadow-xl z-50 text-xs font-sans text-zinc-900"
                    >
                      <div className="px-3 py-2 border-b border-[#ece8dc]">
                        <p className="font-bold font-display text-zinc-950">Rajesh Sharma</p>
                        <p className="text-[10px] text-zinc-500 truncate">rajesh@suntechepc.in</p>
                      </div>
                      <div className="py-1">
                        <a href="#terms" className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white text-zinc-700 hover:text-zinc-950">
                          <span>Trading Terms</span>
                          <ExternalLink className="w-3 h-3 text-zinc-400" />
                        </a>
                      </div>
                      <div className="pt-1 border-t border-[#ece8dc]">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-rose-50 text-rose-600 font-semibold text-left"
                        >
                          <LogOut className="w-3.5 h-3.5" />
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </AnimatePresence>

          {/* Dedicated "Sign Up" Pill Button as in screenshot (Site Colors Preserved) */}
          <a
            href="#pilot-cta"
            className="px-5 sm:px-6 py-2 rounded-full text-sm font-bold text-white bg-[#064e3b] hover:bg-[#075f48] shadow-xs shadow-emerald-950/20 hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center leading-none"
          >
            Sign Up
          </a>

          {/* Mobile Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/90 hover:bg-white border border-[#e2ddd0] text-zinc-800 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* =========================================================================
          4. MOBILE FULL-WIDTH DRAWER MENU (BACKGROUND #FAF8F3)
         ========================================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-t border-[#ece8dc] bg-[#faf8f3] px-6 py-6 overflow-hidden shadow-xl"
          >
            <div className="space-y-4">
              <div className="flex flex-col space-y-2 text-sm font-sans font-semibold text-zinc-800">
                <Link
                  href="#top"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-full bg-[#f2ecdf] text-zinc-950 font-bold flex items-center justify-between"
                >
                  <span>Home</span>
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                </Link>
                <a
                  href="#dashboard-preview"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04] flex items-center justify-between"
                >
                  <span>Field ERP</span>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    LIVE
                  </span>
                </a>
                <a
                  href="#friction"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04]"
                >
                  Protocol
                </a>
                <a
                  href="#lifecycle"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04]"
                >
                  Lifecycle
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04]"
                >
                  Pricing
                </a>
                <a
                  href="#friction"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04]"
                >
                  Policies
                </a>
                <a
                  href="#pillars"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04]"
                >
                  About Us
                </a>
                <a
                  href="#pilot-cta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04]"
                >
                  Contact Us
                </a>
              </div>

              {/* Mobile Contact Quick Strip */}
              <div className="pt-3 border-t border-[#ece8dc] grid grid-cols-2 gap-2 text-xs font-sans">
                <div className="p-3 rounded-xl bg-white border border-[#ece8dc]">
                  <p className="font-bold text-zinc-900">EPC Hotline</p>
                  <p className="text-zinc-600 font-mono text-[11px] mt-0.5">1800-SURYA-NEXA</p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#ece8dc]">
                  <p className="font-bold text-zinc-900">Trader Desk</p>
                  <p className="text-zinc-600 font-mono text-[11px] mt-0.5">traders@suryanexa.com</p>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2">
                <a
                  href="#pilot-cta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#064e3b] text-white font-bold text-sm shadow-md"
                >
                  <span>Sign Up</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

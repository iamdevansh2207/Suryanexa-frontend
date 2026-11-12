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
  const [userData, setUserData] = useState<{ name?: string; email?: string; role?: string; avatar?: string } | null>(null);
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

  // Read logged-in trader details dynamically
  useEffect(() => {
    const loadUser = () => {
      if (typeof window !== "undefined") {
        try {
          const stored = localStorage.getItem("suryanexa_user");
          if (stored) {
            const parsed = JSON.parse(stored);
            if (parsed && (parsed.name || parsed.email)) {
              setIsLoggedIn(true);
              setUserData(parsed);
              return;
            }
          }
          setIsLoggedIn(false);
          setUserData(null);
        } catch (err) {
          console.error("Error loading user in navbar:", err);
        }
      }
    };

    loadUser();
    window.addEventListener("storage", loadUser);
    window.addEventListener("suryanexa_user_updated", loadUser);
    return () => {
      window.removeEventListener("storage", loadUser);
      window.removeEventListener("suryanexa_user_updated", loadUser);
    };
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
      toast.success("Welcome back, Verified Trader");
    }
  };

  const handleLogout = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoggedIn(false);
    setShowUserMenu(false);
    setShowActivities(false);
    setUserData(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem("suryanexa_user");
    }
    toast.info("Logged out successfully");
  };

  const displayName = userData?.name || "Dev";
  const displayEmail = userData?.email || "devb4111@gmail.com";
  const userAvatar = userData?.avatar || null;
  const userInitials =
    displayName
      .split(" ")
      .map((n) => n[0])
      .filter(Boolean)
      .join("")
      .slice(0, 2)
      .toUpperCase() || "D";

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
          <Link href="/" onClick={() => setActiveLink("home")} className="flex items-center gap-2.5 group">
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-105 shrink-0">
              <img
                src="/suryanexa-logo.png"
                alt="SuryaNexa Logo"
                className="w-full h-full object-contain drop-shadow-sm"
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
            href="/"
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
          <Link
            href="/#pricing"
            onClick={() => setActiveLink("pricing")}
            className={`px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer ${
              activeLink === "pricing" ? "text-zinc-950 font-bold" : "text-zinc-700 hover:text-zinc-950"
            }`}
          >
            Pricing
          </Link>

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
                          href="/#friction"
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
                          <li><a href="/#friction" className="hover:text-emerald-700">Terms of Service</a></li>
                          <li><a href="/#friction" className="hover:text-emerald-700">Trader Code</a></li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block mb-1">Privacy</span>
                        <ul className="space-y-1 text-zinc-700 font-medium text-[11px]">
                          <li><a href="/#friction" className="hover:text-emerald-700">Privacy Vault</a></li>
                          <li><a href="/#friction" className="hover:text-emerald-700">Lead Encryption</a></li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block mb-1">Escrow</span>
                        <ul className="space-y-1 text-zinc-700 font-medium text-[11px]">
                          <li><a href="/#friction" className="hover:text-emerald-700">Escrow Terms</a></li>
                          <li><a href="/#friction" className="hover:text-emerald-700">Transit Claims</a></li>
                        </ul>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-zinc-500 uppercase block mb-1">Regulatory</span>
                        <ul className="space-y-1 text-zinc-700 font-medium text-[11px]">
                          <li><a href="/#friction" className="hover:text-emerald-700">DISCOM SLAs</a></li>
                          <li><a href="/#friction" className="hover:text-emerald-700">OEM Warranty</a></li>
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
                      <a href="/#pillars" className="p-3 rounded-xl bg-white/70 hover:bg-emerald-50 border border-[#ece8dc] transition-colors block">
                        <strong className="text-zinc-950 block mb-0.5">7 Connected Pillars</strong>
                        <span className="text-[11px] text-zinc-600">Unified operations for EPCs, traders and installers.</span>
                      </a>
                      <a href="/#friction" className="p-3 rounded-xl bg-white/70 hover:bg-emerald-50 border border-[#ece8dc] transition-colors block">
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
               - Circular Bell Button (Appears ONLY after log in)
               - Circular Person Avatar (Logged In) / Single Auth CTA (Logged Out)
           ========================================================================= */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          
          {/* Notification Bell in Circular Frame - renders ONLY after login */}
          {isLoggedIn && (
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
          )}

          {/* Single Unified "Log In / Sign Up" Button or Circular Person Avatar */}
          <AnimatePresence mode="wait">
            {!isLoggedIn ? (
              <Link
                key="auth-btn"
                href="/login"
                className="px-5 sm:px-6 py-2 rounded-full text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 shadow-xs shadow-emerald-950/20 hover:shadow-md transition-all duration-200 cursor-pointer flex items-center justify-center leading-none"
              >
                Log In / Sign Up
              </Link>
            ) : (
              <div key="user-circular-hub" className="relative">
                {/* Circular box containing the image of the person, or initials if no image */}
                <button
                  type="button"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  title={`${displayName} (${userData?.role || "User"})`}
                  className="w-10 h-10 rounded-full border-2 border-emerald-600/40 hover:border-emerald-600 p-0.5 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center overflow-hidden bg-white active:scale-95"
                >
                  {userAvatar ? (
                    <img
                      src={userAvatar}
                      alt={displayName}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs uppercase select-none tracking-wider">
                      {userInitials}
                    </div>
                  )}
                </button>

                <AnimatePresence>
                  {showUserMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      className="absolute right-0 top-full mt-2 w-60 rounded-2xl bg-[#faf8f3] border border-[#e5e1d4] p-2 shadow-xl z-50 text-xs font-sans text-zinc-900"
                    >
                      <div className="px-3 py-2.5 border-b border-[#ece8dc] flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full shrink-0 border border-emerald-600/30 overflow-hidden bg-white flex items-center justify-center">
                          {userAvatar ? (
                            <img src={userAvatar} alt={displayName} className="w-full h-full object-cover" />
                          ) : (
                            <div className="w-full h-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs uppercase">
                              {userInitials}
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold font-display text-zinc-950 truncate text-xs">{displayName}</p>
                          <p className="text-[10px] text-zinc-500 truncate">{displayEmail}</p>
                        </div>
                      </div>
                      <div className="py-1">
                        <Link
                          href={userData?.role?.toUpperCase().includes("VENDOR") ? "/vendor/profile" : "/trader/profile"}
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-white text-zinc-900 font-semibold"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            {userData?.role?.toUpperCase().includes("VENDOR") ? "Vendor Profile" : "Trader Profile"}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded font-bold">
                            {userData?.role?.toUpperCase().includes("VENDOR") ? "PLANS" : "KYC"}
                          </span>
                        </Link>
                        <a href="/#friction" className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-white text-zinc-700 hover:text-zinc-950">
                          <span>Trading Terms & Escrow</span>
                          <ExternalLink className="w-3 h-3 text-zinc-400" />
                        </a>
                      </div>
                      <div className="pt-1 border-t border-[#ece8dc]">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-rose-50 text-rose-600 font-semibold text-left cursor-pointer"
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
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-full bg-[#f2ecdf] text-zinc-950 font-bold flex items-center justify-between"
                >
                  <span>Home</span>
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                </Link>
                <Link
                  href="/#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04]"
                >
                  Pricing
                </Link>
                <Link
                  href="/#friction"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04]"
                >
                  Policies
                </Link>
                <Link
                  href={
                    isLoggedIn
                      ? (userData?.role?.toUpperCase().includes("VENDOR") ? "/vendor/profile" : "/trader/profile")
                      : "/login?redirect=/profile"
                  }
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04] flex items-center justify-between text-zinc-900"
                >
                  <span className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${isLoggedIn ? "bg-emerald-600" : "bg-zinc-400"}`} />
                    {isLoggedIn
                      ? (userData?.role?.toUpperCase().includes("VENDOR") ? "Vendor Profile & Plans" : "Trader Profile & KYC")
                      : "Access Profile Portal"}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                    {isLoggedIn ? "PORTAL" : "LOGIN"}
                  </span>
                </Link>
                <Link
                  href="/#pillars"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04]"
                >
                  About Us
                </Link>
                <Link
                  href="/#pilot-cta"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl hover:bg-black/[0.04]"
                >
                  Contact Us
                </Link>
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

              {/* Mobile Single Auth CTA or User Info */}
              <div className="pt-2">
                {isLoggedIn ? (
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-white border border-[#ece8dc]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full border border-emerald-600/30 overflow-hidden bg-white flex items-center justify-center shrink-0">
                        {userAvatar ? (
                          <img src={userAvatar} alt={displayName} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs uppercase">
                            {userInitials}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-zinc-950 text-xs truncate">{displayName}</p>
                        <p className="text-[10px] text-zinc-500 truncate">{displayEmail}</p>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="px-3 py-1.5 rounded-lg bg-rose-50 text-rose-600 hover:bg-rose-100 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm shadow-md transition-colors"
                  >
                    <span>Log In / Sign Up</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

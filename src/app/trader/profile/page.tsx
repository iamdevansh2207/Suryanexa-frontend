"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  LayoutGrid,
  LogOut,
  ChevronDown,
  ArrowRight,
  Check,
  Building2,
  Mail,
  Phone,
  Globe,
  MapPin,
  ShieldCheck,
  Camera,
  User
} from "lucide-react";
import DedicatedNavbar from "@/components/stitch/DedicatedNavbar";
import StitchFooter from "@/components/stitch/StitchFooter";

type VerificationStatus = "PENDING_DETAILS" | "UNDER_REVIEW" | "VERIFIED";

export default function TraderProfilePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Authentication & Dynamic Trader Identity
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("TRADER");
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState<string | null>(null);

  // Trader Form Fields - All Blank by default
  const [companyName, setCompanyName] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [companyPhone, setCompanyPhone] = useState("");
  const [countryCode] = useState("+91");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [paymentPreference, setPaymentPreference] = useState("");

  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>("PENDING_DETAILS");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Strict Authentication Guard: Only authenticated users can access profile
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem("suryanexa_user");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (parsed && (parsed.name || parsed.email)) {
            setIsLoggedIn(true);
            setUserName(parsed.name || "");
            setUserEmail(parsed.email || "");
            setUserRole("TRADER");
            if (parsed.avatar) setUserAvatar(parsed.avatar);

            // Populate form only if explicitly saved before
            if (parsed.savedTraderVerification) {
              if (parsed.companyName) setCompanyName(parsed.companyName);
              if (parsed.officialEmail) setOfficialEmail(parsed.officialEmail);
              if (parsed.companyPhone) setCompanyPhone(parsed.companyPhone);
              if (parsed.website) setWebsite(parsed.website);
              if (parsed.address) setAddress(parsed.address);
              if (parsed.paymentPreference) setPaymentPreference(parsed.paymentPreference);
              if (parsed.verificationStatus) setVerificationStatus(parsed.verificationStatus);
            }
            setIsAuthChecking(false);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to read user from localStorage", err);
      }

      // If not logged in, redirect to login page immediately
      router.replace("/login?redirect=/trader/profile");
    }
  }, [router]);

  // Handle Photo / Avatar upload
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setUserAvatar(base64);
        if (typeof window !== "undefined") {
          const current = JSON.parse(localStorage.getItem("suryanexa_user") || "{}");
          const updated = { ...current, avatar: base64 };
          localStorage.setItem("suryanexa_user", JSON.stringify(updated));
          window.dispatchEvent(new Event("suryanexa_user_updated"));
        }
        setToastMessage("Profile picture updated successfully!");
        setTimeout(() => setToastMessage(null), 4000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveVerification = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setVerificationStatus("UNDER_REVIEW");
      if (typeof window !== "undefined") {
        const current = JSON.parse(localStorage.getItem("suryanexa_user") || "{}");
        const updated = {
          ...current,
          name: userName || current.name,
          email: userEmail || current.email,
          role: "TRADER",
          avatar: userAvatar || current.avatar,
          companyName,
          officialEmail,
          companyPhone,
          website,
          address,
          paymentPreference,
          verificationStatus: "UNDER_REVIEW",
          savedTraderVerification: true
        };
        localStorage.setItem("suryanexa_user", JSON.stringify(updated));
        window.dispatchEvent(new Event("suryanexa_user_updated"));
      }
      setToastMessage("Verification details submitted successfully! Your account is now under review.");
      setTimeout(() => setToastMessage(null), 5000);
    }, 900);
  };

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("suryanexa_user");
      window.dispatchEvent(new Event("suryanexa_user_updated"));
    }
    setIsLoggedIn(false);
    router.push("/login");
  };

  const userInitials =
    (userName || "Dev")
      .split(" ")
      .map((n) => n[0])
      .filter(Boolean)
      .join("")
      .slice(0, 2)
      .toUpperCase() || "D";

  if (isAuthChecking) {
    return (
      <div className="min-h-screen bg-[#faf8f3] flex flex-col items-center justify-center space-y-4">
        <div className="w-10 h-10 rounded-full border-3 border-emerald-600 border-t-transparent animate-spin" />
        <p className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest">
          Verifying Trader Session...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f3] text-zinc-900 font-sans selection:bg-emerald-600 selection:text-white flex flex-col justify-between overflow-x-hidden">
      {/* Top Navigation */}
      <DedicatedNavbar />

      {/* Floating Notification Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 right-6 z-50 max-w-md bg-[#064e3b] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-emerald-500/40 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-emerald-300" />
            </div>
            <div className="text-xs sm:text-sm font-medium leading-snug">{toastMessage}</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 w-full pt-[74px]">
        {/* =========================================================================
            1. FULL-WIDTH PANORAMIC SOLAR BANNER (100vw x 50vh, No overlays on top)
           ========================================================================= */}
        <div className="relative w-full w-[100vw] max-w-full h-[50vh] overflow-hidden bg-[#ede8db]">
          <img
            src="/profile-solar-panoramic.jpg"
            alt="Solar Field Panoramic Banner"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/profile-solar-banner.jpg";
            }}
          />
          {/* Subtle atmospheric gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>

        {/* =========================================================================
            2. TRADER PROFILE CONTENT SECTION (-mt-16 to overlay lower banner)
           ========================================================================= */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 pb-20 space-y-6">
          
          {/* Top User Identity Card */}
          <div className="w-full rounded-2xl sm:rounded-3xl bg-white border border-[#ece8dc] p-5 sm:p-6 shadow-md flex items-center justify-between flex-wrap gap-4 transition-all hover:shadow-lg">
            <div className="flex items-center gap-4">
              {/* Circular / Rounded Avatar with Image Upload capability */}
              <div className="relative group shrink-0">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-emerald-50 border-2 border-emerald-200/90 flex items-center justify-center overflow-hidden shadow-xs">
                  {userAvatar ? (
                    <img
                      src={userAvatar}
                      alt={userName || "Trader"}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-emerald-700 text-white flex items-center justify-center font-bold text-sm uppercase select-none">
                      {userInitials}
                    </div>
                  )}
                </div>

                {/* Upload Image Camera Button */}
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Upload profile picture"
                  className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white flex items-center justify-center shadow-md transition-all cursor-pointer group-hover:scale-105"
                >
                  <Camera className="w-3 h-3" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
              </div>

              {/* User info */}
              <div className="space-y-0.5">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-lg sm:text-xl font-bold font-display text-zinc-950 leading-none">
                    {userName || (isLoggedIn ? "Dev" : "Guest Trader")}
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-wider bg-emerald-50 text-emerald-800 uppercase border border-emerald-200">
                    {userRole}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 font-sans">
                  {userEmail || (isLoggedIn ? "devb4111@gmail.com" : "Not logged in")}
                </p>
              </div>
            </div>

            {/* Right Action Cluster: Dashboard Button appears ONLY AFTER USER GETS VERIFIED */}
            <div className="flex items-center gap-3">
              {isLoggedIn && verificationStatus === "VERIFIED" && (
                <button
                  type="button"
                  onClick={() => {
                    setToastMessage("Opening Trader Operations & Wholesale Dispatch Console...");
                    setTimeout(() => setToastMessage(null), 4000);
                  }}
                  className="px-4 sm:px-5 py-2.5 rounded-xl font-bold font-display text-xs sm:text-sm text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>Open Trader Dashboard</span>
                </button>
              )}

              {/* Original Log Out Button - kept intact */}
              <button
                onClick={handleLogout}
                title="Log Out of SuryaNexa"
                className="w-10 h-10 rounded-xl bg-white hover:bg-rose-50 border border-zinc-200 hover:border-rose-200 text-zinc-600 hover:text-rose-600 flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95 shrink-0"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Trader Verification Details Form Card */}
          <div className="w-full rounded-2xl sm:rounded-3xl bg-white border border-[#ece8dc] p-6 sm:p-8 shadow-md">
            <form onSubmit={handleSaveVerification} className="space-y-6">
              
              {/* Status Bar Container */}
              <div
                className={`rounded-xl p-4 sm:p-5 border transition-all ${
                  verificationStatus === "VERIFIED"
                    ? "bg-emerald-50/80 border-emerald-200 text-emerald-900"
                    : verificationStatus === "UNDER_REVIEW"
                    ? "bg-amber-50/70 border-amber-200 text-amber-950"
                    : "bg-[#f4f2eb]/80 border-[#ece8dc] text-zinc-700"
                }`}
              >
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">
                  Verification Status:
                </div>
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-sm sm:text-base font-extrabold font-mono tracking-wide text-zinc-950 flex items-center gap-2">
                    {verificationStatus}
                    {verificationStatus === "VERIFIED" && (
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    )}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-zinc-600 font-medium">
                      {verificationStatus === "PENDING_DETAILS" && "Fill required details to request verified wholesale trader badge."}
                      {verificationStatus === "UNDER_REVIEW" && "SuryaNexa Compliance Desk is auditing your KYC & GST details."}
                      {verificationStatus === "VERIFIED" && "Your verified trader credentials are active. Trader dashboard unlocked."}
                    </span>
                    {verificationStatus !== "VERIFIED" && (
                      <button
                        type="button"
                        onClick={() => {
                          setVerificationStatus("VERIFIED");
                          if (typeof window !== "undefined") {
                            const current = JSON.parse(localStorage.getItem("suryanexa_user") || "{}");
                            localStorage.setItem(
                              "suryanexa_user",
                              JSON.stringify({ ...current, verificationStatus: "VERIFIED" })
                            );
                            window.dispatchEvent(new Event("suryanexa_user_updated"));
                          }
                          setToastMessage("Account approved and verified! Trader dashboard unlocked.");
                          setTimeout(() => setToastMessage(null), 4000);
                        }}
                        className="text-[11px] font-bold text-emerald-700 hover:text-emerald-900 underline underline-offset-2 shrink-0 cursor-pointer"
                        title="Simulate Instant KYC Verification Approval"
                      >
                        Approve KYC (Demo)
                      </button>
                    )}
                    {verificationStatus === "VERIFIED" && (
                      <button
                        type="button"
                        onClick={() => {
                          setVerificationStatus("PENDING_DETAILS");
                          if (typeof window !== "undefined") {
                            const current = JSON.parse(localStorage.getItem("suryanexa_user") || "{}");
                            localStorage.setItem(
                              "suryanexa_user",
                              JSON.stringify({ ...current, verificationStatus: "PENDING_DETAILS" })
                            );
                            window.dispatchEvent(new Event("suryanexa_user_updated"));
                          }
                          setToastMessage("Verification reset to PENDING_DETAILS for testing.");
                          setTimeout(() => setToastMessage(null), 4000);
                        }}
                        className="text-[10px] font-bold text-zinc-500 hover:text-zinc-700 underline underline-offset-2 shrink-0 cursor-pointer"
                        title="Reset to test unverified state"
                      >
                        Reset Status
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Company / Entity Name * */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-zinc-800">
                  Company / Entity Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="e.g. Nexus Solar Trade Ltd"
                  className="w-full rounded-xl bg-white border border-zinc-300 px-4 py-3 sm:py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-sans shadow-2xs transition-all"
                />
              </div>

              {/* Row: Official Email *, Company Phone *, Website */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Official Email * */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-zinc-800">
                    Official Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={officialEmail}
                    onChange={(e) => setOfficialEmail(e.target.value)}
                    placeholder="trader@nexus.com"
                    className="w-full rounded-xl bg-white border border-zinc-300 px-4 py-3 sm:py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-sans shadow-2xs transition-all"
                  />
                </div>

                {/* Company Phone * with Country Code Prefix */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-zinc-800">
                    Company Phone <span className="text-red-500">*</span>
                  </label>
                  <div className="flex rounded-xl bg-white border border-zinc-300 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-600 overflow-hidden shadow-2xs transition-all">
                    <div className="bg-zinc-50 border-r border-zinc-300 px-3 py-3 sm:py-3.5 flex items-center gap-1.5 shrink-0 text-xs font-bold text-zinc-800 cursor-pointer">
                      <span>🇮🇳</span>
                      <span>{countryCode}</span>
                      <ChevronDown className="w-3 h-3 text-zinc-500" />
                    </div>
                    <input
                      type="tel"
                      required
                      value={companyPhone}
                      onChange={(e) => setCompanyPhone(e.target.value)}
                      placeholder="98765 43210"
                      className="w-full bg-transparent px-3 py-3 sm:py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 outline-none"
                    />
                  </div>
                </div>

                {/* Website */}
                <div className="space-y-2">
                  <label className="block text-xs sm:text-sm font-bold text-zinc-800">
                    Website
                  </label>
                  <input
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://nexus.com"
                    className="w-full rounded-xl bg-white border border-zinc-300 px-4 py-3 sm:py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-sans shadow-2xs transition-all"
                  />
                </div>
              </div>

              {/* Warehouse / Office Address * */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-zinc-800">
                  Warehouse / Office Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Industrial Park, Sector 58"
                  className="w-full rounded-xl bg-white border border-zinc-300 px-4 py-3 sm:py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-sans shadow-2xs transition-all"
                />
              </div>

              {/* Payment Preference Dropdown */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-bold text-zinc-800">
                  Payment Preference
                </label>
                <div className="relative">
                  <select
                    value={paymentPreference}
                    onChange={(e) => setPaymentPreference(e.target.value)}
                    className="w-full appearance-none rounded-xl bg-white border border-zinc-300 px-4 py-3 sm:py-3.5 pr-10 text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 shadow-2xs transition-all cursor-pointer font-medium"
                  >
                    <option value="" disabled className="text-zinc-400">Select payment preference</option>
                    <option value="100% Advance (before dispatch)">100% Advance (before dispatch)</option>
                    <option value="50% Advance + 50% on Delivery BL">50% Advance + 50% on Delivery BL</option>
                    <option value="Letter of Credit (LC) / Bank Guarantee">Letter of Credit (LC) / Bank Guarantee</option>
                    <option value="30-Day Milestone Credit for Verified EPCs">30-Day Milestone Credit for Verified EPCs</option>
                    <option value="Escrow Account Protected Settlement">Escrow Account Protected Settlement</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-zinc-500 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Action Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold font-display text-sm text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting Verification...</span>
                    </>
                  ) : (
                    <>
                      <span>Save &amp; Request Verification</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>

      {/* Main Website Footer */}
      <StitchFooter />
    </div>
  );
}

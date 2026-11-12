"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Store,
  LayoutGrid,
  LogOut,
  MapPin,
  Building2,
  ArrowRight,
  Check,
  CreditCard,
  Clock,
  Sparkles,
  ExternalLink,
  Camera
} from "lucide-react";
import DedicatedNavbar from "@/components/stitch/DedicatedNavbar";
import StitchFooter from "@/components/stitch/StitchFooter";

type VendorTab = "profile" | "plans";

interface PaymentTransaction {
  id: string;
  plan: string;
  credits: number;
  date: string;
  status: "COMPLETED" | "PENDING";
}

export default function VendorProfilePage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Authentication & Dynamic Vendor Identity
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("SOLAR VENDOR");
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState<string | null>(null);

  // Vendor Active Tab: "profile" vs "plans"
  const [activeTab, setActiveTab] = useState<VendorTab>("profile");

  // Vendor Profile Form Fields - All Blank by default
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [gstNumber, setGstNumber] = useState("");

  // Plan & Payment History State
  const [hasPurchasedPlan, setHasPurchasedPlan] = useState(false);
  const [activePlanName, setActivePlanName] = useState("6 month plan");
  const [activePlanExpiry, setActivePlanExpiry] = useState("5/11/2027");
  const [activePlanCredits, setActivePlanCredits] = useState(6000);

  // Transactions list showing completed and pending gateway payments
  const [transactions, setTransactions] = useState<PaymentTransaction[]>([
    {
      id: "tx-6002",
      plan: "Standard Monthly plan",
      credits: 1000,
      date: "11/12/2026",
      status: "PENDING"
    },
    {
      id: "tx-6003",
      plan: "Standard Monthly plan",
      credits: 1000,
      date: "11/12/2026",
      status: "PENDING"
    }
  ]);

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
            setUserRole("SOLAR VENDOR");
            if (parsed.avatar) setUserAvatar(parsed.avatar);

            // Plan subscription purchase state
            if (parsed.hasPurchasedPlan !== undefined) {
              setHasPurchasedPlan(parsed.hasPurchasedPlan);
              if (parsed.transactions) {
                setTransactions(parsed.transactions);
              } else if (parsed.hasPurchasedPlan) {
                setTransactions([
                  {
                    id: "tx-6001",
                    plan: "6 month plan",
                    credits: 6000,
                    date: "11/12/2026",
                    status: "COMPLETED"
                  },
                  {
                    id: "tx-6002",
                    plan: "Standard Monthly plan",
                    credits: 1000,
                    date: "11/12/2026",
                    status: "PENDING"
                  }
                ]);
              }
            } else {
              setHasPurchasedPlan(false);
            }

            // Populate form only if explicitly saved before
            if (parsed.savedVendorProfile) {
              if (parsed.streetAddress) setStreetAddress(parsed.streetAddress);
              if (parsed.city) setCity(parsed.city);
              if (parsed.state) setState(parsed.state);
              if (parsed.vendorCompanyName) setCompanyName(parsed.vendorCompanyName);
              if (parsed.gstNumber) setGstNumber(parsed.gstNumber);
            }
            setIsAuthChecking(false);
            return;
          }
        }
      } catch (err) {
        console.error("Failed to read user from localStorage", err);
      }

      // If not logged in, redirect to login page immediately
      router.replace("/login?redirect=/vendor/profile");
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

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      if (typeof window !== "undefined") {
        const current = JSON.parse(localStorage.getItem("suryanexa_user") || "{}");
        const updated = {
          ...current,
          name: userName || current.name,
          email: userEmail || current.email,
          role: "VENDOR",
          avatar: userAvatar || current.avatar,
          streetAddress,
          city,
          state,
          vendorCompanyName: companyName,
          gstNumber,
          savedVendorProfile: true
        };
        localStorage.setItem("suryanexa_user", JSON.stringify(updated));
        window.dispatchEvent(new Event("suryanexa_user_updated"));
      }
      setToastMessage("Vendor profile updated successfully!");
      setTimeout(() => setToastMessage(null), 5000);
    }, 800);
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
    (userName || "Fhvvh")
      .split(" ")
      .map((n) => n[0])
      .filter(Boolean)
      .join("")
      .slice(0, 2)
      .toUpperCase() || "F";

  if (isAuthChecking) {
    return (
      <div className="min-h-screen bg-[#faf8f3] flex flex-col items-center justify-center space-y-4">
        <div className="w-10 h-10 rounded-full border-3 border-emerald-600 border-t-transparent animate-spin" />
        <p className="text-xs font-mono font-bold text-zinc-600 uppercase tracking-widest">
          Verifying Vendor Session...
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
            src="/vendor-solar-hq-panoramic.jpg"
            alt="Solar Commercial Headquarters Panoramic Banner"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/vendor-solar-building.jpg";
            }}
          />
          {/* Subtle gradient vignette at base for seamless visual transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        </div>

        {/* =========================================================================
            2. VENDOR PROFILE CONTENT SECTION (-mt-16 to overlay lower banner)
           ========================================================================= */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-20 pb-20 space-y-6">

          {/* Top Vendor Identity Card */}
          <div className="w-full rounded-2xl sm:rounded-3xl bg-white border border-[#ece8dc] p-5 sm:p-6 shadow-md flex items-center justify-between flex-wrap gap-4 transition-all hover:shadow-lg">
            <div className="flex items-center gap-4">
              {/* Circular / Rounded Avatar with Image Upload capability */}
              <div className="relative group shrink-0">
                <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-emerald-50 border-2 border-emerald-200/90 flex items-center justify-center overflow-hidden shadow-xs">
                  {userAvatar ? (
                    <img
                      src={userAvatar}
                      alt={userName || "Vendor"}
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

              {/* Vendor info */}
              <div className="space-y-0.5">
                <div className="flex items-center gap-2.5">
                  <h2 className="text-lg sm:text-xl font-bold font-display text-zinc-950 leading-none">
                    {userName || (isLoggedIn ? "Fhvvh" : "Guest Vendor")}
                  </h2>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-extrabold tracking-wider bg-emerald-50 text-emerald-800 uppercase border border-emerald-200">
                    {userRole}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 font-sans">
                  {userEmail || (isLoggedIn ? "236301078@gkv.ac.in" : "Not logged in")}
                </p>
              </div>
            </div>

            {/* Right Action Cluster: Dashboard Button appears ONLY AFTER USER PURCHASES A SUBSCRIPTION PLAN */}
            <div className="flex items-center gap-3">
              {isLoggedIn && hasPurchasedPlan && (
                <button
                  type="button"
                  onClick={() => {
                    setToastMessage("Opening Vendor Dashboard & Order Fulfillment Console...");
                    setTimeout(() => setToastMessage(null), 4000);
                  }}
                  className="px-4 sm:px-5 py-2.5 rounded-xl font-bold font-display text-xs sm:text-sm text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <LayoutGrid className="w-4 h-4" />
                  <span>Open Vendor Dashboard</span>
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

          {/* Section Navigation Tabs: Profile & Company vs Plan & Credit Status */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setActiveTab("profile")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-display transition-all cursor-pointer ${
                activeTab === "profile"
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 border border-zinc-200"
              }`}
            >
              Profile &amp; Company
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("plans")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-display transition-all cursor-pointer ${
                activeTab === "plans"
                  ? "bg-emerald-700 text-white shadow-xs"
                  : "bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 border border-zinc-200"
              }`}
            >
              Plan &amp; Credit Status
            </button>
          </div>

          {/* =======================================================================
              TAB 1: PROFILE & COMPANY (Entry fields, all start blank)
             ======================================================================= */}
          {activeTab === "profile" && (
            <div className="w-full rounded-2xl sm:rounded-3xl bg-white border border-[#ece8dc] p-6 sm:p-8 shadow-md">
              <form onSubmit={handleSaveProfile} className="space-y-8">
                
                {/* 1. Personal Address (Mandatory) */}
                <div className="rounded-2xl border border-zinc-200 bg-[#faf8f3]/60 p-5 sm:p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-950">
                    <MapPin className="w-4 h-4 text-emerald-700" />
                    <span>Personal Address (Mandatory)</span>
                  </div>

                  {/* Street / House Address * */}
                  <div className="space-y-1.5">
                    <label className="block text-xs sm:text-sm font-bold text-zinc-800">
                      Street / House Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      placeholder="e.g. 104, Sunrise Boulevard, Phase 2"
                      className="w-full rounded-xl bg-white border border-zinc-300 px-4 py-3 sm:py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-sans shadow-2xs transition-all"
                    />
                  </div>

                  {/* City * & State * */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-bold text-zinc-800">
                        City <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Bengaluru"
                        className="w-full rounded-xl bg-white border border-zinc-300 px-4 py-3 sm:py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-sans shadow-2xs transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-bold text-zinc-800">
                        State <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="e.g. Karnataka"
                        className="w-full rounded-xl bg-white border border-zinc-300 px-4 py-3 sm:py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-sans shadow-2xs transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Company Details (Optional) */}
                <div className="rounded-2xl border border-zinc-200 bg-[#faf8f3]/60 p-5 sm:p-6 space-y-4">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-zinc-950">
                    <Building2 className="w-4 h-4 text-emerald-700" />
                    <span>Company Details (Optional)</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-bold text-zinc-800">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. SunServe Solar Solutions"
                        className="w-full rounded-xl bg-white border border-zinc-300 px-4 py-3 sm:py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-sans shadow-2xs transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs sm:text-sm font-bold text-zinc-800">
                        GST Number
                      </label>
                      <input
                        type="text"
                        value={gstNumber}
                        onChange={(e) => setGstNumber(e.target.value)}
                        placeholder="e.g. 29ABCDE1234F1Z5"
                        className="w-full rounded-xl bg-white border border-zinc-300 px-4 py-3 sm:py-3.5 text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 font-sans shadow-2xs transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Save Profile Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold font-display text-sm text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Saving Profile...</span>
                      </>
                    ) : (
                      <>
                        <span>Save Profile</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* =======================================================================
              TAB 2: PLAN & CREDIT STATUS (Active plan + Payment Gateway History)
             ======================================================================= */}
          {activeTab === "plans" && (
            <div className="space-y-6">
              
              {/* Subscription Status Card */}
              {hasPurchasedPlan ? (
                /* State A: Active Subscription Plan Purchased */
                <div className="w-full rounded-2xl sm:rounded-3xl bg-white border border-[#ece8dc] p-6 sm:p-8 shadow-md flex items-center justify-between flex-wrap gap-6">
                  <div className="space-y-1.5">
                    <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Active Subscription Plan
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-emerald-800">
                      {activePlanName}
                    </h3>
                    <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-500 font-medium flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-zinc-400" />
                        Expires: {activePlanExpiry}
                      </span>
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-zinc-300" />
                      <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        {activePlanCredits.toLocaleString()} Verified Credits Available
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Upgrade / Change Plan button directs to /#pricing */}
                    <Link
                      href="/#pricing"
                      className="px-6 py-3 rounded-xl font-bold font-display text-xs sm:text-sm text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 active:scale-98 transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Upgrade / Change Plan</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>

                    {/* Quick Reset Button for Demo Testing */}
                    <button
                      type="button"
                      onClick={() => {
                        setHasPurchasedPlan(false);
                        const updatedTx = transactions.filter(t => t.status === "PENDING");
                        setTransactions(updatedTx);
                        if (typeof window !== "undefined") {
                          const current = JSON.parse(localStorage.getItem("suryanexa_user") || "{}");
                          localStorage.setItem(
                            "suryanexa_user",
                            JSON.stringify({ ...current, hasPurchasedPlan: false, transactions: updatedTx })
                          );
                          window.dispatchEvent(new Event("suryanexa_user_updated"));
                        }
                        setToastMessage("Subscription reset to unpurchased for testing.");
                        setTimeout(() => setToastMessage(null), 4000);
                      }}
                      className="text-[11px] font-bold text-zinc-500 hover:text-zinc-700 underline underline-offset-2 cursor-pointer"
                      title="Reset subscription to test unpurchased state"
                    >
                      Reset Plan (Demo)
                    </button>
                  </div>
                </div>
              ) : (
                /* State B: No Subscription Plan Purchased Yet */
                <div className="w-full rounded-2xl sm:rounded-3xl bg-white border border-[#ece8dc] p-6 sm:p-8 shadow-md flex items-center justify-between flex-wrap gap-6">
                  <div className="space-y-1.5 max-w-xl">
                    <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-700 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      No Subscription Plan Purchased
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-zinc-950">
                      Purchase a Subscription Plan to Unlock Dashboard
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      Choose an ALMM &amp; Tier-1 validated vendor subscription tier to start receiving bulk rooftop EPC tenders and access your Vendor Operations Dashboard.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href="/#pricing"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold font-display text-xs sm:text-sm text-white bg-emerald-700 hover:bg-emerald-800 shadow-md shadow-emerald-700/20 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Explore Subscription Plans</span>
                      <ExternalLink className="w-4 h-4" />
                    </Link>

                    {/* Instant Activation Demo Button */}
                    <button
                      type="button"
                      onClick={() => {
                        setHasPurchasedPlan(true);
                        const updatedTx: PaymentTransaction[] = [
                          {
                            id: `tx-${Date.now().toString().slice(-4)}`,
                            plan: "6 month plan",
                            credits: 6000,
                            date: new Date().toLocaleDateString("en-GB"),
                            status: "COMPLETED"
                          },
                          ...transactions.filter(t => t.status === "PENDING")
                        ];
                        setTransactions(updatedTx);
                        if (typeof window !== "undefined") {
                          const current = JSON.parse(localStorage.getItem("suryanexa_user") || "{}");
                          localStorage.setItem(
                            "suryanexa_user",
                            JSON.stringify({ ...current, hasPurchasedPlan: true, transactions: updatedTx })
                          );
                          window.dispatchEvent(new Event("suryanexa_user_updated"));
                        }
                        setToastMessage("Subscription plan purchased successfully! Vendor dashboard unlocked.");
                        setTimeout(() => setToastMessage(null), 5000);
                      }}
                      className="w-full sm:w-auto px-4 py-3 rounded-xl font-bold font-display text-xs sm:text-sm text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      title="Simulate instant payment gateway success"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Activate Plan (Demo)</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Payment History Card with Pending Gateway State */}
              <div className="w-full rounded-2xl sm:rounded-3xl bg-white border border-[#ece8dc] p-6 sm:p-8 shadow-md space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                  <h4 className="text-base sm:text-lg font-bold font-display text-zinc-950">
                    Payment History
                  </h4>
                  <span className="text-xs text-zinc-500 font-medium">
                    Showing latest invoices &amp; gateway intents
                  </span>
                </div>

                {/* Responsive Transactions Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-200 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-zinc-500">
                        <th className="py-3 px-4">Plan</th>
                        <th className="py-3 px-4">Credits</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 text-xs sm:text-sm">
                      {transactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-zinc-50/70 transition-colors">
                          <td className="py-4 px-4 font-bold text-zinc-900">
                            {tx.plan}
                          </td>
                          <td className="py-4 px-4 font-mono font-semibold text-zinc-700">
                            {tx.credits.toLocaleString()}
                          </td>
                          <td className="py-4 px-4 text-zinc-600 font-medium">
                            {tx.date}
                          </td>
                          <td className="py-4 px-4 text-right">
                            {tx.status === "COMPLETED" ? (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                                COMPLETED
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-extrabold tracking-wider bg-amber-50 text-amber-700 border border-amber-200">
                                PENDING
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="pt-2 text-[11px] text-zinc-500 leading-relaxed">
                  * Payments redirected to the payment gateway but not yet finalized by the bank or merchant settlement will display as <span className="font-bold text-amber-700">PENDING</span>.
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* Main Website Footer */}
      <StitchFooter />
    </div>
  );
}

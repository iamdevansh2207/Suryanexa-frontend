"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Zap,
  Users2,
  Leaf,
  ArrowRight,
  ArrowLeft,
  CheckCircle2
} from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState<string>("");
  const [isResetSent, setIsResetSent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsResetSent(true);
    setTimeout(() => {
      setIsResetSent(false);
    }, 5000);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#0a0d14] text-white overflow-x-hidden flex flex-col justify-between selection:bg-orange-500 selection:text-white">
      {/* Background layer */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src="/login-solar-hillside-bg.jpg"
          alt="SuryaNexa Solar Hillside Architecture"
          className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] rounded-full bg-amber-500/15 blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[300px] rounded-full bg-orange-600/15 blur-[130px] pointer-events-none" />
      </div>

      {/* Top Bar */}
      <header className="relative z-20 w-full px-6 sm:px-10 lg:px-14 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
            <img
              src="/suryanexa-logo.png"
              alt="SuryaNexa Logo"
              className="w-full h-full object-contain drop-shadow-md"
            />
          </div>
          <span className="text-2xl font-black font-display tracking-tight text-white">
            Surya<span className="text-white">Nexa</span>
          </span>
        </Link>

        <div className="hidden sm:flex items-center text-xs sm:text-sm font-sans tracking-wide text-zinc-300/85">
          <span className="text-orange-500 mr-2">—</span>
          Solar. Smarter. Together.
          <span className="text-orange-500 ml-2">—</span>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-8 lg:px-14 py-8 lg:py-12">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Template Branding */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-8 lg:pr-6">
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display text-white tracking-tight leading-[1.1]">
                Powering a<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fdba74]">
                  Brighter Tomorrow
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-zinc-300 font-sans font-normal max-w-xl leading-relaxed pt-2">
                Join the solar revolution. Build. Connect. Grow.
              </p>
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-orange-950/70 border border-orange-500/40 text-orange-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(249,115,22,0.25)]">
                  <Zap className="w-5 h-5 fill-orange-400 stroke-none" />
                </div>
                <span className="text-sm sm:text-base font-sans font-medium text-zinc-200">
                  Smarter Solar Solutions
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-amber-950/70 border border-amber-500/40 text-amber-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
                  <Users2 className="w-5 h-5 stroke-[2.2]" />
                </div>
                <span className="text-sm sm:text-base font-sans font-medium text-zinc-200">
                  A Thriving Solar Ecosystem
                </span>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
                  <Leaf className="w-5 h-5 fill-emerald-400/80 stroke-none" />
                </div>
                <span className="text-sm sm:text-base font-sans font-medium text-zinc-200">
                  A Greener Planet
                </span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/15 text-xs sm:text-sm text-zinc-300 transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Log In</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Forgot Password Card */}
          <div className="lg:col-span-6 xl:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-[32px] bg-[#12151e]/85 backdrop-blur-2xl border border-white/15 p-7 sm:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.65)] relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />

              <div className="pb-4 mb-4 border-b border-white/10 flex items-center justify-between">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Log In</span>
                </Link>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-sans font-bold bg-orange-500/15 text-orange-400 border border-orange-500/30">
                  Reset Access
                </span>
              </div>

              {/* Title & Prompt Subtitle */}
              <div className="mb-6 space-y-2 text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                  Forgot your password?
                </h2>
                <p className="text-xs sm:text-sm text-zinc-300/90 font-sans leading-relaxed">
                  Enter the email you used to sign up with Suryanexa and we will send you a reset link
                </p>
              </div>

              {isResetSent && (
                <div className="mb-5 p-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Password reset link sent to your email address! Please check your inbox.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-semibold text-zinc-300 font-sans">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-zinc-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="example@domain.com"
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#1e2330]/70 border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#ea580c] via-[#f97316] to-[#fb923c] hover:from-[#f97316] hover:to-[#fdba74] text-white font-bold text-base shadow-[0_10px_25px_rgba(234,88,12,0.4)] hover:shadow-[0_12px_30px_rgba(234,88,12,0.6)] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Send me a reset link</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}


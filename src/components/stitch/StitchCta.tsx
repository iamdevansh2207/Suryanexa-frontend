"use client";

import React, { useState } from "react";
import { toast } from "sonner";

export default function StitchCta() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid work email.");
      return;
    }
    setSubmitted(true);
    toast.success("Verification request received. Our onboarding team will contact you within 24 hours.");
  };

  return (
    <section
      id="pilot-cta"
      className="w-full bg-[#faf8f3] py-20 lg:py-28 relative overflow-hidden border-t border-zinc-200/80"
    >
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-zinc-950 mb-6 leading-[1.12]">
            Run your solar business on one network. <br />
            <span className="text-emerald-700">Zero chaos. Zero lead leak.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-700 mb-10 max-w-2xl font-normal leading-relaxed">
            Join 500+ verified Indian traders and rooftop EPCs moving off disorganized WhatsApp groups and into dispute-proof execution.
          </p>

          <form className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-xl mb-8" onSubmit={handleSubmit}>
            <input
              className="px-5 py-4 rounded-xl bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 font-sans font-medium grow shadow-xs"
              placeholder="you@solarcompany.in"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
            />
            <button
              className="px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold font-display text-sm shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center space-x-2 shrink-0 cursor-pointer hover:scale-[1.02] active:scale-[0.99]"
              type="submit"
            >
              <span>Request pilot access</span>
              <span className="font-sans font-medium text-base">➔</span>
            </button>
          </form>

          <div className="flex flex-wrap items-center gap-y-2 gap-x-8 text-xs font-sans font-medium text-zinc-600">
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">✓</span> KYC VERIFICATION MANDATORY
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">✓</span> DIRECT EX-DEPOT HARDWARE
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-emerald-600 font-bold">✓</span> Q1 ALLOCATIONS ACTIVE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

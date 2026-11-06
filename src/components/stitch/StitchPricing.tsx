"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface SolarPricingPlan {
  name: string;
  badge?: string;
  isPopular?: boolean;
  price: string;
  period: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  featuresHeader: string;
  features: string[];
}

const SOLAR_PLANS: SolarPricingPlan[] = [
  {
    name: "STARTER EPC",
    badge: "90-Day Pilot",
    price: "₹4,999",
    period: "per month",
    description: "Designed for early-stage rooftop installers.",
    primaryCta: "Start 90-Day Pilot",
    secondaryCta: "Chat to sales",
    featuresHeader: "Core Rooftop Features:",
    features: [
      "15 rooftop projects included",
      "Basic SuryaCalc™ solar sizing",
      "Dispute-proof transit escrow protocol",
      "Email & standard WhatsApp support",
      "Verified wholesale catalog access",
    ],
  },
  {
    name: "GROWTH EPC & TRADER",
    badge: "Most Popular",
    isPopular: true,
    price: "₹12,999",
    period: "per month",
    description: "For scaling regional EPCs & verified stockists.",
    primaryCta: "Request Growth Access",
    secondaryCta: "Chat to sales",
    featuresHeader: "Everything in Starter plus....",
    features: [
      "Unlimited Blind-Vault™ leads",
      "Priority spot rates (Ex-depot direct)",
      "1-click DISCOM SLD dossiers & CEIG CAD",
      "180s video unboxing warranty protection",
      "6-person squad roster governance",
    ],
  },
  {
    name: "ENTERPRISE CONSORTIUM",
    badge: "Tier-1 & C&I",
    price: "Custom",
    period: "volume quote",
    description: "For multi-megawatt EPC consortiums & OEMs.",
    primaryCta: "Contact Sales Desk",
    secondaryCta: "Book Architecture Call",
    featuresHeader: "Everything in Growth plus....",
    features: [
      "Dedicated escrow operations manager",
      "Direct Tally / SAP ERP automated sync",
      "Pan-India interstate tax & e-way reconciliation",
      "99.99% uptime SLA with custom HSM vaults",
      "Custom multi-depot inventory routing",
    ],
  },
];

export default function StitchPricing() {
  const handlePrimaryAction = (plan: SolarPricingPlan) => {
    toast.success(`Selected ${plan.name}. Proceeding to onboarding...`);
    const ctaEl = document.querySelector("#pilot-cta");
    if (ctaEl) {
      ctaEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSecondaryAction = (plan: SolarPricingPlan) => {
    toast.info(`Opening direct sales consultation for ${plan.name}...`);
  };

  return (
    <section className="py-24 lg:py-32 bg-[#faf8f3] border-t border-zinc-200/80 relative" id="pricing">
      {/* Subtle ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 -right-20 w-[420px] h-[420px] rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-zinc-950 tracking-tight leading-tight">
            Predictable Plans. <br />
            <span className="text-emerald-700">Zero Hidden Commissions.</span>
          </h2>
          <p className="text-base text-zinc-600 mt-4 max-w-xl mx-auto font-sans leading-relaxed">
            Run your solar operations with transparent software subscriptions. No broker haircuts.
          </p>
        </div>

        {/* 3-Card Grid in the new clean format matching the site's palette */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
          {SOLAR_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl border transition-all flex flex-col justify-between p-6 sm:p-7 shadow-xs hover:shadow-md ${
                plan.isPopular
                  ? "border-emerald-500/80 ring-1 ring-emerald-500/20 shadow-md"
                  : "border-zinc-200 hover:border-zinc-300"
              }`}
            >
              {/* TOP SECTION: Plan Name, Price, Description, Action Buttons */}
              <div>
                {/* Plan Header & Badge */}
                <div className="flex items-center justify-between mb-4 min-h-[28px]">
                  <h3 className="text-sm sm:text-base font-bold font-display text-zinc-950">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        plan.isPopular
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                          : "bg-zinc-100 text-zinc-700 border border-zinc-200"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="flex items-baseline mb-3">
                  <span className="text-4xl sm:text-5xl font-black font-display text-zinc-950 tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-sans font-medium text-zinc-500 ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-600 font-sans leading-relaxed mb-6 min-h-[32px]">
                  {plan.description}
                </p>

                {/* Stacked Action Buttons */}
                <div className="space-y-2.5">
                  <button
                    onClick={() => handlePrimaryAction(plan)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold font-display transition-all duration-150 shadow-xs cursor-pointer ${
                      plan.isPopular
                        ? "bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20 hover:shadow-md"
                        : "bg-zinc-950 hover:bg-zinc-800 text-white"
                    }`}
                  >
                    {plan.primaryCta}
                  </button>
                  <button
                    onClick={() => handleSecondaryAction(plan)}
                    className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-zinc-50 border border-zinc-200/90 text-zinc-800 text-xs sm:text-sm font-bold font-display transition-all duration-150 shadow-xs cursor-pointer hover:border-zinc-300"
                  >
                    {plan.secondaryCta}
                  </button>
                </div>
              </div>

              {/* DIVIDER & FEATURES LIST */}
              <div className="border-t border-zinc-200/90 mt-6 pt-6">
                <div className="mb-4">
                  <span className="block text-[11px] font-mono font-bold tracking-wider uppercase text-zinc-900 mb-1">
                    FEATURES
                  </span>
                  <p className="text-xs text-zinc-500 font-sans font-medium">
                    {plan.featuresHeader}
                  </p>
                </div>

                {/* Checklist with Site-Themed Emerald Checkmarks */}
                <ul className="space-y-3">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2.5 text-xs text-zinc-700 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 stroke-[2]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

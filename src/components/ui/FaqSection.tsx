"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does the Blind-Vault CRM mathematically prevent lead exfiltration by employees?",
      a: "When customer leads arrive via Facebook, Google Ads, or your website, their raw phone numbers and home addresses are immediately encrypted into a virtual telephony tunnel. Telecallers dial directly through the browser without ever seeing the phone number (+91 98*** **421). In addition, CSV/Excel export buttons are disabled system-wide. Complete customer records are only unlocked for verified field technicians after an official site-survey appointment is scheduled and signed off."
    },
    {
      q: "How accurate is the SuryaCalc satellite engine compared to manual roof measurements?",
      a: "SuryaCalc streams ultra-high-resolution satellite tiles and runs automated contour recognition to detect usable roof perimeters. It accounts for parapet shadows, True South Azimuth (180°), and local solar irradiance tables. In 94% of residential projects, the preliminary kW sizing matches the final physical on-site audit within a ±2% margin of error, allowing you to close prospects with confidence in the initial phone call."
    },
    {
      q: "How does the Dispute-Proof Video Unloading protocol protect us against damaged panels?",
      a: "Whenever a shipment of solar panels or inverters arrives on-site, the technician's mobile app requires a 45-second continuous, time-stamped, and geocoded video showing the unbroken factory pallet seals, crate corners, and serial numbers. If transit micro-cracks or damage exist, the video provides undisputed carrier liability proof, resulting in insurer and distributor claim approvals within 2 hours instead of 6-week payment freezes."
    },
    {
      q: "Can we connect our existing verified solar distributors to SuryaNexa?",
      a: "Yes. SuryaNexa operates an open distributor hub. You can invite your preferred regional traders to list their live inventory (Tier-1 DCR, TopCon, String Inverters, BOS) directly into your team's 3-Tier Proposal Configurator. Your agreed wholesale pricing remains private between you and your trader."
    },
    {
      q: "Are the generated proposals and dossiers accepted by regional DISCOMs and PM Surya Ghar?",
      a: "Yes. SuryaNexa automatically populates standard DISCOM electrical single-line diagrams (SLD), earthing pit test certifications, and CEIG net-metering dossiers formatted specifically for state electricity distribution companies. Our automated dossiers boast a 99.4% first-pass approval rate across major DISCOM portals."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 border-b border-[#ede6d8] bg-[#faf7f2]/70">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#d97706] bg-[#fef3c7] px-3.5 py-1.5 rounded-full border border-[#fde68a] inline-block mb-3 font-bold">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1c1917] font-heading tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="mt-3 text-[#57534e] text-sm sm:text-base font-body">
            Everything you need to know about our security architecture, satellite sizing, and distributor escrow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#e2d9c8] bg-white overflow-hidden shadow-xs transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-base font-bold text-[#1c1917] font-heading">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#d97706] shrink-0 transition-transform duration-200 ${
                    openIdx === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-6 pt-1 text-sm text-[#57534e] font-body leading-relaxed border-t border-[#f0eae1]">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


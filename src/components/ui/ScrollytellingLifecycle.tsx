"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lock,
  Compass,
  FileCheck,
  Video,
  CheckCircle2,
  ArrowRight,
  Shield,
  Smartphone,
  EyeOff,
  Zap,
  Building,
  Truck
} from "lucide-react";

export function ScrollytellingLifecycle() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      id: "01",
      title: "Lead Acquisition & Virtual Blind-Vault",
      badge: "Cryptographic Protection",
      hook: "Sales reps dial via virtual proxy tunnels. Customer contact records can never be exported or copied.",
      details: [
        "Encrypted telephony proxy masks client numbers with +91 98*** **421.",
        "Zero CSV or Excel download permissions for sales representatives.",
        "Role-scoped decryption keys activated only after verified site-survey sign-off."
      ],
      mockupType: "vault",
    },
    {
      id: "02",
      title: "60-Second SuryaCalc Satellite Sizing",
      badge: "Instant Pre-Proposal",
      hook: "Satellite roof contouring calculates shadow-free area and automatically applies PM Surya Ghar subsidies.",
      details: [
        "True South Azimuth (180°) and 18.5° optimal pitch calculation.",
        "Auto-calculation of PM Surya Ghar central subsidy (₹78,000 deduction).",
        "Instant branded PDF generation dispatched to client's WhatsApp in < 60s."
      ],
      mockupType: "sizing",
    },
    {
      id: "03",
      title: "Field Survey & Mobile DB Audit",
      badge: "100% Audit-Grade",
      hook: "Mobile app guides field engineers through electrical DB health, conduit pathways, and geocoded proof.",
      details: [
        "Standardized mobile survey checklist with offline synchronization.",
        "Time-stamped photos of main distribution board, earthing pits, and parapets.",
        "Instant sync to office engineers for 3-tier final quotation issuance."
      ],
      mockupType: "survey",
    },
    {
      id: "04",
      title: "Verified Trader Lock & Video Unloading",
      badge: "Dispute-Proof Delivery",
      hook: "Order Tier-1 panels directly from verified distributors with mandatory time-stamped video unboxing.",
      details: [
        "Direct inventory reservation with live wholesale distributor pricing.",
        "Mandatory geo-stamped video unboxing before breaking pallet factory seals.",
        "Freight damage claims resolved in under 2 hours with carrier liability proof."
      ],
      mockupType: "unloading",
    },
    {
      id: "05",
      title: "Commissioning & DISCOM Net-Metering",
      badge: "Autonomous SCM",
      hook: "System generates DISCOM-compliant dossier for first-pass net-metering approvals and escrow release.",
      details: [
        "Automatic generation of CEIG/DISCOM net-metering technical dossiers.",
        "99.4% first-pass approval rate across regional electricity boards.",
        "Secure escrow release to EPC contractors upon DISCOM meter synchronization."
      ],
      mockupType: "commissioning",
    },
  ];

  return (
    <section id="lifecycle" className="py-24 px-6 border-b border-[#ede6d8] bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-wider text-[#d97706] bg-[#fef3c7] px-3.5 py-1.5 rounded-full border border-[#fde68a] inline-block mb-3 font-bold">
            The 5-Stage Project Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1c1917] font-heading tracking-tight">
            From First Lead to DISCOM Net-Metering
          </h2>
          <p className="mt-3 text-[#57534e] text-sm sm:text-base font-body">
            Experience how SuryaNexa eliminates friction across sales, engineering, field audits, and equipment suppliers.
          </p>
        </div>

        {/* Interactive Lifecycle Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Stage Navigation Timeline */}
          <div className="lg:col-span-5 space-y-3">
            {stages.map((stage, idx) => (
              <div
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`p-5 rounded-2xl transition-all border cursor-pointer ${
                  activeStage === idx
                    ? "bg-white border-[#d97706] shadow-lg shadow-[#d97706]/10"
                    : "bg-[#faf7f2] border-[#e8dfcf] hover:border-[#1c1917]/20 hover:bg-white/80"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-xs font-mono font-bold ${
                      activeStage === idx ? "text-[#d97706]" : "text-[#78716c]"
                    }`}
                  >
                    STAGE {stage.id}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#f4eee2] text-[#78644e] font-semibold">
                    {stage.badge}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#1c1917] font-heading">
                  {stage.title}
                </h4>
                <p className="text-xs text-[#57534e] font-body mt-1 line-clamp-2">
                  {stage.hook}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Interactive Mockup Stage Canvas */}
          <div className="lg:col-span-7 sticky top-28 rounded-3xl border border-[#e2d9c8] bg-white p-6 sm:p-8 shadow-xl shadow-[#261c14]/5 min-h-[480px] flex flex-col justify-between">
            {/* Active Stage Indicator Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#f0eae1]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#d97706]/10 border border-[#d97706]/20 flex items-center justify-center text-[#d97706]">
                  {activeStage === 0 && <Lock className="w-5 h-5" />}
                  {activeStage === 1 && <Compass className="w-5 h-5" />}
                  {activeStage === 2 && <Smartphone className="w-5 h-5" />}
                  {activeStage === 3 && <Video className="w-5 h-5" />}
                  {activeStage === 4 && <FileCheck className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#1c1917] font-heading">
                    {stages[activeStage].title}
                  </h3>
                  <span className="text-[11px] font-mono text-[#15803d] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-[#15803d]" /> System Verified Protocol
                  </span>
                </div>
              </div>
              <span className="text-xs font-mono font-bold text-[#d97706] bg-[#fef3c7] px-3 py-1 rounded-full border border-[#fde68a]">
                Step {activeStage + 1} of 5
              </span>
            </div>

            {/* Stage Visual Simulation Canvas */}
            <div className="my-6 p-6 rounded-2xl bg-[#faf7f2] border border-[#ece4d6] relative overflow-hidden flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {activeStage === 0 && (
                  <motion.div
                    key="stage-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[#e2d9c8]">
                      <div className="flex items-center gap-2">
                        <EyeOff className="w-4 h-4 text-[#d97706]" />
                        <span className="text-xs font-mono font-bold text-[#1c1917]">Customer Identity Masked</span>
                      </div>
                      <span className="text-[11px] font-mono text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                        Export Disabled
                      </span>
                    </div>

                    <div className="p-3.5 bg-white rounded-xl border border-[#e2d9c8] space-y-2 font-mono text-xs">
                      <div className="flex justify-between text-slate-500">
                        <span>Lead Code:</span>
                        <span className="text-[#1c1917] font-bold">SNX-ROOFTOP-4892</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Encrypted Tel:</span>
                        <span className="text-[#15803d] font-bold">+91 98*** **421 (Virtual Tunnel)</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Location Scoping:</span>
                        <span className="text-[#1c1917]">Gurugram, Sector 57 (Radius 2km)</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStage === 1 && (
                  <motion.div
                    key="stage-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[#e2d9c8]">
                      <span className="text-xs font-mono font-bold text-[#1c1917]">SuryaCalc Roof CAD Output</span>
                      <span className="text-[11px] font-mono text-[#15803d] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        60s WhatsApp PDF Dispatched
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                      <div className="p-3 bg-white rounded-xl border border-[#e2d9c8]">
                        <span className="text-[10px] text-slate-400 block">Sizing</span>
                        <span className="font-bold text-[#d97706]">8.5 kW</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#e2d9c8]">
                        <span className="text-[10px] text-slate-400 block">Subsidy</span>
                        <span className="font-bold text-[#15803d]">₹78,000</span>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-[#e2d9c8]">
                        <span className="text-[10px] text-slate-400 block">Payback</span>
                        <span className="font-bold text-[#1c1917]">3.2 Yrs</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStage === 2 && (
                  <motion.div
                    key="stage-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[#e2d9c8]">
                      <span className="text-xs font-mono font-bold text-[#1c1917]">Mobile Field Audit Checklist</span>
                      <span className="text-[11px] font-mono text-[#d97706] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Geo-Stamped Active
                      </span>
                    </div>
                    <div className="space-y-2 font-mono text-xs">
                      <div className="p-2.5 bg-white rounded-lg border border-[#e2d9c8] flex items-center justify-between">
                        <span>Distribution Board Wiring:</span>
                        <span className="text-[#15803d] font-bold">✓ 3-Phase Healthy</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-[#e2d9c8] flex items-center justify-between">
                        <span>Parapet Shadow Analysis:</span>
                        <span className="text-[#15803d] font-bold">✓ 580 sq.ft Usable</span>
                      </div>
                      <div className="p-2.5 bg-white rounded-lg border border-[#e2d9c8] flex items-center justify-between">
                        <span>DISCOM Meter Space:</span>
                        <span className="text-[#15803d] font-bold">✓ Approved Space</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStage === 3 && (
                  <motion.div
                    key="stage-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[#e2d9c8]">
                      <span className="text-xs font-mono font-bold text-[#1c1917]">Pallet Video Unloading</span>
                      <span className="text-[11px] font-mono text-[#15803d] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Zero Freight Liability
                      </span>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-[#e2d9c8] flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center text-white shrink-0">
                        <Video className="w-6 h-6 text-[#d97706]" />
                      </div>
                      <div className="text-xs font-mono">
                        <span className="font-bold text-[#1c1917] block">UNBOX-SNX-9214.mp4</span>
                        <span className="text-slate-500 block">GPS: 28.4595° N, 77.0266° E</span>
                        <span className="text-[#15803d] font-bold mt-1 block">Pallet Factory Seals Intact</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStage === 4 && (
                  <motion.div
                    key="stage-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between bg-white p-3 rounded-xl border border-[#e2d9c8]">
                      <span className="text-xs font-mono font-bold text-[#1c1917]">DISCOM Net-Metering Dossier</span>
                      <span className="text-[11px] font-mono text-[#15803d] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        First-Pass Approved
                      </span>
                    </div>
                    <div className="p-3.5 bg-white rounded-xl border border-[#e2d9c8] space-y-2 font-mono text-xs">
                      <div className="flex justify-between text-slate-500">
                        <span>CEIG Compliance:</span>
                        <span className="text-[#15803d] font-bold">Automated Signature</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Escrow Settlement:</span>
                        <span className="text-[#d97706] font-bold">100% Released to EPC</span>
                      </div>
                      <div className="flex justify-between text-slate-500">
                        <span>Total Project Cycle:</span>
                        <span className="text-[#1c1917] font-bold">11 Days (Turnkey)</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Stage Detail Bullet Points */}
            <div className="space-y-2 pt-2">
              {stages[activeStage].details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-2.5 text-xs text-[#57534e] font-body">
                  <CheckCircle2 className="w-4 h-4 text-[#15803d] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


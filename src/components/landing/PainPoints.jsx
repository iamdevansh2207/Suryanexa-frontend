"use client";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal, Eyebrow, SectionShell, EASE } from "./Reveal";
import { LANDING } from "@/constants/testIds";

const ROWS = [
  {
    pain: "Fragmented spreadsheets & paper registers",
    fix: "One cryptographic operating ledger",
    detail: "Every lead, PO and milestone lives in a single source of truth.",
  },
  {
    pain: "Unverified WhatsApp trade groups",
    fix: "KYB-verified Trader Command Center",
    detail: "Only verified bulk suppliers, importers and OEMs can list hardware.",
  },
  {
    pain: "High-intent leads get poached by rivals",
    fix: "Blind-Vault CRM with zero admin visibility",
    detail: "Not even SuryaNexa administrators can view a vendor's sealed leads.",
  },
  {
    pain: "Transit micro-cracks spark endless disputes",
    fix: "Timestamped video unloading protocol",
    detail: "Indisputable on-arrival evidence powers instant warranty claims.",
  },
  {
    pain: "Forced single-distributor kits kill margins",
    fix: "Cross-trader mix-and-match kit engine",
    detail: "Compare price vs efficiency across every verified trader, instantly.",
  },
];

const PainPoints = () => (
  <SectionShell id="pain" data-testid={LANDING.painSection} className="bg-[#eff6f1]">
    <div className="mb-14 max-w-3xl">
      <Eyebrow>Industry friction vs. the SuryaNexa standard</Eyebrow>
      <Reveal>
        <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          The solar trade still runs on chaos.
          <span className="text-gradient-eco block">We run it on protocol.</span>
        </h2>
      </Reveal>
    </div>

    <div className="flex flex-col gap-3">
      {ROWS.map((row, i) => (
        <motion.div
          key={row.pain}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
          data-testid={`pain-row-${i}`}
          className="group grid grid-cols-1 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-md md:grid-cols-[1fr_auto_1fr] md:gap-8 md:p-6"
        >
          <div className="flex items-start gap-3">
            <XCircle size={18} className="mt-0.5 shrink-0 text-red-400" />
            <p className="text-sm font-medium text-slate-500 line-through decoration-red-300 decoration-2">
              {row.pain}
            </p>
          </div>
          <ArrowRight size={18} className="hidden rotate-90 text-emerald-600 transition-transform duration-300 group-hover:scale-125 md:block md:rotate-0" />
          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold text-slate-900">{row.fix}</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">{row.detail}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionShell>
);

export default PainPoints;

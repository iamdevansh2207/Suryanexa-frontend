"use client";
import { motion } from "framer-motion";
import {
  Store,
  HardHat,
  Compass,
  Wrench,
  Factory,
  Building2,
  Home,
} from "lucide-react";
import { Reveal, Eyebrow, SectionShell, EASE } from "./Reveal";
import { LANDING } from "@/constants/testIds";

const PILLARS = [
  {
    icon: Store,
    name: "Solar Traders",
    tag: "Bulk suppliers, importers & OEMs",
    copy: "List verified catalogs and receive standardized, pre-funded POs — no more WhatsApp price tourists.",
  },
  {
    icon: HardHat,
    name: "Solar Vendors / EPCs",
    tag: "Local dealers & integrators",
    copy: "The orchestrators: private leads, micro-teams, mix-and-match hardware and turnkey delivery in one console.",
  },
  {
    icon: Compass,
    name: "Consultants",
    tag: "Sales & technical advisors",
    copy: "Join a vendor squad (max 2) from the verified pool and run feasibility, proposals and pre-sales with full tooling.",
  },
  {
    icon: Wrench,
    name: "Installers",
    tag: "Field technicians & engineers",
    copy: "Get structured site surveys, unloading checklists and milestone tasks from up to 4 seats per vendor squad.",
  },
  {
    icon: Factory,
    name: "MSMEs",
    tag: "Factories, cold storages, workshops",
    copy: "Cut operational power tariffs with high-ROI setups from ranked local vendors — with verified project history.",
  },
  {
    icon: Building2,
    name: "Commercial Consumers",
    tag: "Schools, hospitals, malls, offices",
    copy: "Source large-scale C&I installations from vendors whose delivery record is ranked, rated and dispute-proof.",
  },
  {
    icon: Home,
    name: "Residential Consumers",
    tag: "Homeowners",
    copy: "Find trusted, top-ranked local vendors for rooftop solar — chosen on verified performance, not the loudest ad.",
  },
];

const Pillars = () => (
  <SectionShell id="who" data-testid={LANDING.whoSection} className="bg-[#eff6f1]">
    <div className="mb-14 max-w-3xl">
      <Eyebrow>One network · seven pillars</Eyebrow>
      <Reveal>
        <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Built for everyone the sun touches
          <span className="text-gradient-eco block">on its way to your meter.</span>
        </h2>
      </Reveal>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {PILLARS.map((p, i) => (
        <motion.div
          key={p.name}
          data-testid={`pillar-${i}`}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
          whileHover={{ y: -6 }}
          className={`group rounded-2xl border bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-lg ${
            i === 1 ? "border-teal-300 bg-teal-50/60" : "border-slate-200 hover:border-emerald-300"
          }`}
        >
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700 transition-colors duration-300 group-hover:border-teal-300 group-hover:text-teal-700">
            <p.icon size={19} />
          </span>
          <h3 className="font-display mt-5 text-lg font-semibold text-slate-900">{p.name}</h3>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">{p.tag}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-500">{p.copy}</p>
        </motion.div>
      ))}
    </div>
  </SectionShell>
);

export default Pillars;

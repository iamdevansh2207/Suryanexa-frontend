"use client";
import { Reveal, Eyebrow, SectionShell } from "./Reveal";
import { LANDING } from "@/constants/testIds";
import {
  Store,
  Users,
  Lock,
  Boxes,
  FileCheck,
  Video,
  Trophy,
} from "lucide-react";

const STAGES = [
  {
    n: "01",
    icon: Store,
    title: "Supply Listing",
    actor: "Solar Trader",
    roles: ["Trader"],
    copy: "Traders complete KYB verification and list panels, inverters, batteries, BOS and structures — a live, searchable wholesale catalog for every vendor on the network.",
    accent: "border-emerald-300",
    chip: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  {
    n: "02",
    icon: Users,
    title: "Squad Building",
    actor: "Solar Vendor",
    roles: ["Vendor", "Consultant", "Installer"],
    copy: "The vendor assembles a 6-member squad — up to 4 installers and 2 consultants — hired from the verified platform pool or onboarded from their own crew.",
    accent: "border-teal-300",
    chip: "text-teal-700 bg-teal-50 border-teal-200",
  },
  {
    n: "03",
    icon: Lock,
    title: "Private CRM Capture",
    actor: "Vendor + Consultant",
    roles: ["Vendor", "Consultant", "Residential / MSME / Commercial"],
    copy: "Residential, MSME or commercial leads are captured inside the Blind-Vault CRM — 100% private, invisible even to SuryaNexa administrators.",
    accent: "border-emerald-300",
    chip: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  {
    n: "04",
    icon: Boxes,
    title: "Kit Engineering",
    actor: "Vendor + Consultant",
    roles: ["Vendor", "Consultant", "Trader"],
    copy: "Hardware is mixed across multiple traders to compare maximum generation efficiency against maximum price feasibility — a custom, high-conversion consumer proposal.",
    accent: "border-amber-300",
    chip: "text-amber-700 bg-amber-50 border-amber-200",
  },
  {
    n: "05",
    icon: FileCheck,
    title: "PO & Dispatch",
    actor: "Vendor ↔ Trader",
    roles: ["Vendor", "Trader"],
    copy: "The vendor issues a standardized pre-funded PO. The trader confirms the order and shares a live shipment tracking link — real-time transit visibility for the whole project team.",
    accent: "border-teal-300",
    chip: "text-teal-700 bg-teal-50 border-teal-200",
  },
  {
    n: "06",
    icon: Video,
    title: "Video Unloading",
    actor: "Vendor + Installer",
    roles: ["Vendor", "Installer"],
    copy: "At the truck, the field team completes an interactive unloading checklist and records a timestamped unloading video — 100% protection against transit-damage disputes.",
    accent: "border-emerald-300",
    chip: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  {
    n: "07",
    icon: Trophy,
    title: "Execution & Rank",
    actor: "Full Vendor Squad",
    roles: ["Vendor", "Installer", "Consumer"],
    copy: "The rooftop is commissioned, the consumer rates the experience, and the vendor's area, city and state ranking climbs — verified trust that wins the next deal.",
    accent: "border-amber-300",
    chip: "text-amber-700 bg-amber-50 border-amber-200",
  },
];

const Pipeline = () => (
  <SectionShell id="pipeline" data-testid={LANDING.pipelineSection} className="bg-[#eff6f1]">
    <div className="mb-6 max-w-3xl">
      <Eyebrow>Quotation → post-installation</Eyebrow>
      <Reveal>
        <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
          One project. Seven stages.
          <span className="text-gradient-eco block">Every role, on one network.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
          Watch a solar installation move through the SuryaNexa protocol — from a
          trader's verified catalog to a ranked, commissioned rooftop. Each stage
          names the people it sets free.
        </p>
      </Reveal>
    </div>

    <div className="mt-12 flex flex-col gap-6">
      {STAGES.map((s, i) => (
        <div key={s.n} className="sticky" style={{ top: `${96 + i * 26}px` }}>
          <div
            data-testid={`pipeline-stage-${s.n}`}
            className={`rounded-3xl border ${s.accent} bg-white p-7 shadow-[0_-8px_40px_rgba(15,23,42,0.08)] md:p-10`}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
              <div className="flex items-center gap-5 md:w-64 md:shrink-0 md:flex-col md:items-start">
                <span className="font-mono text-5xl font-semibold text-slate-200 md:text-6xl">{s.n}</span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600">
                  <s.icon size={20} />
                </span>
              </div>
              <div className="flex-1">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">
                  Stage {s.n} · {s.actor}
                </p>
                <h3 className="font-display mt-2 text-xl font-semibold text-slate-900 sm:text-2xl">{s.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">{s.copy}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.roles.map((r) => (
                    <span key={r} className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-widest ${s.chip}`}>
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="h-10" />
    </div>
  </SectionShell>
);

export default Pipeline;

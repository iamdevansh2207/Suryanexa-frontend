"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Boxes, Truck, Trophy, ShieldCheck, CheckCircle2, EyeOff } from "lucide-react";
import { Reveal, Eyebrow, SectionShell, EASE } from "./Reveal";
import { LANDING } from "@/constants/testIds";

const TABS = [
  { id: "crm", label: "Blind-Vault CRM", icon: Lock },
  { id: "kit", label: "Kit Configurator", icon: Boxes },
  { id: "po", label: "PO Dispatch", icon: Truck },
  { id: "rank", label: "Leaderboard", icon: Trophy },
];

const LEADS = [
  { id: "#4821", type: "Residential · 6kW", stage: "Survey booked", sealed: true },
  { id: "#4822", type: "MSME · Cold storage 40kW", stage: "Kit engineered", sealed: true },
  { id: "#4823", type: "Commercial · School 120kW", stage: "PO issued", sealed: false },
  { id: "#4824", type: "Residential · 3kW", stage: "New lead", sealed: true },
];

const KIT_ROWS = [
  { part: "Modules", trader: "Trader A · SuryaFab", spec: "TOPCon 585W", score: 96 },
  { part: "Inverter", trader: "Trader B · VoltEdge", spec: "Hybrid 8kW", score: 88 },
  { part: "Battery", trader: "Trader C · LithiumArc", spec: "10kWh LFP", score: 91 },
  { part: "Structures", trader: "Trader D · RailWorks", spec: "Anodized rail", score: 84 },
];

const PO_STEPS = ["PO issued", "Trader confirmed", "Dispatched", "In transit", "Video unloaded"];

const RANKS = [
  { r: "01", name: "SuryaKiran EPC", area: "Baner, Pune", score: 9.7, delta: "+0.3" },
  { r: "02", name: "HelioWorks", area: "Wakad, Pune", score: 9.4, delta: "+0.1" },
  { r: "03", name: "GreenVolt", area: "PCMC", score: 9.1, delta: "+0.2" },
  { r: "04", name: "UrjaPoint", area: "Hadapsar", score: 8.8, delta: "-0.1" },
];

const Simulator = () => {
  const [tab, setTab] = useState("crm");
  const [revealed, setRevealed] = useState(false);
  const [eff, setEff] = useState(70);
  const [poStep, setPoStep] = useState(3);

  return (
    <SectionShell id="simulator" data-testid={LANDING.simulatorSection}>
      <div className="mb-12 max-w-3xl">
        <Eyebrow>Command center playground</Eyebrow>
        <Reveal>
          <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Don't take our word for it.
            <span className="text-gradient-eco block">Touch the operating system.</span>
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_32px_90px_rgba(15,23,42,0.12)]">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <p className="font-sans font-medium text-[10px] uppercase tracking-[0.25em] text-slate-600">
              suryanexa.os / vendor-console
            </p>
            <span className="flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 font-sans font-medium text-[9px] uppercase tracking-widest text-emerald-700">
              <ShieldCheck size={10} /> session sealed
            </span>
          </div>

          <div className="flex flex-wrap gap-1 border-b border-slate-200 px-3 pt-3">
            {TABS.map((t) => (
              <button
                key={t.id}
                data-testid={`sim-tab-${t.id}`}
                onClick={() => setTab(t.id)}
                className={`relative flex items-center gap-2 rounded-t-xl px-4 py-2.5 text-xs font-semibold transition-colors duration-300 ${
                  tab === t.id ? "bg-slate-100 text-slate-900" : "text-slate-700 hover:text-slate-700"
                }`}
              >
                <t.icon size={13} className={tab === t.id ? "text-teal-600" : ""} />
                {t.label}
              </button>
            ))}
          </div>

          <div className="min-h-[340px] bg-slate-50/80 p-5 md:p-8">
            <AnimatePresence mode="wait">
              {tab === "crm" && (
                <motion.div
                  key="crm"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <p className="font-sans font-medium text-[10px] uppercase tracking-[0.25em] text-slate-600">
                      Lead vault · encryption on
                    </p>
                    <button
                      data-testid="sim-reveal-toggle"
                      onClick={() => setRevealed((v) => !v)}
                      className={`flex items-center gap-2 rounded-full border px-4 py-1.5 font-sans font-medium text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                        revealed
                          ? "border-amber-300 bg-amber-50 text-amber-700"
                          : "border-slate-300 bg-white text-slate-700"
                      }`}
                    >
                      <EyeOff size={11} />
                      {revealed ? "Vendor view" : "Admin view"}
                    </button>
                  </div>
                  <div className="space-y-2.5">
                    {LEADS.map((l) => (
                      <div
                        key={l.id}
                        className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3"
                      >
                        <div className="flex items-center gap-3">
                          <Lock size={13} className={l.sealed && !revealed ? "text-emerald-600" : "text-amber-600"} />
                          <div>
                            <p className="font-sans font-medium text-xs text-slate-800">{l.id}</p>
                            <p className="text-xs text-slate-600">
                              {l.sealed && !revealed ? "••••••••••·•••••" : l.type}
                            </p>
                          </div>
                        </div>
                        <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-sans font-medium text-[10px] text-slate-700">
                          {l.sealed && !revealed ? "sealed" : l.stage}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 font-sans font-medium text-[10px] text-slate-600">
                    {revealed
                      ? "vendor session · full lead detail decrypted"
                      : "admin session · payload hidden. even we can't peek."}
                  </p>
                </motion.div>
              )}

              {tab === "kit" && (
                <motion.div
                  key="kit"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <div className="mb-5">
                    <div className="mb-2 flex justify-between font-sans font-medium text-[10px] uppercase tracking-[0.25em] text-slate-600">
                      <span>Price feasibility</span>
                      <span>Generation efficiency</span>
                    </div>
                    <input
                      data-testid="sim-kit-slider"
                      type="range"
                      min="0"
                      max="100"
                      value={eff}
                      onChange={(e) => setEff(Number(e.target.value))}
                      className="w-full accent-amber-500"
                    />
                  </div>
                  <div className="grid gap-2.5 md:grid-cols-2">
                    {KIT_ROWS.map((r) => (
                      <div key={r.part} className="rounded-xl border border-slate-200 bg-white p-4">
                        <div className="flex items-center justify-between">
                          <p className="font-sans font-medium text-[10px] uppercase tracking-widest text-slate-600">{r.part}</p>
                          <span className="font-sans font-medium text-[10px] text-teal-700">{r.score}% match</span>
                        </div>
                        <p className="mt-2 text-sm font-semibold text-slate-900">{r.spec}</p>
                        <p className="text-xs text-slate-700">{r.trader}</p>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 font-sans font-medium text-xs text-slate-700">
                    proposal mode: <span className="text-amber-700">{eff > 50 ? "max efficiency" : "max feasibility"}</span>
                    {" · est. "}₹{Math.round(40 - eff * 0.06)}/Wp · {(21.1 + eff * 0.02).toFixed(1)}% eff.
                  </p>
                </motion.div>
              )}

              {tab === "po" && (
                <motion.div
                  key="po"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <p className="font-sans font-medium text-[10px] uppercase tracking-[0.25em] text-slate-600">
                      PO #SX-2841 · 54 modules · pre-funded
                    </p>
                    <button
                      data-testid="sim-po-advance"
                      onClick={() => setPoStep((s) => (s + 1) % PO_STEPS.length)}
                      className="rounded-full border border-teal-300 bg-teal-50 px-4 py-1.5 font-sans font-medium text-[10px] uppercase tracking-widest text-teal-700 transition-colors hover:bg-teal-100"
                    >
                      Advance shipment
                    </button>
                  </div>
                  <div className="flex flex-col gap-0 md:flex-row md:items-center">
                    {PO_STEPS.map((s, i) => (
                      <div key={s} className="flex flex-1 items-center">
                        <div className="flex flex-col items-start gap-2 md:items-center">
                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-full border font-sans font-medium text-[10px] transition-colors duration-500 ${
                              i <= poStep
                                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                : "border-slate-200 bg-white text-slate-600"
                            }`}
                          >
                            {i <= poStep ? <CheckCircle2 size={14} /> : `0${i + 1}`}
                          </span>
                          <p className={`font-sans font-medium text-[10px] ${i <= poStep ? "text-slate-700" : "text-slate-600"}`}>{s}</p>
                        </div>
                        {i < PO_STEPS.length - 1 && (
                          <div className={`mx-2 hidden h-px flex-1 md:block ${i < poStep ? "bg-emerald-500" : "bg-slate-200"}`} />
                        )}
                      </div>
                    ))}
                  </div>
                  {poStep === PO_STEPS.length - 1 && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 font-sans font-medium text-xs text-amber-800"
                    >
                      Timestamped unloading video sealed · warranty & transit claim shield armed.
                    </motion.p>
                  )}
                </motion.div>
              )}

              {tab === "rank" && (
                <motion.div
                  key="rank"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <p className="mb-5 font-sans font-medium text-[10px] uppercase tracking-[0.25em] text-slate-600">
                    City leaderboard · Pune · verified projects only
                  </p>
                  <div className="space-y-2.5">
                    {RANKS.map((r) => (
                      <div
                        key={r.r}
                        className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                          r.r === "01"
                            ? "border-amber-300 bg-amber-50"
                            : "border-slate-200 bg-white"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span className={`font-sans font-medium text-lg font-semibold ${r.r === "01" ? "text-amber-600" : "text-slate-600"}`}>
                            {r.r}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-slate-900">{r.name}</p>
                            <p className="font-sans font-medium text-[10px] text-slate-600">{r.area}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-sans font-medium text-sm text-teal-700">{r.score.toFixed(1)}</p>
                          <p className={`font-sans font-medium text-[10px] ${r.delta.startsWith("+") ? "text-emerald-600" : "text-red-500"}`}>
                            {r.delta} this week
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
};

export default Simulator;

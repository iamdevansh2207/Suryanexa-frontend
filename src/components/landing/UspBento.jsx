"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Lock,
  Boxes,
  Users,
  Video,
  Trophy,
  Store,
  ShieldCheck,
  TrendingUp,
  Truck,
  BadgeCheck,
} from "lucide-react";
import { Reveal, Eyebrow, SectionShell, EASE } from "./Reveal";
import { LANDING } from "@/constants/testIds";
import { IMAGES } from "./data";

const Card = ({ children, className = "", span = "", delay = 0, glow = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.7, delay, ease: EASE }}
    whileHover={{ y: -6 }}
    className={`group relative overflow-hidden rounded-2xl border ${
      glow ? "border-teal-300" : "border-slate-200"
    } bg-white p-7 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-lg ${span} ${className}`}
  >
    {glow && (
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-50 via-transparent to-emerald-50" />
    )}
    <div className="relative">{children}</div>
  </motion.div>
);

const IconChip = ({ Icon, tone = "emerald" }) => {
  const tones = {
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
    teal: "border-teal-200 bg-teal-50 text-teal-700",
  };
  return (
    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${tones[tone]}`}>
      <Icon size={19} />
    </span>
  );
};

const CardTitle = ({ kicker, title, copy }) => (
  <div>
    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">{kicker}</p>
    <h3 className="font-display mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
      {title}
    </h3>
    <p className="mt-3 text-sm leading-relaxed text-slate-500">{copy}</p>
  </div>
);

const UspBento = () => {
  const [slider, setSlider] = useState(62);

  return (
    <SectionShell id="usps" data-testid={LANDING.uspSection}>
      <div className="mb-14 max-w-3xl">
        <Eyebrow>The Solar OS — 6 core USPs</Eyebrow>
        <Reveal>
          <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Six weapons against
            <span className="text-gradient-eco"> industry chaos.</span>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
        <Card span="md:col-span-6 lg:col-span-7" glow>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="max-w-sm">
              <IconChip Icon={Lock} />
              <div className="mt-5">
                <CardTitle
                  kicker="USP 01 · Blind-Vault CRM"
                  title="Zero-leakage lead privacy"
                  copy="Every lead a vendor captures is cryptographically sealed. Not even SuryaNexa administrators can view, access or export it until the vendor converts the deal."
                />
              </div>
            </div>
            <div className="w-full shrink-0 rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono text-xs md:w-56">
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-slate-400">Vault ledger</p>
              {[
                ["#4821", "sealed", "text-emerald-600"],
                ["#4822", "sealed", "text-emerald-600"],
                ["#4823", "converted", "text-amber-600"],
                ["#4824", "sealed", "text-emerald-600"],
              ].map(([id, s, c]) => (
                <div key={id} className="flex items-center justify-between border-b border-slate-200 py-2 last:border-0">
                  <span className="text-slate-500">{id} · ••••••</span>
                  <span className={`flex items-center gap-1.5 ${c}`}>
                    <Lock size={10} /> {s}
                  </span>
                </div>
              ))}
              <p className="mt-3 text-[10px] text-slate-400">admin visibility: none</p>
            </div>
          </div>
        </Card>

        <Card span="md:col-span-6 lg:col-span-5" delay={0.08}>
          <IconChip Icon={Boxes} tone="amber" />
          <div className="mt-5">
            <CardTitle
              kicker="USP 02 · Kit Configurator"
              title="Mix & match across traders"
              copy="Tier-1 panels from Trader A, hybrid inverter from B, lithium from C, structures from D — one project, one proposal, two modes."
            />
          </div>
          <div className="mt-6">
            <div className="mb-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
              <span>Max price feasibility</span>
              <span>Max efficiency</span>
            </div>
            <input
              data-testid="kit-efficiency-slider"
              type="range"
              min="0"
              max="100"
              value={slider}
              onChange={(e) => setSlider(Number(e.target.value))}
              className="w-full accent-amber-500"
            />
            <div className="mt-3 flex justify-between font-mono text-xs">
              <span className="text-teal-700">₹ {Math.round(38 + (100 - slider) * 0.22)}/Wp est.</span>
              <span className="text-amber-700">{(21.2 + slider * 0.018).toFixed(1)}% module eff.</span>
            </div>
          </div>
        </Card>

        <Card span="md:col-span-3 lg:col-span-4" delay={0.05}>
          <IconChip Icon={Users} />
          <div className="mt-5">
            <CardTitle
              kicker="USP 03 · Squad Governance"
              title="4 installers + 2 consultants"
              copy="Build a structured 6-member core unit — hire from the verified pool or onboard your own crew, with milestone-level task governance."
            />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["I·Ravi", "I·Imran", "I·Santosh", "I·Deepak", "C·Meera", "C·Arjun"].map((m, i) => (
              <span
                key={m}
                className={`rounded-full border px-3 py-1 font-mono text-[10px] ${
                  i < 4
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-teal-200 bg-teal-50 text-teal-700"
                }`}
              >
                {m}
              </span>
            ))}
          </div>
        </Card>

        <Card span="md:col-span-3 lg:col-span-4" delay={0.1}>
          <IconChip Icon={Video} tone="teal" />
          <div className="mt-5">
            <CardTitle
              kicker="USP 04 · Video Unloading Protocol"
              title="Dispute-proof logistics"
              copy="PO confirmation, live shipment tracking, and a timestamped unloading video at the truck — instant, indisputable warranty claims."
            />
          </div>
          <div className="mt-6 flex items-center gap-2 font-mono text-[10px] text-slate-400">
            <Truck size={13} className="text-teal-600" />
            <span className="text-teal-700">PO confirmed</span>
            <span className="h-px flex-1 bg-slate-200" />
            <span>in transit</span>
            <span className="h-px flex-1 bg-slate-200" />
            <span className="flex items-center gap-1 text-emerald-600">
              <BadgeCheck size={12} /> video sealed
            </span>
          </div>
        </Card>

        <Card span="md:col-span-6 lg:col-span-4" delay={0.15}>
          <IconChip Icon={Trophy} tone="amber" />
          <div className="mt-5">
            <CardTitle
              kicker="USP 05 · Reputation Engine"
              title="Hyper-local ranked trust"
              copy="Verified ratings from completed projects, unloading compliance and consumer reviews — ranked across area, city and state leaderboards."
            />
          </div>
          <div className="mt-6 space-y-2 font-mono text-xs">
            {[
              ["01", "SuryaKiran EPC", "Pune · 9.7"],
              ["02", "HelioWorks", "Pune · 9.4"],
              ["03", "GreenVolt", "PCMC · 9.1"],
            ].map(([r, n, s], i) => (
              <div
                key={r}
                className={`flex items-center justify-between rounded-lg border px-3 py-2 ${
                  i === 0 ? "border-amber-300 bg-amber-50" : "border-slate-200 bg-slate-50"
                }`}
              >
                <span className="flex items-center gap-2 text-slate-700">
                  <span className={i === 0 ? "text-amber-600" : "text-slate-400"}>{r}</span> {n}
                </span>
                <span className="flex items-center gap-1 text-slate-500">
                  <TrendingUp size={11} className="text-emerald-600" /> {s}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card span="md:col-span-6 lg:col-span-12" delay={0.2} className="p-0">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-7 lg:p-10">
              <IconChip Icon={Store} tone="emerald" />
              <div className="mt-5">
                <CardTitle
                  kicker="USP 06 · Trader Command Center"
                  title="Verified supply, pre-funded demand"
                  copy="Traders complete KYB verification, list their full catalog — panels, inverters, batteries, BOS, structures — and receive standardized pre-funded POs from active vendors. No more WhatsApp price tourists."
                />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Panels", "Inverters", "Batteries", "BOS", "Structures"].map((t) => (
                  <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    {t}
                  </span>
                ))}
                <span className="flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald-700">
                  <ShieldCheck size={11} /> KYB verified
                </span>
              </div>
            </div>
            <div className="relative min-h-[220px] overflow-hidden">
              <img
                src={IMAGES.warehouse}
                alt="Solar warehouse inventory"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent lg:bg-gradient-to-r" />
            </div>
          </div>
        </Card>
      </div>
    </SectionShell>
  );
};

export default UspBento;

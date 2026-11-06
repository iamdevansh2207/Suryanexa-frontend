"use client";
import { useState } from "react";
import { ArrowRight, ShieldCheck, Activity, Lock } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionShell } from "./Reveal";
import LogoMark from "./Logo";
import { LANDING } from "@/constants/testIds";

const Cta = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      toast.error("Enter a valid work email to request access.");
      return;
    }
    setSent(true);
    toast.success("Access request received — our verification team will reach out.");
  };

  return (
    <SectionShell id="cta" data-testid={LANDING.ctaSection} className="pb-10">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-[#1B5E20] via-[#2E7D32] to-[#1B5E20] p-10 md:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-400/20 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-teal-400/20 blur-[100px]" />
          <div className="relative max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-teal-200">
              Final call · pilot network
            </p>
            <h2 className="font-display mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Run your solar business on
              <span className="block text-amber-300">one network. Zero chaos.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-emerald-50/80 sm:text-base">
              Join the verified pilot — traders, vendors, consultants and
              installers are being onboarded region by region.
            </p>
            <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <input
                data-testid={LANDING.ctaEmailInput}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yoursolarcompany.in"
                className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm text-white placeholder:text-emerald-100/60 focus:border-amber-300 focus:outline-none focus:ring-2 focus:ring-amber-300/40"
              />
              <button
                data-testid={LANDING.ctaSubmitButton}
                type="submit"
                disabled={sent}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-slate-900 transition-all duration-300 hover:bg-amber-400 disabled:opacity-60"
              >
                {sent ? "Request received" : "Request pilot access"}
                {!sent && <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />}
              </button>
            </form>
            <p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-100/70">
              <Lock size={11} className="text-amber-300" />
              KYB verification required · no unverified middlemen, ever
            </p>
          </div>
        </div>
      </Reveal>

      <footer data-testid={LANDING.footer} className="mt-20 border-t border-slate-200 pt-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-3">
              <LogoMark size={32} />
              <span className="font-display text-lg font-extrabold tracking-tight text-slate-900">
                Surya<span className="text-emerald-700">Nexa</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              From bulk warehouse to rooftop wattage — one network, zero chaos.
            </p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-teal-500" />
              <Activity size={11} className="text-teal-600" /> All systems operational
            </p>
          </div>
          {[
            { h: "Platform", links: ["Blind-Vault CRM", "Kit Configurator", "Squad Governance", "Trader Command Center"] },
            { h: "Network", links: ["Traders", "Vendors & EPCs", "Consultants", "Installers"] },
          ].map((col) => (
            <div key={col.h}>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-400">{col.h}</p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#usps" className="text-sm text-slate-500 transition-colors hover:text-emerald-700">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-200 py-8 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
            © 2026 SuryaNexa · The Solar Operating System
          </p>
          <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
            <ShieldCheck size={11} className="text-emerald-600" /> Blind-vault privacy by design
          </p>
        </div>
      </footer>
    </SectionShell>
  );
};

export default Cta;

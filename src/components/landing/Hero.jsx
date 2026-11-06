"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ShieldCheck, ArrowRight, Play, Radar, Lock, Zap } from "lucide-react";
import { EASE } from "./Reveal";
import { LANDING } from "@/constants/testIds";
import { IMAGES } from "./data";

const ROTATING_WORDS = ["Zero Lead Leakage", "Instant Kit Match", "6-Squad Governance", "Audit-Proof POs"];

const RotatingWord = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % ROTATING_WORDS.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span data-testid={LANDING.heroRotating} className="relative inline-flex h-[1.2em] min-w-[11ch] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROTATING_WORDS[i]}
          initial={{ y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.55, ease: EASE }}
          className="text-gradient-eco whitespace-nowrap"
        >
          {ROTATING_WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const MaskedLine = ({ children, delay = 0, className = "" }) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="top"
      data-testid={LANDING.heroSection}
      ref={ref}
      className="tactile-grid relative overflow-hidden pt-[72px]"
    >
      <motion.div
        aria-hidden="true"
        style={{ opacity: glowOpacity }}
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-200/50 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[380px] w-[380px] rounded-full bg-teal-200/40 blur-[120px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-14 px-6 pb-16 pt-16 md:px-10 lg:grid-cols-12 lg:gap-8 lg:pt-24">
        <motion.div style={{ y: textY }} className="flex flex-col justify-center lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <span
              data-testid={LANDING.heroBadge}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-emerald-800"
            >
              <Lock size={12} className="text-teal-600" />
              Cryptographic Solar OS
            </span>
            <span
              data-testid={LANDING.heroStatusPill}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-slate-500"
            >
              <span className="animate-pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-teal-500" />
              Network live · 7 pillars connected
            </span>
          </motion.div>

          <h1
            data-testid={LANDING.heroHeadline}
            className="font-display text-4xl font-extrabold leading-[1.04] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            <MaskedLine delay={0.45}>From Bulk Warehouse</MaskedLine>
            <MaskedLine delay={0.58}>to Rooftop Wattage —</MaskedLine>
            <MaskedLine delay={0.71}>
              One Network, <RotatingWord />
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.95, ease: EASE }}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          >
            SuryaNexa is the Solar Operating System that replaces fragmented
            spreadsheets, unverified WhatsApp trade groups and transit-damage
            disputes with one blind-vaulted, verified, dispute-proof network —
            from trader catalog to commissioned rooftop.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              data-testid={LANDING.heroCtaSimulator}
              href="#simulator"
              className="group inline-flex items-center gap-2.5 rounded-full bg-amber-500 px-7 py-3.5 text-sm font-bold text-slate-900 shadow-[0_10px_32px_rgba(251,192,45,0.4)] transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_10px_44px_rgba(251,192,45,0.55)]"
            >
              <Play size={15} className="fill-slate-900" />
              Explore the Solar OS Simulator
            </a>
            <a
              data-testid={LANDING.heroCtaAccess}
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full border border-emerald-600/50 bg-emerald-50 px-7 py-3.5 text-sm font-semibold text-emerald-800 transition-all duration-300 hover:border-emerald-600 hover:bg-emerald-100"
            >
              Request Verified Trader Access
              <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs text-slate-500"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-emerald-600" /> KYB-verified traders only
            </span>
            <span className="flex items-center gap-2">
              <Lock size={14} className="text-teal-600" /> Leads hidden even from admins
            </span>
            <span className="flex items-center gap-2">
              <Radar size={14} className="text-amber-600" /> Area · City · State rankings
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.6, ease: EASE }}
          className="relative lg:col-span-5"
        >
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 shadow-[0_40px_90px_rgba(15,23,42,0.18)]">
            <img
              data-testid={LANDING.heroImage}
              src={IMAGES.hero}
              alt="Commercial rooftop solar array at golden hour"
              className="h-[420px] w-full object-cover lg:h-[520px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7, ease: EASE }}
              className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/20 bg-slate-950/70 px-5 py-4 backdrop-blur-xl"
            >
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-teal-300">Live dispatch</p>
                <p className="mt-1 text-sm font-semibold text-slate-50">PO #SX-2841 · 54 modules · in transit</p>
              </div>
              <span className="relative flex h-10 w-10 items-center justify-center">
                <span className="animate-spin-slow absolute inset-0 rounded-full border border-dashed border-teal-400/60" />
                <Zap size={16} className="text-amber-400" />
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.7, ease: EASE }}
            className="absolute -left-6 top-8 hidden rounded-2xl border border-emerald-200 bg-white/90 px-5 py-4 shadow-[0_16px_48px_rgba(15,23,42,0.12)] backdrop-blur-xl lg:block"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-700">Blind-Vault CRM</p>
            <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-800">
              <Lock size={13} className="text-emerald-600" /> Lead #4821 · sealed
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({
  target,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (!inView) {
      setVal(0);
      return;
    }
    let start: number | null = null;
    let animId: number;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // easeOutExpo
      const easeVal = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeVal * target;
      setVal(current);

      if (progress < 1) {
        animId = requestAnimationFrame(step);
      }
    };
    animId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animId);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className="font-display font-extrabold tabular-nums">
      {prefix}
      {decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StitchStats() {
  return (
    <section className="py-20 bg-white border-y border-zinc-200/80" id="telemetry">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="border-l-2 border-emerald-600 pl-6"
          >
            <div className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-zinc-950">
              ₹<CountUp target={10} />+{" "}
              <span className="text-emerald-700 text-3xl font-display font-bold">Cr</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 font-sans font-semibold mt-2">
              Hardware Escrow Transacted
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border-l-2 border-zinc-300 pl-6"
          >
            <div className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-zinc-950">
              <CountUp target={500} />+
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 font-sans font-semibold mt-2">
              Verified Rooftop EPCs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="border-l-2 border-emerald-600 pl-6"
          >
            <div className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-emerald-700">
              <CountUp target={99.4} decimals={1} />
              <span className="text-2xl font-display font-bold">%</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 font-sans font-semibold mt-2">
              DISCOM First-Pass Approval
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="border-l-2 border-zinc-300 pl-6"
          >
            <div className="text-4xl sm:text-5xl font-extrabold font-display tracking-tight text-zinc-950">
              <CountUp target={180} />
              <span className="text-2xl font-display font-semibold text-zinc-600">s</span>
            </div>
            <p className="text-xs sm:text-sm text-zinc-700 font-sans font-semibold mt-2">
              Delivery Shield Video Payout
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

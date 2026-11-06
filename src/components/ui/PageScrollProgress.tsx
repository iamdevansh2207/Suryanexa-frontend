"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function PageScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-[74px] left-0 right-0 z-[9998] pointer-events-none h-[3px] bg-transparent">
      <motion.div
        style={{ scaleX }}
        className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600 origin-left shadow-[0_0_10px_rgba(16,185,129,0.5)]"
      />
    </div>
  );
}


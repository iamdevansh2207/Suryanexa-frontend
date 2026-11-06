"use client";

import React from "react";
import { motion } from "framer-motion";

const BADGES = [
  { label: "HUB", x: "22%", y: "16%", delay: 0 },
  { label: "GROWTH", x: "71%", y: "14%", delay: 0.2 },
  { label: "SYNERGY", x: "83%", y: "37%", delay: 0.4 },
  { label: "SOLAROS", x: "74%", y: "66%", delay: 0.6 },
  { label: "BRIDGE", x: "47%", y: "87%", delay: 0.8 },
  { label: "SAFE", x: "18%", y: "69%", delay: 1.0 },
  { label: "VERIFIED", x: "10%", y: "40%", delay: 1.2 },
];

export default function SolarEngineModel() {
  return (
    <div className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center select-none">
      {/* Deep ambient radial glow directly onto the hero background */}
      <div className="absolute inset-0 bg-emerald-500/15 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute w-56 h-56 bg-amber-400/10 blur-[60px] rounded-full pointer-events-none" />

      {/* SVG Animated Moving Dashed Orbits */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
        <svg
          viewBox="0 0 600 600"
          className="w-full h-full"
          style={{ transform: "scaleY(0.92)" }}
        >
          <defs>
            <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-yellow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Orbit 1: Innermost Faint Dashed Ring (Counter-Clockwise) */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "300px 300px" }}
          >
            <circle
              cx="300"
              cy="300"
              r="95"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.2"
              strokeDasharray="4 8"
              strokeOpacity="0.4"
            />
            {/* Small subtle traveling dot */}
            <circle cx="395" cy="300" r="2.5" fill="#34d399" filter="url(#glow-green)" />
          </motion.g>

          {/* Orbit 2: Dual Yellow-Emerald Dashed Ring (Clockwise) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "300px 300px" }}
          >
            <circle
              cx="300"
              cy="300"
              r="145"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.8"
              strokeDasharray="16 12 4 12"
              strokeOpacity="0.8"
              filter="url(#glow-yellow)"
            />
            <circle
              cx="300"
              cy="300"
              r="145"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.8"
              strokeDasharray="0 26 16 14"
              strokeOpacity="0.75"
              filter="url(#glow-green)"
            />
            {/* Bright orbiting amber particle */}
            <circle cx="445" cy="300" r="4.5" fill="#fbbf24" filter="url(#glow-yellow)" />
            <circle cx="155" cy="300" r="3" fill="#34d399" filter="url(#glow-green)" />
          </motion.g>

          {/* Orbit 3: Main Dynamic Multi-Segment Dashed Ring (Counter-Clockwise) */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "300px 300px" }}
          >
            <circle
              cx="300"
              cy="300"
              r="200"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeDasharray="24 14 8 14"
              strokeOpacity="0.85"
              filter="url(#glow-green)"
            />
            <circle
              cx="300"
              cy="300"
              r="200"
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2"
              strokeDasharray="0 38 18 16"
              strokeOpacity="0.7"
              filter="url(#glow-cyan)"
            />
            {/* Orbiting particles */}
            <circle cx="300" cy="100" r="4" fill="#34d399" filter="url(#glow-green)" />
            <circle cx="300" cy="500" r="3.5" fill="#f59e0b" filter="url(#glow-yellow)" />
          </motion.g>

          {/* Orbit 4: Wide Outer Dashed Ring (Clockwise) */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 56, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "300px 300px" }}
          >
            <circle
              cx="300"
              cy="300"
              r="250"
              fill="none"
              stroke="#10b981"
              strokeWidth="1.6"
              strokeDasharray="28 16 10 16"
              strokeOpacity="0.7"
              filter="url(#glow-green)"
            />
            <circle
              cx="300"
              cy="300"
              r="250"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="1.6"
              strokeDasharray="0 46 16 16"
              strokeOpacity="0.65"
              filter="url(#glow-yellow)"
            />
            {/* Orbiting particles */}
            <circle cx="477" cy="477" r="4" fill="#fbbf24" filter="url(#glow-yellow)" />
            <circle cx="123" cy="123" r="3.5" fill="#38bdf8" filter="url(#glow-cyan)" />
          </motion.g>

          {/* Orbit 5: Outermost Subtle Telemetry Track (Counter-Clockwise) */}
          <motion.g
            animate={{ rotate: -360 }}
            transition={{ duration: 75, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "300px 300px" }}
          >
            <circle
              cx="300"
              cy="300"
              r="285"
              fill="none"
              stroke="#10b981"
              strokeWidth="1"
              strokeDasharray="8 16"
              strokeOpacity="0.3"
            />
            <circle cx="300" cy="15" r="3" fill="#34d399" filter="url(#glow-green)" />
            <circle cx="585" cy="300" r="3" fill="#f59e0b" filter="url(#glow-yellow)" />
          </motion.g>
        </svg>
      </div>

      {/* Floating Interactive Pill Badges Along Orbits */}
      {BADGES.map((b) => (
        <motion.div
          key={b.label}
          style={{ left: b.x, top: b.y }}
          animate={{
            y: [0, -4, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#042420]/80 border border-emerald-500/30 text-white font-mono text-[11px] font-bold tracking-wider shadow-[0_4px_20px_rgba(0,0,0,0.5)] backdrop-blur-md hover:border-emerald-400 hover:scale-105 transition-all cursor-pointer group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="text-zinc-100 group-hover:text-emerald-300 transition-colors">
            {b.label}
          </span>
          <span className="text-emerald-400/80 text-xs font-normal">+</span>
        </motion.div>
      ))}

      {/* CENTER: Solar Operating System Engine Core */}
      <div className="relative flex flex-col items-center justify-center z-10 pointer-events-auto">
        <motion.div
          animate={{
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative rounded-2xl overflow-hidden p-1.5 bg-[#05221d] border border-emerald-500/40 shadow-[0_0_40px_rgba(16,185,129,0.35)]"
        >
          <img
            src="/solar-logo-card.png"
            alt="SuryaNexa Engine Emblem"
            className="w-24 h-24 sm:w-28 sm:h-28 object-contain rounded-xl"
          />
        </motion.div>

        <div className="mt-4 text-center">
          <div className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.24em] text-white uppercase drop-shadow-sm">
            SOLAR OPERATING SYSTEM
          </div>
          <div className="text-[9px] sm:text-[10px] font-mono font-semibold tracking-[0.22em] text-emerald-400 uppercase mt-1">
            SURYANEXA ENGINE
          </div>
        </div>
      </div>
    </div>
  );
}


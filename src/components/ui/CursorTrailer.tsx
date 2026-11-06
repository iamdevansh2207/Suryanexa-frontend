"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CursorTrailer() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.4 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only mount on desktop with mouse pointer
    if (typeof window !== "undefined" && !window.matchMedia("(pointer: coarse)").matches) {
      setMounted(true);
      const move = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    }
  }, [cursorX, cursorY]);

  if (!mounted) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-400/30 bg-amber-400/[0.04] backdrop-blur-[1px]"
      style={{
        x: smoothX,
        y: smoothY,
      }}
    />
  );
}


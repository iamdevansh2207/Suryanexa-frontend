"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionScrollFadeProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  isFirst?: boolean;
  isLast?: boolean;
  disableY?: boolean;
}

export default function SectionScrollFade({
  children,
  id,
  className = "",
  isFirst = false,
  isLast = false,
  disableY = false,
}: SectionScrollFadeProps) {
  // If first section (Hero), animate in immediately on mount, and fade out smoothly as user scrolls past it
  if (isFirst) {
    return (
      <motion.div
        id={id}
        initial={{ opacity: 0, y: disableY ? 0 : 25 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: disableY ? 0 : -30 }}
        viewport={{ amount: 0.15, once: false }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        className={`relative will-change-[opacity,transform] ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  // If last section (Footer), fade in when arriving at it
  if (isLast) {
    return (
      <motion.div
        id={id}
        initial={{ opacity: 0, y: disableY ? 0 : 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.12, once: false }}
        transition={{ duration: 0.8, ease: [0.16, 0.4, 0.6, 1] }}
        className={`relative will-change-[opacity,transform] ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  // Standard Section: Fades in when scrolling down into it (starting fade), stays active in view,
  // and fades out smoothly when scrolling past it (ending fade). Plays in reverse when scrolling back up.
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: disableY ? 0 : 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.14, once: false }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className={`relative will-change-[opacity,transform] ${className}`}
    >
      {children}
    </motion.div>
  );
}


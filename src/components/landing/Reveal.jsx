"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export const Reveal = ({
  children,
  delay = 0,
  y = 28,
  className = "",
  once = true,
  amount = 0.3,
  ...rest
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export const Eyebrow = ({ children, className = "" }) => (
  <p
    className={`font-mono text-[11px] sm:text-xs uppercase tracking-[0.3em] text-emerald-700 font-semibold ${className}`}
  >
    {children}
  </p>
);

export const SectionShell = ({ id, children, className = "", ...rest }) => (
  <section
    id={id}
    className={`relative py-20 lg:py-32 ${className}`}
    {...rest}
  >
    <div className="mx-auto w-full max-w-7xl px-6 md:px-10">{children}</div>
  </section>
);

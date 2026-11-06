"use client";

import React, { useRef, useState } from "react";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "amber" | "sky" | "emerald";
  onClick?: () => void;
}

export function LiquidGlassCard({
  children,
  className = "",
  glowColor = "amber",
  onClick,
}: LiquidGlassCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200, opacity: 0 });

  const glowRgb =
    glowColor === "amber"
      ? "245, 158, 11"
      : glowColor === "sky"
      ? "14, 165, 233"
      : "16, 185, 129";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      opacity: 1,
    });
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-3xl border border-white/[0.08] bg-[#0c1017]/85 backdrop-blur-2xl overflow-hidden p-6 sm:p-8 transition-all duration-300 hover:border-white/20 group ${className}`}
      style={{
        boxShadow:
          "0 20px 50px -10px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Specular Radial Spotlight Tracking Cursor */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(${glowRgb}, 0.16), transparent 75%)`,
        }}
      />
      {/* Dynamic Specular Border Refraction */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(220px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.28), transparent 80%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

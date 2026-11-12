"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";

import DedicatedNavbar from "@/components/stitch/DedicatedNavbar";
import PageScrollProgress from "@/components/ui/PageScrollProgress";
import SectionScrollFade from "@/components/ui/SectionScrollFade";
import StitchHero from "@/components/stitch/StitchHero";
import StitchBrandMarquee from "@/components/stitch/StitchBrandMarquee";
import StitchFieldErp from "@/components/stitch/StitchFieldErp";
import StitchFriction from "@/components/stitch/StitchFriction";
import StitchBentoGrid from "@/components/stitch/StitchBentoGrid";
import StitchLifecycleStack from "@/components/stitch/StitchLifecycleStack";
import StitchPillars from "@/components/stitch/StitchPillars";
import StitchPricing from "@/components/stitch/StitchPricing";
import StitchTestimonials from "@/components/stitch/StitchTestimonials";
import StitchStats from "@/components/stitch/StitchStats";
import StitchFaq from "@/components/stitch/StitchFaq";
import StitchCta from "@/components/stitch/StitchCta";
import StitchFooter from "@/components/stitch/StitchFooter";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true });
    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a[href^="#"], a[href^="/#"]');
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const hash = href.startsWith("/#") ? href.slice(1) : href;
      if (hash.startsWith("#")) {
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl as HTMLElement, { offset: -84, duration: 1.4 });
        }
      }
    };
    document.addEventListener("click", onClick);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#18181B] selection:bg-amber-400 selection:text-zinc-950 font-sans">
      <div className="noise-overlay" aria-hidden="true" />
      <Toaster position="bottom-right" richColors />
      <DedicatedNavbar />
      <PageScrollProgress />
      <main className="relative pt-[74px]">
        <SectionScrollFade isFirst>
          <StitchHero />
        </SectionScrollFade>

        <SectionScrollFade>
          <StitchBrandMarquee />
        </SectionScrollFade>

        <SectionScrollFade>
          <StitchFieldErp />
        </SectionScrollFade>

        <SectionScrollFade>
          <StitchFriction />
        </SectionScrollFade>

        {/* 5-Part Stakeholder Solutions (Each part has its own SectionScrollFade) */}
        <StitchBentoGrid />

        <SectionScrollFade disableY={true}>
          <StitchLifecycleStack />
        </SectionScrollFade>

        <SectionScrollFade>
          <StitchPillars />
        </SectionScrollFade>

        <SectionScrollFade>
          <StitchPricing />
        </SectionScrollFade>

        <SectionScrollFade>
          <StitchTestimonials />
        </SectionScrollFade>

        <SectionScrollFade>
          <StitchStats />
        </SectionScrollFade>

        <SectionScrollFade>
          <StitchFaq />
        </SectionScrollFade>

        <SectionScrollFade>
          <StitchCta />
        </SectionScrollFade>
      </main>
      <SectionScrollFade isLast>
        <StitchFooter />
      </SectionScrollFade>
    </div>
  );
}

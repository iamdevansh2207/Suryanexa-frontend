"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import LogoMark from "./Logo";
import { LANDING } from "@/constants/testIds";

const LINKS = [
  { id: LANDING.navHow, label: "How it works", href: "#pipeline" },
  { id: LANDING.navUsps, label: "Solar OS", href: "#usps" },
  { id: LANDING.navSimulator, label: "Simulator", href: "#simulator" },
  { id: LANDING.navWho, label: "Who it's for", href: "#who" },
  { id: LANDING.navFaq, label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid={LANDING.navbar}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-slate-200 shadow-[0_8px_40px_rgba(15,23,42,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#top" data-testid={LANDING.logo} className="flex items-center gap-3">
          <LogoMark size={36} />
          <span className="font-display text-lg font-extrabold tracking-tight text-slate-900">
            Surya<span className="text-emerald-700">Nexa</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.id}
              data-testid={l.id}
              href={l.href}
              className="group relative text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-slate-900"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gradient-to-r from-emerald-600 to-teal-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            data-testid={LANDING.ctaAccess}
            href="#cta"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(46,125,50,0.25)] transition-all duration-300 hover:bg-emerald-800 hover:shadow-[0_8px_32px_rgba(46,125,50,0.4)]"
          >
            Request Access
            <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          data-testid={LANDING.mobileMenuToggle}
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-slate-200 bg-white/80 p-2 text-slate-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid={LANDING.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-emerald-50 hover:text-emerald-800"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white"
              >
                Request Access <ArrowRight size={15} />
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;

"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  UserCheck,
  Facebook,
  Instagram,
  Youtube,
  Linkedin
} from "lucide-react";

export default function StitchFooter() {
  return (
    <footer className="relative bg-[#02201d] border-t border-emerald-950/80 min-h-[60vh] flex flex-col justify-between py-12 lg:py-16 text-zinc-300 text-sm overflow-hidden">
      {/* Soft ambient lighting matching the hero palette */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-emerald-500/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-teal-400/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full flex-1 flex flex-col justify-between gap-12">
        {/* Main 4-Column Grid matching the reference footer style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-4">
          
          {/* Column 1: Brand Info, Description, Indian Flag Pill, and Socials */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo and Brand Title */}
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0 transition-transform duration-200 hover:scale-105">
                <img
                  src="/suryanexa-logo.png"
                  alt="SuryaNexa Logo"
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-black font-display tracking-tight text-white leading-none">
                    SURYANEXA
                  </span>
                  <span className="text-amber-400 text-sm font-bold leading-none">
                    ™
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mt-1.5">
                  SIMPLE • SWIFT • SMART
                </span>
              </div>
            </div>

            {/* Platform Description */}
            <p className="text-zinc-300/90 leading-relaxed text-sm sm:text-base font-sans max-w-md">
              SuryaNexa is a purpose-driven platform simplifying solar adoption for homes and small businesses. We connect users with verified installers, offer subsidy guidance, and ensure a smooth journey from quote to installation.
            </p>

            {/* Born in Bharat Pill */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-200 text-sm font-semibold shadow-xs">
                <span className="text-base">☀️</span>
                <span>Born In Bharat, Built for the World</span>
                <span className="text-base">🇮🇳</span>
              </div>
            </div>

            {/* Follow Us & Social Icons */}
            <div className="pt-2 space-y-3.5">
              <span className="block text-xs sm:text-sm font-sans font-bold text-white uppercase tracking-wider">
                FOLLOW US
              </span>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
                >
                  <Facebook className="w-4.5 h-4.5 fill-zinc-900 stroke-none" />
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
                >
                  <Instagram className="w-4.5 h-4.5 stroke-[2.2]" />
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="w-9 h-9 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
                >
                  <Youtube className="w-4.5 h-4.5 fill-zinc-900 stroke-none" />
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
                >
                  <Linkedin className="w-4.5 h-4.5 fill-zinc-900 stroke-none" />
                </a>

                {/* X / Twitter */}
                <a
                  href="#"
                  aria-label="X"
                  className="w-9 h-9 rounded-lg bg-zinc-100 hover:bg-white text-zinc-900 flex items-center justify-center transition-all duration-200 hover:scale-105 shadow-xs"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Offerings & Resources */}
          <div className="lg:col-span-3 space-y-8">
            {/* Section: Our Offerings */}
            <div>
              <h4 className="font-bold font-sans text-white text-base sm:text-lg flex items-center mb-3.5">
                <span className="text-amber-400 font-extrabold mr-2 text-lg">—</span>
                Our Offerings
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-[15px] text-zinc-300">
                <li>
                  <Link href="#offerings" className="hover:text-amber-300 transition-colors">
                    Home Solar
                  </Link>
                </li>
                <li>
                  <Link href="#community-solar" className="hover:text-amber-300 transition-colors">
                    Community Solar
                  </Link>
                </li>
                <li>
                  <Link href="#business-solar" className="hover:text-amber-300 transition-colors">
                    For your business
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section: Resources */}
            <div>
              <h4 className="font-bold font-sans text-white text-base sm:text-lg flex items-center mb-3.5">
                <span className="text-amber-400 font-extrabold mr-2 text-lg">—</span>
                Resources
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-[15px] text-zinc-300">
                <li>
                  <Link href="#calculator" className="hover:text-amber-300 transition-colors">
                    Surya Calc - AI Estimator
                  </Link>
                </li>
                <li>
                  <Link href="#academy" className="hover:text-amber-300 transition-colors">
                    Solar Courses &amp; Academy
                  </Link>
                </li>
                <li>
                  <Link href="#news" className="hover:text-amber-300 transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="#smarthub" className="hover:text-amber-300 transition-colors">
                    Surya SmartHub
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: About Us & Help / Network */}
          <div className="lg:col-span-2 space-y-8">
            {/* Section: About Us */}
            <div>
              <h4 className="font-bold font-sans text-white text-base sm:text-lg flex items-center mb-3.5">
                <span className="text-amber-400 font-extrabold mr-2 text-lg">—</span>
                About Us
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-[15px] text-zinc-300">
                <li>
                  <Link href="#about" className="hover:text-amber-300 transition-colors">
                    Mission &amp; Values
                  </Link>
                </li>
                <li>
                  <Link href="#careers" className="hover:text-amber-300 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Section: Help & Network */}
            <div>
              <h4 className="font-bold font-sans text-white text-base sm:text-lg flex items-center mb-3.5">
                <span className="text-amber-400 font-extrabold mr-2 text-lg">—</span>
                Help &amp; Network
              </h4>
              <ul className="space-y-2.5 text-sm sm:text-[15px] text-zinc-300">
                <li>
                  <Link href="#contact" className="hover:text-amber-300 transition-colors">
                    Talk to us
                  </Link>
                </li>
                <li>
                  <Link href="#help" className="hover:text-amber-300 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#feedback" className="hover:text-amber-300 transition-colors">
                    Feedback
                  </Link>
                </li>
              </ul>

              {/* Partner / Agent Portal CTA Button */}
              <div className="pt-4">
                <Link
                  href="#portal"
                  className="px-4 py-2.5 rounded-xl border border-amber-400/50 bg-amber-400/5 hover:bg-amber-400/15 text-amber-300 text-sm font-semibold inline-flex items-center gap-2.5 transition duration-200 group"
                >
                  <UserCheck className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                  <span>Partner/Agent Portal</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Us & Registered Office */}
          <div className="lg:col-span-3 space-y-8">
            {/* Section: Contact Us */}
            <div>
              <h4 className="font-bold font-sans text-white text-base sm:text-lg flex items-center mb-3.5">
                <span className="text-amber-400 font-extrabold mr-2 text-lg">—</span>
                Contact Us
              </h4>
              <div className="space-y-3.5 text-sm sm:text-[15px]">
                {/* Email Item */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#fef3c7] text-[#92400e] flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <a
                    href="mailto:customer.support@suryanexa.com"
                    className="text-zinc-200 hover:text-amber-300 transition-colors break-all"
                  >
                    customer.support@suryanexa.com
                  </a>
                </div>

                {/* Phone Item */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#fef3c7] text-[#92400e] flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <a
                    href="tel:+919303772737"
                    className="text-zinc-200 hover:text-amber-300 transition-colors font-mono font-medium"
                  >
                    +91 930 377 2737
                  </a>
                </div>
              </div>
            </div>

            {/* Section: Registered Office */}
            <div>
              <h4 className="font-bold font-sans text-white text-base sm:text-lg flex items-center mb-3.5">
                <span className="text-amber-400 font-extrabold mr-2 text-lg">—</span>
                Registered Office
              </h4>
              <div className="flex items-start gap-3 text-sm sm:text-[15px]">
                <div className="w-8 h-8 rounded-lg bg-[#fef3c7] text-[#92400e] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <MapPin className="w-4 h-4" />
                </div>
                <p className="text-zinc-300 leading-relaxed font-sans">
                  Aditya World City,<br />
                  Ghaziabad, Uttar Pradesh, 201002
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Product Directory Badge, Legal Links */}
        <div className="pt-8 pb-2 border-t border-emerald-900/60 flex flex-col md:flex-row items-center justify-between text-sm text-zinc-400 gap-4">
          {/* Copyright */}
          <div className="font-medium">
            © 2026 SuryaNexa. All Rights Reserved.
          </div>

          {/* Center Brand / SaaS Directory note */}
          <div className="flex items-center gap-2 text-zinc-300 text-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SuryaNexa - SaaS Clean Energy Platform</span>
          </div>

          {/* Legal Links separated by bullet dots */}
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 text-sm text-zinc-400">
            <Link href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-600">•</span>
            <Link href="#vendor-policy" className="hover:text-white transition-colors">
              Vendor Policy
            </Link>
            <span className="text-zinc-600">•</span>
            <Link href="#terms" className="hover:text-white transition-colors">
              Terms Of Condition
            </Link>
            <span className="text-zinc-600">•</span>
            <Link href="#refund" className="hover:text-white transition-colors">
              Payment &amp; Refund
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

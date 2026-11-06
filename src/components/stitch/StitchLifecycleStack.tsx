"use client";
import React from "react";

export default function StitchLifecycleStack() {
  return (
    <>
      <section className="py-24 lg:py-32 bg-white relative border-b border-zinc-200/80" id="lifecycle">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-zinc-900 tracking-tight leading-[1.15]">
              One Project. Seven Stages. <br />
              <span className="text-emerald-700">Every role, on one network.</span>
            </h2>
            <p className="text-base sm:text-lg text-zinc-600 mt-4 leading-relaxed font-normal">
              Follow the friction-free progression of a rooftop project — from verified wholesale pallet listing to dispute-proof delivery, team escrow unlock, and public rank gain.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative">
            <aside className="lg:col-span-4 lg:sticky lg:top-28 z-20 space-y-6">
              <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-md border border-zinc-200/80 shadow-md">
                <div className="flex items-center justify-between pb-4 border-b border-zinc-200/80 mb-4">
                  <span className="text-xs font-sans font-bold text-zinc-600 uppercase tracking-wider">Stage Scrubber</span>
                  <span className="text-[11px] font-sans px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200/70">7 Steps · Linear Gate</span>
                </div>
                <nav aria-label="Lifecycle stages" className="space-y-1.5 font-sans text-xs" id="stage-nav">
                  <a className="stage-nav-item flex items-center justify-between p-2.5 rounded-xl border border-zinc-200 bg-zinc-100 text-zinc-900 transition group" href="#stage-01">
                    <span className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-zinc-900 text-white font-bold flex items-center justify-center text-[11px] group-hover:scale-105 transition">01</span>
                      <span className="font-sans font-semibold text-zinc-900">Supply Listing</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase font-sans font-semibold">Trader</span>
                  </a>
                  <a className="stage-nav-item flex items-center justify-between p-2.5 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50 text-zinc-700 transition group" href="#stage-02">
                    <span className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-zinc-100 text-zinc-800 font-bold flex items-center justify-center text-[11px] group-hover:scale-105 transition">02</span>
                      <span className="font-sans font-semibold text-zinc-900">Squad Building</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase font-sans font-semibold">Vendor</span>
                  </a>
                  <a className="stage-nav-item flex items-center justify-between p-2.5 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50 text-zinc-700 transition group" href="#stage-03">
                    <span className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-zinc-100 text-zinc-800 font-bold flex items-center justify-center text-[11px] group-hover:scale-105 transition">03</span>
                      <span className="font-sans font-semibold text-zinc-900">Private CRM</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase font-sans font-semibold">Lead</span>
                  </a>
                  <a className="stage-nav-item flex items-center justify-between p-2.5 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50 text-zinc-700 transition group" href="#stage-04">
                    <span className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-zinc-100 text-zinc-800 font-bold flex items-center justify-center text-[11px] group-hover:scale-105 transition">04</span>
                      <span className="font-sans font-semibold text-zinc-900">Kit Engineering</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase font-sans font-semibold">CAD</span>
                  </a>
                  <a className="stage-nav-item flex items-center justify-between p-2.5 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50 text-zinc-700 transition group" href="#stage-05">
                    <span className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-zinc-100 text-zinc-800 font-bold flex items-center justify-center text-[11px] group-hover:scale-105 transition">05</span>
                      <span className="font-sans font-semibold text-zinc-900">Consolidated PO</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase font-sans font-semibold">Transit</span>
                  </a>
                  <a className="stage-nav-item flex items-center justify-between p-2.5 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50 text-zinc-700 transition group" href="#stage-06">
                    <span className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-zinc-100 text-zinc-800 font-bold flex items-center justify-center text-[11px] group-hover:scale-105 transition">06</span>
                      <span className="font-sans font-semibold text-zinc-900">Video Unloading</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 uppercase font-sans font-semibold">Escrow</span>
                  </a>
                  <a className="stage-nav-item flex items-center justify-between p-2.5 rounded-xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50 text-zinc-700 transition group" href="#stage-07">
                    <span className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-bold flex items-center justify-center text-[11px] group-hover:scale-105 transition">07</span>
                      <span className="font-sans font-semibold text-zinc-900">Commission &amp; Rank</span>
                    </span>
                    <span className="text-[10px] text-emerald-700 uppercase font-sans font-bold">Live</span>
                  </a>
                </nav>
              </div>
            </aside>

            <div className="lg:col-span-8 space-y-8 sm:space-y-10 relative pb-16">
              {/* Stage 01 */}
              <article className="stack-card sticky top-28 z-10 rounded-3xl bg-white/95 backdrop-blur-md border border-zinc-200/90 p-8 sm:p-10 shadow-xl transition-all duration-300" id="stage-01">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-100">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-xl bg-zinc-900 text-white font-display font-extrabold flex items-center justify-center text-sm shadow-sm">01</span>
                    <span className="text-xs font-sans font-bold text-zinc-600 uppercase tracking-wider">STAGE 01 // SOLAR TRADER</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200">ROLE: TRADER</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-zinc-900 mb-3 tracking-tight">Supply Listing</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-5">
                      Every tier-1 vendor capitalizes and lists panels, inverters, batteries, BOS, and structures on a live, searchable wholesale catalog for every vendor on the network.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-sans">
                      <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700">⚡ Live Warehouse Feeds</span>
                      <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700">🔒 Bonded Depot Verification</span>
                    </div>
                  </div>
                  <div className="md:col-span-5 bg-zinc-950 text-zinc-200 rounded-2xl p-4 font-sans text-xs border border-zinc-800 shadow-inner">
                    <div className="flex justify-between items-center pb-2 mb-2 border-b border-zinc-800 text-[10px] text-zinc-500">
                      <span>TERMINAL // WHOLESALE CATALOG</span>
                      <span className="text-emerald-400">SYNCED</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between text-zinc-300">
                        <span>TopCon 550W (Mono)</span>
                        <span className="text-emerald-400 font-bold">₹18.40/W</span>
                      </div>
                      <div className="text-[10px] text-zinc-500">Mundra Port · 42 Pallets Reserved</div>
                      <div className="flex justify-between text-zinc-300 pt-1 border-t border-zinc-800">
                        <span>Hybrid 10kW Inverter</span>
                        <span className="text-emerald-400 font-bold">18 Units Available</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Stage 02 */}
              <article className="stack-card sticky top-32 z-20 rounded-3xl bg-white/95 backdrop-blur-md border border-zinc-200/90 p-8 sm:p-10 shadow-xl transition-all duration-300" id="stage-02">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-100">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-xl bg-blue-600 text-white font-display font-extrabold flex items-center justify-center text-sm shadow-sm">02</span>
                    <span className="text-xs font-sans font-bold text-blue-700 uppercase tracking-wider">STAGE 02 // SOLAR VENDOR</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-blue-50 text-blue-800 border border-blue-200/80">ROLE: VENDOR</span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">CONSULTANT</span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">INSTALLER</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-zinc-900 mb-3 tracking-tight">Squad Building</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-5">
                      Vendor assembles a 6-member squad (up to 4 certified installers and 2 consultants) hired from the verified platform pool and onboarded to their own crew.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-sans">
                      <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700">👥 6-Person Authorized Unit</span>
                      <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700">📜 Skill Verification Token</span>
                    </div>
                  </div>
                  <div className="md:col-span-5 bg-[#F6F8FA] rounded-2xl p-4 font-sans text-xs border border-zinc-200/90 shadow-sm">
                    <div className="text-[10px] text-zinc-600 uppercase font-bold mb-2 pb-1 border-b border-zinc-200">ACTIVE CREW ROSTER #SQ-219</div>
                    <div className="space-y-1 text-[11px]">
                      <div className="flex justify-between items-center text-zinc-800">
                        <span>1x Lead Vendor PM</span>
                        <span className="text-emerald-600 font-bold">Assigned</span>
                      </div>
                      <div className="flex justify-between items-center text-zinc-800">
                        <span>2x Technical Consultants</span>
                        <span className="text-emerald-600 font-bold">Vetted</span>
                      </div>
                      <div className="flex justify-between items-center text-zinc-800">
                        <span>3x-4x Certified Installers</span>
                        <span className="text-emerald-600 font-bold">Onboarded</span>
                      </div>
                      <div className="mt-2 pt-2 border-t border-zinc-200 text-[10px] text-zinc-500 font-sans">Milestone payouts linked directly to DISCOM signoffs</div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Stage 03 */}
              <article className="stack-card sticky top-36 z-30 rounded-3xl bg-white/95 backdrop-blur-md border border-zinc-200/90 p-8 sm:p-10 shadow-xl transition-all duration-300" id="stage-03">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-100">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-display font-extrabold flex items-center justify-center text-sm shadow-sm">03</span>
                    <span className="text-xs font-sans font-bold text-emerald-700 uppercase tracking-wider">STAGE 03 // VENDOR / CONSULTANT</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">ROLE: VENDOR</span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">RESIDENTIAL / C&amp;I</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-zinc-900 mb-3 tracking-tight">Private CRM Capture</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-5">
                      Residential, MSME or commercial leads are tokenized and captured inside the Blind-Vault CRM — 100% private, invisible even to SuryaNexa administrators.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-sans">
                      <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">🔒 PROPRIETARY PRIVACY VAULT Asymmetric Key</span>
                      <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700">Zero Admin Visibility</span>
                    </div>
                  </div>
                  <div className="md:col-span-5 bg-zinc-900 text-zinc-100 rounded-2xl p-4 font-sans text-xs border border-zinc-800 shadow-md">
                    <div className="flex justify-between text-[10px] text-zinc-500 pb-2 mb-2 border-b border-zinc-800">
                      <span>BLIND-VAULT REPOSITORY</span>
                      <span className="text-emerald-400">ENCRYPTED</span>
                    </div>
                    <div className="p-2 rounded bg-zinc-950 border border-zinc-800 mb-2">
                      <div className="text-[10px] text-zinc-500 font-sans">Lead Payload #8410:</div>
                      <div className="text-[11px] text-emerald-300 font-mono truncate">cf41e892d4090b8f...2e37a</div>
                    </div>
                    <div className="text-[10px] text-emerald-400 flex items-center gap-1 font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Decryptable only via EPC Vendor Private Key
                    </div>
                  </div>
                </div>
              </article>

              {/* Stage 04 */}
              <article className="stack-card sticky top-40 z-40 rounded-3xl bg-white/95 backdrop-blur-md border border-zinc-200/90 p-8 sm:p-10 shadow-xl transition-all duration-300" id="stage-04">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-100">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-xl bg-zinc-900 text-white font-display font-extrabold flex items-center justify-center text-sm shadow-sm">04</span>
                    <span className="text-xs font-sans font-bold text-zinc-600 uppercase tracking-wider">STAGE 04 // VENDOR / CONSULTANT</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200">ROLE: VENDOR</span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">TRADER</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-zinc-900 mb-3 tracking-tight">Kit Engineering</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-5">
                      Consultant configures exact balance of systems across multiple traders — pairing Adani bifacial panels from Mundra with Sungrow inverters from Surat in a single order.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-sans">
                      <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700">⚡ Cross-Stockist Sourcing</span>
                      <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700">1-Click BOM Dossier</span>
                    </div>
                  </div>
                  <div className="md:col-span-5 bg-zinc-50 rounded-2xl p-4 font-sans text-xs border border-zinc-200 shadow-sm">
                    <div className="flex justify-between items-center text-[10px] text-zinc-500 pb-2 mb-2 border-b border-zinc-200">
                      <span>BOM SPECIFICATION MATRIX</span>
                      <span className="text-emerald-700 font-bold">100% COMPATIBLE</span>
                    </div>
                    <div className="space-y-1.5 text-[11px]">
                      <div className="flex justify-between text-zinc-800">
                        <span>Adani 550W TOPCon (x54)</span>
                        <span className="font-bold text-zinc-950">Mundra Depot</span>
                      </div>
                      <div className="flex justify-between text-zinc-800">
                        <span>Sungrow 25kW Inverter (x1)</span>
                        <span className="font-bold text-zinc-950">Surat Depot</span>
                      </div>
                      <div className="flex justify-between text-zinc-800 pt-1 border-t border-zinc-200 text-emerald-700 font-bold">
                        <span>Consolidated Purchase Order</span>
                        <span>Auto-Escrowed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Stage 05 */}
              <article className="stack-card sticky top-44 z-50 rounded-3xl bg-white/95 backdrop-blur-md border border-zinc-200/90 p-8 sm:p-10 shadow-xl transition-all duration-300" id="stage-05">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-100">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-xl bg-sky-600 text-white font-display font-extrabold flex items-center justify-center text-sm shadow-sm">05</span>
                    <span className="text-xs font-sans font-bold text-sky-700 uppercase tracking-wider">STAGE 05 // LOGISTICS &amp; TELEMETRICS</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-sky-50 text-sky-800 border border-sky-200/80">ROLE: CARRIER</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-zinc-900 mb-3 tracking-tight">Consolidated PO &amp; Transit</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-5">
                      Multi-trader kit is bundled into a single secure dispatch. GPS telematics track the shipment from Mundra port to site gate with live insurance protection.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-sans">
                      <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700">🚛 Real-Time Freight Telemetry</span>
                      <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700">Transit Insurance Shield</span>
                    </div>
                  </div>
                  <div className="md:col-span-5 bg-zinc-950 text-white rounded-2xl p-4 font-sans text-xs border border-zinc-800 shadow-md">
                    <div className="flex justify-between items-center text-[10px] text-zinc-400 pb-2 mb-2 border-b border-zinc-800">
                      <span>CONSIGNMENT #TR-9912</span>
                      <span className="text-emerald-400 font-bold">54 km/h</span>
                    </div>
                    <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden my-2">
                      <div className="bg-emerald-500 h-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between text-[10px] text-zinc-400">
                      <span>Escrow Locked: ₹4,82,000</span>
                      <span className="text-zinc-200 font-semibold">ETA: 3h 10m</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Stage 06 */}
              <article className="stack-card sticky top-48 z-[60] rounded-3xl bg-white/95 backdrop-blur-md border border-zinc-200/90 p-8 sm:p-10 shadow-xl transition-all duration-300" id="stage-06">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-100">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-xl bg-zinc-900 text-white font-display font-extrabold flex items-center justify-center text-sm shadow-sm">06</span>
                    <span className="text-xs font-sans font-bold text-zinc-600 uppercase tracking-wider">STAGE 06 // INSTALLER</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200">ROLE: TRADER</span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">INSTALLER</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-zinc-900 mb-3 tracking-tight">Video Unloading</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-5">
                      At the truck, the field team completes an interactive unloading checklist and records a timestamped unboxing video — 100% protection against transit damage disputes and 180s escrow unlock.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-sans">
                      <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">🎥 180s Video Shield</span>
                      <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700">0% Micro-Crack Disputes</span>
                    </div>
                  </div>
                  <div className="md:col-span-5 bg-zinc-50 rounded-2xl p-4 font-sans text-xs border border-zinc-200 shadow-sm">
                    <div className="flex justify-between items-center text-[10px] text-zinc-600 pb-2 mb-2 border-b border-zinc-200">
                      <span>TAILGATE INSPECTION PROTOCOL</span>
                      <span className="text-emerald-700 font-bold">VERIFIED</span>
                    </div>
                    <div className="space-y-1.5 text-[11px] text-zinc-800">
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                        <span>42 Pallets Barcode-Scanned</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                        <span>180s 4K Video Upload Complete</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px] font-bold">✓</span>
                        <span>Trader Hardware Escrow Released</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Stage 07 */}
              <article className="stack-card sticky top-52 z-[70] rounded-3xl bg-white/95 backdrop-blur-md border border-emerald-300/80 p-8 sm:p-10 shadow-2xl transition-all duration-300 ring-1 ring-emerald-500/20" id="stage-07">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-zinc-100">
                  <div className="flex items-center space-x-3">
                    <span className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-display font-extrabold flex items-center justify-center text-sm shadow-sm">07</span>
                    <span className="text-xs font-sans font-bold text-emerald-700 uppercase tracking-wider">STAGE 07 // FULL SQUAD &amp; CONSUMER</span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/80">ROLE: VENDOR</span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-zinc-100 text-zinc-700 border border-zinc-200">INSTALLER</span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-sans font-semibold bg-zinc-100 text-zinc-800 border border-zinc-200">CONSUMER</span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-7">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-zinc-900 mb-3 tracking-tight">Execution &amp; Rank</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-normal mb-5">
                      The rooftop is commissioned, the consumer rates the experience, and the vendor's area, city, and state ranking climbs — verified trust that wins the next deal.
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs font-sans">
                      <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 font-bold border border-emerald-300">★ Rank Score +42 pts</span>
                      <span className="px-3 py-1 rounded-lg bg-zinc-50 border border-zinc-200/80 text-zinc-700">Verified Consumer Proof</span>
                    </div>
                  </div>
                  <div className="md:col-span-5 bg-zinc-950 text-white rounded-2xl p-5 font-sans text-xs border border-zinc-800 shadow-xl">
                    <div className="flex justify-between items-center text-[10px] text-zinc-500 pb-2 mb-3 border-b border-zinc-800">
                      <span>COMMISSIONING CERTIFICATE</span>
                      <span className="text-emerald-400 font-bold">100% SUCCESS</span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-zinc-200 text-xs font-sans font-semibold">
                        <span>Consumer Rating:</span>
                        <span className="text-emerald-400">★★★★★ 5.0</span>
                      </div>
                      <div className="flex justify-between text-zinc-500 text-[11px]">
                        <span>DISCOM Meter Sync:</span>
                        <span className="text-emerald-400">Bi-directional Live</span>
                      </div>
                      <div className="flex justify-between text-zinc-500 text-[11px]">
                        <span>Regional EPC Rank:</span>
                        <span className="text-white font-bold">#2 in Pune Metro</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

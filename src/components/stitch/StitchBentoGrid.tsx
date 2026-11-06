"use client";

import React from "react";
import {
  Building2,
  Users,
  Compass,
  HardHat,
  Check
} from "lucide-react";
import SectionScrollFade from "@/components/ui/SectionScrollFade";

export default function StitchBentoGrid() {
  return (
    <div className="relative">
      {/* =========================================================================
          PART 1 OF 5: CENTRAL SECTION HEADING & VALUE INTRO
         ========================================================================= */}
      <SectionScrollFade id="stakeholder-solutions">
        <section className="py-20 lg:py-28 bg-white border-t border-zinc-200/80 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-zinc-950 tracking-tight leading-tight">
              Engineered to eliminate friction across <br className="hidden sm:inline" />
              <span className="text-emerald-700">the entire solar value chain.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-zinc-600 font-sans font-normal leading-relaxed max-w-3xl mx-auto">
              Indian solar projects suffer from shadow brokers, delayed DISCOM submittals, dead capital, and disputed carrier claims. Explore how SuryaNexa replaces WhatsApp chaos with verified, automated workflows for every stakeholder.
            </p>
          </div>
        </section>
      </SectionScrollFade>

      {/* =========================================================================
          PART 2 OF 5: FOR SOLAR TRADERS & BONDED STOCKISTS (Text Left, Photo Right)
         ========================================================================= */}
      <SectionScrollFade>
        <section className="py-16 lg:py-24 bg-white border-t border-zinc-200/70 relative overflow-hidden">
          <div className="max-w-7xl xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Text Content Block */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center border border-zinc-200 shadow-xs">
                    <Building2 className="w-4 h-4 text-zinc-700" />
                  </div>
                  <span className="text-xs font-sans font-bold tracking-wider text-zinc-600 uppercase">
                    01 // FOR SOLAR TRADERS &amp; BONDED STOCKISTS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-zinc-950 tracking-tight leading-tight">
                  Stop losing margins to rogue brokers and buyer payment defaults.
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                  Traders routinely lose deals to shadow brokers who leak quotes to rival stockists, or face dead capital when buyers delay payment after pallets arrive on site. SuryaNexa’s cryptographic vault and automated escrow eliminate these risks entirely.
                </p>

                {/* Checklist Bullets */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        Blind-Vault™ Cryptographic Privacy
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        Buyer identities and commercial quantities remain encrypted in zero-knowledge envelopes. Even platform admins cannot peek until the purchase order is finalized.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        180-Second Video Escrow Release
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        100% of order capital is secured in escrow before trucks leave the depot, released automatically within minutes of verified unboxing video upload.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        Direct Ex-Depot Regional Demand
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        Connect directly to verified regional EPC contractors across Mundra, Surat, Pune, and Greater Noida depots with zero middleman commissions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metric Footer */}
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-6">
                  <div>
                    <span className="text-2xl font-extrabold font-display text-emerald-700">₹18.4 Cr</span>
                    <p className="text-xs font-sans text-zinc-500 font-medium">Active inventory volume traded</p>
                  </div>
                  <div className="h-8 w-px bg-zinc-200" />
                  <div>
                    <span className="text-2xl font-extrabold font-display text-zinc-950">0%</span>
                    <p className="text-xs font-sans text-zinc-500 font-medium">Buyer default rate on escrow</p>
                  </div>
                </div>
              </div>

              {/* Real Photograph: Solar Traders & Bonded Stockists Vault */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-zinc-100 group">
                  <img
                    src="/solar-traders-vault.jpg"
                    alt="Solar traders and bonded stockists managing encrypted orders and escrow release on SuryaNexa trader vault"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionScrollFade>

      {/* =========================================================================
          PART 3 OF 5: FOR EPC CONTRACTORS & VENDORS (Photo Left, Text Right)
         ========================================================================= */}
      <SectionScrollFade>
        <section className="py-16 lg:py-24 bg-white border-t border-zinc-200/70 relative overflow-hidden">
          <div className="max-w-7xl xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Real Photograph: EPC Contractors & Bonded Depot Dispatch */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-zinc-100 group">
                  <img
                    src="/solar-epc-depot.jpg"
                    alt="EPC Contractor and Logistics Supervisor inspecting Waaree and Adani solar pallet delivery at bonded depot"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Text Content Block */}
              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center border border-zinc-200 shadow-xs">
                    <Users className="w-4 h-4 text-zinc-700" />
                  </div>
                  <span className="text-xs font-sans font-bold tracking-wider text-zinc-600 uppercase">
                    02 // FOR EPC CONTRACTORS &amp; VENDORS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-zinc-950 tracking-tight leading-tight">
                  Eliminate supply chain uncertainty, transit damages, and milestone cash lockup.
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                  Procuring modules on WhatsApp groups leads to phantom stock, unverified specs, and weeks of disputes if panels arrive damaged. SuryaNexa provides direct manufacturer ex-depot allocations backed by transit insurance and revolving milestone credit lines.
                </p>

                {/* Checklist Bullets */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        Live Verified Ex-Depot Stock
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        Direct allocations from certified Tier-1 stockists (Waaree, Adani, Sungrow) with bonded warehouse warranties and 100% ALMM compliance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        Transit-Shield Cargo Protection
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        GPS telematics and geostamped 4K unboxing protocols ensure damaged pallet claims settle automatically within 24 hours without legal fights.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        60-Day Milestone Credit Facility
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        Revolving working capital advances unlocked against verified project installation milestones, keeping cash flow fluid before utility inspection.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metric Footer */}
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-6">
                  <div>
                    <span className="text-2xl font-extrabold font-display text-emerald-700">60 Days</span>
                    <p className="text-xs font-sans text-zinc-500 font-medium">Revolving capex credit facility</p>
                  </div>
                  <div className="h-8 w-px bg-zinc-200" />
                  <div>
                    <span className="text-2xl font-extrabold font-display text-zinc-950">100%</span>
                    <p className="text-xs font-sans text-zinc-500 font-medium">ALMM &amp; BIS Tier-1 certified only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionScrollFade>

      {/* =========================================================================
          PART 4 OF 5: FOR SOLAR CONSULTANTS & CAD ENGINEERS (Text Left, Photo Right)
         ========================================================================= */}
      <SectionScrollFade>
        <section className="py-16 lg:py-24 bg-white border-t border-zinc-200/70 relative overflow-hidden">
          <div className="max-w-7xl xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Text Content Block */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center border border-zinc-200 shadow-xs">
                    <Compass className="w-4 h-4 text-zinc-700" />
                  </div>
                  <span className="text-xs font-sans font-bold tracking-wider text-zinc-600 uppercase">
                    03 // FOR SOLAR CONSULTANTS &amp; CAD ENGINEERS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-zinc-950 tracking-tight leading-tight">
                  Say goodbye to endless DISCOM redraws and unbilled scope creep.
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                  Every state electricity board has idiosyncratic single line diagram rules, causing weeks of back-and-forth rejections. SuryaNexa automates state-compliant SLDs and guarantees upfront retainer payouts for every design dossier.
                </p>

                {/* Checklist Bullets */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        Automated DISCOM Net-Metering Engine
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        1-click CEIG and DISCOM-compliant Single Line Diagrams generated in 1.4s with 99.4% first-pass approval across MSEDCL, BESCOM, UGVCL, and DHBVN.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        SuryaCalc™ 60-Second AI Sizing
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        Satellite rooftop polygon detection, solar irradiance simulation, and automated PM Surya Ghar DBT subsidy calculation (up to ₹78,000).
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        Milestone Retainer Escrow
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        Engineering retainers are deposited upfront before CAD drafting starts and released automatically on dossier delivery, preventing unbilled revisions.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metric Footer */}
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-6">
                  <div>
                    <span className="text-2xl font-extrabold font-display text-emerald-700">99.4%</span>
                    <p className="text-xs font-sans text-zinc-500 font-medium">First-pass DISCOM SLD approval</p>
                  </div>
                  <div className="h-8 w-px bg-zinc-200" />
                  <div>
                    <span className="text-2xl font-extrabold font-display text-zinc-950">60 Sec</span>
                    <p className="text-xs font-sans text-zinc-500 font-medium">Satellite rooftop solar sizing</p>
                  </div>
                </div>
              </div>

              {/* Real Photograph: Solar Consultants & CAD Engineers reviewing Automated DISCOM Net-Metering SLD */}
              <div className="lg:col-span-7">
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-zinc-100 group">
                  <img
                    src="/solar-consultants-cad.jpg"
                    alt="Solar Consultants and CAD Engineers reviewing automated DISCOM single line diagram"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionScrollFade>

      {/* =========================================================================
          PART 5 OF 5: FOR FIELD INSTALLERS & ROOFTOP SQUADS (Photo Left, Text Right)
         ========================================================================= */}
      <SectionScrollFade>
        <section className="py-16 lg:py-24 bg-white border-t border-b border-zinc-200/70 relative overflow-hidden">
          <div className="max-w-7xl xl:max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
              {/* Real Photograph: Field Installers & Rooftop Squads on Site */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative rounded-3xl overflow-hidden border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-zinc-100 group">
                  <img
                    src="/solar-installers-field.jpg"
                    alt="Solar Field Installers and Rooftop Squad conducting inverter testing with SuryaNexa app"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>

              {/* Text Content Block */}
              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center border border-zinc-200 shadow-xs">
                    <HardHat className="w-4 h-4 text-zinc-700" />
                  </div>
                  <span className="text-xs font-sans font-bold tracking-wider text-zinc-600 uppercase">
                    04 // FOR FIELD INSTALLERS &amp; ROOFTOP SQUADS
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-zinc-950 tracking-tight leading-tight">
                  Get paid on time for quality installations with zero snag list disputes.
                </h3>

                <p className="text-sm sm:text-base text-zinc-600 font-sans leading-relaxed">
                  Technicians frequently face delayed wages and arbitrary deductions from contractors using manufactured snag lists. SuryaNexa ties labor payments directly to verified digital quality proofs and protects crews with documented HSE protocols.
                </p>

                {/* Checklist Bullets */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        Direct Milestone Labor Payouts
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        Automated bank payouts released immediately once string megger test results, DC string Voc readings, and inverter grid-tie proofs are uploaded.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        Synchronized BOS Hardware Staging
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        The platform verifies 100% of balance-of-system hardware (clamps, MC4 connectors, DC cables) is on-site before crane lift windows open, eliminating idle hours.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-display font-bold text-zinc-950">
                        Digital Toolbox HSE Compliance
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5 leading-relaxed">
                        Geofenced safety briefing check-ins and timestamped harness clip-on photographic logs that protect installer safety and legal rights.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metric Footer */}
                <div className="pt-4 border-t border-zinc-100 flex items-center gap-6">
                  <div>
                    <span className="text-2xl font-extrabold font-display text-emerald-700">180 Sec</span>
                    <p className="text-xs font-sans text-zinc-500 font-medium">Payout release upon verified test signoff</p>
                  </div>
                  <div className="h-8 w-px bg-zinc-200" />
                  <div>
                    <span className="text-2xl font-extrabold font-display text-zinc-950">0 Days</span>
                    <p className="text-xs font-sans text-zinc-500 font-medium">Idle crew downtime from missing hardware</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SectionScrollFade>
    </div>
  );
}

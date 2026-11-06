"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Reveal, Eyebrow, SectionShell } from "./Reveal";
import { LANDING } from "@/constants/testIds";

const FAQS = [
  {
    q: "Can SuryaNexa administrators really not see my leads?",
    a: "Correct. The Blind-Vault CRM encrypts and isolates every lead at the vendor level. No platform administrator, trader or rival vendor can view, access or export your lead data until you convert the deal and trigger hardware procurement yourself.",
  },
  {
    q: "How does mix-and-match procurement across traders work?",
    a: "Pick Tier-1 panels from Trader A, a hybrid inverter from Trader B, lithium batteries from Trader C and structures from Trader D — inside a single project workflow. The configurator generates side-by-side consumer proposals optimized for maximum generation efficiency or maximum price feasibility.",
  },
  {
    q: "What exactly is the 6-member squad?",
    a: "Every vendor can govern one structured core unit of up to 4 installers and 2 consultants. You can onboard your existing staff directly or recruit verified professionals from the SuryaNexa Consultant & Installer Application Pool — with task-level governance for surveys, unloading and installation milestones.",
  },
  {
    q: "How does the video unloading protocol stop transit disputes?",
    a: "When the truck arrives, the field team completes an interactive unloading checklist and uploads a timestamped unloading video directly inside SuryaNexa. That indisputable evidence powers instant warranty and transit-insurance claims — no more he-said-she-said between trader, carrier and vendor.",
  },
  {
    q: "How do area, city and state rankings work?",
    a: "Vendors earn verified performance ratings from completed project quality, unloading compliance, installation speed and consumer reviews. SuryaNexa ranks vendors dynamically across local area, city and state leaderboards — top-ranked badges become a trust magnet for residential, MSME and commercial buyers.",
  },
  {
    q: "Who can list hardware as a trader?",
    a: "Only bulk suppliers, importers and OEMs that complete business (KYB) and quality verification. Once verified, they list their full catalog — panels, inverters, batteries, BOS and mounting structures — and receive standardized, pre-funded purchase orders from active vendors.",
  },
];

const FaqSection = () => (
  <SectionShell id="faq" data-testid={LANDING.faqSection}>
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <Eyebrow>Questions, answered</Eyebrow>
        <Reveal>
          <h2 className="font-display mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Everything the solar trade
            <span className="text-gradient-eco block">asks us first.</span>
          </h2>
        </Reveal>
      </div>
      <div className="lg:col-span-8">
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-b border-slate-200"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="py-5 text-left text-sm font-semibold text-slate-800 hover:text-emerald-700 hover:no-underline sm:text-base"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-500">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </SectionShell>
);

export default FaqSection;

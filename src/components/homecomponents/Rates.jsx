import React, { useState } from "react";
import {
  Percent,
  Briefcase,
  ChevronRight,
  Info,
  TrendingUp,
  ArrowUpRight,
  ShieldCheck,
  Landmark,
  DollarSign,
  Calculator,
} from "lucide-react";
import useSEO from "../../hooks/useSEO";

export default function Rates() {
  // Tabs: 'savings' | 'gics' | 'borrowing' | 'business'
  const [activeTab, setActiveTab] = useState("savings");

  // Interactive GIC Term selection state to show clean user interaction handling
  const [gicType, setGicType] = useState("regular"); // 'regular' | 'us_dollar'

  useSEO({ title: "Rates" });
  return (
    <main className="w-full bg-gray-50 text-gray-900 font-sans antialiased">
      {/* 1. RATE HEADER HERO OVERVIEW */}
      <section className="bg-neutral-900 text-white py-14 px-4 md:px-12 relative overflow-hidden border-b border-orange-500/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs text-orange-400 font-bold uppercase tracking-wider bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
              <Landmark className="w-3.5 h-3.5" /> Direct Financial Disclosures
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">
              Compare Current Rates
            </h1>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Review current standard baseline and promotional percentages
              across active accounts, guaranteed short/long-term term deposits,
              and variable borrowing schedules.
            </p>
          </div>

          {/* Quick Info Badge right aligned */}
          <div className="bg-neutral-800 border border-neutral-700 p-5 rounded-2xl flex items-center gap-4 shrink-0 md:max-w-xs">
            <div className="p-3 bg-orange-600 text-white rounded-xl">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-400 font-medium">
                First Kevington Prime Rate
              </div>
              <div className="text-2xl font-black text-white mt-0.5">4.45%</div>
              <div className="text-[10px] text-neutral-500">
                Effective Early 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DYNAMIC ACCORDION TAB SELECTOR SWITCH */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-12">
          <div className="flex space-x-2 overflow-x-auto py-4 scrollbar-none">
            {[
              { id: "savings", label: "Savings Accounts" },
              { id: "gics", label: "Guaranteed GICs" },
              { id: "borrowing", label: "Mortgages & Lending" },
              { id: "business", label: "Business Rates" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide border transition shrink-0 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-orange-600 border-orange-600 text-white shadow-md shadow-orange-600/10"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. RATES INTERACTIVE PRESENTATION BLOCKS */}
      <section className="py-12 px-4 md:px-12 max-w-5xl mx-auto min-h-[450px]">
        {/* --- TAB CONTENT: SAVINGS ACCOUNTS --- */}
        {activeTab === "savings" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-orange-50 border border-orange-100 p-6 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <span className="text-[10px] font-bold text-orange-700 uppercase tracking-widest bg-orange-200/50 px-2.5 py-0.5 rounded">
                  Special Offer
                </span>
                <h3 className="text-lg font-black text-neutral-900 mt-2">
                  New Client Interest Booster
                </h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  Earn a premium promo tier across TFSA, RSP, and Standard
                  Savings profiles.
                </p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-3xl font-black text-orange-600">4.50%</div>
                <div className="text-[11px] text-gray-500 font-medium">
                  Promo Rate for 5 Months
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 grid grid-cols-3 text-[11px] font-bold tracking-wider text-gray-500 uppercase">
                <div className="col-span-2">Account Type</div>
                <div className="text-right">Standard Annual Rate</div>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                {[
                  {
                    name: "First Kevington Savings Account",
                    rate: "0.30%†",
                  },
                  { name: "Tax-Free Savings Account (TFSA)", rate: "0.30%†" },
                  { name: "RSP Savings Account", rate: "0.30%†" },
                  { name: "RIF Savings Account", rate: "0.35%†" },
                  { name: "US$ Savings Account", rate: "0.10%†" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="px-6 py-4 grid grid-cols-3 items-center hover:bg-gray-50/60 transition"
                  >
                    <div className="col-span-2 font-bold text-neutral-800">
                      {row.name}
                    </div>
                    <div className="text-right font-mono font-bold text-neutral-900 text-base">
                      {row.rate}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chequing Tiers */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm mt-8">
              <div className="bg-neutral-800 text-white px-6 py-4">
                <h3 className="font-bold text-base">
                  No-Fee Daily Chequing Account Tiers
                </h3>
                <p className="text-xs text-neutral-400 font-light mt-0.5">
                  Unlike other brick-and-mortar setups, your daily operational
                  balances earn tiered incremental yields.
                </p>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                {[
                  { balance: "$0.00 – $49,999.99", rate: "0.01%" },
                  { balance: "$50,000.00 – $99,999.99", rate: "0.05%" },
                  { balance: "$100,000.00 – $499,999.99", rate: "0.10%" },
                  { balance: "$500,000.00 or more", rate: "0.01%" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="px-6 py-4 flex justify-between items-center hover:bg-gray-50/60 transition"
                  >
                    <span className="text-gray-600 font-medium">
                      Balance range:{" "}
                      <strong className="text-neutral-800 font-bold">
                        {row.balance}
                      </strong>
                    </span>
                    <span className="font-mono font-bold text-neutral-900 text-sm">
                      {row.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- TAB CONTENT: GICS GUARANTEED --- */}
        {activeTab === "gics" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
              <div>
                <h3 className="font-black text-xl text-neutral-900">
                  Guaranteed Investment Certificates
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Lock in secure, zero-risk returns for specific fixed timeline
                  structures.
                </p>
              </div>

              {/* Currency Selection Toggle */}
              <div className="flex bg-gray-200/60 p-1 rounded-xl text-xs font-bold shrink-0">
                <button
                  onClick={() => setGicType("regular")}
                  className={`px-3 py-1.5 rounded-lg transition ${gicType === "regular" ? "bg-white shadow text-neutral-900" : "text-gray-600 hover:text-neutral-900"}`}
                >
                  CAD $
                </button>
                <button
                  onClick={() => setGicType("us_dollar")}
                  className={`px-3 py-1.5 rounded-lg transition ${gicType === "us_dollar" ? "bg-white shadow text-neutral-900" : "text-gray-600 hover:text-neutral-900"}`}
                >
                  US $
                </button>
              </div>
            </div>

            {/* GIC Data Table */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 grid grid-cols-3 text-[11px] font-bold tracking-wider text-gray-500 uppercase">
                <div>GIC Investment Term</div>
                <div className="text-center">Non-Registered / TFSA</div>
                <div className="text-right">RSP / RIF Tier</div>
              </div>
              <div className="divide-y divide-gray-100 text-sm">
                {(gicType === "regular"
                  ? [
                      { term: "90 Day Term", reg: "2.55%", rsp: "2.55%" },
                      { term: "180 Day Term", reg: "2.65%", rsp: "2.65%" },
                      { term: "270 Day Term", reg: "3.00%", rsp: "3.00%" },
                      { term: "1 Year Term", reg: "3.25%", rsp: "3.35%" },
                      { term: "1.5 Year Term", reg: "3.40%", rsp: "3.40%" },
                      { term: "2 Year Term", reg: "3.50%", rsp: "3.50%" },
                      { term: "3 Year Term", reg: "3.60%", rsp: "3.60%" },
                      { term: "5 Year Term", reg: "3.75%", rsp: "3.75%" },
                    ]
                  : [
                      { term: "90 Day US$ Term", reg: "3.45%", rsp: "N/A" },
                      { term: "180 Day US$ Term", reg: "3.65%", rsp: "N/A" },
                      { term: "270 Day US$ Term", reg: "3.80%", rsp: "N/A" },
                      { term: "1 Year US$ Term", reg: "4.00%", rsp: "N/A" },
                      { term: "2 Year US$ Term", reg: "4.25%", rsp: "N/A" },
                      { term: "5 Year US$ Term", reg: "4.40%", rsp: "N/A" },
                    ]
                ).map((row, i) => (
                  <div
                    key={i}
                    className="px-6 py-3.5 grid grid-cols-3 items-center hover:bg-gray-50/60 transition font-medium"
                  >
                    <div className="font-bold text-neutral-800">{row.term}</div>
                    <div className="text-center font-mono font-bold text-neutral-900">
                      {row.reg}
                    </div>
                    <div className="text-right font-mono font-bold text-orange-600">
                      {row.rsp}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- TAB CONTENT: BORROWING & MORTGAGES --- */}
        {activeTab === "borrowing" && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="font-black text-xl text-neutral-900">
                Mortgages & Home Equity Lending
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Competitive locked upfront options for standard property lines
                and personal lines of credit.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Box 1: Fixed Terms */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
                <h4 className="font-bold text-base text-neutral-800 border-b border-gray-100 pb-2">
                  Fixed-Rate Mortgage Terms
                </h4>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "1 Year Fixed Term", value: "5.99%" },
                    { label: "3 Year Fixed Term", value: "4.44%" },
                    { label: "5 Year Fixed Term", value: "4.49%" },
                    { label: "10 Year Fixed Term", value: "4.84%" },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center font-medium"
                    >
                      <span className="text-gray-600">{row.label}</span>
                      <span className="font-mono font-bold text-neutral-900">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Box 2: Variable & Lines of credit */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
                <h4 className="font-bold text-base text-neutral-800 border-b border-gray-100 pb-2">
                  Variable & Line of Credit Options
                </h4>
                <div className="space-y-3 text-sm">
                  {[
                    { label: "5 Year Variable Mortgage", value: "4.00%" },
                    {
                      label: "Home Equity Line of Credit (HELOC)",
                      value: "5.95%",
                    },
                    {
                      label: "Personal Line of Credit baseline",
                      value: "Prime + 2.00%",
                    },
                  ].map((row, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center font-medium"
                    >
                      <span className="text-gray-600">{row.label}</span>
                      <span className="font-mono font-bold text-orange-600">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100 text-[11px] text-gray-500 leading-normal">
                  💡 <strong>Existing Clients:</strong> You may be eligible to
                  view uniquely calibrated preferred mortgage reductions by
                  accessing your dashboard profiles securely.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB CONTENT: BUSINESS RATES --- */}
        {activeTab === "business" && (
          <div className="space-y-6 animate-fadeIn">
            <div>
              <h3 className="font-black text-xl text-neutral-900">
                Commercial & Business Accounts
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Yield-bearing operating accounts structured for independent
                enterprises and corporate cash flow reserves.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-neutral-800 text-white px-6 py-4">
                <h4 className="font-bold text-base">
                  Business Savings Tiers (CAD)
                </h4>
              </div>
              <div className="divide-y divide-gray-100 text-sm text-medium">
                {[
                  { range: "$0.00 – $99,999.99", rate: "1.95%" },
                  { range: "$100,000.00 – $499,999.99", rate: "2.05%" },
                  { range: "$500,000.00 or more", rate: "2.55%" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className="px-6 py-4 flex justify-between items-center hover:bg-gray-50/60 transition"
                  >
                    <span className="text-gray-600">
                      Balance segment:{" "}
                      <strong className="text-neutral-800 font-semibold">
                        {row.range}
                      </strong>
                    </span>
                    <span className="font-mono font-bold text-neutral-900">
                      {row.rate}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* US Dollar business support */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex justify-between items-center">
              <div>
                <h4 className="font-bold text-neutral-800">
                  US$ Business Savings Account
                </h4>
                <p className="text-xs text-gray-500 mt-0.5">
                  Flat corporate interest tracking on cross-border American
                  currency reserves.
                </p>
              </div>
              <span className="font-mono font-bold text-orange-600 text-xl">
                0.90%
              </span>
            </div>
          </div>
        )}
      </section>

      {/* 4. DISCLOSURE & LEGAL FOOTNOTE BUFFER */}
      <section className="bg-gray-100 py-10 px-4 md:px-12 border-t border-gray-200 text-[11px] text-gray-500 leading-relaxed">
        <div className="max-w-5xl mx-auto space-y-3">
          <div className="flex gap-1.5 items-start">
            <Info className="w-3.5 h-3.5 text-gray-400 shrink-0 mt-0.5" />
            <p>
              † Annualized baseline yield metrics are evaluated daily and
              distributed on the close of standard calendar months. All
              displayed interest percentages represent current active structures
              and remain subject to market shifts or adjustment cycles without
              notice.
            </p>
          </div>
          <p className="pl-5">
            ² New Client promotional incentives apply explicitly to initial
            non-registered, TFSA, or RSP savings balances configured during
            verification thresholds. Cumulative balance limits matching
            promotional premium rate metrics are capped up to $1,000,000 per
            asset grouping.
          </p>
        </div>
      </section>
    </main>
  );
}

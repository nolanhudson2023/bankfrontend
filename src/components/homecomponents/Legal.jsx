import React, { useState } from "react";
import {
  FileText,
  Scale,
  ShieldCheck,
  AlertCircle,
  Search,
  ExternalLink,
  ChevronRight,
  BookOpen,
  Download,
  Building,
} from "lucide-react";

export default function Legal() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  // Directory of legal documents and agreements
  const legalDocuments = [
    {
      id: "chequing-agreement",
      title: "Tangerine Chequing Account Terms",
      category: "accounts",
      code: "Form 4022",
      description:
        "Covers transactional rules, overdraft limits, clearing profiles, and digital fee structures.",
      lastUpdated: "Jan 2026",
    },
    {
      id: "savings-agreement",
      title: "Savings & Investment Account Framework",
      category: "accounts",
      code: "Form 4025",
      description:
        "Details interest calculation compounding loops, RSP/TFSA rules, and holding parameters.",
      lastUpdated: "Mar 2026",
    },
    {
      id: "credit-card-agreement",
      title: "Money-Back Credit Card Cardholder Agreement",
      category: "credit",
      code: "Form 7010",
      description:
        "Outlines standard interest rates, cash-back reward distribution policies, and grace periods.",
      lastUpdated: "Dec 2025",
    },
    {
      id: "mortgage-terms",
      title: "Standard Mortgage Standard Charge Terms",
      category: "borrowing",
      code: "Form 8840",
      description:
        "Outlines prepayment privileges, default processing rules, and amortization adjustment parameters.",
      lastUpdated: "Apr 2026",
    },
    {
      id: "online-banking-terms",
      title: "Digital & Mobile Channels Agreement",
      category: "general",
      code: "Form 1002",
      description:
        "Defines acceptable usage profiles, biometric security setups, and digital liability boundaries.",
      lastUpdated: "Feb 2026",
    },
    {
      id: "complaints-process",
      title: "Resolving Your Complaints & Ombudsman Protocol",
      category: "general",
      code: "Form 9050",
      description:
        "A step-by-step resolution blueprint if internal services breach satisfaction baselines.",
      lastUpdated: "May 2026",
    },
  ];

  // Filtering filter logic based on pills + query text
  const filteredDocuments = legalDocuments.filter((doc) => {
    const matchesCategory =
      activeFilter === "all" || doc.category === activeFilter;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="w-full bg-slate-50 text-slate-900 font-sans antialiased">
      {/* 1. COMPACT HERO SECTION */}
      <section className="bg-neutral-900 text-white py-12 px-4 md:px-12 relative border-b-4 border-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-600 text-white text-[10px] uppercase tracking-widest font-extrabold px-2.5 py-0.5 rounded">
            Regulatory Disclosures
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
            Legal Terms & Agreements
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl font-light leading-relaxed">
            Access the complete regulatory framework guiding your Tangerine
            profiles. We prioritize clarity, outlining the operational
            parameters, account structures, and liabilities defining our
            relationship.
          </p>
        </div>
      </section>

      {/* 2. REGULATORY BODIES & PROTECTIONS INSIGHTS */}
      <section className="max-w-5xl mx-auto px-4 pt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex gap-4 items-start shadow-sm">
          <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl shrink-0 mt-0.5">
            <Building className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800">
              CDIC Deposit Protection
            </h3>
            <p className="text-slate-500 text-[11px] leading-relaxed font-light">
              Tangerine Bank is a member of the **Canada Deposit Insurance
              Corporation (CDIC)**. Eligible deposits held in our chequing,
              savings, and investment accounts remain secured up to regulatory
              limits.
            </p>
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 flex gap-4 items-start shadow-sm">
          <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl shrink-0 mt-0.5">
            <Scale className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800">
              FCAC Consumer Compliance
            </h3>
            <p className="text-slate-500 text-[11px] leading-relaxed font-light">
              We operate under the regulatory oversight of the **Financial
              Consumer Agency of Canada (FCAC)**, ensuring transparent interest
              projections, visible fee tables, and fair collection processes.
            </p>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SEARCH & DOCUMENT DIRECTORY */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-sm space-y-6">
          {/* Header Controls Area */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div className="space-y-1">
              <h2 className="text-lg font-black text-slate-900 tracking-tight">
                Agreement Repository
              </h2>
              <p className="text-slate-500 text-xs font-light">
                Filter by financial domain or look up specific form codes.
              </p>
            </div>

            {/* Quick Filter Pill Switches */}
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: "all", label: "All Documents" },
                { id: "accounts", label: "Banking" },
                { id: "credit", label: "Credit Cards" },
                { id: "borrowing", label: "Mortgages" },
                { id: "general", label: "General" },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setActiveFilter(pill.id)}
                  className={`px-3 py-1 rounded-md text-[11px] font-bold transition ${
                    activeFilter === pill.id
                      ? "bg-neutral-900 text-white"
                      : "bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Live Document Filter Entry Input */}
            <div className="relative w-full md:w-60">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search document registry..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg pl-8 pr-3 py-1.5 text-xs outline-none focus:border-orange-500 transition"
              />
            </div>
          </div>

          {/* Grid Layout of Agreements */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDocuments.length > 0 ? (
              filteredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="border border-slate-100 rounded-xl p-4 bg-slate-50/50 hover:bg-slate-50 transition flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                      <span>{doc.code}</span>
                      <span>Updated: {doc.lastUpdated}</span>
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs md:text-sm tracking-tight">
                      {doc.title}
                    </h4>
                    <p className="text-slate-500 text-[11px] font-light leading-relaxed">
                      {doc.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-semibold text-orange-600 cursor-pointer hover:text-orange-700">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3 h-3" /> Read Online
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 font-normal hover:text-orange-600">
                      <Download className="w-3 h-3" /> PDF
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12 text-slate-400 text-xs font-light bg-slate-50/40 rounded-xl border border-dashed border-slate-200">
                No legal declarations or form records found matching your
                specified filters.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. COMPLAINTS RESOLUTION STEP HIGHLIGHT */}
      <section className="max-w-5xl mx-auto px-4 pb-12">
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex gap-3 items-start">
            <div className="p-2 bg-white border border-orange-200 text-orange-600 rounded-xl shrink-0 mt-0.5">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div className="space-y-0.5">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                Have an Issue or Dispute?
              </h4>
              <p className="text-slate-600 text-[11px] leading-relaxed font-light max-w-xl">
                We are committed to resolving problems fairly and transparently.
                If a service doesn't meet expectations, access our official
                formal Escalation Pathways matrix to find timeline frameworks
                and contact channels.
              </p>
            </div>
          </div>
          <button className="bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold py-2 px-4 border border-slate-200 rounded-xl transition flex items-center gap-1 shrink-0">
            Escalation Path <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>
    </main>
  );
}

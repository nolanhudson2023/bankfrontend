import React, { useState } from "react";
import {
  Shield,
  Eye,
  Lock,
  FileText,
  UserCheck,
  ShieldAlert,
  Search,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Info,
  ExternalLink,
} from "lucide-react";

export default function Privacy() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSection, setExpandedSection] = useState("principles");

  // FAQ/Policy Section Content
  const policyBlocks = [
    {
      id: "principles",
      title: "Our Core Privacy Principles",
      icon: <Shield className="w-4 h-4 text-orange-600" />,
      content: `We build our digital financial platform around absolute transparency. Tangerine holds a strict commitment to fair data processing: your transactional records, asset metrics, and behavioral cookies are analyzed exclusively to fulfill requested services, prevent identity theft, or evaluate product eligibility profile matches. We never market, trade, or sell consumer personal information to third-party brokers.`,
    },
    {
      id: "collection",
      title: "What Personal Data We Track & Why",
      icon: <Eye className="w-4 h-4 text-orange-600" />,
      content: `When you interact with our applications, we collect direct identification profiles (name, mailing address, email communication lines, and transit/institution metadata) alongside automated tech fingerprints (IP locations and persistent session cookie configurations). This allows us to ensure safe system performance configurations and shield transactions from cross-site scripts or malicious access.`,
    },
    {
      id: "safeguards",
      title: "Electronic & Physical Protection Levels",
      icon: <Lock className="w-4 h-4 text-orange-600" />,
      content: `Our data center architecture runs under robust multi-layer encryption profiles. Access control permissions adhere to strict role-based principles—only specialists requiring files to finalize specific customer workflows or underwriting credit assessment loops can pull records. Any secondary vendors contractually agree to mirror our safety safeguards.`,
    },
    {
      id: "rights",
      title: "Managing Your Profile & Consent Settings",
      icon: <UserCheck className="w-4 h-4 text-orange-600" />,
      content: `You hold explicit legal entitlement to review your active financial data profile at any historical milestone. You can modify communication preferences, request data error corrections, or retract optional processing permission loops directly inside your desktop banking portal settings without structural operational penalties.`,
    },
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <main className="w-full bg-slate-50 text-slate-950 font-sans antialiased">
      {/* 1. COMPACT HERO BANNER */}
      <section className="bg-neutral-900 text-white py-12 px-4 md:px-12 relative border-b-4 border-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1 bg-orange-600 text-white text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded">
            Legal & Trust Center
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
            Privacy Commitment & Code
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-xl font-light leading-relaxed">
            Your trust is our principal balance. We maintain stringent
            technical, procedural, and electronic safeguards to defend your
            financial footprints and personal data configurations.
          </p>
        </div>
      </section>

      {/* 2. OVERVIEW HIGHLIGHT CARDS */}
      <section className="max-w-4xl mx-auto px-4 pt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2">
          <div className="p-2 bg-orange-50 text-orange-600 rounded-xl w-fit">
            <CheckCircle className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800">
            Zero Selling Policy
          </h3>
          <p className="text-slate-500 text-[11px] leading-relaxed">
            We never lease or distribute your financial profiles to external
            corporate networks for tracking purposes.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2">
          <div className="p-2 bg-orange-50 text-orange-600 rounded-xl w-fit">
            <Lock className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800">
            Bank-Grade Encryption
          </h3>
          <p className="text-slate-500 text-[11px] leading-relaxed">
            Active browser sessions, asset pipelines, and database directories
            stay masked with end-to-end transport encryptions.
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-2">
          <div className="p-2 bg-orange-50 text-orange-600 rounded-xl w-fit">
            <FileText className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-xs uppercase tracking-wider text-slate-800">
            Regulatory Guardrails
          </h3>
          <p className="text-slate-500 text-[11px] leading-relaxed">
            Fully aligned with regional regulatory requirements, security
            compliance models, and transparency mandates.
          </p>
        </div>
      </section>

      {/* 3. INTERACTIVE SEARCHABLE ACCORDION POLICY BLOCKS */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <h2 className="text-lg font-black text-slate-900 tracking-tight">
                Review Policy Sections
              </h2>
              <p className="text-slate-500 text-xs font-light">
                Select a content block to map specific internal rules and
                processes.
              </p>
            </div>

            {/* Search Input Filter Field */}
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search legal terms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg pl-8 pr-3 py-2 text-xs outline-none focus:border-orange-500 transition"
              />
            </div>
          </div>

          {/* Accordion List Elements */}
          <div className="space-y-3">
            {policyBlocks
              .filter(
                (block) =>
                  block.title
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  block.content
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()),
              )
              .map((block) => {
                const isOpen = expandedSection === block.id;
                return (
                  <div
                    key={block.id}
                    className="border border-slate-100 rounded-xl overflow-hidden bg-slate-50/50"
                  >
                    <button
                      onClick={() => toggleSection(block.id)}
                      className="w-full flex items-center justify-between p-4 bg-white hover:bg-slate-50 transition text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-orange-50 rounded-lg shrink-0">
                          {block.icon}
                        </div>
                        <span className="font-bold text-slate-800 text-xs md:text-sm">
                          {block.title}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-4 md:p-5 text-xs text-slate-600 leading-relaxed font-light bg-white border-t border-slate-100">
                        {block.content}
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* 4. THIRD-PARTY DISCLOSURE ALERT / SCAM PROTECTION */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-5 flex flex-col sm:flex-row items-start gap-4">
          <div className="p-2 bg-white border border-orange-200 text-orange-600 rounded-xl shrink-0 mt-0.5">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider flex items-center gap-1">
              Critical Warning: Protecting Your Access Credentials
            </h4>
            <p className="text-slate-600 text-[11px] leading-relaxed font-light">
              Tangerine operations, support personnel, and automation instances
              will **never** request your security PIN parameters, primary
              password hashes, or interactive multi-factor verification tokens
              via SMS or unsecured email threads. If a script or third-party
              interaction queries these items, freeze cards immediately and
              submit reports to our legal oversight mailbox.
            </p>
          </div>
        </div>

        {/* Footer Sub-links */}
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] font-medium text-slate-500">
          <span className="hover:text-orange-600 cursor-pointer flex items-center gap-1">
            Full Privacy Code Document (PDF){" "}
            <ExternalLink className="w-3 h-3" />
          </span>
          <span className="text-slate-300">|</span>
          <span className="hover:text-orange-600 cursor-pointer">
            Digital Cookie Policy
          </span>
          <span className="text-slate-300">|</span>
          <span className="hover:text-orange-600 cursor-pointer">
            Contact Data Protection Officer
          </span>
        </div>
      </section>
    </main>
  );
}

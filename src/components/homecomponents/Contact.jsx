import React, { useState } from "react";
import {
  Phone,
  MessageSquare,
  ShieldAlert,
  Mail,
  MapPin,
  Search,
  Clock,
  Globe,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import useSEO from "../../hooks/useSEO";

export default function Contact() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Department contact data array
  const supportChannels = [
    {
      id: "general",
      name: "Everyday Banking",
      description:
        "Chequing, Savings, Client Cards, and general profile updates.",
      phone: "1-888-826-4374",
      hours: "24 Hours a day, 7 days a week",
      isAvailable247: true,
      category: "banking",
    },
    {
      id: "mortgages",
      name: "Mortgage Team",
      description:
        "Applications, renewals, pre-approvals, and payment structural changes.",
      phone: "1-888-826-4374",
      hours: "Monday to Friday, 8:00 AM – 8:00 PM ET",
      isAvailable247: false,
      category: "borrowing",
    },
    {
      id: "investments",
      name: "Investment Funds",
      description:
        "Mutual funds, RSP, TFSA, and long-term asset profile modeling.",
      phone: "1-877-464-5678",
      hours: "Monday to Friday, 8:00 AM – 8:00 PM ET",
      isAvailable247: false,
      category: "investing",
    },
    {
      id: "business",
      name: "Business Accounts",
      description:
        "Business savings accounts and commercial financial management.",
      phone: "1-888-826-4374",
      hours: "Monday to Friday, 8:00 AM – 8:00 PM ET",
      isAvailable247: false,
      category: "banking",
    },
  ];

  // Filtering filter logic based on pills + query text
  const filteredChannels = supportChannels.filter((channel) => {
    const matchesCategory =
      activeCategory === "all" || channel.category === activeCategory;
    const matchesSearch =
      channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      channel.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useSEO({
    title: "Contact",
    description:
      "Contact - The Private Lending and Finance Firm of First Kevington",
  });
  return (
    <main className="w-full bg-slate-50 text-slate-900 font-sans antialiased">
      {/* 1. HERO & SEARCH HUB */}
      <section className="bg-neutral-900 text-white py-14 px-4 md:px-12 relative overflow-hidden border-b-4 border-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 bg-orange-950/50 px-3 py-1 rounded border border-orange-900/30">
            Help Centre
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            How can we <span className="text-orange-500">help</span> you today?
          </h1>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
            We are a digital bank, which means support is built straight into
            your web or mobile layout. Find numbers, department hours, and
            security channels instantly.
          </p>

          {/* Interactive filter string entry box */}
          <div className="max-w-md mx-auto relative mt-4">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search departments (e.g., Mortgage, Mutual Funds)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700/80 text-white rounded-full pl-10 pr-4 py-3 text-xs outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition font-medium"
            />
          </div>
        </div>
      </section>

      {/* 2. CATEGORY INTERACTIVE TAB FILTER PILLS */}
      <section className="max-w-5xl mx-auto px-4 pt-8">
        <div className="flex flex-wrap gap-2 justify-center border-b border-slate-200 pb-4">
          {[
            { id: "all", label: "All Departments" },
            { id: "banking", label: "Everyday Banking" },
            { id: "borrowing", label: "Mortgages & Loans" },
            { id: "investing", label: "Investments" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                activeCategory === tab.id
                  ? "bg-orange-600 text-white shadow-sm"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. CORE PHONE SUPPORT CHANNELS */}
      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredChannels.length > 0 ? (
            filteredChannels.map((channel) => (
              <div
                key={channel.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 transition"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="font-black text-base text-slate-800">
                      {channel.name}
                    </h3>
                    {channel.isAvailable247 && (
                      <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
                        24/7 Channel
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-xs font-light leading-relaxed">
                    {channel.description}
                  </p>

                  <div className="pt-2 space-y-1.5 text-xs text-slate-600">
                    {/* <div className="flex items-center gap-2 font-mono font-bold text-slate-800 text-sm">
                      <Phone className="w-3.5 h-3.5 text-orange-600" />{" "}
                      {channel.phone}
                    </div>*/}
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />{" "}
                      {channel.hours}
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-orange-600 cursor-pointer hover:text-orange-700">
                  <span>Log in to start chat session</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-10 bg-white rounded-2xl border border-slate-200 text-slate-500 text-xs font-light">
              No specific support lines found matching your query
              configurations.
            </div>
          )}
        </div>
      </section>

      {/* 4. INTERNATIONAL & DIGITAL ALTERNATIVES */}
      <section className="max-w-5xl mx-auto px-4 pb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: International Collect Call */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
          <div className="p-2 bg-slate-100 text-slate-700 rounded-xl w-fit">
            <Globe className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
            Outside Canada & U.S.
          </h4>
          <p className="text-slate-500 text-xs font-light leading-normal">
            Travelling internationally or abroad? You can reach our support
            center by calling us collect.
          </p>
          {/* <div className="font-mono font-bold text-xs text-slate-800 pt-1">
            +1 (416) 758-3139
          </div>*/}
        </div>

        {/* Card 2: AI Chatbot Integration */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
          <div className="p-2 bg-slate-100 text-slate-700 rounded-xl w-fit">
            <MessageSquare className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
            Ask our Interactive Chatbot
          </h4>
          <p className="text-slate-500 text-xs font-light leading-normal">
            Get instant answers regarding basic configurations, account
            information retrieval, or balance details.
          </p>
          <span className="inline-flex items-center gap-1 text-xs text-orange-600 font-bold cursor-pointer hover:underline pt-1">
            Launch Assistant <ArrowRight className="w-3 h-3" />
          </span>
        </div>

        {/* Card 3: Mailing Headquarters */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 space-y-3">
          <div className="p-2 bg-slate-100 text-slate-700 rounded-xl w-fit">
            <MapPin className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-xs text-slate-800 uppercase tracking-wider">
            Mailing Address
          </h4>
          <p className="text-slate-500 text-xs font-light font-mono leading-normal">
            First Kevington
            <br />
            501 Kevington Ct <br />
            Sacramento, CA 95864, USA
          </p>
          <div className="text-[10px] text-slate-400 font-light">
            Institution #614 | Transit #00152
          </div>
        </div>
      </section>

      {/* 5. DEDICATED CRISIS SECURITY & FRAUD BLOCK */}
      <section className="bg-orange-50 border-t border-b border-orange-200 py-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto bg-white border border-orange-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-xs text-red-700 font-bold bg-red-50 border border-red-200 px-2.5 py-0.5 rounded-full">
              <ShieldAlert className="w-3.5 h-3.5" /> Emergency Fraud Response
            </div>
            <h3 className="font-black text-xl text-slate-800 tracking-tight">
              Suspect unauthorized activity or lost your card?
            </h3>
            <p className="text-slate-600 text-xs font-light leading-relaxed">
              If your client profile has been breached, you suspect phisihing
              scripts, or your card has been stolen, freeze activity inside the
              application dashboard or report immediately via our emergency
              hotlines.
            </p>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-5 w-full lg:w-80 space-y-3 shrink-0">
            <div className="text-xs text-slate-400 font-medium">
              To report suspicious account activity or scams:
            </div>
            <div className="font-mono font-black text-orange-500 text-base flex items-center gap-2">
              {/* <Phone className="w-4 h-4 text-white" /> 1-888-SAFE-304*/}
            </div>
            <div className="border-t border-neutral-800 pt-2 text-[11px] text-slate-400 flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-orange-500 shrink-0" />
              <span>
                Forward phish threats to:{" "}
                <strong className="text-white font-mono">
                  phishing@firstkevington.com
                </strong>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

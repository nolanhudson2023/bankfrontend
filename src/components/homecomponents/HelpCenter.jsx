import React, { useState } from "react";
import {
  Search,
  Shield,
  Key,
  CreditCard,
  RefreshCw,
  HelpCircle,
  ChevronRight,
  Phone,
  MessageSquare,
  Clock,
  MapPin,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import useSEO from "../../hooks/useSEO";

export default function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState("");

  // Support Categories grid
  const categories = [
    {
      icon: <Key className="w-6 h-6 text-orange-600" />,
      title: "Login & Security",
      desc: "Reset PINs, 2-step authentication, update credentials",
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-600" />,
      title: "Cards & ABMs",
      desc: "Report lost/stolen cards, change PINs, find free ABMs",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-orange-600" />,
      title: "Transactions & Transfers",
      desc: "Interac e-Transfers, linked accounts, dispute charges",
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: "Fraud & Alerts",
      desc: "Set up Orange Alerts, report scams, safe banking tips",
    },
  ];

  // Top trending solutions/FAQs
  const popularFaqs = [
    "I forgot my Banking PIN. What should I do?",
    "My Card is lost or stolen. How do I lock or replace it?",
    "There has been some suspicious activity in my Account. What should I do?",
    "How do I set up or customize my Orange Alerts?",
    "How can I link an external Canadian bank account?",
    "What is First Kevington's official routing and mailing address?",
  ];

  useSEO({
    title: "Help Center",
    description:
      "Help Center - The Private Lending and Finance Firm of First Kevington",
  });

  return (
    <main className="w-full bg-gray-50 text-gray-900 font-sans antialiased">
      {/* 1. HERO SEARCH SECTION */}
      <section className="bg-neutral-900 text-white py-16 px-4 md:px-12 text-center relative overflow-hidden">
        {/* Subtle geometric orange accents mimicking corporate style */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight">
            How can we help you today?
          </h1>
          <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-light">
            Search our knowledge base for instant answers about accounts, cards,
            security, and digital banking settings.
          </p>

          {/* Integrated Search Bar */}
          <div className="max-w-2xl mx-auto relative mt-4">
            <input
              type="text"
              placeholder="Search by keyword (e.g., 'forgot PIN', 'replace card')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-gray-900 pl-12 pr-4 py-4 rounded-full border-2 border-transparent focus:border-orange-500 focus:outline-none shadow-xl text-base"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* 2. EMERGENCY SCAM / FRAUD BANNER */}
      <section className="max-w-6xl mx-auto px-4 md:px-12 mt-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-sm text-neutral-800">
            <span className="font-bold text-amber-950">Security Notice:</span>{" "}
            First Kevington will never text or call you asking for your PIN,
            passwords, or 2-step authentication codes. If you suspect an email
            or SMS isn't legitimate, forward it to{" "}
            <span className="font-semibold underline text-amber-900">
              phishing@firstkevington.com
            </span>
            .
          </div>
        </div>
      </section>

      {/* 3. SUPPORT CATEGORIES GRID */}
      <section className="py-12 px-4 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-2xl font-black text-neutral-900 tracking-tight mb-6">
          Browse by topic
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-orange-500 hover:shadow-lg transition duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-orange-50 rounded-xl w-fit mb-4 group-hover:bg-orange-600 group-hover:text-white transition duration-200">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-base text-neutral-800 group-hover:text-orange-600 transition mb-1">
                  {cat.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {cat.desc}
                </p>
              </div>
              <div className="text-orange-600 text-xs font-bold flex items-center gap-1 pt-4 mt-auto">
                View Topics{" "}
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TRENDING SOLUTIONS (POPULAR FAQS) */}
      <section className="bg-white border-y border-gray-200 py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-neutral-900 font-black text-2xl tracking-tight mb-8">
            <HelpCircle className="w-6 h-6 text-orange-600" />
            <h2>Trending Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 border border-gray-100 rounded-xl hover:bg-orange-50/40 hover:border-orange-100 transition cursor-pointer flex items-center justify-between group"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-neutral-900 transition">
                  {faq}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-0.5 transition" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CONTACT CHANNELS & LIVE WAIT TIMES */}
      <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-2xl font-black text-neutral-900 tracking-tight">
            Still can't find what you need?
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Get in touch with our support lines directly. We are open 24/7 for
            critical card support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Channel 1: Phone Support */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-neutral-900 text-white rounded-xl">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-800">
                  Call Us Toll-Free
                </h4>
                <p className="text-xs text-gray-500">
                  Available 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
            <div className="pt-2">
              {/* <div className="text-xl font-black text-orange-600">
                1-888-826-4374
              </div>*/}
              {/* <p className="text-xs text-gray-400 mt-0.5">
                Outside Canada/US (Collect): 416-758-3139
              </p>*/}
            </div>
            <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between border border-gray-100 text-xs">
              <span className="text-gray-600 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gray-400" /> Est. Wait Time:
              </span>
              <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                ~ 10 mins
              </span>
            </div>
          </div>

          {/* Channel 2: Secure Online Chat */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-neutral-900 text-white rounded-xl">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-800">Live Secure Chat</h4>
                <p className="text-xs text-gray-500">
                  Log in to chat with an associate
                </p>
              </div>
            </div>
            <div className="text-xs text-gray-600 leading-relaxed pt-2">
              <span className="font-bold block text-neutral-800">
                Hours of Operation:
              </span>
              Weekdays: 8:00 AM – 8:00 PM ET <br />
              Weekends: 9:00 AM – 5:00 PM ET
            </div>
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 rounded-xl transition text-xs shadow-md shadow-orange-600/10">
              Start Chat Session
            </button>
          </div>

          {/* Channel 3: Official Mailing Address */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-neutral-900 text-white rounded-xl">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-neutral-800">Mailing Address</h4>
                <p className="text-xs text-gray-500">
                  For documents and banking transmittals
                </p>
              </div>
            </div>
            <div className="text-xs text-gray-600 leading-normal pt-2 font-mono bg-gray-50 p-3 rounded-xl border border-gray-100">
              First Kevington
              <br />
              501 Kevington Ct <br />
              Sacramento, CA 95864, USA <br />
              <span className="font-sans font-bold text-[11px] block mt-2 text-neutral-500">
                Institution #614 | Transit #00152
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. ADDITIONAL SELF-SERVE UTILITIES */}
      <section className="bg-gray-100 py-12 px-4 md:px-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-600">
          <div className="space-y-2">
            <h4 className="font-bold text-neutral-800 flex items-center gap-1.5">
              Need to locate an ABM?
            </h4>
            <p className="text-xs">
              Access over 3,500 free Scotiabank® ABMs across Canada and 44,000
              ABMs globally through Scotiabank's Global ATM Alliance network.
            </p>
            <div className="text-orange-600 text-xs font-bold inline-flex items-center gap-0.5 cursor-pointer hover:underline pt-1">
              Open ABM Locator Map <ExternalLink className="w-3 h-3 ml-0.5" />
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-neutral-800 flex items-center gap-1.5">
              Have feedback or a complaint?
            </h4>
            <p className="text-xs">
              We focus heavily on providing premium client experiences. If we
              fell short or you want to register an official concern, view our
              dispute escalation framework.
            </p>
            <div className="text-orange-600 text-xs font-bold inline-flex items-center gap-0.5 cursor-pointer hover:underline pt-1">
              File a Complaint or Feedback{" "}
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

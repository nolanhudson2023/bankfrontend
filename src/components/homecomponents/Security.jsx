import React, { useState } from "react";
import {
  ShieldCheck,
  Lock,
  Smartphone,
  BellRing,
  KeyRound,
  EyeOff,
  HelpCircle,
  ShieldAlert,
  Phone,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function Security() {
  const [activeTab, setActiveTab] = useState("features");

  return (
    <main className="w-full bg-slate-50 text-slate-900 font-sans antialiased">
      {/* 1. HERO DEFENSE BANNER */}
      <section className="bg-neutral-900 text-white py-14 px-4 md:px-12 relative border-b-4 border-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-600 text-white text-[10px] uppercase tracking-widest font-extrabold px-2.5 py-0.5 rounded">
            Security Center
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-none">
            Safe, secure digital banking
          </h1>
          <p className="text-slate-400 text-xs md:text-sm max-w-2xl font-light leading-relaxed">
            We use advanced multi-layered encryption, real-time alert scripts,
            and strict identity validation frameworks to protect your assets.
            Your account safety is backed by our direct Secure Banking
            Guarantee.
          </p>
        </div>
      </section>

      {/* 2. SECURE BANKING GUARANTEE WATERMARK */}
      <section className="max-w-4xl mx-auto px-4 pt-10">
        <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-3xl p-6 md:p-8 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-white shrink-0" />
              <h2 className="text-xl font-black tracking-tight">
                The Tangerine Security Promise
              </h2>
            </div>
            <p className="text-white/90 text-xs font-light leading-relaxed">
              In the highly unlikely event that unauthorized transactional
              activity occurs on your profile, you are **100% protected**. We
              will reimburse any direct losses resulting from unauthorized
              access, provided you maintain secure password parameters and
              report anomalies promptly.
            </p>
          </div>
          <div className="bg-black/15 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center shrink-0 w-full md:w-auto">
            <span className="text-[10px] text-orange-200 uppercase tracking-widest font-bold block">
              Protection Status
            </span>
            <span className="text-xl font-mono font-black tracking-wider block mt-0.5">
              FULLY BACKED
            </span>
          </div>
        </div>
      </section>

      {/* 3. APP ARCHITECTURE VISUAL CONTEXT */}
      <section className="max-w-4xl mx-auto px-4 pt-10 text-center">
        <p className="text-slate-500 text-xs max-w-md mx-auto mb-6">
          Our defense layers are built directly into our mobile application
          interfaces, providing instant control over profile validation and
          verification paths.
        </p>
      </section>

      {/* 4. DEFENSE PILLARS ACCORDION INTERACTION */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-sm">
          {/* Navigation Controls */}
          <div className="flex border-b border-slate-100 pb-4 mb-6 gap-4 text-xs font-bold">
            <button
              onClick={() => setActiveTab("features")}
              className={`pb-2 border-b-2 transition ${activeTab === "features" ? "border-orange-500 text-slate-900" : "border-transparent text-slate-400 hover:text-slate-600"}`}
            >
              Built-In Features
            </button>
            <button
              onClick={() => setActiveTab("client-action")}
              className={`pb-2 border-b-2 transition ${activeTab === "client-action" ? "border-orange-500 text-slate-900" : "border-transparent text-slate-400 hover:text-slate-600"}`}
            >
              Your Defense Actions
            </button>
          </div>

          {/* Tab 1 Content: Built-In Protection Features */}
          {activeTab === "features" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-slate-50 text-orange-600 rounded-xl shrink-0">
                  <KeyRound className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs md:text-sm text-slate-800">
                    Biometric Encryption & 2FA
                  </h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-light">
                    Face ID, biometric fingerprints, and dynamic multi-factor
                    validation codes verify your identity at every configuration
                    gate.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-slate-50 text-orange-600 rounded-xl shrink-0">
                  <BellRing className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs md:text-sm text-slate-800">
                    Orange Alerts Scripting
                  </h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-light">
                    Get real-time push, email, or text warnings the precise
                    second an out-of-pattern card swipe or profile modification
                    triggers.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-slate-50 text-orange-600 rounded-xl shrink-0">
                  <Lock className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs md:text-sm text-slate-800">
                    Automatic Session Expiry
                  </h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-light">
                    Browser active states terminate dynamically after brief
                    periods of dormancy, blocking unauthorized physical endpoint
                    access.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-slate-50 text-orange-600 rounded-xl shrink-0">
                  <EyeOff className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs md:text-sm text-slate-800">
                    Masked Card Configurations
                  </h4>
                  <p className="text-slate-500 text-[11px] leading-relaxed font-light">
                    All core dashboard digits and full transit metadata profiles
                    stay obscured behind visual filters unless explicitly
                    decrypted.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2 Content: Client Defense Actions */}
          {activeTab === "client-action" && (
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-slate-600 text-xs font-light leading-normal">
                  <strong>Password Configuration:</strong> Never reuse baseline
                  master credentials across digital networks. Incorporate long
                  strings matching complex alphanumeric criteria.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-slate-600 text-xs font-light leading-normal">
                  <strong>Phishing Mitigation:</strong> Tangerine will never
                  transmit unauthenticated redirect hyperlinks requesting
                  account adjustments. Ignore texts or calls threatening profile
                  locking.
                </p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-slate-600 text-xs font-light leading-normal">
                  <strong>Public Wi-Fi Precaution:</strong> Avoid updating
                  balance settings or processing high-value transfers when
                  connected to shared public internet terminals without a secure
                  VPN mask.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. INCIDENT EMERGENCY reporting HOTLINE */}
      <section className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-red-50 border border-red-100 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex gap-3.5 items-start">
            <div className="p-2 bg-white border border-red-200 text-red-600 rounded-xl shrink-0 mt-0.5">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                Spot an unexpected charge or lost card?
              </h4>
              <p className="text-slate-600 text-[11px] leading-relaxed font-light max-w-xl">
                Log into your mobile platform to freeze card parameters
                instantly. If you lose access credentials entirely or suspect
                systemic profile compromises, call our emergency infrastructure
                immediately.
              </p>
            </div>
          </div>

          <div className="bg-neutral-950 text-white rounded-xl px-4 py-3 shrink-0 flex items-center gap-2.5 font-mono text-xs font-bold w-full md:w-auto justify-center">
            <Phone className="w-3.5 h-3.5 text-orange-500" /> 1-888-826-4374
          </div>
        </div>

        {/* Outer Legal Sub-links */}
        <div className="mt-8 flex justify-center gap-6 text-[10px] font-medium text-slate-400">
          <span className="hover:text-orange-600 cursor-pointer flex items-center gap-0.5">
            Online Fraud Policy <ArrowUpRight className="w-2.5 h-2.5" />
          </span>
          <span>•</span>
          <span className="hover:text-orange-600 cursor-pointer">
            Digital Cookie Governance
          </span>
          <span>•</span>
          <span className="hover:text-orange-600 cursor-pointer">
            Report Phishing Scripts
          </span>
        </div>
      </section>
    </main>
  );
}

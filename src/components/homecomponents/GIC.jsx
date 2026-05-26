import React, { useState } from "react";
import {
  ShieldCheck,
  Calculator,
  Landmark,
  ArrowRight,
  CheckCircle,
  Clock,
  Info,
  Percent,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

export default function GIC() {
  // GIC Interactive Calculator States
  const [depositAmount, setDepositAmount] = useState(10000);
  const [selectedTerm, setSelectedTerm] = useState("1_year");

  // Mock rates corresponding to Tangerine's standard baseline structure
  const termRates = {
    "90_day": { label: "90 Days", rate: 0.035, standard: true },
    "270_day": { label: "270 Days", rate: 0.0375, standard: true },
    "1_year": { label: "1 Year", rate: 0.0425, standard: false },
    "18_month": { label: "18 Months", rate: 0.041, standard: false },
    "3_year": { label: "3 Years", rate: 0.0395, standard: false },
    "5_year": { label: "5 Years", rate: 0.038, standard: false },
  };

  const currentRate = termRates[selectedTerm].rate;
  const currentLabel = termRates[selectedTerm].label;

  // Compute absolute returns based on term length specifications
  const computeEarnings = () => {
    if (selectedTerm === "90_day") {
      return Math.round(depositAmount * currentRate * (90 / 365));
    }
    if (selectedTerm === "270_day") {
      return Math.round(depositAmount * currentRate * (270 / 365));
    }
    if (selectedTerm === "18_month") {
      return Math.round(depositAmount * currentRate * 1.5);
    }
    if (selectedTerm === "1_year")
      return Math.round(depositAmount * currentRate * 1);
    if (selectedTerm === "3_year")
      return Math.round(depositAmount * (Math.pow(1 + currentRate, 3) - 1));
    if (selectedTerm === "5_year")
      return Math.round(depositAmount * (Math.pow(1 + currentRate, 5) - 1));
    return 0;
  };

  const calculatedEarnings = computeEarnings();
  const totalMaturityValue = depositAmount + calculatedEarnings;

  return (
    <main className="w-full bg-gray-50 text-gray-900 font-sans antialiased">
      {/* 1. HERO BANNER */}
      <section className="bg-neutral-900 text-white py-16 md:py-24 px-4 md:px-12 relative overflow-hidden border-b-4 border-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-600 text-white text-xs uppercase tracking-widest font-black px-3 py-1 rounded">
            Guaranteed Growth
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Lock in your rate. <br />
            Watch your savings{" "}
            <span className="text-orange-500">grow safely</span>.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl font-light">
            With Tangerine GICs, your principal investment is 100% secure. Enjoy
            competitive guaranteed returns with zero setup costs, zero upkeep
            overheads, and CDIC deposit insurance.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full transition flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20">
              Open a GIC Account <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold border-2 border-white/30 px-8 py-4 rounded-full transition">
              View All Term Rates
            </button>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITIONS STRIP */}
      <section className="bg-white border-b border-gray-200 py-10 px-4 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm text-neutral-900">
                100% Ironclad Protection
              </h3>
              <p className="text-gray-500 text-xs mt-0.5">
                Your original seed investment asset is completely shielded from
                standard stock market fluctuations.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Percent className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm text-neutral-900">
                Zero Management Overhead
              </h3>
              <p className="text-gray-500 text-xs mt-0.5">
                No administrative accounts penalties, surprises, or sneaky
                portfolio handling deductions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Landmark className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm text-neutral-900">
                CDIC Protection Eligible
              </h3>
              <p className="text-gray-500 text-xs mt-0.5">
                Tangerine Bank is a credentialed member of the Canada Deposit
                Insurance Corporation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE GIC PERFORMANCE CALCULATOR */}
      <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-600">
            Earnings Estimator
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight mt-1">
            Calculate your guaranteed return
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Choose your financial injection level and terms parameters to view
            target payouts at maturity.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Inputs Section */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-3xl p-6 md:p-8 space-y-6 shadow-sm">
            {/* Step 1: Principal Input */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider font-bold text-neutral-500 flex justify-between">
                <span>1. Choose Investment Amount</span>
                <span className="text-neutral-900 font-mono text-sm">
                  ${depositAmount.toLocaleString()}
                </span>
              </label>
              <input
                type="range"
                min="1000"
                max="250000"
                step="1000"
                value={depositAmount}
                onChange={(e) => setDepositAmount(Number(e.target.value))}
                className="w-full accent-orange-500 h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-medium">
                <span>Min: $1,000</span>
                <span>Max: $250,000</span>
              </div>
            </div>

            {/* Step 2: Term Selector Grid */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-wider font-bold text-neutral-500 block">
                2. Select Investment Horizon Term
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {Object.keys(termRates).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedTerm(key)}
                    className={`p-3.5 rounded-xl border text-left transition flex flex-col justify-between h-20 ${
                      selectedTerm === key
                        ? "border-orange-500 bg-orange-50/40 shadow-sm"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <span className="text-xs font-bold text-neutral-800">
                      {termRates[key].label}
                    </span>
                    <span
                      className={`text-sm font-mono font-black ${selectedTerm === key ? "text-orange-600" : "text-neutral-900"}`}
                    >
                      {(termRates[key].rate * 100).toFixed(2)}%
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Output Display Widget Summary Box */}
          <div className="bg-neutral-900 text-white rounded-3xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden border-t-4 border-orange-500">
            <div>
              <span className="text-xs text-neutral-400 block uppercase tracking-wider">
                Interest Rate Lock
              </span>
              <div className="text-3xl font-mono font-black text-orange-400 mt-1">
                {(currentRate * 100).toFixed(2)}%{" "}
                <span className="text-xs font-sans text-neutral-400 font-normal">
                  APY
                </span>
              </div>
            </div>

            <div className="space-y-3 border-t border-b border-neutral-800 py-5 text-xs">
              <div className="flex justify-between text-neutral-400">
                <span>Initial Capital:</span>
                <span className="font-mono text-white font-medium">
                  ${depositAmount.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400">
                <span>Locked Duration:</span>
                <span className="text-white font-medium">{currentLabel}</span>
              </div>
              <div className="flex justify-between items-center text-orange-400 pt-1">
                <span className="font-bold flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Guaranteed Return:
                </span>
                <span className="font-mono text-base font-black">
                  +${calculatedEarnings.toLocaleString()}
                </span>
              </div>
            </div>

            <div>
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest block">
                Total Payout at Maturity
              </span>
              <div className="text-2xl font-mono font-bold text-white mt-0.5">
                ${totalMaturityValue.toLocaleString()}
              </div>
            </div>

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl transition text-xs shadow-lg shadow-orange-600/20">
              Lock in this Rate
            </button>
          </div>
        </div>
      </section>

      {/* 4. PLAN REGISTRATION SHELLS SHELVES */}
      <section className="bg-white border-t border-b border-gray-200 py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-neutral-900 tracking-tight">
              Available GIC accounts structures
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Shield your upcoming guaranteed certificate interest earnings from
              annual tax penalties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-neutral-900">
                  Tax-Free GICs (TFSA)
                </h3>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                  Earn guaranteed yields 100% tax-exempt. Perfect for precise
                  short-horizon cash targets without tax friction layout
                  constraints.
                </p>
              </div>
              <span className="text-xs text-orange-600 font-bold mt-4 flex items-center gap-0.5 cursor-pointer">
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-neutral-900">
                  RSP GICs
                </h3>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                  Grow long-term retirement savings frameworks while deducting
                  asset configurations directly against active taxable bands.
                </p>
              </div>
              <span className="text-xs text-orange-600 font-bold mt-4 flex items-center gap-0.5 cursor-pointer">
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-neutral-900">
                  Non-Registered GICs
                </h3>
                <p className="text-gray-500 text-xs mt-2 leading-relaxed">
                  Ideal when max annual registration ceilings are fully
                  utilized. Enjoy zero maximum allocation boundaries.
                </p>
              </div>
              <span className="text-xs text-orange-600 font-bold mt-4 flex items-center gap-0.5 cursor-pointer">
                Learn more <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SPECIFICATION OUTLINES & CLAUSES */}
      <section className="py-16 px-4 md:px-12 max-w-4xl mx-auto">
        <div className="bg-orange-50/50 border border-orange-100 rounded-3xl p-6 md:p-8 space-y-4">
          <h4 className="font-bold text-neutral-900 flex items-center gap-2 text-sm">
            <Info className="text-orange-600 w-4.5 h-4.5 shrink-0" /> Essential
            Terms & Policy Disclosures
          </h4>
          <div className="space-y-3 text-xs text-gray-600 leading-relaxed font-light">
            <p>
              • <strong>Non-Redeemable Nature:</strong> Tangerine Guaranteed
              Investments are non-redeemable prior to the specified maturity
              target index timeline. Assets must remain locked inside chosen
              horizons.
            </p>
            <p>
              • <strong>Interest Compounding Rules:</strong> For terms of 1 year
              or greater, interest can be calculated and paid out annually
              directly into savings profiles or auto-compounded within the
              dynamic certificate envelope.
            </p>
            <p>
              • <strong>Automated Renewal Options:</strong> Set your profile
              preferences to automatically roll over matured principal directly
              into a fresh corresponding baseline term design or deposit back
              into liquid check accounts automatically.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

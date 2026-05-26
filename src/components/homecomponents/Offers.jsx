import React, { useState } from "react";
import {
  Home,
  Calculator,
  Percent,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Info,
  Landmark,
  Calendar,
  RefreshCw,
} from "lucide-react";

export default function Offers() {
  // Mortgage Calculator States
  const [homePrice, setHomePrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [amortization, setAmortization] = useState(25);
  const [interestRate, setInterestRate] = useState(4.29);

  // Simple monthly mortgage payment calculation logic (M = P [ i(1+i)^n ] / [ (1+i)^n - 1 ])
  const principal = Math.max(0, homePrice - downPayment);
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = amortization * 12;

  const calculateMonthlyPayment = () => {
    if (principal <= 0) return 0;
    if (monthlyRate === 0) return Math.round(principal / numberOfPayments);

    const payment =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    return Math.round(payment);
  };

  const monthlyPayment = calculateMonthlyPayment();

  return (
    <main className="w-full bg-gray-50 text-gray-900 font-sans antialiased">
      {/* 1. HERO BANNER */}
      <section className="bg-neutral-900 text-white py-16 md:py-24 px-4 md:px-12 relative overflow-hidden border-b-4 border-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-600 text-white text-xs uppercase tracking-widest font-black px-3 py-1 rounded">
            Home Financing
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            A mortgage that fits your life, <br />
            not just your <span className="text-orange-500">house</span>.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl font-light">
            Competitive rates, absolute transparency, and flexible payment
            options that put you in control of your financial freedom. Lock in
            your rate configuration online today.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full transition flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20">
              Get Pre-Approved <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold border-2 border-white/30 px-8 py-4 rounded-full transition">
              Check Today's Rates
            </button>
          </div>
        </div>
      </section>

      {/* 2. THE TANGERINE MORTGAGE ADVANTAGE */}
      <section className="bg-white border-b border-gray-200 py-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-600">
            Why Choose Us
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight mt-1">
            Flexible Features Standard
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100/80">
            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl w-fit mb-3">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-neutral-800">
              120-Day Rate Guarantee
            </h3>
            <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
              Shop for your dream layout with total peace of mind. We will lock
              down your specialized rate configuration for up to 120 days while
              you look.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100/80">
            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl w-fit mb-3">
              <Percent className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-neutral-800">
              Prepayment Privileges
            </h3>
            <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
              Pay down your mortgage faster. Pay up to 15% of your original
              principal amount each year, or increase regular payments by up to
              15% penalty-free.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100/80">
            <div className="p-2.5 bg-orange-50 text-orange-600 rounded-xl w-fit mb-3">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-neutral-800">
              Portable Mortgages
            </h3>
            <p className="text-gray-500 text-xs mt-1.5 leading-relaxed">
              Moving down the street or across the country? Transfer your active
              interest rate and existing terms profile smoothly to your new home
              structure.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FIXED VS VARIABLE TERM ARCHITECTURE */}
      <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-neutral-900 tracking-tight">
            Structured rates built around your strategy
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Pick the mortgage blueprint that balances predictability with market
            fluctuations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Option 1: Fixed Rate */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                Total Predictability
              </span>
              <h3 className="font-black text-xl text-neutral-900 mt-2">
                Fixed-Rate Mortgage
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Your interest rate and regular scheduled mortgage payments
                remain completely locked for the entire duration of your term
                configuration. Ideal for tight structural budgeting.
              </p>
              <div className="border-t border-gray-100 pt-4 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />{" "}
                  Guarded against interest rate spikes
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />{" "}
                  Exact amortization trajectory modeling
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center text-xs font-bold text-orange-600 cursor-pointer">
              <span>View Fixed Rate Terms</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Option 2: Variable Rate */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                Market Alignment
              </span>
              <h3 className="font-black text-xl text-neutral-900 mt-2">
                Variable-Rate Mortgage
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                Your rate moves automatically in tandem with the Tangerine Prime
                Rate index. While your payments stay fixed, the amount allocated
                to principal vs. interest adjusts dynamically.
              </p>
              <div className="border-t border-gray-100 pt-4 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />{" "}
                  Capitalize immediately if prime index drops
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />{" "}
                  Convert smoothly to a fixed rate at any time
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center text-xs font-bold text-orange-600 cursor-pointer">
              <span>View Variable Rate Terms</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE PAYMENT ESTIMATOR */}
      <section className="bg-neutral-900 text-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs text-orange-400 font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Payment Modeler
            </div>
            <h2 className="text-3xl font-black tracking-tight leading-tight">
              Estimate your regular payments
            </h2>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Adjust variables below to forecast your estimated baseline
              outlays. Use our calculators to see how changing down payments
              directly alters your monthly metrics.
            </p>

            {/* Slider Controls */}
            <div className="space-y-4 pt-2 text-xs font-semibold">
              <div>
                <div className="flex justify-between text-neutral-300 mb-1">
                  <span>Target Home Value Price</span>
                  <span className="text-orange-400 font-bold">
                    ${homePrice.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="150000"
                  max="1500000"
                  step="25000"
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full accent-orange-500 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-neutral-300 mb-1">
                  <span>Down Payment Allocation</span>
                  <span className="text-orange-400 font-bold">
                    ${downPayment.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={Math.round(homePrice * 0.05)}
                  max={Math.round(homePrice * 0.8)}
                  step="5000"
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full accent-orange-500 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Amortization</span>
                    <span className="text-orange-400 font-bold">
                      {amortization} Years
                    </span>
                  </div>
                  <select
                    value={amortization}
                    onChange={(e) => setAmortization(Number(e.target.value))}
                    className="w-full bg-neutral-800 text-white rounded-lg p-2.5 border border-neutral-700 font-medium text-xs focus:ring-1 focus:ring-orange-500 outline-none"
                  >
                    <option value="15">15 Years</option>
                    <option value="20">20 Years</option>
                    <option value="25">25 Years</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-neutral-300 mb-1">
                    <span>Assumed Rate</span>
                    <span className="text-orange-400 font-bold">
                      {interestRate}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3.00"
                    max="7.00"
                    step="0.05"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-orange-500 h-1 mt-4 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Calculator Output presentation panel */}
          <div className="bg-neutral-800 border border-neutral-700 rounded-3xl p-8 text-center space-y-4 shadow-2xl relative">
            <span className="text-xs text-neutral-400 font-mono tracking-widest uppercase block">
              Projected Monthly Payment
            </span>
            <div className="text-5xl md:text-6xl font-black text-orange-500 font-mono">
              ${monthlyPayment.toLocaleString()}
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-neutral-700/60 pt-5 text-xs text-left max-w-sm mx-auto">
              <div>
                <span className="text-neutral-400 block">
                  Total Principal Financed:
                </span>
                <span className="font-bold text-white block mt-0.5">
                  ${principal.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block">
                  Down Payment Ratio:
                </span>
                <span className="font-bold text-white block mt-0.5">
                  {Math.round((downPayment / homePrice) * 100)}%
                </span>
              </div>
            </div>

            <p className="text-[10px] text-neutral-500 font-light max-w-xs mx-auto leading-normal pt-2">
              *Calculations are structural approximations based on consistent
              compounding behaviors. Outlay values omit specific regional
              municipal property taxes or property coverage insurance metrics.
            </p>
            <div className="border-t border-neutral-700/60 pt-4 text-xs font-medium text-neutral-400 flex justify-center items-center gap-1">
              <Landmark className="w-3.5 h-3.5 text-orange-500" /> Secure
              digital application routing with zero obligation.
            </div>
          </div>
        </div>
      </section>

      {/* 5. ONBOARDING DISCLOSURES */}
      <section className="bg-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 max-w-md">
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
              On-demand mortgage help
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Navigating residential financing can feel complex. Our designated
              Tangerine Mortgage Specialists are available to walk through
              optimization settings, refinancing, or debt consolidation paths
              step-by-step.
            </p>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-6 w-full md:w-96 space-y-3">
            <h4 className="font-bold text-neutral-800 flex items-center gap-2 text-sm">
              <Info className="text-orange-600 w-4 h-4 shrink-0" /> Compliance
              Notes
            </h4>
            <p className="text-xs text-gray-600 leading-normal font-light">
              Mortgage approvals are dependent on standard underwriting credit
              scoring validation, verification of asset profiles, and home
              equity assessment metrics. Down payments under 20% require
              secondary default insurance (CMHC).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

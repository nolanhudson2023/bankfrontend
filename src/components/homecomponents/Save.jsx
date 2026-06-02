import React, { useState } from "react";
import {
  Percent,
  DollarSign,
  Calculator,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import useSEO from "../../hooks/useSEO";

export default function Save() {
  // Calculator States
  const [monthlyDeposit, setMonthlyDeposit] = useState(500);
  const [timePeriod, setTimePeriod] = useState(12); // months
  const promoRate = 0.045; // 4.50%

  // Calculate total saved + basic promotional interest approximation
  const totalPrincipal = monthlyDeposit * timePeriod;
  const estimatedInterest = Math.round(
    totalPrincipal * (promoRate * (timePeriod / 12)) * 0.5,
  ); // blended estimate
  const totalBalance = totalPrincipal + estimatedInterest;

  // Account Categories Data
  const accounts = [
    {
      title: "Savings Account",
      rate: "0.30%†",
      promo: "Earn 4.50% for 5 months²",
      description:
        "Our core Savings Account earns you high interest on every dollar, requires no minimum balance, and charges no unfair fees.",
      features: [
        "No monthly fees",
        "No minimum balance",
        "Automated savings tools",
      ],
    },
    {
      title: "Tax-Free Savings Account (TFSA)",
      rate: "0.30%†",
      promo: "Earn 4.50% for 5 months²",
      description:
        "Earn tax-free interest on top of the same great advantages of a standard First Kevington Savings Account.",
      features: [
        "Tax-free growth",
        "No minimum balance",
        "Great for short or long-term goals",
      ],
    },
    {
      title: "RSP Savings Account",
      rate: "0.30%†",
      promo: "Earn 4.50% for 5 months²",
      description:
        "Enjoy all the money-saving advantages of our Savings Account with the added tax-deductible benefits of an RSP.",
      features: [
        "Tax-deductible contributions",
        "Tax-sheltered growth",
        "Retirement-focused planning",
      ],
    },
    {
      title: "US$ Savings Account",
      rate: "0.10%†",
      promo: "Earn 4.50% for 5 months²",
      description:
        "Save your US dollars at a great rate and keep more of your money with one of the most favorable exchange rates on the market.",
      features: [
        "No currency conversion overheads",
        "$0 monthly fee",
        "Competitive cross-border exchange",
      ],
    },
    {
      title: "RIF Savings Account",
      rate: "0.35%†",
      promo: "Steady retirement payouts",
      description:
        "Make use of the funds you've saved for retirement while continuing to enjoy tax-sheltered growth and solid baseline interest.",
      features: [
        "Flexible payment options",
        "Zero baseline account fees",
        "Continuous compound interest",
      ],
    },
  ];

  useSEO({ title: "Savings" });

  return (
    <main className="w-full bg-gray-50 text-gray-900 font-sans antialiased">
      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 md:py-24 px-4 md:px-12 relative overflow-hidden">
        {/* Decorative subtle background overlay */}
        <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-block bg-white/20 text-white text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full backdrop-blur-sm">
            New Client Special Offer
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Build big momentum with a{" "}
            <span className="underline decoration-white/60">
              4.50% savings boost
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-orange-50 max-w-2xl font-light">
            Grow your everyday cash at a special promotional rate for up to 5
            months when you sign up today. No minimum balances. No unfair fees.
            Just smart savings.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button className="bg-neutral-900 hover:bg-neutral-800 text-white font-bold px-8 py-4 rounded-full transition flex items-center justify-center gap-2 shadow-lg">
              Become a Client <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold border-2 border-white px-8 py-4 rounded-full transition">
              See Promotion Details
            </button>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION STRIP */}
      <section className="bg-white border-b border-gray-200 py-8 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="p-3 bg-orange-100 rounded-2xl text-orange-600 shrink-0">
              <Percent className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-neutral-800">
                Great Base Rates
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Earn compounding interest on every single dollar inside your
                active account.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="p-3 bg-orange-100 rounded-2xl text-orange-600 shrink-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-neutral-800">
                No Unfair Fees
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                We don't charge you service fees just for holding, moving, or
                managing your money.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="p-3 bg-orange-100 rounded-2xl text-orange-600 shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-neutral-800">
                Smart Automated Tools
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Set up automated savings programs to seamlessly build wealth
                without thinking twice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS ACCOUNTS LIST */}
      <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <h2 className="text-3xl font-black text-neutral-900 tracking-tight">
            Choose how you want to save
          </h2>
          <p className="text-gray-600 mt-2">
            Explore our flexible range of registered and non-registered savings
            products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accounts.map((acc, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col justify-between hover:shadow-xl transition duration-300 group"
            >
              <div>
                <h3 className="font-bold text-xl text-neutral-900 group-hover:text-orange-600 transition mb-4">
                  {acc.title}
                </h3>

                <div className="mb-4 bg-orange-50 border border-orange-100 rounded-xl p-3">
                  <div className="text-xs text-orange-700 font-semibold uppercase tracking-wide">
                    Promo Rate Offer
                  </div>
                  <div className="text-lg font-bold text-orange-600">
                    {acc.promo}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Standard Rate: {acc.rate}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {acc.description}
                </p>

                <ul className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                  {acc.features.map((f, i) => (
                    <li
                      key={i}
                      className="text-xs text-gray-700 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gray-100 hover:bg-orange-600 hover:text-white text-neutral-800 font-bold py-3 rounded-xl transition text-sm flex items-center justify-center gap-1">
                Learn More <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE CALCULATOR SECTION */}
      <section className="bg-neutral-900 text-white py-16 px-4 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-orange-400 font-bold uppercase tracking-wider text-xs">
              <Calculator className="w-4 h-4" /> Savings Goal Estimator
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Watch how fast your savings compound
            </h2>
            <p className="text-neutral-400 font-light leading-relaxed">
              Visualize your financial projection. Move the slider adjustments
              to calculate the power of starting an Automatic Savings Program
              (ASP) at our special introductory rate.
            </p>

            {/* Inputs */}
            <div className="space-y-6 pt-4">
              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>Monthly Contribution Amount</span>
                  <span className="text-orange-400 font-bold">
                    ${monthlyDeposit} /mo
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2500"
                  step="50"
                  value={monthlyDeposit}
                  onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                  className="w-full accent-orange-500 h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2 font-medium">
                  <span>Timeline Horizon</span>
                  <span className="text-orange-400 font-bold">
                    {timePeriod} Months
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="24"
                  step="1"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(Number(e.target.value))}
                  className="w-full accent-orange-500 h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Output Display Card */}
          <div className="bg-neutral-800 border border-neutral-700 rounded-3xl p-8 space-y-6 shadow-2xl relative">
            <div className="absolute top-4 right-4 bg-orange-600/20 border border-orange-500/30 text-orange-400 text-xs px-2.5 py-1 rounded-md font-bold">
              4.50% APR
            </div>
            <div>
              <span className="text-xs text-neutral-400 block uppercase tracking-wider font-semibold">
                Estimated Total Balance
              </span>
              <div className="text-4xl md:text-5xl font-black text-white mt-1">
                ${totalBalance.toLocaleString()}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-neutral-700 pt-6 text-sm">
              <div>
                <span className="text-neutral-400 block text-xs">
                  Total Principal Deposits
                </span>
                <span className="font-bold text-white text-base">
                  ${totalPrincipal.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block text-xs">
                  Est. Growth Dividends*
                </span>
                <span className="font-bold text-orange-400 text-base">
                  +${estimatedInterest.toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-neutral-500 font-light leading-normal">
              *Estimator tool is for generic demonstration purposes only.
              Calculations are estimates based on standard monthly deposits,
              calculated daily, assuming fixed promotional baseline variables
              and zero early capital withdrawals.
            </p>

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-orange-600/20">
              Open An Account To Start Saving
            </button>
          </div>
        </div>
      </section>

      {/* 5. DIGITAL ONBOARDING DETAILS */}
      <section className="bg-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 max-w-md">
            <h2 className="text-3xl font-black text-neutral-900 tracking-tight">
              Become a Client completely digitally
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Sign up securely without leaving your couch or ever needing to
              call us. Download the Mobile Banking app to configure identity
              validation instantly using electronic verification.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer hover:bg-neutral-800 transition">
                <Smartphone className="w-4 h-4" /> App Store
              </div>
              <div className="flex items-center gap-2 bg-neutral-900 text-white px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer hover:bg-neutral-800 transition">
                <Smartphone className="w-4 h-4" /> Google Play
              </div>
            </div>
          </div>
          <div className="bg-orange-50 rounded-3xl p-8 border border-orange-100 w-full md:w-96 flex flex-col gap-4">
            <h4 className="font-bold text-neutral-800 flex items-center gap-2">
              <ShieldCheck className="text-orange-600 w-5 h-5" /> What you will
              need:
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                ✓ Full Legal Name & Email
              </li>
              <li className="flex items-center gap-2">
                ✓ Valid Canadian Home Address
              </li>
              <li className="flex items-center gap-2">
                ✓ Social Security Number (SSN)
              </li>
              <li className="flex items-center gap-2">
                ✓ Date of Birth (Must be 16+)
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

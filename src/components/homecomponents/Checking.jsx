import React, { useState } from "react";
import {
  CreditCard,
  CheckCircle,
  Percent,
  Infinity,
  AlertCircle,
  Smartphone,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  DollarSign,
} from "lucide-react";

export default function Checking() {
  // Simple slider state to estimate standard big-bank fee savings
  const [estimatedMonthlyTransactions, setEstimatedMonthlyTransactions] =
    useState(25);

  // Traditional banks charge roughly $0.50-$1.25 per transaction or flat $15/mo accounts
  const bigBankFeeSaved = Math.round(estimatedMonthlyTransactions * 0.75 + 10);

  return (
    <main className="w-full bg-gray-50 text-gray-900 font-sans antialiased">
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-r from-neutral-900 to-neutral-800 text-white py-16 md:py-24 px-4 md:px-12 relative overflow-hidden border-b-4 border-orange-500">
        <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-block bg-orange-600 text-white text-xs uppercase tracking-widest font-black px-3 py-1 rounded">
            Everyday Banking
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            A Chequing Account that actually{" "}
            <span className="text-orange-500">pays you interest</span>.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl font-light">
            Say goodbye to monthly account maintenance penalties. Get free
            unlimited transactions, dynamic interest on your balance, and access
            to thousands of fee-free ABMs.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full transition flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20">
              Open a Chequing Account <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold border-2 border-white/40 px-8 py-4 rounded-full transition">
              View All Features
            </button>
          </div>
        </div>
      </section>

      {/* 2. VALUE PILLARS STRIP */}
      <section className="bg-white border-b border-gray-200 py-10 px-4 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm text-neutral-900">
                No Monthly Fees
              </h3>
              <p className="text-gray-500 text-xs mt-0.5">
                Keep your money. No sneaky conditions or minimum balance rules.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Infinity className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm text-neutral-900">
                Unlimited Transactions
              </h3>
              <p className="text-gray-500 text-xs mt-0.5">
                Free Interac e-Transfers®, debits, bill payments, and
                pre-authorized actions.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Percent className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm text-neutral-900">
                Tiered Interest
              </h3>
              <p className="text-gray-500 text-xs mt-0.5">
                Earn interest systematically on your operational daily card
                balances.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CreditCard className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-sm text-neutral-900">
                Free Scotiabank® ABMs
              </h3>
              <p className="text-gray-500 text-xs mt-0.5">
                Access cash at over 3,500 domestic locations without dynamic
                network surcharges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIERED INTEREST RATE GRID */}
      <section className="py-16 px-4 md:px-12 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
            How your balance earns yield
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Interest is calculated on daily closing assets and paid out directly
            every single month.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="bg-neutral-800 text-neutral-200 px-6 py-3.5 flex justify-between items-center text-xs uppercase font-bold tracking-wider">
            <span>Closing Balance Tier</span>
            <span>Annual Interest Rate (APY)</span>
          </div>
          <div className="divide-y divide-gray-100 font-medium">
            <div className="px-6 py-4 flex justify-between items-center hover:bg-gray-50/50">
              <span className="text-gray-700 text-sm">
                $0.00 <span className="text-gray-400 mx-2">to</span> $49,999.99
              </span>
              <span className="font-mono font-bold text-base text-neutral-900">
                0.01%
              </span>
            </div>
            <div className="px-6 py-4 flex justify-between items-center hover:bg-gray-50/50">
              <span className="text-gray-700 text-sm">
                $50,000.00 <span className="text-gray-400 mx-2">to</span>{" "}
                $99,999.99
              </span>
              <span className="font-mono font-bold text-base text-neutral-900">
                0.05%
              </span>
            </div>
            <div className="px-6 py-4 flex justify-between items-center hover:bg-gray-50/50">
              <span className="text-gray-700 text-sm">
                $100,000.00 <span className="text-gray-400 mx-2">to</span>{" "}
                $499,999.99
              </span>
              <span className="font-mono font-bold text-base text-orange-600">
                0.10%
              </span>
            </div>
            <div className="px-6 py-4 flex justify-between items-center hover:bg-gray-50/50">
              <span className="text-gray-700 text-sm">
                $500,000.00{" "}
                <span className="text-gray-400 font-normal ml-1">
                  or higher
                </span>
              </span>
              <span className="font-mono font-bold text-base text-neutral-900">
                0.01%
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEE COMPARISON TOOL */}
      <section className="bg-neutral-900 text-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight">
              Stop paying traditional checking penalties
            </h2>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Most institutional bank profiles charge up to $15 per month or
              charge fees per single transaction unless you maintain thousands
              in uninvested idle capital. Calculate what you keep with
              Tangerine.
            </p>

            <div className="pt-6 space-y-2">
              <div className="flex justify-between text-xs font-semibold text-neutral-400">
                <span>Estimated Monthly Debit / Transfer Uses</span>
                <span className="text-orange-400 font-bold">
                  {estimatedMonthlyTransactions} actions
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="80"
                step="5"
                value={estimatedMonthlyTransactions}
                onChange={(e) =>
                  setEstimatedMonthlyTransactions(Number(e.target.value))
                }
                className="w-full accent-orange-500 h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-neutral-800 border border-neutral-700 rounded-3xl p-8 text-center space-y-4 relative">
            <span className="text-xs text-neutral-400 font-mono tracking-widest uppercase block">
              Annual Account Savings
            </span>
            <div className="text-5xl md:text-6xl font-black text-orange-500">
              ${bigBankFeeSaved * 12}
            </div>
            <p className="text-xs text-neutral-400 font-light max-w-xs mx-auto">
              Based on standard big-bank transaction item costs over 12 months
              combined with basic account maintenance rates.
            </p>
            <div className="border-t border-neutral-700/60 pt-4 text-xs font-medium text-neutral-500 flex justify-center items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" /> No minimum balance buffer
              required to maintain this rate.
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEAMLESS ONBOARDING */}
      <section className="bg-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-4 max-w-md">
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
              Switching profiles takes 5 minutes
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Open your configuration profile completely digitally. Once active,
              our online switcher tools help you map your legacy employer
              payroll deposits or external automatic bills automatically.
            </p>

            <div className="space-y-2 text-xs font-semibold text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" /> Free
                initial checkbook book (50 drafts)
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />{" "}
                Mobile check snapping features in-app
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" /> Apple
                Pay & Google Wallet sync ready
              </div>
            </div>
          </div>

          {/* Verification requirements block */}
          <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6 w-full md:w-96 space-y-4">
            <h4 className="font-bold text-neutral-800 flex items-center gap-2 text-sm">
              <ShieldCheck className="text-orange-600 w-4 h-4 shrink-0" />{" "}
              Onboarding Checklist
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
              <div className="p-2.5 bg-white rounded-lg border border-gray-100">
                ✓ Legal ID
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-gray-100">
                ✓ Social Ins #
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-gray-100">
                ✓ Age 16+
              </div>
              <div className="p-2.5 bg-white rounded-lg border border-gray-100">
                ✓ Ca Address
              </div>
            </div>
            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold py-3 rounded-xl transition flex items-center justify-center gap-1 mt-2">
              Get Started Digitally <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

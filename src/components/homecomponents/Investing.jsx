import React, { useState } from "react";
import {
  TrendingUp,
  BarChart4,
  PieChart,
  Landmark,
  ArrowRight,
  ChevronRight,
  Calculator,
  CheckCircle2,
  ShieldCheck,
  Info,
} from "lucide-react";
import useSEO from "../../hooks/useSEO";

export default function Investing() {
  useSEO({
    title: "Investing",
    description:
      "Investing - The Private Lending and Finance Firm of First Kevington",
  });
  // Interactive Growth Estimator States
  const [initialInvestment, setInitialInvestment] = useState(5000);
  const [monthlyContribution, setMonthlyContribution] = useState(200);
  const [horizonYears, setHorizonYears] = useState(10);

  // Rule of thumb calculation for a growth balanced indexing portfolio (~6% net annual compound growth)
  const estimatedGrowthRate = 0.06;
  const totalPrincipal =
    initialInvestment + monthlyContribution * 12 * horizonYears;

  // Future value calculation for regular monthly deposits compounded annually (simplified approximation)
  const totalFutureValue = Math.round(
    initialInvestment * Math.pow(1 + estimatedGrowthRate, horizonYears) +
      monthlyContribution *
        12 *
        ((Math.pow(1 + estimatedGrowthRate, horizonYears) - 1) /
          estimatedGrowthRate),
  );
  const capitalGains = Math.max(0, totalFutureValue - totalPrincipal);

  return (
    <main className="w-full bg-gray-50 text-gray-900 font-sans antialiased">
      {/* 1. HERO BANNER */}
      <section className="bg-neutral-900 text-white py-16 md:py-24 px-4 md:px-12 relative overflow-hidden border-b-4 border-orange-500">
        {/* Subtle geometric grid vector layout styling */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-600/10 text-orange-400 text-xs uppercase tracking-widest font-black px-3 py-1 rounded border border-orange-500/20">
            <TrendingUp className="w-3.5 h-3.5" /> First Kevington Investments
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Invest effortlessly. <br />
            Keep more of your <span className="text-orange-500">returns</span>.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl font-light">
            Build diversified, globally-managed portfolios using automated
            indexing strategies. No hidden lockups, low management expense
            ratios, and zero complicated jargon.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full transition flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20">
              Start Investing Now <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold border-2 border-white/30 px-8 py-4 rounded-full transition">
              Explore Our Funds
            </button>
          </div>
        </div>
      </section>

      {/* 2. CORE VALUE PILLARS */}
      <section className="bg-white border-b border-gray-200 py-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl shrink-0 h-fit">
              <PieChart className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-neutral-800">
                Global Diversification
              </h3>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                Your money is automatically spread across hundreds of elite,
                top-tier global stocks and bonds to soften market bumps.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl shrink-0 h-fit">
              <BarChart4 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-neutral-800">
                Ultra-Low Fees
              </h3>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                Our transparent MERs (Management Expense Ratios) are roughly
                half the industry baseline, saving you thousands over time.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl shrink-0 h-fit">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-base text-neutral-800">
                Automatic Rebalancing
              </h3>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                Professional managers monitor and tweak your asset allocation
                settings systematically so your targets stay secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TAX-SHELTERED INVESTMENT SHELLS */}
      <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-neutral-900 tracking-tight">
            Flexible account options to meet your goals
          </h2>
          <p className="text-gray-600 text-sm mt-2">
            Pick the matching plan blueprint to shield your upcoming investment
            yields from annual taxes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              name: "Tax-Free Savings Account (TFSA)",
              use: "Best for short or long-term growth",
              body: "Grow your mutual funds or exchange-traded index models completely tax-free. Every dollar withdrawn is raw capital return without liability.",
            },
            {
              name: "Registered Retirement Savings Plan (RSP)",
              use: "Best for long-term retirement planning",
              body: "Deduct incoming annual contributions directly from your current net taxable income bracket while compounding retirement funds tax-deferred.",
            },
            {
              name: "Non-Registered Investment Account",
              use: "Best for unrestricted liquidity rules",
              body: "No maximum standard capital ceilings or rigid annual contribution laws. Standard capital layout tracking for standard investment freedom.",
            },
            {
              name: "Registered Retirement Income Fund (RIF)",
              use: "Best for secure retirement payouts",
              body: "Transition your lifetime accumulated RSP nest egg assets smoothly into structural, structured monthly income payouts during senior years.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition duration-200 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                  {item.use}
                </span>
                <h3 className="font-bold text-lg text-neutral-900 mt-2 group-hover:text-orange-600 transition">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-xs mt-3 leading-relaxed">
                  {item.body}
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-6 flex items-center justify-between text-xs text-neutral-800 font-bold group-hover:text-orange-600 transition cursor-pointer">
                <span>View Options</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. INTERACTIVE INVESTMENT GROWTH ESTIMATOR */}
      <section className="bg-neutral-900 text-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs text-orange-400 font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Projections Modeler
            </div>
            <h2 className="text-3xl font-black tracking-tight leading-tight">
              Visualize the power of steady compounding
            </h2>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Adjust the variables below to project how scaling regular small
              contributions can completely accelerate your long-term wealth
              relative to baseline savings accounts.
            </p>

            {/* Inputs sliders stacked */}
            <div className="space-y-5 pt-4 text-xs font-semibold">
              <div>
                <div className="flex justify-between text-neutral-300 mb-1.5">
                  <span>Initial Investment Principal</span>
                  <span className="text-orange-400 font-bold">
                    ${initialInvestment.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                  className="w-full accent-orange-500 h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-neutral-300 mb-1.5">
                  <span>Regular Monthly Contribution</span>
                  <span className="text-orange-400 font-bold">
                    ${monthlyContribution.toLocaleString()} /mo
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="50"
                  value={monthlyContribution}
                  onChange={(e) =>
                    setMonthlyContribution(Number(e.target.value))
                  }
                  className="w-full accent-orange-500 h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-neutral-300 mb-1.5">
                  <span>Investment Timeline Horizon</span>
                  <span className="text-orange-400 font-bold">
                    {horizonYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  min="3"
                  max="25"
                  step="1"
                  value={horizonYears}
                  onChange={(e) => setHorizonYears(Number(e.target.value))}
                  className="w-full accent-orange-500 h-1.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Calculator Output Presentation Panel */}
          <div className="bg-neutral-800 border border-neutral-700 rounded-3xl p-8 space-y-6 shadow-2xl relative">
            <div className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] px-2.5 py-0.5 rounded font-mono font-bold uppercase">
              ~6.0% Avg Growth
            </div>
            <div>
              <span className="text-xs text-neutral-400 block uppercase tracking-wider font-medium">
                Projected Investment Value
              </span>
              <div className="text-4xl md:text-5xl font-black text-white mt-1">
                ${totalFutureValue.toLocaleString()}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-neutral-700/60 pt-6 text-xs">
              <div>
                <span className="text-neutral-400 block">
                  Total Cash Contributed
                </span>
                <span className="font-bold text-white text-base mt-0.5 block">
                  ${totalPrincipal.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-neutral-400 block">
                  Est. Compounded Dividends
                </span>
                <span className="font-bold text-orange-400 text-base mt-0.5 block">
                  +${capitalGains.toLocaleString()}
                </span>
              </div>
            </div>

            <p className="text-[10px] text-neutral-500 font-light leading-normal">
              *Model displays long-term growth forecasts assuming steady asset
              class behavior, structural compounding, and standard annual
              rebalancing indices. Actual financial performance vary based on
              baseline operational horizons.
            </p>

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition text-sm shadow-lg shadow-orange-600/20">
              Open Portfolio Account Profile
            </button>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO SEGMENTATION INFO */}
      <section className="bg-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 max-w-md">
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
              Portfolios built around your risk comfort zone
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Answer a quick 5-question digital investment questionnaire to map
              your timeline metrics. We will pinpoint a corresponding index fund
              configuration tailored to your profile automatically.
            </p>
            <div className="space-y-2 text-xs font-semibold text-gray-700 pt-2">
              <div className="flex items-center gap-2">
                ✔ Steady Income portfolios for low risk volatility
              </div>
              <div className="flex items-center gap-2">
                ✔ Balanced models blending equites and bonds profiles
              </div>
              <div className="flex items-center gap-2">
                ✔ High Equity setups targeted for max market momentum
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-6 w-full md:w-96 space-y-4">
            <h4 className="font-bold text-neutral-800 flex items-center gap-2 text-sm">
              <ShieldCheck className="text-orange-600 w-4 h-4 shrink-0" />{" "}
              Safety & Protections
            </h4>
            <p className="text-xs text-gray-600 leading-normal">
              First Kevington Investment Funds are managed professionally by
              First Kevington Investment Management Inc. and held securely
              alongside credentialed clearing custodians.
            </p>
            <div className="flex items-start gap-2 text-[10px] text-gray-400 leading-tight">
              <Info className="w-3.5 h-3.5 shrink-0 text-gray-300" />
              <span>
                Mutual funds investments do not qualify for typical CDIC savings
                protection balances. Capital metrics undergo normal market
                variables.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

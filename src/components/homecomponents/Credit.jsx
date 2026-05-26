import React, { useState } from "react";
import {
  CreditCard,
  Sparkles,
  Shield,
  Percent,
  ArrowRight,
  CheckCircle2,
  Calculator,
  Info,
  Zap,
  Smartphone,
  Landmark,
} from "lucide-react";

export default function Credit() {
  // Cash-Back Calculator States
  const [gasSpend, setGasSpend] = useState(250);
  const [grocerySpend, setGrocerySpend] = useState(400);
  const [restaurantSpend, setRestaurantSpend] = useState(200);
  const [otherSpend, setOtherSpend] = useState(600);

  // Tangerine Logic: 2% on up to 3 chosen categories, 0.5% on everything else
  // Let's assume the user chooses Gas, Groceries, and Restaurants as their three 2% categories
  const monthly2PercentRewards =
    gasSpend * 0.02 + grocerySpend * 0.02 + restaurantSpend * 0.02;
  const monthlyBaseRewards = otherSpend * 0.005;
  const totalMonthlyRewards = monthly2PercentRewards + monthlyBaseRewards;
  const totalAnnualRewards = Math.round(totalMonthlyRewards * 12);

  return (
    <main className="w-full bg-gray-50 text-gray-900 font-sans antialiased">
      {/* 1. HERO BANNER */}
      <section className="bg-neutral-900 text-white py-16 md:py-24 px-4 md:px-12 relative overflow-hidden border-b-4 border-orange-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-orange-600 text-white text-xs uppercase tracking-widest font-black px-3 py-1 rounded">
            No Annual Fee Cards
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
            Earn real cash back on your{" "}
            <span className="text-orange-500">daily spending</span>.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl font-light">
            Choose your own 2% money-back categories. No caps on the rewards you
            can earn, deposited automatically into your account every single
            month.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-4 rounded-full transition flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20">
              Apply in Minutes <ArrowRight className="w-4 h-4" />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-bold border-2 border-white/30 px-8 py-4 rounded-full transition">
              Compare Card Specs
            </button>
          </div>
        </div>
      </section>

      {/* 2. REWARDS ARCHITECTURE */}
      <section className="bg-white border-b border-gray-200 py-12 px-4 md:px-12">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <span className="text-xs uppercase font-bold tracking-wider text-orange-600">
            The Money-Back Advantage
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight mt-1">
            How Tangerine Rewards Work
          </h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="text-3xl font-black text-orange-600">2%</div>
            <h3 className="font-bold text-sm text-neutral-800 mt-2">
              Money-Back Categories
            </h3>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">
              Earn 2% cash back in up to 3 categories of your choice, like
              Groceries, Gas, Restaurants, or Recurring Bills.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="text-3xl font-black text-neutral-700">0.5%</div>
            <h3 className="font-bold text-sm text-neutral-800 mt-2">
              On All Other Purchases
            </h3>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">
              Earn a baseline of 0.5% cash back on every other daily transaction
              outside your primary categories automatically.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="text-3xl font-black text-orange-600">Monthly</div>
            <h3 className="font-bold text-sm text-neutral-800 mt-2">
              Automatic Payouts
            </h3>
            <p className="text-gray-500 text-xs mt-1 leading-relaxed">
              Your rewards are paid out monthly into your account—no minimum
              redemption thresholds or yearly waiting blocks.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CARD LINEUP */}
      <section className="py-16 px-4 md:px-12 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-black text-neutral-900 tracking-tight">
            Select your ideal card profile
          </h2>
          <p className="text-gray-600 text-sm mt-1">
            Both cards offer premium reward customization with zero annual fee
            requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Money-Back */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-orange-600 bg-orange-50 px-2 py-0.5 rounded">
                    Popular Everyday Card
                  </span>
                  <h3 className="font-black text-xl text-neutral-900 mt-2">
                    Tangerine Money-Back Credit Card
                  </h3>
                </div>
              </div>

              <div className="space-y-2 border-t border-b border-gray-100 py-4 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Annual Fee</span>{" "}
                  <span className="font-bold text-neutral-900">$0</span>
                </div>
                <div className="flex justify-between">
                  <span>Purchase Interest Rate</span>{" "}
                  <span className="font-mono">19.95%</span>
                </div>
                <div className="flex justify-between">
                  <span>2% Money-Back Categories</span>{" "}
                  <span className="font-bold text-neutral-900">
                    2 Categories
                  </span>
                </div>
                <div className="flex justify-between text-orange-600">
                  <span>Bonus Category Offer</span>{" "}
                  <span>+1 Extra Category*</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />{" "}
                  Free supplementary user cards
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />{" "}
                  Purchase Assurance & Extended Warranty
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />{" "}
                  Minimum Income Requirement: $12,000+
                </div>
              </div>
            </div>

            <button className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3.5 rounded-xl transition text-xs mt-8">
              Apply for Money-Back Card
            </button>
          </div>

          {/* Card 2: World Mastercard */}
          <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-neutral-800 text-white text-[9px] uppercase font-black tracking-widest px-4 py-1 rounded-bl">
              Premium Tier
            </div>

            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded">
                    Advanced Travel & Perks
                  </span>
                  <h3 className="font-black text-xl text-neutral-900 mt-2">
                    Tangerine World Mastercard®
                  </h3>
                </div>
              </div>

              <div className="space-y-2 border-t border-b border-gray-100 py-4 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Annual Fee</span>{" "}
                  <span className="font-bold text-neutral-900">$0</span>
                </div>
                <div className="flex justify-between">
                  <span>Purchase Interest Rate</span>{" "}
                  <span className="font-mono">19.95%</span>
                </div>
                <div className="flex justify-between">
                  <span>2% Money-Back Categories</span>{" "}
                  <span className="font-bold text-neutral-900">
                    2 Categories
                  </span>
                </div>
                <div className="flex justify-between text-orange-600">
                  <span>Bonus Category Offer</span>{" "}
                  <span>+1 Extra Category*</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-600 shrink-0" />{" "}
                  Mastercard Travel Pass provided by DragonPass
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />{" "}
                  On-demand Boingo Wi-Fi access globally
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />{" "}
                  Rental Car Collision/Loss Damage Insurance
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />{" "}
                  Income Requirement: $60,000+ personal
                </div>
              </div>
            </div>

            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3.5 rounded-xl transition text-xs mt-8 shadow-lg shadow-orange-600/10">
              Apply for World Mastercard
            </button>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE CASH-BACK ESTIMATOR */}
      <section className="bg-neutral-900 text-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs text-orange-400 font-bold uppercase tracking-wider">
              <Calculator className="w-4 h-4" /> Reward Modeler
            </div>
            <h2 className="text-3xl font-black tracking-tight leading-tight">
              Estimate your annual cash rewards
            </h2>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Slide your rough monthly outlays across typical spending vectors.
              This assumes you select Gas, Groceries, and Restaurants as your
              three designated high-yield 2% categories.
            </p>

            {/* Slider inputs for 2% categories and base categories */}
            <div className="space-y-4 pt-2 text-xs font-semibold">
              <div>
                <div className="flex justify-between text-neutral-300 mb-1">
                  <span>Monthly Groceries (2% Category)</span>
                  <span className="text-orange-400 font-bold">
                    ${grocerySpend}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="1200"
                  step="50"
                  value={grocerySpend}
                  onChange={(e) => setGrocerySpend(Number(e.target.value))}
                  className="w-full accent-orange-500 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-neutral-300 mb-1">
                  <span>Monthly Gas / Public Transit (2% Category)</span>
                  <span className="text-orange-400 font-bold">${gasSpend}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="25"
                  value={gasSpend}
                  onChange={(e) => setGasSpend(Number(e.target.value))}
                  className="w-full accent-orange-500 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-neutral-300 mb-1">
                  <span>Monthly Dining & Restaurants (2% Category)</span>
                  <span className="text-orange-400 font-bold">
                    ${restaurantSpend}
                  </span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="800"
                  step="25"
                  value={restaurantSpend}
                  onChange={(e) => setRestaurantSpend(Number(e.target.value))}
                  className="w-full accent-orange-500 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-neutral-300 mb-1">
                  <span>All Other Purchases combined (0.5% Baseline)</span>
                  <span className="text-orange-400 font-bold">
                    ${otherSpend}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="2500"
                  step="100"
                  value={otherSpend}
                  onChange={(e) => setOtherSpend(Number(e.target.value))}
                  className="w-full accent-orange-500 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Reward Output Presentation Panel */}
          <div className="bg-neutral-800 border border-neutral-700 rounded-3xl p-8 text-center space-y-4 shadow-2xl relative">
            <span className="text-xs text-neutral-400 font-mono tracking-widest uppercase block">
              Estimated Annual Cash Back
            </span>
            <div className="text-5xl md:text-6xl font-black text-orange-500">
              ${totalAnnualRewards.toLocaleString()}
            </div>
            <p className="text-xs text-neutral-400 font-light max-w-xs mx-auto leading-relaxed">
              *To get your third 2% high-yield category, choose to have your
              cash-back rewards deposited directly into a free Tangerine Savings
              Account.
            </p>
            <div className="border-t border-neutral-700/60 pt-4 text-xs font-medium text-neutral-500 flex justify-center items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-orange-500" /> Rewards accrue
              continuously with zero annual limits.
            </div>
          </div>
        </div>
      </section>

      {/* 5. ADDITIONAL CLAUSES & SECURITY */}
      <section className="bg-white py-16 px-4 md:px-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 max-w-md">
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight">
              Security protections built right in
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Manage your card completely via mobile app configurations. Lock
              your card instantly if lost, set custom transaction threshold
              alerts, and pay easily using mobile wallets.
            </p>
            <div className="flex gap-4 text-xs text-gray-700 pt-2 font-medium">
              <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl w-1/2">
                <Shield className="w-4 h-4 text-orange-600 mb-1" />
                <span>
                  Zero Liability Coverage protects against unauthorized
                  activity.
                </span>
              </div>
              <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl w-1/2">
                <Smartphone className="w-4 h-4 text-orange-600 mb-1" />
                <span>Instant Apple Pay and Google Wallet configurations.</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-6 w-full md:w-96 space-y-3">
            <h4 className="font-bold text-neutral-800 flex items-center gap-2 text-sm">
              <Info className="text-orange-600 w-4 h-4 shrink-0" /> Important
              Parameters
            </h4>
            <div className="space-y-2 text-xs text-gray-600 leading-relaxed">
              <p>
                • <strong>Balance Transfers:</strong> 1.95% promotional rate
                applies for the initial 6 months following profile setup (3%
                transfer fee applies).
              </p>
              <p>
                • <strong>Cash Advances:</strong> Standard cash advance interest
                metrics run at 21.95%.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

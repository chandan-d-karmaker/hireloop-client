'use client'
import { useState } from "react";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

function PricingSection() {
  const [billing, setBilling] = useState("monthly");
 
  const plans = [
    {
      icon: "🚀",
      name: "Starter",
      price: "$0",
      period: "/month",
      desc: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary trends",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      cta: "Choose This Plan",
      highlight: false,
    },
    {
      icon: "📈",
      name: "Growth",
      price: "$17",
      period: "/month",
      desc: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary trends",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      cta: "Choose This Plan",
      highlight: true,
    },
    {
      icon: "⚡",
      name: "Premium",
      price: "$99",
      period: "/month",
      desc: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolio",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      cta: "Choose This Plan",
      highlight: false,
    },
  ];
 
  return (
    <section className="bg-[#0a0a0f] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#6c5ce7]" />
          <span className="text-[10px] tracking-widest text-[#6c5ce7] uppercase font-medium">Pricing</span>
          <div className="w-1.5 h-1.5 rounded-full bg-[#6c5ce7]" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center leading-tight mb-8">
          Pay for the leverage,
          <br />not the listings
        </h2>
 
        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-1 p-1 bg-[#111118] border border-white/8 rounded-full">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-1.5 text-sm rounded-full transition-colors ${
                billing === "monthly" ? "bg-white text-black font-medium" : "text-gray-400"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-4 py-1.5 text-sm rounded-full transition-colors flex items-center gap-2 ${
                billing === "yearly" ? "bg-white text-black font-medium" : "text-gray-400"
              }`}
            >
              Yearly
              <span className="text-[10px] bg-[#6c5ce7] text-white px-1.5 py-0.5 rounded-full">5%</span>
            </button>
          </div>
        </div>
 
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 flex flex-col gap-4 border transition-all ${
                plan.highlight
                  ? "bg-[#6c5ce7] border-[#6c5ce7] shadow-[0_0_40px_rgba(108,92,231,0.3)]"
                  : "bg-[#111118] border-white/8"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{plan.icon}</span>
                <span className={`text-sm font-medium ${plan.highlight ? "text-white/80" : "text-gray-400"}`}>
                  {plan.name}
                </span>
              </div>
              <div className="flex items-end gap-1">
                <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-white"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm pb-1 ${plan.highlight ? "text-white/60" : "text-gray-500"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`text-xs ${plan.highlight ? "text-white/70" : "text-gray-500"}`}>{plan.desc}</p>
              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-xs">
                    <FiCheckCircle
                      size={13}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-white" : "text-[#6c5ce7]"}`}
                    />
                    <span className={plan.highlight ? "text-white/80" : "text-gray-400"}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`mt-4 w-full py-2.5 text-sm font-medium rounded-full border transition-colors flex items-center justify-center gap-2 ${
                  plan.highlight
                    ? "bg-white text-[#6c5ce7] border-white hover:bg-white/90"
                    : "bg-transparent text-white border-white/15 hover:border-white/30 hover:bg-white/5"
                }`}
              >
                {plan.cta} <FiArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
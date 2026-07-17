"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, X, Sparkles, Zap } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PRICING_PLANS } from "@/lib/constants";

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" ref={ref} className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute inset-0 chess-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Pricing"
          title="Simple, Transparent"
          titleHighlight="Pricing"
          subtitle="No hidden fees, no surprises. Choose the plan that matches your ambition and switch anytime."
          align="center"
          className="mb-10"
        />

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-14"
        >
          <span className={`text-sm font-medium ${!annual ? "text-navy" : "text-navy/40"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${annual ? "bg-gold" : "bg-navy/20"}`}
          >
            <motion.div
              animate={{ x: annual ? 28 : 4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm"
            />
          </button>
          <span className={`text-sm font-medium ${annual ? "text-navy" : "text-navy/40"}`}>
            Annual
            <span className="ml-2 px-2 py-0.5 rounded-full bg-gold/15 text-gold text-xs font-bold">Save 33%</span>
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PRICING_PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: plan.featured ? -4 : -8 }}
              className={`relative rounded-3xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                plan.featured
                  ? "bg-navy-gradient text-white border border-gold/25 shadow-[0_24px_64px_rgba(32,35,59,0.35)] scale-[1.03]"
                  : "bg-white border border-cream-dark shadow-card hover:shadow-card-hover"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-5 py-2 rounded-full bg-gold text-navy text-xs font-bold shadow-gold">
                  <Sparkles className="w-3 h-3" /> Recommended
                </div>
              )}

              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Zap className={`w-4 h-4 ${plan.featured ? "text-gold" : "text-navy"}`} />
                  <h3 className={`font-display font-bold text-xl ${plan.featured ? "text-white" : "text-navy"}`}>
                    {plan.name}
                  </h3>
                </div>
                <p className={`text-sm ${plan.featured ? "text-white/60" : "text-navy/55"}`}>{plan.description}</p>
              </div>

              {/* Price */}
              <div className={`border-t pb-2 pt-5 ${plan.featured ? "border-white/10" : "border-cream-dark"}`}>
                <div className="flex items-baseline gap-1">
                  <span className={`font-display font-black text-4xl ${plan.featured ? "text-white" : "text-navy"}`}>
                    {annual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className={`text-sm ${plan.featured ? "text-white/50" : "text-navy/45"}`}>/month</span>
                </div>
                {annual && (
                  <p className={`text-xs mt-1 ${plan.featured ? "text-white/45" : "text-navy/40"}`}>
                    Billed annually — save significantly
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-gold" : "text-gold"}`} />
                    <span className={`text-sm ${plan.featured ? "text-white/80" : "text-navy/70"}`}>{f}</span>
                  </li>
                ))}
                {"notIncluded" in plan && plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 opacity-40">
                    <X className="w-4 h-4 mt-0.5 shrink-0 text-current" />
                    <span className={`text-sm ${plan.featured ? "text-white/60" : "text-navy/50"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <motion.button
                onClick={() => document.querySelector("#book-demo")?.scrollIntoView({ behavior: "smooth" })}
                className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-200 ${
                  plan.featured
                    ? "bg-gold text-navy hover:bg-gold-light shadow-gold"
                    : "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {plan.featured ? "Get Started — Most Popular" : `Choose ${plan.name}`}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-navy/40 text-xs mt-10"
        >
          All plans include a 7-day free trial · No credit card required · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}

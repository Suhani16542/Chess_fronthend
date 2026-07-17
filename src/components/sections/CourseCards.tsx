"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { PROGRAMS } from "@/lib/constants";

const CARD_STYLES: Record<string, { bg: string; text: string; badge: string; btn: string; border: string }> = {
  cream: {
    bg:     "bg-white",
    text:   "text-navy",
    badge:  "bg-cream-dark text-navy/70",
    btn:    "border-2 border-navy text-navy hover:bg-navy hover:text-white",
    border: "border-cream-dark",
  },
  navy: {
    bg:     "bg-navy",
    text:   "text-white",
    badge:  "bg-white/10 text-white/70",
    btn:    "border-2 border-white/30 text-white hover:bg-white hover:text-navy",
    border: "border-white/10",
  },
  gold: {
    bg:     "bg-gold-gradient",
    text:   "text-navy",
    badge:  "bg-navy/15 text-navy",
    btn:    "bg-navy text-white hover:bg-navy-dark",
    border: "border-gold/30",
  },
  dark: {
    bg:     "bg-navy-dark",
    text:   "text-white",
    badge:  "bg-gold/15 text-gold",
    btn:    "bg-gold text-navy hover:bg-gold-light",
    border: "border-gold/20",
  },
};

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" ref={ref} className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute inset-0 chess-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Our Programs"
          title="Find the Perfect"
          titleHighlight="Program for You"
          subtitle="Every learner is different. We offer structured programs matched to your skill level, pace and ambition — from first move to championship."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {PROGRAMS.map((program, i) => {
            const styles = CARD_STYLES[program.color];
            return (
              <motion.div
                key={program.level}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, scale: 1.015 }}
                className={`relative rounded-3xl p-7 border flex flex-col gap-6 shadow-card transition-shadow duration-300 hover:shadow-card-hover ${styles.bg} ${styles.border}`}
              >
                {program.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold text-navy text-xs font-bold shadow-gold-sm whitespace-nowrap">
                    <Sparkles className="w-3 h-3" /> Most Popular
                  </div>
                )}

                <div>
                  <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${styles.badge}`}>
                    {program.badge}
                  </span>
                  <h3 className={`font-display font-bold text-2xl mb-1 ${styles.text}`}>
                    {program.level}
                  </h3>
                  <p className={`text-sm ${program.color === "cream" || program.color === "gold" ? "text-navy/55" : "text-white/55"}`}>
                    {program.tagline}
                  </p>
                </div>

                <div className={`border-t pb-2 pt-5 ${styles.border}`}>
                  <span className={`font-display font-black text-4xl ${styles.text}`}>{program.price}</span>
                  <span className={`text-sm ml-1 ${program.color === "cream" || program.color === "gold" ? "text-navy/50" : "text-white/50"}`}>{program.period}</span>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {program.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className={`w-4 h-4 mt-0.5 shrink-0 ${program.color === "gold" ? "text-navy" : "text-gold"}`} />
                      <span className={`text-xs leading-relaxed ${program.color === "cream" || program.color === "gold" ? "text-navy/70" : "text-white/70"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  className={`w-full py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 ${styles.btn}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.querySelector("#book-demo")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Get Started
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

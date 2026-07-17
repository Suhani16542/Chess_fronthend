"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Crown, Sparkles, Target, ShieldCheck } from "lucide-react";

const highlights = [
  {
    title: "Premium Coaching",
    description: "Structured lessons for beginners, improvers, and advanced players with personalised guidance.",
    icon: Crown,
  },
  {
    title: "Tournament Readiness",
    description: "Train with discipline, game analysis, and practical tactics for real competitive events.",
    icon: ShieldCheck,
  },
  {
    title: "Confident Growth",
    description: "Build stronger decisions, sharper patterns, and calm focus that lasts beyond the board.",
    icon: Target,
  },
];

export default function StandingHeroes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="standing-heroes" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 chess-pattern opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 text-gold border border-gold/20 text-xs font-semibold tracking-widest uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" /> Standing Heroes
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy leading-tight">
              A premium academy where <span className="text-gradient-gold">discipline meets brilliance.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-navy/65 leading-relaxed">
              From first principles to tournament-level play, every student is coached to think clearly, move confidently, and perform with purpose.
            </p>
          </div>
          <div className="rounded-2xl border border-cream-dark bg-cream px-5 py-4 text-sm text-navy/70 shadow-card max-w-md">
            Our programs blend elite coaching, structured practice, and real-world tournament strategy to help young minds grow into stand-out players.
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-cream-dark bg-white p-7 shadow-card hover:shadow-card-hover transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-gold/12 text-gold flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-navy mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-navy/65">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

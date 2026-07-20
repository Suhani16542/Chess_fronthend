"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { JOURNEY_STEPS } from "@/lib/constants";

export default function LearningJourney() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" ref={ref} className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 chess-pattern-dark opacity-40 pointer-events-none" />
      {/* Gold center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Your Path"
          title="Your Chess"
          titleHighlight="Journey"
          subtitle="A clear, proven roadmap from your very first piece movement to tournament victories."
          align="center"
          light
          className="mb-20"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-12">
            {JOURNEY_STEPS.map((step, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-12 items-center ${!isRight ? "md:direction-rtl" : ""}`}
                >
                  {/* Card */}
                  <div className={`${!isRight ? "md:col-start-2" : ""}`}>
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02, boxShadow: "0 16px 40px rgba(244, 180, 0, 0.2)" }}
                      className="glass-navy rounded-2xl p-6 border border-gold/15 hover:border-gold/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center shrink-0 text-2xl">
                          {step.icon}
                        </div>
                        <div>
                          <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">Step {step.step}</p>
                          <h3 className="font-display font-bold text-xl text-white mb-2">{step.title}</h3>
                          <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex justify-center items-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: i * 0.12 + 0.3, duration: 0.4, type: "spring" }}
                      className={`absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-navy border-2 border-gold flex items-center justify-center text-gold font-display font-bold text-sm`}
                    >
                      {step.step}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() => document.querySelector("#book-demo")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 rounded-full bg-gold text-navy font-bold text-base shadow-gold hover:shadow-none transition-shadow duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(244,180,0,0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            Start My Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

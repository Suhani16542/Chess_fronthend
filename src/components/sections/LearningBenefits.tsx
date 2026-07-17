"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { BENEFITS } from "@/lib/constants";

export default function LearningBenefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white relative overflow-hidden">
      {/* Left blob */}
      <div className="absolute -left-48 top-1/3 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative bg-navy-gradient rounded-3xl p-10 text-white overflow-hidden shadow-[0_24px_80px_rgba(32,35,59,0.3)]">
              <div className="absolute inset-0 chess-pattern-dark" />

              {/* Glows */}
              <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gold/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="font-display font-black text-7xl text-gold/30 mb-2 leading-none">♟</div>
                <h3 className="font-display font-bold text-3xl mb-4 leading-tight">
                  Everything You Need to
                  <span className="text-gradient-gold"> Succeed</span>
                </h3>
                <p className="text-white/65 text-sm leading-relaxed mb-8">
                  Our academy bundles world-class coaching with the tools,
                  resources and community you need to become a consistently
                  strong chess player.
                </p>

                {/* Mini stats row */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  {[
                    { v: "500+", l: "Annotated Games" },
                    { v: "5,000+", l: "Tactical Puzzles" },
                    { v: "100+", l: "Video Lessons" },
                  ].map((s) => (
                    <div key={s.l} className="text-center">
                      <p className="font-display font-black text-2xl text-gold">{s.v}</p>
                      <p className="text-white/50 text-xs mt-1 leading-tight">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 w-28 h-28 rounded-2xl glass-white shadow-card flex flex-col items-center justify-center gap-1 border border-gold/20"
            >
              <span className="text-3xl">🏆</span>
              <p className="text-navy font-bold text-xs text-center leading-tight">98% Success Rate</p>
            </motion.div>
          </motion.div>

          {/* Right — benefits list */}
          <div>
            <SectionHeader
              badge="What You Get"
              title="A Complete Learning"
              titleHighlight="Ecosystem"
              subtitle="Every subscription includes a rich set of resources — not just coaching sessions."
              align="left"
              className="mb-10"
            />

            <motion.ul
              className="flex flex-col gap-4"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            >
              {BENEFITS.map((b) => (
                <motion.li
                  key={b.text}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16,1,0.3,1] } },
                  }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-200">
                    <CheckCircle2 className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-navy/80 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}

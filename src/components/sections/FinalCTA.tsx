"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Crown } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2.5rem] overflow-hidden bg-navy-gradient text-white p-12 sm:p-16 text-center"
        >
          {/* Decorations */}
          <div className="absolute inset-0 chess-pattern-dark opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/10 rounded-full blur-3xl" />

          {/* Corner pieces */}
          <div className="absolute top-6 left-8 text-5xl text-gold/10 font-display">♔</div>
          <div className="absolute bottom-6 right-8 text-5xl text-gold/10 font-display">♛</div>
          <div className="absolute top-6 right-8 text-3xl text-white/5 font-display">♜</div>
          <div className="absolute bottom-6 left-8 text-3xl text-white/5 font-display">♝</div>

          {/* Glow line top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-16 h-16 rounded-2xl bg-gold-gradient flex items-center justify-center mx-auto mb-6 shadow-gold"
            >
              <Crown className="w-8 h-8 text-navy" strokeWidth={2.5} />
            </motion.div>

            <h2 className="font-display font-black text-white mb-4 leading-tight"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
              Ready to Make Your{" "}
              <span className="text-gradient-gold">First Move?</span>
            </h2>
            <p className="text-white/65 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Join 2,500+ students who chose to invest in themselves. Your free demo
              session is waiting — no payment, no commitment. Just chess.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.button
                onClick={() => document.querySelector("#book-demo")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gold text-navy font-bold text-base shadow-gold"
                whileHover={{ scale: 1.05, boxShadow: "0 16px 48px rgba(244,180,0,0.55)" }}
                whileTap={{ scale: 0.97 }}
              >
                Book My Free Demo <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-10 py-4 rounded-full border-2 border-white/25 text-white font-semibold text-base hover:border-white/60 transition-colors duration-200"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Programs
              </motion.button>
            </div>

            {/* Trust pill */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="mt-8 text-white/35 text-xs"
            >
              ✓ Free session  &nbsp;·&nbsp;  ✓ No credit card  &nbsp;·&nbsp;  ✓ Cancel anytime
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

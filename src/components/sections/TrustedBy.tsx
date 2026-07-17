"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TRUSTED_LOGOS } from "@/lib/constants";

export default function TrustedBy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-14 bg-white border-y border-cream-dark relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-navy/35 mb-10"
        >
          Our students compete on world-leading chess platforms
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
        >
          {TRUSTED_LOGOS.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
              className="group flex items-center gap-2"
            >
              {/* Chess piece accent */}
              <span className="text-gold/50 text-lg group-hover:text-gold transition-colors duration-200">
                {["♔", "♕", "♖", "♗", "♘", "♙"][i % 6]}
              </span>
              <span className="font-display font-bold text-xl text-navy/25 group-hover:text-navy/60 transition-colors duration-300 tracking-tight whitespace-nowrap">
                {logo.abbr}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

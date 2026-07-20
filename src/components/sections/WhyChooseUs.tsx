"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import { FEATURES } from "@/lib/constants";

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" ref={ref} className="section-padding bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why ChessMaster"
          title="Every Detail Designed for"
          titleHighlight="Your Growth"
          subtitle="We didn't just build another chess platform — we designed an ecosystem where serious learners transform into skilled, confident chess players."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0 16px 48px rgba(244, 180, 0, 0.15)" }}
              className="group relative bg-white rounded-2xl p-8 shadow-card border border-cream-dark cursor-default transition-all duration-300 overflow-hidden"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left rounded-full" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center text-2xl mb-6 group-hover:bg-gold/10 transition-colors duration-300">
                {feature.icon}
              </div>

              <h3 className="font-display font-bold text-xl text-navy mb-3 group-hover:text-navy transition-colors">
                {feature.title}
              </h3>
              <p className="text-navy/60 text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Corner chess piece */}
              <div className="absolute bottom-4 right-5 text-3xl text-navy/4 group-hover:text-gold/15 transition-colors duration-300 font-display">
                {["♔", "♕", "♖", "♗", "♘", "♙"][i % 6]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

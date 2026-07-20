"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-gold fill-gold" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Student Stories"
          title="Real Results,"
          titleHighlight="Real Students"
          subtitle="Thousands of students have transformed their game with us. Here's what they say."
          align="center"
          className="mb-16"
        />

        {/* Featured testimonial */}
        <div className="max-w-3xl mx-auto mb-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="bg-navy-gradient rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(244,180,0,0.15)]"
            >
              <div className="absolute inset-0 chess-pattern-dark opacity-40" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="w-10 h-10 text-gold/40" />
                </div>
                
                {TESTIMONIALS[active].title && (
                  <h3 className="text-gold font-display font-bold text-lg sm:text-xl md:text-2xl mb-3 leading-tight">
                    {TESTIMONIALS[active].title}
                  </h3>
                )}

                <p className="text-white/90 text-base sm:text-lg leading-relaxed font-sans mb-8">
                  &ldquo;{TESTIMONIALS[active].quote}&rdquo;
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 border-2 border-gold/45 flex items-center justify-center font-display font-black text-gold text-lg shadow-inner shadow-gold/10">
                      {TESTIMONIALS[active].initials}
                    </div>
                    <div>
                      <p className="text-white font-bold text-base">{TESTIMONIALS[active].name}</p>
                      <p className="text-white/55 text-sm mb-1">{TESTIMONIALS[active].role}</p>
                      <StarRating rating={TESTIMONIALS[active].rating} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold/25 to-gold/10 border border-gold/30 shadow-[0_2px_10px_rgba(244,180,0,0.05)]">
                    <Trophy className="w-4 h-4 text-gold" />
                    <span className="text-gold text-xs font-semibold">{TESTIMONIALS[active].achievement}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full border-2 border-navy/15 flex items-center justify-center text-navy/50 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2.5 bg-gold" : "w-2.5 h-2.5 bg-navy/15 hover:bg-navy/30"}`}
                />
              ))}
            </div>
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full border-2 border-navy/15 flex items-center justify-center text-navy/50 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Grid of mini cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.button
              key={t.name}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.015 }}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                i === active
                  ? "bg-gradient-to-br from-navy-dark to-navy border-gold/40 shadow-[0_10px_25px_-5px_rgba(244,180,0,0.2)]"
                  : "bg-white/90 backdrop-blur-sm border-cream-dark hover:border-gold/30 hover:bg-cream/40 shadow-sm hover:shadow-[0_12px_24px_-6px_rgba(32,35,59,0.06)]"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                  i === active ? "bg-gradient-to-br from-gold to-gold-dark text-navy" : "bg-navy/10 text-navy"
                }`}>
                  {t.initials}
                </div>
                <div>
                  <p className={`text-sm font-bold ${i === active ? "text-white" : "text-navy"}`}>{t.name}</p>
                  <p className={`text-xs ${i === active ? "text-white/55" : "text-navy/50"}`}>{t.role}</p>
                </div>
              </div>

              {t.title && (
                <p className={`text-xs font-bold mb-1 tracking-wide ${i === active ? "text-gold" : "text-gold-dark"}`}>
                  {t.title}
                </p>
              )}

              <p className={`text-xs leading-relaxed line-clamp-2 ${i === active ? "text-white/70" : "text-navy/60"}`}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className={`mt-3 pt-3 border-t flex items-center justify-between ${
                i === active ? "border-white/10" : "border-navy/5"
              }`}>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  i === active ? "bg-gold/15 text-gold border border-gold/25" : "bg-navy/5 text-navy/70 border border-navy/10"
                }`}>
                  {t.achievement}
                </span>
                <span className="text-[10px] text-gold font-bold">★ 5.0</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

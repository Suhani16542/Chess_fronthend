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
              className="bg-navy-gradient rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 chess-pattern-dark opacity-40" />
              <div className="relative z-10">
                <Quote className="w-10 h-10 text-gold/50 mb-6" />
                <p className="text-white/90 text-lg sm:text-xl leading-relaxed font-medium mb-8">
                  &ldquo;{TESTIMONIALS[active].quote}&rdquo;
                </p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center font-display font-black text-gold">
                      {TESTIMONIALS[active].initials}
                    </div>
                    <div>
                      <p className="text-white font-bold">{TESTIMONIALS[active].name}</p>
                      <p className="text-white/55 text-sm">{TESTIMONIALS[active].role}</p>
                      <StarRating rating={TESTIMONIALS[active].rating} />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 border border-gold/25">
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
              whileHover={{ y: -6, scale: 1.015, boxShadow: "0 12px 28px rgba(244, 180, 0, 0.12)" }}
              className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                i === active
                  ? "bg-navy border-gold/30 shadow-gold-sm"
                  : "bg-cream border-cream-dark hover:border-navy/20"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${i === active ? "bg-gold text-navy" : "bg-navy/10 text-navy"}`}>
                  {t.initials}
                </div>
                <div>
                  <p className={`text-sm font-bold ${i === active ? "text-white" : "text-navy"}`}>{t.name}</p>
                  <p className={`text-xs ${i === active ? "text-white/55" : "text-navy/50"}`}>{t.role}</p>
                </div>
              </div>
              <p className={`text-xs leading-relaxed line-clamp-2 ${i === active ? "text-white/70" : "text-navy/60"}`}>
                &ldquo;{t.quote}&rdquo;
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Users, Award } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { COACHES } from "@/lib/constants";

export default function CoachCards() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="coaches" ref={ref} className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute -right-48 top-1/4 w-[600px] h-[600px] bg-navy/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Meet the Masters"
          title="Coached by the"
          titleHighlight="Very Best"
          subtitle="Our coaches aren't just players — they're dedicated educators committed to your growth. Every one of them holds a prestigious FIDE title."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COACHES.map((coach, i) => (
            <motion.div
              key={coach.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.015, boxShadow: "0 16px 48px rgba(244, 180, 0, 0.15)" }}
              className="group bg-white rounded-3xl overflow-hidden shadow-card border border-cream-dark hover:shadow-card-hover transition-all duration-300"
            >
              {/* Avatar area */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${coach.color}15, ${coach.color}30)` }}
              >
                {/* Pattern bg */}
                <div className="absolute inset-0 chess-pattern opacity-30" />

                {/* Avatar circle */}
                <div
                  className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center text-3xl font-display font-black text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-105"
                  style={{ background: `linear-gradient(135deg, ${coach.color}, ${coach.color}bb)` }}
                >
                  {coach.initials}
                </div>

                {/* FIDE badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-bold text-navy shadow-sm">
                  <Award className="w-3 h-3 text-gold" />
                  FIDE
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-display font-bold text-lg text-navy mb-0.5 group-hover:text-navy transition-colors">
                  {coach.name}
                </h3>
                <p className="text-gold text-xs font-semibold tracking-wide mb-3">{coach.title}</p>

                {/* Rating chip */}
                <div className="flex items-center gap-1.5 mb-3">
                  <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                  <span className="text-xs font-bold text-navy">FIDE {coach.rating}</span>
                </div>

                <p className="text-navy/60 text-xs leading-relaxed mb-4">{coach.specialty}</p>

                <div className="border-t border-cream-dark pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-navy/50">
                    <Users className="w-3.5 h-3.5" />
                    {coach.students} students
                  </div>
                  <span className="text-xs text-navy/40">{coach.experience}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

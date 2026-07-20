"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Star } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { TESTIMONIALS } from "@/lib/constants";

function StoryCard({ story, index, inView }: { story: typeof TESTIMONIALS[number]; index: number; inView: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.015, boxShadow: "0 16px 48px rgba(244, 180, 0, 0.15)" }}
      className="rounded-3xl border border-cream-dark bg-white p-6 shadow-card transition-all duration-300"
    >
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/10 text-gold font-bold">
          {story.initials}
        </div>
        <div className="flex items-center gap-1 text-gold">
          {Array.from({ length: story.rating }).map((_, ratingIndex) => (
            <Star key={ratingIndex} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>

      <p className="text-navy/75 text-sm leading-relaxed mb-6">“{story.quote}”</p>

      <div className="space-y-1">
        <p className="font-semibold text-navy">{story.name}</p>
        <p className="text-sm text-navy/55">{story.role}</p>
        <p className="text-xs uppercase tracking-[0.2em] text-gold font-bold mt-3">{story.achievement}</p>
      </div>
    </motion.article>
  );
}

export default function SuccessStories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const metrics = [
    { value: "650+", label: "Average rating gain" },
    { value: "100+", label: "Tournament titles" },
    { value: "98%", label: "Student satisfaction" },
  ];

  return (
    <section id="success-stories" ref={ref} className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Success Stories"
          title="Players who transformed their game"
          titleHighlight="Success Stories"
          subtitle="Discover how beginners, aspiring competitors, and working professionals improved their chess with our coaching programs."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.01, boxShadow: "0 30px 90px rgba(244, 180, 0, 0.2)" }}
            className="rounded-[2.5rem] bg-navy-gradient p-10 text-white shadow-[0_30px_80px_rgba(32,35,59,0.24)] transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white/10 text-gold text-2xl">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gold/70 font-semibold">Proven outcomes</p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                  Real progress from real students.
                </h2>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl bg-white/10 p-6">
                  <p className="text-3xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{metric.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/80 leading-relaxed">
                Our students consistently report faster rating gains, stronger tournament performances, and a deeper understanding of competitive strategy. This is the confidence that wins games — on and off the board.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {TESTIMONIALS.slice(0, 4).map((story, index) => (
              <StoryCard key={story.name} story={story} index={index} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Star, Trophy, Users } from "lucide-react";
import { HERO_STATS } from "@/lib/constants";

// ── Chess King SVG ──────────────────────────────────────────────────────────
function ChessKingSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 160" fill="none" className={className} aria-hidden>
      {/* Cross */}
      <rect x="54" y="4"  width="12" height="30" rx="6" fill="#F4B400" />
      <rect x="40" y="12" width="40" height="12" rx="6" fill="#F4B400" />
      {/* Crown */}
      <rect x="28" y="36" width="64" height="14" rx="7" fill="#F4B400" />
      {/* Body */}
      <path
        d="M 36 50 C 36 70 34 90 30 116 L 90 116 C 86 90 84 70 84 50 Z"
        fill="#F4B400" opacity="0.9"
      />
      {/* Base */}
      <rect x="24" y="116" width="72" height="14" rx="7" fill="#F4B400" />
      <rect x="16" y="130" width="88" height="16" rx="8" fill="#F4B400" />
      {/* Shine */}
      <ellipse cx="48" cy="72" rx="6" ry="12" fill="white" opacity="0.15" />
    </svg>
  );
}

// ── Mini chess board ────────────────────────────────────────────────────────
function ChessBoard() {
  const squares = Array.from({ length: 64 }, (_, i) => {
    const r = Math.floor(i / 8);
    const c = i % 8;
    return (r + c) % 2 === 0;
  });
  return (
    <div className="grid grid-cols-8 w-full h-full rounded-2xl overflow-hidden opacity-60">
      {squares.map((light, i) => (
        <div
          key={i}
          className={light ? "bg-white/10" : "bg-black/20"}
          style={{ aspectRatio: "1" }}
        />
      ))}
    </div>
  );
}

// ── Floating card ───────────────────────────────────────────────────────────
function FloatingCard({
  icon: Icon,
  label,
  value,
  delay,
  className,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute glass-white rounded-2xl p-3.5 shadow-card flex items-center gap-3 z-20 ${className}`}
      style={{ animation: `float ${3 + delay}s ease-in-out infinite` }}
    >
      <div className="w-9 h-9 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-gold" />
      </div>
      <div>
        <p className="text-navy font-bold text-sm leading-none">{value}</p>
        <p className="text-navy/60 text-xs mt-0.5">{label}</p>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-[100dvh] flex items-center overflow-hidden bg-hero-gradient pt-28 pb-20"
    >
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-navy/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle chess pattern */}
      <div className="absolute inset-0 chess-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-8 max-w-xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/12 border border-gold/25 text-xs font-semibold text-gold tracking-widest uppercase">
                <Star className="w-3.5 h-3.5 fill-gold" />
                Sada&apos;s Chess Academy
              </span>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <h1 className="font-display font-black leading-[1.08] text-navy"
                  style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)" }}>
                Master Chess.
                <br />
                <span className="text-gradient-gold">Master Life.</span>
              </h1>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a
                href="#book-demo"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#book-demo")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold text-navy font-bold text-base shadow-gold hover:shadow-none transition-shadow duration-300"
                whileHover={{ scale: 1.04, boxShadow: "0 12px 40px rgba(244,180,0,0.45)" }}
                whileTap={{ scale: 0.97 }}
              >
                Book Free Demo <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="flex flex-wrap items-center gap-x-10 gap-y-5 pt-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              {HERO_STATS.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display font-black text-3xl text-navy leading-none">
                    {s.value}
                  </span>
                  <span className="text-navy/55 text-sm mt-1">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Chess Visual ── */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer glow ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-gold/15 animate-pulse-gold pointer-events-none" />
            <div className="absolute w-[360px] h-[360px] rounded-full border border-gold/10 pointer-events-none" />

            {/* Main card */}
            <div className="relative w-[340px] h-[400px] rounded-3xl overflow-hidden bg-navy-gradient shadow-[0_32px_80px_rgba(32,35,59,0.35)] border border-gold/20">
              {/* Chess board bg */}
              <div className="absolute inset-0">
                <ChessBoard />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/90" />

              {/* Gold glow in center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold/15 rounded-full blur-3xl" />

              {/* King piece */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%]">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChessKingSVG className="w-32 h-auto drop-shadow-[0_0_24px_rgba(244,180,0,0.6)]" />
                </motion.div>
              </div>

              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">ChessMaster Academy</p>
                <p className="text-white font-display font-bold text-xl">Your move begins today.</p>
              </div>
            </div>

            {/* Floating cards */}
            <FloatingCard
              icon={Trophy}
              label="Tournament-Focused Training"
              value="Tournament"
              delay={0.6}
              className="-top-4 -right-4 sm:right-[-2.5rem]"
            />
            <FloatingCard
              icon={Users}
              label="Personalized Coaching"
              value="Personalized"
              delay={1.0}
              className="top-[40%] -right-6 sm:right-[-3rem]"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-navy/30" />
        <p className="text-navy/40 text-xs tracking-widest uppercase">Scroll</p>
      </motion.div>
    </section>
  );
}

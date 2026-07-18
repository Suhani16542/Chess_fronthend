"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  Briefcase,
  CalendarRange,
  Clock3,
  Globe2,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const experience = [
  {
    title: "7 Hills Chess Academy",
    period: "2023 – Present",
    bullets: [
      "Coaching 50+ students",
      "Developed structured training programs",
      "Produced multiple FIDE-rated players (1500+)",
    ],
  },
  {
    title: "Upstep Chess Academy",
    period: "2024 – Present",
    bullets: [
      "Focused on serious tournament players",
      "Advanced training in tactics and competition",
    ],
  },
  {
    title: "Bharathy Chess Academy",
    period: "2018 – 2022",
    bullets: [
      "Trained students across all skill levels",
      "Organized tournaments",
      "Served as chess arbiter",
    ],
  },
];

const achievements = [
  "Coached a player to 2nd place in the National Championship",
  "Developed multiple FIDE-rated players (1500+)",
  "Students won State and District Championships",
];

const skills = [
  "ChessBase",
  "Lichess",
  "Swiss Manager",
  "Chess Manager",
  "Online Coaching",
  "Tournament Preparation",
];

const languages = ["English", "Tamil", "Telugu"];

const international = [
  "Coach – Indian Juvenile Girls Team (Asian Silver Medal – May 15, 2025)",
  "Coach – Indian Team – World Cup",
];

const contactItems = [
  { label: "7358328783", icon: Phone, href: "tel:+917358328783" },
  { label: "Sadasivam.maker@gmail.com", icon: Mail, href: "mailto:Sadasivam.maker@gmail.com" },
  { label: "Andhra Pradesh, India", icon: MapPin, href: "#" },
];

export default function CoachProfile() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="coach-profile" ref={ref} className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,180,0,0.08),transparent_50%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-semibold tracking-[0.24em] uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Coach Spotlight
          </span>
          <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-navy leading-tight">
            Meet <span className="text-gradient-gold">SADA SIVAM K</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-navy-muted leading-relaxed">
            An experienced chess mentor with 7+ years of training competitive players, developing young talent, and shaping FIDE-rated performers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="rounded-4xl border border-cream-dark bg-cream p-6 sm:p-8 shadow-card"
          >
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 w-full max-w-76">
                <div className="absolute inset-0 rounded-4xl bg-gold/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-4xl border border-gold/25 bg-white p-2 shadow-[0_20px_60px_rgba(17,17,17,0.16)]">
                  <img
                    src="/image.png"
                    alt="Professional portrait of Sada Sivam K"
                    className="h-64 w-full rounded-3xl object-cover object-center sm:h-72 lg:h-80"
                  />
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl text-navy">SADA SIVAM K</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.28em] text-gold">Chess Coach & Mentor</p>
              <p className="mt-5 text-sm leading-7 text-navy-muted">
                Experienced chess coach with 7+ years of experience training competitive players and developing young talent into FIDE-rated players. Proven track record of producing national-level performers and coaching teams at international events.
              </p>

              <div className="mt-7 w-full space-y-3">
                {contactItems.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 rounded-2xl border border-cream-dark bg-white/80 px-4 py-3 text-sm text-navy transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-card"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/12 text-gold">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="space-y-6"
          >
            <div className="rounded-4xl border border-cream-dark bg-white p-6 sm:p-8 shadow-card">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 rounded-full bg-gold/10 px-3.5 py-2 text-sm font-semibold text-navy">
                  <Briefcase className="h-4 w-4 text-gold" /> 7+ Years Experience
                </div>
                <div className="flex items-center gap-2 rounded-full bg-navy/6 px-3.5 py-2 text-sm font-semibold text-navy">
                  <Trophy className="h-4 w-4 text-gold" /> National-Level Mentoring
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-cream-dark bg-cream/70 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <Users className="h-4 w-4 text-gold" /> Coaching Experience
                  </div>
                  <p className="mt-2 text-sm text-navy-muted">
                    Guided 50+ students and helped build structured training plans for growth.
                  </p>
                </div>
                <div className="rounded-2xl border border-cream-dark bg-cream/70 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <Globe2 className="h-4 w-4 text-gold" /> International Exposure
                  </div>
                  <p className="mt-2 text-sm text-navy-muted">
                    Coached national teams in Asian and World Cup-level events.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-cream-dark bg-white p-6 sm:p-8 shadow-card">
              <div className="flex items-center gap-2 text-lg font-semibold text-navy">
                <CalendarRange className="h-5 w-5 text-gold" /> Coaching Timeline
              </div>
              <div className="mt-6 space-y-5">
                {experience.map((item, index) => (
                  <div key={item.title} className="relative pl-6">
                    <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-gold bg-white" />
                    {index !== experience.length - 1 && <div className="absolute left-1.25 top-5 h-full w-px bg-cream-dark" />}
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="font-semibold text-navy">{item.title}</h4>
                      <span className="rounded-full bg-gold/10 px-2.5 py-1 text-xs font-semibold text-gold">{item.period}</span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-navy-muted">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 xl:grid-cols-2">
              <div className="rounded-4xl border border-cream-dark bg-white p-6 shadow-card">
                <div className="flex items-center gap-2 text-lg font-semibold text-navy">
                  <Award className="h-5 w-5 text-gold" /> Achievements
                </div>
                <ul className="mt-5 space-y-3 text-sm text-navy-muted">
                  {achievements.map((item) => (
                    <li key={item} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-4xl border border-cream-dark bg-white p-6 shadow-card">
                <div className="flex items-center gap-2 text-lg font-semibold text-navy">
                  <Clock3 className="h-5 w-5 text-gold" /> Skills & Languages
                </div>
                <div className="mt-5">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1.5 text-sm font-medium text-navy">{skill}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {languages.map((language) => (
                      <span key={language} className="rounded-full border border-navy/10 bg-navy/5 px-3 py-1.5 text-sm font-medium text-navy">{language}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-4xl border border-cream-dark bg-navy-gradient p-6 text-white shadow-card">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <Trophy className="h-5 w-5 text-gold" /> International Coaching Experience
              </div>
              <ul className="mt-5 space-y-3 text-sm text-white/80">
                {international.map((item) => (
                  <li key={item} className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

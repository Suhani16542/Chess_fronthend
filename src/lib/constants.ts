// ─────────────────────────────────────────────
//  ChessMaster Academy — Site-wide constants
// ─────────────────────────────────────────────

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const SITE_NAME = "ChessMaster Academy";
export const SITE_TAGLINE = "Master the Game. Master Life.";
export const SITE_DESCRIPTION =
  "India's premier chess academy — learn from FIDE-rated Grandmasters with personalised, structured programs for all levels.";

// ── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Home",         href: "#hero" },
  { label: "About",        href: "#why-us" },
  { label: "Programs",     href: "#programs" },
  { label: "Coaches",      href: "#coaches" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ",          href: "#faq" },
  { label: "Contact",      href: "#book-demo" },
] as const;

// ── Hero Stats ──────────────────────────────────────────────────────────────

export const HERO_STATS = [
  { value: "2,500+", label: "Students Enrolled" },
  { value: "50+",    label: "Expert Coaches"    },
  { value: "98%",    label: "Success Rate"      },
] as const;

// ── Trusted Logos (text representations) ───────────────────────────────────

export const TRUSTED_LOGOS = [
  { name: "Chess.com",     abbr: "Chess.com"   },
  { name: "Lichess",       abbr: "lichess"     },
  { name: "FIDE",          abbr: "FIDE"        },
  { name: "All India Chess", abbr: "AICF"      },
  { name: "ChessBase",     abbr: "ChessBase"   },
  { name: "Play Magnus",   abbr: "Play Magnus" },
] as const;

// ── Why Choose Us ───────────────────────────────────────────────────────────

export const FEATURES = [
  {
    icon: "🏆",
    title: "Grandmaster Coached",
    description:
      "Learn directly from FIDE-rated Grandmasters and International Masters who have competed at the highest level.",
  },
  {
    icon: "🎯",
    title: "Personalised Curriculum",
    description:
      "Every student gets a custom learning path based on their skill level, goals and learning style.",
  },
  {
    icon: "📡",
    title: "Live Interactive Sessions",
    description:
      "Real-time coaching with interactive boards, immediate feedback and detailed post-game analysis.",
  },
  {
    icon: "🏅",
    title: "Tournament Preparation",
    description:
      "Dedicated coaching for competitive play — openings repertoire, psychological preparation and time management.",
  },
  {
    icon: "📊",
    title: "Progress Analytics",
    description:
      "Track your improvement with detailed performance reports, rating growth charts and milestone badges.",
  },
  {
    icon: "⏰",
    title: "Flexible Scheduling",
    description:
      "Choose session timings that fit your routine. Morning, evening or weekend — we adapt to you.",
  },
] as const;

// ── Learning Benefits ───────────────────────────────────────────────────────

export const BENEFITS = [
  { emoji: "♟",  text: "Opening theory library with 500+ annotated games"       },
  { emoji: "🧩",  text: "Daily tactical puzzles curated by Grandmasters"          },
  { emoji: "📹",  text: "Recorded session replays — review anytime"               },
  { emoji: "📘",  text: "Monthly progress report with coach commentary"            },
  { emoji: "🤝",  text: "Private community of 2,500+ motivated learners"          },
  { emoji: "🎓",  text: "Academy certificate on course completion"                 },
  { emoji: "🌐",  text: "Access to live online tournaments every weekend"          },
  { emoji: "👨‍👩‍👧",  text: "Parent involvement sessions and progress updates"          },
] as const;


// ── Journey Steps ───────────────────────────────────────────────────────────

export const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Free Skill Assessment",
    description:
      "Start with a 30-minute free evaluation session. Our coaches assess your current level, identify gaps and understand your chess goals.",
    icon: "🎯",
  },
  {
    step: "02",
    title: "Meet Your Coach",
    description:
      "Get matched with a coach whose expertise aligns with your level and goals. Have an introduction session to align on your roadmap.",
    icon: "🤝",
  },
  {
    step: "03",
    title: "Begin Your Program",
    description:
      "Start your personalised curriculum. Each session builds on the last — structured, progressive and deeply engaging.",
    icon: "📚",
  },
  {
    step: "04",
    title: "Practice & Analyse",
    description:
      "Daily puzzles, self-play analysis and peer matches reinforce your learning. Review recorded sessions at your pace.",
    icon: "🧩",
  },
  {
    step: "05",
    title: "Compete & Excel",
    description:
      "Enter club tournaments, state-level events and online competitions. Celebrate milestones and climb the rating ladder.",
    icon: "🏆",
  },
] as const;

// ── Coaches ─────────────────────────────────────────────────────────────────

export const COACHES = [
  {
    name: "GM Arjun Sharma",
    title: "Grandmaster",
    rating: 2645,
    specialty: "Opening Theory & Sicilian Expert",
    experience: "12 years coaching",
    students: 340,
    initials: "AS",
    color: "#F4B400",
  },
  {
    name: "IM Priya Nair",
    title: "International Master",
    rating: 2452,
    specialty: "Endgame Mastery & Women's Chess",
    experience: "8 years coaching",
    students: 210,
    initials: "PN",
    color: "#20233B",
  },
  {
    name: "FM Vikram Singh",
    title: "FIDE Master",
    rating: 2318,
    specialty: "Youth Development & Tactics",
    experience: "6 years coaching",
    students: 185,
    initials: "VS",
    color: "#2d3356",
  },
  {
    name: "NM Ananya Bose",
    title: "National Master",
    rating: 2180,
    specialty: "Beginner Programs & School Chess",
    experience: "5 years coaching",
    students: 290,
    initials: "AB",
    color: "#C49200",
  },
] as const;

// ── Testimonials ────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    name: "Ashwini",
    role: "Parent of Aira",
    quote: "Thank you for being so patient with Aira. Your teaching style is wonderful, and she truly enjoys learning from you. Even when chess feels stressful, she wants to continue because she loves being coached by you.",
    rating: 5,
    achievement: "A student who loves learning chess.",
    initials: "AS",
    title: "❤️ A Parent's Words That Made Our Day",
  },
  {
    name: "Parent of Annika",
    role: "Parent Feedback",
    quote: "After her vaccination, when Annika regained consciousness, she kept asking for her dad and for Sada Sir. That moment made us realize how much you mean to her. Thank you for being such an important part of her journey.",
    rating: 5,
    achievement: "More than a Coach.",
    initials: "PA",
    title: "💛 A Bond Beyond Chess",
  },
  {
    name: "Sunita Krishnan",
    role: "Parent of 10-year-old Kabir",
    quote: "My son's concentration during games has dramatically improved since he started training here. The structured opening preparation and tactical analysis helped him win his first school championship with a clean sheet.",
    rating: 5,
    achievement: "School Champion 2024",
    initials: "SK",
    title: "📈 Tournament Confidence & Strategy",
  },
  {
    name: "Arjun Kapoor",
    role: "Advanced Student, Age 21",
    quote: "As an intermediate player, I was stuck at a plateau for almost a year. The deep-dive endgame masterclasses and personalized homework plans helped me break through and gain over 200 rating points.",
    rating: 5,
    achievement: "Rating +210 in 6 months",
    initials: "AK",
    title: "🏆 FIDE Rating Milestones",
  },
  {
    name: "Kavya Reddy",
    role: "Parent of 12-year-old Ananya",
    quote: "Chess has done wonders for my daughter's analytical skills. She is much more patient and methodical with her schoolwork now. The friendly and highly motivating learning environment keeps her excited for every single session.",
    rating: 5,
    achievement: "Academic & Focus Boost",
    initials: "KR",
    title: "🧠 Strategic Thinking in Academics",
  },
  {
    name: "Deepak Joshi",
    role: "Working Professional, Age 35",
    quote: "Balancing a demanding job with my passion for chess was difficult. The flexible scheduling and structured curriculum allow me to study complex tactical ideas at my own pace. The coaching is top-notch.",
    rating: 5,
    achievement: "Club Rating 1800+",
    initials: "DJ",
    title: "⏰ Structured Training for Professionals",
  },
] as const;

// ── Pricing Plans ───────────────────────────────────────────────────────────

export const PRICING_PLANS = [
  {
    name: "Starter",
    monthlyPrice: "₹2,999",
    annualPrice: "₹1,999",
    description: "Perfect for beginners and casual learners",
    featured: false,
    features: [
      "4 group sessions/month",
      "Access to puzzle library",
      "Progress tracking",
      "Community forum",
      "Email support",
    ],
    notIncluded: ["1-on-1 coaching", "Tournament entry", "Recorded replays"],
  },
  {
    name: "Pro",
    monthlyPrice: "₹5,999",
    annualPrice: "₹3,999",
    description: "Most popular — for serious learners",
    featured: true,
    features: [
      "8 semi-private sessions/month",
      "1 private session/month",
      "Full puzzle & game library",
      "Post-game analysis",
      "Monthly progress report",
      "Priority support",
      "Tournament preparation",
    ],
    notIncluded: ["Unlimited sessions"],
  },
  {
    name: "Elite",
    monthlyPrice: "₹11,999",
    annualPrice: "₹7,999",
    description: "For competitive players and champions",
    featured: false,
    features: [
      "Unlimited 1-on-1 sessions",
      "GM coach assignment",
      "Full competitive prep",
      "Tournament entries included",
      "National event support",
      "24/7 priority support",
      "Video analysis library",
    ],
    notIncluded: [],
  },
] as const;

// ── FAQ ─────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS = [
  {
    question: "What age groups do you teach?",
    answer:
      "We welcome students of all ages — from children as young as 6 to adult learners and professionals. Our coaches tailor their approach to the age and learning style of each student.",
  },
  {
    question: "How long is each coaching session?",
    answer:
      "Standard sessions are 60 minutes. Elite and custom programs may include 90-minute deep-dive sessions. The time is always used productively — opening prep, tactical drills, game analysis and strategy.",
  },
  {
    question: "Do you offer a free trial?",
    answer:
      "Yes! Every new student gets a free 30-minute skill assessment and introductory session with one of our coaches. No commitment required — just book your demo above.",
  },
  {
    question: "What skill level do I need to join?",
    answer:
      "Absolutely none! We accept complete beginners through to advanced players seeking to break rating barriers. Our assessment session places you in the right program from day one.",
  },
  {
    question: "Are sessions online or in-person?",
    answer:
      "All sessions are conducted online via our interactive platform with a real-time chess board, video and chat. This means you can learn from anywhere in the world.",
  },
  {
    question: "How do I track my improvement?",
    answer:
      "You get a personalised dashboard showing your rating trend, puzzle accuracy, session scores and milestone badges. Coaches also write monthly progress notes reviewing your strengths and areas to develop.",
  },
  {
    question: "What equipment or software do I need?",
    answer:
      "Just a stable internet connection and a computer, tablet or smartphone with a browser. We provide access to our interactive board platform — no special software downloads needed.",
  },
  {
    question: "Can I change my coach or program?",
    answer:
      "Absolutely. If you feel a different coaching style or program level suits you better, simply contact us and we will arrange the switch at no extra cost.",
  },
] as const;

// ── Animation Defaults ──────────────────────────────────────────────────────

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const SOCIAL_LINKS = {
  twitter:   "https://twitter.com/",
  instagram: "https://instagram.com/",
  youtube:   "https://youtube.com/",
  linkedin:  "https://linkedin.com/",
} as const;

// ── Breakpoints (mirrors Tailwind defaults) ──────────────────────────────────

export const BREAKPOINTS = {
  sm:    640,
  md:    768,
  lg:   1024,
  xl:   1280,
  "2xl": 1536,
} as const;

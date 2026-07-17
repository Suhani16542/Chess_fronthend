// ─────────────────────────────────────────────
//  Global TypeScript types & interfaces
// ─────────────────────────────────────────────

// ── Navigation ──────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

// ── Course ──────────────────────────────────

export type CourseLevel = "beginner" | "intermediate" | "advanced" | "master";

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: CourseLevel;
  duration: string;        // e.g. "12 weeks"
  lessonsCount: number;
  price: number;
  currency?: string;
  thumbnailUrl: string;
  coachId: string;
  tags: string[];
  isFeatured?: boolean;
  createdAt: string;       // ISO date string
}

// ── Coach ────────────────────────────────────

export type CoachTitle =
  | "Grandmaster"
  | "International Master"
  | "FIDE Master"
  | "National Master"
  | "Coach";

export interface Coach {
  id: string;
  name: string;
  slug: string;
  title: CoachTitle;
  bio: string;
  avatarUrl: string;
  rating?: number;         // FIDE rating
  specializations: string[];
  socialLinks?: Partial<{
    twitter: string;
    instagram: string;
    youtube: string;
    linkedin: string;
  }>;
}

// ── Testimonial ──────────────────────────────

export interface Testimonial {
  id: string;
  authorName: string;
  authorTitle?: string;
  avatarUrl?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  courseId?: string;
}

// ── FAQ ──────────────────────────────────────

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ── Common utility types ─────────────────────

export type WithClassName<T = object> = T & {
  className?: string;
};

export type PropsWithChildren<T = object> = T & {
  children: React.ReactNode;
};

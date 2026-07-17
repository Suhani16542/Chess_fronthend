"use client";
import { Crown, Mail, Phone, MapPin } from "lucide-react";
import { SITE_NAME, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

// Inline social SVGs (lucide-react renames these frequently)
const SocialIcons = {
  twitter: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L2.25 2.25h6.961l4.263 5.637L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  ),
  instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16" aria-hidden>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  ),
  youtube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
    </svg>
  ),
  linkedin: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

const FOOTER_PROGRAMS = [
  "Beginner Program",
  "Intermediate Program",
  "Advanced Program",
  "Elite Mastership",
];

const FOOTER_LEGAL = [
  { label: "Privacy Policy",    href: "#" },
  { label: "Terms of Service",  href: "#" },
  { label: "Refund Policy",     href: "#" },
];


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-gradient relative overflow-hidden">
      {/* Chess pattern overlay */}
      <div className="absolute inset-0 chess-pattern-dark opacity-40 pointer-events-none" />

      {/* Glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gold-gradient flex items-center justify-center">
                <Crown className="w-5 h-5 text-navy" strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-display font-bold text-xl text-white">
                  Chess<span className="text-gold">Master</span>
                </p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase">Academy</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              India&apos;s premier chess academy — transforming beginners into champions through
              personalised coaching by Grandmasters.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 mt-1">
              {(Object.entries(SOCIAL_LINKS) as [keyof typeof SocialIcons, string][]).map(
                ([key, href]) => {
                  const Icon = SocialIcons[key];
                  return (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={key}
                      className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center text-white/60 hover:bg-gold/20 hover:text-gold transition-all duration-200"
                    >
                      <Icon />
                    </a>
                  );
                }
              )}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Navigate</p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <p className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Programs</p>
            <ul className="flex flex-col gap-3">
              {FOOTER_PROGRAMS.map((p) => (
                <li key={p}>
                  <a href="#programs" className="text-white/55 hover:text-gold transition-colors text-sm">
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-5 text-sm tracking-wide uppercase">Contact</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href="mailto:hello@chessmasteracademy.in" className="text-white/55 hover:text-white transition-colors text-sm">
                  hello@chessmasteracademy.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href="tel:+919876543210" className="text-white/55 hover:text-white transition-colors text-sm">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-white/55 text-sm">Mumbai, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {FOOTER_LEGAL.map((item) => (
              <a key={item.label} href={item.href} className="text-white/35 hover:text-white/70 transition-colors text-xs">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

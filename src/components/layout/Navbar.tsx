"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

function LogoMark() {
  return (
    <img
      src="/knight.svg"
      alt="Chess Class logo"
      className="w-10 h-10 sm:w-11 sm:h-11 object-contain relative z-10"
    />
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState("hero");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setActive(href.replace("#", ""));
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + href;
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[200] transition-all duration-500",
          scrolled
            ? "py-3 bg-navy/95 backdrop-blur-xl shadow-[0_4px_32px_rgba(32,35,59,0.4)] border-b border-white/5"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

          {/* ── Logo ── */}
          <motion.a
            href="#hero"
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-11 h-11 rounded-2xl bg-gold-gradient flex items-center justify-center shadow-gold-sm group-hover:shadow-gold transition-shadow duration-300 overflow-hidden border border-gold/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.35),_transparent_55%)]" />
              <LogoMark />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-white text-lg tracking-tight">
                Chess<span className="text-gold"> Class</span>
              </span>
            </div>
          </motion.a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300",
                    active === id ? "text-gold" : "text-gold/95 hover:text-gold-light"
                  )}
                >
                  {active === id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gold/10 rounded-lg"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.button
              onClick={() => handleNavClick("#book-demo")}
              className="px-6 py-2.5 rounded-full bg-gold text-navy text-sm font-bold tracking-wide shadow-gold hover:shadow-gold transition-shadow duration-300"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(244,180,0,0.5)" }}
              whileTap={{ scale: 0.97 }}
            >
              Book Free Demo
            </motion.button>
          </div>

          {/* ── Hamburger ── */}
          <motion.button
            className="lg:hidden p-2 rounded-xl text-gold/90 hover:text-gold-light hover:bg-gold/10 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            whileTap={{ scale: 0.93 }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-[190] pt-24 pb-8 px-4 bg-navy/98 backdrop-blur-2xl border-b border-white/8 lg:hidden"
          >
            <div className="flex flex-col gap-1 max-w-sm mx-auto">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl text-gold/95 hover:text-gold-light hover:bg-gold/10 transition-all duration-300 text-left font-medium"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                onClick={() => handleNavClick("#book-demo")}
                className="mt-4 w-full py-4 rounded-2xl bg-gold text-navy font-bold text-base tracking-wide shadow-gold"
              >
                Book Free Demo
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

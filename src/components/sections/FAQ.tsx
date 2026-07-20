"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/lib/constants";

function FAQItem({ item, index, inView }: { item: typeof FAQ_ITEMS[number]; index: number; inView: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        open ? "border-gold/25 shadow-gold-sm bg-white" : "border-cream-dark bg-white hover:border-navy/15"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className={`font-semibold text-sm sm:text-base leading-snug ${open ? "text-navy" : "text-navy/80"}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            open ? "bg-gold text-navy" : "bg-navy/6 text-navy/40"
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-5 text-sm text-navy/65 leading-relaxed border-t border-cream-dark pt-4">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-navy/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Questions? We've Got"
          titleHighlight="Answers."
          subtitle="Everything you need to know before you begin your chess journey with us."
          align="center"
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-4"
        >
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={item.question} item={item} index={i} inView={inView} />
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 p-8 rounded-3xl bg-navy-gradient text-center text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 chess-pattern-dark opacity-40" />
          <div className="relative z-10">
            <MessageCircle className="w-10 h-10 text-gold/60 mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl mb-2">Still have questions?</h3>
            <p className="text-white/60 text-sm mb-5">
              Our team is available Monday–Saturday, 9am–8pm IST. We&apos;re always happy to chat.
            </p>
            <motion.a
              href="mailto:hello@chessmasteracademy.in"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold text-navy font-bold text-sm shadow-gold transition-all duration-300"
              whileHover={{ scale: 1.04, boxShadow: "0 12px 36px rgba(244, 180, 0, 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Our Team
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

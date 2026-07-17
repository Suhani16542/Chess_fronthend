"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Phone, CheckCircle } from "lucide-react";
import { submitDemoBooking } from "@/lib/api";

const LEVELS = ["Beginner", "Intermediate", "Advanced"];
const TIMES = ["Morning (7am–11am)", "Afternoon (12pm–4pm)", "Evening (5pm–8pm)", "Weekend"];

export default function BookDemo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [form, setForm] = useState({
    studentName: "",
    parentName: "",
    email: "",
    phone: "",
    age: "",
    city: "",
    chessExperience: "",
    preferredTime: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setErrorMessage(null);
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const resetForm = () => {
    setForm({
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      age: "",
      city: "",
      chessExperience: "",
      preferredTime: "",
      message: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const payload = {
        studentName: form.studentName,
        parentName: form.parentName,
        email: form.email,
        phone: form.phone,
        age: Number(form.age),
        city: form.city,
        chessExperience: form.chessExperience,
        preferredTime: form.preferredTime,
        message: form.message,
      };

      await submitDemoBooking(payload);
      resetForm();
      setSubmitted(true);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-gold/60 focus:bg-white/15 transition-all duration-200";

  const selectClass =
    "w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-gold/60 focus:bg-white/15 transition-all duration-200 appearance-none";

  const textareaClass =
    "min-h-[120px] w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-gold/60 focus:bg-white/15 transition-all duration-200 resize-y";

  return (
    <section id="book-demo" ref={ref} className="section-padding bg-navy-gradient relative overflow-hidden">
      <div className="absolute inset-0 chess-pattern-dark opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-gold/8 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/25 text-gold text-xs font-semibold tracking-widest uppercase mb-6">
              Free Demo Session
            </span>
            <h2 className="font-display font-black text-white mb-6 leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Your First Lesson<br />
              <span className="text-gradient-gold">Is On Us.</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Book your free 30-minute skill assessment session. Our coaches will
              evaluate your level, share an honest improvement plan, and show you
              exactly what learning with us looks like — completely free of charge.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                "No payment or credit card required",
                "Personalised skill evaluation by a FIDE-rated coach",
                "Get a clear 3-month improvement roadmap",
                "Ask all your questions — no sales pressure",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <span className="text-white/75 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-white/50 text-xs mb-0.5">Prefer to call us directly?</p>
                <a href="tel:+919876543210" className="text-white font-bold hover:text-gold transition-colors">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-navy rounded-3xl p-8 border border-gold/15">
              {!submitted ? (
                <>
                  <h3 className="font-display font-bold text-xl text-white mb-6">
                    Book Your Free Session
                  </h3>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" htmlFor="studentName">Student Name</label>
                        <input id="studentName" name="studentName" type="text" required placeholder="Enter student name" value={form.studentName} onChange={handleChange} className={inputClass} disabled={isSubmitting} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" htmlFor="parentName">Parent Name</label>
                        <input id="parentName" name="parentName" type="text" required placeholder="Enter parent name" value={form.parentName} onChange={handleChange} className={inputClass} disabled={isSubmitting} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="email" required placeholder="name@example.com" value={form.email} onChange={handleChange} className={inputClass} disabled={isSubmitting} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" htmlFor="phone">Phone Number</label>
                        <input id="phone" name="phone" type="tel" required placeholder="Phone number" value={form.phone} onChange={handleChange} className={inputClass} disabled={isSubmitting} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" htmlFor="age">Age</label>
                        <input id="age" name="age" type="number" required min="4" max="25" placeholder="Age" value={form.age} onChange={handleChange} className={inputClass} disabled={isSubmitting} />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" htmlFor="city">City</label>
                        <input id="city" name="city" type="text" required placeholder="City" value={form.city} onChange={handleChange} className={inputClass} disabled={isSubmitting} />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" htmlFor="chessExperience">Chess Experience</label>
                        <select id="chessExperience" name="chessExperience" required value={form.chessExperience} onChange={handleChange} className={`${selectClass} ${!form.chessExperience ? "text-white/35" : "text-white"}`} disabled={isSubmitting}>
                          <option value="" disabled>Select experience</option>
                          {LEVELS.map((l) => <option key={l} value={l} className="bg-navy text-white">{l}</option>)}
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" htmlFor="preferredTime">Preferred Time</label>
                        <select id="preferredTime" name="preferredTime" required value={form.preferredTime} onChange={handleChange} className={`${selectClass} ${!form.preferredTime ? "text-white/35" : "text-white"}`} disabled={isSubmitting}>
                          <option value="" disabled>Select a slot</option>
                          {TIMES.map((t) => <option key={t} value={t} className="bg-navy text-white">{t}</option>)}
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60" htmlFor="message">Message / Additional Notes</label>
                      <textarea id="message" name="message" placeholder="Tell us about your goals or questions" value={form.message} onChange={handleChange} className={textareaClass} disabled={isSubmitting} />
                    </div>

                    {errorMessage && (
                      <p className="rounded-xl border border-gold/20 bg-gold/10 px-4 py-3 text-sm text-gold">{errorMessage}</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-2 w-full py-4 rounded-2xl bg-gold text-navy font-bold text-base flex items-center justify-center gap-2 shadow-gold hover:bg-gold-light transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-70"
                      whileHover={{ scale: isSubmitting ? 1 : 1.02, boxShadow: "0 12px 40px rgba(244,180,0,0.5)" }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? "Submitting..." : "Book My Free Demo"}
                    </motion.button>
                    <p className="text-center text-white/30 text-xs">
                      We&apos;ll confirm your slot within 2 hours via WhatsApp or email.
                    </p>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 flex flex-col items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">You&apos;re Booked!</h3>
                  <p className="text-white/65 text-sm max-w-xs leading-relaxed">
                    Thank you! We&apos;ll confirm your free demo session within 2 hours.
                    Check your email and WhatsApp.
                  </p>
                  <p className="text-gold font-bold text-lg mt-2">♟ Your journey begins now.</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

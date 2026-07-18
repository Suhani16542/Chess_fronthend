import Navbar          from "@/components/layout/Navbar";
import Footer          from "@/components/layout/Footer";
import HeroSection     from "@/components/sections/HeroSection";
import BookDemo        from "@/components/sections/BookDemo";
import CoachProfile    from "@/components/sections/CoachProfile";
import TrustedBy       from "@/components/sections/TrustedBy";
import WhyChooseUs     from "@/components/sections/WhyChooseUs";
import LearningBenefits from "@/components/sections/LearningBenefits";
import CourseCards     from "@/components/sections/CourseCards";
import LearningJourney from "@/components/sections/LearningJourney";
import CoachCards      from "@/components/sections/CoachCards";
import Testimonials    from "@/components/sections/Testimonials";
import Pricing         from "@/components/sections/Pricing";
import StandingHeroes  from "@/components/sections/StandingHeroes";
import FAQ             from "@/components/sections/FAQ";
import FinalCTA        from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1 — Hero */}
        <HeroSection />

        {/* 2 — Book Free Demo */}
        <BookDemo />

        {/* 3 — Coach Profile */}
        <CoachProfile />

        {/* 4 — Trusted by */}
        <TrustedBy />

        {/* 5 — Why Choose Us */}
        <WhyChooseUs />

        {/* 6 — Learning Benefits */}
        <LearningBenefits />

        {/* 7 — Programs */}
        <CourseCards />

        {/* 8 — Learning Journey */}
        <LearningJourney />

        {/* 9 — Meet Our Coaches */}
        <CoachCards />

        {/* 10 — Student Success Stories */}
        <Testimonials />

        {/* 11 — Pricing Plans */}
        <Pricing />

        {/* 12 — Standing Heroes */}
        <StandingHeroes />

        {/* 13 — FAQ */}
        <FAQ />

        {/* 14 — Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

import { Suspense, lazy, useState, useEffect } from "react";

const ServicesSection = lazy(() => import("../components/sections/ServicesSection"));
const PortfolioSection = lazy(() => import("../components/sections/PortfolioSection"));
const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const ContactSection = lazy(() => import("../components/sections/ContactSection"));

import HeroSection from "../components/sections/HeroSection";

function Loader({ fading }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center
      bg-[#0D0D0D] transition-opacity duration-500 
      ${fading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37]/25"></div>
        <div className="absolute inset-0 rounded-full border-t-4 border-[#D4AF37] animate-spin"></div>
      </div>
      <p className="text-[#F5EDE3]/80 mt-4 text-lg">Preparing Awesomeness…</p>
    </div>
  );
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fading, setFading] = useState(false);

  const [showServices, setShowServices] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // ✅ Loader fade logic (black background protection)
  useEffect(() => {
    document.body.style.backgroundColor = "#0D0D0D";
    document.body.style.overflow = "hidden";

    const timer1 = setTimeout(() => {
      setFading(true);

      const timer2 = setTimeout(() => {
        setIsLoaded(true);
        document.body.style.overflow = "";
        document.body.style.backgroundColor = "#0D0D0D";
      }, 500);

      return () => clearTimeout(timer2);
    }, 200);

    return () => clearTimeout(timer1);
  }, []);

  // ✅ Improved Lazy Loading (smooth, preloading before visible)
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "300px", // 👈 preload ~300px before section is visible
      threshold: 0.1,
    };

    const observeSection = (id, callback) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 👇 Use requestIdleCallback for smoother performance if available
            if ("requestIdleCallback" in window) {
              requestIdleCallback(() => callback(true));
            } else {
              setTimeout(() => callback(true), 100);
            }
          }
        });
      }, options);

      observer.observe(el);
    };

    observeSection("services-trigger", setShowServices);
    observeSection("portfolio-trigger", setShowPortfolio);
    observeSection("about-trigger", setShowAbout);
    observeSection("contact-trigger", setShowContact);
  }, []);

  return (
    <>
      {/* Loader */}
      {!isLoaded && <Loader fading={fading} />}

      {/* Black overlay to prevent white flash */}
      {!isLoaded && <div className="fixed inset-0 z-[9998] bg-[#0D0D0D]" />}

      <div
        className={`relative z-10 bg-[#0D0D0D] text-white transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <HeroSection />

        {/* ↓↓↓ Section Triggers ↓↓↓ */}
        <div id="services-trigger" className="h-6"></div>
        {showServices && (
          <Suspense fallback={<div className="min-h-[50vh] bg-[#0D0D0D]" />}>
            <ServicesSection lazyImage />
          </Suspense>
        )}

        <div id="portfolio-trigger" className="h-6"></div>
        {showPortfolio && (
          <Suspense fallback={<div className="min-h-[50vh] bg-[#0D0D0D]" />}>
            <PortfolioSection lazyImage />
          </Suspense>
        )}

        <div id="about-trigger" className="h-6"></div>
        {showAbout && (
          <Suspense fallback={<div className="min-h-[50vh] bg-[#0D0D0D]" />}>
            <AboutSection lazyImage />
          </Suspense>
        )}

        <div id="contact-trigger" className="h-6"></div>
        {showContact && (
          <Suspense fallback={<div className="min-h-[50vh] bg-[#0D0D0D]" />}>
            <ContactSection lazyImage />
          </Suspense>
        )}
      </div>
    </>
  );
}

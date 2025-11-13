import { Suspense, lazy, useState, useEffect } from "react";

const ServicesSection = lazy(() => import("../components/sections/ServicesSection"));
const PortfolioSection = lazy(() => import("../components/sections/PortfolioSection"));
const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const ContactSection = lazy(() => import("../components/sections/ContactSection"));

import HeroSection from "../components/sections/HeroSection";

/* ======================== Loader ======================== */
function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0D0D0D]">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37]/25"></div>
        <div className="absolute inset-0 rounded-full border-t-4 border-[#D4AF37] animate-spin"></div>
      </div>
      <p className="text-[#F5EDE3]/80 mt-4 text-lg">Preparing Awesomeness…</p>
    </div>
  );
}

/* ======================== Home Page ======================== */
export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  // SMART LOADER LOGIC
  useEffect(() => {
    document.body.style.backgroundColor = "#0D0D0D";
    document.body.style.overflow = "hidden";

    // show loader only if load takes >120ms
    const slowLoaderTimer = setTimeout(() => {
      setShowLoader(true);
    }, 120);

    // mark page loaded
    const readyTimer = setTimeout(() => {
      setIsLoaded(true);
      setShowLoader(false);
      document.body.style.overflow = "";
    }, 250);

    return () => {
      clearTimeout(slowLoaderTimer);
      clearTimeout(readyTimer);
    };
  }, []);

  /* ================= Lazy Section Loading ================= */
  const [showServices, setShowServices] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "300px",
      threshold: 0.1,
    };

    const observeSection = (id, callback) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if ("requestIdleCallback" in window) {
              requestIdleCallback(() => callback(true));
            } else {
              setTimeout(() => callback(true), 80);
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
      {/* Loader (only if slow load) */}
      {showLoader && !isLoaded && <Loader />}

      {/* Fix white flash */}
      {!isLoaded && <div className="fixed inset-0 z-[9998] bg-[#0D0D0D]" />}

      {/* MAIN CONTENT */}
      <div
        className={`relative z-10 bg-[#0D0D0D] text-white transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <HeroSection />

        {/* Lazy load triggers */}
        <div id="services-trigger" className="h-6"></div>
        {showServices && (
          <Suspense fallback={<div className="min-h-[40vh] bg-[#0D0D0D]" />}>
            <ServicesSection lazyImage />
          </Suspense>
        )}

        <div id="portfolio-trigger" className="h-6"></div>
        {showPortfolio && (
          <Suspense fallback={<div className="min-h-[40vh] bg-[#0D0D0D]" />}>
            <PortfolioSection lazyImage />
          </Suspense>
        )}

        <div id="about-trigger" className="h-6"></div>
        {showAbout && (
          <Suspense fallback={<div className="min-h-[40vh] bg-[#0D0D0D]" />}>
            <AboutSection lazyImage />
          </Suspense>
        )}

        <div id="contact-trigger" className="h-6"></div>
        {showContact && (
          <Suspense fallback={<div className="min-h-[40vh] bg-[#0D0D0D]" />}>
            <ContactSection lazyImage />
          </Suspense>
        )}
      </div>
    </>
  );
}

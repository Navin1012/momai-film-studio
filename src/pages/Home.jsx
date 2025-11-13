import { Suspense, lazy, useState, useEffect } from "react";

// Lazy load sections
const HeroSection = lazy(() => import("../components/sections/HeroSection"));
const ServicesSection = lazy(() => import("../components/sections/ServicesSection"));
const PortfolioSection = lazy(() => import("../components/sections/PortfolioSection"));
const AboutSection = lazy(() => import("../components/sections/AboutSection"));
const ContactSection = lazy(() => import("../components/sections/ContactSection"));

// Loader
function Loader({ fading }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center text-center space-y-6 
      bg-[#0D0D0D] transition-opacity duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] 
      ${fading ? "opacity-0 pointer-events-none" : "opacity-100"}`}
    >
      {/* Golden Ring Loader */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24">
        <div className="absolute inset-0 rounded-full border-4 border-[#D4AF37]/25"></div>
        <div className="absolute inset-0 rounded-full border-t-4 border-[#D4AF37] animate-spin-slow"></div>
        <div className="absolute inset-0 rounded-full blur-2xl bg-[#D4AF37]/20"></div>
      </div>

      <p className="text-[#F5EDE3]/90 text-lg sm:text-xl font-medium tracking-wide relative overflow-hidden before:absolute before:inset-0 before:animate-[shine_1.8s_linear_infinite] before:bg-[linear-gradient(90deg,transparent,rgba(212,175,55,0.3),transparent)]">
        Loading Awesomeness...
      </p>

      <style>
        {`
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 2.2s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // ⚡ FAST Loader Removal (500–600ms)
    setTimeout(() => {
      setFading(true);
      setTimeout(() => {
        setIsLoaded(true);
        document.body.style.overflow = "";
      }, 400);
    }, 150);

    // ⚡ Background Image Preloading (Non-blocking)
    import("../data/services").then((m) => {
      const services = m.default || [];
      services.forEach((s) => {
        const img = new Image();
        img.src = s.image;
      });
    });

    import("../data/gallery").then((m) => {
      const gallery = m.default || [];
      gallery.forEach((g) => {
        const img = new Image();
        img.src = g.img;
      });
    });
  }, []);

  return (
    <>
      {/* Loader */}
      {!isLoaded && <Loader fading={fading} />}

      {/* Main Content */}
      <div
        className={`relative z-10 bg-[#0D0D0D] text-white overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        style={{
          willChange: "opacity, transform",
          transform: "translate3d(0, 0, 0)",
        }}
      >
        <Suspense fallback={null}>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <ContactSection />
        </Suspense>
      </div>

      {/* Dark Background behind loader */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-[#0D0D0D] z-[9998] pointer-events-none" />
      )}
    </>
  );
}

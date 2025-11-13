import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import gallery from "../../data/gallery";

export default function PortfolioSection() {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // 📱 Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🚀 Parallel preload of visible images
  useEffect(() => {
    const visible = gallery.slice(0, 6);
    const promises = visible.map((item, i) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = item.img;
        img.decoding = "async";
        img.loading = "lazy";
        img.onload = img.onerror = () => resolve(i);
      });
    });

    Promise.all(promises).then((indexes) => {
      setLoadedImages(new Set(indexes));
    });
  }, [isMobile]);

  // 🎨 SIMPLE FADE-IN ANIMATION (No sliding up)
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#0D0D0D] via-[#111] to-[#0D0D0D] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />

      {/* === Heading === */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-14 relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] tracking-wide">
          Portfolio Highlights
        </h2>
        <p className="text-[#F5EDE3]/80 mt-3 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
          A glimpse into our artistry — where emotion meets perfection.
        </p>
      </motion.div>

      {/* === Gallery Grid === */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{}} // ❗ No staggerChildren (no extra animation)
      >
        {gallery.slice(0, 6).map((img, index) => {
          const loaded = loadedImages.has(index);

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group overflow-hidden rounded-xl bg-[#111]/90 border border-[#D4AF37]/10 
              shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]
              transition-all duration-500 transform-gpu"
            >
              {/* 🦴 Placeholder skeleton */}
              {!loaded && (
                <div className="w-full h-[250px] sm:h-[320px] md:h-[360px] bg-[#1b1b1b] flex items-center justify-center">
                  <div className="w-3/4 h-3/4 bg-gradient-to-r from-[#222] via-[#2a2a2a] to-[#222] rounded-lg animate-pulse"></div>
                </div>
              )}

              {/* 🎞️ Actual Image */}
              <img
                src={img.img}
                alt={img.name}
                decoding="async"
                loading="lazy"
                fetchpriority="low"
                className={`w-full h-[250px] sm:h-[320px] md:h-[360px] object-cover transform-gpu rounded-xl 
                  transition-all duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.04]
                  ${loaded ? "opacity-100" : "opacity-0"}`}
                style={{
                  transitionProperty: "opacity, transform",
                }}
              />

              {/* ✨ Golden Effect */}
              {loaded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.3, 0.1, 0],
                    transition: { duration: 1.2 },
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent pointer-events-none"
                />
              )}

              {/* === Overlay Caption === */}
              {loaded && (
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
                  <p className="text-[#F5EDE3] text-sm sm:text-base px-4 py-3">
                    {img.name}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* === View More Button === */}
      {loadedImages.size >= 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-[#0D0D0D] bg-[#D4AF37] font-semibold px-7 sm:px-9 py-3 sm:py-3.5 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-[1.03] transition-all duration-300"
          >
            View Full Portfolio →
          </Link>
        </motion.div>
      )}
    </section>
  );
}

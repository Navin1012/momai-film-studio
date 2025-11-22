import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import gallery from "../../data/gallery";
import logoImg from "../../assets/logo/momai.png";

export default function PortfolioSection() {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [showImage, setShowImage] = useState({}); // delayed image visibility

  // delay image reveal only ONCE per item
  useEffect(() => {
    gallery.slice(0, 6).forEach((_, index) => {
      setTimeout(() => {
        setShowImage((prev) => ({ ...prev, [index]: true }));
      }, 600); // delay time
    });
  }, []);

  // FADE animation
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b 
      from-[#0D0D0D] via-[#111] to-[#0D0D0D] relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,
        rgba(212,175,55,0.05),transparent_70%)] pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-14 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
          Portfolio Highlights
        </h2>
        <p className="text-[#F5EDE3]/80 mt-3 max-w-xl mx-auto text-lg">
          A glimpse into our artistry — where emotion meets perfection.
        </p>
      </motion.div>

      {/* GALLERY GRID */}
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        gap-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {gallery.slice(0, 6).map((img, index) => {
          const isLoaded = loadedImages.has(index);

          return (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group overflow-hidden rounded-xl 
              bg-[#111]/90 border border-[#D4AF37]/10 shadow-[0_0_15px_rgba(212,175,55,0.15)]
              hover:shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-500"
            >
              <div className="relative overflow-hidden h-[250px] sm:h-[320px] md:h-[360px]">

                {/* 🔥 Loader */}
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center 
                    bg-black/20 backdrop-blur-[1px] z-20">
                    <motion.img
                      src={logoImg}
                      initial={{ opacity: 0.3, scale: 0.85 }}
                      animate={{
                        opacity: [0.4, 1, 0.4],
                        scale: [0.85, 1, 0.85],
                      }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                      }}
                      className="w-50 h-50 object-contain drop-shadow-[0_0_20px_rgba(212,175,55,0.45)]"
                    />
                  </div>
                )}

                {/* Actual Image */}
                {showImage[index] && (
                  <img
                    src={img.img}
                    alt={img.name}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => {
                      setLoadedImages((prev) => new Set(prev).add(index));
                    }}
                    className={`w-full h-full object-cover rounded-xl transition-opacity duration-700 
                      ${isLoaded ? "opacity-100" : "opacity-0"}`}
                  />
                )}
              </div>

              {/* Caption */}
              {isLoaded && (
                <div className="absolute inset-0 flex items-end 
                  bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <p className="text-[#F5EDE3] text-base px-4 py-3">
                    {img.name}
                  </p>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* VIEW MORE BUTTON */}
      {loadedImages.size >= 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/portfolio"
            className="px-9 py-3 bg-[#D4AF37] text-black rounded-full 
            font-semibold shadow-lg hover:scale-105 transition"
          >
            View Full Portfolio →
          </Link>
        </motion.div>
      )}
    </section>
  );
}

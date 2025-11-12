import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gallery from "../data/gallery";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);
  const [category, setCategory] = useState("All");

  const categories = ["All", "Wedding", "Pre-Wedding", "Engagement"];

  const filteredImages =
    category === "All"
      ? gallery
      : gallery.filter((item) => item.category === category);

  return (
    <section className="py-16 px-6 bg-[#0D0D0D]">

      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
        >
          Our <span className="text-[#D4AF37] relative">
            Portfolio
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute bottom-0 left-0 h-1 bg-[#D4AF37]"
            />
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#F5EDE3]/90 max-w-2xl mx-auto mt-6 text-xl leading-relaxed"
        >
          Discover our beautifully curated photography experiences that capture life's most precious moments
        </motion.p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center bg-[#1A1A1A] border border-[#D4AF37]/40 rounded-full px-3 py-2 shadow-[0_0_25px_rgba(212,175,55,0.2)]">
          {categories.map((cat) => (
            <motion.button
              whileTap={{ scale: 0.92 }}
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${category === cat
                ? "bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                : "text-[#D4AF37] hover:bg-[#D4AF37]/20"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </div>


      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
        <AnimatePresence>
          {filteredImages.map((img, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer"
              onClick={() => setSelected(img.img)}
            >
              <img
                src={img.img}
                alt={img.name}
                className="w-full rounded-xl object-cover shadow-[0_0_25px_rgba(212,175,55,0.25)] 
                group-hover:shadow-[0_0_45px_rgba(212,175,55,0.45)] transition-all duration-700 group-hover:scale-[1.05]"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 
transition-all duration-500 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl">

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-[#F5EDE3] text-base font-medium tracking-wide px-4 py-3"
                >
                  {img.name}
                </motion.p>

              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox Preview */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selected}
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-[0_0_50px_#D4AF37]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

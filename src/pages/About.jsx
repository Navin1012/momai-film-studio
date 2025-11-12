import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import aboutImg from "../assets/about.jpg";

export default function About() {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  const [headingInView, setHeadingInView] = useState(false);
  const [imageInView, setImageInView] = useState(false);
  const [textInView, setTextInView] = useState(false);
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const observers = [];

    const createObserver = (ref, setInView) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        },
        { threshold: 0.3 }
      );

      if (ref.current) {
        observer.observe(ref.current);
        observers.push(observer);
      }
    };

    createObserver(headingRef, setHeadingInView);
    createObserver(imageRef, setImageInView);
    createObserver(textRef, setTextInView);
    createObserver(statsRef, setStatsInView);

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  // Animation variants (same as before)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -80,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const statItemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.8
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.8
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const floatingVariants = {
    floating: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 bg-[#0D0D0D] relative overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      {/* Floating Particles */}
      <motion.div
        variants={floatingVariants}
        animate="floating"
        className="absolute top-1/4 left-10 w-2 h-2 bg-[#D4AF37] rounded-full opacity-60"
      />
      <motion.div
        variants={floatingVariants}
        animate="floating"
        transition={{ delay: 1 }}
        className="absolute top-3/4 right-20 w-3 h-3 bg-[#F5EDE3] rounded-full opacity-40"
      />

      {/* Heading */}
      <motion.div
        ref={headingRef}
        variants={headingVariants}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"}
        className="text-center mb-20 relative z-10"
      >
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
        >
          About <span className="text-[#D4AF37] relative">
            Our Studio
            <motion.span
              initial={{ width: 0 }}
              animate={headingInView ? { width: "100%" } : { width: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute bottom-0 left-0 h-1 bg-[#D4AF37] rounded-full"
            />
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2 }}
          className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto rounded-full"
        />
      </motion.div>

      {/* Image + Content Layout */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left: Enhanced Image */}
        <motion.div
          ref={imageRef}
          variants={imageVariants}
          initial="hidden"
          animate={imageInView ? "visible" : "hidden"}
          className="relative group"
        >
          {/* Main Image Container */}
          <div className="relative">
            <motion.img
              src={aboutImg}
              alt="Photographer at work"
              className="w-full rounded-2xl object-cover shadow-2xl shadow-black/50 relative z-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />

            {/* Animated Border */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={imageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#F5EDE3] opacity-20 blur-sm -z-10"
            />

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <motion.div
                initial={{ x: "-100%", skewX: "-20deg" }}
                whileHover={{ x: "200%", skewX: "-20deg" }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </div>
          </div>

          {/* Floating Badge */}

          {/* Floating Badge (above image, same position) */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={imageInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
            transition={{ delay: 1, duration: 0.6, type: "spring" }}
            className="absolute -top-4 -right-4 z-20 bg-[#D4AF37] text-[#0D0D0D] px-6 py-3 rounded-full font-bold text-lg shadow-2xl"
          >
            Since 2018
          </motion.div>

        </motion.div>

        {/* Right: Enhanced Text Content */}
        <motion.div
          ref={textRef}
          variants={containerVariants}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          className="space-y-8"
        >
          <motion.div
            variants={textVariants}
            className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF37]/20"
          >
            <p className="text-xl leading-relaxed text-[#F5EDE3]/90 mb-6">
              We are a <span className="text-[#D4AF37] font-semibold">luxury wedding photography studio</span> known for capturing the raw, emotional, and elegant moments that make your celebration unforgettable.
            </p>

            <p className="text-xl leading-relaxed text-[#F5EDE3]/90">
              Holding over <span className="text-[#D4AF37] font-bold">5+ years of experience</span>, our team blends cinematic compositions, natural lighting, and timeless storytelling to create visuals that feel warm, real, and heartfelt.
            </p>
          </motion.div>

          <motion.div
            variants={textVariants}
            className="bg-[#1A1A1A]/60 backdrop-blur-sm rounded-2xl p-8 border border-[#D4AF37]/20"
          >
            <p className="text-xl leading-relaxed text-[#F5EDE3]/90 mb-6">
              Every love story is beautifully unique — and we ensure yours is documented with depth, passion, and grace. From grand wedding celebrations to intimate couple portraits.
            </p>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={textInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 mt-8 pt-6 border-t border-[#D4AF37]/30"
            >
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-2xl">
                ✨
              </div>
              <div>
                <p className="text-[#D4AF37] italic text-2xl font-light">StudioLens</p>
                <p className="text-[#F5EDE3]/60 text-sm">Photography Studio</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Stats Section */}
      <motion.div
        ref={statsRef}
        variants={containerVariants}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
      >
        {[
          { number: "200+", text: "Weddings Captured" },
          { number: "5+", text: "Years Experience" },
          { number: "98%", text: "Happy Clients" },
          { number: "1200+", text: "Cinematic Shots" }
        ].map((stat, index) => (
          <motion.div
            key={stat.text}
            custom={index}
            variants={statItemVariants}
            className="text-center group"
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-8 rounded-2xl border border-[#D4AF37]/20 shadow-2xl shadow-black/50 relative overflow-hidden"
            >
              {/* Hover effect background */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent"
              />

              <motion.h3
                className="text-5xl font-bold text-[#D4AF37] mb-3 relative z-10"
                initial={{ scale: 0 }}
                animate={statsInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-[#F5EDE3]/80 text-lg font-medium relative z-10">
                {stat.text}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced CTA Button */}
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        animate={statsInView ? "visible" : "hidden"}
        whileHover="hover"
        whileTap="tap"
        className="text-center mt-16 relative z-10"
      >
        <motion.a
          href="/contact"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-[#F5EDE3] text-[#0D0D0D] font-bold text-lg px-12 py-4 rounded-full tracking-wide shadow-2xl relative overflow-hidden group"
        >
          {/* Shine effect */}
          <motion.div
            initial={{ x: "-100%", skewX: "-20deg" }}
            whileHover={{ x: "200%", skewX: "-20deg" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />

          <span className="relative z-10">Book Your Wedding Shoot</span>
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="relative z-10"
          >
            →
          </motion.span>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1 }}
          className="text-[#F5EDE3]/60 mt-4 text-sm"
        >
          Limited dates available for 2024
        </motion.p>
      </motion.div>

    </section>
  );
}
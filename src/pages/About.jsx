import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

export default function About() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  // ✅ SUPER OPTIMIZED — Only 1 observer for whole section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // ✅ Light fade animation only
  const fadeUp = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-[#0D0D0D] relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4AF37]/10 blur-3xl opacity-40 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/10 blur-3xl opacity-40 translate-x-1/3 translate-y-1/3"></div>

      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          About <span className="text-[#D4AF37]">Our Studio</span>
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mt-4"></div>
      </motion.div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <img
            src={aboutImg}
            alt="Photographer"
            className="w-full rounded-2xl shadow-xl"
            loading="lazy"
          />

          {/* Simple badge (no animation) */}
          <div className="absolute -top-4 -right-4 bg-[#D4AF37] text-[#0D0D0D] px-6 py-2 rounded-full font-bold shadow-xl">
            Since 2018
          </div>
        </motion.div>

        {/* Text Left */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6 bg-[#1A1A1A]/50 p-8 rounded-2xl border border-[#D4AF37]/20"
        >
          <p className="text-[#F5EDE3]/90 text-lg leading-relaxed">
            We are a <span className="text-[#D4AF37] font-semibold">luxury wedding photography studio</span> known
            for capturing the emotional and timeless moments of your celebration.
          </p>

          <p className="text-[#F5EDE3]/90 text-lg leading-relaxed">
            With <span className="text-[#D4AF37] font-semibold">5+ years of industry experience</span>, our team
            blends cinematic lighting with natural storytelling to create deep and memorable visuals.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {[
          { num: "200+", text: "Weddings Captured" },
          { num: "5+", text: "Years Experience" },
          { num: "98%", text: "Happy Clients" },
          { num: "1200+", text: "Cinematic Shots" }
        ].map((s, i) => (
          <div
            key={i}
            className="bg-[#1A1A1A]/60 text-center rounded-xl p-6 border border-[#D4AF37]/20"
          >
            <h3 className="text-4xl font-bold text-[#D4AF37]">{s.num}</h3>
            <p className="text-[#F5EDE3]/80 mt-2">{s.text}</p>
          </div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="text-center mt-16"
      >
        <a
          href="/contact"
          className="inline-block bg-[#D4AF37] text-[#0D0D0D] px-10 py-4 rounded-full font-bold text-lg shadow-lg 
          hover:scale-105 transition-transform duration-300"
        >
          Book Your Wedding Shoot →
        </a>
      </motion.div>
    </section>
  );
}

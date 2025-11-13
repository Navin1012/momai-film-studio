import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";
export default function About() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  /* --------------------------
      INTERSECTION OBSERVER
  ---------------------------*/
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  /* --------------------------
      FADE ANIMATION
  ---------------------------*/
  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-20 px-6 bg-[#0D0D0D] relative overflow-hidden"
    >
      {/* Soft Gold Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-[#D4AF37]/10 blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      {/* ================= HEADING ================= */}
      <div className="text-center mb-20 mt-12">
        <h2 className="text-5xl md:text-6xl font-bold text-white">
          About <span className="text-[#D4AF37]">Our Studio</span>
        </h2>

        {/* Animated Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[#F5EDE3]/80 max-w-2xl mx-auto mt-4 text-lg"
        >
          Where emotional storytelling meets world-class photography.
        </motion.p>
      </div>

      {/* ================= IMAGE + INTRO TEXT ================= */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative w-full"
        >
          <img
            src={aboutImg}
            className="w-full rounded-2xl shadow-2xl object-cover"
            alt="Studio"
            loading="lazy"
          />
        </motion.div>

        {/* Description */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-6 bg-[#1A1A1A]/50 p-8 rounded-2xl border border-[#D4AF37]/20"
        >
          <p className="text-[#F5EDE3]/90 text-lg leading-relaxed">
            We are a{" "}
            <span className="text-[#D4AF37] font-semibold">
              premium luxury wedding photography team
            </span>{" "}
            capturing real emotions with cinematic storytelling.
          </p>

          <p className="text-[#F5EDE3]/90 text-lg leading-relaxed">
            With{" "}
            <span className="text-[#D4AF37] font-semibold">
              500+ successful events
            </span>
            , our expertise blends soft natural tones, perfect lighting, and authentic expressions.
          </p>

          <p className="text-[#F5EDE3]/70 text-md leading-relaxed">
            Your memories deserve more than just photos—they deserve an experience that lasts forever.
          </p>
        </motion.div>
      </div>

      {/* ================= PHILOSOPHY ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto mt-24 text-center"
      >
        <h3 className="text-3xl text-[#D4AF37] font-bold mb-4">
          Our Philosophy
        </h3>
        <p className="text-[#F5EDE3]/80 text-lg leading-relaxed">
          Every couple is unique. Every story is different.
          We preserve emotions in their purest form—
          <span className="text-[#D4AF37]"> joy, excitement, tears, laughter & love.</span>
        </p>
      </motion.div>

      {/* ================= 3 STEP PROCESS ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-10"
      >
        {[
          {
            step: "01",
            title: "Consultation",
            text: "We understand your vision, style and expectations.",
          },
          {
            step: "02",
            title: "Planning",
            text: "Location, outfits, lighting—everything is pre-designed.",
          },
          {
            step: "03",
            title: "Execution",
            text: "Cinematic capture with zero rush & full comfort.",
          },
        ].map((s) => (
          <div
            key={s.step}
            className="text-center bg-[#1A1A1A]/60 p-8 rounded-xl border border-[#D4AF37]/20"
          >
            <h3 className="text-5xl font-bold text-[#D4AF37]">{s.step}</h3>
            <h4 className="text-xl text-white font-semibold mt-3">
              {s.title}
            </h4>
            <p className="text-[#F5EDE3]/70 mt-2">{s.text}</p>
          </div>
        ))}
      </motion.div>

      {/* ================= TEAM ================= */}
    
<motion.div
  variants={fadeUp}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  className="max-w-6xl mx-auto mt-24 text-center"
>
  <h3 className="text-3xl text-[#D4AF37] font-bold mb-4">Meet Our Team</h3>
  <p className="text-[#F5EDE3]/80 text-lg mb-10">
    A passionate group of artists—photographers, cinematographers & editors.
  </p>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
    {[
      {
        role: "Lead Photographer",
        img: team1,
        exp: "12+ years experience",
      },
      {
        role: "Creative Director",
        img: team2,
        exp: "10+ years experience",
      },
      {
        role: "Senior Editor",
        img: team3,
        exp: "8+ years experience",
      },
    ].map((member, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
        className="
          bg-[#1A1A1A]/60 p-6 rounded-xl border border-[#D4AF37]/20 
          shadow-[0_0_20px_rgba(212,175,55,0.15)]
          hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]
          transition-all
        "
      >
        {/* Team Image */}
        <div className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#D4AF37]/40">
          <img
            src={member.img}
            alt={member.role}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Role */}
        <h4 className="text-white font-semibold text-lg">{member.role}</h4>

        {/* Experience */}
        <p className="text-[#F5EDE3]/70 text-sm mt-1">{member.exp}</p>
      </motion.div>
    ))}
  </div>
</motion.div>


      {/* ================= AWARDS ================= */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto mt-24 text-center"
      >
        <h3 className="text-3xl text-[#D4AF37] font-bold mb-4">
          Awards & Featured In
        </h3>
        <p className="text-[#F5EDE3]/80 text-lg mb-10">
          Recognized for excellence in luxury wedding photography.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Wedding Vogue",
            "India Wedding Co",
            "Bride Story",
            "CineWed Awards",
          ].map((brand) => (
            <div
              key={brand}
              className="bg-[#1A1A1A]/50 p-6 rounded-xl border border-[#D4AF37]/20"
            >
              <p className="text-white font-semibold">{brand}</p>
            </div>
          ))}
        </div>
      </motion.div>

     {/* ================= CTA ================= */}
<motion.div
  variants={fadeUp}
  initial="hidden"
  animate={inView ? "visible" : "hidden"}
  className="text-center mt-20"
>
  <a
    href="/contact"
    className="
      inline-block 
      bg-[#D4AF37] text-black 
      px-6 py-3        /* mobile */
      sm:px-8 sm:py-3  /* small screens */
      md:px-10 md:py-4 /* desktop */
      rounded-full 
      text-base sm:text-lg md:text-xl font-semibold 
      shadow-xl 
      hover:scale-105 
      transition-all duration-300
    "
  >
    Book Your Wedding Shoot →
  </a>
</motion.div>

    </section>
  );
}

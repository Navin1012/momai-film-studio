import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import services from "../data/services";
import { Star, Heart, Camera, Users, Clock, Award } from "lucide-react";

export default function Services() {
  const [openId, setOpenId] = useState(null);

  const toggleDetails = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  // Smooth Scroll Fix (Works on ALL mobiles)
  const smoothScrollTop = () => {
    const start = window.scrollY;
    const duration = 500;
    const startTime = performance.now();

    const easeOutExpo = (t) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const animate = (now) => {
      const time = Math.min(1, (now - startTime) / duration);
      const eased = easeOutExpo(time);

      window.scrollTo(0, start * (1 - eased));

      if (time < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  return (
    <div className="bg-[#0D0D0D] text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-[75vh] flex items-center justify-center bg-cover bg-center pb-4"
        style={{ backgroundImage: "url('/images/services-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0D0D0D]" />

        <div className="relative px-6 text-center max-w-4xl z-10">
          <motion.h1
            initial={{ opacity: 0.5, y: 1 }}
            animate={{ opacity: 1.9, y: 0.5 }}
            transition={{ duration: 1.9 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          >
            Capturing <span className="text-[#D4AF37]">Stories</span> That Last Forever
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-5 text-[#F5EDE3]/80 text-lg"
          >
            We don’t just take photographs — we capture emotions.
          </motion.p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
<section className="py-10 px-6 bg-[#0D0D0D]">
  <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

    {services.map((s, i) => (
      <motion.div
        key={s.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: i * 0.35, ease: "easeOut" }}
        className="relative rounded-2xl border border-[#D4AF37]/20 bg-[#111]
        shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
        style={{ minHeight: "430px" }}
      >

        {/* IMAGE (fade-out on open) */}
        <motion.div
          animate={{ opacity: openId === s.id ? 0 : 1 }}
          transition={{ duration: 0.25 }}
          className="h-52 w-full overflow-hidden"
        >
          <img
            src={s.image}
            className="w-full h-full object-cover transition-transform duration-700
            hover:scale-105"
            alt={s.name}
          />
        </motion.div>

        {/* BASIC CONTENT */}
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-[#D4AF37]">{s.name}</h3>

          <p className="text-[#F5EDE3]/80 text-sm mt-2">{s.description}</p>

          <button
            onClick={() => toggleDetails(s.id)}
            className="mt-5 px-6 py-2 border border-[#D4AF37] text-[#D4AF37]
            rounded-full font-semibold hover:bg-[#D4AF37] hover:text-black
            transition-all duration-300"
          >
            {openId === s.id ? "Hide Details" : "Learn More"}
          </button>
        </div>

        {/* DETAILS OVERLAY – SUPER LIGHT & FAST */}
        <AnimatePresence>
          {openId === s.id && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 bg-[#0D0D0D]/95 p-6
              rounded-2xl border border-[#D4AF37]/30 overflow-y-auto"
            >
              <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">{s.name}</h3>

              <p className="text-[#F5EDE3]/80 text-sm mb-3">
                {s.fullDescription}
              </p>

              <h4 className="text-[#D4AF37] font-semibold text-sm mb-2">
                Included Features:
              </h4>

              <ul className="text-[#F5EDE3]/80 text-sm space-y-1 mb-5">
                {s.features.map((f, idx) => (
                  <li key={idx}>✔️ {f}</li>
                ))}
              </ul>

              <button
                onClick={() => toggleDetails(s.id)}
                className="px-6 py-2 bg-[#D4AF37] text-black rounded-full font-semibold
                hover:scale-105 transition-all duration-200"
              >
                Close
              </button>

            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    ))}

  </div>
</section>


      {/* ================= REST CONTENT SAME (optimized spacing) ================= */}

      {/* WHY CHOOSE US */}
      <section className="py-12 bg-[#111]/80 border-t border-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#D4AF37]">Why Choose Us?</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[Camera, Users, Clock, Award, Star, Heart].map((Icon, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-5 bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-xl 
                hover:shadow-[0_0_25px_rgba(212,175,55,0.25)]"
              >
                <Icon className="text-[#D4AF37] mx-auto mb-2" />
                <p className="text-[#F5EDE3]/80 text-sm">
                  Premium quality & professional aesthetic.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Testimonials ===== */}
      <section className="py-14 bg-[#0D0D0D]/90 border-t border-[#D4AF37]/10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37]">What Our Clients Say</h2>
        <p className="text-[#F5EDE3]/80 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
          Real stories from people who trusted us with their memories.
        </p>

        <div className="max-w-5xl mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {[
            { name: "Riya & Kunal", review: "Our wedding photos are magical! Every image feels cinematic yet intimate." },
            { name: "Arjun Mehta", review: "The pre-wedding shoot exceeded expectations — professional, creative, and fun!" },
            { name: "Aarav Studios", review: "They captured our product launch event beautifully — elegant and powerful imagery!" },
          ].map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A]/70 border border-[#D4AF37]/20 p-6 rounded-xl hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] transition-all duration-500"
            >
              <p className="text-[#F5EDE3]/80 italic text-sm mb-4">“{r.review}”</p>
              <h4 className="text-[#D4AF37] font-semibold">{r.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Pricing Plans ===== */}
      <section className="py-14 bg-[#111]/90 border-t border-[#D4AF37]/10">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37]">Choose Your Package</h2>
          <p className="text-[#F5EDE3]/80 mt-3 max-w-2xl mx-auto text-base sm:text-lg">
            Transparent pricing, tailored experiences — choose what fits your story best.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { name: "Silver", price: "$499", desc: "Perfect for small events", features: ["2-hour session", "30 edited photos", "Online gallery"] },
              { name: "Gold", price: "$899", desc: "Ideal for weddings & pre-weddings", features: ["6-hour session", "100 edited photos", "Drone coverage", "Album included"] },
              { name: "Platinum", price: "$1299", desc: "Luxury full-day coverage", features: ["Full-day shoot", "200+ edited photos", "Cinematic video", "Custom album"] },
            ].map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#0D0D0D]/80 border border-[#D4AF37]/30 p-6 rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-500"
              >
                <h3 className="text-2xl font-semibold text-[#D4AF37] mb-1">{p.name}</h3>
                <p className="text-[#F5EDE3]/70 mb-3">{p.desc}</p>
                <p className="text-4xl font-bold text-white mb-5">{p.price}</p>
                <ul className="text-[#F5EDE3]/80 space-y-2 mb-5 text-sm">
                  {p.features.map((f) => <li key={f}>✔️ {f}</li>)}
                </ul>
                <a
                  href="/contact"
                  className="inline-block bg-[#D4AF37] text-[#0D0D0D] font-semibold px-6 py-2 rounded-full hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ Section ===== */}
      <section className="py-14 px-6 bg-[#0D0D0D]/95 border-t border-[#D4AF37]/10 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto text-left space-y-5">
          {[
            { q: "How soon will I get my photos?", a: "Final photos are delivered within 10–15 business days depending on project size." },
            { q: "Do you travel for destination shoots?", a: "Absolutely! We travel anywhere in India or abroad for shoots." },
            { q: "Can I customize a package?", a: "Yes, all packages are flexible and tailored to your vision." },
            { q: "Do you offer videography services?", a: "Yes, we offer cinematic video coverage and drone shots." },
          ].map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111]/70 border border-[#D4AF37]/20 rounded-xl p-5 hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all"
            >
              <h4 className="text-lg font-semibold text-[#D4AF37] mb-1">{faq.q}</h4>
              <p className="text-[#F5EDE3]/80 text-sm leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-14 bg-gradient-to-b from-[#111] to-[#0D0D0D] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Ready to Capture <span className="text-[#D4AF37]">Your Story?</span>
        </h2>
        <p className="text-[#F5EDE3]/80 max-w-xl mx-auto mt-3 text-base sm:text-lg">
          Let’s turn your special moments into timeless memories.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 px-8 py-3 bg-[#D4AF37] text-[#0D0D0D] font-semibold rounded-full hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300"
        >
          Book Your Session
        </a>
      </section>

      {/* SCROLL TOP BUTTON (ULTRA SMOOTH) */}
      <button
        onClick={smoothScrollTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F5EDE3] 
        rounded-xl shadow-xl flex items-center justify-center text-black hover:scale-105 transition"
      >
        ↑
      </button>

    </div>
  );
}

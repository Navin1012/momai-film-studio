import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";

import heroImg1 from "../assets/hero1.jpg";
import heroImg2 from "../assets/hero2.jpg";
import heroImg3 from "../assets/hero3.jpg";
import heroImg4 from "../assets/hero4.jpg";
import services from "../data/services";
import gallery from "../data/gallery";
import aboutImg from "../assets/about.jpg";

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      image: heroImg2,
      title: "Where Love Meets Art",
      highlight: "Love",
      description:
        "Your story deserves to be captured with beauty, depth and soul.",
    },
    {
      image: heroImg1,
      title: "Crafting Timeless Wedding Stories",
      highlight: "Timeless",
      description:
        "We transform your precious moments into elegant and emotional visual memories that last forever.",
    },
    {
      image: heroImg4,
      title: "Elegant. Emotional. Eternal.",
      highlight: "Eternal",
      description:
        "Celebrate your big day with visuals that speak love in every frame.",
    },
    {
      image: heroImg3,
      title: "Your Memories, Our Lens",
      highlight: "Memories",
      description:
        "We turn fleeting moments into eternal portraits you will treasure forever.",
    },
  ];

  // Contact form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <div className="bg-[#0D0D0D] text-white overflow-hidden">
    {/* ================= HERO SECTION ================= */}
<section className="relative overflow-hidden">
  {/* Background Image */}
  <motion.img
    key={slides[index].image}
    src={slides[index].image}
    className="absolute inset-0 w-full h-full object-cover brightness-[45%] contrast-[105%] saturate-[110%]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  />

  {/* Enhanced Dark Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>

  {/* Hero Content */}
  <div className="relative flex flex-col items-center justify-center text-center min-h-[95vh] px-6">
    <motion.h1
      key={slides[index].title}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white tracking-wide drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)]"
    >
      {slides[index].title.split(slides[index].highlight)[0]}
      <span className="text-[#D4AF37]">
        {" "}
        {slides[index].highlight}{" "}
      </span>
      {slides[index].title.split(slides[index].highlight)[1]}
    </motion.h1>

    <motion.p
      key={slides[index].description}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-[#F5EDE3]/90 max-w-2xl mb-10 text-lg leading-relaxed drop-shadow-[0_2px_5px_rgba(0,0,0,0.5)]"
    >
      {slides[index].description}
    </motion.p>

    <div className="flex flex-col sm:flex-row gap-4">
      <Link
        to="/contact"
        className="bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-[#e1c85c] transition-all tracking-wide"
      >
        Book Your Wedding Shoot
      </Link>
      <Link
        to="/portfolio"
        className="border border-[#D4AF37] text-[#D4AF37] font-semibold px-8 py-3 rounded-md hover:bg-[#D4AF37] hover:text-black transition-all tracking-wide"
      >
        View Portfolio
      </Link>
    </div>
  </div>
</section>


      {/* ================= SERVICES ================= */}
      <section className="py-20 px-6 bg-[#0D0D0D]">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-wide text-white">
            Our <span className="text-[#D4AF37]">Services</span>
          </h2>
          <p className="text-[#F5EDE3]/80 max-w-xl mx-auto mt-3 text-lg">
            We provide beautifully curated photography experiences designed to
            preserve your most meaningful moments.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              className="group bg-[#F5EDE3] rounded-xl overflow-hidden shadow-[0_0_25px_rgba(212,175,55,0.15)] hover:shadow-[0_0_45px_rgba(212,175,55,0.35)] transition-all duration-500"
            >
              <div className="overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-700"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-[#1A1A1A] tracking-wide">
                  {s.name}
                </h3>
                <p className="text-[#4A4A4A] mt-3 text-sm leading-relaxed">
                  {s.description}
                </p>
                <button className="mt-6 px-5 py-2 border border-[#D4AF37] text-[#D4AF37] font-semibold rounded-md tracking-wide hover:bg-[#D4AF37] hover:text-black transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PORTFOLIO PREVIEW ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0D0D0D] via-[#111] to-[#0D0D0D]">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
            Portfolio Highlights
          </h2>
          <p className="text-[#F5EDE3]/80 mt-3 max-w-xl mx-auto">
            A glimpse into our artistry — where emotion meets perfection.
          </p>
        </div>
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 md:columns-3 gap-5 space-y-5">
          {gallery.slice(0, 6).map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative group cursor-pointer"
            >
              <img
                src={img.img}
                alt={img.name}
                className="w-full rounded-xl object-cover shadow-[0_0_25px_rgba(212,175,55,0.25)] group-hover:shadow-[0_0_45px_rgba(212,175,55,0.45)] transition-all duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 flex items-end justify-start opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-xl">
                <p className="text-[#F5EDE3] text-base font-medium tracking-wide px-4 py-3">
                  {img.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-14">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-3 text-[#0D0D0D] bg-[#D4AF37] font-semibold px-8 py-3 rounded-full shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] hover:scale-[1.03] transition-all duration-300"
          >
            View Full Portfolio →
          </Link>
        </div>
      </section>

     {/* ================= ABOUT ================= */}
<section className="py-16 px-6 bg-[#0D0D0D] relative overflow-hidden">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <img
        src={aboutImg}
        alt="About Studio"
        className="w-full rounded-2xl object-cover shadow-2xl shadow-black/50"
      />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="space-y-8"
    >
      <h2 className="text-5xl font-bold mb-6">
        About <span className="text-[#D4AF37]">Our Studio</span>
      </h2>
      <p className="text-[#F5EDE3]/90 text-lg leading-relaxed">
        We are a <span className="text-[#D4AF37] font-semibold">luxury wedding photography studio</span> known for capturing the raw, emotional, and elegant moments that make your celebration unforgettable.
      </p>
      <p className="text-[#F5EDE3]/90 text-lg leading-relaxed">
        With <span className="text-[#D4AF37] font-bold">5+ years of experience</span>, our team combines cinematic compositions and natural lighting to craft timeless, emotional memories.
      </p>
    </motion.div>
  </div>
</section>

{/* ================= CONTACT ================= */}
<section className="py-16 px-6 bg-[#0D0D0D] relative overflow-hidden border-t border-[#D4AF37]/10">
  <div className="max-w-7xl mx-auto relative z-10">
    <motion.h2 className="text-5xl md:text-7xl font-bold text-center text-white mb-10">
      Get In <span className="text-[#D4AF37]">Touch</span>
    </motion.h2>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* Info Cards */}
      <div className="space-y-8">
        {[
          { icon: <Phone />, title: "Call Us", text: "+1 (555) 123-4567" },
          { icon: <Mail />, title: "Email", text: "hello@studiolens.com" },
          { icon: <MapPin />, title: "Visit", text: "123 Photography Lane" },
          { icon: <Clock />, title: "Hours", text: "Mon-Sun: 7am - 10pm" },
        ].map((info) => (
          <div
            key={info.title}
            className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-6 flex items-center gap-4"
          >
            <div className="bg-[#D4AF37] text-[#0D0D0D] p-3 rounded-xl">
              {info.icon}
            </div>
            <div>
              <h4 className="text-lg font-semibold">{info.title}</h4>
              <p className="text-[#F5EDE3]/80">{info.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="bg-[#1A1A1A]/60 backdrop-blur-sm border border-[#D4AF37]/20 rounded-2xl p-8">
        {isSubmitted ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-[#0D0D0D]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Message Sent!
            </h3>
            <p className="text-[#F5EDE3]/80">
              Thank you for reaching out. We'll contact you soon.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white focus:border-[#D4AF37] outline-none"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
              rows="5"
              className="w-full bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white focus:border-[#D4AF37] outline-none resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5EDE3] text-[#0D0D0D] font-bold py-4 rounded-xl hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

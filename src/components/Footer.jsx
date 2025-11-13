import { useState } from "react";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  ArrowUp,
  Heart,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 2500);
    }
  };

  const scrollToTop = () => {
    // GPU-friendly scroll (no lag)
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const year = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Wedding Photography",
    "Pre-Wedding Shoots",
    "Engagement Sessions",
    "Portrait Photography",
    "Commercial Shoots",
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, url: "#" },
    { icon: <Facebook className="w-5 h-5" />, url: "#" },
    { icon: <Twitter className="w-5 h-5" />, url: "#" },
  ];

  return (
    <footer className="bg-[#0D0D0D] border-t border-[#D4AF37]/20 relative overflow-hidden">

      {/* GOLD GLOWS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/10 blur-3xl opacity-30 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D4AF37]/10 blur-3xl opacity-30 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* GRID SECTIONS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* BRAND */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5EDE3] shadow-lg">
                <Camera className="w-6 h-6 text-[#0D0D0D]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">StudioLens</h3>
                <p className="text-[#F5EDE3]/70 text-sm">Premium Photography</p>
              </div>
            </div>

            <p className="text-[#F5EDE3]/80 text-sm leading-relaxed">
              Capturing life's most precious moments with artistry & heart.
            </p>

            <div className="space-y-2 pt-4 text-[#F5EDE3]/80 text-sm">
              <div className="flex items-center gap-3">
                <Phone className="text-[#D4AF37] w-4 h-4" /> +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#D4AF37] w-4 h-4" /> hello@studiolens.com
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-[#D4AF37] w-4 h-4" /> 123 Photography Lane
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="hidden sm:block space-y-4">
            <h4 className="text-lg text-white font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.path}
                    className="text-[#F5EDE3]/70 hover:text-[#D4AF37] transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="space-y-4">
            <h4 className="text-lg text-white font-semibold">Our Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-[#F5EDE3]/70 hover:text-[#D4AF37] transition-colors cursor-pointer">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* SUBSCRIBE + SOCIAL */}
          <div className="space-y-4">
            <h4 className="text-lg text-white font-semibold">Stay Updated</h4>

            {isSubscribed ? (
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 p-4 rounded-xl text-[#D4AF37]">
                🎉 Thank you for subscribing!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-xl text-white placeholder-[#F5EDE3]/40 text-sm focus:border-[#D4AF37] outline-none"
                  placeholder="Enter your email"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-[#D4AF37] text-[#0D0D0D] font-semibold rounded-xl hover:bg-[#e7ca60] transition"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* SOCIAL ICONS */}
            <div>
              <p className="text-[#F5EDE3]/80 text-sm mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    className="w-10 h-10 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-xl 
                    flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-[#D4AF37]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F5EDE3]/70">

          <div className="flex items-center gap-1">
            © {year} StudioLens — Made with
            <Heart className="w-4 h-4 text-red-500 ml-1" />
            <a
              href="https://navinchaudhary.netlify.app/"
              target="_blank"
              className="text-[#D4AF37] ml-1 hover:underline"
            >
              Navin Chaudhary
            </a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:text-[#D4AF37] transition">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4AF37] transition">Terms</a>
          </div>
        </div>
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-xl shadow-xl shadow-[#D4AF37]/30 
        bg-gradient-to-br from-[#D4AF37] to-[#F5EDE3] flex items-center justify-center text-[#0D0D0D] 
        hover:scale-105 transition-transform"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

    </footer>
  );
}

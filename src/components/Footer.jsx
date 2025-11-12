import { motion } from "framer-motion";
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
  Heart
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        delay: i * 0.1 + 0.8,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 5,
      y: -5,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)",
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  const scrollTopVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 1,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: { duration: 0.3 }
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    "Wedding Photography",
    "Pre-Wedding Shoots",
    "Engagement Sessions",
    "Portrait Photography",
    "Commercial Shoots"
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", url: "#" },
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", url: "#" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", url: "#" }
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-[#0D0D0D] border-t border-[#D4AF37]/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">

          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  boxShadow: "0 0 30px rgba(212, 175, 55, 0.6)"
                }}
                className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F5EDE3] shadow-lg"
              >
                <Camera className="w-6 h-6 text-[#0D0D0D]" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-white">StudioLens</h3>
                <p className="text-[#F5EDE3]/70 text-sm">Premium Photography</p>
              </div>
            </motion.div>

            <p className="text-[#F5EDE3]/80 leading-relaxed">
              Capturing life's most precious moments with artistic vision and technical excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-3 text-[#F5EDE3]/80">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-[#F5EDE3]/80">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>hello@studiolens.com</span>
              </div>
              <div className="flex items-center gap-3 text-[#F5EDE3]/80">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>123 Photography Lane, City</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li key={link.name}>
                  <motion.a
                    href={link.path}
                    className="text-[#F5EDE3]/70 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <motion.li key={service}>
                  <motion.a
                    href="#"
                    className="text-[#F5EDE3]/70 hover:text-[#D4AF37] transition-colors duration-300 flex items-center gap-2 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Stay Updated</h4>
            <p className="text-[#F5EDE3]/80 text-sm">
              Subscribe to get special offers and photography tips delivered to your inbox.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#D4AF37]/10 border border-[#D4AF37] text-[#D4AF37] p-4 rounded-xl text-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  ✅ Thank you for subscribing!
                </motion.div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white placeholder-[#F5EDE3]/40 focus:outline-none focus:border-[#D4AF37] transition-all"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  variants={buttonVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="w-full bg-gradient-to-r from-[#D4AF37] to-[#F5EDE3] text-[#0D0D0D] font-semibold py-3 rounded-xl relative overflow-hidden group"
                >
                  <motion.div
                    initial={{ x: "-100%", skewX: "-20deg" }}
                    whileHover={{ x: "200%", skewX: "-20deg" }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                  />
                  <span className="relative z-10">Subscribe</span>
                </motion.button>
              </form>
            )}

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-[#F5EDE3]/80 text-sm mb-3">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    custom={index}
                    variants={socialIconVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="w-10 h-10 bg-[#1A1A1A] border border-[#D4AF37]/30 rounded-xl flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-[#D4AF37]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <motion.div
            className="flex items-center gap-2 text-[#F5EDE3]/70"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <span>© {currentYear} StudioLens. All rights reserved.</span>

            <motion.span
              className="flex items-center gap-1"
              animate={isHovered ? { color: "#D4AF37" } : {}}
              transition={{ duration: 0.3 }}
            >
              Made with
              <motion.span
                animate={isHovered ? { scale: 1.3 } : { scale: 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              <span
                className="font-semibold"
                style={{
                  color: "#D4AF37",              // permanent gold color
                  transition: "color 0.3s ease", // smooth hover transition
                }}
              >
                {isHovered ? " Navin Chaudahry" : " Navin Chaudahry"}
              </span>
            </motion.span>
          </motion.div>


          <div className="flex items-center gap-6 text-sm text-[#F5EDE3]/70">
            <motion.a
              href="#"
              className="hover:text-[#D4AF37] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              className="hover:text-[#D4AF37] transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        variants={scrollTopVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#F5EDE3] text-[#0D0D0D] rounded-xl shadow-2xl shadow-[#D4AF37]/30 flex items-center justify-center z-40"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </motion.footer>
  );
}
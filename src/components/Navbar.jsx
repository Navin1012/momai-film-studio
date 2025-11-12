import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasBackground, setHasBackground] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Scroll Logic
  useEffect(() => {
    let lastY = window.scrollY;
    const handleScroll = () => {
      const currentY = window.scrollY;
      setHasBackground(currentY > 40);
      setHidden(currentY > lastY && currentY > 80);
      lastY = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "Services", "Portfolio", "About", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-700 ${
        hidden ? "-top-24" : "top-0"
      } ${hasBackground
        ? "bg-[#0a0a0a]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,0.15)] border-b border-[#D4AF37]/10"
        : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* ---------- LOGO ---------- */}
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ rotate: 6, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="w-12 h-12 flex items-center justify-center rounded-xl 
                       bg-gradient-to-br from-[#D4AF37] to-[#b5932f]
                       shadow-[0_0_15px_rgba(212,175,55,0.3)] relative overflow-hidden"
          >
            <motion.div
              animate={{ x: ["-120%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
            />
            <span className="font-bold text-lg text-black tracking-wider">SL</span>
          </motion.div>

          <div>
            <h1 className="text-white text-xl font-bold tracking-tight group-hover:text-[#D4AF37] transition-all duration-300">
              StudioLens
            </h1>
            <p className="text-xs text-[#F5EDE3]/70">Cinematic Photography</p>
          </div>
        </Link>

        {/* ---------- DESKTOP NAV ---------- */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative tracking-wide font-medium transition-all duration-300 ${
                    isActive
                      ? "text-[#D4AF37]"
                      : "text-[#F5EDE3]/80 hover:text-[#D4AF37]"
                  }`
                }
              >
                {item}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full bg-[#D4AF37] rounded-full transition-all duration-300"
                />
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#D4AF37] focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* ---------- MOBILE MENU OVERLAY ---------- */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-full w-full bg-[#0D0D0D]/95 backdrop-blur-md border-t border-[#D4AF37]/20 shadow-[0_8px_40px_rgba(0,0,0,0.4)] md:hidden"
            >
              <ul className="flex flex-col items-center py-8 gap-6 text-lg font-medium">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <NavLink
                      to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#D4AF37]"
                          : "text-[#F5EDE3]/85 hover:text-[#D4AF37]"
                      }
                    >
                      {item}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

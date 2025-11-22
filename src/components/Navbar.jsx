import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImg from "../assets/logo/momai.png";
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
      className={`fixed w-full z-50 transition-all duration-700 ease-out ${hidden ? "-top-34" : "top-0"
        } ${hasBackground
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl shadow-[0_0_40px_rgba(212,175,55,0.15)] border-b border-[#D4AF37]/10"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">

        {/* ---------- LOGO ---------- */}
        <Link
          to="/"
          className="
    flex items-center group 
     mt-[0px] 
     md:mt-[10px] 
    ml-[30px]      /* mobile: thoda left */
    md:ml-[50px]   /* desktop: aapka original left */
  "
        >
          <div className="w-16 h-16 flex items-center justify-center">
            <img
              src={logoImg}
              alt="Logo"
              className="
        w-full h-full object-contain
        scale-300        /* mobile size */
        md:scale-400     /* desktop size */
      "
            />
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
                  `relative tracking-wide font-medium transition-all duration-300 ease-out ${isActive
                    ? "text-[#D4AF37]"
                    : "text-[#F5EDE3]/80 hover:text-[#D4AF37]"
                  }`
                }
              >
                {item}
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full bg-[#D4AF37] rounded-full transition-all duration-300 ease-out"
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

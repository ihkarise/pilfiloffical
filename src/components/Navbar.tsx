import { Link, useLocation } from "react-router-dom";
import { PhoneCall, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

import { SITE_NAME } from "../constants";

const Navbar = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const [imgError, setImgError] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/features" },
    { name: "Use Cases", path: "/use-cases" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Benefits", path: "/benefits" },
    { name: "Digital", path: "/digital" },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <motion.nav 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white/85 backdrop-blur-xl border border-gray-200 shadow-[0_8px_32px_-8px_rgba(30,58,138,0.15)] rounded-full p-2 flex items-center justify-between pointer-events-auto w-full max-w-5xl"
        >
          {/* Logo Section */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity pl-4 pr-6 shrink-0" onClick={() => setIsOpen(false)}>
            {!imgError ? (
              <img 
                src="./logo.png" 
                alt={`${SITE_NAME} Logo`} 
                className="h-8 w-auto object-contain" 
                referrerPolicy="no-referrer"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-xl font-bold tracking-tight text-[#1E3A8A]">{SITE_NAME}</span>
            )}
          </Link>
          
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`relative px-5 py-2.5 text-[13px] font-bold tracking-wide transition-colors whitespace-nowrap z-10 ${
                    isActive ? "text-[#1E3A8A]" : "text-gray-500 hover:text-[#1E3A8A]"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 bg-[#EFF6FF] rounded-full -z-10 border border-[#BFDBFE]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pr-1">
            <a href="https://wa.me/message/2GNIOSHNPCYLF1" className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-gray-50 text-[#1E3A8A] hover:bg-[#EFF6FF] hover:text-[#2563EB] transition-colors border border-gray-100 shrink-0 shadow-sm">
              <PhoneCall className="w-4 h-4" />
            </a>
            <Link to="/contact" className="bg-[#E11D48] text-white px-6 py-2.5 rounded-full text-[13px] font-bold hover:bg-[#BE123C] transition-colors shadow-md hover:shadow-lg whitespace-nowrap hidden sm:block">
              Book Demo
            </Link>
            <button 
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 text-[#1E3A8A] transition-colors border border-gray-100 shrink-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl lg:hidden pt-36 px-6 flex flex-col"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-bold tracking-tight block py-2 ${
                       pathname === link.path ? "text-[#E11D48]" : "text-[#1E3A8A]"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-10 flex flex-col gap-4"
              >
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="bg-[#E11D48] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-red-500/20"
                >
                  Book Demo
                </Link>
                <a 
                  href="https://wa.me/message/2GNIOSHNPCYLF1" 
                  className="bg-[#EFF6FF] text-[#1E3A8A] px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 border border-[#BFDBFE]"
                >
                  <PhoneCall className="w-5 h-5" />
                  Contact Sales
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

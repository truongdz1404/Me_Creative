import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

const navLinks = [
  { name: "Trang chủ", id: "home" },
  { name: "Về chúng tôi", id: "about" },
  { name: "Dịch vụ", id: "services" },
  { name: "Dự án", id: "projects" },
  { name: "Liên hệ", id: "footer" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const isHomePage = location.pathname === "/" || location.pathname === "";

    if (isHomePage) {
      // Nếu đang ở trang chủ, chỉ cần scroll đến section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Nếu ở trang khác, navigate về home rồi scroll đến section
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500",
        isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button
          onClick={() => handleNavClick("home")}
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img 
            src="https://mecreative.com.vn/wp-content/uploads/2025/08/cropped-LOGO-ME-CREATIVE-FINAL-TACH-NEN-02-scaled-2-1024x500.png" 
            alt="ME Creative Logo" 
            className="h-12 w-auto object-contain"
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={cn(
                "text-sm uppercase font-medium tracking-wider transition-colors duration-300",
                isScrolled 
                  ? "text-gray-600 hover:text-[#30BBFD]" 
                  : "text-white hover:text-[#30BBFD]"
              )}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn("md:hidden", isScrolled ? "text-gray-900" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-gray-200 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-lg uppercase font-medium tracking-wider text-gray-900 text-left hover:text-[#30BBFD] transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};


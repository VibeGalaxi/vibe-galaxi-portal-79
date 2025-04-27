import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from "@/components/ThemeProvider"
import { Moon, Sun } from "lucide-react"

const PremiumNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-cosmic-900/80 backdrop-blur-sm fixed top-0 w-full z-50">
      <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 relative">
        <Link to="/" className="text-xl font-bold text-white">
          VibeMerch
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/shop" className="text-white hover:text-neon-pink transition-colors">
            Shop
          </Link>
          <a href="#story" className="text-white hover:text-neon-pink transition-colors">
            Story
          </a>
          <a href="#community" className="text-white hover:text-neon-pink transition-colors">
            Community
          </a>
          <a href="#contact" className="text-white hover:text-neon-pink transition-colors">
            Contact
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <button
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-white" />
            ) : (
              <Moon className="h-5 w-5 text-white" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-cosmic-900/90 backdrop-blur-md z-10 overflow-hidden transition-max-height duration-300 ${isMenuOpen ? 'max-h-96 py-4' : 'max-h-0'
            }`}
        >
          <div className="flex flex-col items-center space-y-4">
            <Link to="/shop" className="text-white hover:text-neon-pink transition-colors">
              Shop
            </Link>
            <a href="#story" className="text-white hover:text-neon-pink transition-colors">
              Story
            </a>
            <a href="#community" className="text-white hover:text-neon-pink transition-colors">
              Community
            </a>
            <a href="#contact" className="text-white hover:text-neon-pink transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PremiumNavbar;

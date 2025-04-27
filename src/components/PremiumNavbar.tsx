
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from "@/components/ThemeProvider";
import { Moon, Sun } from "lucide-react";

const PremiumNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { setTheme, theme } = useTheme();

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
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="w-full bg-cosmic-900/80 backdrop-blur-sm">
        <div className="w-full flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <Link to="/" className="text-xl font-bold text-white z-50">
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
              className="p-2 rounded-full hover:bg-white/10 transition-colors z-50"
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
              className="md:hidden text-white focus:outline-none z-50"
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
        </div>
      </div>

      {/* Fullscreen Menu */}
      <div 
        className={`fixed inset-0 bg-cosmic-900/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link 
            to="/shop" 
            className="text-3xl font-bold text-white hover:text-neon-pink transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <a 
            href="#story" 
            className="text-3xl font-bold text-white hover:text-neon-pink transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Story
          </a>
          <a 
            href="#community" 
            className="text-3xl font-bold text-white hover:text-neon-pink transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Community
          </a>
          <a 
            href="#contact" 
            className="text-3xl font-bold text-white hover:text-neon-pink transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default PremiumNavbar;

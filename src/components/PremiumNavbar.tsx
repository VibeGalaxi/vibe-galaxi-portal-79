import { Link, useLocation } from "react-router-dom";
import { Rocket, User, ShoppingBag, Menu, X, Star, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const links = [
  { label: "Home", href: "/", highlight: false },
  { label: "Collections", href: "/#category-slider", highlight: false },
  { label: "Drops", href: "#drops", highlight: true },
  { label: "Community", href: "#comunitate", highlight: false },
  { label: "FAQ", href: "#faq", highlight: false },
  { label: "Contact", href: "#contact", highlight: false },
];

const PremiumNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 24);
      
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  // Helper function to determine whether to use Link or a regular anchor tag
  const NavLink = ({ to, children, ...props }) => {
    // Use Link for internal navigation and 'a' for hash links
    if (to.startsWith('#')) {
      return <a href={to} {...props}>{children}</a>;
    }
    return <Link to={to} {...props}>{children}</Link>;
  };

  const closeMobileMenu = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? "py-2 backdrop-blur-xl bg-cosmic-900/90 shadow-lg border-b border-white/5" 
            : "py-3 md:py-5 bg-transparent"
        }`}
      >
        <div 
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue" 
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 relative">
          <Link 
            to="/" 
            className="flex items-center gap-1.5 md:gap-2 font-orbitron text-lg md:text-2xl font-bold transition-all duration-300 group"
            onClick={closeMobileMenu}
          >
            <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full opacity-20 group-hover:opacity-30 transition-opacity" />
              <Rocket 
                strokeWidth={3} 
                className="w-5 h-5 md:w-6 md:h-6 relative z-10 text-white group-hover:text-neon-pink transition-colors duration-300" 
              />
            </div>
            <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent group-hover:from-neon-pink group-hover:to-neon-blue transition-all duration-300">
              VibeGalaxi
            </span>
          </Link>
          
          <ul className="hidden md:flex gap-1 items-center">
            {links.map(({ label, href, highlight }) => (
              <li key={label}>
                <NavLink
                  to={href}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium
                            ${highlight 
                              ? 'text-white bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 hover:from-neon-pink/30 hover:to-neon-blue/30' 
                              : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#vibe-store" 
              className="p-2 rounded-lg transition-all duration-300 text-white/80 hover:text-white hover:bg-white/5"
              aria-label="Shopping bag"
            >
              <ShoppingBag className="w-5 h-5" />
            </a>
            
            <div className="w-px h-6 bg-white/20" />
            
            <a 
              href="#join" 
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-neon-pink to-neon-blue text-white font-medium hover:shadow-lg hover:shadow-neon-pink/20 transition-all duration-300 flex items-center gap-2"
            >
              <span>Become a Vibonaut</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
          
          <div className="flex items-center gap-3 md:hidden">
            <a 
              href="#vibe-store" 
              className="p-2 rounded-lg text-white/80 hover:text-white"
              aria-label="Shopping bag"
              onClick={closeMobileMenu}
            >
              <ShoppingBag className="w-5 h-5" />
            </a>
            
            <button 
              className="p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      <div 
        className={`fixed inset-0 z-40 backdrop-blur-xl bg-cosmic-900/95 transition-transform duration-500 transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          <ul className="flex flex-col gap-3 mb-8">
            {links.map(({ label, href, highlight }) => (
              <li key={`mobile-${label}`}>
                <NavLink
                  to={href}
                  className={`block px-4 py-3 rounded-lg transition-all text-lg font-medium ${
                    highlight 
                      ? 'text-white bg-gradient-to-r from-neon-pink/20 to-neon-blue/20' 
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto flex flex-col gap-4">
            <a 
              href="#vibe-store" 
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-all"
              onClick={closeMobileMenu}
            >
              <ShoppingBag className="w-5 h-5 text-neon-blue" />
              <span>Visit the store</span>
            </a>
            
            <a 
              href="#join" 
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-neon-pink to-neon-blue text-white font-bold hover:shadow-lg hover:shadow-neon-pink/20 transition-all"
              onClick={closeMobileMenu}
            >
              <User className="w-5 h-5" />
              <span>Become a Vibonaut</span>
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <Star className="w-4 h-4 text-neon-pink" />
              Your Merch Is From Another Dimension
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumNavbar;


import { ArrowDown, Star, ShieldAlert, Rocket } from "lucide-react";
import AnimatedArrow from "./AnimatedArrow";
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    const animationTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(animationTimeout);
    };
  }, []);
  
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`,
  };
  
  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-32 overflow-hidden"
    >
      {/* Cosmic Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cosmic-900"
          style={{
            background: "radial-gradient(ellipse at 30% 20%, rgba(33, 6, 62, 0.8) 0%, rgba(26, 31, 44, 1) 70%)",
          }}
        />
        
        {/* Animated stars effect */}
        <div className="absolute inset-0 cosmic-dots opacity-60" />
        
        {/* Animated Stars */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
        
        {/* Floating Planet */}
        <div 
          className="absolute rounded-full w-40 h-40 top-1/4 -right-20 animate-float"
          style={{
            background: "radial-gradient(circle at 60% 40%, rgba(217, 70, 239, 0.4) 0%, rgba(30, 174, 219, 0.2) 50%, transparent 70%)",
            filter: "blur(15px)",
            animationDuration: "20s",
            ...parallaxStyle
          }}
        />
        
        {/* Cosmic Nebula */}
        <div 
          className="absolute w-full h-full opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('/photo-1465101162946-4377e57745c3')`,
            mixBlendMode: 'screen',
            transform: `scale(1.1) translateY(${scrollY * 0.1}px)`
          }}
        />

        {/* Animated Grid */}
        <div 
          className="absolute inset-0 cosmic-grid opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
        
        {/* Glowing Orbs */}
        <div 
          className="absolute w-64 h-64 rounded-full bg-neon-pink/5 blur-3xl -left-32 top-1/3 animate-pulse-neon"
          style={{ animationDelay: '0.5s', ...parallaxStyle }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full bg-neon-blue/5 blur-3xl -right-48 bottom-1/4 animate-pulse-neon"
          style={{ animationDelay: '1.2s', ...parallaxStyle }}
        />
      </div>
      
      <div 
        className={`relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto 
                    transition-all duration-1000 
                    ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}
      >
        {/* Floating cosmic badge */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue opacity-20 blur-xl rounded-full" />
          <div className="glass-morphism px-6 py-2 rounded-full flex items-center gap-2 border border-white/20">
            <Rocket size={18} className="text-neon-pink animate-pulse" />
            <span className="text-sm font-medium">Lansare VibeMerch 2025</span>
            <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
          </div>
        </div>
        
        <h1 className="font-orbitron text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <div className="relative inline-block">
            <span className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-neon-blue opacity-30 blur-xl rounded-lg"></span>
            <span className="relative">Your Merch Is From</span>
          </div>
          <br />
          <span 
            className="bg-gradient-to-r from-neon-pink via-neon-purple to-neon-blue bg-clip-text text-transparent 
                      block animate-pulse-neon"
          >
            Another Dimension.
          </span>
        </h1>
        
        <p className="mt-4 mb-10 text-xl md:text-2xl font-montserrat text-white/90 max-w-2xl leading-relaxed
                      opacity-0 animate-fade-in"
           style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          VibeMerch™ isn't just clothing—it's a wearable portal to VibeGalaxi, 
          <span className="text-neon-pink font-semibold"> the meme-powered universe</span> where style, lore, and chaos collide.
        </p>
        
        <div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12
                    opacity-0 animate-fade-in"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <a
            href="#story"
            className="premium-button group"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore the VibeGalaxi
              <Star className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
            </span>
          </a>
          
          <a
            href="#join"
            className="px-8 py-3 rounded-lg glass-morphism text-white text-lg font-bold shadow-xl
                     hover:bg-white/10 hover:border-neon-pink/50 transition-all duration-300
                     focus:outline-none focus:ring-2 focus:ring-neon-blue/50"
          >
            <span className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-neon-blue" />
              Become a Vibonaut
            </span>
          </a>
        </div>
        
        <div 
          className="flex flex-col items-center mt-2 opacity-0 animate-fade-in"
          style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
        >
          <span className="text-sm text-white/70 font-montserrat mb-2">Scroll to Begin Your Journey</span>
          <AnimatedArrow />
        </div>
        
        {/* Floating elements */}
        <div className="absolute -left-4 md:left-10 top-1/3 w-16 h-16 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
          <div className="absolute inset-0 rounded-full bg-neon-pink/10 animate-pulse-neon" style={{ animationDelay: '0.3s' }} />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-neon-pink/80 to-neon-blue/80 animate-rotate-orbit" />
        </div>
        
        <div className="absolute -right-4 md:right-10 bottom-1/3 w-24 h-24 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
          <div className="absolute inset-0 rounded-full bg-neon-blue/10 animate-pulse-neon" style={{ animationDelay: '0.7s' }} />
          <div className="absolute inset-3 rounded-full border-2 border-dashed border-neon-blue/60 animate-spin" style={{ animationDuration: '15s' }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

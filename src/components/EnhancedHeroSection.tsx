
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Star, ShieldAlert, Rocket } from "lucide-react";
import AnimatedArrow from "./AnimatedArrow";

const EnhancedHeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
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

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = heroRef.current?.getBoundingClientRect() || { width: 0, height: 0, left: 0, top: 0 };
    
    // Calculate mouse position relative to the center of the container
    const x = ((clientX - left) / width - 0.5) * 2; // -1 to 1
    const y = ((clientY - top) / height - 0.5) * 2; // -1 to 1
    
    setMousePosition({ x, y });
  };
  
  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.4}px)`,
  };

  const calculateParallaxOffset = (factor: number) => ({
    transform: `translate3d(${mousePosition.x * factor}px, ${mousePosition.y * factor}px, 0)`,
    transition: 'transform 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
  });
  
  // Animated text effects
  const headingAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const paragraphAnimations = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonAnimations = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <motion.section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-32 overflow-hidden"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate="visible"
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
        {Array.from({ length: 150 }).map((_, i) => (
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
        
        {/* Interactive Floating Elements */}
        <motion.div
          className="absolute w-64 h-64 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle at 60% 40%, rgba(217, 70, 239, 0.3) 0%, rgba(30, 174, 219, 0.1) 50%, transparent 70%)",
            top: '20%',
            right: '10%',
            ...calculateParallaxOffset(-30)
          }}
        />
        
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle at 30% 60%, rgba(155, 135, 245, 0.4) 0%, transparent 70%)",
            bottom: '10%',
            left: '5%',
            ...calculateParallaxOffset(-20)
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
      </div>
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Floating cosmic badge */}
        <motion.div 
          className="mb-8 relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue opacity-30 blur-xl rounded-full" />
          <div className="glass-morphism px-6 py-3 rounded-full flex items-center gap-2 border border-white/20 group hover:border-white/30 transition-all">
            <Rocket size={20} className="text-neon-pink animate-pulse" />
            <span className="text-base font-medium bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-neon-pink group-hover:to-neon-blue transition-all">
              Lansare VibeMerch 2025
            </span>
            <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
          </div>
        </motion.div>
        
        <motion.h1 
          className="font-orbitron text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          variants={headingAnimations}
        >
          <div className="relative">
            <span className="absolute -inset-1 -z-10 bg-gradient-to-r from-neon-pink to-neon-blue opacity-30 blur-xl rounded-lg"
                  style={{...calculateParallaxOffset(10)}}></span>
            <span className="relative">Your Merch Is From</span>
          </div>
          <br />
          <span 
            className="bg-clip-text text-transparent relative z-10 block animate-text-flicker"
            style={{
              backgroundImage: "linear-gradient(90deg, #D946EF, #9b87f5, #1EAEDB, #9b87f5, #D946EF)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 5s ease infinite"
            }}
          >
            Another Dimension.
          </span>
        </motion.h1>
        
        <motion.p 
          className="mt-4 mb-10 text-xl md:text-2xl font-montserrat text-white/90 max-w-2xl leading-relaxed"
          variants={paragraphAnimations}
        >
          VibeMerch™ isn't just clothing—it's a wearable portal to VibeGalaxi, 
          <span className="text-neon-pink font-semibold"> the meme-powered universe</span> where style, lore, and chaos collide.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          variants={buttonAnimations}
        >
          <a
            href="#story"
            className="group relative overflow-hidden px-9 py-4 rounded-xl"
          >
            {/* Button gradient background with pulsing animation */}
            <span className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue animate-pulse-glow rounded-xl"></span>
            
            {/* Interactive hover effect */}
            <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl"></span>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center gap-2 font-orbitron font-bold text-white text-lg">
              Explore the VibeGalaxi
              <Star className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
            </span>
          </a>
          
          <a
            href="#join"
            className="group relative overflow-hidden px-8 py-3 rounded-xl backdrop-blur-xl border border-white/20 font-bold shadow-xl hover:shadow-neon transition-all duration-300"
          >
            {/* Interactive hover effect - gradient reveals on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-neon-pink/20 to-neon-blue/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            
            <span className="relative z-10 flex items-center gap-2 text-white text-lg font-orbitron">
              <ShieldAlert className="w-5 h-5 text-neon-blue group-hover:text-neon-pink transition-colors duration-300" />
              Become a Vibonaut
            </span>
          </a>
        </motion.div>
        
        <motion.div 
          className="flex flex-col items-center mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <span className="text-sm text-white/70 font-montserrat mb-2">Scroll to Begin Your Journey</span>
          <AnimatedArrow />
        </motion.div>
        
        {/* Interactive Orbital Elements */}
        <motion.div 
          className="absolute left-10 top-1/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={calculateParallaxOffset(15)}
        >
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 rounded-full bg-neon-pink/10 animate-pulse-neon" />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-neon-pink/80 to-neon-blue/80 animate-rotate-orbit" />
            <div className="absolute h-40 w-px bg-gradient-to-b from-neon-pink/0 via-neon-pink/50 to-neon-pink/0 -top-24 left-1/2 -translate-x-1/2 animate-pulse-neon" />
          </div>
        </motion.div>
        
        <motion.div 
          className="absolute right-10 bottom-1/3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={calculateParallaxOffset(-15)}
        >
          <div className="relative w-28 h-28">
            <div className="absolute inset-0 rounded-full bg-neon-blue/10 animate-pulse-neon" />
            <div className="absolute inset-3 rounded-full border-2 border-dashed border-neon-blue/60 animate-spin" 
                 style={{ animationDuration: '15s' }} />
            <div className="absolute w-5 h-5 bg-neon-blue rounded-full top-0 left-1/2 -translate-x-1/2 blur-sm animate-float" />
          </div>
        </motion.div>
      </div>

      {/* Decorative elements - interactive cosmic dust effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute w-1 h-1 rounded-full bg-white/60 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [0, Math.random() * 20 - 10],
              x: [0, Math.random() * 20 - 10],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default EnhancedHeroSection;

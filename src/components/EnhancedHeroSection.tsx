import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Star, ShieldAlert, Rocket } from "lucide-react";
import AnimatedArrow from "./AnimatedArrow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
    const x = ((clientX - left) / width - 0.5) * 2;
    const y = ((clientY - top) / height - 0.5) * 2;
    setMousePosition({ x, y });
  };

  const slides = [
    {
      title: "Your Merch Is From Another Dimension",
      subtitle: "VibeMerch™ isn't just clothing—it's a wearable portal to VibeGalaxi, the meme-powered universe where style, lore, and chaos collide.",
      image: "/photo-1618160702438-9b02ab6515c9",
      badge: "Lansare VibeMerch 2025"
    },
    {
      title: "Cosmic Mug Collection",
      subtitle: "Sip into another dimension with our constellation-inspired mugs. Each one tells a story from the VibeGalaxi.",
      image: "/photo-1618160702438-9b02ab6515c9",
      badge: "Limited Edition Mugs"
    },
    {
      title: "Quantum Tee Series",
      subtitle: "Wear the future with our reality-bending t-shirts. Made with fabric from the edge of the universe.",
      image: "/photo-1582562124811-c09040d0a901",
      badge: "New Drop Alert"
    },
    {
      title: "Nebula Hoodie Experience",
      subtitle: "Step into warmth from the stars. Our hoodies are infused with cosmic comfort technology.",
      image: "/photo-1527576539890-dfa815648363",
      badge: "Premium Collection"
    }
  ];

  return (
    <motion.section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-4 py-32 overflow-hidden"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate="visible"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cosmic-900"
          style={{
            background: "radial-gradient(ellipse at 30% 20%, rgba(33, 6, 62, 0.8) 0%, rgba(26, 31, 44, 1) 70%)",
          }}
        />
        
        <div className="absolute inset-0 cosmic-dots opacity-60" />
        
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
        
        <div 
          className="absolute w-full h-full opacity-20 bg-cover bg-center"
          style={{
            backgroundImage: `url('/photo-1465101162946-4377e57745c3')`,
            mixBlendMode: 'screen',
            transform: `scale(1.1) translateY(${scrollY * 0.1}px)`
          }}
        />

        <div 
          className="absolute inset-0 cosmic-grid opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.2}px)`
          }}
        />
      </div>
      
      <Carousel className="w-full max-w-7xl mx-auto">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative">
              <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
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
                      {slide.badge}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
                  </div>
                </motion.div>
                
                <motion.h1 
                  className="font-orbitron text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.8, ease: "easeOut" }
                    }
                  }}
                >
                  <div className="relative">
                    <span className="absolute -inset-1 -z-10 bg-gradient-to-r from-neon-pink to-neon-blue opacity-30 blur-xl rounded-lg"></span>
                    <span className="relative">{slide.title}</span>
                  </div>
                </motion.h1>
                
                <motion.p 
                  className="mt-4 mb-10 text-xl md:text-2xl font-montserrat text-white/90 max-w-2xl leading-relaxed"
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
                    }
                  }}
                >
                  {slide.subtitle}
                </motion.p>

                <div className="relative w-full max-w-3xl aspect-[16/9] rounded-xl overflow-hidden">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0620] via-transparent to-transparent opacity-50" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-none" />
        <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-none" />
      </Carousel>

      <motion.div 
        className="flex flex-col items-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-sm text-white/70 font-montserrat mb-2">Scroll to Begin Your Journey</span>
        <AnimatedArrow />
      </motion.div>
    </motion.section>
  );
};

export default EnhancedHeroSection;

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

const calculateParallaxOffset = (scrollPosition: number, factor: number) => {
  return {
    transform: `translateY(${scrollPosition * factor}px)`
  };
};

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
      title: "Quantum Weave T-Shirt",
      subtitle: "Embedded with quantum computing patterns, our most popular t-shirt design transforms your style into digital art.",
      image: "https://pythago.ai/bruh/assets/5.png",
      badge: "T-Shirts Collection",
      features: ["Quantum-inspired design", "Premium fabric", "Digitally enhanced patterns"]
    },
    {
      title: "Nebulahood™ Classic",
      subtitle: "Our signature hoodie with glow-in-dark constellation patterns and hidden smart pockets.",
      image: "https://pythago.ai/bruh/assets/h1.png",
      badge: "Hoodies Collection",
      features: ["Glow-in-dark constellations", "Hidden smart pockets", "Premium comfort"]
    },
    {
      title: "Cosmic Brew Master",
      subtitle: "Temperature-sensitive constellation design reveals itself as you enjoy your favorite beverage.",
      image: "https://pythago.ai/bruh/assets/c1.png",
      badge: "Mugs Collection",
      features: ["Temperature-sensitive design", "Premium ceramic", "Dishwasher safe"]
    }
  ];

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-900"
      onMouseMove={handleMouseMove}
      initial="hidden"
      animate="visible"
    >
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
            transform: `translateY(${scrollY * -0.05}px)`
          }}
        />
        
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle at 30% 60%, rgba(155, 135, 245, 0.4) 0%, transparent 70%)",
            bottom: '10%',
            left: '5%',
            transform: `translateY(${scrollY * -0.03}px)`
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
      
      <Carousel className="w-full h-screen">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center gap-8 px-6 lg:px-16">
                <motion.div 
                  className="relative order-2 lg:order-1"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative aspect-square w-full max-w-2xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 rounded-3xl blur-2xl" />
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-neon-blue opacity-30 blur-sm rounded-3xl" />
                  </div>
                </motion.div>

                <motion.div 
                  className="order-1 lg:order-2 space-y-8"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.div 
                    className="relative inline-block"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="glass-morphism px-6 py-3 rounded-full flex items-center gap-2 border border-white/20 group hover:border-white/30 transition-all">
                      <Rocket size={20} className="text-neon-pink animate-pulse" />
                      <span className="text-base font-medium bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-neon-pink group-hover:to-neon-blue transition-all">
                        {slide.badge}
                      </span>
                      <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
                    </div>
                  </motion.div>
                  
                  <motion.h1 
                    className="font-orbitron text-4xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight"
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
                    className="text-xl lg:text-2xl text-white/90 max-w-xl leading-relaxed"
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

                  <motion.div 
                    className="flex flex-col gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-neon-pink" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex gap-4 pt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <button className="premium-button">
                      Explore Now
                    </button>
                    <button className="cosmic-button">
                      Learn More
                    </button>
                  </motion.div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 lg:left-8 bg-white/10 hover:bg-white/20 border-none" />
        <CarouselNext className="right-4 lg:right-8 bg-white/10 hover:bg-white/20 border-none" />
      </Carousel>

      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center"
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

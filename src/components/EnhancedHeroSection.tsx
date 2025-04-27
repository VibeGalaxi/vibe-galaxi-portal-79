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
      features: ["Quantum-inspired design", "Premium fabric", "Digitally enhanced patterns"],
      price: "59.99",
      rating: 4.9,
      reviews: 128,
      stock: "Limited Edition",
      colors: ["Cosmic Black", "Neural Blue", "Quantum Purple"]
    },
    {
      title: "Nebulahood™ Classic",
      subtitle: "Our signature hoodie with glow-in-dark constellation patterns and hidden smart pockets.",
      image: "https://pythago.ai/bruh/assets/h1.png",
      badge: "Hoodies Collection",
      features: ["Glow-in-dark constellations", "Hidden smart pockets", "Premium comfort"],
      price: "89.99",
      rating: 4.8,
      reviews: 96,
      stock: "Selling Fast",
      colors: ["Nebula Black", "Starlight Gray", "Aurora Green"]
    },
    {
      title: "Cosmic Brew Master",
      subtitle: "Temperature-sensitive constellation design reveals itself as you enjoy your favorite beverage.",
      image: "https://pythago.ai/bruh/assets/c1.png",
      badge: "Mugs Collection",
      features: ["Temperature-sensitive design", "Premium ceramic", "Dishwasher safe"],
      price: "29.99",
      rating: 4.7,
      reviews: 234,
      stock: "In Stock",
      colors: ["Celestial White", "Galaxy Black", "Cosmic Blue"]
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
              <div className="flex min-h-screen flex-col lg:grid lg:grid-cols-2 items-center gap-4 lg:gap-8 px-4 lg:px-10 py-20 lg:py-0">
                <motion.div 
                  className="w-full order-1 lg:order-1 mb-6 lg:mb-0"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="relative w-full max-w-xl mx-auto aspect-square">
                    <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-blue/20 rounded-3xl blur-2xl" />
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="relative z-10 w-full h-full object-contain lg:object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-pink to-neon-blue opacity-30 blur-sm rounded-3xl" />
                  </div>
                </motion.div>

                <motion.div 
                  className="order-2 lg:order-2 space-y-4 lg:space-y-8 px-4 lg:px-10"
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
                    <div className="glass-morphism px-4 lg:px-6 py-2 lg:py-3 rounded-full flex items-center gap-2 border border-white/20 group hover:border-white/30 transition-all">
                      <Rocket size={16} className="text-neon-pink animate-pulse" />
                      <span className="text-sm lg:text-base font-medium bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:from-neon-pink group-hover:to-neon-blue transition-all">
                        {slide.badge}
                      </span>
                      <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-neon-pink animate-pulse" />
                    </div>
                  </motion.div>
                  
                  <motion.h1 
                    className="font-orbitron text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-tight"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                  >
                    <div className="relative">
                      <span className="absolute -inset-1 -z-10 bg-gradient-to-r from-neon-pink to-neon-blue opacity-30 blur-xl rounded-lg"></span>
                      <span className="relative">{slide.title}</span>
                    </div>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-lg lg:text-xl text-white/90 max-w-xl leading-relaxed"
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } }
                    }}
                  >
                    {slide.subtitle}
                  </motion.p>

                  <div className="grid grid-cols-2 gap-3 lg:gap-4 my-4 lg:my-6">
                    <div className="glass-morphism p-3 lg:p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-1 lg:mb-2">
                        <Star className="text-yellow-400" size={16} />
                        <span className="text-base lg:text-lg font-bold">{slide.rating}/5.0</span>
                      </div>
                      <p className="text-xs lg:text-sm text-white/70">{slide.reviews} reviews</p>
                    </div>
                    <div className="glass-morphism p-3 lg:p-4 rounded-xl">
                      <div className="flex items-center gap-2 mb-1 lg:mb-2">
                        <ShieldAlert className="text-emerald-400" size={16} />
                        <span className="text-base lg:text-lg font-bold">{slide.stock}</span>
                      </div>
                      <p className="text-xs lg:text-sm text-white/70">Availability Status</p>
                    </div>
                  </div>

                  <div className="space-y-3 lg:space-y-4">
                    <h3 className="text-base lg:text-lg font-semibold text-white/90">Available Colors:</h3>
                    <div className="flex flex-wrap gap-2 lg:gap-3">
                      {slide.colors.map((color, idx) => (
                        <div key={idx} className="glass-morphism px-3 lg:px-4 py-1.5 lg:py-2 rounded-full text-xs lg:text-sm hover:bg-white/20 cursor-pointer transition-all">
                          {color}
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div 
                    className="flex flex-col gap-2 lg:gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-base lg:text-lg font-semibold text-white/90">Key Features:</h3>
                    {slide.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 lg:h-2 lg:w-2 rounded-full bg-neon-pink" />
                        <span className="text-sm lg:text-base text-white/80">{feature}</span>
                      </div>
                    ))}
                  </motion.div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6 lg:mt-8">
                    <div className="glass-morphism px-4 lg:px-6 py-2 lg:py-3 rounded-xl">
                      <span className="text-xs lg:text-sm text-white/70">Price</span>
                      <div className="text-xl lg:text-2xl font-bold text-white">${slide.price}</div>
                    </div>
                    <motion.div 
                      className="flex gap-3 lg:gap-4 w-full sm:w-auto"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <button className="premium-button flex-1 sm:flex-initial text-sm lg:text-base py-2.5 lg:py-3">
                        Add to Cart
                      </button>
                      <button className="cosmic-button flex-1 sm:flex-initial text-sm lg:text-base py-2.5 lg:py-3">
                        Learn More
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex left-4 lg:left-8 bg-white/10 hover:bg-white/20 border-none" />
        <CarouselNext className="hidden lg:flex right-4 lg:right-8 bg-white/10 hover:bg-white/20 border-none" />
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


import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Eye, ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  features: string[];
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "NeuroDrip™ T-Shirt",
    description: "Interactive augmented reality t-shirt with neural patterns that evolve based on your emotions",
    price: "€79",
    image: "https://pythago.ai/bruh/assets/t3.png",
    category: "Limited Edition",
    features: ["AR reactive patterns", "Motion sensors", "NFC integration", "Glow in dark trim"]
  },
  {
    id: 2,
    name: "QuantumHood™",
    description: "Hoodie with embedded vibration technology that synchronizes with your music or cosmic vibrations",
    price: "€139",
    image: "https://pythago.ai/bruh/assets/h3.png",
    category: "Exclusive",
    features: ["Haptic feedback", "Sound reactivity", "Weather adaptation", "Hidden tech pockets"]
  },
  {
    id: 3,
    name: "Vibonautica Cap",
    description: "Smart cap with hidden holographic display and built-in audio for immersive VibeGalaxi experiences",
    price: "€95",
    image: "https://pythago.ai/bruh/assets/monkeyt4.png",
    category: "Premium",
    features: ["Hidden projection", "Spatial audio", "Voice commands", "Solar charging"]
  }
];

const ProductShowcase3D = () => {
  const [activeProductIdx, setActiveProductIdx] = useState(0);
  const [isManualInteraction, setIsManualInteraction] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  const activeProduct = featuredProducts[activeProductIdx];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  // Auto-rotation functionality
  useEffect(() => {
    if (isManualInteraction) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      
      // Reset manual interaction after a delay
      const timeout = setTimeout(() => {
        setIsManualInteraction(false);
      }, 5000);
      
      return () => clearTimeout(timeout);
    } else {
      intervalRef.current = setInterval(() => {
        setActiveProductIdx((prev) => (prev + 1) % featuredProducts.length);
      }, 7000);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [isManualInteraction]);
  
  const handleNext = () => {
    setIsManualInteraction(true);
    setActiveProductIdx((prev) => (prev + 1) % featuredProducts.length);
  };
  
  const handlePrev = () => {
    setIsManualInteraction(true);
    setActiveProductIdx((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const { clientX, clientY } = e;
    const { width, height, top, left } = containerRef.current.getBoundingClientRect();
    
    const x = (clientX - left - width / 2) / (width / 2);
    const y = (clientY - top - height / 2) / (height / 2);
    
    setMousePosition({ x, y });
  };

  const productVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        damping: 20, 
        stiffness: 100 
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { 
        duration: 0.3 
      }
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className="relative py-32 px-4 md:px-8 bg-gradient-to-br from-cosmic-800 via-cosmic-700 to-neon-blue/20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background design elements */}
      <div className="absolute inset-0 opacity-10 cosmic-grid pointer-events-none" />
      
      {/* Animated gradients */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-neon-pink/20 blur-3xl opacity-40 animate-levitate"
        style={{ animationDelay: "0.5s" }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-neon-blue/20 blur-3xl opacity-40 animate-levitate"
        style={{ animationDelay: "1.2s" }}
      />
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="font-orbitron text-4xl md:text-6xl font-bold mb-4 text-gradient-animate"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Featured Cosmic Tech™
          </motion.h2>
          <motion.p 
            className="text-white/80 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Wear the future with our blend of fashion, technology, and cosmic vibrations
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Product Display */}
          <motion.div 
            className="relative aspect-square max-w-md mx-auto lg:mx-0 lg:justify-self-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/30 to-neon-blue/30 rounded-full blur-3xl opacity-30" />
            
            <div 
              className="relative w-full h-full flex items-center justify-center perspective-container"
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d" 
              }}
            >
              {featuredProducts.map((product, idx) => {
                // Calculate the rotation for product position in 3D space
                const isActive = idx === activeProductIdx;
                const rotationY = (idx - activeProductIdx) * 90; // 90 degrees per item
                const zDistance = isActive ? 0 : -200; // Move non-active items back
                
                return (
                  <motion.div
                    key={product.id}
                    className={`absolute inset-0 ${isActive ? 'z-10' : 'z-0'}`}
                    initial="hidden"
                    animate={isActive ? "visible" : "hidden"}
                    exit="exit"
                    variants={productVariants}
                    style={{ 
                      transform: `rotateY(${rotationY}deg) translateZ(${zDistance}px)`,
                      backfaceVisibility: "hidden",
                      opacity: isActive ? 1 : 0,
                      transition: "all 0.7s cubic-bezier(0.4, 0.0, 0.2, 1)"
                    }}
                  >
                    {isActive && (
                      <div 
                        className="w-full h-full rounded-2xl overflow-hidden glass-morphism shadow-2xl border border-white/30"
                        style={{ 
                          transform: `rotateY(${mousePosition.x * 8}deg) rotateX(${-mousePosition.y * 8}deg)`,
                          transition: isManualInteraction ? "transform 0.5s ease-out" : "transform 0.1s ease-out"
                        }}
                      >
                        <div className="relative w-full h-full overflow-hidden backdrop-blur-sm">
                          {/* Product image */}
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            onError={(e) => {
                              console.log(`Image failed to load: ${product.image}`);
                              e.currentTarget.src = "https://placehold.co/600x600?text=Product";
                            }}
                          />
                          
                          {/* Overlay gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70" />
                          
                          {/* Category badge */}
                          <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-sm font-semibold text-white">
                            {product.category}
                          </div>
                          
                          {/* Interactive buttons */}
                          <div className="absolute top-4 right-4 flex gap-2">
                            <button className="p-2.5 rounded-full backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition-colors">
                              <Star className="w-5 h-5" />
                            </button>
                            <button className="p-2.5 rounded-full backdrop-blur-md bg-white/10 text-white hover:bg-white/20 transition-colors">
                              <Eye className="w-5 h-5" />
                            </button>
                          </div>
                          
                          {/* Product info */}
                          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/10 transform transition-transform duration-500 hover:scale-[1.02]">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="text-xl font-orbitron font-bold text-white">{product.name}</h3>
                              <span className="text-xl font-bold text-neon-pink">{product.price}</span>
                            </div>
                            <p className="text-white/70 text-sm mb-4 line-clamp-2">{product.description}</p>
                            <button className="w-full py-3 rounded-lg bg-gradient-to-r from-neon-pink to-neon-blue text-white font-bold flex items-center justify-center gap-2 hover:shadow-neon-strong transition-shadow">
                              <ShoppingBag className="w-5 h-5" />
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            
            {/* Navigation arrows */}
            <div className="absolute top-1/2 -left-6 -translate-y-1/2 z-20">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:shadow-neon transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 z-20">
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:shadow-neon transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
            
            {/* Pagination indicators */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
              {featuredProducts.map((_, idx) => (
                <button 
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${idx === activeProductIdx 
                    ? 'bg-gradient-to-r from-neon-pink to-neon-blue w-8'
                    : 'bg-white/30 hover:bg-white/50'}`}
                  onClick={() => {
                    setIsManualInteraction(true);
                    setActiveProductIdx(idx);
                  }}
                  aria-label={`View product ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
          
          {/* Product details */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium border border-white/10">
                VibeTech™ Innovation
              </span>
              
              <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-white">{activeProduct.name}</h3>
              
              <p className="text-xl text-white/90 leading-relaxed">{activeProduct.description}</p>
              
              <div className="pt-6 space-y-5">
                <h4 className="text-neon-blue font-orbitron flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  <span>Advanced Features</span>
                </h4>
                
                <ul className="space-y-3">
                  {activeProduct.features.map((feature, idx) => (
                    <motion.li 
                      key={feature} 
                      className="flex items-center gap-3 text-white/80"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-neon-pink" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#shop"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-neon-pink to-neon-blue text-white font-bold flex items-center justify-center gap-2 hover:shadow-neon transition-all"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Shop the Collection
                </a>
                
                <button className="px-8 py-4 rounded-xl glass-morphism border border-white/20 text-white font-bold hover:border-neon-pink/50 hover:shadow-neon transition-all">
                  View 3D Experience
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase3D;

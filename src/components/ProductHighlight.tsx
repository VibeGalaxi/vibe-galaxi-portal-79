import { ReactNode, useEffect, useRef, useState } from "react";
import { Star, ArrowUpRight, ShieldCheck } from "lucide-react";

interface ProductHighlightProps {
  headline: string;
  subhead: string;
  features: ReactNode;
  imageUrl?: string;
  reverse?: boolean;
  bgFrom?: string;
  bgTo?: string;
  highlightColor?: string;
}

const ProductHighlight = ({
  headline,
  subhead,
  features,
  imageUrl = "https://pythago.ai/bruh/assets/images/home-1-newsletter.webp",
  reverse,
  bgFrom = "#221F26",
  bgTo = "#1EAEDB",
  highlightColor = "#D946EF"
}: ProductHighlightProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  
  const calculateTransform = () => {
    if (!isHovering || !imageUrl) return {};
    
    const maxRotation = 6;
    
    const centerX = 150;
    const centerY = 150;
    
    const rotateY = ((mousePosition.x - centerX) / centerX) * maxRotation;
    const rotateX = ((centerY - mousePosition.y) / centerY) * maxRotation;
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: isHovering ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out'
    };
  };

  return (
    <section
      ref={sectionRef}
      className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center py-24 md:py-32 px-4 w-full relative overflow-hidden`}
      style={{
        background: `linear-gradient(135deg, ${bgFrom} 0%, ${bgTo} 100%)`,
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 cosmic-grid opacity-20" />
        <div 
          className="absolute w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ 
            background: `radial-gradient(circle at center, ${highlightColor} 0%, transparent 70%)`,
            top: '20%',
            left: '10%',
            animation: 'float 15s infinite ease-in-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-10"
          style={{ 
            background: `radial-gradient(circle at center, ${bgTo} 0%, transparent 70%)`,
            bottom: '10%',
            right: '5%',
            animation: 'float 20s infinite ease-in-out reverse'
          }}
        />
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>
      
      {imageUrl && (
        <div 
          className={`flex-1 flex items-center justify-center mb-12 md:mb-0 
                     ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div 
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div 
              className="absolute -inset-4 rounded-full opacity-30 blur-2xl"
              style={{ 
                background: `radial-gradient(circle at center, ${highlightColor} 0%, transparent 70%)`,
                animation: 'pulse-neon 4s infinite ease-in-out'
              }}
            />
            
            <div 
              className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl"
              style={calculateTransform()}
            >
              <img
                src={imageUrl}
                alt={headline}
                className="w-72 h-72 object-cover hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
              
              <div className="absolute bottom-4 right-4 flex space-x-2">
                <button className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <Star className="w-5 h-5 text-white" />
                </button>
                <button className="p-2 backdrop-blur-sm bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-xs font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-neon-blue" />
                <span>Premium</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div 
        className={`flex-1 px-0 md:px-12 text-center md:text-left 
                  ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}
        style={{ animationDelay: '0.4s' }}
      >
        <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium mb-6 border border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-neon-pink animate-pulse" />
            <span>VibeTech™</span>
          </div>
        </div>
        
        <h3 className="font-orbitron text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          {headline}
        </h3>
        
        <p className="text-xl text-white/90 font-montserrat mb-8 leading-relaxed">
          {subhead}
        </p>
        
        <div className="glass-morphism p-6 rounded-xl mb-8 text-left border border-white/10">
          <h4 className="text-neon-blue font-orbitron text-lg mb-4 flex items-center gap-2">
            <Star className="w-5 h-5" />
            <span>Features</span>
          </h4>
          <div className="mb-4">{features}</div>
        </div>
        
        <button className="premium-button">
          <span className="flex items-center gap-2">
            Explore Collection
            <ArrowUpRight className="w-5 h-5" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default ProductHighlight;

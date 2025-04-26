
import { useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface HolographicFeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  imageUrl?: string;
  primaryColor?: string;
  secondaryColor?: string;
  hoverText?: string;
  buttonLabel?: string;
  buttonLink?: string;
}

const HolographicFeatureCard = ({
  title,
  description,
  icon,
  imageUrl,
  primaryColor = "rgba(217, 70, 239, 1)",
  secondaryColor = "rgba(30, 174, 219, 1)",
  hoverText = "Experience",
  buttonLabel = "Explore",
  buttonLink = "#"
}: HolographicFeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate the mouse position relative to the card center
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    
    setMousePosition({ x, y });
  };
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };
  
  const calculateTransform = () => {
    if (!isHovered) return {};
    
    const maxTilt = 10; // Maximum tilt angle in degrees
    const rotateX = -mousePosition.y * maxTilt; // Invert Y for natural tilt
    const rotateY = mousePosition.x * maxTilt;
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: "transform 0.1s ease-out"
    };
  };
  
  const calculateGlowPosition = () => {
    // Make the glow follow the mouse position
    const x = 50 + mousePosition.x * 25; // 25% movement range
    const y = 50 + mousePosition.y * 25;
    
    return {
      background: `radial-gradient(circle at ${x}% ${y}%, 
                    ${primaryColor}50 0%, 
                    ${secondaryColor}30 40%, 
                    transparent 70%)`,
      opacity: isHovered ? 1 : 0,
      transition: "opacity 0.3s ease-out"
    };
  };
  
  // Color gradient for the edge glow effect
  const primaryColorRgb = primaryColor.replace(/[^\d,]/g, '');
  const secondaryColorRgb = secondaryColor.replace(/[^\d,]/g, '');
  
  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-sm min-h-[400px] rounded-2xl overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      style={calculateTransform()}
    >
      {/* Holographic edge effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br rounded-2xl"
          style={{
            background: `linear-gradient(135deg, rgba(${primaryColorRgb}, 0.5) 0%, rgba(${secondaryColorRgb}, 0.5) 100%)`,
            opacity: 0.3,
            filter: "blur(8px)"
          }}
        />
        
        <div 
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, rgba(${primaryColorRgb}, 0.2) 0%, rgba(${secondaryColorRgb}, 0.2) 100%)`,
            opacity: isHovered ? 0.8 : 0.2,
            transition: "opacity 0.3s ease-out"
          }}
        />
      </div>
      
      {/* Card background and content */}
      <div className="relative h-full z-10 backdrop-blur-xl bg-black/40 rounded-2xl p-1 overflow-hidden">
        {/* Inner border */}
        <div className="absolute inset-0 rounded-2xl border border-white/10" />
        
        {/* Interactive glow effect that follows mouse */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={calculateGlowPosition()}
        />
        
        {/* Holographic grid effect */}
        <div 
          className="absolute inset-0 cosmic-grid opacity-10 pointer-events-none"
          style={{
            backgroundSize: "20px 20px",
            opacity: isHovered ? 0.2 : 0.05,
            transition: "opacity 0.3s ease-out"
          }}
        />

        <div className="relative z-10 h-full flex flex-col">
          {/* Top image/gradient section */}
          {imageUrl ? (
            <div className="relative h-40 overflow-hidden">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-full object-cover"
                style={{
                  transform: isHovered ? `scale(1.1) translateX(${mousePosition.x * 5}px) translateY(${mousePosition.y * 5}px)` : "scale(1)",
                  transition: "transform 0.3s ease-out"
                }}
              />
              {/* Image overlay gradient */}
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black to-black/0"
                style={{
                  opacity: isHovered ? 0.7 : 0.5,
                  transition: "opacity 0.3s ease-out"
                }}
              />
            </div>
          ) : (
            <div 
              className="h-40 w-full"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}80 0%, ${secondaryColor}80 100%)`,
              }}
            />
          )}
          
          {/* Icon positioned on top of the image/gradient section */}
          <div 
            className="absolute top-6 left-6 w-14 h-14 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center"
            style={{
              boxShadow: isHovered ? `0 0 15px 5px ${primaryColor}40` : "none",
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              transition: "all 0.3s ease-out"
            }}
          >
            <div className="text-white">
              {icon}
            </div>
          </div>
          
          {/* Content section */}
          <div className="p-6 flex-grow flex flex-col">
            <h3 
              className="text-xl font-orbitron font-bold mb-2 text-white"
              style={{
                textShadow: isHovered ? `0 0 8px ${primaryColor}80` : "none",
                transition: "text-shadow 0.3s ease-out"
              }}
            >
              {title}
            </h3>
            
            <p className="text-white/80 mb-6 font-montserrat flex-grow">
              {description}
            </p>
            
            <a 
              href={buttonLink}
              className="inline-flex items-center justify-center w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/10 text-white font-medium border border-white/20 transition-all group"
              style={{
                background: isHovered 
                  ? `linear-gradient(90deg, ${primaryColor}60 0%, ${secondaryColor}60 100%)` 
                  : "rgba(255, 255, 255, 0.1)",
                boxShadow: isHovered ? `0 0 20px 0px ${primaryColor}40` : "none",
                transition: "all 0.3s ease-out"
              }}
            >
              <span>{buttonLabel}</span>
              <span 
                className="ml-2 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              >
                →
              </span>
            </a>
          </div>
          
          {/* Hover text overlay */}
          <div 
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/80 via-black/60 to-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              transition: "opacity 0.5s ease-out"
            }}
          >
            <div 
              className="font-orbitron text-4xl font-bold text-white"
              style={{
                opacity: isHovered ? 1 : 0,
                transform: isHovered ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.5s ease-out",
                textShadow: `0 0 20px ${primaryColor}, 0 0 40px ${secondaryColor}80`
              }}
            >
              {hoverText}
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scanning light effect */}
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl"
        style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.3s ease-out" }}
      >
        <div 
          className="absolute w-40 h-[400%] -top-[150%] -left-40 bg-white/10 blur-xl"
          style={{
            transform: `rotate(35deg) translateX(${isHovered ? '400%' : '-100%'})`,
            transition: "transform 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)"
          }}
        />
      </div>
    </motion.div>
  );
};

export default HolographicFeatureCard;

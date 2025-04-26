
import { useRef, useEffect, useState } from 'react';
import { motion, useAnimation, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollTransitionProps {
  id?: string;
  colorFrom?: string;
  colorTo?: string;
}

const ScrollTransition = ({ 
  id = "scroll-transition", 
  colorFrom = "rgba(217, 70, 239, 0.6)", 
  colorTo = "rgba(30, 174, 219, 0.6)" 
}: ScrollTransitionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; color: string; speed: number; }>>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const controls = useAnimation();
  
  // Generate particles based on container dimensions
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
        
        // Generate particles
        const particlesCount = Math.floor((width * height) / 10000); // Scale particle count to screen size
        const newParticles = [];
        
        for (let i = 0; i < particlesCount; i++) {
          const size = Math.random() * 3 + 1;
          // Create a gradient between the two colors
          const ratio = Math.random();
          const color = i % 2 === 0 ? colorFrom : colorTo;
          
          newParticles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size,
            color,
            speed: Math.random() * 2 + 0.5,
          });
        }
        
        setParticles(newParticles);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [colorFrom, colorTo]);
  
  // Animation for the whole component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.25, 0.75, 0.9], [0.9, 1, 1, 0.9]);
  const springyScale = useSpring(scale, { damping: 15, stiffness: 100 });
  
  // Star particles follow mouse effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <motion.div
      id={id}
      ref={containerRef}
      className="relative w-full h-[30vh] md:h-[40vh] overflow-hidden bg-cosmic-900"
      style={{ 
        opacity,
        scale: springyScale,
      }}
    >
      {/* Wave patterns */}
      <svg 
        className="absolute w-full h-full top-0 left-0"
        preserveAspectRatio="none"
        viewBox="0 0 1440 300"
      >
        <motion.path
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,192C672,203,768,213,864,208C960,203,1056,181,1152,154.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill={colorFrom}
          fillOpacity="0.2"
          initial={{ y: 300 }}
          animate={{ 
            y: 0,
            transition: { 
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut"
            }
          }}
        />
        
        <motion.path
          d="M0,224L48,240C96,256,192,288,288,272C384,256,480,192,576,170.7C672,149,768,171,864,197.3C960,224,1056,256,1152,250.7C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill={colorTo}
          fillOpacity="0.2"
          initial={{ y: 300 }}
          animate={{ 
            y: 0,
            transition: { 
              duration: 2.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: 0.5
            }
          }}
        />
      </svg>
      
      {/* Particles */}
      <div className="absolute inset-0">
        {particles.map((particle, index) => {
          // Calculate distance from mouse to create attraction effect
          const dx = particle.x - mousePosition.x;
          const dy = particle.y - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = Math.sqrt(dimensions.width * dimensions.width + dimensions.height * dimensions.height) / 4;
          const distanceFactor = Math.min(1, distance / maxDistance);
          
          // Attraction strength (stronger when closer)
          const attraction = distanceFactor < 0.2 ? (0.2 - distanceFactor) * 50 : 0;
          
          // Direction vector from particle to mouse
          const dirX = dx !== 0 ? dx / Math.abs(dx) : 0;
          const dirY = dy !== 0 ? dy / Math.abs(dy) : 0;
          
          return (
            <motion.div
              key={index}
              className="absolute rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                x: particle.x,
                y: particle.y,
                filter: "blur(0.5px)"
              }}
              animate={{ 
                x: [
                  particle.x,
                  particle.x + (Math.sin(index) * particle.speed * 20) - (dirX * attraction),
                  particle.x
                ],
                y: [
                  particle.y,
                  particle.y + (Math.cos(index) * particle.speed * 20) - (dirY * attraction),
                  particle.y
                ],
                opacity: [0.4, 1, 0.4],
                scale: [1, particle.speed / 2 + 1, 1],
              }}
              transition={{
                duration: 3 + particle.speed * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.02 % 1
              }}
            />
          );
        })}
      </div>
      
      {/* Center cosmic portal effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-pink to-neon-blue blur-3xl opacity-40" />
          
          <motion.div 
            className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-neon-pink to-neon-blue p-0.5"
            animate={{ 
              rotate: 360,
              boxShadow: [
                '0 0 10px rgba(217, 70, 239, 0.7), 0 0 20px rgba(30, 174, 219, 0.5)',
                '0 0 20px rgba(217, 70, 239, 0.9), 0 0 40px rgba(30, 174, 219, 0.7)',
                '0 0 10px rgba(217, 70, 239, 0.7), 0 0 20px rgba(30, 174, 219, 0.5)'
              ]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <div className="w-full h-full rounded-full bg-cosmic-900 flex items-center justify-center">
              <motion.div 
                className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-neon-pink/30 to-neon-blue/30 backdrop-blur-sm"
                animate={{ 
                  rotate: -360,
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollTransition;

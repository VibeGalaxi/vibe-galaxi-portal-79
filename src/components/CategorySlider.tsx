import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Star } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { useIsMobile } from "@/hooks/use-mobile";
import { categories } from "@/data/products";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, categoryId, categoryColor }: { 
  product: typeof categories[0]["products"][0],
  categoryId: string,
  categoryColor: string
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card 
          className="relative overflow-hidden rounded-xl border-0 transform transition-all duration-500 hover:scale-110 hover:z-20 cursor-pointer group"
          style={{
            background: "rgba(28, 28, 28, 0.7)",
            boxShadow: `0 8px 32px rgba(0, 0, 0, 0.5)`
          }}
          onClick={() => navigate(`/product/${categoryId}/${product.id}`)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className={`absolute inset-0 opacity-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${categoryColor} group-hover:opacity-20 transition-opacity duration-500`} 
          />
          <div className="relative h-[400px] overflow-hidden">
            <div 
              className="absolute inset-0 bg-[#0d0620] mix-blend-color opacity-20 z-10 group-hover:opacity-0 transition-opacity duration-500"
            />
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-110"
            />
            <div 
              className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 backdrop-blur-sm"
            >
              <div className="flex justify-between items-center mb-2 animate-fade-in">
                <h3 className="text-white text-2xl font-bold font-orbitron neon-text">{product.name}</h3>
                {product.limitedEdition && (
                  <Badge 
                    variant="outline" 
                    className="bg-[#ff00ff]/20 text-white border-[#ff00ff]/50 animate-pulse-neon"
                  >
                    Limited Edition
                  </Badge>
                )}
              </div>
              <p className="text-gray-300 text-base mb-4 font-montserrat">{product.description}</p>
              <Badge className={`bg-gradient-to-r ${categoryColor} text-[#0d0620] mb-3 self-start font-medium py-1 px-3`}>
                {product.badge}
              </Badge>
              <button 
                className={`px-6 py-3 rounded-lg bg-gradient-to-r ${categoryColor} text-[#0d0620] font-bold transition-all duration-300 hover:animate-pulse-neon transform hover:scale-105 relative overflow-hidden`}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 font-orbitron">
                  Shop Now
                  <Star className="w-4 h-4 animate-pulse" />
                </span>
                <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></span>
              </button>
            </div>
            
            <div 
              className={`absolute inset-0 bg-gradient-to-tr ${categoryColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
              style={{
                transform: isHovered ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg)' : 'perspective(1000px) rotateX(0) rotateY(0)',
                transition: 'transform 0.5s ease-out'
              }}
            />
          </div>
          
          <div 
            className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none neon-border`}
            style={{
              boxShadow: `0 0 15px 2px ${categoryColor.includes('ff00ff') ? '#ff00ff' : categoryColor.includes('00ffff') ? '#00ffff' : '#9b87f5'}`
            }}
          />
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 backdrop-blur-xl bg-black/80 border border-white/10 text-white p-4">
        <div className="flex flex-col">
          <span className="font-orbitron text-sm text-[#00ffff]">EXCLUSIVE VIBES</span>
          <span className="text-xs text-white/70 mt-1">Join the 3.2k people who own this item</span>
          <div className="mt-2 flex items-center gap-1">
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-[#ff00ff] text-[#ff00ff]" />
            ))}
            <span className="text-xs ml-1 text-white/70">(128 reviews)</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

const CategorySlider = () => {
  const [activeTab, setActiveTab] = useState("t-shirts");
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('category-slider');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section 
      id="category-slider"
      className="w-full py-32 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #1a0933 0%, #0d0620 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, rgba(26, 9, 51, 0.8) 0%, rgba(13, 6, 32, 1) 100%)`,
          backgroundSize: "200% 200%",
          animation: "cosmic-pulse 20s infinite ease-in-out"
        }}
      />
      
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array(100).fill(0).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('/photo-1465101162946-4377e57745c3')`,
          mixBlendMode: 'screen',
          animation: 'float 15s infinite ease-in-out alternate'
        }}
      />
      
      <div className="w-full relative z-10">
        <div className="text-center mb-16">
          <h2 
            className={`font-orbitron text-center text-5xl md:text-6xl lg:text-7xl font-bold mb-4
                      bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] via-[#9b87f5] to-[#00ffff]
                      transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-8'}
                      hover:animate-glitch cursor-default select-none`}
            style={{ 
              textShadow: "0 0 15px rgba(255, 0, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.7)"
            }}
          >
            Explore the VibeMerch™ Cosmos
          </h2>
          <p className="text-[#00ffff] font-montserrat max-w-xl mx-auto opacity-80 text-lg">
            Each piece unlocks exclusive digital experiences in the VibeGalaxi universe
          </p>
        </div>
        
        <Tabs 
          defaultValue="t-shirts" 
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          className="w-full mb-20"
        >
          <div className="relative">
            <div 
              className="absolute inset-0 bg-gradient-to-r from-[#ff00ff]/20 via-transparent to-[#00ffff]/20 rounded-xl blur-xl -z-10"
              style={{ transform: 'translateY(20%)' }}
            />
            <TabsList 
              className={`w-full glass-morphism backdrop-blur-2xl p-4 rounded-xl grid grid-cols-3 md:grid-cols-5 
                          transition-all duration-500 gap-3 bg-[#1c1c1c]/50 border border-white/5
                          ${isVisible ? 'opacity-100' : 'opacity-0 transform -translate-y-4'}`}
            >
              {categories.map((category, index) => (
                <TabsTrigger 
                  key={category.id}
                  value={category.id}
                  className={`rounded-lg text-lg py-5 px-4 transition-all duration-500 
                            flex items-center justify-center gap-3 group relative overflow-hidden
                            ${activeTab === category.id 
                              ? `bg-gradient-to-r ${category.color} text-[#0d0620] font-bold shadow-lg` 
                              : 'hover:bg-white/5 text-white/70'}`}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    boxShadow: activeTab === category.id 
                      ? `0 10px 20px -10px ${category.color.includes('ff00ff') ? '#ff00ff' : category.color.includes('00ffff') ? '#00ffff' : '#9b87f5'}` 
                      : 'none'
                  }}
                >
                  <div 
                    className={`absolute inset-0 opacity-0 ${activeTab !== category.id ? 'group-hover:opacity-10' : ''} bg-gradient-to-r ${category.color} transition-opacity duration-300`}
                  />
                  <category.icon 
                    className={`h-6 w-6 transition-all duration-500
                             ${activeTab === category.id ? 'text-[#0d0620]' : 'text-white'}
                             ${activeTab === category.id ? 'animate-pulse' : 'group-hover:scale-125'}`}
                  />
                  <span className="relative z-10">{category.name}</span>
                  
                  {activeTab === category.id && (
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30" />
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent 
              key={category.id}
              value={category.id}
              className={`mt-12 transition-all duration-700 px-4 
                        ${activeTab === category.id 
                          ? 'opacity-100 transform translate-x-0' 
                          : 'absolute opacity-0 transform translate-x-20'}`}
            >
              <ScrollArea className="w-full pb-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pb-6">
                  {category.products.map((product, index) => (
                    <div 
                      key={product.id}
                      className="transform transition-all duration-700"
                      style={{ 
                        transitionDelay: `${index * 150}ms`,
                        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(50px) scale(0.9)',
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      <ProductCard 
                        product={product} 
                        categoryId={category.id}
                        categoryColor={category.color} 
                      />
                    </div>
                  ))}
                </div>
              </ScrollArea>
              
              <div className="flex justify-center mt-8">
                <button 
                  className="px-8 py-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md text-white font-orbitron
                            transition-all duration-300 flex items-center gap-2 hover:bg-white/10"
                >
                  View All {category.name}
                  <Star className="w-5 h-5 text-[#00ffff]" />
                </button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      <style>
        {`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.9; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); text-shadow: 4px 0 #00ffff; }
          40% { transform: translate(-2px, -2px); text-shadow: -4px 0 #ff00ff; }
          60% { transform: translate(2px, 2px); text-shadow: 2px 1px #9b87f5; }
          80% { transform: translate(2px, -2px); text-shadow: -4px 2px #00ffff; }
          100% { transform: translate(0); text-shadow: 0 0 15px rgba(255, 0, 255, 0.7), 0 0 10px rgba(0, 255, 255, 0.7); }
        }
        
        @keyframes cosmic-pulse {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        .hover-glitch:hover {
          animation: glitch 0.5s ease-in-out;
        }
      `}
      </style>
    </section>
  );
};

export default CategorySlider;

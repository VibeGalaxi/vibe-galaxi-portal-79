
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shirt, Coffee, Star, BadgeCheck } from "lucide-react";

// Define the category products
const categories = [
  {
    id: "t-shirts",
    name: "T-Shirts",
    icon: Shirt,
    color: "from-[#ff00ff] to-[#cc00ff]",
    products: [
      {
        id: 1,
        name: "Don't Kill My Vibe",
        description: "Intergalactic best seller with NFC meme lore",
        image: "/photo-1470813740244-df37b8c1edcb",
        badge: "NFC-enabled",
        limitedEdition: true
      },
      {
        id: 2,
        name: "Error 404",
        description: "Glow-in-the-dark coding humor for the metaverse",
        image: "/photo-1500673922987-e212871fec22",
        badge: "Glow-in-dark",
        limitedEdition: false
      },
      {
        id: 3,
        name: "VibeCheck™",
        description: "QR code unlocks exclusive digital art gallery",
        image: "/photo-1526374965328-7f61d4dc18c5",
        badge: "QR-enabled",
        limitedEdition: true
      }
    ]
  },
  {
    id: "mugs",
    name: "Mugs",
    icon: Coffee,
    color: "from-[#00ffff] to-[#00ccff]",
    products: [
      {
        id: 1,
        name: "Morning Vibe Ritual",
        description: "Color-changing mug with cosmic AR activation",
        image: "/photo-1581091226825-a6a2a5aee158",
        badge: "AR-activated",
        limitedEdition: false
      },
      {
        id: 2,
        name: "Caffeinia Portal",
        description: "Your coffee opens a gateway to VibeGalaxi",
        image: "/photo-1487058792275-0ad4aaf24ca7",
        badge: "Heat-reactive",
        limitedEdition: true
      },
      {
        id: 3,
        name: "Binary Brew",
        description: "0s and 1s that translate to 'more coffee please'",
        image: "/photo-1470813740244-df37b8c1edcb",
        badge: "Eco-friendly",
        limitedEdition: false
      }
    ]
  },
  {
    id: "jackets",
    name: "Jackets",
    icon: Star,
    color: "from-[#cc00ff] to-[#9b87f5]",
    products: [
      {
        id: 1,
        name: "Nebulahood™ Classic",
        description: "Glow-in-dark constellation patterns with hidden pockets",
        image: "/photo-1526374965328-7f61d4dc18c5",
        badge: "NFC-enabled",
        limitedEdition: true
      },
      {
        id: 2,
        name: "Quantum Windbreaker",
        description: "Exists in multiple dimensions simultaneously",
        image: "/photo-1500673922987-e212871fec22",
        badge: "Weather-proof",
        limitedEdition: false
      },
      {
        id: 3,
        name: "Astral Denim",
        description: "Embroidered with actual star maps and constellations",
        image: "/photo-1487058792275-0ad4aaf24ca7",
        badge: "Star-mapped",
        limitedEdition: true
      }
    ]
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: BadgeCheck,
    color: "from-[#00ccff] to-[#1EAEDB]",
    products: [
      {
        id: 1,
        name: "Digital Soul Card",
        description: "NFC card that stores your VibeGalaxi identity",
        image: "/photo-1581091226825-a6a2a5aee158",
        badge: "Digital ID",
        limitedEdition: false
      },
      {
        id: 2,
        name: "Holographic Pins",
        description: "Collection of limited edition VibeMerch badges",
        image: "/photo-1470813740244-df37b8c1edcb",
        badge: "Collectible",
        limitedEdition: true
      },
      {
        id: 3,
        name: "Quantum Wallet",
        description: "Stores both crypto and physical currency",
        image: "/photo-1526374965328-7f61d4dc18c5",
        badge: "Multi-dimensional",
        limitedEdition: true
      }
    ]
  }
];

const ProductCard = ({ product, categoryColor }: { 
  product: typeof categories[0]["products"][0],
  categoryColor: string
}) => {
  return (
    <Card className="relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 group border-0 bg-[#1c1c1c]/50">
      <div 
        className={`absolute inset-0 opacity-0 rounded-xl border-2 border-transparent bg-gradient-to-r ${categoryColor} group-hover:opacity-10 transition-opacity duration-300`} 
      />
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-white text-xl font-bold">{product.name}</h3>
            {product.limitedEdition && (
              <Badge variant="outline" className="bg-[#ff00ff]/20 text-white border-[#ff00ff]/50">
                Limited
              </Badge>
            )}
          </div>
          <p className="text-gray-300 text-sm mb-4">{product.description}</p>
          <Badge className={`bg-gradient-to-r ${categoryColor} text-[#0d0620] mb-3 self-start`}>
            {product.badge}
          </Badge>
          <button className={`px-4 py-2 rounded-lg bg-gradient-to-r ${categoryColor} text-[#0d0620] font-bold transition-all duration-300 hover:animate-pulse`}>
            Shop Now
          </button>
        </div>
      </div>
    </Card>
  );
};

const CategorySlider = () => {
  const [activeTab, setActiveTab] = useState("t-shirts");
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Trigger animation when component mounts
    setIsVisible(true);
    
    // Intersection Observer for scroll animations
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
      className="w-full py-24 px-4 md:px-8 relative overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, #1a0933 0%, #0d0620 100%)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Twinkling stars effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(circle, transparent 1%, #0d0620 100%)`,
          backgroundSize: "50px 50px",
          opacity: 0.4,
          animation: "twinkle 4s infinite"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Headline with animation */}
        <h2 
          className={`font-orbitron text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-12
                    bg-clip-text text-transparent bg-gradient-to-r from-[#ff00ff] to-[#00ffff]
                    transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-8'}`}
          style={{ 
            textShadow: "0 0 15px rgba(255, 0, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.5)"
          }}
        >
          Explore the VibeMerch™ Cosmos
        </h2>
        
        {/* Category Tabs */}
        <Tabs 
          defaultValue="t-shirts" 
          value={activeTab}
          onValueChange={(value) => setActiveTab(value)}
          className="w-full max-w-3xl mx-auto mb-12"
        >
          <TabsList 
            className={`w-full bg-[#2d2d2d]/50 backdrop-blur-md p-1 rounded-xl grid grid-cols-2 md:grid-cols-4 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 transform -translate-y-4'}`}
          >
            {categories.map((category, index) => (
              <TabsTrigger 
                key={category.id}
                value={category.id}
                className={`rounded-lg text-lg py-3 px-4 transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:shadow-lg
                          flex items-center justify-center gap-2 group
                          ${activeTab === category.id ? `data-[state=active]:${category.color}` : 'hover:bg-[#4b4b4b]'}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  animation: activeTab === category.id ? 'pulse 2s infinite' : 'none' 
                }}
              >
                <category.icon 
                  className={`h-6 w-6 transition-transform duration-300 group-hover:scale-110
                           ${activeTab === category.id ? 'animate-pulse' : ''}`} 
                />
                <span>{category.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Product Cards */}
          {categories.map((category) => (
            <TabsContent 
              key={category.id}
              value={category.id}
              className={`mt-8 transition-all duration-500 ${activeTab === category.id ? 'opacity-100 translate-x-0' : 'absolute opacity-0 translate-x-20'}`}
            >
              <ScrollArea className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-4">
                  {category.products.map((product) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      categoryColor={category.color}
                    />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      
      <style>
        {`
        @keyframes twinkle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
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

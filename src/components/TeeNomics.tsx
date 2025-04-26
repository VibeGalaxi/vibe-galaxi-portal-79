
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "@/data/products";

const TeeNomics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { categoryId, productId } = useParams();

  const category = categories.find(cat => cat.id === categoryId);
  const product = category?.products.find(p => p.id === productId);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 px-4 bg-[#9333EA]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-3">
          TEE-NOMICS
        </h2>
        <p className="text-white/90 mb-16 max-w-2xl mx-auto">
          Descoperă distribuția exclusivă a colecției noastre și potențialul tău de creștere în Universul VibeGalaxy! 🚀
        </p>

        <div className="relative max-w-2xl mx-auto">
          {/* Main circle with product image */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full border-4 border-white/10 animate-spin-slow" 
                   style={{ animationDuration: '30s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full overflow-hidden bg-white/5 backdrop-blur-sm p-4">
                  <img 
                    src={product?.image} 
                    alt={product?.name}
                    className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="text-white text-center">
                  <div className="text-lg font-semibold">Total Tees</div>
                  <div className="text-4xl font-bold font-orbitron bg-gradient-to-r from-neon-pink to-neon-blue bg-clip-text text-transparent">
                    500
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Distribution labels with enhanced styling */}
          <div className={`absolute left-0 top-1/4 -translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-300`}>
            <div className="glass-card p-4 text-right">
              <div className="text-neon-pink font-bold">Limited Drops</div>
              <div className="text-white/90 text-sm">(50 Epic Tees)</div>
            </div>
          </div>

          <div className={`absolute left-0 top-1/2 -translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-500`}>
            <div className="glass-card p-4 text-right">
              <div className="text-neon-blue font-bold">Meme Collabs</div>
              <div className="text-white/90 text-sm">(75 Collab Tees)</div>
            </div>
          </div>

          <div className={`absolute left-0 bottom-1/4 -translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-700`}>
            <div className="glass-card p-4 text-right">
              <div className="text-white font-bold">Hype Restocks</div>
              <div className="text-white/90 text-sm">(100 Restock Tees)</div>
            </div>
          </div>

          <div className={`absolute right-0 top-1/2 translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-900`}>
            <div className="glass-card p-4 text-left">
              <div className="text-neon-pink font-bold">OG Pre-Orders</div>
              <div className="text-white/90 text-sm">(200 Pre-Order Tees)</div>
            </div>
          </div>

          <div className={`absolute right-0 top-1/4 translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-1100`}>
            <div className="glass-card p-4 text-left">
              <div className="text-neon-blue font-bold">Giveaway Swag</div>
              <div className="text-white/90 text-sm">(75 Free Tees)</div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.2);
          }
          @keyframes spin-slow {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin-slow {
            animation: spin-slow linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TeeNomics;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "@/data/products";
import { Separator } from "@/components/ui/separator";

const TeeNomics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { categoryId, productId } = useParams();

  const category = categories.find(cat => cat.id === categoryId);
  const product = category?.products.find(p => p.id === productId);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-24 px-4 bg-[#9333EA] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto text-center relative">
        <div className="flex items-center justify-center mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
          <div className="mx-4 text-white/60 text-sm tracking-wider">VIBEGALAXY ANALYTICS</div>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        </div>

        <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-3 relative inline-block">
          TEE-NOMICS
          <div className="absolute -top-4 -right-4 w-8 h-8 animate-spin-slow opacity-50">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5" className="text-white/30"/>
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="0.5" className="text-white/50"/>
            </svg>
          </div>
        </h2>

        <p className="text-white/90 mb-16 max-w-2xl mx-auto relative">
          <span className="inline-block animate-float">
            Descoperă distribuția exclusivă a colecției noastre și potențialul tău de creștere în Universul VibeGalaxy! 🚀
          </span>
        </p>

        <div className="relative max-w-2xl mx-auto">
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full rounded-full border border-white/5 animate-spin-slow"
                   style={{ animationDuration: '40s' }} />
              <div className="absolute w-[90%] h-[90%] rounded-full border border-white/10 animate-spin-slow"
                   style={{ animationDuration: '30s' }} />
              <div className="absolute w-[80%] h-[80%] rounded-full border border-white/15 animate-spin-slow"
                   style={{ animationDuration: '20s' }} />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-3/4 h-3/4 rounded-full overflow-hidden bg-white/5 backdrop-blur-sm p-4 
                            shadow-[0_0_50px_rgba(147,51,234,0.5)] border border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                <img 
                  src={product?.image} 
                  alt={product?.name}
                  className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="bg-black/40 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/10
                            shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <div className="text-white text-center relative">
                  <div className="text-lg font-semibold mb-1">Total Tees</div>
                  <div className="text-5xl font-bold font-orbitron bg-gradient-to-r from-neon-pink to-neon-blue 
                                bg-clip-text text-transparent animate-pulse-glow">
                    500
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`absolute left-0 top-1/4 -translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-300`}>
            <div className="glass-card p-6 text-right relative overflow-hidden group hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-neon-pink font-bold text-lg mb-1">Limited Drops</div>
              <div className="text-white/90">(50 Epic Tees)</div>
              <div className="mt-2 h-1 w-full bg-gradient-to-r from-neon-pink to-transparent"></div>
            </div>
          </div>

          <div className={`absolute left-0 top-1/2 -translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-500`}>
            <div className="glass-card p-6 text-right relative overflow-hidden group hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-l from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-neon-blue font-bold text-lg mb-1">Meme Collabs</div>
              <div className="text-white/90">(75 Collab Tees)</div>
              <div className="mt-2 h-1 w-full bg-gradient-to-l from-neon-blue to-transparent"></div>
            </div>
          </div>

          <div className={`absolute left-0 bottom-1/4 -translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-700`}>
            <div className="glass-card p-6 text-right relative overflow-hidden group hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-neon-pink font-bold text-lg mb-1">Hype Restocks</div>
              <div className="text-white/90">(100 Restock Tees)</div>
              <div className="mt-2 h-1 w-full bg-gradient-to-r from-neon-pink to-transparent"></div>
            </div>
          </div>

          <div className={`absolute right-0 top-1/2 translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-900`}>
            <div className="glass-card p-6 text-left relative overflow-hidden group hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-l from-neon-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-neon-pink font-bold text-lg mb-1">OG Pre-Orders</div>
              <div className="text-white/90">(200 Pre-Order Tees)</div>
              <div className="mt-2 h-1 w-full bg-gradient-to-l from-neon-pink to-transparent"></div>
            </div>
          </div>

          <div className={`absolute right-0 top-1/4 translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-1100`}>
            <div className="glass-card p-6 text-left relative overflow-hidden group hover:scale-105 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-l from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-neon-blue font-bold text-lg mb-1">Giveaway Swag</div>
              <div className="text-white/90">(75 Free Tees)</div>
              <div className="mt-2 h-1 w-full bg-gradient-to-l from-neon-blue to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="h-20 bg-gradient-to-t from-[#7928CA] to-transparent opacity-20"></div>
      </div>

      <style>
        {`
          .glass-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(8px);
            border-radius: 16px;
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
          @keyframes pulse-glow {
            0%, 100% {
              text-shadow: 0 0 20px rgba(217, 70, 239, 0.7);
            }
            50% {
              text-shadow: 0 0 40px rgba(30, 174, 219, 0.9);
            }
          }
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TeeNomics;

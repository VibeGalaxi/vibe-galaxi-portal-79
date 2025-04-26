
import { useEffect, useState } from "react";

const TeeNomics = () => {
  const [isVisible, setIsVisible] = useState(false);

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
          Check our Tee-nomics for drops, cool designs, and high potential—feeling your wardrobe growth! 🚀
        </p>

        <div className="relative max-w-2xl mx-auto">
          {/* Main circle image */}
          <div className="relative aspect-square">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/lovable-uploads/b6160187-d490-479e-af65-7393064bb311.png" 
                alt="Tee-nomics Distribution"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-white text-center">
                <div className="text-lg font-semibold">Total Tees</div>
                <div className="text-4xl font-bold font-orbitron">500</div>
              </div>
            </div>
          </div>

          {/* Distribution labels */}
          <div className={`absolute left-0 top-1/4 -translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-300`}>
            <div className="text-right">
              <div className="text-white font-bold">Limited Drops: 10%</div>
              <div className="text-white/60 text-sm">(50 Epic Tees)</div>
            </div>
          </div>

          <div className={`absolute left-0 top-1/2 -translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-500`}>
            <div className="text-right">
              <div className="text-white font-bold">Meme Collabs: 15%</div>
              <div className="text-white/60 text-sm">(75 Collab Tees)</div>
            </div>
          </div>

          <div className={`absolute left-0 bottom-1/4 -translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-700`}>
            <div className="text-right">
              <div className="text-white font-bold">Hype Restocks: 20%</div>
              <div className="text-white/60 text-sm">(100 Restock Tees)</div>
            </div>
          </div>

          <div className={`absolute right-0 top-1/2 translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-900`}>
            <div className="text-left">
              <div className="text-white font-bold">OG Pre-Orders: 40%</div>
              <div className="text-white/60 text-sm">(200 Pre-Order Tees)</div>
            </div>
          </div>

          <div className={`absolute right-0 top-1/4 translate-x-1/2 transform ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 delay-1100`}>
            <div className="text-left">
              <div className="text-white font-bold">Giveaway Swag: 15%</div>
              <div className="text-white/60 text-sm">(75 Free Tees)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeeNomics;

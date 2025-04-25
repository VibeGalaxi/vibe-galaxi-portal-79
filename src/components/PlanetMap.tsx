
import { Smartphone, AppWindow, MessageCircle, QrCode } from "lucide-react";

const planets = [
  {
    name: "Planet Drip",
    description: "T-shirts that speak in memes",
    icon: Smartphone,
    color: "from-[#8B5CF6] to-[#F97316]",
  },
  {
    name: "Caffeinia",
    description: "Mugs infused with cosmic caffeine",
    icon: MessageCircle,
    color: "from-[#1EAEDB] to-[#D946EF]",
  },
  {
    name: "Nebulahood™",
    description: "Hoodies that defy reality",
    icon: AppWindow,
    color: "from-[#D946EF] to-[#9b87f5]",
  },
  {
    name: "OrbitCards™",
    description: "NFC-powered identity cards",
    icon: QrCode,
    color: "from-[#F97316] to-[#9b87f5]",
  },
];

const PlanetMap = () => (
  <div className="flex flex-wrap justify-center gap-8 pt-8">
    {planets.map((planet) => (
      <div
        key={planet.name}
        className={`group rounded-2xl p-6 w-72 bg-gradient-to-br ${planet.color} shadow-xl hover:scale-105 transition-transform cursor-pointer glass-morphism relative overflow-hidden`}
        tabIndex={0}
        aria-label={planet.name}
      >
        <div className="flex items-center mb-3 gap-3">
          <div className="p-3 rounded-full bg-white/10 backdrop-blur shadow-inner">
            <planet.icon size={32} color="#fff" />
          </div>
          <span className="font-orbitron uppercase text-white/90 text-xl tracking-wider">{planet.name}</span>
        </div>
        <p className="font-montserrat text-white/80 text-base mb-1">{planet.description}</p>
        <span className="absolute bottom-3 right-4 text-xs italic text-white/40 opacity-0 group-hover:opacity-100 transition-opacity">Click for lore!</span>
      </div>
    ))}
  </div>
);

export default PlanetMap;

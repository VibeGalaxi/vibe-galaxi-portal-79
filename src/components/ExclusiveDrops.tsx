
import { Calendar, Gift } from "lucide-react";

const drops = [
  {
    date: "May 1",
    name: "VibeHolo Collection",
    desc: "Wearable holograms, merch edition",
    tag: "Upcoming"
  },
  {
    date: "May 15",
    name: "Neural Streetwear",
    desc: "AI-generated patterns, human vibes",
    tag: "Register"
  },
  {
    date: "June 1",
    name: "Quantum Caps",
    desc: "Limited quantum-pattern snapbacks",
    tag: "Soon"
  }
];

const ExclusiveDrops = () => (
  <section className="py-24 bg-gradient-to-tr from-[#1A1F2C] via-[#21063e] to-[#1EAEDB]/20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-4">Exclusive Drops</h2>
        <p className="text-white/80 text-lg">The next limited collections that will make history in VibeGalaxi</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {drops.map((drop) => (
          <div key={drop.name} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] rounded-xl opacity-50 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            <div className="relative glass-morphism rounded-xl p-6 h-full transform group-hover:scale-105 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="text-[#D946EF]" />
                  <span className="text-white/90">{drop.date}</span>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold" 
                      style={{
                        background: drop.tag === "Upcoming" ? "#1EAEDB" : 
                                  drop.tag === "Register" ? "#D946EF" : "#9b87f5",
                      }}>
                  {drop.tag}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{drop.name}</h3>
              <p className="text-white/70">{drop.desc}</p>
              <Gift className="absolute bottom-4 right-4 text-white/20 group-hover:text-[#D946EF] transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExclusiveDrops;

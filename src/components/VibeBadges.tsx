
import { Award, Star } from "lucide-react";

const badges = [
  {
    name: "Early Vibe Pioneer",
    desc: "Primii 100 de membri VibeGalaxi",
    rarity: "Legendary",
    color: "#FFD700"
  },
  {
    name: "Meme Prophet",
    desc: "Top 10 viral memes create",
    rarity: "Epic",
    color: "#D946EF"
  },
  {
    name: "Style Oracle",
    desc: "100 de previzii AI deblocate",
    rarity: "Rare",
    color: "#1EAEDB"
  }
];

const VibeBadges = () => (
  <section className="py-24 bg-gradient-to-bl from-[#1A1F2C] via-[#D946EF]/20 to-[#1EAEDB]/20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-4">Vibe Badges</h2>
        <p className="text-white/80 text-lg">Colecționează badge-uri unice și deblocheaza puteri speciale în VibeGalaxi</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {badges.map((badge) => (
          <div key={badge.name} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] rounded-xl opacity-50 group-hover:opacity-100 transition-opacity -z-10 blur-xl" />
            <div className="relative glass-morphism rounded-xl p-6 h-full transform hover:scale-105 transition-all border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <Award size={48} style={{ color: badge.color }} className="animate-pulse" />
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10">
                  {badge.rarity}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{badge.name}</h3>
              <p className="text-white/70">{badge.desc}</p>
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#FFD700]" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default VibeBadges;

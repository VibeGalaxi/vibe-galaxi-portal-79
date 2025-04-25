
import { Rocket, Gift, Users, Star, Zap } from "lucide-react";

const roadmap = [
  {
    label: "VibeGalaxi Launch",
    desc: "First drop of cosmic merch, with NFC and AR!",
    icon: <Rocket size={32} className="text-[#1EAEDB]" />,
    time: "Q2 2025"
  },
  {
    label: "Community Meme Wall",
    desc: "User-generated memes & lore at the highest level.",
    icon: <Users size={32} className="text-[#9b87f5]" />,
    time: "Q2 2025"
  },
  {
    label: "AR Unboxing & Badge Drops",
    desc: "Unboxing with holographic effects and NFT badges.",
    icon: <Gift size={32} className="text-[#D946EF]" />,
    time: "Q3 2025"
  },
  {
    label: "Viral Leaderboard",
    desc: "Competition with top users, titles & prizes.",
    icon: <Star size={32} className="text-amber-300" />,
    time: "Q4 2025"
  },
  {
    label: "Mega Drop & Mystery Quest",
    desc: "Secret quest for pioneers – vibe hidden!",
    icon: <Zap size={32} className="text-[#F97316]" />,
    time: "Soon™"
  },
];

const TimelineRoadmap = () => (
  <section id="roadmap" className="py-20 bg-gradient-to-r from-[#1EAEDB]/20 via-[#D946EF]/10 to-[#1A1F2C] px-4">
    <div className="max-w-2xl mx-auto text-center mb-10">
      <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-3 drop-shadow-xl">Roadmap 2025</h2>
      <p className="text-white/80 font-montserrat mb-2">What's coming next in VibeGalaxi? Be among the first pioneers.</p>
    </div>
    <div className="flex flex-col gap-6 max-w-2xl mx-auto">
      {roadmap.map((m, idx) => (
        <div
          key={m.label}
          className={`flex flex-col md:flex-row gap-4 items-center glass-morphism py-4 px-6 rounded-2xl shadow-xl border-l-4`}
          style={{ borderColor: idx % 2 === 0 ? "#D946EF" : "#1EAEDB" }}
        >
          <div className="mb-2">{m.icon}</div>
          <div className="text-left flex-1">
            <div className="font-orbitron text-xl text-white mb-1">{m.label}</div>
            <div className="font-montserrat text-white/80">{m.desc}</div>
          </div>
          <div className="font-bold text-[#9b87f5]">{m.time}</div>
        </div>
      ))}
    </div>
  </section>
);

export default TimelineRoadmap;

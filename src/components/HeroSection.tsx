
import { ArrowDown } from "lucide-react";
import AnimatedArrow from "./AnimatedArrow";

const HeroSection = () => {
  return (
    <section
      className="relative flex flex-col items-center justify-center min-h-[90vh] px-4 pb-10"
      style={{
        background: "linear-gradient(115deg, #1A1F2C 60%, #221F26 100%)",
      }}
    >
      {/* Animated Galaxy/Starfield BG */}
      <div
        className="absolute inset-0 z-0 animate-fade-in"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(155,135,245,0.35) 0%, transparent 70%), radial-gradient(circle at 70% 40%, rgba(217,70,239,0.20) 0%, transparent 80%), url('/photo-1470813740244-df37b8c1edcb') center/cover",
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center mt-16 sm:mt-24">
        <h1 className="font-orbitron text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg tracking-tight bg-gradient-to-r from-[#9b87f5] via-[#D946EF] to-[#1EAEDB] bg-clip-text text-transparent">
          Your Merch Is From Another Dimension.
        </h1>
        <p className="mt-4 mb-10 text-lg md:text-2xl font-montserrat text-white/80 max-w-xl">
          VibeMerch™ isn’t just clothing—it’s a wearable portal to VibeGalaxi, the meme-powered universe where style, lore, and chaos collide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#story"
            className="px-8 py-3 rounded-lg bg-gradient-to-br from-[#D946EF] via-[#1EAEDB] to-[#9b87f5] text-white text-lg font-bold shadow-xl hover:scale-105 transition-transform hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#D946EF] animate-pulse-neon"
          >
            Explore the VibeGalaxi →
          </a>
          <a
            href="#join"
            className="px-8 py-3 rounded-lg border-2 border-white/40 text-white text-lg font-bold shadow-xl hover:bg-[#1EAEDB]/10 hover:border-[#D946EF] transition-all focus:outline-none focus:ring-2 focus:ring-[#1EAEDB]"
          >
            Become a Vibonaut (Join Early Access)
          </a>
        </div>
        <div className="flex flex-col items-center mt-2 animate-fade-in">
          <span className="text-sm text-white/70 font-montserrat mb-1">Scroll to Begin Your Journey</span>
          <AnimatedArrow />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

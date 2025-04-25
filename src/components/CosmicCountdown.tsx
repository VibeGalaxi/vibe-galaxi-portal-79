
import { useEffect, useState } from "react";

const CosmicCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(current => {
        if (current.seconds > 0) {
          return { ...current, seconds: current.seconds - 1 };
        }
        if (current.minutes > 0) {
          return { ...current, minutes: current.minutes - 1, seconds: 59 };
        }
        if (current.hours > 0) {
          return { ...current, hours: current.hours - 1, minutes: 59, seconds: 59 };
        }
        return current;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 px-4 bg-[#1A1F2C] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/photo-1506318137071-a8e063b4bec0')] bg-cover bg-center opacity-20" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 text-white animate-pulse">
          Next VibeDrop™ Incoming!
        </h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="w-24 h-24 bg-white/10 backdrop-blur rounded-xl flex flex-col items-center justify-center border border-white/20">
              <span className="font-orbitron text-3xl text-white">{value.toString().padStart(2, '0')}</span>
              <span className="text-white/60 text-sm capitalize">{unit}</span>
            </div>
          ))}
        </div>

        <button className="px-12 py-4 rounded-xl bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] text-white font-bold text-lg hover:scale-105 transition-transform relative overflow-hidden group">
          <span className="relative z-10">Join the Drop</span>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 animate-pulse-neon" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default CosmicCountdown;

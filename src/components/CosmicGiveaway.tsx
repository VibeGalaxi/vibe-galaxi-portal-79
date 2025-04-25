
import { BookX } from "lucide-react";
import { useState } from "react";

const CosmicGiveaway = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-4 bg-[#1A1F2C] relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-8 animate-bounce text-white">
          Cosmic VibeGiveaway™
        </h2>
        
        <p className="text-white/80 mb-8 text-lg">
          Win the ultimate VibeMerch bundle! Enter your email and follow us on social media for double chances.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your cosmic email"
            className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/50 focus:border-[#D946EF] focus:ring-2 focus:ring-[#1EAEDB] transition-all"
            required
          />
          
          <button
            type="submit"
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] text-white font-bold hover:scale-105 transition-transform"
          >
            Enter Giveaway
          </button>
        </form>

        {submitted && (
          <div className="mt-6 p-4 rounded-xl bg-white/10 backdrop-blur border border-[#D946EF] text-white animate-fade-in">
            You're in! 🎉 Follow us for bonus entries
          </div>
        )}

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-black text-white hover:scale-105 transition-transform"
        >
          <BookX />
          Follow Us
        </a>
      </div>
    </section>
  );
};

export default CosmicGiveaway;

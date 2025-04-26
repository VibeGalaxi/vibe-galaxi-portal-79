
import { useState } from "react";
import { Heart } from "lucide-react";

const designs = [
  {
    id: 1,
    name: "Nebula Dreams",
    description: "Glow-in-the-dark constellation pattern",
    image: "https://pythago.ai/bruh/assets/t1.png",
    votes: 1234
  },
  {
    id: 2,
    name: "Cyber Drip",
    description: "RGB reactive thread technology",
    image: "https://pythago.ai/bruh/assets/h2.png",
    votes: 2345
  }
];

const VibeClashArena = () => {
  const [voted, setVoted] = useState<number | null>(null);

  const handleVote = (id: number) => {
    setVoted(id);
    // Add confetti effect here
  };

  return (
    <section className="py-24 px-4 bg-[#1A1F2C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1A1F2C_2px,transparent_2px),linear-gradient(to_bottom,#1A1F2C_2px,transparent_2px)] bg-[size:40px_40px]" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-12 bg-gradient-to-r from-[#1EAEDB] to-[#D946EF] bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">
          VibeClash™ Arena
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {designs.map((design) => (
            <div
              key={design.id}
              className="group relative bg-white/5 rounded-xl overflow-hidden hover:scale-[1.02] transition-all"
            >
              <img
                src={design.image}
                alt={design.name}
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 w-full">
                  <h3 className="text-2xl font-orbitron text-white mb-2">{design.name}</h3>
                  <p className="text-white/80 mb-4">{design.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">{design.votes} votes</span>
                    <button
                      onClick={() => handleVote(design.id)}
                      disabled={voted !== null}
                      className="px-6 py-2 rounded-lg bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] text-white font-bold flex items-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
                    >
                      <Heart className={voted === design.id ? "fill-white" : ""} size={20} />
                      Vote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VibeClashArena;

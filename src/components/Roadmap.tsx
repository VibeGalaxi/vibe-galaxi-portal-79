import { useState, useEffect } from 'react';

const phases = [
  {
    number: 1,
    title: "The Frog Fits Awaken 🐸",
    items: [
      "Drip System Launch",
      "Meme Tea Drop",
      "Online Swag Shop",
      "Charity Tee Store",
      "Viral TikTok Fits"
    ]
  },
  {
    number: 2,
    title: "The Hype Hops Up 🚀",
    items: [
      "Etsy & RedBubble Drops",
      "First Pop-Up Shop",
      "10000+ Meme Fans",
      "Meme Design Contests",
      "Collabs with Creators"
    ]
  },
  {
    number: 3,
    title: "The Royal Tee Leap 👑",
    items: [
      "Major Store Outlets",
      "Streamer Live Drop",
      "50000+ Players",
      "Global Meme Challenges"
    ]
  },
  {
    number: 4,
    title: "The Meme Tee Empire 🌎",
    items: [
      "Big Retail Deals",
      "Meme Merch Universe",
      "Design-Your-Own Tee App",
      "World Meme Domination"
    ]
  }
];

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePhase((current) => (current + 1) % phases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-[#7928CA]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* ROADMAP text */}
          <div className="lg:w-1/4">
            <h2 className="text-[80px] lg:text-[120px] font-orbitron font-bold text-white/90 leading-none tracking-tighter vertical-text">
              ROADMAP
            </h2>
          </div>

          {/* Timeline */}
          <div className="lg:w-3/4">
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div 
                  key={index}
                  className={`relative pl-8 transition-all duration-500 ${
                    activePhase === index ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                  }`}
                >
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-white/20" />
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-2 w-3 h-3 rounded-full border-2 ${
                    activePhase === index ? 'bg-white border-white' : 'bg-transparent border-white/40'
                  } transform -translate-x-1/2`} />

                  {/* Phase content */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <div className="text-[#10B981] font-medium mb-2">Phase {phase.number}</div>
                    <h3 className="text-2xl font-orbitron font-bold text-white mb-4">{phase.title}</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {phase.items.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="flex items-center gap-2 text-white/90"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .vertical-text {
          writing-mode: vertical-lr;
          text-orientation: mixed;
          transform: rotate(180deg);
        }
      `}</style>
    </section>
  );
};

export default Roadmap;

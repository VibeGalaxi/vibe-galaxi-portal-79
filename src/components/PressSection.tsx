
const brands = [
  { name: "CryptoTimes", logo: "/photo-1617791160588-241658c0f566" },
  { name: "Web3 Now", logo: "/photo-1598178145062-31726ffc4a8e" },
  { name: "TrendSetters", logo: "/photo-1635376408077-7b1def081b92" },
  { name: "Memepedia", logo: "/photo-1635070041078-e363dbe005cb" },
];

const PressSection = () => (
  <section id="press" className="py-16 bg-gradient-to-tr from-[#D946EF]/20 to-[#1A1F2C] px-4">
    <div className="max-w-xl mx-auto text-center mb-8">
      <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-2 drop-shadow-xl">Featured In</h2>
      <p className="text-white/80 font-montserrat">VibeGalaxi has appeared in viral media & web3 press:</p>
    </div>
    <div className="flex flex-wrap justify-center items-center gap-7 max-w-3xl mx-auto">
      {brands.map((b) => (
        <div key={b.name} className="bg-white/10 rounded-xl p-5 backdrop-blur shadow-lg flex flex-col items-center hover:scale-105 transition-all">
          <img src={b.logo} alt={b.name} className="w-20 h-14 object-cover mb-1 rounded-md" />
          <span className="text-xs text-white/60 font-montserrat">{b.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default PressSection;

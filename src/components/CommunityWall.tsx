
const posts = [
  {
    user: "VibeLord",
    avatar: "/placeholder.svg",
    text: "Am găsit o nouă locație cosmic vibe spot 🔥",
    img: "/photo-1501854140801-50d01698950b"
  },
  {
    user: "Dripster",
    avatar: "/placeholder.svg",
    text: "Drop de badge la IRL meetup 😎",
    img: "/photo-1721322800607-8c38375eef04"
  },
  {
    user: "Memeo",
    avatar: "/placeholder.svg",
    text: "Mi-a apărut o profeție random pe NFC hoodie. LOL!",
    img: "/photo-1487958449943-2429e8be8625"
  },
];

const CommunityWall = () => (
  <section id="comunitate" className="w-full py-16 px-4 bg-gradient-to-tl from-[#1EAEDB]/20 via-[#D946EF]/20 to-[#1A1F2C]">
    <div className="max-w-3xl mx-auto text-center mb-7">
      <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-2 drop-shadow-xl">Comunitate Vibe</h2>
      <p className="text-white/70 font-montserrat mb-5">Ultimele postări virale & meme spot-uri descoperite de comunitate:</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in">
      {posts.map((p, idx) => (
        <div key={idx} className="glass-morphism p-4 rounded-xl shadow-md hover:scale-105 transition-all flex flex-col items-start relative">
          <img src={p.img} alt="post img" className="w-full h-24 object-cover rounded-md mb-2" />
          <div className="flex items-center gap-2 mb-1 mt-2">
            <img src={p.avatar} alt={p.user} className="w-7 h-7 rounded-full border border-[#9b87f5]" />
            <span className="font-bold text-white">{p.user}</span>
          </div>
          <p className="text-white/90 font-montserrat text-sm mb-1">{p.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CommunityWall;

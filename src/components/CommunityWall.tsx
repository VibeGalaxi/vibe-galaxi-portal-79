
const posts = [
  {
    user: "VibeLord",
    avatar: "https://pythago.ai/bruh/assets/avatar1.png",
    text: "Found a new cosmic vibe spot 🔥",
    img: "https://pythago.ai/bruh/assets/t4.png"
  },
  {
    user: "Dripster",
    avatar: "https://pythago.ai/bruh/assets/avatar2.png",
    text: "Badge drop at the IRL meetup 😎",
    img: "https://pythago.ai/bruh/assets/h4.png"
  },
  {
    user: "Memeo",
    avatar: "https://pythago.ai/bruh/assets/avatar3.png",
    text: "Got a random prophecy on my NFC hoodie. LOL!",
    img: "https://pythago.ai/bruh/assets/monkeyt4.png"
  },
];

const CommunityWall = () => (
  <section id="comunitate" className="w-full py-16 px-4 bg-gradient-to-tl from-[#1EAEDB]/20 via-[#D946EF]/20 to-[#1A1F2C]">
    <div className="max-w-3xl mx-auto text-center mb-7">
      <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-2 drop-shadow-xl">Vibe Community</h2>
      <p className="text-white/70 font-montserrat mb-5">Latest viral posts & meme spots discovered by our community:</p>
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

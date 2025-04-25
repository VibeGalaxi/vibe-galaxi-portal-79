
const posts = [
  {
    user: "VibeLord",
    avatar: "/photo-1614289371518-722f2615943d",
    text: "Found a new cosmic vibe spot 🔥",
    img: "/photo-1541185933-ef5d8ed016c2"
  },
  {
    user: "Dripster",
    avatar: "/photo-1494790108377-be9c29b29330",
    text: "Badge drop at the IRL meetup 😎",
    img: "/photo-1534528741775-53994a69daeb"
  },
  {
    user: "Memeo",
    avatar: "/photo-1539571696357-5a69c17a67c6",
    text: "Got a random prophecy on my NFC hoodie. LOL!",
    img: "/photo-1507499739999-097706ad8914"
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

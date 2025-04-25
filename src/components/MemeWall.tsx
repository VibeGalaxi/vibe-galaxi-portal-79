
const memes = [
  { url: "/photo-1573246123716-6b1782bfc499", caption: "Meme Prophecy #1" },
  { url: "/photo-1507457379470-08b800bebc67", caption: "Human Not Found!" },
  { url: "/photo-1618331833071-ce81bd50d300", caption: "Drip Portal :D" },
  { url: "/photo-1543852786-1cf6624b9987", caption: "Intergalactic Cat" },
];

const MemeWall = () => (
  <section id="memewall" className="py-20 bg-gradient-to-tr from-[#1A1F2C] to-[#D946EF]/10 px-4">
    <div className="max-w-4xl mx-auto text-center mb-7">
      <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-2 drop-shadow-xl">Meme Wall</h2>
      <p className="text-white/80 mb-4">The most viral wall of memes and artifacts created by our community.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto animate-fade-in">
      {memes.map((m) => (
        <div key={m.url} className="group rounded-xl overflow-hidden shadow-lg bg-white/10 backdrop-blur-xl glass-morphism hover:scale-105 hover:shadow-2xl transition-all cursor-pointer relative">
          <img src={m.url} alt={m.caption} className="w-full h-40 object-cover group-hover:brightness-125 group-hover:scale-110 transition-all" loading="lazy" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/75 to-transparent text-xs text-white px-2 py-1 font-montserrat">{m.caption}</div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-7">
      <button className="px-6 py-2 rounded-lg bg-gradient-to-br from-[#1EAEDB] to-[#9b87f5] font-semibold text-white hover:scale-105 shadow animate-pulse-neon">Upload your meme!</button>
    </div>
  </section>
);

export default MemeWall;

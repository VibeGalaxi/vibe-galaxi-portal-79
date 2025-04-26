
import { Heart, Star } from "lucide-react";

const posts = [
  {
    id: 1,
    username: "CosmicDrip",
    image: "https://pythago.ai/bruh/assets/t2.png",
    caption: "Just unlocked the Nebula Badge! 🌌",
    likes: 423
  },
  {
    id: 2,
    username: "MemeQueen",
    image: "https://pythago.ai/bruh/assets/h1.png",
    caption: "This meme prophecy hit different fr fr",
    likes: 891
  },
  {
    id: 3,
    username: "VibeKing",
    image: "https://pythago.ai/bruh/assets/h3.png", // Updated to the hoodie image
    caption: "My portal hoodie just arrived! 🔮", 
    likes: 567
  }
];

const VibeWall = () => (
  <section className="py-24 px-4 bg-[#1c1c1c]/50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-12 text-white hover:-rotate-1 transition-transform cursor-default">
        VibeWall™ of Fame
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group relative bg-white/5 rounded-xl overflow-hidden hover:scale-[1.02] hover:rotate-1 transition-all"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full aspect-[4/5] object-cover"
              onError={(e) => {
                console.log(`Image failed to load: ${post.image}`);
                e.currentTarget.src = "https://placehold.co/600x800?text=Image+Not+Found";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-4 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D946EF] to-[#1EAEDB]" />
                  <span className="text-white font-bold">{post.username}</span>
                  <Star className="w-4 h-4 text-yellow-400 ml-auto" />
                </div>
                <p className="text-white/90 text-sm mb-3">{post.caption}</p>
                <button className="flex items-center gap-1 text-white/80 hover:text-[#D946EF] transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{post.likes}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] text-white font-bold hover:scale-105 transition-transform">
          Submit Your Vibe
        </button>
      </div>
    </div>
  </section>
);

export default VibeWall;

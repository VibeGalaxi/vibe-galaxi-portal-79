
import { Play, Share2, BookX } from "lucide-react";
import { useState } from "react";

const stories = [
  {
    id: 1,
    title: "My Vibe Journey",
    author: "CosmicKing",
    thumbnail: "/photo-1487058792275-0ad4aaf24ca7",
    views: "12.4K"
  },
  {
    id: 2,
    title: "How I Found My Drip",
    author: "VibeQueen",
    thumbnail: "/photo-1500673922987-e212871fec22",
    views: "8.2K"
  }
];

const VibeVerseStories = () => {
  const [playing, setPlaying] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#21063E] to-[#1A1F2C] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#D946EF_0%,transparent_70%)] opacity-20" />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-12 text-white">
          VibeVerse™ Stories
        </h2>

        <div className="grid gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="relative aspect-video rounded-xl overflow-hidden group"
            >
              <img
                src={story.thumbnail}
                alt={story.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 p-6 w-full">
                  <h3 className="text-2xl font-orbitron text-white mb-2">{story.title}</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/80">{story.author}</p>
                      <p className="text-white/60 text-sm">{story.views} views</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:scale-110 transition-transform">
                        <Share2 size={20} />
                      </button>
                      <button className="p-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:scale-110 transition-transform">
                        <BookX size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setPlaying(story.id)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:scale-110 transition-transform group-hover:bg-white/30"
                >
                  <Play size={24} className="text-white ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] text-white font-bold hover:scale-105 transition-transform">
            Share Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default VibeVerseStories;

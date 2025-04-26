
import { useState } from "react";
import { Share2, BookX } from "lucide-react";

const VibeMemeGenerator = () => {
  const [generating, setGenerating] = useState(false);
  const [memeUrl, setMemeUrl] = useState("");
  const [imageIndex, setImageIndex] = useState(0);

  const memeImages = [
    "https://pythago.ai/bruh/assets/monkey2.png",
    "https://pythago.ai/bruh/assets/monkey1.png", 
    "https://pythago.ai/bruh/assets/monkeyt1.png"
  ];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    // Simulate generation and alternate between images
    setTimeout(() => {
      setMemeUrl(memeImages[imageIndex]);
      setImageIndex((prevIndex) => (prevIndex + 1) % memeImages.length);
      setGenerating(false);
    }, 2000);
  };

  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-[#21063E] to-[#1A1F2C] overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 z-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-center mb-8 bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default">
          Create Your VibeMeme™
        </h2>
        
        <form onSubmit={handleGenerate} className="max-w-xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Enter your vibe prompt..."
            className="w-full px-6 py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder:text-white/50 focus:border-[#D946EF] focus:ring-2 focus:ring-[#1EAEDB] transition-all mb-4"
          />
          <button
            type="submit"
            disabled={generating}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] text-white font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform disabled:opacity-50"
          >
            {generating ? (
              <>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white animate-scanning-progress" />
                </div>
                Generating Vibe...
              </>
            ) : (
              <>
                <BookX className="animate-pulse" />
                Generate Meme
              </>
            )}
          </button>
        </form>

        {memeUrl && (
          <div className="relative max-w-[600px] mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden border-2 border-[#D946EF] shadow-[0_0_30px_rgba(217,70,239,0.3)] hover:scale-[1.02] transition-transform">
              <img
                src={memeUrl}
                alt="Generated VibeMeme"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="p-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:scale-110 transition-transform">
                  <Share2 size={20} />
                </button>
                <button className="p-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 text-white hover:scale-110 transition-transform">
                  <BookX size={20} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VibeMemeGenerator;


import { useState, useEffect } from "react";
import { ImageIcon, Share2, TrendingUp, Sparkles } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const VibeMemeGenerator = () => {
  const [memeText, setMemeText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [memeImage, setMemeImage] = useState<string | null>(null);
  const { toast } = useToast();

  // Simulated meme generation - in a real app, this would call an AI API
  const generateMeme = () => {
    if (!memeText.trim()) {
      toast({
        title: "Meme text required",
        description: "Enter some vibes to generate a meme",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    // Simulate loading time
    setTimeout(() => {
      // Choose a random background image for the meme
      const memeBackgrounds = [
        "/photo-1519389950473-47ba0277781c", 
        "/photo-1488590528505-98d2b5aba04b",
        "/photo-1615729947596-a598e5de0ab3",
        "/photo-1582562124811-c09040d0a901"
      ];
      
      const randomBackground = memeBackgrounds[Math.floor(Math.random() * memeBackgrounds.length)];
      setMemeImage(randomBackground);
      setIsGenerating(false);

      toast({
        title: "Vibe acquired!",
        description: "Your intergalactic meme is ready to share",
      });
    }, 1500);
  };

  const shareMeme = () => {
    toast({
      title: "Vibe shared!",
      description: "Your meme is now traveling through the cosmos",
    });
  };

  return (
    <section id="meme-generator" className="relative py-24 px-4 overflow-hidden">
      {/* Cosmic Background with Stars */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#21063E] to-[#0D0620] z-0">
        <div className="stars-container absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                opacity: Math.random() * 0.7 + 0.3,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-orbitron text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] font-bold glitch-text animate-pulse-neon">
            Create Your VibeMeme™
          </h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Unleash your vibe with our AI-powered meme generator. Create, share, and maybe win some exclusive merch!
          </p>
        </div>

        <div className="space-y-8">
          <div className="relative group">
            <Input
              type="text"
              placeholder="Enter your vibe prophecy..."
              value={memeText}
              onChange={(e) => setMemeText(e.target.value)}
              className="w-full p-4 text-white bg-white/5 border-[1px] border-white/10 rounded-xl backdrop-blur-md shadow-lg group-hover:border-[#D946EF]/50 transition-all neon-border focus:neon-border focus:border-[#D946EF]"
            />
            <Sparkles className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#D946EF] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="flex justify-center">
            <Button
              onClick={generateMeme}
              disabled={isGenerating}
              className="px-6 py-3 bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] hover:from-[#1EAEDB] hover:to-[#D946EF] rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all animate-pulse-neon flex items-center gap-2"
            >
              <ImageIcon className="w-5 h-5" />
              {isGenerating ? "Generating Vibe..." : "Generate VibeMeme"}
            </Button>
          </div>

          {isGenerating && (
            <div className="relative w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] animate-scanning-progress"></div>
            </div>
          )}

          {memeImage && (
            <div className="flex flex-col items-center space-y-4 mt-6">
              <div className="relative w-full max-w-xl h-[400px] neon-border overflow-hidden rounded-xl transform transition-transform duration-500 hover:scale-[1.02] hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#D946EF]/10 to-[#1EAEDB]/10 mix-blend-overlay"></div>
                <img 
                  src={memeImage} 
                  alt="Generated VibeMeme" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-xl font-bold font-orbitron mb-2">{memeText}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1EAEDB] text-sm">#VibeMerch</span>
                    <span className="text-[#D946EF] text-sm">VibeGalaxi™</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#D946EF] animate-pulse"></div>
                  <div className="w-3 h-3 rounded-full bg-[#1EAEDB] animate-pulse delay-150"></div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  onClick={shareMeme}
                  className="px-6 py-3 bg-gradient-to-br from-[#9b87f5] to-[#D946EF] hover:from-[#D946EF] hover:to-[#9b87f5] rounded-xl font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  Share Your VibeMeme
                </Button>
                <Button
                  onClick={() => setMemeImage(null)}
                  variant="outline"
                  className="px-6 py-3 bg-white/5 border border-white/20 hover:bg-white/10 rounded-xl font-bold text-white shadow-lg transition-all"
                >
                  Try Again
                </Button>
              </div>

              <div className="flex items-center justify-center mt-4 animate-fade-in">
                <TrendingUp className="w-5 h-5 text-[#1EAEDB] mr-2" />
                <span className="text-white/70 text-sm">Join the weekly meme contest for a chance to win merch!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VibeMemeGenerator;

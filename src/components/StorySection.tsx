
import PlanetMap from "./PlanetMap";

const StorySection = () => (
  <section
    id="story"
    className="w-full py-24 px-4 relative z-10 bg-gradient-to-b from-[#1A1F2C] via-[#21063e] to-[#1EAEDB]/30"
  >
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-6 drop-shadow-xl">
        Welcome to VibeGalaxi – A Civilization Built on Memes, Style & Cosmic Energy.
      </h2>
      <p className="text-white/90 font-montserrat text-lg md:text-xl mb-10">
        In a distant dimension, memes are the currency, drip is the law, and every Vibonaut (that's you) is part of an ever-expanding story. Your merch? Artifacts from this universe.
      </p>
    </div>
    <PlanetMap />
  </section>
);

export default StorySection;

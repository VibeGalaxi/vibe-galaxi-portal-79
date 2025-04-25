
const Footer = () => (
  <footer className="bg-[#1A1F2C] bg-opacity-90 text-white font-montserrat py-12 px-4 text-center">
    <div className="max-w-2xl mx-auto">
      <p className="mb-4 text-lg font-semibold uppercase tracking-wider drop-shadow-lg">Earth is Temporary. VibeGalaxi is Forever.</p>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a href="#drops" className="px-4 py-2 rounded-full bg-gradient-to-br from-[#D946EF] via-[#1EAEDB] to-[#9b87f5] font-bold hover:scale-105 focus:ring-2 focus:ring-[#D946EF] text-white transition-all">Shop the Latest VibeDrop →</a>
        <a href="#join" className="px-4 py-2 rounded-full border-2 border-[#D946EF]/50 text-white font-bold hover:bg-[#D946EF]/10 hover:border-[#1EAEDB] focus:ring-2 focus:ring-[#1EAEDB] transition-all">Become a Vibonaut</a>
        <a href="https://tiktok.com" className="px-4 py-2 rounded-full bg-[#1EAEDB]/90 text-white font-bold hover:scale-105 focus:ring-2 focus:ring-[#D946EF] transition-all">Follow the VibeOracle on TikTok</a>
      </div>
      <p className="text-xs mt-8 text-white/50">
        Warning: Side effects may include excessive drip, meme addiction, and interdimensional travel.<br />
        © {new Date().getFullYear()} VibeMerch™. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

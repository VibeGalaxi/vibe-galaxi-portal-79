
import { Rocket, Users, Star, MessageSquare, HelpCircle, Home, Gift, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { label: "Acasă", href: "#", icon: Home },
  { label: "Leaderboard", href: "#leaderboard", icon: Users },
  { label: "Testimoniale", href: "#testimoniale", icon: MessageSquare },
  { label: "Meme Wall", href: "#memewall", icon: Gift },
  { label: "FAQ", href: "#faq", icon: HelpCircle },
  { label: "Roadmap", href: "#roadmap", icon: Rocket },
  { label: "Press", href: "#press", icon: Star },
  { label: "Comunitate", href: "#comunitate", icon: Users },
  { label: "Contact", href: "#contact", icon: Mail },
];

const PremiumNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all ${scrolled ? "bg-[#1A1F2C]/95 shadow-xl backdrop-blur-sm" : "bg-transparent"}`}>
      <div className="flex items-center justify-between max-w-6xl mx-auto py-2 px-4">
        <a href="#" className="flex items-center gap-2 font-orbitron text-2xl font-bold bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] bg-clip-text text-transparent animate-pulse-neon select-none">
          <Rocket size={34} strokeWidth={2.5} className="animate-float drop-shadow-lg" />
          VibeGalaxi
        </a>
        <ul className="hidden md:flex gap-5 font-montserrat text-white text-sm items-center">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={label}><a href={href} className="flex items-center gap-1 hover-scale story-link transition-all"><Icon size={16} /><span>{label}</span></a></li>
          ))}
        </ul>
        <a href="#join" className="ml-6 px-5 py-2 rounded-lg bg-gradient-to-br from-[#D946EF] to-[#1EAEDB] text-white shadow-lg font-semibold hover:scale-105 transition-all animate-pulse-neon hidden sm:block">
          Devino Vibonaut
        </a>
      </div>
    </nav>
  );
};

export default PremiumNavbar;

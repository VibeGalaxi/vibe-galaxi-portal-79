
import { Facebook, Instagram, Twitter, Youtube, Heart, Mail, ChevronRight, Star, Rocket } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Collections", href: "#" },
      { label: "Exclusive Drops", href: "#drops" },
      { label: "Vibe Badges", href: "#badges" },
      { label: "VibeOracle™", href: "#oracle" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Leaderboard", href: "#leaderboard" },
      { label: "Meme Wall", href: "#memewall" },
      { label: "Testimonials", href: "#testimoniale" },
      { label: "Roadmap", href: "#roadmap" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: Instagram, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Youtube, href: "#" },
];

const Footer = () => (
  <footer className="relative bg-cosmic-900 text-white font-montserrat py-20 px-4 overflow-hidden z-10">
    {/* Background elements */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/photo-1465101162946-4377e57745c3')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-900 via-cosmic-900/95 to-cosmic-900/80" />
      <div className="absolute inset-0 cosmic-grid opacity-10" />
    </div>
    
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-20 mb-16">
        {/* Brand column */}
        <div className="lg:col-span-2">
          <a href="#" className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-pink to-neon-blue rounded-full opacity-20" />
              <Rocket strokeWidth={2.5} className="w-7 h-7 relative z-10 text-white" />
            </div>
            <div>
              <div className="font-orbitron text-2xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                VibeGalaxi
              </div>
              <div className="text-xs text-white/60 tracking-wider">INTERGALACTIC MERCH EXPERIENCE</div>
            </div>
          </a>
          
          <p className="text-white/70 mb-6 max-w-md leading-relaxed">
            VibeMerch™ isn't just clothing—it's a wearable portal to VibeGalaxi, the meme-powered universe where style, lore, and chaos collide.
          </p>
          
          <div className="flex gap-4 mb-8">
            {socialLinks.map(({ icon: Icon, href }) => (
              <a 
                key={href} 
                href={href} 
                className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
          
          <div className="glass-morphism p-5 rounded-xl max-w-md mb-8">
            <p className="text-white/90 text-sm mb-4">Subscribe to our newsletter to receive the latest news and exclusive access to limited drops.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your cosmic email" 
                className="bg-white/10 border border-white/10 rounded-l-lg px-4 py-2 flex-1 focus:outline-none focus:border-neon-pink/50"
              />
              <button className="bg-gradient-to-r from-neon-pink to-neon-blue px-4 rounded-r-lg text-white">
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
        
        {/* Links columns */}
        {footerLinks.map((column) => (
          <div key={column.title}>
            <h3 className="font-orbitron text-lg font-semibold mb-6 flex items-center gap-2">
              <Star className="w-4 h-4 text-neon-blue" />
              {column.title}
            </h3>
            <ul className="space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-1 story-link"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Premium banner */}
      <div className="mb-16 rounded-xl overflow-hidden">
        <div className="relative py-10 px-8 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-neon-pink/10 to-neon-blue/10 backdrop-blur-sm border border-white/10 rounded-xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-orbitron text-xl md:text-2xl font-bold mb-2">Earth is Temporary. VibeGalaxi is Forever.</h3>
              <p className="text-white/70">VibeOracle AI portal launch 15.06.2025</p>
            </div>
            <a 
              href="#drops" 
              className="premium-button whitespace-nowrap"
            >
              Shop the Latest VibeDrop
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom footer */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
        <p className="text-white/50 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} VibeMerch™. All rights reserved.
        </p>
        
        <p className="text-white/50 text-sm flex items-center gap-1">
          Made with <Heart className="w-4 h-4 text-neon-pink animate-pulse" /> in VibeGalaxi
        </p>
        
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Terms</a>
          <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Privacy</a>
          <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

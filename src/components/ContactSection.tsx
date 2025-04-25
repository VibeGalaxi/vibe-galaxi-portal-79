
import { Mail, Users, Instagram, Twitter } from "lucide-react";
const socials = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Twitter", href: "#", Icon: Twitter },
];

const ContactSection = () => (
  <section id="contact" className="w-full py-16 px-4 bg-gradient-to-r from-[#1A1F2C] via-[#D946EF]/10 to-[#1EAEDB]/10">
    <div className="max-w-xl mx-auto text-center">
      <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-4 drop-shadow-xl">Cosmic Contact</h2>
      <p className="text-white/80 font-montserrat mb-6">Got questions, ideas, or intergalactic feedback? We're always online <span className="bg-lime-400/25 rounded px-2 py-0.5 text-lime-400 font-bold ml-1">🟢 live</span></p>
      <a href="mailto:contact@vibegalaxi.com" className="inline-flex items-center gap-2 bg-gradient-to-br from-[#9b87f5] to-[#1EAEDB] rounded-lg px-6 py-3 font-bold text-white mb-5 hover:scale-105 transition-all">
        <Mail /> contact@vibegalaxi.com
      </a>
      <div className="flex justify-center gap-4 mt-4">
        {socials.map(({ label, href, Icon }) => (
          <a key={label} href={href} className="bg-white/10 rounded-full p-3 hover:scale-110 transition text-[#D946EF] flex items-center" target="_blank" rel="noopener noreferrer">
            <Icon size={24} />
          </a>
        ))}
      </div>
    </div>
  </section>
);
export default ContactSection;

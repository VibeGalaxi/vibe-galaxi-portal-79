
import { useState } from "react";
import { Mail, Check } from "lucide-react";

const NewsletterSignup = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="newsletter" className="py-20 px-4 bg-gradient-to-br from-[#1A1F2C] to-[#9b87f5]/30">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-3">Want to receive a secret drop by email?</h2>
        <p className="text-white/80 mb-5">Subscribe to never miss the latest prophecies and receive the "Early Vibe" reward.</p>
        <form className="flex gap-3 items-center justify-center max-w-lg mx-auto"
          onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
          <input type="email" required placeholder="your cosmic email" className="rounded-lg px-4 py-2 font-montserrat text-black w-56 focus:ring-2 ring-[#D946EF]" />
          <button type="submit" className="bg-gradient-to-br from-[#1EAEDB] to-[#D946EF] px-5 py-2 rounded-lg text-white font-bold hover:scale-105 transition-all animate-pulse-neon flex items-center gap-1">
            <Mail size={20} /> Subscribe
          </button>
        </form>
        {submitted && <div className="text-[#1EAEDB] mt-4 flex justify-center items-center gap-2 font-bold animate-fade-in"><Check size={20} /> You're on the cosmic list! 🎉</div>}
      </div>
    </section>
  );
};
export default NewsletterSignup;


import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const questions = [
  {
    q: "Este merch-ul autentic din VibeGalaxi?",
    a: "Absolut! Fiecare articol e un artefact colecționabil, cu cod NFC și AR meme inclus."
  },
  {
    q: "Cum primesc profeția AI?",
    a: "Scanează NFC-ul și VibeOracle AI îți va genera un mesaj personalizat."
  },
  {
    q: "Pot participa la meme contests?",
    a: "Sigur! Trimite meme-ul tău pe Meme Wall și poți câștiga titluri, badge-uri sau NFT-uri."
  }
];

const FaqSection = () => {
  const [openIdx, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#1A1F2C]/90 py-16 px-4">
      <div className="max-w-2xl mx-auto text-center mb-7">
        <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-2 drop-shadow-xl">FAQ</h2>
        <p className="text-white/80 mb-2">Cele mai populare întrebări din universul VibeGalaxi:</p>
      </div>
      <ul className="max-w-2xl mx-auto flex flex-col gap-4">
        {questions.map((item, idx) => (
          <li key={item.q} className="rounded-lg glass-morphism">
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-lg font-medium font-montserrat text-white transition-all hover:bg-[#9b87f5]/10 focus:outline-none"
              onClick={() => setOpen(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
            >
              {item.q}
              {openIdx === idx ? <ChevronUp /> : <ChevronDown />}
            </button>
            <div className={`transition-all duration-300 px-6 pb-4 text-white/90 text-base ${openIdx === idx ? "block" : "hidden"}`}>
              {item.a}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FaqSection;

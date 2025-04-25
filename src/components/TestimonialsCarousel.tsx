
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Radu P.",
    text: "N-am mai simțit atâta hype de la lansarea primului meme coin. Hoodie-ul chiar mi-a vorbit AR!",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    name: "Cătălina MemeQueen",
    text: "Când am scanat NFC-ul a apărut o animație cosmică și mi-a dat badge! Must-have pentru colecționari.",
    avatar: "/placeholder.svg",
    rating: 5
  },
  {
    name: "Dj Nebulações",
    text: "Nu e doar merch, e o stare. Vibe-ul se simte și pe TikTok! Recomand!",
    avatar: "/placeholder.svg",
    rating: 4
  },
];

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;

  return (
    <section id="testimoniale" className="w-full py-16 bg-gradient-to-br from-[#1A1F2C] to-[#1EAEDB]/10 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-6 drop-shadow-xl">Testimoniale Reale</h2>
        <div className="relative flex flex-col items-center">
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setIdx((prev) => (prev - 1 + total) % total)}
              className="bg-[#9b87f5] rounded-full p-2 shadow hover:scale-105 transition"
              aria-label="Prev"
            >
              <ChevronLeft color="white" size={24} />
            </button>
          </div>
          <div className="bg-[#21063E]/90 backdrop-blur-sm px-8 py-8 rounded-2xl shadow-2xl max-w-xl mx-auto glass-morphism animate-fade-in">
            <img src={testimonials[idx].avatar} alt={testimonials[idx].name} className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-[#1EAEDB]" />
            <p className="text-white/90 font-montserrat text-lg mb-4">"{testimonials[idx].text}"</p>
            <div className="flex items-center justify-center gap-1 mb-2">
              {Array.from({ length: testimonials[idx].rating }).map((_, i) => <Star key={i} size={18} className="text-amber-300" />)}
            </div>
            <div className="text-[#D946EF] font-bold">{testimonials[idx].name}</div>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setIdx((prev) => (prev + 1) % total)}
              className="bg-[#9b87f5] rounded-full p-2 shadow hover:scale-105 transition"
              aria-label="Next"
            >
              <ChevronRight color="white" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

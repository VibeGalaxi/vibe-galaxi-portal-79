
import { Smartphone } from "lucide-react";

const VirtualTryOn = () => (
  <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1A1F2C] to-[#D946EF]/20 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-orbitron text-3xl md:text-5xl text-white font-bold mb-4">Virtual Try-On Portal</h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">Scanează codul QR și vezi cum arată merch-ul pe tine în realitate augmentată.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 transform hover:scale-105 transition-all">
            <Smartphone className="w-12 h-12 text-[#1EAEDB] mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">AR Try-On</h3>
            <p className="text-white/70">Încearcă virtual orice produs din colecție instant.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-xl rounded-xl p-6 transform hover:scale-105 transition-all">
            <div className="w-32 h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#D946EF] to-[#1EAEDB] animate-pulse" />
            <p className="text-white/70 text-center">Scanează pentru preview live</p>
          </div>
        </div>
        <div className="relative">
          <img src="/photo-1581091226825-a6a2a5aee158" alt="Virtual Try On Demo" className="rounded-xl shadow-2xl transform hover:scale-105 transition-all" />
          <div className="absolute -top-4 -right-4 bg-[#D946EF] text-white px-4 py-2 rounded-full text-sm font-bold animate-bounce">
            Live Demo
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default VirtualTryOn;


import React from 'react';
import { motion } from 'framer-motion';

const TeeNomics = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1A1F2C] via-[#21063e] to-[#1EAEDB]/20 opacity-90" />
      
      <motion.div 
        className="relative z-10 w-full max-w-7xl px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Large Image Section */}
          <div className="relative w-full h-[600px]">
            <img 
              src="/placeholder.svg" 
              alt="TEE-NOMICS Large Visual" 
              className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl transform scale-150"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl" />
          </div>
          
          {/* Content Section */}
          <div className="text-white space-y-6">
            <h2 className="font-orbitron text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D946EF] to-[#1EAEDB]">
              TEE-NOMICS
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Dive into the economics of our cosmic clothing. Each TEE-NOMICS piece is more than fabric—it's a digital asset with real-world and virtual value.
            </p>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-[#D946EF] rounded-full" />
                Blockchain-verified authenticity
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-[#1EAEDB] rounded-full" />
                Adaptive pricing model
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 bg-[#9b87f5] rounded-full" />
                Limited edition value tracking
              </li>
            </ul>
            <button className="px-8 py-3 bg-gradient-to-r from-[#D946EF] to-[#1EAEDB] text-white rounded-lg hover:scale-105 transition-transform">
              Explore TEE-NOMICS
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TeeNomics;

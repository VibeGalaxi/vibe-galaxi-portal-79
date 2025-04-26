import { Shirt, Coffee, Star, Asterisk } from "lucide-react";

export const categories = [
  {
    id: "vibemerch",
    name: "VibeMerch",
    icon: Star,
    color: "from-[#ff00ff] to-[#00ffff]",
    products: [
      {
        id: "t1",
        name: "Don't Kill My Vibe",
        description: "Intergalactic best seller with NFC meme lore",
        image: "https://pythago.ai/bruh/assets/1.png",
        badge: "NFC-enabled",
        limitedEdition: true
      },
      {
        id: "t2",
        name: "Cosmic Flow",
        description: "Glow-in-the-dark coding humor for the metaverse",
        image: "https://pythago.ai/bruh/assets/2.png",
        badge: "Glow-in-dark",
        limitedEdition: false
      },
      {
        id: "t3",
        name: "Digital Dreams",
        description: "QR code unlocks exclusive digital art gallery",
        image: "https://pythago.ai/bruh/assets/3.png",
        badge: "QR-enabled",
        limitedEdition: true
      },
      {
        id: "t4",
        name: "Neural Network",
        description: "AI-generated patterns that evolve with wear",
        image: "https://pythago.ai/bruh/assets/4.png",
        badge: "AI-powered",
        limitedEdition: true
      },
      {
        id: "t5",
        name: "Quantum Weave",
        description: "Embedded with quantum computing patterns",
        image: "https://pythago.ai/bruh/assets/5.png",
        badge: "Quantum-tech",
        limitedEdition: false
      },
      {
        id: "t6",
        name: "Cyber Pulse",
        description: "Interactive LED patterns respond to music",
        image: "https://pythago.ai/bruh/assets/6.png",
        badge: "LED-reactive",
        limitedEdition: true
      },
      {
        id: "t7",
        name: "Meta Vision",
        description: "AR-enabled designs visible in the metaverse",
        image: "https://pythago.ai/bruh/assets/7.png",
        badge: "AR-enabled",
        limitedEdition: true
      },
      {
        id: "t8",
        name: "Digital Echo",
        description: "Sound-reactive patterns with bass visualization",
        image: "https://pythago.ai/bruh/assets/8.png",
        badge: "Sound-reactive",
        limitedEdition: false
      },
      {
        id: "t9",
        name: "Neural Drift",
        description: "AI-curated design that changes daily",
        image: "https://pythago.ai/bruh/assets/9.png",
        badge: "AI-evolving",
        limitedEdition: true
      },
      {
        id: "t10",
        name: "Astral Monkey",
        description: "Limited edition cosmic primate with holographic effect",
        image: "https://pythago.ai/bruh/assets/monkeyt4.png",
        badge: "Holographic",
        limitedEdition: true
      },
      {
        id: "h1",
        name: "Nebulahood™ Classic",
        description: "Glow-in-dark constellation patterns with hidden pockets",
        image: "https://pythago.ai/bruh/assets/h1.png",
        badge: "NFC-enabled",
        limitedEdition: true
      },
      {
        id: "h2",
        name: "Quantum Windbreaker",
        description: "Exists in multiple dimensions simultaneously",
        image: "https://pythago.ai/bruh/assets/h2.png",
        badge: "Weather-proof",
        limitedEdition: false
      },
      {
        id: "h3",
        name: "Astral Denim",
        description: "Embroidered with actual star maps and constellations",
        image: "https://pythago.ai/bruh/assets/h3.png",
        badge: "Star-mapped",
        limitedEdition: true
      },
      {
        id: "h4",
        name: "Cosmic Pullover",
        description: "Digital art patterns that change with your mood",
        image: "https://pythago.ai/bruh/assets/h4.png",
        badge: "Dynamic-art",
        limitedEdition: true
      },
      {
        id: "h5",
        name: "Nebula Zip-up",
        description: "Embedded with holographic star patterns",
        image: "https://pythago.ai/bruh/assets/h5.png",
        badge: "Holographic",
        limitedEdition: false
      },
      {
        id: "m1",
        name: "Cosmic Brew Master",
        description: "Temperature-sensitive constellation design reveals itself",
        image: "https://pythago.ai/bruh/assets/c1.png",
        badge: "Heat-reactive",
        limitedEdition: true
      },
      {
        id: "m2",
        name: "Digital Dawn",
        description: "AR-enabled mug with daily digital art display",
        image: "https://pythago.ai/bruh/assets/c2.png",
        badge: "AR-enabled",
        limitedEdition: false
      },
      {
        id: "m3",
        name: "Quantum Coffee",
        description: "Embedded with quantum computing patterns",
        image: "https://pythago.ai/bruh/assets/c3.png",
        badge: "Quantum-tech",
        limitedEdition: true
      },
      {
        id: "m4",
        name: "Neural Network Nectar",
        description: "AI-generated patterns that evolve with temperature",
        image: "https://pythago.ai/bruh/assets/c4.png",
        badge: "AI-powered",
        limitedEdition: true
      },
      {
        id: "m5",
        name: "Astral Elixir",
        description: "Glow-in-the-dark celestial designs",
        image: "https://pythago.ai/bruh/assets/c5.png",
        badge: "Glow-in-dark",
        limitedEdition: false
      },
      {
        id: "m6",
        name: "Cyber Chai",
        description: "Interactive LED patterns respond to heat",
        image: "https://pythago.ai/bruh/assets/c6.png",
        badge: "LED-reactive",
        limitedEdition: true
      },
      {
        id: "m7",
        name: "Meta Mocha",
        description: "AR-enabled designs visible in metaverse",
        image: "https://pythago.ai/bruh/assets/c7.png",
        badge: "AR-enabled",
        limitedEdition: true
      },
      {
        id: "m8",
        name: "Digital Doppio",
        description: "NFC-enabled with exclusive coffee recipes",
        image: "https://pythago.ai/bruh/assets/c8.png",
        badge: "NFC-enabled",
        limitedEdition: false
      },
      {
        id: "m9",
        name: "Neural Nectar",
        description: "AI-curated design that changes with temperature",
        image: "https://pythago.ai/bruh/assets/c9.png",
        badge: "AI-evolving",
        limitedEdition: true
      },
      {
        id: "m10",
        name: "Astral Americano",
        description: "Limited edition cosmic design with holographic effect",
        image: "https://pythago.ai/bruh/assets/c10.png",
        badge: "Holographic",
        limitedEdition: true
      }
    ]
  },
  {
    id: "t-shirts",
    name: "T-Shirts",
    icon: Shirt,
    color: "from-[#ff00ff] to-[#cc00ff]",
    products: [
      {
        id: 1,
        name: "Don't Kill My Vibe",
        description: "Intergalactic best seller with NFC meme lore",
        image: "https://pythago.ai/bruh/assets/1.png",
        badge: "NFC-enabled",
        limitedEdition: true
      },
      {
        id: 2,
        name: "Cosmic Flow",
        description: "Glow-in-the-dark coding humor for the metaverse",
        image: "https://pythago.ai/bruh/assets/2.png",
        badge: "Glow-in-dark",
        limitedEdition: false
      },
      {
        id: 3,
        name: "Digital Dreams",
        description: "QR code unlocks exclusive digital art gallery",
        image: "https://pythago.ai/bruh/assets/3.png",
        badge: "QR-enabled",
        limitedEdition: true
      },
      {
        id: 4,
        name: "Neural Network",
        description: "AI-generated patterns that evolve with wear",
        image: "https://pythago.ai/bruh/assets/4.png",
        badge: "AI-powered",
        limitedEdition: true
      },
      {
        id: 5,
        name: "Quantum Weave",
        description: "Embedded with quantum computing patterns",
        image: "https://pythago.ai/bruh/assets/5.png",
        badge: "Quantum-tech",
        limitedEdition: false
      },
      {
        id: 6,
        name: "Cyber Pulse",
        description: "Interactive LED patterns respond to music",
        image: "https://pythago.ai/bruh/assets/6.png",
        badge: "LED-reactive",
        limitedEdition: true
      },
      {
        id: 7,
        name: "Meta Vision",
        description: "AR-enabled designs visible in the metaverse",
        image: "https://pythago.ai/bruh/assets/7.png",
        badge: "AR-enabled",
        limitedEdition: true
      },
      {
        id: 8,
        name: "Digital Echo",
        description: "Sound-reactive patterns with bass visualization",
        image: "https://pythago.ai/bruh/assets/8.png",
        badge: "Sound-reactive",
        limitedEdition: false
      },
      {
        id: 9,
        name: "Neural Drift",
        description: "AI-curated design that changes daily",
        image: "https://pythago.ai/bruh/assets/9.png",
        badge: "AI-evolving",
        limitedEdition: true
      },
      {
        id: 10,
        name: "Astral Monkey",
        description: "Limited edition cosmic primate with holographic effect",
        image: "https://pythago.ai/bruh/assets/monkeyt4.png",
        badge: "Holographic",
        limitedEdition: true
      }
    ]
  },
  {
    id: "hoodies",
    name: "Hoodies",
    icon: Asterisk,
    color: "from-[#8B5CF6] to-[#6E59A5]",
    products: [
      {
        id: 1,
        name: "Nebulahood™ Classic",
        description: "Glow-in-dark constellation patterns with hidden pockets",
        image: "https://pythago.ai/bruh/assets/h1.png",
        badge: "NFC-enabled",
        limitedEdition: true
      },
      {
        id: 2,
        name: "Quantum Windbreaker",
        description: "Exists in multiple dimensions simultaneously",
        image: "https://pythago.ai/bruh/assets/h2.png",
        badge: "Weather-proof",
        limitedEdition: false
      },
      {
        id: 3,
        name: "Astral Denim",
        description: "Embroidered with actual star maps and constellations",
        image: "https://pythago.ai/bruh/assets/h3.png",
        badge: "Star-mapped",
        limitedEdition: true
      },
      {
        id: 4,
        name: "Cosmic Pullover",
        description: "Digital art patterns that change with your mood",
        image: "https://pythago.ai/bruh/assets/h4.png",
        badge: "Dynamic-art",
        limitedEdition: true
      },
      {
        id: 5,
        name: "Nebula Zip-up",
        description: "Embedded with holographic star patterns",
        image: "https://pythago.ai/bruh/assets/h5.png",
        badge: "Holographic",
        limitedEdition: false
      }
    ]
  },
  {
    id: "mugs",
    name: "Mugs",
    icon: Coffee,
    color: "from-[#00ffff] to-[#00ccff]",
    products: [
      {
        id: 1,
        name: "Cosmic Brew Master",
        description: "Temperature-sensitive constellation design reveals itself",
        image: "https://pythago.ai/bruh/assets/c1.png",
        badge: "Heat-reactive",
        limitedEdition: true
      },
      {
        id: 2,
        name: "Digital Dawn",
        description: "AR-enabled mug with daily digital art display",
        image: "https://pythago.ai/bruh/assets/c2.png",
        badge: "AR-enabled",
        limitedEdition: false
      },
      {
        id: 3,
        name: "Quantum Coffee",
        description: "Embedded with quantum computing patterns",
        image: "https://pythago.ai/bruh/assets/c3.png",
        badge: "Quantum-tech",
        limitedEdition: true
      },
      {
        id: 4,
        name: "Neural Network Nectar",
        description: "AI-generated patterns that evolve with temperature",
        image: "https://pythago.ai/bruh/assets/c4.png",
        badge: "AI-powered",
        limitedEdition: true
      },
      {
        id: 5,
        name: "Astral Elixir",
        description: "Glow-in-the-dark celestial designs",
        image: "https://pythago.ai/bruh/assets/c5.png",
        badge: "Glow-in-dark",
        limitedEdition: false
      },
      {
        id: 6,
        name: "Cyber Chai",
        description: "Interactive LED patterns respond to heat",
        image: "https://pythago.ai/bruh/assets/c6.png",
        badge: "LED-reactive",
        limitedEdition: true
      },
      {
        id: 7,
        name: "Meta Mocha",
        description: "AR-enabled designs visible in metaverse",
        image: "https://pythago.ai/bruh/assets/c7.png",
        badge: "AR-enabled",
        limitedEdition: true
      },
      {
        id: 8,
        name: "Digital Doppio",
        description: "NFC-enabled with exclusive coffee recipes",
        image: "https://pythago.ai/bruh/assets/c8.png",
        badge: "NFC-enabled",
        limitedEdition: false
      },
      {
        id: 9,
        name: "Neural Nectar",
        description: "AI-curated design that changes with temperature",
        image: "https://pythago.ai/bruh/assets/c9.png",
        badge: "AI-evolving",
        limitedEdition: true
      },
      {
        id: 10,
        name: "Astral Americano",
        description: "Limited edition cosmic design with holographic effect",
        image: "https://pythago.ai/bruh/assets/c10.png",
        badge: "Holographic",
        limitedEdition: true
      }
    ]
  }
];


import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "cosmic-900": "var(--cosmic-900)",
        "cosmic-800": "var(--cosmic-800)",
        "cosmic-700": "var(--cosmic-700)",
        "neon-pink": "var(--neon-pink)",
        "neon-purple": "var(--neon-purple)",
        "neon-blue": "var(--neon-blue)",
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, var(--cosmic-900) 0%, var(--cosmic-800) 100%)',
        'neon-gradient': 'linear-gradient(90deg, var(--neon-pink) 0%, var(--neon-blue) 100%)',
        'purple-gradient': 'linear-gradient(90deg, var(--neon-purple) 0%, var(--neon-blue) 100%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        levitate: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 5px rgba(217, 70, 239, 0.7), 0 0 20px rgba(30, 174, 219, 0.5)'
          },
          '50%': { 
            boxShadow: '0 0 25px rgba(217, 70, 239, 0.9), 0 0 40px rgba(30, 174, 219, 0.7)'
          },
        },
        'text-flicker': {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99', filter: 'drop-shadow(0 0 1px rgba(155, 135, 245, 0.95))' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.5', filter: 'drop-shadow(0 0 5px rgba(155, 135, 245, 0.95))' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'levitate': 'levitate 5s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'text-flicker': 'text-flicker 3s linear infinite',
      },
      boxShadow: {
        'neon': '0 0 5px rgba(217, 70, 239, 0.7), 0 0 20px rgba(30, 174, 219, 0.5)',
        'neon-strong': '0 0 10px rgba(217, 70, 239, 0.7), 0 0 30px rgba(30, 174, 219, 0.7), 0 0 50px rgba(30, 174, 219, 0.3)',
        'neon-inner': 'inset 0 0 15px rgba(217, 70, 239, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

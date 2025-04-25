
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        'orbitron': ["'Orbitron'", 'sans-serif'],
        'montserrat': ["'Montserrat'", 'sans-serif'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#9b87f5',
          foreground: '#21063e',
        },
        accent: {
          DEFAULT: '#D946EF',
        },
        cosmic: '#1A1F2C',
        neon: '#1EAEDB',
        magenta: '#D946EF',
        drip: '#8B5CF6',
        pink: '#F97316',
        'star-bg': '#221F26',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 16px 4px #D946EF80' },
          '50%': { boxShadow: '0 0 32px 16px #9b87f580' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        'scanning-progress': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        'twinkle': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.3)' }
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'pulse-neon': 'pulse-neon 1.6s infinite ease-in-out',
        'float': 'float 3s infinite ease-in-out',
        'fade-in': 'fade-in 1.5s forwards',
        'scanning-progress': 'scanning-progress 1.5s infinite ease-in-out',
        'twinkle': 'twinkle 3s infinite ease-in-out'
      },
      backgroundImage: {
        'hero-stars': "url('/photo-1470813740244-df37b8c1edcb')",
        'glitch': "linear-gradient(90deg, #9b87f5 0%, #1EAEDB 60%, #D946EF 100%)",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

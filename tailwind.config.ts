
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
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
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
        cosmic: {
          '900': 'rgb(var(--cosmic-black))',
          '800': 'rgb(var(--cosmic-purple))',
        },
        neon: {
          DEFAULT: '#1EAEDB',
          'pink': 'rgb(var(--neon-pink))',
          'blue': 'rgb(var(--neon-blue))',
          'purple': 'rgb(var(--cosmic-lavender))',
        },
        accent: {
          DEFAULT: '#D946EF',
        },
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
      backdropBlur: {
        xs: '2px',
      },
      keyframes: {
        'pulse-neon': {
          '0%, 100%': { boxShadow: '0 0 20px 8px rgba(217, 70, 239, 0.4)' },
          '50%': { boxShadow: '0 0 40px 20px rgba(155, 135, 245, 0.3)' },
        },
        'float': {
          '0%,100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-12px) rotate(1deg)' },
          '50%': { transform: 'translateY(0) rotate(0deg)' },
          '75%': { transform: 'translateY(12px) rotate(-1deg)' }
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
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'rotate-orbit': {
          '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' }
        }
      },
      animation: {
        'pulse-neon': 'pulse-neon 3s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'fade-in': 'fade-in 0.8s forwards ease-out',
        'slide-in': 'slide-in 0.8s forwards ease-out',
        'scanning-progress': 'scanning-progress 1.5s infinite ease-in-out',
        'twinkle': 'twinkle 3s infinite ease-in-out',
        'rotate-orbit': 'rotate-orbit 12s infinite linear'
      },
      backgroundImage: {
        'hero-stars': "url('/photo-1470813740244-df37b8c1edcb')",
        'galaxy': "url('/photo-1462331940025-496dfbfc7564')",
        'cosmos': "url('/photo-1465101162946-4377e57745c3')",
        'glitch': "linear-gradient(90deg, #9b87f5 0%, #1EAEDB 60%, #D946EF 100%)",
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

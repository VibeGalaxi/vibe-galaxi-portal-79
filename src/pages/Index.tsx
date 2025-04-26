
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import PremiumNavbar from "@/components/PremiumNavbar";
import EnhancedHeroSection from "@/components/EnhancedHeroSection";
import ProductShowcase3D from "@/components/ProductShowcase3D";
import ScrollTransition from "@/components/ScrollTransition";
import StorySection from "@/components/StorySection";
import CategorySlider from "@/components/CategorySlider";
import HolographicFeatureCard from "@/components/HolographicFeatureCard";
import CosmicCountdown from "@/components/CosmicCountdown";
import VibeClashArena from "@/components/VibeClashArena";
import CommunityWall from "@/components/CommunityWall";
import VibeBadges from "@/components/VibeBadges";
import TimelineRoadmap from "@/components/TimelineRoadmap";
import FaqSection from "@/components/FaqSection";
import NewsletterSignup from "@/components/NewsletterSignup";
import Leaderboard from "@/components/Leaderboard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Smartphone, ShieldCheck, Zap, Star, PhoneCall, Rocket } from "lucide-react";

// Component to handle reveal animations on scroll
const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { 
          opacity: 1, 
          y: 0, 
          transition: { 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1],
            delay 
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const Index = () => {
  // Initialize reveal elements
  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.reveal-element').forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top <= windowHeight * 0.85) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="bg-cosmic-900 min-h-screen overflow-x-hidden">
      <PremiumNavbar />
      
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />
      
      {/* Story Section */}
      <StorySection />
      
      {/* Transition */}
      <ScrollTransition colorFrom="rgba(155, 135, 245, 0.6)" colorTo="rgba(217, 70, 239, 0.6)" />
      
      {/* 3D Product Showcase */}
      <ProductShowcase3D />
      
      {/* Categories */}
      <CategorySlider />
      
      {/* Featured Vibe Tech - Holographic Cards */}
      <section className="py-24 px-4 bg-gradient-to-br from-cosmic-800 via-cosmic-700 to-cosmic-900 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 cosmic-grid opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-neon-pink/10 blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-blue/10 blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 mb-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-neon-purple font-medium">
                Integrated Technology
              </div>
              <h2 className="font-orbitron text-4xl md:text-6xl font-bold mb-4 text-gradient-animate">
                VibeTech™ Features
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Our garments are powered by cutting-edge tech that connects physical and digital realms
              </p>
            </div>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <RevealOnScroll delay={0.1}>
              <HolographicFeatureCard
                title="NFC Integration"
                description="Every item comes with embedded NFC tags that unlock exclusive digital experiences and authenticity verification."
                icon={<Smartphone className="w-6 h-6" />}
                primaryColor="rgba(217, 70, 239, 1)"
                secondaryColor="rgba(155, 135, 245, 1)"
                imageUrl="https://pythago.ai/bruh/assets/t3.png"
                hoverText="Connect"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.2}>
              <HolographicFeatureCard
                title="AR Visualization"
                description="Point your camera at your merch to see animated holograms, cosmic patterns and interactive visualizations."
                icon={<PhoneCall className="w-6 h-6" />}
                primaryColor="rgba(30, 174, 219, 1)"
                secondaryColor="rgba(155, 135, 245, 1)"
                imageUrl="https://pythago.ai/bruh/assets/h3.png"
                hoverText="Visualize"
              />
            </RevealOnScroll>
            
            <RevealOnScroll delay={0.3}>
              <HolographicFeatureCard
                title="Reactive Materials"
                description="Special fabrics that change color based on temperature, UV exposure or digital triggers from the VibeMerch app."
                icon={<Zap className="w-6 h-6" />}
                primaryColor="rgba(155, 135, 245, 1)"
                secondaryColor="rgba(30, 174, 219, 1)"
                imageUrl="https://pythago.ai/bruh/assets/monkeyt4.png"
                hoverText="Transform"
              />
            </RevealOnScroll>
          </div>
          
          <RevealOnScroll delay={0.4}>
            <div className="mt-16 text-center">
              <button className="cosmic-button group">
                <span className="flex items-center gap-2">
                  View Technical Specifications
                  <ShieldCheck className="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
                </span>
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      
      {/* Transition */}
      <ScrollTransition colorFrom="rgba(30, 174, 219, 0.6)" colorTo="rgba(217, 70, 239, 0.6)" />
      
      {/* Countdown */}
      <CosmicCountdown />
      
      {/* Vibe Clash Arena */}
      <VibeClashArena />

      {/* Community Wall */}
      <CommunityWall />
      
      {/* Vibe Badges */}
      <VibeBadges />
      
      {/* Transition */}
      <ScrollTransition colorFrom="rgba(155, 135, 245, 0.6)" colorTo="rgba(30, 174, 219, 0.6)" />
      
      {/* Roadmap Timeline */}
      <TimelineRoadmap />
      
      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Leaderboard */}
      <Leaderboard />
      
      {/* FAQ */}
      <FaqSection />
      
      {/* Newsletter Signup */}
      <NewsletterSignup />
      
      {/* Contact */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
      
      {/* Floating Action Button - Back to top */}
      <div className="fixed bottom-6 right-6 z-50 opacity-0 transition-opacity duration-300" id="back-to-top">
        <button 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-neon-pink to-neon-blue text-white shadow-neon hover:shadow-neon-strong transition-all hover:scale-110"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          <Rocket className="w-6 h-6" />
        </button>
      </div>
      
      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            var scrollButton = document.getElementById('back-to-top');
            if (window.scrollY > 500) {
              scrollButton.style.opacity = '1';
            } else {
              scrollButton.style.opacity = '0';
            }
          });
        `
      }} />
    </div>
  );
};

export default Index;

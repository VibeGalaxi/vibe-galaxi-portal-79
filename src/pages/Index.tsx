
import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CategorySlider from "../components/CategorySlider";
import StorySection from "../components/StorySection";
import ProductHighlight from "../components/ProductHighlight";
import Footer from "../components/Footer";
import PremiumNavbar from "../components/PremiumNavbar";
import Leaderboard from "../components/Leaderboard";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import MemeWall from "../components/MemeWall";
import FaqSection from "../components/FaqSection";
import TimelineRoadmap from "../components/TimelineRoadmap";
import PressSection from "../components/PressSection";
import NewsletterSignup from "../components/NewsletterSignup";
import CommunityWall from "../components/CommunityWall";
import ContactSection from "../components/ContactSection";
import ExclusiveDrops from "../components/ExclusiveDrops";
import VibeBadges from "../components/VibeBadges";
import VibeMemeGenerator from "../components/VibeMemeGenerator";
import VibeWall from "../components/VibeWall";
import CosmicCountdown from "../components/CosmicCountdown";
import VibeClashArena from "../components/VibeClashArena";
import VibeVerseStories from "../components/VibeVerseStories";
import CosmicGiveaway from "../components/CosmicGiveaway";

const dripFeatures = (
  <ul className="list-disc ml-8 text-white/90 space-y-2">
    <li>Fiecare tricou include un cod QR pentru content exclusiv</li>
    <li>Materiale premium și design absurd de comod</li>
    <li>Meme-uri actualizate lunar prin NFC</li>
  </ul>
);

const caffeiniaFeatures = (
  <ul className="list-disc ml-8 text-white/90 space-y-2">
    <li>Cănile schimbă culoarea când pui lichid fierbinte</li>
    <li>Scanează codul AR pentru ritualul cafelei de dimineață</li>
    <li>Materiale ecologice, vibe cosmică</li>
  </ul>
);

const nebulaFeatures = (
  <ul className="list-disc ml-8 text-white/90 space-y-2">
    <li>Strălucește în întuneric cu constelatii unice</li>
    <li>Tag NFC cu mesaj personalizat de la AI</li>
    <li>Buzunar ascuns pentru artefacte cosmice</li>
  </ul>
);

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
          
          // Update URL but don't scroll
          history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    // Add parallax scroll effect
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      document.documentElement.style.setProperty('--scroll', `${scrollTop}px`);
      
      const parallaxElements = document.querySelectorAll('.animate-parallax');
      parallaxElements.forEach((element) => {
        const speed = element.classList.contains('parallax-slow') ? 0.1 :
                      element.classList.contains('parallax-medium') ? 0.2 : 0.3;
                      
        const yPos = -scrollTop * speed;
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="bg-cosmic-900 min-h-screen font-montserrat">
      <PremiumNavbar />
      
      {/* First fold - Hero & Category */}
      <HeroSection />
      <div id="category-slider">
        <CategorySlider />
      </div>
      
      {/* Community & Features */}
      <Leaderboard />
      <StorySection />
      
      {/* Interactive Features */}
      <VibeMemeGenerator />
      <VibeWall />
      
      {/* Limited Drops */}
      <div id="drops">
        <CosmicCountdown />
        <ExclusiveDrops />
      </div>
      
      {/* Contests & Social */}
      <VibeClashArena />
      <VibeVerseStories />
      
      {/* Premium Products */}
      <div id="products">
        <ProductHighlight
          headline="The AI That Predicts Your Vibe."
          subhead="The VibeOracle™ is an artificial intelligence that scans the universe for the freshest memes, trends, and prophecies. Every product comes with a unique AI-generated message."
          features={
            <ul className="list-disc ml-8 text-white/90 space-y-2">
              <li>Demo: Tap your hoodie's NFC tag → Hear your personalized vibe prophecy.</li>
              <li>New prophecies monthly via quantum algorithm updates.</li>
              <li>Integrates with your personal meme history for accurate predictions.</li>
            </ul>
          }
          imageUrl="/photo-1487058792275-0ad4aaf24ca7"
          bgFrom="#21063E"
          bgTo="#D946EF"
          highlightColor="#9b87f5"
        />
        <ProductHighlight
          headline="Wear the Meme. Live the Lore."
          subhead="Planet Drip – meme T-shirts with a soul. Each tee unlocks exclusive drip and meme lore in the VibeGalaxi universe."
          features={dripFeatures}
          imageUrl="/photo-1470813740244-df37b8c1edcb"
          bgFrom="#1A1F2C"
          bgTo="#8B5CF6"
          reverse
          highlightColor="#D946EF"
        />
        <ProductHighlight
          headline="Your Morning Brew Is a Cosmic Ritual."
          subhead="From color-changing mugs to AR coffee spirits, Caffeinia powers your days in VibeGalaxi with premium energy vibes."
          features={caffeiniaFeatures}
          imageUrl="/photo-1500673922987-e212871fec22"
          bgFrom="#21063E"
          bgTo="#1EAEDB"
          highlightColor="#D946EF"
        />
        <ProductHighlight
          headline="Your Hoodie Is a Portal."
          subhead="Nebulahood™ hoodies: AR unboxing, hidden memes, and glow-in-the-dark constellations form a gateway to new dimensions."
          features={nebulaFeatures}
          imageUrl="/photo-1526374965328-7f61d4dc18c5"
          bgFrom="#1A1F2C"
          bgTo="#9b87f5"
          reverse
          highlightColor="#1EAEDB"
        />
      </div>
      
      {/* Badges & Community */}
      <div id="badges">
        <VibeBadges />
      </div>
      
      {/* Engagement Sections */}
      <CosmicGiveaway />
      <TestimonialsCarousel />
      {/* Removed VirtualTryOn component */}
      <MemeWall />
      
      {/* Information Sections */}
      <div id="roadmap">
        <TimelineRoadmap />
      </div>
      <PressSection />
      <FaqSection />
      <NewsletterSignup />
      
      {/* Community and Contact */}
      <div id="comunitate">
        <CommunityWall />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      
      <Footer />
    </main>
  );
};

export default Index;


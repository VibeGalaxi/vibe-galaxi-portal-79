
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
import VirtualTryOn from "../components/VirtualTryOn";
import ExclusiveDrops from "../components/ExclusiveDrops";
import VibeBadges from "../components/VibeBadges";
import { ReactNode } from "react";

// Define the missing feature lists for product highlights
const dripFeatures = (
  <ul className="list-disc ml-8 text-white/90">
    <li>Fiecare tricou include un cod QR pentru content exclusiv</li>
    <li>Materiale premium și design absurd de comod</li>
    <li>Meme-uri actualizate lunar prin NFC</li>
  </ul>
);

const caffeiniaFeatures = (
  <ul className="list-disc ml-8 text-white/90">
    <li>Cănile schimbă culoarea când pui lichid fierbinte</li>
    <li>Scanează codul AR pentru ritualul cafelei de dimineață</li>
    <li>Materiale ecologice, vibe cosmică</li>
  </ul>
);

const nebulaFeatures = (
  <ul className="list-disc ml-8 text-white/90">
    <li>Strălucește în întuneric cu constelatii unice</li>
    <li>Tag NFC cu mesaj personalizat de la AI</li>
    <li>Buzunar ascuns pentru artefacte cosmice</li>
  </ul>
);

const Index = () => {
  return (
    <main className="bg-[#1A1F2C] min-h-screen font-montserrat">
      <PremiumNavbar />
      <HeroSection />
      <CategorySlider />
      <Leaderboard />
      <StorySection />
      <TestimonialsCarousel />
      <VirtualTryOn />
      <MemeWall />
      <ExclusiveDrops />
      <VibeBadges />
      <ProductHighlight
        headline="The AI That Predicts Your Vibe."
        subhead="The VibeOracle™ is an artificial intelligence that scans the universe for the freshest memes, trends, and prophecies. Every product comes with a unique AI-generated message."
        features={
          <ul className="list-disc ml-8 text-white/90">
            <li>Demo: Tap your hoodie's NFC tag → Hear your personalized vibe prophecy.</li>
          </ul>
        }
        imageUrl="/photo-1487058792275-0ad4aaf24ca7"
        bgFrom="#21063E"
        bgTo="#D946EF"
      />
      <TimelineRoadmap />
      <PressSection />
      <ProductHighlight
        headline="Complete Missions. Earn Badges. Level Up."
        subhead="VibeQuests™: Meme of the Month, Offline Vibe Spotting, Lore Unlocker, and more. Win exclusive merch, titles, and NFT badges."
        features={
          <ul className="list-disc ml-8 text-white/90">
            <li>Meme of the Month (Best VibeMerch meme wins)</li>
            <li>Offline Vibe Spotting (IRL meetups)</li>
            <li>Lore Unlocker (AR Easter eggs)</li>
          </ul>
        }
        imageUrl="/photo-1487058792275-0ad4aaf24ca7"
        bgFrom="#1EAEDB"
        bgTo="#8B5CF6"
        reverse
      />
      <ProductHighlight
        headline="Wear the Meme. Live the Lore."
        subhead="Planet Drip – meme T-shirts with a soul. Each tee unlocks exclusive drip and meme lore."
        features={dripFeatures}
        imageUrl="/photo-1470813740244-df37b8c1edcb"
        bgFrom="#8B5CF6"
        bgTo="#F97316"
      />
      <ProductHighlight
        headline="Your Morning Brew Is a Cosmic Ritual."
        subhead="From color-changing mugs to AR coffee spirits, Caffeinia powers your days in VibeGalaxi."
        features={caffeiniaFeatures}
        imageUrl="/photo-1500673922987-e212871fec22"
        bgFrom="#1EAEDB"
        bgTo="#D946EF"
        reverse
      />
      <ProductHighlight
        headline="Your Hoodie Is a Portal."
        subhead="Nebulahood™ hoodies: AR unboxing, hidden memes, and glow-in-the-dark constellations."
        features={nebulaFeatures}
        imageUrl="/photo-1526374965328-7f61d4dc18c5"
        bgFrom="#D946EF"
        bgTo="#9b87f5"
      />
      <FaqSection />
      <NewsletterSignup />
      <CommunityWall />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;


import React from 'react';
import EnhancedHeroSection from '@/components/EnhancedHeroSection';
import CategorySlider from '@/components/CategorySlider';
// Removed TeeNomics import
import ExclusiveDrops from '@/components/ExclusiveDrops';
import CosmicCountdown from '@/components/CosmicCountdown';
import CommunityWall from '@/components/CommunityWall';
import Leaderboard from '@/components/Leaderboard';
import FaqSection from '@/components/FaqSection';
import CosmicGiveaway from '@/components/CosmicGiveaway';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="bg-[#0d0620] overflow-x-hidden">
      <EnhancedHeroSection />
      <CategorySlider />
      {/* Removed TeeNomics component */}
      <ExclusiveDrops />
      <CosmicCountdown />
      <CommunityWall />
      <Leaderboard />
      <FaqSection />
      <CosmicGiveaway />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

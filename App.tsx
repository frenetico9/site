
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import HowToBuySection from './components/HowToBuySection';
import CommunitySection from './components/CommunitySection';
import MemeGallerySection from './components/MemeGallerySection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { SECTION_IDS } from './constants';

const PoopEmojiRain: React.FC = () => {
  const [emojis, setEmojis] = useState<{ id: number; style: React.CSSProperties; sizeClass: string }[]>([]);

  useEffect(() => {
    const createEmoji = () => {
      const id = Date.now() + Math.random();
      const sizes = ['text-xl', 'text-2xl', 'text-3xl', 'text-4xl'];
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 7}s`, 
        animationDuration: `${4 + Math.random() * 5}s`,
      };
      const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
      return { id, style, sizeClass };
    };

    // Pre-populate some emojis for initial effect
    const initialEmojis = Array.from({ length: 15 }, createEmoji); // Create 15 emojis initially
    setEmojis(initialEmojis);

    const interval = setInterval(() => {
      setEmojis(prevEmojis => [...prevEmojis.slice(-50), createEmoji()]); // Keep max 50 emojis
    }, 400); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[1000] overflow-hidden" aria-hidden="true"> {/* Increased z-index */}
      {emojis.map(emoji => (
        <div 
          key={emoji.id} 
          className={`poop-emoji-base ${emoji.sizeClass}`} 
          style={emoji.style}
        >
          💩
        </div>
      ))}
    </div>
  );
};


const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PoopEmojiRain />
      <Navbar />
      <main className="flex-grow">
        <HeroSection id={SECTION_IDS.hero} />
        <AboutSection id={SECTION_IDS.about} />
        <TokenomicsSection id={SECTION_IDS.tokenomics} />
        <RoadmapSection id={SECTION_IDS.roadmap} />
        <HowToBuySection id={SECTION_IDS.howToBuy} />
        <MemeGallerySection id={SECTION_IDS.memes} />
        <CommunitySection id={SECTION_IDS.community} />
        <FaqSection id={SECTION_IDS.faq} />
      </main>
      <Footer />
    </div>
  );
};

export default App;


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

// The magical poop rain generator. It's like a faucet, but for pure comedy gold.
const PoopEmojiRain: React.FC = () => {
  const [emojis, setEmojis] = useState<{ id: number; style: React.CSSProperties; sizeClass: string }[]>([]);

  useEffect(() => {
    const createEmoji = () => {
      const id = Date.now() + Math.random();
      const sizes = ['text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl']; // Slightly adjusted sizes
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDelay: `${Math.random() * 6}s`, // Slightly faster delay spread
        animationDuration: `${3 + Math.random() * 4}s`, // Slightly faster duration
      };
      const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
      return { id, style, sizeClass };
    };

    // Pre-populate a good shower of emojis for immediate comedic effect
    const initialEmojis = Array.from({ length: 20 }, createEmoji); // Increased initial emojis
    setEmojis(initialEmojis);

    const interval = setInterval(() => {
      setEmojis(prevEmojis => [...prevEmojis.slice(-60), createEmoji()]); // Keep max 60 emojis, add one
    }, 300); // Faster interval for more rain

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
    <div className="flex flex-col min-h-screen bg-skyBlue-light"> {/* Added a subtle background color to the whole app */}
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
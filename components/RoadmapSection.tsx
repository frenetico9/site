import React from 'react';
import Section from './Section';
import { RoadmapPhase } from '../types';

const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase1",
    title: "Phase 1: Hatching the Grand Plan 🥚",
    description: "Laying the golden egg... or, you know, coding and cooing a lot.",
    details: [
      "Launch this ridiculously awesome website (You are here! Congrats!)",
      "Unleash the $POOP token FAIRLY upon the unsuspecting world (PancakeSwap/UniSwap - Pigeons' choice!)",
      "Build the initial Flock: Telegram Squawk Box, X Chirps, Discord Nest activated!",
      "Operation: Viral Meme Storm - Prepare for pigeon-level internet takeover!",
      "Whitepaper V1.1 (The 'Pigeon Paper') released - Now with more charts and fewer breadcrumbs.",
    ],
    icon: <span className="text-5xl transform group-hover:rotate-12 transition-transform">🥚</span>
  },
  {
    id: "phase2",
    title: "Phase 2: Spreading Our Wings (and Memes) 🚀",
    description: "From local park celebrity to global avian icon. More coos, more $POOP!",
    details: [
      "Strategic 'Bird-fluencer' collaborations (and some easily bribed human ones).",
      "Listings on CoinGecko & CoinMarketCap – Because being official is coo-l.",
      "First CEX Listing negotiations (pigeons are surprisingly good hagglers).",
      "Community Meme Contests: Unleash your inner pigeon Picasso!",
      "Exclusive $POOP Holder Perks: Early access to... stuff. Secret pigeon stuff.",
    ],
    icon: <span className="text-5xl transform group-hover:scale-110 transition-transform">🚀</span>
  },
  {
    id: "phase3",
    title: "Phase 3: Sky-High Shenanigans & Nest Upgrades 👑",
    description: "The sky isn't the limit, it's just a suggestion. Time for some serious feather-ruffling.",
    details: [
      "Launch 'Pigeon Plunder' Merch Store: T-shirts, hats, and rubber poop that looks alarmingly real.",
      "Engineer Pigeons NFT Collection: Collectible avian geniuses with unique trash-tech inventions.",
      "$POOP Powered Charity Drive: Giving back to bird sanctuaries (and funding research into better bread).",
      "Explore Cross-Chain Coo-mmunication: $POOP on more blockchains!",
      "Top Tier CEX Listing: We're aiming for the big leagues, where the fanciest birdbaths are.",
    ],
    icon: <span className="text-5xl transform group-hover:animate-pulse transition-transform">👑</span>
  },
  {
    id: "phaseX",
    title: "Phase X: Beyond the Birdcage – The Pigeoning! 🔮",
    description: "World Domi-NEST-ion... or just a really, really good time. The future is unwritten and full of poop-tential.",
    details: [
      "Establish the First Pigeon Embassy on the Moon (funded entirely by $POOP, naturally).",
      "Develop Pigeon-AI: To predict market trends and the optimal time to 'decorate' statues.",
      "Lobby for 'Coo' to be recognized as an official UN language (it's expressive, okay?).",
      "Host the annual 'Golden Poop Awards' for meme excellence.",
      "Continue being the most hilariously ingenious memecoin the world has ever seen. FOREVER.",
    ],
    icon: <span className="text-5xl transform group-hover:text-yellow-300 transition-transform">🔮</span>
  },
];

const RoadmapCard: React.FC<{ phase: RoadmapPhase, index: number }> = ({ phase, index }) => (
  <div className={`group flex mb-12 items-start transition-all duration-300 hover:!opacity-100 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
    <div className="hidden md:flex flex-col items-center mx-4 lg:mx-8 w-24"> {/* Wider margin for desktop */}
      <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-poopYellow-DEFAULT text-pigeon-dark flex items-center justify-center text-3xl font-bold shadow-xl mb-2 border-4 border-white group-hover:bg-poopYellow-dark transition-colors">
        {phase.icon || index + 1}
      </div>
      {index < roadmapPhases.length -1 && <div className="h-32 w-1.5 bg-gray-300 group-hover:bg-poopYellow-DEFAULT transition-colors"></div>}
    </div>
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-gray-200 group-hover:border-poopYellow-DEFAULT flex-1">
      <div className="flex items-center md:hidden mb-4">
        <div className="w-16 h-16 rounded-full bg-poopYellow-DEFAULT text-pigeon-dark flex items-center justify-center text-2xl font-bold shadow-lg mr-4 border-2 border-white">
          {phase.icon || index + 1}
        </div>
        <h3 className="text-2xl font-bold text-pigeon-dark font-display">{phase.title}</h3>
      </div>
      <h3 className="hidden md:block text-3xl font-bold text-pigeon-dark font-display mb-3">{phase.title}</h3>
      <p className="text-pigeon-DEFAULT italic mb-4 text-md">{phase.description}</p>
      <ul className="space-y-2 text-gray-700">
        {phase.details.map((detail, i) => (
          <li key={i} className="flex items-start">
            <span className="text-poopYellow-dark mr-2 mt-1 text-xl font-bold">➔</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

interface RoadmapSectionProps {
  id: string;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title="Our Top-Secret Flight Plan to World (Wide Web) Domi-NEST-ion!"
      subtitle="Strap in, it's going to be a ridiculously fun, feather-filled ride. $POOP is going places!"
      className="bg-pigeon-light" // Light pigeon color background
    >
      <div className="relative">
        {/* Vertical line for desktop - adjust positioning based on new card layout */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1.5 bg-gray-300" style={{left: 'calc(50% - 0.75rem + 4rem)', top: '4rem', bottom: '4rem', zIndex: -1}}></div>
        
        <div className="md:max-w-5xl mx-auto"> {/* Increased max-width */}
          {roadmapPhases.map((phase, index) => (
            <RoadmapCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default RoadmapSection;
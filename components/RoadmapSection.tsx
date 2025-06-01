import React from 'react';
import Section from './Section';
import { RoadmapPhase } from '../types';

const roadmapPhases: RoadmapPhase[] = [
  {
    id: "phase1",
    title: "Phase 1: Building the Nest 🥚",
    description: "First, the basics: finding the best twigs and crumbs.",
    details: [
      "Website V1 Launch (this one you're looking at, impressive, right?)",
      "Community Building (Telegram, X, Discord - come say coo!)",
      "Fair Launch on PancakeSwap (or UniSwap, the pigeons are deciding)",
      "First Meme Campaign - unleash the creativity!",
    ],
    icon: <span className="text-4xl">🥚</span>
  },
  {
    id: "phase2",
    title: "Phase 2: Taking Flight 🚀",
    description: "Expanding the territory, more pigeons in the flock!",
    details: [
      "Partnerships with 'bird' influencers (and some cool humans)",
      "Listing on CoinGecko & CoinMarketCap (to be officially 'a thing')",
      "Development of exclusive meme tools for the community",
      "Listing on smaller CEXs (the pigeons are negotiating)",
    ],
    icon: <span className="text-4xl">🚀</span>
  },
  {
    id: "phase3",
    title: "Phase 3: Dominating the Skies 👑",
    description: "The sky is NOT the limit!",
    details: [
      "Merchandise Launch ('I Believe in Pigeons' T-shirts, 'Master of Trash' caps)",
      "Engineer Pigeons NFT Collection (each crazier than the last)",
      "Charity project for 'less fortunate pigeons' (and maybe some animal shelters)",
      "Explore 'cross-chain' partnerships (pigeons love to travel)",
    ],
    icon: <span className="text-4xl">👑</span>
  },
  {
    id: "phaseX",
    title: "Phase X: The Future is Pigeon... Or Something Like That 🔮",
    description: "World domination... or just more memes. We'll see.",
    details: [
      "Construction of the Pigeon Embassy on the Moon (funded by $POOP, of course)",
      "Development of pigeon AI to predict the market (and where to find the best-dropped fries)",
      "Lobbying for 'coo' to be recognized as an official UN language",
      "Continue being the most fun and ingenious memecoin around!",
    ],
    icon: <span className="text-4xl">🔮</span>
  },
];

const RoadmapCard: React.FC<{ phase: RoadmapPhase, index: number }> = ({ phase, index }) => (
  <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 items-start`}>
    <div className="hidden md:flex flex-col items-center mx-4 w-24">
      <div className="w-16 h-16 rounded-full bg-yellow-400 text-gray-800 flex items-center justify-center text-2xl font-bold shadow-lg mb-2">
        {phase.icon || index + 1}
      </div>
      {index < roadmapPhases.length -1 && <div className="h-24 w-1 bg-gray-300"></div>}
    </div>
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200 flex-1">
      <div className="flex items-center md:hidden mb-4">
        <div className="w-12 h-12 rounded-full bg-yellow-400 text-gray-800 flex items-center justify-center text-xl font-bold shadow-lg mr-4">
          {phase.icon || index + 1}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 font-display">{phase.title}</h3>
      </div>
      <h3 className="hidden md:block text-2xl font-bold text-gray-800 font-display mb-2">{phase.title}</h3>
      <p className="text-gray-600 mb-4 italic">{phase.description}</p>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {phase.details.map((detail, i) => (
          <li key={i} className="flex items-start">
            <span className="text-yellow-500 mr-2 mt-1">➔</span> {detail}
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
      title="The $POOP Flight Plan"
      subtitle="Our epic journey towards domination... of crumbs and memes!"
      className="bg-blue-50"
    >
      <div className="relative">
        {/* Vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300" style={{left: 'calc(50% - 0.5rem + 4rem - 2px)', top: '3rem', bottom: '3rem'}}></div>
        
        <div className="md:max-w-4xl mx-auto">
          {roadmapPhases.map((phase, index) => (
            <RoadmapCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default RoadmapSection;
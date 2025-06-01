import React from 'react';
import Section from './Section';
import { TICKER } from '../constants';

interface TokenomicsSectionProps {
  id: string;
}

const TokenomicItem: React.FC<{ title: string, description: string, value: string, icon: string }> = ({ title, description, value, icon }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
    <div className="flex items-center mb-3">
      <span className="text-3xl mr-3">{icon}</span>
      <h3 className="text-xl font-bold text-gray-800 font-display">{title}</h3>
    </div>
    <p className="text-2xl font-semibold text-yellow-600 mb-2">{value}</p>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);


const TokenomicsSection: React.FC<TokenomicsSectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title={`${TICKER}nomics: The Flock's Economy`}
      subtitle="Understand how our precious poop... erm, token, works!"
      className="bg-gray-100"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <TokenomicItem 
          icon=" सप्लाई" // Using a Unicode character that might look like a supply stack or use an emoji: 📦
          title="Total Supply"
          value="1 Trillion $POOP"
          description="Enough for every pigeon, their chicks, and their chicks' chicks... and maybe a few squirrels."
        />
        <TokenomicItem 
          icon="💧" // Water drop for liquidity
          title="Liquidity Nest"
          value="60% Initial"
          description="To ensure there are always crumbs (tokens) to trade on DEXs. Locked and secure!"
        />
        <TokenomicItem 
          icon="📢" // Megaphone for marketing
          title="Cooing War Chest"
          value="20% Marketing"
          description="To spread the word, fund high-quality memes, and bribe influential pigeons."
        />
        <TokenomicItem 
          icon="🔥" // Fire for burn
          title="Cleaning Up The Mess (Burn)"
          value="10% Burned"
          description="A portion of tokens is sent to oblivion (a pigeon fiscal black hole) to increase value!"
        />
         <TokenomicItem 
          icon="🧑‍💻" // Developer emoji
          title="Builders' Birdseed"
          value="10% Team/Development"
          description="To keep our engineer pigeons well-fed with the best seeds and brilliant ideas."
        />
        <TokenomicItem 
          icon="💸" // Money with wings for fees
          title="Flock Fee"
          value="Small Transaction Fee"
          description="A minimal fee on each trade to feed the developer pigeons, fund new trash tools, and keep the community flying high."
        />
      </div>
      
      <div className="text-center mt-12">
        <div className="inline-block bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <h4 className="font-bold text-xl mb-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.491A9.027 9.027 0 0112 4.5c-2.126 0-4.078.763-5.618 2.009m0 0A9.009 9.009 0 003.382 19.5M12 4.5C13.172 4.5 14.298 4.762 15.303 5.238m-3.303-.729A9.009 9.009 0 0112 21c2.126 0 4.078-.763 5.618-2.009m0 0A9.009 9.009 0 0020.618 4.5M12 21c-1.172 0-2.298-.262-3.303-.738m3.303.729A9.009 9.009 0 0012 4.5" />
            </svg>
            Nest Security
          </h4>
          <p className="text-gray-700">
            "As secure as a nest on top of a skyscraper (well, almost!). Our contract is as solid as pigeon concrete. Audit coming soon (as soon as the pigeon accountants finish pecking at the numbers and find their glasses)."
          </p>
        </div>
      </div>
    </Section>
  );
};

export default TokenomicsSection;
import React from 'react';
import Section from './Section';
import { TICKER } from '../constants';

interface TokenomicsSectionProps {
  id: string;
}

// Define more engaging icons, perhaps as SVG components or emojis
const Icons = {
  Supply: () => <span className="text-4xl">🌍</span>, // Globe for total supply
  Liquidity: () => <span className="text-4xl">💧</span>, // Water drop for liquidity
  Marketing: () => <span className="text-4xl">📢</span>, // Megaphone
  Burn: () => <span className="text-4xl">🔥</span>, // Fire
  Team: () => <span className="text-4xl">🧑‍🔬</span>, // Scientist/Engineer pigeon
  Fee: () => <span className="text-4xl">💸</span>, // Money with wings
  Security: () => <span className="text-4xl">🛡️</span>, // Shield for security
};

const TokenomicItem: React.FC<{ title: string, description: string, value: string, icon: React.ReactNode }> = ({ title, description, value, icon }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-poopYellow-DEFAULT flex flex-col items-center text-center h-full">
    <div className="text-5xl mb-3 text-poopYellow-dark">{icon}</div>
    <h3 className="text-2xl font-bold text-pigeon-dark font-display mb-2">{title}</h3>
    <p className="text-3xl font-semibold text-poopYellow-dark mb-3">{value}</p>
    <p className="text-gray-600 text-sm flex-grow">{description}</p>
  </div>
);


const TokenomicsSection: React.FC<TokenomicsSectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title={`${TICKER}nomics: Fueling the Feathered Financial Frenzy!`}
      subtitle="Where every 'drop' counts towards our glorious, shiny, and slightly messy future."
      className="bg-skyBlue-light" // Changed background for variety
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
        <TokenomicItem 
          icon={<Icons.Supply />}
          title="Total $POOP Supply"
          value="1 Trillion $POOP"
          description="Enough to bury naysayers in riches (or, you know, actual poop). And for every pigeon to have a winter home in the Bahamas."
        />
        <TokenomicItem 
          icon={<Icons.Liquidity />}
          title="Liquidity Nest Egg"
          value="60% Initial"
          description="Locked tighter than a pigeon's grip on a discarded French fry. Ensures smooth trading for all flock members."
        />
        <TokenomicItem 
          icon={<Icons.Marketing />}
          title="Cooing War Chest (Marketing)"
          value="20% Strategic Droppings"
          description="For viral memes, pigeon propaganda, hiring influencer-parrots, and maybe a billboard on the moon."
        />
        <TokenomicItem 
          icon={<Icons.Burn />}
          title="The Great Token Flush (Burn)"
          value="10% Sacrificed"
          description="Sending tokens to the great birdbath in the sky, making your precious $POOP even more valuable! It's deflationary magic!"
        />
         <TokenomicItem 
          icon={<Icons.Team />}
          title="Builders' Birdseed (Team & Dev)"
          value="5% For The Geniuses"
          description="Keeps our avian Einsteins fueled with premium sunflower seeds, wild ideas, and tiny lab coats."
        />
        <TokenomicItem 
          icon={<Icons.Fee />} // Assuming a small reflection/ecosystem fee
          title="Flock Sustenance Fee"
          value="5% Ecosystem Growth"
          description="A tiny crumb from each trade to fund new trash-to-treasure tech, community events, and more shiny things for the nest."
        />
      </div>
      
      <div className="text-center mt-16">
        <div className="inline-block bg-pigeon-light border-4 border-pigeon-DEFAULT text-pigeon-dark p-6 md:p-8 rounded-xl shadow-2xl max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-center items-center mb-3">
            <Icons.Security />
            <h4 className="font-display text-3xl ml-3">Our Fort Knox... of Nests!</h4>
          </div>
          <p className="text-gray-700 text-lg">
            "Our contract is audited by a team of highly caffeinated owls and squirrel accountants. So secure, it's almost boring. We take your birdseed seriously (but not ourselves)."
          </p>
          <p className="text-sm text-gray-500 mt-3">(Audit report coming soon - the lead owl is currently molting his spectacles.)</p>
        </div>
      </div>
    </Section>
  );
};

export default TokenomicsSection;
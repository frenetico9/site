import React from 'react';
import Button from './Button';
import Section from './Section';
import { SECTION_IDS, TICKER, FunkyPigeonIcon, SOCIAL_LINKS } from '../constants';

interface HeroSectionProps {
  id: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      className="bg-gradient-to-br from-skyBlue-light via-gray-50 to-yellow-100 text-center min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden pt-20 pb-20 md:pt-28 md:pb-28" // Adjusted padding
      containerClassName="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
    >
       {/* Background subtle pattern - Optional enhanced pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2378716C' fill-opacity='0.4'%3E%3Cpath d='M50 10c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zM10 50c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5 5-2.24 5-5zM20 20c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM40 40c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2z'/%3E%3C/g%3E%3C/svg%3E")`}}></div>
      
      <div className="w-full max-w-4xl mx-auto"> {/* Constrain width for better readability */}
        <div className="mb-6 md:mb-8 animate-bounce-slow mx-auto w-48 h-48 md:w-56 md:h-56"> {/* Larger mascot */}
           <FunkyPigeonIcon className="w-full h-full text-pigeon-DEFAULT p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-2xl border-4 border-poopYellow-DEFAULT" />
        </div>
        
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6">
          <span className="block text-pigeon-dark drop-shadow-md">PigeonPoopCoin ({TICKER}):</span>
          <span className="block text-poopYellow-dark tracking-tight">They're BIO-ENGINEERS!</span>
        </h1>
        <p className="text-xl md:text-2xl text-pigeon-dark font-medium mb-10 max-w-2xl mx-auto px-2">
          Warning: May cause sudden urges to hoard breadcrumbs and build nests on statues. Invest at your own risk (of becoming awesome).
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            href={`#${SECTION_IDS.howToBuy}`} 
            variant="primary" 
            size="xl" // Larger button
            trailingIcon={<span className="text-2xl">🚀</span>}
          >
            Buy {TICKER} & Join the Uprising!
          </Button>
          <Button 
            href={SOCIAL_LINKS.telegram} 
            target="_blank" 
            variant="secondary" 
            size="lg" 
            className="bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-400"
            leadingIcon={<span className="text-xl">🐦</span>}
          >
            Flock to Telegram!
          </Button>
        </div>
        <div className="mt-8">
            <Button 
                href={`#${SECTION_IDS.about}`} 
                variant="outline" 
                size="md"
                leadingIcon={<span className="text-lg">📜</span>}
            > 
                Read the 'Pigeon Paper' (Top Secret Docs)
            </Button>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
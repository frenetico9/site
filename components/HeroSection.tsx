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
      className="bg-gradient-to-br from-gray-200 via-gray-100 to-blue-100 text-center min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-24" // Added padding top/bottom
      containerClassName="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
    >
       {/* Background subtle pattern - Optional */}
      <div className="absolute inset-0 opacity-5" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>
      
      <div className="w-full"> {/* Wrapper for content to ensure centering */}
        <div className="mb-8 animate-bounce-slow mx-auto w-40 h-40 md:w-48 md:h-48">
           {/* Using the FunkyPigeonIcon component */}
           <FunkyPigeonIcon className="w-full h-full text-gray-700 p-2 bg-white rounded-full shadow-2xl border-4 border-yellow-400" />
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="block text-gray-800">PigeonPoopCoin ({TICKER}):</span>
          <span className="block text-yellow-500">A Revolução Emplumada Começou!</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto px-4">
          Invista na moeda que vai voar mais alto que seus sonhos (e talvez cagar neles)!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button href={`#${SECTION_IDS.howToBuy}`} variant="primary" size="lg">
            Compre {TICKER} Agora! 🚀
          </Button>
          <Button href={`#${SECTION_IDS.about}`} variant="outline" size="lg"> 
            Leia o Pigeon Paper 📜
          </Button>
          <Button href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg" className="bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500">
            Junte-se à Revoada (Telegram) 🐦
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;

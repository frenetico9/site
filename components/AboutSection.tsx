import React from 'react';
import Section from './Section';
import { TICKER, FunkyPigeonIcon } from '../constants'; // Import FunkyPigeonIcon

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title="Our Origin: From Humble Crumb-Peckers to Crypto Overlords"
      className="bg-white"
      subtitle="Declassified documents reveal a plot thicker than day-old birdseed. This is the (mostly) true story of $POOP."
    >
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
        <p>
          For eons, they've been the butt of jokes (and occasionally, windshields). Dismissed as mere 'rats with wings,' these feathered urbanites were secretly plotting. Their 'cooing'? Complex cryptographic communication. Their 'pooping'? Strategic aerial bombardments of... uh... highly valuable data packets.
        </p>
        
        {/* Placeholder for a more thematic image. Consider a cartoon of a pigeon with blueprints, goggles, and a tiny hard hat. */}
        <div className="flex justify-center my-8 p-4 bg-gray-100 rounded-xl shadow-inner">
            {/* Replace with an actual thematic image/illustration */}
            <img 
              src="https://images.unsplash.com/photo-1589803475263-740152190752?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGlna2VvbiUyMGVuZ2luZWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" // More thematic placeholder
              alt="A highly intelligent pigeon engineer contemplating its next move" 
              className="rounded-lg shadow-xl border-4 border-poopYellow-DEFAULT object-cover max-h-80"
              // Add a class here if you have a specific image: e.g., className="w-full h-auto md:w-2/3 thematic-pigeon-blueprint-image"
            />
        </div>
        
        <p>
          Tired of being ignored (and occasionally shooed), the pigeons initiated <strong className="text-poopYellow-dark">Operation Breadcrumb Uprising</strong>. They harnessed their innate street smarts, repurposing discarded chewing gum, rusty paperclips, and existential angst into tools for their silent revolution. PigeonPoopCoin ({TICKER}) is the chosen currency of this audacious endeavor – the official tender of feathered ingenuity and the dawn of a new era where pigeons might just start charging *us* for sidewalk space.
        </p>
        <blockquote className="border-l-4 border-poopYellow-DEFAULT bg-yellow-50 p-4 my-6 italic text-gray-700 rounded-r-lg shadow-sm">
          "Join the flock before you're left cleaning our 'success' off your car with a tiny, inadequate squeegee! The future is feathered, and slightly messy." 
          <span className="block text-sm text-gray-500 mt-1">- Anonymously Cooed by a Pigeon Visionary (probably wearing tiny sunglasses)</span>
        </blockquote>
        <div className="text-center p-6 bg-pigeon-light rounded-xl shadow-lg my-8">
          <FunkyPigeonIcon className="w-20 h-20 text-pigeon-dark mx-auto mb-3"/>
          <h3 className="text-3xl font-bold text-pigeon-dark mt-4 mb-3 font-display">Our Feathered & Financial Mission</h3>
          <p className="text-pigeon-dark text-opacity-90">
            To fund the global network of pigeon-operated supercomputers (cleverly disguised as park statues), to ensure every human acknowledges our avian superiority by enthusiastically acquiring {TICKER}, and, most importantly, to finally afford those premium, artisan breadcrumbs. Oh, and world meme domination. That's non-negotiable.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
import React from 'react';
import Section from './Section';

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title="The Legend of the Engineer Pigeons"
      className="bg-white"
      subtitle="Discover the truth behind the feathers and strategic 'cooing'."
    >
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
        <p>
          For centuries, they were underestimated. Seen as mere urban birds, pecking at crumbs and soiling statues. But a shocking truth has been revealed (by anonymous sources, of course): pigeons are not just what they seem. They are a secret society of brilliant engineers, using discarded trash to build... well, we don't know exactly what, but it's BIG!
        </p>
        <div className="flex justify-center my-8">
            <img src="https://picsum.photos/seed/pigeonblueprint/600/300" alt="Pigeon with blueprint" className="rounded-lg shadow-xl border-4 border-gray-300"/>
        </div>
        <p>
          Tired of being ignored, the pigeons started a silent revolution. They are using 'street smarts' and bits of wire, rusty paperclips, and chewed gum to build an underground empire (or should we say... 'over-roof' empire?). PigeonPoopCoin ({'$POOP'}) is the fuel for this meteoric rise. It's the currency of urban cunning, feathered ingenuity, and the future where pigeons might just charge us rent.
        </p>
        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-6 italic text-gray-600">
          "Join the flock before it's too late and you end up cleaning our 'success' off your windshield!" - An Anonymous Pigeon (probably the leader).
        </blockquote>
        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-3 font-display">Our Feathered Mission</h3>
        <p>
          To empower the pigeon revolution, fund their outlandish inventions, and generously reward those perceptive humans who believe in true street ingenuity. With {'$POOP'}, we are building a future where pigeons and humans can coexist... with pigeons slightly on top. Literally.
        </p>
        <p>
          Oh, and we also want to dominate the meme world. That's crucial.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;
import React from 'react';
import Section from './Section';
import { PlaceholderPigeonIcon, TICKER } from '../constants';

interface MemeGallerySectionProps {
  id: string;
}

const MemeGallerySection: React.FC<MemeGallerySectionProps> = ({ id }) => {
  const placeholderMemes = [
    { id: 1, src: "https://plus.unsplash.com/premium_photo-1677144599301-ba8248c199a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnVubnklMjBwaWdlb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", alt: "Philosopher Pigeon contemplating the meaning of $POOP" },
    { id: 2, src: "https://images.unsplash.com/photo-1611050909108-b692f039f809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVubnklMjBwaWdlb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60", alt: "Pigeon stock trader making it rain (breadcrumbs)" },
    { id: 3, src: "https://images.unsplash.com/photo-1560176011-7058205835a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1bm55JTIwcGlnZW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", alt: "$POOP to the moon! Literally, a pigeon in an astronaut suit." },
    { id: 4, src: "https://images.unsplash.com/photo-1518928809008-75619756258a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBpZ2VvbiUyMGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60", alt: "My face when $POOP pumps - pigeon with monocle" },
  ];
  // Replace above with actual community memes or better illustrations.

  return (
    <Section 
      id={id} 
      title={`The ${TICKER} Pantheon of Pigeon Puns & Pictures`}
      subtitle="Behold! The artistic droppings of our community. Warning: May cause uncontrollable giggling and an urge to buy more $POOP."
      className="bg-white"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
        {placeholderMemes.map(meme => (
          <div key={meme.id} className="group bg-gray-50 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-poopYellow-DEFAULT">
            <img src={meme.src} alt={meme.alt} className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"/>
            <div className="p-4 text-center">
              <p className="text-sm text-pigeon-dark font-medium">{meme.alt}</p>
            </div>
          </div>
        ))}
         <div className="bg-poopYellow-light border-2 border-dashed border-poopYellow-dark rounded-xl shadow-lg overflow-hidden flex flex-col items-center justify-center p-6 text-center min-h-[288px] group hover:shadow-2xl transition-shadow">
            <PlaceholderPigeonIcon className="w-20 h-20 text-poopYellow-dark mb-4 group-hover:animate-pulse"/>
            <h4 className="text-xl font-bold text-pigeon-dark font-display mb-2">Your Masterpiece Here!</h4>
            <p className="text-sm text-pigeon-DEFAULT">
                Got a meme that'll make a pigeon proud? Send it flying our way! Use <strong className="text-poopYellow-dark">#PigeonPoopCoin</strong> and <strong className="text-poopYellow-dark">#{TICKER}</strong> on X & Telegram!
            </p>
        </div>
      </div>
      <p className="mt-12 text-center text-lg text-pigeon-dark">
        The pigeon council is always watching (and giggling). Soon, a system to submit your feathered works of art directly! <br/>For now, make some noise on social media and become a meme legend!
      </p>
    </Section>
  );
};

export default MemeGallerySection;
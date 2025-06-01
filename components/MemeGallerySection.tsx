
import React from 'react';
import Section from './Section';
import { PlaceholderPigeonIcon } from '../constants';

interface MemeGallerySectionProps {
  id: string;
}

const MemeGallerySection: React.FC<MemeGallerySectionProps> = ({ id }) => {
  const placeholderMemes = [
    { id: 1, src: "https://picsum.photos/seed/pigeonmeme1/400/300", alt: "Pigeon Meme 1" },
    { id: 2, src: "https://picsum.photos/seed/pigeonmeme2/400/300", alt: "Pigeon Meme 2" },
    { id: 3, src: "https://picsum.photos/seed/pigeonmeme3/400/300", alt: "Pigeon Meme 3" },
    { id: 4, src: "https://picsum.photos/seed/pigeonmeme4/400/300", alt: "Pigeon Meme 4" },
  ];

  return (
    <Section 
      id={id} 
      title="Pigeon Art: A Galeria de Memes"
      subtitle="Nossos pombos artistas estão trabalhando duro! Aqui estão algumas obras-primas (e algumas tentativas)."
      className="bg-white"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {placeholderMemes.map(meme => (
          <div key={meme.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <img src={meme.src} alt={meme.alt} className="w-full h-48 object-cover"/>
            <div className="p-4 text-center">
              <p className="text-sm text-gray-600">{meme.alt}</p>
            </div>
          </div>
        ))}
         <div className="bg-yellow-100 border-2 border-dashed border-yellow-400 rounded-lg shadow-lg overflow-hidden flex flex-col items-center justify-center p-6 text-center min-h-[240px]">
            <PlaceholderPigeonIcon className="w-16 h-16 text-yellow-500 mb-4"/>
            <h4 className="text-lg font-semibold text-yellow-700 mb-2">Sua Arte Aqui!</h4>
            <p className="text-sm text-yellow-600">
                Crie e compartilhe seus memes $POOP nas redes sociais! Use #PigeonPoopCoin e marque-nos!
            </p>
        </div>
      </div>
      <p className="mt-10 text-center text-gray-700">
        Em breve, um sistema para submeter suas próprias obras de arte emplumadas! Por enquanto, espalhe a genialidade nas redes!
      </p>
    </Section>
  );
};

export default MemeGallerySection;

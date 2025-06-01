
import React from 'react';
import { SITE_NAME, SOCIAL_LINKS, TICKER, PlaceholderPigeonIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-2">
              <PlaceholderPigeonIcon className="h-8 w-8 text-yellow-400 mr-2"/>
              <h5 className="text-xl font-bold text-white font-display">{SITE_NAME}</h5>
            </div>
            <p className="text-sm text-gray-400">
              A moeda da astúcia urbana e da engenhosidade emplumada. Junte-se à revoada!
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Links Rápidos</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">Sobre Nós (A Lenda)</a></li>
              <li><a href="#tokenomics" className="hover:text-yellow-400 transition-colors">$POOPnomics</a></li>
              <li><a href="#roadmap" className="hover:text-yellow-400 transition-colors">Roadmap</a></li>
              <li><a href="#how-to-buy" className="hover:text-yellow-400 transition-colors">Como Comprar</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Comunidade</h5>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Telegram</a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">X (Twitter)</a>
              <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Discord</a>
              <a href={SOCIAL_LINKS.reddit} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Reddit</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <h6 className="text-sm font-semibold text-gray-400 mb-2">A Letra Miúda Que Ninguém Lê (Mas Deveria):</h6>
          <p className="text-xs text-gray-500 mb-4">
            PigeonPoopCoin ({TICKER}) é uma memecoin criada para fins de entretenimento e como um experimento social aviário-financeiro. 
            Investir em criptomoedas, especialmente memecoins, é altamente arriscado e volátil. Você pode perder todo o seu investimento (ou ficar rico em migalhas, quem sabe?). 
            Este não é um conselho financeiro. Os pombos não são consultores financeiros certificados (eles comem lixo, afinal).
            Faça sua própria pesquisa (DYOR - Do Your Own Research... or Roosting) e invista apenas o que você pode confortavelmente perder. 
            Nenhuma promessa de lucro é feita ou implícita. Divirta-se e seja um bom pombo!
          </p>
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {SITE_NAME}. Todos os direitos (e cocôs) reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

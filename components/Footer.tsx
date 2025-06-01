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
              The currency of urban cunning and feathered ingenuity. Join the flock!
            </p>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-400 transition-colors">About Us (The Legend)</a></li>
              <li><a href="#tokenomics" className="hover:text-yellow-400 transition-colors">$POOPnomics</a></li>
              <li><a href="#roadmap" className="hover:text-yellow-400 transition-colors">Roadmap</a></li>
              <li><a href="#how-to-buy" className="hover:text-yellow-400 transition-colors">How to Buy</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold text-white mb-3">Community</h5>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Telegram</a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">X (Twitter)</a>
              <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Discord</a>
              <a href={SOCIAL_LINKS.reddit} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">Reddit</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <h6 className="text-sm font-semibold text-gray-400 mb-2">The Fine Print Nobody Reads (But Should):</h6>
          <p className="text-xs text-gray-500 mb-4">
            PigeonPoopCoin ({TICKER}) is a memecoin created for entertainment purposes and as an avian-financial social experiment. 
            Investing in cryptocurrencies, especially memecoins, is highly risky and volatile. You could lose your entire investment (or get rich in crumbs, who knows?). 
            This is not financial advice. Pigeons are not certified financial advisors (they eat trash, after all).
            Do Your Own Research (DYOR... or Roosting) and invest only what you can comfortably afford to lose. 
            No promise of profit is made or implied. Have fun and be a good pigeon!
          </p>
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights (and poops) reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
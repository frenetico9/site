import React from 'react';
import { SITE_NAME, SOCIAL_LINKS, TICKER, FunkyPigeonIcon } from '../constants'; // Using FunkyPigeonIcon

const Footer: React.FC = () => {
  return (
    <footer className="bg-pigeon-dark text-gray-300 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          <div className="md:col-span-1">
            <div className="flex items-center mb-3">
              <FunkyPigeonIcon className="h-12 w-12 text-poopYellow-DEFAULT mr-3"/>
              <h5 className="text-2xl font-bold text-white font-display">{SITE_NAME}</h5>
            </div>
            <p className="text-sm text-gray-400">
              Fueling avian ambitions and questionable (but hilarious) financial decisions since {new Date().getFullYear()}. Join the feathered frenzy!
            </p>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-poopYellow-light mb-4 font-display tracking-wider">Quick Coos (Links)</h5>
            <ul className="space-y-2 text-sm">
              <li><a href={`#${"about"}`} className="hover:text-poopYellow-DEFAULT transition-colors duration-200">The Secret Lore</a></li>
              <li><a href={`#${"tokenomics"}`} className="hover:text-poopYellow-DEFAULT transition-colors duration-200">$POOPnomics 101</a></li>
              <li><a href={`#${"roadmap"}`} className="hover:text-poopYellow-DEFAULT transition-colors duration-200">World Domi-NEST-ion Plan</a></li>
              <li><a href={`#${"how-to-buy"}`} className="hover:text-poopYellow-DEFAULT transition-colors duration-200">Get Your $POOP</a></li>
              <li><a href={`#${"faq"}`} className="hover:text-poopYellow-DEFAULT transition-colors duration-200">Curious Coos (FAQ)</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-semibold text-poopYellow-light mb-4 font-display tracking-wider">Join the Flock</h5>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-poopYellow-DEFAULT transition-colors duration-200 text-sm">Telegram Squawk Box</a>
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-poopYellow-DEFAULT transition-colors duration-200 text-sm">X (Twitter) Chirps</a>
              <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="hover:text-poopYellow-DEFAULT transition-colors duration-200 text-sm">Discord Nest</a>
              <a href={SOCIAL_LINKS.reddit} target="_blank" rel="noopener noreferrer" className="hover:text-poopYellow-DEFAULT transition-colors duration-200 text-sm">Reddit Roost</a>
            </div>
             <p className="text-xs text-gray-500 mt-4">Follow us before we follow you (for your breadcrumbs).</p>
          </div>
        </div>

        <div className="border-t border-pigeon-DEFAULT pt-8 mt-8">
          <h6 className="text-md font-semibold text-gray-400 mb-2 font-display">The Legally-Mandated Droppings (Disclaimer):</h6>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">
            PigeonPoopCoin ({TICKER}) is a memecoin, a digital social experiment wrapped in feathers and absurdity. It's as risky as trying to steal a French fry from a seagull in a hurricane. 
            Investing in cryptocurrencies, especially coins named after avian excrement, is highly speculative and could lead to the complete loss of your investment (or you might strike it rich in digital breadcrumbs, who knows?). 
            This website is NOT financial advice. Our pigeons are not certified financial advisors; their primary expertise lies in advanced breadcrumb acquisition and synchronous head-bobbing.
            Do Your Own Research (DYOR... or as we pigeons say, Do Your Own Roosting - DYOR!). Only invest what you can comfortably afford to lose without having to sell your prized collection of shiny bottle caps. 
            No promise of profit is made, implied, cooed, or telepathically transmitted by any pigeon, real or imagined. Have fun, be a good sport, and don't blame the pigeons if things go south (they'll just fly away).
          </p>
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All poops, rights, and breadcrumbs reserved.
            <br/>
            <span className="text-xs">No pigeons were financially compensated (beyond premium birdseed) for their endorsements. They mostly work for the glory of the flock.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
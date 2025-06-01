import React from 'react';
import Section from './Section';
import Button from './Button';
import { SOCIAL_LINKS } from '../constants';

interface CommunitySectionProps {
  id: string;
}

const SocialButton: React.FC<{href: string, label: string, icon: React.ReactNode, bgColorClass: string}> = ({href, label, icon, bgColorClass}) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`flex items-center justify-center space-x-3 p-4 rounded-lg text-white font-semibold text-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${bgColorClass}`}
    >
        {icon}
        <span>{label}</span>
    </a>
);

const TelegramIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22 5.889a2.334 2.334 0 00-1.031-1.032A2.333 2.333 0 0019.111 4H4.889A2.333 2.333 0 003.031 4.857 2.334 2.334 0 002 5.889v12.222a2.333 2.333 0 001.857 1.857A2.334 2.334 0 004.889 20h14.222a2.333 2.333 0 001.857-1.857A2.334 2.334 0 0022 18.111V5.889zM9.121 14.555l-0.093-3.562 5.859-3.188c0.186-0.093 0.093-0.281-0.093-0.188l-7.256 4.469-0.281 0.093c-0.281 0.093-0.281 0.469 0 0.562l1.766 0.562 0.656 2.056c0.093 0.281 0.469 0.281 0.562 0l0.931-2.15z"/></svg>;
const TwitterIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.9-.53 1.58-1.37 1.9-2.37-.84.5-1.77.86-2.77 1.06C18.27 4.43 17.06 4 15.72 4c-2.36 0-4.28 1.92-4.28 4.28 0 .34.04.67.1.99C8.23 9.09 5.15 7.38 3.04 4.79c-.37.63-.58 1.37-.58 2.15 0 1.48.76 2.79 1.9 3.55-.7-.02-1.37-.22-1.95-.53v.05c0 2.07 1.47 3.8 3.42 4.19-.36.1-.73.15-1.12.15-.27 0-.54-.03-.8-.08.54 1.7 2.1 2.93 3.95 2.97-1.45 1.14-3.29 1.81-5.27 1.81H2c1.9 1.21 4.14 1.92 6.56 1.92 7.88 0 12.19-6.53 12.19-12.19 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.12-2.2z"/></svg>;
const DiscordIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19.54 0c-.29.28-.54.6-.77.93C17.36.56 15.78.23 14.2.03 14.18 0 14.12 0 14.12.03c-1.9.2-3.53.68-4.9 1.25C4.06 3.42 2.1 7.58 2.03 7.64c-.47 1.44-.7 3.35-.73 4.8.03.08.03.17.06.22 0 0 .37 1.98 1.75 3.56.1.1.2.17.28.25 1.83 1.36 3.92 2.2 6.14 2.5.43.05.86.1 1.28.13.63.03 1.28.03 1.9-.02.25-.02.5-.03.76-.05 2.45-.23 4.68-.98 6.58-2.22.95-.67 1.63-1.42 2.1-2.15.05-.1.08-.17.1-.25.02-.06.03-.1.06-.17.23-1.07.36-2.2.4-3.3.02-.18.03-.37.03-.56 0-.06 0-.1-.02-.17-.25-2.18-1.18-4.54-2.78-6.25zm-10.8 12.84c-.88 0-1.6-.76-1.6-1.7s.72-1.7 1.6-1.7c.87 0 1.6.76 1.6 1.7s-.72 1.7-1.6 1.7zm5.53 0c-.88 0-1.6-.76-1.6-1.7s.72-1.7 1.6-1.7c.87 0 1.6.76 1.6 1.7s-.72 1.7-1.6 1.7z"/></svg>;
const RedditIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.535 13.173c-.32.32-.782.403-1.185.13l-2.994-1.796a.5.5 0 00-.497 0l-2.994 1.796c-.403.273-.865.19-1.185-.13-.32-.32-.403-.782-.13-1.185l2.388-3.45a.5.5 0 00-.04-.602l-1.31-1.31c-.32-.32-.32-.832 0-1.152.32-.32.832-.32 1.152 0l1.31 1.31a.5.5 0 00.602.04l3.45-2.388c.403-.273.865-.19 1.185.13.32.32.403.782.13 1.185l-2.388 3.45a.5.5 0 00.04.602l1.31 1.31c.32.32.32.832 0 1.152zM8.5 12c0-.828-.672-1.5-1.5-1.5S5.5 11.172 5.5 12s.672 1.5 1.5 1.5S8.5 12.828 8.5 12zm7 0c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5z"/></svg>;


const CommunitySection: React.FC<CommunitySectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title="Join the Flock!"
      subtitle="Be part of the flock! Follow us, create memes, join discussions, and help spread the word (or the 'poop')."
      className="bg-yellow-50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        <SocialButton href={SOCIAL_LINKS.telegram} label="Telegram" icon={<TelegramIcon/>} bgColorClass="bg-blue-500 hover:bg-blue-600"/>
        <SocialButton href={SOCIAL_LINKS.twitter} label="X (Twitter)" icon={<TwitterIcon/>} bgColorClass="bg-gray-800 hover:bg-black"/>
        <SocialButton href={SOCIAL_LINKS.discord} label="Discord" icon={<DiscordIcon/>} bgColorClass="bg-indigo-600 hover:bg-indigo-700"/>
        <SocialButton href={SOCIAL_LINKS.reddit} label="Reddit" icon={<RedditIcon/>} bgColorClass="bg-orange-500 hover:bg-orange-600"/>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700 mb-4">
          Our community is our greatest asset (after high-quality trash, of course).
          Be active, be creative, be a proud pigeon!
        </p>
        <Button href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
          Join Main Group (Telegram)
        </Button>
      </div>
    </Section>
  );
};

export default CommunitySection;
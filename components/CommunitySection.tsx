import React from 'react';
import Section from './Section';
import Button from './Button';
import { SOCIAL_LINKS, TICKER } from '../constants';

interface CommunitySectionProps {
  id: string;
}

const SocialButton: React.FC<{href: string, label: string, icon: React.ReactNode, bgColorClass: string, textColorClass?: string, hoverBgColorClass?: string}> = 
  ({href, label, icon, bgColorClass, textColorClass = 'text-white', hoverBgColorClass}) => (
    <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`flex flex-col items-center justify-center space-y-2 p-6 rounded-xl ${textColorClass} font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${bgColorClass} ${hoverBgColorClass || ''}`}
    >
        <span className="text-4xl">{icon}</span>
        <span>{label}</span>
    </a>
);

// Using text emojis for icons here as they are simple and effective
const TelegramIcon = () => '✈️'; // Paper plane for Telegram
const TwitterIcon = () => '🐦';  // Bird for Twitter/X
const DiscordIcon = () => '👾';  // Alien monster for Discord (gaming vibe)
const RedditIcon = () => '🤖';   // Robot face for Reddit


const CommunitySection: React.FC<CommunitySectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title="Join Our Noisy, Feathery, Slightly Unhinged Flock!"
      subtitle={`Where the memes are fresh, the coos are loud, and the ${TICKER} flows freely. Don't be a lone pigeon!`}
      className="bg-pigeon-light" // Using a pigeon theme color
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
        <SocialButton href={SOCIAL_LINKS.telegram} label="Telegram Squawk Box" icon={<TelegramIcon/>} bgColorClass="bg-sky-500" hoverBgColorClass="hover:bg-sky-600"/>
        <SocialButton href={SOCIAL_LINKS.twitter} label="X (Twitter) Chirps" icon={<TwitterIcon/>} bgColorClass="bg-gray-800" hoverBgColorClass="hover:bg-black"/>
        <SocialButton href={SOCIAL_LINKS.discord} label="Discord Nest" icon={<DiscordIcon/>} bgColorClass="bg-indigo-600" hoverBgColorClass="hover:bg-indigo-700"/>
        <SocialButton href={SOCIAL_LINKS.reddit} label="Reddit Roost" icon={<RedditIcon/>} bgColorClass="bg-orange-500" hoverBgColorClass="hover:bg-orange-600"/>
      </div>
      <div className="mt-16 text-center">
        <p className="text-xl text-pigeon-dark mb-6 max-w-xl mx-auto">
          Our community is our most valuable asset (after high-quality, discarded pizza crusts, of course).
          Be active, be creative, be a proud Poop Trooper!
        </p>
        <Button href={SOCIAL_LINKS.telegram} target="_blank" variant="primary" size="xl" trailingIcon="🥳">
          Dive into the Main Telegram Group!
        </Button>
      </div>
    </Section>
  );
};

export default CommunitySection;
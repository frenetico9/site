import React from 'react';
import { NavItem } from './types';

export const SITE_NAME = "PigeonPoopCoin ($POOP)";
export const TICKER = "$POOP";

export const SECTION_IDS = {
  hero: "hero",
  about: "about",
  tokenomics: "tokenomics",
  roadmap: "roadmap",
  howToBuy: "how-to-buy",
  community: "community",
  memes: "memes",
  faq: "faq",
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Home Base", href: `#${SECTION_IDS.hero}` },
  { label: "The Secret Lore", href: `#${SECTION_IDS.about}` },
  { label: "$POOPnomics 101", href: `#${SECTION_IDS.tokenomics}` },
  { label: "World Domi-Nest-ion Plan", href: `#${SECTION_IDS.roadmap}` },
  { label: "Get Your $POOP", href: `#${SECTION_IDS.howToBuy}` },
  { label: "Join the Flock", href: `#${SECTION_IDS.community}` },
];

export const SOCIAL_LINKS = {
  telegram: "https://t.me/pigeonpoopcoin_official", // Placeholder
  twitter: "https://x.com/pigeonpoopcoin", // Placeholder
  discord: "https://discord.gg/pigeonpoopcoin", // Placeholder
  reddit: "https://reddit.com/r/pigeonpoopcoin", // Placeholder
};

// This is where the magic happens... or where the pigeons hide their bread.
export const CONTRACT_ADDRESS = "0xPOOP123456789ABCDEF00000WeAreWatchingYou"; // Placeholder - even more humor

// Placeholder Mascot SVG (simple pigeon icon)
export const PlaceholderPigeonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.267 2 7.333 3.534 7.333 5.667c0 .8.267 1.533.734 2.133L3 14.333V16h4.333L12 22l4.667-6H21v-1.667l-5.067-6.533c.467-.6.734-1.333.734-2.133C16.667 3.534 14.733 2 12 2zm0 2c.8 0 1.333.533 1.333 1.333S12.8 6.667 12 6.667s-1.333-.6-1.333-1.334S11.2 4 12 4z"/>
  </svg>
);

// More stylized pigeon icon - our hero, our mascot, our chief breadcrumb strategist.
export const FunkyPigeonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Body and Head */}
    <path d="M50,15 C35,15 25,28 25,40 C25,48 30,55 38,58 L20,75 L25,80 L40,70 L50,90 L60,70 L75,80 L80,75 L62,58 C70,55 75,48 75,40 C75,28 65,15 50,15 Z" fill="#78716C"/> {/* Pigeon Gray Body */}
    {/* Beak */}
    <polygon points="50,42 55,48 45,48" fill="#FACC15"/> {/* PoopYellow Beak */}
    {/* Eye */}
    <circle cx="43" cy="38" r="4" fill="white"/>
    <circle cx="43" cy="38" r="2" fill="black"/>
     {/* Mad Scientist Goggles - made of wire and hope */}
    <circle cx="38" cy="38" r="8" fill="none" stroke="#57534E" strokeWidth="2.5"/> {/* Dark Pigeon Gray Goggles */}
    <circle cx="52" cy="38" r="8" fill="none" stroke="#57534E" strokeWidth="2.5"/>
    <line x1="45" y1="38" x2="46" y2="38" stroke="#57534E" strokeWidth="2"/>
     {/* Makeshift Newspaper Hat - for extra genius points */}
    <path d="M40,20 Q50,10 60,20 Q55,25 50,22 Q45,25 40,20 Z" fill="#A8A29E" stroke="#57534E" strokeWidth="1"/>
    {/* Tiny wrench made of a paperclip - symbol of ingenuity */}
    <path d="M65,55 L70,50 L75,55 L73,57 L67,57 Z M68,57 L68,62 L72,62 L72,57" fill="#A8A29E" stroke="#57534E" strokeWidth="1.5" transform="rotate(15 65 55)" />
  </svg>
);
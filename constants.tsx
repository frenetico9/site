
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
  { label: "Início", href: `#${SECTION_IDS.hero}` },
  { label: "A Lenda", href: `#${SECTION_IDS.about}` },
  { label: "$POOPnomics", href: `#${SECTION_IDS.tokenomics}` },
  { label: "Plano de Voo", href: `#${SECTION_IDS.roadmap}` },
  { label: "Comprar $POOP", href: `#${SECTION_IDS.howToBuy}` },
  { label: "Comunidade", href: `#${SECTION_IDS.community}` },
];

export const SOCIAL_LINKS = {
  telegram: "https://t.me/pigeonpoopcoin_official", // Placeholder
  twitter: "https://x.com/pigeonpoopcoin", // Placeholder
  discord: "https://discord.gg/pigeonpoopcoin", // Placeholder
  reddit: "https://reddit.com/r/pigeonpoopcoin", // Placeholder
};

export const CONTRACT_ADDRESS = "0xPOOP123456789ABCDEF00000RoostingSoon"; // Placeholder

// Placeholder Mascot SVG (simple pigeon icon)
export const PlaceholderPigeonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.267 2 7.333 3.534 7.333 5.667c0 .8.267 1.533.734 2.133L3 14.333V16h4.333L12 22l4.667-6H21v-1.667l-5.067-6.533c.467-.6.734-1.333.734-2.133C16.667 3.534 14.733 2 12 2zm0 2c.8 0 1.333.533 1.333 1.333S12.8 6.667 12 6.667s-1.333-.6-1.333-1.334S11.2 4 12 4z"/>
  </svg>
);

// More stylized pigeon icon
export const FunkyPigeonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10C38.95 10 30 18.95 30 30C30 34.42 31.79 38.46 34.65 41.55L15 65V70H37.5L50 90L62.5 70H85V65L65.35 41.55C68.21 38.46 70 34.42 70 30C70 18.95 61.05 10 50 10ZM50 20C55.52 20 60 24.48 60 30C60 30.75 59.9 31.48 59.73 32.18C58.19 30.82 56.08 30 53.5 30C48.91 30 45.03 32.66 42.6 36.25L40.66 33.4C40.23 32.74 40 31.93 40 31.09C40 24.96 44.48 20 50 20Z" />
    <path d="M53.5 32C57.09 32 60 34.91 60 38.5C60 42.09 57.09 45 53.5 45C49.91 45 47 42.09 47 38.5C47 34.91 49.91 32 53.5 32Z" opacity="0.7"/>
    {/* Simple glasses */}
    <circle cx="45" cy="30" r="5" fill="none" stroke="#333" strokeWidth="2"/>
    <circle cx="55" cy="30" r="5" fill="none" stroke="#333" strokeWidth="2"/>
    <line x1="50" y1="30" x2="50" y2="30" stroke="#333" strokeWidth="2"/>
  </svg>
);

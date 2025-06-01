import React, { useState } from 'react';
import Section from './Section';
import Button from './Button';
import { TICKER, CONTRACT_ADDRESS } from '../constants';

interface HowToBuySectionProps {
  id: string;
}

const Step: React.FC<{ number: number; title: string; description: string; icon: React.ReactNode; emoji: string }> = ({ number, title, description, icon, emoji }) => (
  <div className="flex items-start space-x-4 p-5 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-poopYellow-DEFAULT">
    <div className="flex-shrink-0 w-16 h-16 bg-poopYellow-DEFAULT text-pigeon-dark rounded-full flex flex-col items-center justify-center text-2xl font-bold shadow-md">
      <span className="block text-sm -mb-1">Step</span>
      {number}
    </div>
    <div>
      <div className="flex items-center mb-2">
        <span className="mr-3 text-poopYellow-dark text-3xl">{icon}</span>
        <h3 className="text-xl font-bold text-pigeon-dark font-display">{emoji} {title}</h3>
      </div>
      <p className="text-gray-700 text-base">{description}</p>
    </div>
  </div>
);

// Simple SVG Icons - can be replaced with more thematic ones
const WalletIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const NetworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const SwapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>;
const PoopIcon = () => <span className="text-3xl">🎯</span>; // Target for the final step


const HowToBuySection: React.FC<HowToBuySectionProps> = ({ id }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <Section 
      id={id} 
      title={`Get Your Claws on ${TICKER}: A No-Brainer Guide for Aspiring Pigeonaires!`}
      subtitle="So easy, a pigeon could do it (if they had thumbs, opposable ones, and a basic understanding of DeFi... okay, maybe not)."
      className="bg-yellow-50" // Light yellow, like morning sunshine on a pile of... opportunity!
    >
      <div className="max-w-3xl mx-auto grid gap-6 md:gap-8">
        <Step 
          number={1} 
          emoji="🧱"
          title="Get a Crypto Wallet" 
          description={`You'll need a digital birdcage for your ${TICKER}. MetaMask or Trust Wallet are popular choices that speak fluent BSC/ETH. Keep your secret phrase safer than a squirrel's winter nut stash!`}
          icon={<WalletIcon />}
        />
        <Step 
          number={2} 
          emoji="💰"
          title="Feed Your Wallet (BNB/ETH)" 
          description={`Buy some BNB (for Binance Smart Chain) or ETH (for Ethereum) from a crypto exchange. Send this 'magic birdseed' to your new wallet. This is what you'll swap for ${TICKER}.`}
          icon={<NetworkIcon />}
        />
        <Step 
          number={3} 
          emoji="🔗"
          title="Visit a DEX (PancakeSwap/UniSwap)" 
          description={`Navigate to PancakeSwap (for BSC ${TICKER}) or UniSwap (for ETH ${TICKER}) using your wallet's built-in browser or on your computer. Connect your wallet. Warning: Only use official links! Don't click on shady links dropped by rival sparrows.`}
          icon={<SwapIcon />}
        />
        <Step 
          number={4} 
          emoji="🎯"
          title={`Swap for ${TICKER}!`}
          description={`In the DEX's 'Swap' section, paste our OFFICIAL ${TICKER} contract address (see below!). Select BNB/ETH as 'from' and ${TICKER} as 'to'. Enter amount, approve, confirm, and BAM! You're officially part of the Poop Troop! Welcome, high-flyer!`}
          icon={<PoopIcon />}
        />
      </div>
      <div className="mt-12 text-center p-6 bg-white rounded-xl shadow-xl border-2 border-poopYellow-DEFAULT">
        <h4 className="text-2xl font-bold text-pigeon-dark font-display mb-3">Official {TICKER} Contract Address:</h4>
        <div className="bg-pigeon-light border border-pigeon-DEFAULT text-pigeon-dark px-4 py-3 rounded-lg inline-block break-all shadow-inner relative group">
          <p className="font-mono text-sm md:text-base lg:text-lg">{CONTRACT_ADDRESS}</p>
          <Button
            onClick={handleCopy}
            size="sm"
            variant="secondary"
            className="absolute -top-2 -right-2 transform translate-x-1/2 -translate-y-1/2 opacity-50 group-hover:opacity-100 transition-opacity"
          >
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          (<strong>CRITICAL:</strong> Always double, triple, quadruple-check this address on our official Telegram or X before swapping! A cautious pigeon avoids becoming hawk food!)
        </p>
      </div>
      <div className="mt-10 text-center space-y-3 sm:space-y-0 sm:space-x-4">
        <Button href="https://pancakeswap.finance/swap" target="_blank" variant="primary" size="lg" leadingIcon="🥞">
          Go to PancakeSwap (BSC)
        </Button>
        <Button href="https://app.uniswap.org/#/swap" target="_blank" variant="secondary" size="lg" leadingIcon="🦄" className="bg-pink-500 hover:bg-pink-600 text-white">
          Go to UniSwap (ETH)
        </Button>
      </div>
    </Section>
  );
};

export default HowToBuySection;
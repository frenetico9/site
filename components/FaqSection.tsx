import React, { useState } from 'react';
import Section from './Section';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  {
    id: "q1",
    question: "Is this serious? Like, for real?",
    answer: "As serious as a pigeon staring at a dropped piece of bread. Meaning, it's VERY fun, but remember memecoins are a wild and highly speculative flight. Invest responsibly and only what you can afford to lose (like that sock that disappeared in the washing machine)."
  },
  {
    id: "q2",
    question: "Are pigeons really going to take over the world?",
    answer: "We're working on it. One poop at a time. $POOP is the first step to funding our global trash collection infrastructure and 'coo'-based communication networks. The future is feathered."
  },
  {
    id: "q3",
    question: "When Lambo... or rather, When Fancy Bakery Stale Bread?",
    answer: "Our goal is to achieve 'Artisanal Whole Wheat Sourdough with Exotic Seeds' mode. Patience is a pigeon's virtue. Focus on the community, the memes, and having fun. The 'stale bread' will come to those who believe in the flock!"
  },
  {
    id: "q4",
    question: "Where can I find the official $POOP contract address?",
    answer: "The official $POOP contract address will ALWAYS be clearly announced on our website (right here!) and on our official channels (Telegram, X). Beware of fake pigeons and scammers! Triple-check before pasting."
  },
  {
    id: "q5",
    question: "How can I help the pigeon revolution?",
    answer: "Excellent question, perceptive human! Buy $POOP, hold $POOP, talk about $POOP, create memes about $POOP, use the hashtag #PigeonPoopCoin. Join our community and be an honorary pigeon! The more noise (and 'poop') we make, the higher we'll fly."
  }
];

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, toggleAccordion }) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-700 bg-gray-50 hover:bg-gray-100 focus:ring-4 focus:ring-yellow-200 rounded-t-lg"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`faq-content-${item.id}`}
        >
          <span className="font-display text-lg">{item.question}</span>
          <svg className={`w-6 h-6 shrink-0 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </h2>
      {isOpen && (
        <div id={`faq-content-${item.id}`} className="p-5 border-t border-gray-200 bg-white">
          <p className="text-gray-600">{item.answer}</p>
        </div>
      )}
    </div>
  );
};


interface FaqSectionProps {
  id: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ id }) => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(faqItems[0]?.id || null);

  const toggleAccordion = (itemId: string) => {
    setOpenAccordion(openAccordion === itemId ? null : itemId);
  };

  return (
    <Section 
      id={id} 
      title="Frequently Asked Questions from Curious Pigeons (and Humans Too)"
      subtitle="Your hairiest (or feathered) questions answered."
      className="bg-gray-100"
    >
      <div className="max-w-3xl mx-auto space-y-4">
        {faqItems.map((item) => (
          <AccordionItem 
            key={item.id} 
            item={item}
            isOpen={openAccordion === item.id}
            toggleAccordion={() => toggleAccordion(item.id)}
          />
        ))}
      </div>
    </Section>
  );
};

export default FaqSection;
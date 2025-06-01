import React, { useState } from 'react';
import Section from './Section';
import { FaqItem } from '../types';
import { TICKER } from '../constants';

const faqItems: FaqItem[] = [
  {
    id: "q1",
    question: `Is ${TICKER} a joke? Like, are you for real, feathers and all?`,
    answer: `Yes. And no. And maybe. It's a hilarious, high-flying journey into the wonderfully absurd world of memecoins, captained by a flock of devoted (and slightly unhinged) pigeons. Think of it as performance art, but with potential moon-landing breadcrumbs. Invest with laughter, not your life savings, and always DYOR (Do Your Own Roosting).`
  },
  {
    id: "q2",
    question: "So, are pigeons *actually* plotting world domination with this coin?",
    answer: `Let's just say their 'coo-nsultants' are exploring 'global strategic crumb acquisition initiatives.' For now, it's more of a 'friendly takeover' of the internet's meme supply. And maybe your leftover pizza. The future is feathered, and surprisingly well-organized.`
  },
  {
    id: "q3",
    question: `When Lambo? Or, more realistically, when diamond-encrusted birdbath?`,
    answer: `Ah, the age-old question! We're aiming for 'Artisanal Sourdough Discard Pile with Imported Seeds' mode first. True pigeonaires know that patience, community, and a steady supply of high-quality memes are the real treasures. The diamond birdbath is merely a... shiny distraction. (But we wouldn't say no).`
  },
  {
    id: "q4",
    question: `Where's the official ${TICKER} contract address? I don't want to buy fake poop!`,
    answer: `Excellent caution! The one and only, 100% genuine, pigeon-approved ${TICKER} contract address is prominently displayed in our 'How to Buy' section and ALWAYS triple-verified on our official Telegram and X (Twitter). Accept no substitutes! Fake poop is just... sad.`
  },
  {
    id: "q5",
    question: "How can I, a humble human, contribute to this glorious pigeon revolution?",
    answer: `Magnificent query, featherless ally! Buy ${TICKER}. Hold ${TICKER} (HODL like it's the last breadcrumb on Earth). Talk about ${TICKER} until your friends think you've flown the coop. Create magnificent memes about ${TICKER}. Use #PigeonPoopCoin & #${TICKER} everywhere. Join our vibrant communities. Basically, be the best honorary pigeon you can be! The louder we coo, the higher we fly!`
  },
  {
    id: "q6",
    question: "Are there any actual pigeons on the team?",
    answer: `Our CEO, Bartholomew 'Barry' Cooingston III, is a distinguished Rock Dove with a PhD in Advanced Crumb Dynamics. The rest of the team... well, let's just say they're very good at interpreting his coos and strategic droppings. We have a strict 'no humans pretending to be pigeons' policy.`
  }
];

interface AccordionItemProps {
  item: FaqItem;
  isOpen: boolean;
  toggleAccordion: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, toggleAccordion }) => {
  return (
    <div className="border-2 border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 md:p-6 font-medium text-left text-pigeon-dark ${isOpen ? 'bg-poopYellow-light' : 'bg-white hover:bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-poopYellow-DEFAULT transition-colors duration-200`}
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          aria-controls={`faq-content-${item.id}`}
        >
          <span className="font-display text-lg md:text-xl">{item.question}</span>
          <svg className={`w-6 h-6 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-pigeon-dark' : 'text-poopYellow-dark'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
      </h2>
      {isOpen && (
        <div id={`faq-content-${item.id}`} className="p-5 md:p-6 border-t-2 border-poopYellow-DEFAULT bg-white">
          <p className="text-gray-700 leading-relaxed text-base md:text-lg">{item.answer}</p>
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
      title="Your Burning Questions, Answered by Our Chief Pigeon Philosopher (C.P.P.)"
      subtitle="No question is too silly, unlike some of the hats our pigeons try to wear. Ask away!"
      className="bg-skyBlue-light" // Consistent with Tokenomics for thematic grouping
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
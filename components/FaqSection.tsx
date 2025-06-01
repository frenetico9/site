
import React, { useState } from 'react';
import Section from './Section';
import { FaqItem } from '../types';

const faqItems: FaqItem[] = [
  {
    id: "q1",
    question: "Isso é sério? Tipo, sério mesmo?",
    answer: "Tão sério quanto um pombo encarando um pedaço de pão caído no chão. Ou seja, é MUITO divertido, mas lembre-se que memecoins são um voo selvagem e altamente especulativo. Invista com responsabilidade e apenas o que você pode perder (tipo aquela meia que sumiu na máquina de lavar)."
  },
  {
    id: "q2",
    question: "Os pombos realmente vão dominar o mundo?",
    answer: "Estamos trabalhando nisso. Um cocô de cada vez. $POOP é o primeiro passo para financiar nossa infraestrutura global de coleta de lixo e redes de comunicação baseadas em 'arrulhos'. O futuro é emplumado."
  },
  {
    id: "q3",
    question: "Quando Lambo... ou melhor, Quando Pão Velho de Padaria Chique?",
    answer: "Nosso objetivo é alcançar o 'Modo Pão de Forma Integral Artesanal com Sementes Exóticas'. A paciência é uma virtude de pombo. Foque na comunidade, nos memes e em se divertir. O 'pão velho' virá para aqueles que acreditam na revoada!"
  },
  {
    id: "q4",
    question: "Onde posso encontrar o endereço oficial do contrato $POOP?",
    answer: "O endereço oficial do contrato $POOP será SEMPRE claramente anunciado em nosso site (aqui mesmo!) e em nossos canais oficiais (Telegram, X). Cuidado com os pombos falsos e golpistas! Verifique três vezes antes de colar."
  },
  {
    id: "q5",
    question: "Como posso ajudar a revolução dos pombos?",
    answer: "Excelente pergunta, humano perspicaz! Compre $POOP, guarde $POOP, fale sobre $POOP, crie memes sobre $POOP, use a hashtag #PigeonPoopCoin. Junte-se à nossa comunidade e seja um pombo honorário! Quanto mais barulho (e 'poop') fizermos, mais alto voaremos."
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
      title="Perguntas Frequentes de Pombos Curiosos (e Humanos Também)"
      subtitle="Suas dúvidas mais cabeludas (ou emplumadas) respondidas."
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

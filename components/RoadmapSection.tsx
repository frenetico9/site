
import React from 'react';
import Section from './Section';
import { RoadmapPhase } from '../types';

const roadmapPhases: RoadmapPhase[] = [
  {
    id: "fase1",
    title: "Fase 1: Construindo o Ninho 🥚",
    description: "Primeiro, o básico: encontrar os melhores galhos e migalhas.",
    details: [
      "Lançamento do site V1 (este que você está vendo, impressionante, né?)",
      "Criação da comunidade (Telegram, X, Discord - venha dar um pio!)",
      "Lançamento justo na PancakeSwap (ou UniSwap, os pombos estão decidindo)",
      "Primeira campanha de memes - liberem a criatividade!",
    ],
    icon: <span className="text-4xl">🥚</span>
  },
  {
    id: "fase2",
    title: "Fase 2: Alçando Voo 🚀",
    description: "Expandir o território, mais pombos na revoada!",
    details: [
      "Parcerias com influenciadores 'pássaros' (e alguns humanos legais)",
      "Listagem em CoinGecko e CoinMarketCap (para sermos oficialmente 'algo')",
      "Desenvolvimento de ferramentas de meme exclusivas para a comunidade",
      "Listagem em CEX menores (os pombos estão negociando)",
    ],
    icon: <span className="text-4xl">🚀</span>
  },
  {
    id: "fase3",
    title: "Fase 3: Dominando os Céus 👑",
    description: "O céu NÃO é o limite!",
    details: [
      "Lançamento de mercadorias (camisetas 'Eu Acredito nos Pombos', bonés 'Mestre do Lixo')",
      "Coleção de NFTs de Pombos Engenheiros (cada um mais maluco que o outro)",
      "Projeto de caridade para 'pombos menos afortunados' (e talvez alguns abrigos de animais)",
      "Explorar parcerias 'cross-chain' (pombos adoram viajar)",
    ],
    icon: <span className="text-4xl">👑</span>
  },
  {
    id: "faseX",
    title: "Fase X: O Futuro é Pombo... Ou Algo Assim 🔮",
    description: "Dominação mundial... ou apenas mais memes. Veremos.",
    details: [
      "Construção da Embaixada Pombal na Lua (financiada por $POOP, claro)",
      "Desenvolvimento de IA pombal para prever o mercado (e onde encontrar as melhores batatas fritas caídas)",
      "Lobby para que 'arrulho' seja reconhecido como língua oficial da ONU",
      "Continuar sendo a memecoin mais divertida e engenhosa do pedaço!",
    ],
    icon: <span className="text-4xl">🔮</span>
  },
];

const RoadmapCard: React.FC<{ phase: RoadmapPhase, index: number }> = ({ phase, index }) => (
  <div className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12 items-start`}>
    <div className="hidden md:flex flex-col items-center mx-4 w-24">
      <div className="w-16 h-16 rounded-full bg-yellow-400 text-gray-800 flex items-center justify-center text-2xl font-bold shadow-lg mb-2">
        {phase.icon || index + 1}
      </div>
      {index < roadmapPhases.length -1 && <div className="h-24 w-1 bg-gray-300"></div>}
    </div>
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-200 flex-1">
      <div className="flex items-center md:hidden mb-4">
        <div className="w-12 h-12 rounded-full bg-yellow-400 text-gray-800 flex items-center justify-center text-xl font-bold shadow-lg mr-4">
          {phase.icon || index + 1}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 font-display">{phase.title}</h3>
      </div>
      <h3 className="hidden md:block text-2xl font-bold text-gray-800 font-display mb-2">{phase.title}</h3>
      <p className="text-gray-600 mb-4 italic">{phase.description}</p>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {phase.details.map((detail, i) => (
          <li key={i} className="flex items-start">
            <span className="text-yellow-500 mr-2 mt-1">➔</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

interface RoadmapSectionProps {
  id: string;
}

const RoadmapSection: React.FC<RoadmapSectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title="O Plano de Voo de $POOP"
      subtitle="Nossa jornada épica rumo à dominação... das migalhas e dos memes!"
      className="bg-blue-50"
    >
      <div className="relative">
        {/* Vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300" style={{left: 'calc(50% - 0.5rem + 4rem - 2px)', top: '3rem', bottom: '3rem'}}></div>
        
        <div className="md:max-w-4xl mx-auto">
          {roadmapPhases.map((phase, index) => (
            <RoadmapCard key={phase.id} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default RoadmapSection;

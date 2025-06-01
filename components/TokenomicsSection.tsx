
import React from 'react';
import Section from './Section';
import { TICKER } from '../constants';

interface TokenomicsSectionProps {
  id: string;
}

const TokenomicItem: React.FC<{ title: string, description: string, value: string, icon: string }> = ({ title, description, value, icon }) => (
  <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
    <div className="flex items-center mb-3">
      <span className="text-3xl mr-3">{icon}</span>
      <h3 className="text-xl font-bold text-gray-800 font-display">{title}</h3>
    </div>
    <p className="text-2xl font-semibold text-yellow-600 mb-2">{value}</p>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);


const TokenomicsSection: React.FC<TokenomicsSectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title={`${TICKER}nomics: A Economia da Revoada`}
      subtitle="Entenda como nosso precioso cocô... digo, token, funciona!"
      className="bg-gray-100"
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <TokenomicItem 
          icon=" सप्लाई" // Using a Unicode character that might look like a supply stack or use an emoji: 📦
          title="Fornecimento Total"
          value="1 Trilhão de $POOP"
          description="Suficiente para cada pombo, seus filhotes, e os filhotes dos filhotes... e talvez alguns esquilos."
        />
        <TokenomicItem 
          icon="💧" // Water drop for liquidity
          title="Ninho de Liquidez"
          value="60% Inicial"
          description="Para garantir que sempre haja migalhas (tokens) para trocar nas DEX. Trancado e seguro!"
        />
        <TokenomicItem 
          icon="📢" // Megaphone for marketing
          title="Fundo de Guerra dos Pios"
          value="20% Marketing"
          description="Para espalhar a palavra, financiar memes de alta qualidade e subornar pombos influenciadores."
        />
        <TokenomicItem 
          icon="🔥" // Fire for burn
          title="Limpeza da Sujeira (Queima)"
          value="10% Queimado"
          description="Uma parte dos tokens é enviada para o esquecimento (um buraco negro fiscal de pombos) para aumentar o valor!"
        />
         <TokenomicItem 
          icon="🧑‍💻" // Developer emoji
          title="Ração dos Construtores"
          value="10% Equipe/Desenvolvimento"
          description="Para manter nossos pombos engenheiros bem alimentados com as melhores sementes e ideias brilhantes."
        />
        <TokenomicItem 
          icon="💸" // Money with wings for fees
          title="Taxa da Revoada"
          value="Pequena Taxa por Transação"
          description="Uma taxa mínima em cada troca para alimentar os pombos desenvolvedores, financiar novas ferramentas de lixo e manter a comunidade voando alto."
        />
      </div>
      
      <div className="text-center mt-12">
        <div className="inline-block bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <h4 className="font-bold text-xl mb-2 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.491A9.027 9.027 0 0112 4.5c-2.126 0-4.078.763-5.618 2.009m0 0A9.009 9.009 0 003.382 19.5M12 4.5C13.172 4.5 14.298 4.762 15.303 5.238m-3.303-.729A9.009 9.009 0 0112 21c2.126 0 4.078-.763 5.618-2.009m0 0A9.009 9.009 0 0020.618 4.5M12 21c-1.172 0-2.298-.262-3.303-.738m3.303.729A9.009 9.009 0 0012 4.5" />
            </svg>
            Segurança do Ninho
          </h4>
          <p className="text-gray-700">
            "Tão seguro quanto um ninho no topo de um arranha-céu (bem, quase!). Nosso contrato é sólido como concreto de pombo. Auditoria em breve (assim que os pombos contadores terminarem de bicar os números e encontrarem seus óculos)."
          </p>
        </div>
      </div>
    </Section>
  );
};

export default TokenomicsSection;

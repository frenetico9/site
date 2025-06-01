
import React from 'react';
import Section from './Section';
import Button from './Button';
import { TICKER, CONTRACT_ADDRESS } from '../constants';

interface HowToBuySectionProps {
  id: string;
}

const Step: React.FC<{ number: number; title: string; description: string; icon: React.ReactNode }> = ({ number, title, description, icon }) => (
  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 text-gray-800 rounded-full flex items-center justify-center text-xl font-bold">
      {number}
    </div>
    <div>
      <div className="flex items-center mb-1">
        <span className="mr-2 text-yellow-500 text-2xl">{icon}</span>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

// Simple SVG Icons
const WalletIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
const NetworkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>;
const SwapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>;
const PoopIcon = () => <span className="text-xl">💩</span>;


const HowToBuySection: React.FC<HowToBuySectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title={`Como Comprar ${TICKER} (O Guia do Pombocalouro)`}
      subtitle="Siga estes passos simples e junte-se à revoada financeira!"
      className="bg-gray-50"
    >
      <div className="max-w-2xl mx-auto grid gap-6 md:gap-8">
        <Step 
          number={1} 
          title="Crie uma Carteira Digital" 
          description="Você precisa de uma carteira que suporte a rede Binance Smart Chain (BSC) ou Ethereum (ETH), como MetaMask ou Trust Wallet. Guarde bem sua frase secreta, nem os pombos podem recuperá-la!"
          icon={<WalletIcon />}
        />
        <Step 
          number={2} 
          title="Adicione BNB/ETH à Carteira" 
          description={`Compre BNB (para BSC) ou ETH (para Ethereum) em uma corretora e envie para sua carteira. Este será o 'alpiste' para trocar por ${TICKER}.`}
          icon={<NetworkIcon />}
        />
        <Step 
          number={3} 
          title="Conecte à DEX (PancakeSwap/UniSwap)" 
          description={`Vá para PancakeSwap (para BSC) ou UniSwap (para ETH) no navegador da sua carteira ou no seu PC. Conecte sua carteira. Cuidado com sites falsos, use apenas os links oficiais!`}
          icon={<SwapIcon />}
        />
        <Step 
          number={4} 
          title={`Troque por ${TICKER}`}
          description={`Encontre a seção de 'Swap'. Cole o endereço do contrato oficial de ${TICKER} (abaixo!). Selecione BNB/ETH como moeda de troca e ${TICKER} como a moeda que você quer receber. Defina a quantidade, aprove a transação e confirme o swap!`}
          icon={<PoopIcon />}
        />
      </div>
      <div className="mt-12 text-center">
        <h4 className="text-xl font-semibold text-gray-800 mb-2">Endereço Oficial do Contrato {TICKER}:</h4>
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-700 px-4 py-3 rounded-lg inline-block break-all shadow">
          <p className="font-mono text-sm md:text-base">{CONTRACT_ADDRESS}</p>
        </div>
        <p className="mt-2 text-xs text-gray-500">(Sempre verifique o endereço em nossos canais oficiais antes de comprar! Pombo prevenido vale por dois!)</p>
      </div>
      <div className="mt-10 text-center">
        <Button href="https://pancakeswap.finance/swap" target="_blank" rel="noopener noreferrer" variant="primary" size="lg" className="mr-4">
          Ir para PancakeSwap (BSC)
        </Button>
        <Button href="https://app.uniswap.org/#/swap" target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
          Ir para UniSwap (ETH)
        </Button>
      </div>
    </Section>
  );
};

export default HowToBuySection;

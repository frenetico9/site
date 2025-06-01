
import React from 'react';
import Section from './Section';

interface AboutSectionProps {
  id: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id }) => {
  return (
    <Section 
      id={id} 
      title="A Lenda dos Pombos Engenheiros"
      className="bg-white"
      subtitle="Descubra a verdade por trás das penas e do 'arrulho' estratégico."
    >
      <div className="max-w-3xl mx-auto text-lg text-gray-700 space-y-6">
        <p>
          Por séculos, eles foram subestimados. Vistos como meros pássaros urbanos, bicando migalhas e sujando estátuas. Mas uma verdade chocante foi revelada (por fontes anônimas, claro): os pombos não são apenas o que parecem. Eles são uma sociedade secreta de engenheiros brilhantes, usando lixo descartado para construir... bem, não sabemos exatamente o quê, mas é GRANDE!
        </p>
        <div className="flex justify-center my-8">
            <img src="https://picsum.photos/seed/pigeonblueprint/600/300" alt="Pombo com projeto" className="rounded-lg shadow-xl border-4 border-gray-300"/>
        </div>
        <p>
          Cansados de serem ignorados, os pombos iniciaram uma revolução silenciosa. Eles estão usando a 'sabedoria das ruas' e pedaços de arame, clipes de papel enferrujados e chicletes mastigados para construir um império subterrâneo (ou seria... 'sobretelhado'?). PigeonPoopCoin ({'$POOP'}) é o combustível dessa ascensão meteórica. É a moeda da astúcia urbana, da engenhosidade emplumada e do futuro onde os pombos talvez nos paguem aluguel.
        </p>
        <blockquote className="border-l-4 border-yellow-400 pl-4 py-2 my-6 italic text-gray-600">
          "Junte-se à revoada antes que seja tarde demais e você acabe limpando nosso 'sucesso' do seu para-brisa!" - Um Pombo Anônimo (provavelmente o líder).
        </blockquote>
        <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-3 font-display">Nossa Missão Emplumada</h3>
        <p>
          Capacitar a revolução dos pombos, financiar suas invenções mirabolantes e recompensar generosamente aqueles humanos perspicazes que acreditam na verdadeira engenhosidade das ruas. Com {'$POOP'}, estamos construindo um futuro onde pombos e humanos podem coexistir... com os pombos ligeiramente por cima. Literalmente.
        </p>
        <p>
          Ah, e também queremos dominar o mundo dos memes. Isso é crucial.
        </p>
      </div>
    </Section>
  );
};

export default AboutSection;

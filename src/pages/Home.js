import React from 'react';
import ModuleCard from '../components/ModuleCard';

function Home() {
  const modules = [
    {
      id: 1,
      title: 'Medidas de Tendência Central',
      description: 'Aprenda sobre média, mediana e moda.',
    },
    {
      id: 2,
      title: 'Dispersão',
      description: 'Entenda variância e desvio padrão.',
    },
    {
      id: 3,
      title: 'Probabilidade',
      description: 'Explore conceitos de probabilidade.',
    },
    {
      id: 4,
      title: 'Análise de Dados',
      description: 'Pratique com conjuntos de dados reais.',
    },
  ];

  return (
    <div className="home">
      <h2>Escrever alguma coisa aqui!</h2>
      <div className="modules">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
}

export default Home;

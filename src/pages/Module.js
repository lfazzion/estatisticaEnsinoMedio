import React from 'react';
import { useParams } from 'react-router-dom';
import Quiz from '../components/Quiz';

function Module() {
  const { id } = useParams();

  const modulesContent = {
    1: {
      title: 'Medidas de Tendência Central',
      content: 'Conteúdo sobre média, mediana e moda...',
      questions: [
        {
          questionText: 'Qual é a média dos números 2, 4 e 6?',
          answerOptions: [
            { answerText: '4', isCorrect: true },
            { answerText: '5', isCorrect: false },
            { answerText: '6', isCorrect: false },
            { answerText: '3', isCorrect: false },
          ],
        },
        // add mais perguntas
      ],
    },
    2: {
      title: 'Dispersão',
      content: 'Conteúdo sobre variância e desvio padrão...',
      questions: [
        {
          questionText: 'O que o desvio padrão indica em um conjunto de dados?',
          answerOptions: [
            { answerText: 'A média dos valores', isCorrect: false },
            { answerText: 'A dispersão dos dados em relação à média', isCorrect: true },
            { answerText: 'O valor máximo', isCorrect: false },
            { answerText: 'A frequência dos dados', isCorrect: false },
          ],
        },
        // mais perguntas
      ],
    },
    // add outros módulos...
  };

  const module = modulesContent[id];

  if (!module) {
    return <h2>Módulo não encontrado</h2>;
  }

  return (
    <div className="module">
      <h2>{module.title}</h2>
      <p>{module.content}</p>
      <h3>Teste seus conhecimentos</h3>
      <Quiz questions={module.questions} />
    </div>
  );
}

export default Module;

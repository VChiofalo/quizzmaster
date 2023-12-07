import  { useState, useEffect } from 'react';

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Autres états et logiques nécessaires...

  useEffect(() => {
    // Appeler l'API pour charger les questions
  }, []);

  function handleNextQuestion() {
    // Logique pour passer à la question suivante
  }

  return (
    <div>
      {/* Afficher la question actuelle */}
      <p>{questions[currentQuestionIndex]?.question}</p>
      <button onClick={handleNextQuestion}>Valider</button>
    </div>
  );
}

export default QuizPage;

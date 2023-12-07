import  { useState, useEffect } from 'react';
import './style.css';

function Question() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean')
      .then(response => response.json())
      .then(data => {
        setQuestions(data.results);
      })
      .catch(error => console.error('Erreur lors de la récupération des questions', error));
  }, []);

  const handleAnswerChange = (value) => {
    setSelectedAnswer(value);
  };

  function handleNextQuestion() {
    setCurrentQuestionIndex(prevIndex => {
      // Vérifier si c'est la dernière question
      if (prevIndex === questions.length - 1) {
        // Peut-être rediriger vers une page de résultats ou afficher un message
        console.log('Quiz terminé');
        return prevIndex;
      }
      return prevIndex + 1;
    });
  }


  return (
    <div className="quiz-container">
      <h1>Quizmaster</h1>
      <p>{questions.question}</p>
      <div className="options">
        <label>
          <input
            type="radio"
            name="answer"
            value="true"
            checked={selectedAnswer === 'true'}
            onChange={() => handleAnswerChange('true')}
          />
          Vrai
        </label>
        <label>
          <input
            type="radio"
            name="answer"
            value="false"
            checked={selectedAnswer === 'false'}
            onChange={() => handleAnswerChange('false')}
          />
          Faux
        </label>
      </div>
      <button onClick={handleNextQuestion}>Valider</button>
    </div>
  );
}

export default Question;

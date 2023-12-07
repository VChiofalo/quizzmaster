import  { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Autres états et logiques nécessaires...

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean')
      .then(response => response.json())
      .then(data => {
        setQuestions(data.results);
      })
      .catch(error => console.error('Erreur lors de la récupération des questions', error));
  }, []);

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
    <div>
      {questions.length > 0 ? (
        <div>
          <p dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex]?.question }}></p>
          <button onClick={handleNextQuestion}>Valider</button>
        </div>
      ) : (
        <p>Chargement des questions...</p>
      )}
    </div>
  );
      } 

export default QuizPage;

import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  // Autres états et logiques nécessaires...

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean')
      .then(response => response.json())
      .then(data => {
        setQuestions(data.results);
        // console.log(data.results);
      })
      .catch(error => console.error('Erreur lors de la récupération des questions', error));
  }, []);

  function handleNextQuestion() {
    setCurrentQuestionIndex(prevIndex => {
      // Vérifier si c'est la dernière question
      if (prevIndex === questions.length - 1) {
        navigate('/result', { state: { score } }); // Rediriger vers ResultPage avec le score
        return prevIndex;
      }
      return prevIndex + 1;
    });
  }
  function handleAnswer(isCorrect) { // Corriger 'isCoreect' en 'isCorrect'
    if (questions[currentQuestionIndex].correct_answer === (isCorrect ? "True" : "False")) {
      setScore(prevScore => prevScore + 1);
    }
    handleNextQuestion();
  }
  
  return (
    <div>
      {questions && questions.length> 0 ? (
    <div>
      <p dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex]?.question }}></p>
      <button onClick={() => handleAnswer(true)}>Vrai</button>
      <button onClick={() => handleAnswer(false)}>Faux</button>
    </div>
      ) : (
        <p>Chargement des questions...</p>
      )}
    </div>
  );
      } 

export default QuizPage;

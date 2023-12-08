import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuizPage.module.css';


function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();

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
        navigate('/result', { state: { score } }); // Rediriger vers ResultPage avec le score
        return prevIndex;
      }
      return prevIndex + 1;
    });
  }
  function handleAnswer(answer) {
    if (questions[currentQuestionIndex].correct_answer === (answer ? "True" : "False")) {
      setScore(prevScore => prevScore + 1);
    }
    handleNextQuestion();
  }
  
  function validateAnswer() {
    if (selectedAnswer === null) {
      alert("Veuillez sélectionner une réponse !");
    } else {
      console.log(selectedAnswer);
      handleAnswer(selectedAnswer);
      setSelectedAnswer(null); // Réinitialiser la réponse sélectionnée
    }
  }
  
  
  return (
    <div className={styles.quizContainer}>
      <h1>Quizmaster</h1>
       {questions && questions.length> 0 ? (
    <div>
      <p dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex]?.question }}></p>
      <button onClick={() => setSelectedAnswer(true)}>Vrai</button>
      <button onClick={() => setSelectedAnswer(false)}>Faux</button>
      <button onClick={validateAnswer}>Valider</button>

    </div>
      ) : (
        <p>Chargement des questions...</p>
      )}
    </div>
  );
      } 

export default QuizPage;

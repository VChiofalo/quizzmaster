import  { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import './style.css';

function Question() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean');
      const data = await response.json();
      setQuestions(data.results);
    }
    fetchData()
  }, []);

  function handleNextQuestion() {
    setCurrentQuestionIndex(prevIndex => {
      // Vérifier si c'est la dernière question
      if (prevIndex === questions.length - 1) {
        // Peut-être rediriger vers une page de résultats ou afficher un message
        console.log('Quizz terminé');
        console.log({score});
        navigate('/result', {state: {score}});
        return prevIndex;
      }
      console.log(selectedAnswer);
      return prevIndex + 1;
    });
  }

  function handleAnswer(answer) {
    if (questions[currentQuestionIndex].correct_answer === (answer ? 'True' : 'False')) {
      setScore(prevScore => prevScore +1);
    }
    handleNextQuestion();
  }

  function validateAnswer(){
    if (selectedAnswer == null) {
      alert('Veillez sélectionner une réponse !')
    } else{
      handleAnswer(selectedAnswer);
      setSelectedAnswer(null)
    }
  }

  return (
    <div className="quiz-container">
      <h1>Quizmaster</h1>
      {questions && questions.length > 1 && questions.map((currentQuestion, index) => (
        // Utilisation de la clé unique pour chaque élément
        <div key={index} style={{ display: index === currentQuestionIndex ? 'block' : 'none' }}>
          <p dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></p>
          {console.log(currentQuestion.question)}
          <div className='btnTrueFalse'>
            <button style={{backgroundColor: selectedAnswer === "True" ? "orange" : ""}} id='btnTrue' onClick={() =>{setSelectedAnswer("True")}}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Vrai
            </button>
            <button style={{backgroundColor: selectedAnswer === "False" ? "orange" : ""}}  id='btnFalse' onClick={() =>{setSelectedAnswer("False")}}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Faux
            </button>
          </div>
        </div>
      ))}
      <button onClick={validateAnswer}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Valider
      </button>
    </div>
  );
}

export default Question;


import  { useState, useEffect } from 'react';
import './style.css';

function Question() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


  useEffect(() => {
    // fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data.results[0].question)
    //     setQuestions(data.results);
    //   })
    //   .catch(error => console.error('Erreur lors de la récupération des questions', error));

    const fetchData = async () => {
      const response = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean');
      const data = await response.json()
      console.log(data)
      setQuestions(data.results)
    }

    fetchData()

    
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
      {questions && questions.length > 1 && questions.map((quest, index) => (
        // Utilisation de la clé unique pour chaque élément
        <div key={index} style={{ display: index === currentQuestionIndex ? 'block' : 'none' }}>
          <p dangerouslySetInnerHTML={{ __html: quest.question }}></p>
          {console.log(quest.question)}
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
        </div>
      ))}
      <button onClick={handleNextQuestion}>Valider</button>
    </div>
  );
}

export default Question;


import  { useState } from 'react';
import './style.css';

function Question() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (value) => {
    setSelectedAnswer(value);
  };

  return (
    <div className="quiz-container">
      <h1>Question   ?</h1>
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
      <button >Soumettre</button>
    </div>
  );
}

export default Question;

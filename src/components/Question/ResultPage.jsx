// ResultPage.jsx

function ResultPage({ results }) {
  return (
    <div className="result-container">
      <h1>Résultats du Quiz</h1>
      <ul>
        {results.map((result, index) => (
          <li key={index}>
            Question {index + 1}: {result.correct ? 'Correcte' : 'Incorrecte'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultPage;

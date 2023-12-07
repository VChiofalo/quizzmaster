// import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Bienvenue sur notre quiz!</h1>
      <Link to="/quiz">Commencer le Quiz</Link>
    </div>
  );
}

export default HomePage;

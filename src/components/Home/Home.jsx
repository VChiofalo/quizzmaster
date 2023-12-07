//import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome Quizz Master</h1>
      <p>
        Bienvenue sur notre quizz réalisé en React avec Vincent, Fred, Erwan, et Cisco.
        Découvrez des questions passionnantes et testez vos connaissances !
      </p>
      <div className="start-button-container">
        {/* Utilisation de Link pour créer un lien vers la première question du quizz */}
        <Link to="/question/1">
          <button>Commencer le quizz</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

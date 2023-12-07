//import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useEffect, useRef } from 'react';
const Home = () => {

    const colorText = useRef(null)
  useEffect(() => {
    // Code JavaScript pour l'effet de couleur
    
    colorText.current.innerHTML = colorText.current.innerText.split('')
      .map(
        (letters, i) =>
          `<span style="transition-delay:${i * 40}ms;filter:hue-rotate(${i * 30}deg)">${letters}</span>`
      )
      .join('');
  }, []); // Assurez-vous d'ajouter les dépendances vides pour exécuter le code une seule fois lors du montage initial

  return (
    <div className={styles.container}>
      <h1 className={styles.text} ref={colorText}>
        <span  className={styles.text}>Welcome</span> Quizz Master
      </h1>
      <p>
        Bienvenue sur notre quizz réalisé en React avec Vincent, Fred, Erwan, et Cisco.
        Découvrez des questions passionnantes et testez vos connaissances !
      </p>
      {/* Ajoutez la balise img avec le chemin de votre image */}
      <img src='/public/quizMaster.png' alt="Description de l'image" className={styles.yourImageClass} />
      <div className={styles.startButtonContainer}>
        <Link to="/question/1">
          <button>Commencer le quizz</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

//import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useEffect, useRef } from 'react';
const Home = () => {
  const colorText = useRef(null);

  useEffect(() => {
    // Code JavaScript pour l'effet de couleur
    colorText.current.innerHTML = colorText.current.innerText
      .split('')
      .map(
        (letters, i) =>
          `<span style="transition-delay:${i * 40}ms;filter:hue-rotate(${i * 30}deg)">${letters}</span>`
      )
      .join('');
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.text} ref={colorText}>
        <span className={styles.text}>Welcome</span> Quiz Master!!!
      </h1>
      <p className={styles.p}>
        Bienvenue sur notre quizz réalisé en React avec un temps très limité et avec la collaboration Vincent, Fred, Erwan, et Cisco29.
        Découvrez des questions passionnantes et testez vos connaissances !
      </p>
      <img
        src='/quizMaster1.png'
        alt="Description de l'image"
        className={`${styles.yourImageClass} ${styles.leftShift}`}
      />
      <div className={styles.startButtonContainer}>
        <Link to="/question">
          {/* Ajoutez la classe neonButton au bouton */}
          <button className={`${styles.neonButton}`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Commencez le quiz
          </button>
        </Link>
     {/* Nouveau bouton "À propos de nous" */}
     <Link to="/about-us">
  <button className={`${styles.neonButton} ${styles.aboutUsButton}`}>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    À propos de nous
  </button>
</Link>
      </div>
    </div>
  );
};

export default Home;

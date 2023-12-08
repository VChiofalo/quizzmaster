import {Link, useLocation } from 'react-router-dom';
import styles from './ResultPage.module.css'; 

function getMessageForScore(score) {
  if (score === 10) {
    return "Parfait!";
  } else if (score >= 7) {
    return "Très bon!";
  } else if (score >= 4) {
    return "Pas mal!";
  } else if (score >= 1) {
    return "Retente!";
  } else {
    return "Wesh...";
  }
}

function ResultPage() {
  const location = useLocation();
  const { score } = location.state || { score: 0 }; 
  const message = getMessageForScore(score);

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Votre score: {score} / 10</h1>
      <p className={styles.message}>{message}</p>

      <div className={styles.startButtonContainer}>
        {/* Bouton pour recommencer le quiz */}
        <Link to="/quiz">
          <button className={styles.neonButton}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Recommencer le quiz
          </button>
        </Link>

        {/* Bouton pour retourner à la page d'accueil */}
        <Link to="/">
          <button className={styles.neonButton}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Retourner à l&apos;accueil
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ResultPage;
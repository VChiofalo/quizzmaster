import { useLocation } from 'react-router-dom';
import styles from './ResultPage.module.css';

function getMessageForScore(score) {
  if (score === 10) {
    return "Parfait!";
  } else if (score >= 7) {
    return "Très bien!";
  } else if (score >= 4) {
    return "Pas mal!";
  } else if (score >= 1) {
    return "Mauvais!";
  } else {
    return "Nul!";
  }
}

function ResultPage() {
  const location = useLocation();
  const { score } = location.state || { score: 0 }; // Si aucun score n'est passé, utilisez 0
  const message = getMessageForScore(score);

  return (
    <div>
      <h1>Votre score: {score} / 10</h1>
      <p className={styles.message}>{message}</p> {/* Ajout de cette ligne pour afficher le message */}
      {/* Autres informations si nécessaires */}
    </div>
  );
}

export default ResultPage;

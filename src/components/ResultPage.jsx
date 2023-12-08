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
    <div>
      <h1>Votre score: {score} / 10</h1>
      <p className={styles.message}>{message}</p>
     

 
      <div className={styles.startButtonContainer}>
        <Link to="/">
          <button className={styles.neonButton}>Recommencer le quiz</button>
        </Link>
      </div>
    </div>
  );
}
export default ResultPage;

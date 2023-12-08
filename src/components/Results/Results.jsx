import { Link, useLocation } from 'react-router-dom';
import styles from "./Results.module.css";

function getMessageForScore(score) {
    if (score == 10) {
        return 'Parfait !';
    } else if (score >= 7) {
        return 'Très bon !';
    } else if (score >= 4) {
        return 'Pas mal !'
    } else {
        return 'Retente !'
    }
}

const Result = ()=>{
    const location = useLocation();
    const {score} = location.state || {score: 0};
    console.log(location.state);
    const message = getMessageForScore(score);
    return(
        <div className={styles.container}>
            <h1 className={styles.h1}>Resultats</h1>
            <p className={styles.p}>Votre score : {score} / 10</p>
            <p className={styles.p}>{message}</p>
            <div className={styles.startButtonContainer}>
                <Link to="/question">
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Recommencer le quizz
                    </button>
                </Link>
                <Link to="/">
                    <button>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Retourner à l'accueil
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Result
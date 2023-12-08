import { Link } from 'react-router-dom';
import styles from "./Results.module.css";

const Result = ()=>{
    return(
        <div className={styles.container}>
            <h1>Resultats</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas cupiditate vel quia id nostrum deserunt hic unde velit porro mollitia dignissimos, ratione similique nobis rerum quae, tenetur sequi error temporibus.</p>
            <div className={styles.startButtonContainer}>
                <Link to="/question/1">
                    <button>Recommencer le quizz</button>
                </Link>
            </div>
        </div>
    )
}

export default Result
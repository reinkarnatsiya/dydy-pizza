import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.homeContainer}>
            <div className={styles.hero}>
                <h1>ДУДУ Пицца</h1>
                <p>Лучше, чем в Додо!</p>
            </div>

            <div className={styles.features}>
                <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>🍕</div>
                    <div className={styles.featureTitle}>Свежее, чем в Додо</div>
                    <div className={styles.featureText}>У них тесто вчерашнее, у нас — сегодняшнее</div>
                </div>
                <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>⚡</div>
                    <div className={styles.featureTitle}>Быстрее их курьера</div>
                    <div className={styles.featureText}>Пока они едут — мы уже съели</div>
                </div>
                <div className={styles.featureCard}>
                    <div className={styles.featureIcon}>😋</div>
                    <div className={styles.featureTitle}>Додо и рядом не стоял</div>
                    <div className={styles.featureText}>Их шеф-повар уволился к нам</div>
                </div>
            </div>

            <div className={styles.cta}>
                <h2>Мы (не) говорим, что Додо плохая...</h2>
                <p>Но когда попробуешь нашу — поймёшь, насколько</p>
                <button onClick={() => navigate('/menu')}>Сравнить и пожалеть о Додо</button>
            </div>
        </div>
    );
};

export default Home;
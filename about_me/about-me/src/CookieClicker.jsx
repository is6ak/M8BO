import styles from './CookieClicker.module.css'
import cookieImg from './assets/cookie.png'
import { useState } from 'react';

export function CookieClicker() {
    const [score, setScore] = useState(0);
    const [grandmas, setGrandmas] = useState(0);

    const grandmaPrice = Math.floor(20 * 1.15 ** grandmas);

    function cookieClick() {
        setScore(score + (1 + grandmas));
    }

    function buyGrandma() {
        if (score >= grandmaPrice) {
            setGrandmas(grandmas + 1);
            setScore(score - grandmaPrice);
        }
    }

    return (
        <section className={styles.cookieSection}>
            <h1 className={styles.cookieSection__title}>Cookie Clicker!</h1>

            <button className={styles.cookie} onClick={cookieClick}>
                <img className={styles.cookieImg} src={cookieImg} alt="" />
            </button>

            <div className={styles.score}>{score} Cookies</div>

            <div className={styles.grandmas}>
                <label>Grandmas: {grandmas}</label>
                <button className={styles.grandmasTxt} onClick={buyGrandma}>
                    BUY ({grandmaPrice})
                </button>
            </div>
        </section>
    )
}
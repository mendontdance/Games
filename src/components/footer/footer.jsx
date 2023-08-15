import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './footer.module.css';
import telegram from '../../images/telegram.png';
import react from '../../images/logo.png';
import github from '../../images/github.png'

export function Footer() {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contact}>
                    <p className={styles.text}>Если у вас есть предложения, то пишите в телеграмм → <span className={styles.nickname}>@DK2113</span></p>
                    <div className={styles.telegram}>
                        <img src={telegram} alt="" className={styles.telegram__image} />
                    </div>
                    <div className={styles.telegram}>
                        <img src={github} alt="" className={styles.telegram__image} />
                    </div>
                </div>
                <div className={styles.react}>
                    <img src={react} alt="" className={styles.react__image} />
                </div>
            </div>
        </footer>
    );
}
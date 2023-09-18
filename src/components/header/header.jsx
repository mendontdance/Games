import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
import background from '../../images/header2.jpg'

export function Header() {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>Проект-Игротека!</h1>
            <p className={styles.subtitle}>Поиграем?</p>
            <div className={styles.background}>
                <img src={background} alt="" className={styles.background__image}/>
            </div>
        </header>
    )
}
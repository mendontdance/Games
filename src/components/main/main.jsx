import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './main.module.css';
import ticTacToe from '../../images/tic-tac-toe.jpg';
import { Link } from "react-router-dom";

export function Main() {

    const onScroll = (e) => {
        e.preventDefault();
    }

    return (
        <main className={styles.main}>
            <section className={styles.content}>
                <p className={styles.description}>Новинки</p>
                <div className={styles.games} onScroll={onScroll}>
                    <Link to={'/tic-tac-toe'}>
                        <div className={`${styles.game__image}`} id="game-1">
                            <img src={ticTacToe} alt="" className={styles.image} />
                            <div className={`${styles.text}`}>
                                <p className={styles.title}>Крестики-Нолики</p>
                                <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus iste rerum non dicta similique! Porro non accusantium voluptatem sequi beatae sit enim blanditiis. Odio aspernatur consequuntur possimus enim omnis!</p>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className={`${styles.game__image}`} id="game-1">
                            <img src={ticTacToe} alt="" className={styles.image} />
                            <div className={`${styles.text}`}>
                                <p className={styles.title}>Крестики-Нолики</p>
                                <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus iste rerum non dicta similique! Porro non accusantium voluptatem sequi beatae sit enim blanditiis. Odio aspernatur consequuntur possimus enim omnis!</p>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className={`${styles.game__image}`} id="game-1">
                            <img src={ticTacToe} alt="" className={styles.image} />
                            <div className={`${styles.text}`}>
                                <p className={styles.title}>Крестики-Нолики</p>
                                <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus iste rerum non dicta similique! Porro non accusantium voluptatem sequi beatae sit enim blanditiis. Odio aspernatur consequuntur possimus enim omnis!</p>
                            </div>
                        </div>
                    </Link>
                    <Link>
                        <div className={`${styles.game__image}`} id="game-1">
                            <img src={ticTacToe} alt="" className={styles.image} />
                            <div className={`${styles.text}`}>
                                <p className={styles.title}>Крестики-Нолики</p>
                                <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, possimus iste rerum non dicta similique! Porro non accusantium voluptatem sequi beatae sit enim blanditiis. Odio aspernatur consequuntur possimus enim omnis!</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.points}>
                    <a href="#game-1" className={styles.point}>1</a>
                    <a href="#game-2" className={styles.point}>2</a>
                    <a href="#game-3" className={styles.point}>3</a>
                    <a href="#game-4" className={styles.point}>4</a>
                </div>
            </section>
        </main>
    )
}
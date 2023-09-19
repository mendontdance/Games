import styles from './tictactoe-botstartmenu.module.css';
import { useSelector } from 'react-redux';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BACK_TO_INITIAL_BOT_GAME, GAME_IS_PLAYING, RESTART_GAME } from '../../../services/actions/ticTacToeAction';
import { useNavigate } from 'react-router-dom';

export function TicTacToeBotStartMenu({ onClick }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector(store => store.ticTacToe);
    const turnFirstPlayer = state.player === 0 ? styles.turn : styles.loser;
    const turnbotPlayer = state.player === 1 ? styles.turn : styles.loser;
    const winnerFirstPlayer = state.gameOver && state.player !== 0 ? styles.winner : false
    const winnerBotPlayer = state.gameOver && state.player !== 1 ? styles.winner : false

    const handleClickBackToMenu = () => {
        navigate('/tic-tac-toe/guest-mode/bot')
        dispatch({
            type: BACK_TO_INITIAL_BOT_GAME
        })
    }

    return (
        <div className={styles.game__start}>
            <div className={styles.section}>
                <div className={styles.text__container}>
                    <p className={`${styles.title} ${styles.td} ${styles.first__row}`}>
                        Игрок
                    </p>
                    <p className={`${styles.title} ${styles.td}`}>
                        Количество побед
                    </p>
                </div>
                <div className={`${styles.text__container} ${winnerFirstPlayer} ${turnFirstPlayer}`}>
                    <p className={`${styles.gamer} ${styles.td} ${styles.first__row}`}>
                        {state.firstPlayer.status}
                    </p>
                    <p className={`${styles.td} ${styles.count}`}>
                        {state.firstPlayer.value}
                    </p>
                </div>
                <div className={`${styles.text__container} ${winnerBotPlayer} ${turnbotPlayer}`}>
                    <p className={`${styles.gamer} ${styles.td} ${styles.first__row}`}>
                        {state.botPlayer.status}
                    </p>
                    <p className={`${styles.td} ${styles.count}`}>
                        {state.botPlayer.value}
                    </p>
                </div>
            </div>
            <button className={`${styles.button}`} type="button" onClick={onClick}>Рестарт</button>
            <button className={`${styles.button}`} type="button" onClick={handleClickBackToMenu}>Вернуться в меню игры</button>
        </div>
    )
}
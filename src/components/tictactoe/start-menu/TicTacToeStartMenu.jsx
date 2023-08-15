import styles from './tictactoe-startmenu.module.css';
import { useSelector } from 'react-redux';
import React from 'react';
import { useDispatch } from 'react-redux';
import { BACK_TO_MENU, INITIAL_STATE, RESTART_GAME } from '../../../services/actions/ticTacToeAction';
import { useNavigate } from 'react-router-dom';

export function TicTacToeStartMenu() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector(store => store.ticTacToe);
    const turnFirstPlayer = state.player === 0 ? styles.turn : null;
    const turnSecondPlayer = state.player === 1 ? styles.turn : null;
    const winnerFirstPlayer = state.gameOver & state.player !== 0 ? styles.winner : false
    const winnerSecondPlayer = state.gameOver & state.player !== 1 ? styles.winner : false
    const loseFirstPlayer = state.gameOver & state.player === 0 ? styles.loser : false
    const loseSecondPlayer = state.gameOver & state.player === 1 ? styles.loser : false

    const onClick = () => {
        dispatch({
            type: RESTART_GAME,
            position: Array(9).fill(null),
            gameOver: false,
            player: Math.floor(Math.random() * 2)
        })
    }

    const handleClickBackToMenu = () => {
        navigate('/tic-tac-toe/guest-mode/hotseat')
        dispatch({
            type:INITIAL_STATE
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
                <div className={`${styles.text__container} ${loseFirstPlayer || winnerFirstPlayer || turnFirstPlayer}`}>
                    <p className={`${styles.gamer} ${styles.td} ${styles.first__row}`}>
                        {state.firstPlayer.status}
                    </p>
                    <p className={`${styles.td} ${styles.count}`}>
                        {state.firstPlayer.value}
                    </p>
                </div>
                <div className={`${styles.text__container} ${loseSecondPlayer || winnerSecondPlayer || turnSecondPlayer}`}>
                    <p className={`${styles.gamer} ${styles.td} ${styles.first__row}`}>
                        {state.secondPlayer.status}
                    </p>
                    <p className={`${styles.td} ${styles.count}`}>
                        {state.secondPlayer.value}
                    </p>
                </div>
            </div>
            <button className={`${styles.button}`} type="button" onClick={onClick}>Рестарт</button>
            <button className={`${styles.button}`} type="button" onClick={handleClickBackToMenu}>Вернуться в меню игры</button>
        </div>
    )
}
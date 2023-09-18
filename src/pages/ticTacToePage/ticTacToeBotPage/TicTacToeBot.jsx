import styles from './tictactoe-bot.module.css';
import { TicTacToeBotMenu } from '../../../components/tictactoe/bot-menu/TicTacToeBotMenu';
import { TicTacToeLeaderboard } from '../../../components/tictactoe/leaderboard/TicTacToeLeaderboard';
import { useDispatch } from 'react-redux';
import React from 'react';
import { DRAW, GAME_IS_PLAYING, INITIAL_STATE } from '../../../services/actions/ticTacToeAction';

export function TicTacToeBotPage () {

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch({
            type: GAME_IS_PLAYING,
            gamePlaying: true
        })
        dispatch({
            type: DRAW,
            draw: false
        })
        dispatch({
            type: INITIAL_STATE
        })
    },[dispatch])

    return (
        <>
            <main className={styles.main}>
                <section className={styles.section}>
                    <p className={styles.title}>Крестики-Нолики</p>
                    <div className={styles.container}>
                        <TicTacToeBotMenu />
                        <TicTacToeLeaderboard />
                    </div>
                    {/* <Modal /> */}
                </section>
            </main>
        </>
    )
}
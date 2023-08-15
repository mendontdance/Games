import { Menu } from "../../../components/menu/menu";
import styles from './tictactoeguest.module.css';
import React from 'react';
import { TicTacToeLeaderboard } from "../../../components/tictactoe/leaderboard/TicTacToeLeaderboard";
import { TicTacToeTypeMenu } from "../../../components/tictactoe/type-menu/TicTacToeTypeMenu";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export function TicTacToeGuestPage() {

    const store = useSelector(store => store.ticTacToe)
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const chooseHotseatGame = () => {
        navigate('/tic-tac-toe/guest-mode/hotseat')
    }

    const chooseBotGame = () => {
        navigate('/tic-tac-toe/guest-mode/bot')
    }

    return (
        <>
            <Menu />
            <main className={styles.main}>
                <section className={styles.section}>
                    <p className={styles.title}>Крестики-Нолики</p>
                    <div className={styles.container}>
                        <TicTacToeTypeMenu chooseHotseatGame={chooseHotseatGame} chooseBotGame={chooseBotGame}/>
                        <TicTacToeLeaderboard />
                    </div>
                    {/* <Modal /> */}
                </section>
            </main>
        </>
    );
}

    // const randomType = ['\u0058', '\u004F'];

    // const a = (callback) => {
    //     setFirstPlayer({
    //         ...firstPlayer,
    //         type: randomType[Math.floor(Math.random() * randomType.length)]
    //     })
    //     callback();
    // }

    // const b = () => {
    //     if (firstPlayer.type === '\u0058') {
    //         setSecondPlayer({
    //             ...secondPlayer,
    //             type: '\u004F'
    //         })
    //     } else if (firstPlayer.type === '\u004F') {
    //         setSecondPlayer({
    //             ...secondPlayer,
    //             type: '\u0058'
    //         })
    //     }
    // }
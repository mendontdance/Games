import styles from './tictactoe-game.module.css'
import { Menu } from '../../../components/menu/menu';
import { TicTacToeInputMenu } from '../../../components/tictactoe/input-menu/TicTacToeInputMenu';
import { TicTacToeStartMenu } from '../../../components/tictactoe/start-menu/TicTacToeStartMenu';
import { TicTacToeLeaderboard } from '../../../components/tictactoe/leaderboard/TicTacToeLeaderboard';
import { TicTacToeTable } from '../../../components/tictactoe/table/TicTacToeTable';
import { useDispatch, useSelector } from "react-redux";
import { GAME_OVER, WIN_FIRST_PLAYER, WIN_SECOND_PLAYER, SET_FIRST_PLAYER, SET_SECOND_PLAYER, DRAW } from "../../../services/actions/ticTacToeAction";
import React from 'react';

export function TicTacToeGamePage() {

    const dispatch = useDispatch();
    const store = useSelector(store => store.ticTacToe)
    const turn = store.player === 0 ? store.firstPlayer.status : store.secondPlayer.status;
    const winner = store.player !== 0 ? store.firstPlayer.status : store.secondPlayer.status;

    const chooseTitle =
            store.gameOver ?
                <p className={styles.title}>{`${winner} - победитель!`}</p> :
                <p className={styles.title}>{`${turn} ходит`}</p>


    const showGameOver = () => {
        dispatch({
            type: GAME_OVER,
            gameOver: true
        });
    }

    const wonPlayer = (qwer, player) => {
        for (let i = 0; i < 8; i++) {
            if (store.position[store.arr[i][0]] === qwer && store.position[store.arr[i][1]] === qwer && store.position[store.arr[i][2]] === qwer) {
                showGameOver();
                if (player === store.firstPlayer.status) {
                    dispatch({
                        type: WIN_FIRST_PLAYER,
                        value: store.firstPlayer.value += 1
                    })
                } else if (player === store.secondPlayer.status) {
                    dispatch({
                        type: WIN_SECOND_PLAYER,
                        value: store.secondPlayer.value += 1
                    })
                }
                return true;
            }
        }
        return false;
    }

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.textContent !== '' || store.gameOver) return;

        const id = e.target.id
        if (store.player === store.firstPlayer.id) {
            dispatch({
                type: SET_FIRST_PLAYER,
                player: store.secondPlayer.id,
                number: Number(id.slice(3)) - 1
            })
        } else if (store.player === store.secondPlayer.id) {
            dispatch({
                type: SET_SECOND_PLAYER,
                player: store.firstPlayer.id,
                number: Number(id.slice(3)) - 1
            })
        }

        if (!wonPlayer(store.firstPlayer.type, store.firstPlayer.status) && !wonPlayer(store.secondPlayer.type, store.secondPlayer.status)) {
            if (store.position.every(elem => elem !== null)) {
                showGameOver();
                dispatch({
                    type: DRAW,
                    draw: true
                })
            }
        }
    }

    return (
        <>
            <main className={styles.main}>
                <section className={styles.section}>
                    {(store.draw && <p className={styles.title}>{`Ничья`}</p>) || chooseTitle}
                    <div className={styles.container}>
                        <TicTacToeStartMenu />
                        <TicTacToeTable handleClick={handleClick} data={store.position} />
                        <TicTacToeLeaderboard />
                    </div>
                    {/* <Modal /> */}
                </section>
            </main>
        </>
    )
}
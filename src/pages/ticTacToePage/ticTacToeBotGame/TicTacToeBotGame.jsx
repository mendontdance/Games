import styles from './tictactoe-botgame.module.css';
import React from 'react';
import { Menu } from '../../../components/menu/menu';
import { TicTacToeBotStartMenu } from '../../../components/tictactoe/bot-start-menu/TicTacToeBotStartMenu';
import { TicTacToeLeaderboard } from '../../../components/tictactoe/leaderboard/TicTacToeLeaderboard';
import { TicTacToeTable } from '../../../components/tictactoe/table/TicTacToeTable';
import { useDispatch, useSelector } from "react-redux";
import { GAME_OVER, WIN_FIRST_PLAYER, SET_FIRST_PLAYER, SET_BOT_PLAYER, WIN_BOT_PLAYER } from "../../../services/actions/ticTacToeAction";


export function TicTacToeBotGamePage() {

    const dispatch = useDispatch();
    const store = useSelector(store => store.ticTacToe)
    const turn = store.player === 0 ? store.firstPlayer.status : store.botPlayer.status;
    const winner = store.player !== 0 ? store.firstPlayer.status : store.botPlayer.status;

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
                } else if (player === store.botPlayer.status) {
                    dispatch({
                        type: WIN_BOT_PLAYER,
                        value: store.botPlayer.value += 1
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
                player: store.botPlayer.id,
                number: Number(id.slice(3)) - 1
            })
        }
        if (!wonPlayer(store.firstPlayer.type, store.firstPlayer.status) && !wonPlayer(store.botPlayer.type, store.botPlayer.status)) {
            if (store.position.every(elem => elem !== null)) {
                showGameOver('draw');
            }
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            if (store.player === store.botPlayer.id && !store.gameOver) {
                dispatch({
                    type: SET_BOT_PLAYER,
                    player: store.firstPlayer.id,
                    number: store.position.map((elem, index) => {
                        if (elem === null) {
                            return index
                        }
                    }).filter(elem => elem !== undefined)
                })
            }
        }, 100)
        if (!wonPlayer(store.firstPlayer.type, store.firstPlayer.status) && !wonPlayer(store.botPlayer.type, store.botPlayer.status)) {
            if (store.position.every(elem => elem !== null)) {
                showGameOver('draw');
            }
        }
    }, [store.player, store.gameOver])

    return (
        <>
            <Menu />
            <main className={styles.main}>
                <section className={styles.section}>
                    {chooseTitle}
                    <div className={styles.container}>
                        <TicTacToeBotStartMenu />
                        <TicTacToeTable handleClick={handleClick} data={store.position} />
                        <TicTacToeLeaderboard />
                    </div>
                    {/* <Modal /> */}
                </section>
            </main>
        </>
    )
}
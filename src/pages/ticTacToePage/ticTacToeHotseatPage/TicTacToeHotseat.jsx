import styles from './tictactoe-hotseat.module.css'
import { Menu } from '../../../components/menu/menu'
import { TicTacToeTypeMenu } from '../../../components/tictactoe/type-menu/TicTacToeTypeMenu'
import { TicTacToeLeaderboard } from '../../../components/tictactoe/leaderboard/TicTacToeLeaderboard'
import { TicTacToeInputMenu } from '../../../components/tictactoe/input-menu/TicTacToeInputMenu'
import { INITIAL_STATE, FIRST_PLAYER_STATUS, SECOND_PLAYER_STATUS, REDIRECT_TO_INPUT_MENU } from '../../../services/actions/ticTacToeAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export function TicTacToeHotseatPage() {

    const dispatch = useDispatch();
    const store = useSelector(store => store.ticTacToe);
    const navigate = useNavigate();
    const check = (store.firstPlayer.status != false && store.secondPlayer.status != false);

    const chooseAnotherType = () => {
        navigate('/tic-tac-toe/guest-mode')
        dispatch({
            type: INITIAL_STATE
        })
    }

    const onInput_2 = (e) => {
        dispatch({
            type: SECOND_PLAYER_STATUS,
            status: e.target.value
        })
    }

    const onInput_1 = (e) => {
        dispatch({
            type: FIRST_PLAYER_STATUS,
            status: e.target.value
        })
    }

    const onClick = () => {
        dispatch({
            type: REDIRECT_TO_INPUT_MENU,
            redirect: true
        })
        if(check) {
            navigate('/tic-tac-toe/guest-mode/hotseat/game')
        }
    }

    return (
        <>
            <main className={styles.main}>
                <section className={styles.section}>
                    <p className={styles.title}>Крестики-Нолики</p>
                    <div className={styles.container}>
                        <TicTacToeInputMenu check={check} onInput_1={onInput_1} onInput_2={onInput_2} onClick={onClick} chooseAnotherType={chooseAnotherType} />
                        <TicTacToeLeaderboard />
                    </div>
                </section>
            </main>
        </>
    )
}
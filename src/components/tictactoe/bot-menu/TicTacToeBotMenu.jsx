import styles from './tictactoe-botmenu.module.css'
import { INITIAL_STATE, GAME_START, FIRST_PLAYER_STATUS, REDIRECT_TO_INPUT_MENU, SET_BOT_NAME } from '../../../services/actions/ticTacToeAction'
import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import { useNavigate } from 'react-router-dom';

export function TicTacToeBotMenu() {

    const dispatch = useDispatch();
    const store = useSelector(store => store.ticTacToe);
    const navigate = useNavigate();

    const chooseAnotherType = () => {
        dispatch({
            type: INITIAL_STATE
        })
        navigate('/tic-tac-toe/guest-mode/bot');
    }

    const [state, setState] = React.useState('Выберите сложность')

    const a = () => {
        dispatch({
            type: SET_BOT_NAME,
            status: 'Легкий'
        })
        setShow(false)
    }

    const b = () => {
        dispatch({
            type: SET_BOT_NAME,
            status: 'Средний'
        })
        setShow(false)
    }

    const c = () => {
        dispatch({
            type: SET_BOT_NAME,
            status: 'Тяжелый'
        })
        setShow(false)
    }

    const onInput_1 = (e) => {
        dispatch({
            type: FIRST_PLAYER_STATUS,
            status: e.target.value
        })
    }

    const onClick = () => {
        if (check) {
            dispatch({
                type: GAME_START,
                gameStart: true
            })
        }
        dispatch({
            type: REDIRECT_TO_INPUT_MENU,
            redirect: true
        })
        if (check) {
            navigate('/tic-tac-toe/guest-mode/bot/game')
        }
    }


    const check = (store.firstPlayer.status != false && (store.botPlayer.status != false && store.botPlayer.status !== 'Выберите сложность'));

    const [show, setShow] = React.useState(false)

    return (
        <div className={styles.game}>
            <p className={styles.text}>
                Введите имя игрока
            </p>
            <input className={styles.input} type="text" placeholder="Введите никнейм" id="input_1" onInput={onInput_1} />
            <div className={styles.level} onClick={() => setShow(!show)}>{store.botPlayer.status || 'Выберите сложность'}
                {show && <div className={styles.level__list}>
                    <div className={styles.option} onClick={a}>Легкий</div>
                    <div className={styles.option} onClick={b}>Средний</div>
                    <div className={styles.option} onClick={c}>Сложный</div>
                </div>}
            </div>
            <button className={check ? styles.button : styles.button_inactive} type="button" onClick={onClick}>
                Начать игру
            </button>
            <button className={styles.button} type="button" onClick={chooseAnotherType}>
                Выбрать другой режим игры
            </button>
        </div>
    )
}
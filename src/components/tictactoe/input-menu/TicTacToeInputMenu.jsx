import styles from './tictactoe-inputmenu.module.css'

export function TicTacToeInputMenu(props) {

    return (
        <div className={styles.game}>
            <p className={styles.text}>
                Введите имя первого игрока
            </p>
            <input className={styles.input} type="text" placeholder="Введите никнейм" id="input_1" onInput={props.onInput_1} />
            <p className={styles.text}>
                Введите имя второго игрока
            </p>
            <input className={styles.input} type="text" placeholder="Введите никнейм" id="input_2" onInput={props.onInput_2} />
            <button className={props.check ? styles.button : styles.button_inactive} type="button" onClick={props.onClick}>
                Начать игру
            </button>
            <button className={styles.button} type="button" onClick={props.chooseAnotherType}>
                Выбрать другой режим игры
            </button>
        </div>
    )
}
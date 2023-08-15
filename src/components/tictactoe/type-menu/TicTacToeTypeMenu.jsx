import styles from './tictactoe-typemenu.module.css'

export function TicTacToeTypeMenu(props) {

    return (
        <div className={styles.game}>
            <button className={styles.button} type="button" onClick={props.chooseHotseatGame}>Играть вдвоем на одном устройстве</button>
            <button className={styles.button} type="button" onClick={props.chooseBotGame}>Играть против бота</button>
        </div>
    )
}
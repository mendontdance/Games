import styles from './tictactoe-table.module.css'
import { TicTacToeRow } from '../row/TicTacToeRow'
export function TicTacToeTable({ handleClick, data }) {

    return (
        <table className={styles.table}>
            <tbody>
                <TicTacToeRow id={[1, 2, 3]} handleClick={handleClick} data={data} />
                <TicTacToeRow id={[4, 5, 6]} handleClick={handleClick} data={data} />
                <TicTacToeRow id={[7, 8, 9]} handleClick={handleClick} data={data} />
            </tbody>
        </table>
    )
}
import styles from './tictactoe-row.module.css';
import { useSelector } from 'react-redux';

export function TicTacToeRow({ id, handleClick, data }) {

    const asdf = useSelector(store => store.ticTacToe.position)
    console.log(asdf);
    return (
        <tr>
            <td onClick={handleClick} className={styles.td} id={`td_${id[0]}`}>{asdf[id[0] - 1] || null}</td>
            <td onClick={handleClick} className={styles.td} id={`td_${id[1]}`}>{asdf[id[1] - 1] || null}</td>
            <td onClick={handleClick} className={styles.td} id={`td_${id[2]}`}>{asdf[id[2] - 1] || null}</td>
        </tr>
    )
}
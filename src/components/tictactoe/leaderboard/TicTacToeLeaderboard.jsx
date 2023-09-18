import styles from './tictactoe-leaderboard.module.css';

export function TicTacToeLeaderboard() {
    return (
        <div className={styles.leaders}>
            <p className={styles.text}>Таблица лидеров в "Крестики-Нолики"</p>
            <ol>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ol>
        </div>
    )
}
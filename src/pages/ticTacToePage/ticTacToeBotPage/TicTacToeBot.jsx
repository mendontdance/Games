import styles from './tictactoe-bot.module.css';
import { TicTacToeBotMenu } from '../../../components/tictactoe/bot-menu/TicTacToeBotMenu';
import { Menu } from '../../../components/menu/menu';
import { TicTacToeLeaderboard } from '../../../components/tictactoe/leaderboard/TicTacToeLeaderboard';

export function TicTacToeBotPage () {

    return (
        <>
            <Menu />
            <main className={styles.main}>
                <section className={styles.section}>
                    <p className={styles.title}>Крестики-Нолики</p>
                    <div className={styles.container}>
                        <TicTacToeBotMenu />
                        <TicTacToeLeaderboard />
                    </div>
                    {/* <Modal /> */}
                </section>
            </main>
        </>
    )
}
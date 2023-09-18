import { Menu } from "../../components/menu/menu"
import styles from './tictactoe.module.css'
import { useNavigate } from 'react-router-dom';


export function TicTacToePage() {

    let navigate = useNavigate();
    
    const handleClickGuestMode = () =>{
      let path = `/tic-tac-toe/guest-mode`;
      navigate(path);
    }
    
    return (
        <>
            <section className={styles.section}>
                <div className={styles.container}>
                    <button className={styles.button} onClick={handleClickGuestMode}>Играть как гость</button>
                    <button className={styles.button}>Авторизоваться</button>
                </div>
            </section>
        </>
    )
}
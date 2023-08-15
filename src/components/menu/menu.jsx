import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './menu.module.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { INITIAL_STATE } from '../../services/actions/ticTacToeAction';

export function Menu() {

    const dispatch = useDispatch();

    const onClickLogo = () => {
        dispatch({
            type: INITIAL_STATE
        })
    }

    return (
        <menu className={styles.menu}>
            <div className={styles.container}>
                <Link to={'/'}>
                    <div className={styles.logo} onClick={onClickLogo}>
                        <img src={logo} alt="логотип" className={styles.logo__image} />
                    </div>
                </Link>
                <ul className={styles.menu_list}>
                    <li className={`${styles.menu__item}`} >Информация о проекте</li>
                    <li className={`${styles.menu__item}`} >Список игр</li>
                    <li className={styles.menu__item} >Форум</li>
                </ul>
                <div className={styles.login}>Личный кабинет</div>
            </div>
        </menu>
    )
}
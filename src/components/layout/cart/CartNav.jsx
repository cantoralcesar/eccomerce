import { Link } from 'react-router-dom';

import styles from "./CartNav.module.css";

function CartNav(){
    return (
        <nav className={styles.nav}>

            <ul className={styles.menu}>
                <li><Link to="/about">Hola, inicia sesión</Link></li>
                <li><Link to="/cart">🛒</Link></li>
            </ul>

        </nav>
    );
};

export default CartNav;
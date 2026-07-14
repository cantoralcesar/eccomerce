import { useCart } from '../../../context/CartContext';

import { Link } from 'react-router-dom';

import styles from "./CartNav.module.css";

import cartIcon from "../../../assets/icons/cart-icon.svg";

function CartNav(){

    const { getCartQuantity } = useCart();
    const totalItems = getCartQuantity();
    return (
        <nav className={styles.nav}>

            <ul className={styles.menu}>
                <li><Link to="/about">Hola, inicia sesión</Link></li>
                <li className={styles.cartIcon}><Link to="/cart"><img src={cartIcon} alt="Carro de compras" /><span>{totalItems}</span></Link></li>
            </ul>

        </nav>
    );
};

export default CartNav;
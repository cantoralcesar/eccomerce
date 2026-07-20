import { Link } from 'react-router-dom';

import { useCart } from '../../../context/CartContext';

import styles from "./CartNav.module.css";
import cartIcon from "../../../assets/icons/cart-icon.svg";

import MiniCart from './MiniCart';    // 👈 importamos

function CartNav(){

    // const { getCartQuantity } = useCart();
    const { getCartQuantity, cartItems } = useCart();
    const totalItems = getCartQuantity();

    return (
        <nav className={styles.cartNav}>

            <ul className={styles.cartNavMenu}>
                <li className={styles.cartLink}>
                    <Link to="/login">Hola, inicia sesión</Link>
                </li>
                <li className={styles.cartIcon}>
                    <Link to="/cart">
                        <img
                            className={styles.cartIconImg}
                            src={cartIcon}
                            alt="Carro de compras"
                        />
                        <span className={styles.cartBadge}>{totalItems}</span>
                    </Link>
                    {/* Minicarrito aparece al pasar el mouse */}
                    <div className={styles.miniCart}>
                        <MiniCart items={cartItems} />
                    </div>
                </li>
                
            </ul>

        </nav>
    );
};

export default CartNav;
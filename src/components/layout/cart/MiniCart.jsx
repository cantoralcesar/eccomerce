import { Link } from "react-router-dom";

import styles from "./MiniCart.module.css";

function MiniCart({ items }) {
    if (items.length === 0) {
        return (
            <div className={styles.miniCart}>
                <p>Tu carrito está vacío</p>
                <Link to="/products" className={styles.miniCartBtn}>
                    Ver productos
                </Link>
            </div>
        );
    }

    return (
        <div className={styles.miniCart}>
            
            <ul className={styles.miniCartList}>
                {items.map( (item, index) => (
                    <li key={index} className={styles.miniCartItem}>
                        <img
                            src={item.imagen}
                            alt={item.nombre}
                            className={styles.miniCartImg}
                        />
                        
                        <div className={styles.miniCartDetails}>
                            <span className={styles.miniCartName}>
                                {item.nombre}
                            </span>
                            <span className={styles.miniCartQuantity}>
                                Cant:{item.quantity}
                            </span>
                            <span className={styles.miniCartSubtotal}>
                                ${item.precio * item.quantity}
                            </span>
                        </div>

                    </li>
                ))}
            </ul>
        
            <Link to="/cart" className={styles.miniCartBtn}>Ir al carrito</Link>
        </div>
    );
}

export default MiniCart;
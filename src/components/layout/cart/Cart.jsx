import styles from "./Cart.module.css";

function Cart({ count }) {
    return (
        <div className={styles.cart}>
            🛒 <span>{count}</span>
        </div>
    );
}
export default Cart;
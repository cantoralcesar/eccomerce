

import styles from "../cart/CartItem.module.css";

import { useCart } from "../../../context/CartContext";

//                { item: { nombre: "Zapatos", precio: 50, quantity: 2, imagen: "..." } }
function CartItem({ item }) {
    
    // Obtenemos funciones del contexto para actualizar o eliminar productos
    const { addToCart, decreaseFromCart, removeFromCart } = useCart();

    // Maneja el aumento de cantidad (+)
    const handleIncrease = () => {
        // 👆 Usa addToCart para sumar 1
        addToCart(item, 1 );
    };

    // Maneja la disminución de cantidad (–)
    const handleDecrease = () => {
        if (item.quantity > 1) {
            // 👇 Resta 1 si hay más de 1
            decreaseFromCart(item.id);
        } else {
            // 👇 Si queda 1 y se presiona –, elimina el producto del carrito
            removeFromCart(item.id)
        }
    };

    return (
        <div className={styles.cartItemContainer}>
            {/* 1. Imagen del producto */}
            <img className={styles.cartItemImg}
                src={item.imagen}
                alt={item.nombre}
            />
            
            {/* 2. Nombre y precio unitario */}
            <div className={styles.cartItemDetails}>
                <span className={styles.productName}>{item.nombre}</span>
                <span className={styles.productPrice}>${item.precio}</span>
            </div>
            

            {/* Cantidad actual con botones para modificar */}
            <div className={styles.quantityControls}>
                <button
                    className={styles.decreaseBtn}
                    onClick={handleDecrease}
                    disabled={item.quantity <= 0}   // 👈 deshabilita si ya está en 0
                > -
                </button>
                <span className={styles.cartItemQuantity}>{item.quantity}</span>
                <button
                    className={styles.increaseBtn}
                    onClick={handleIncrease}
                    disabled={item.quantity >= item.stock} // 👈 deshabilita si llegó al stock
                > +
                </button>
            </div>
            
            {/* Subtotal por producto */}
            <div className={styles.cartItemSubtotal}>
                Subtotal: ${item.precio * item.quantity}
            </div>
            <div>
                ghj
            </div>
            
        </div>
    );
}

export default CartItem;
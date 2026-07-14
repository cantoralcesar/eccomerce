//import styles from "./Cart.module.css";

import { useCart } from "../context/CartContext";

import CartItem from "../components/layout/cart/CartItem";

function Cart(){

    // Obtenemos del contexto: el carrito, funciones para limpiar y calcular totales
    const { cartItems, clearCart, getCartQuantity, getCartTotal } = useCart();

    return (
        <div>
            <h1>Carrito de Compras</h1>

            {/* Si el carrito está vacío mostramos un mensaje */}
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {/* Recorremos cada producto y lo renderizamos con CartItem */}
                    {cartItems.map((item, index) => (
                        // Renderizamos cada producto del carrito usando el componente CartItem
                        <CartItem key={index} item={item} />
                    ))}
                </ul>
            )}
            {/* Totales calculados con funciones del contexto */}
            <h3>Total productos: {getCartQuantity()}</h3>
            <h3>Total a pagar: ${getCartTotal()}</h3>

            {/* Botón para vaciar todo el carrito */}
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
}

export default Cart;

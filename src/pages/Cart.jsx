//import styles from "./Cart.module.css";

import { useCart } from "../context/CartContext";


function Cart(){

    // Obtenemos del contexto: el carrito, funciones para limpiar y calcular totales
    const { cartItems, clearCart, getCartQuantity, getCartTotal } = useCart();

    return (
        <div>
            <h1>Carrito</h1>
            {cartItems.length === 0 ? (
                <p>No hay productos en el carrito.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {/* Imagen pequeña del producto */}
                            <img
                                src={item.imagen}
                                alt={item.nombre}
                                style={{ width: "50px", height: "50px", objectFit: "cover"}}
                            />
                            <br />
                            {/* Nombre y precio unitario */}
                            {item.nombre} - ${item.precio}
                            <br />
                            {/* Cantidad seleccionada */}
                            Cantidad: {item.quantity}
                            <br />
                            {/* Subtotal por producto */}
                            Subtotal: ${item.precio * item.quantity}
                        </li>
                    ))}
                </ul>
            )}
            {/* Totales calculados con funciones del contexto */}
            <h3>Total productos: {getCartQuantity()}</h3>
            <h3>Total a pagar: ${getCartTotal()}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
}

export default Cart;

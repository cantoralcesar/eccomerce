import { Link } from "react-router-dom";

import styles from "./Cart.module.css";

import { useCart } from "../context/CartContext";

import CartItem from "../components/layout/cart/CartItem";

import { toast } from "react-toastify"

import Swal from "sweetalert2";

function Cart(){

    // Obtenemos del contexto: el carrito, funciones para limpiar y calcular totales
    const { cartItems, clearCart, getCartQuantity, getCartTotal } = useCart();
    
    const handleFinalizarCompra= () => {
        toast.success('¡Gracias por tu compra! Tu pedido está en camino. 🎉', {
            position: "top-right",
            autoClose: 4000, // Se cierra solo en 4 segundos
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
        });
        clearCart();
    }

    return (
        <>
            <div>
                <h2>Carrito de Compras</h2>
                
            </div>

            <div className={styles.cartStyle}>
            
                {/* Si el carrito está vacío mostramos un mensaje */}
                {cartItems.length === 0 ? (
                    <div className={styles.vacioContainer}>
                        <div className={styles.vacio}>
                        <p>No hay productos en el carrito.</p>
                        <p>Agrega productos para continuar la compra</p>
                        <Link to="/products">
                            <button className={styles.cartBtn}> Ver Productos</button>
                        </Link>
                    </div>
                    </div>
                    
                
                    ) : (
                    <>
                        <ul className={styles.cartList}>
                            {/* Recorremos cada producto y lo renderizamos con CartItem */}
                            {cartItems.map((item, index) => (
                                // Renderizamos cada producto del carrito usando el componente CartItem
                                <li key={index} >
                                    <CartItem item={item} />
                                </li>
                            ))}
                        </ul>
                
                        {/* Totales calculados con funciones del contexto */}
                        <h3>Total productos: {getCartQuantity()}</h3>
                        <h3>Total a pagar: ${getCartTotal().toFixed(2)}</h3>

                        {/* Botón para vaciar todo el carrito */}
                        <button className={styles.cartBtn}
                            /* clearCart  ->  CartContext.jsx */
                            onClick={() => {
                                Swal.fire({
                                    title:  "¿Vaciar carrito?",
                                    text: "Se eliminarán todos los productos",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#d33",
                                    cancelButtonColor: "var(--color-btn)",
                                    confirmButtonText: "Sí, vaciar",
                                    cancelButtonText: "Cancelar"
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        clearCart();
                                        Swal.fire("Carrito vacío", "Todos los productos fueron eliminados.", "success");
                                    }
                                });
                            }}
                            >
                            Vaciar carrito
                        </button>
                        <Link to="/">
                            <button
                                className={styles.cartBtnReturn}
                                onClick={handleFinalizarCompra}>
                                    Continuar compra
                            </button>
                        </Link>
                    </>
                )}
            </div>

        </>
    );
}

export default Cart;

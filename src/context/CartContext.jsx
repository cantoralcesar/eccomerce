/**
 * useState -> Para guardar y actualizar carrito
 * useContext -> Para poder consumir el contexto desde los componentes
 * createContext -> Crear el contexto
 */
import  { useState, useContext, createContext } from 'react';

// Creación del contexto
export const CartContext = createContext();

// Creación del custom hook - hook personalizado
// Consumidor
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider')
    }
    return context;
};

// Cart Provider (cerebro)
// Proveedor
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // 👉 Agregar producto o aumentar cantidad
    const addToCart = (product, quantity) => {

        // Si el producto existe cart = [{id=1, ...}, {id=2,...}]
        const itemInCart = cartItems.find(item => item.id === product.id);
        if (itemInCart) {
            const updatedCart = cartItems.map(item =>
                item.id === product.id
                ? {...item, quantity: item.quantity + quantity }
                : item
            );
            setCartItems(updatedCart);
        } else {
            setCartItems(prevCart => [...prevCart, {...product, quantity }])
        }
    };

    // 👉 Eliminar producto del carrito
const removeFromCart = (productId) => {
    setCartItems(prevCart =>
        prevCart.filter(item => item.id !== productId)
    );
};

// 👉 Disminuir cantidad
const decreaseFromCart = (productId) => {
    setCartItems(prevCart =>
        prevCart
            .map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter(item => item.quantity > 0) // elimina si llega a 0
    );
};

    // Vaciar carrito
    const clearCart = () => {
        setCartItems([]);
    };
    
    // Obtener cantidad total
    const getCartQuantity = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);  //acc es acumulador
    };
    
    // Obtener total en dinero
    const getCartTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    };

    return (
    <CartContext.Provider
        value={{
            cartItems, addToCart, clearCart,
            removeFromCart, decreaseFromCart,
            getCartQuantity, getCartTotal}}>
            {children}
    </CartContext.Provider>
    );
};
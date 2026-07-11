/**
 * useState -> Para guardar y actualizar carrito
 * useContext -> Para poder consumir el contexto desde los componentes
 * createContext -> Crear el contexto
 */
import  { useState, useContext, createContext } from 'react';

// Creacion del contexto
export const CartContext = createContext();

// Creacion del custom hook - hook personalizado
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

    // 👉 Función para agregar productos
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

    const clearCart = () => {
        setCartItems([]);
    };
    
    // Total de productos
    const getCartQuantity = () => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);  //acc es acumulador
    };
    
    // Precio total
    const getCartTotal = () => {
        return cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    };

    return (
    <CartContext.Provider
        value={{
            cartItems, addToCart, clearCart,
            getCartQuantity, getCartTotal}}>
            {children}
    </CartContext.Provider>
    );
};
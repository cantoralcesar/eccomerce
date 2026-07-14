import { useCart } from "../../../context/CartContext";

//                { item: { nombre: "Zapatos", precio: 50, quantity: 2, imagen: "..." } }
function CartItem({ item }) {
    
    // Obtenemos funciones del contexto para actualizar o eliminar productos
    const { addToCart, removeFromCart } = useCart();

    // Maneja el aumento de cantidad (+)
    const handleIncrease = () => {
        // 👆 Usa addToCart para sumar 1
        addToCart(item, 1 );
    };

    // Maneja la disminución de cantidad (–)
    const handleDecrease = () => {
        if (item.quantity > 1) {
            // 👇 Resta 1 si hay más de 1
            removeFromCart(item.id);
        } else {
            // 👇 Si queda 1 y se presiona –, elimina el producto del carrito
            removeFromCart(item.id)
        }
    };

    return (
        <li>
            {/* Imagen pequeña */}
            <img
                src={item.imagen}
                alt={item.nombre}
                style={{ width: "50px", height: "50px", objectFit: "cover" }} 
            />
            <br />
            {/* Nombre y precio unitario */}
            {item.nombre} - ${item.precio}
            <br />

            {/* Cantidad actual con botones para modificar */}
            <button
                onClick={handleDecrease}
                disabled={item.quantity <= 0}   // 👈 deshabilita si ya está en 0
            >-</button>
            <span>{item.quantity}</span>
            <button 
                onClick={handleIncrease}
                disabled={item.quantity >= item.stock} // 👈 deshabilita si llegó al stock
            >+</button>
            <br />

            {/* Subtotal por producto */}
            Subtotal: ${item.precio * item.quantity}
        </li>
    );
}

export default CartItem;
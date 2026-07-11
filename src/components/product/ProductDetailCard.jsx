import { Count } from "../count/Count.jsx";
import styles from "./ProductDetailCard.module.css";

// Usar el contexto en ProductDetailCard.jsx
import { useCart } from "../../context/CartContext.jsx";
import { useState } from "react";

function ProductDetailCard({ product }) {
  // Obtenemos la función addToCart del contexto
  const { addToCart } = useCart();

  // Estado local para manejar la cantidad seleccionada en el contador
  const [quantity, setQuantity] = useState(1);

  // Maneja el evento de agregar al carrito con la cantidad seleccionada
  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert(`Agregaste ${quantity} unidades de ${product.nombre} al carrito.`);
  }

  return (
    <div className={styles.card}>
      
      <img src={product.imagen} alt={product.nombre} className={styles.productImage}/>
      
      <div className={styles.info}>
        <h2 className={styles.title}>{product.nombre}</h2>
        <p className={styles.details}>{product.detalles}</p>
        <p><strong>Precio:</strong> ${product.precio}</p>
        <p><strong>Stock:</strong> {product.stock > 0 ? product.stock : "Agotado"}</p>
        
        {/* Aquí se insertas el contador */}
        {/* Contador conectado */}
        <Count onChange={setQuantity}/>
    
        <div>
          {product.stock > 0 ? (
            <button
              className={styles.btnBuy}
              onClick={handleAddToCart}
              >Comprar ahora
            </button>
            ) : (
            <button className={styles.btnDisabled} disabled>Agotado</button>
            )}
            <button 
              className={styles.btnAdd}
              onClick={handleAddToCart}
              >Agregar al carro
            </button>
        </div>
        
      </div>
      
    </div>
  );
}

export default ProductDetailCard;
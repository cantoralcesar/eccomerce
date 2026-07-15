import { Count } from "../count/Count.jsx";
import styles from "./ProductDetailCard.module.css";

// Usar el contexto en ProductDetailCard.jsx
import { useCart } from "../../context/CartContext.jsx";

import { useState } from "react";

import { toast } from "react-toastify"

function ProductDetailCard({ product }) {
  // Obtenemos la función addToCart del contexto
  const { addToCart } = useCart();

  // Estado para guardar la cantidad seleccionada en Count.jsx
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // Recibe el valor del Count y lo guarda en el estado
  const handleQuantityChange = (newValue) => {
    setSelectedQuantity(newValue);
  };

  // Función para agregar al carrito con la cantidad seleccionada
  const handleAddToCart = () => {
    addToCart(product, selectedQuantity); // 👈 usa el contexto global
    toast.success(`Agregaste ${selectedQuantity} unidades de ${product.nombre} al carrito.`);
  }

  return (
    <div className={styles.card}>
      
      <img src={product.imagen} alt={product.nombre} className={styles.productImage}/>
      
      <div className={styles.info}>
        <h2 className={styles.title}>{product.nombre}</h2>
        <p className={styles.details}>{product.detalles}</p>
        <p><strong>Precio:</strong> ${product.precio}</p>
        <p><strong>Disponible:</strong> {product.stock > 0 ? product.stock : "Agotado"}</p>
        
        {/* Aquí usamos Count y le pasamos la prop onChange */}
        <Count onChange={handleQuantityChange} max={product.stock}/>
    
        <div>
          {product.stock > 0 ? (
            <>
              <button
                className={styles.btnBuy}
                onClick={handleAddToCart}
                >Comprar ahora
              </button>
              <button 
                className={styles.btnAdd}
                onClick={handleAddToCart}
                >Agregar al carro
              </button>
            </>
            ) : (
            //<button className={styles.btnDisabled} disabled>Agotado</button>
            <>
              <button className={styles.btnDisabled}>Comprar ahora</button>
              <button className={styles.btnDisabled} disabled
                >Agregar al carro
              </button>
            </>
            )}
            
        </div>
        
      </div>
      
    </div>
  );
}

export default ProductDetailCard;
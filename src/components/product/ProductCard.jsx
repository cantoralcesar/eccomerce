import styles from "./ProductCard.module.css";
import { useState } from "react";

function ProductCard({ image, name, price, stock }) {
    
    const [isFavorite, setIsFavorite] = useState(false);

    const ToBuyClick = () => {
        alert(`Agregastes ${name} al carrito`);
    };

    const markAsFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <img src={image} alt={name} className={styles.productImage} />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.price}>Precio: ${price}</p>
            <p className={styles.stock}>Stock disponible: ${stock}</p>

            <button className={styles.addButton} onClick={ToBuyClick} disabled={stock === 0}>
                {stock > 0 ? 'Agregar al carrito' : 'Agotado'}
            </button>

            <span className={styles.like}
                onClick = {markAsFavorite}
                >
                    {isFavorite ? "❤": "🤍"}
            </span>

        </div>
    );
}

export default ProductCard;

/**
 * ProductCard.jsx (El Componente): Este archivo no sabe que existe una lista. Su única
 *  responsabilidad es recibir los datos de un solo producto mediante props
 * (image, name, price, stock) y pintar su diseño individual
 * (su imagen, botón de agregar, corazón de favoritos, etc.).
 **/
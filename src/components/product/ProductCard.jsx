import { Link } from 'react-router-dom';

import styles from "./ProductCard.module.css";
import { useState } from "react";

import { useCart } from '../../context/CartContext';
import { toast } from "react-toastify"

function ProductCard({ id, image, name, price, stock }) {
    
    const { addToCart } = useCart();   // 👈 obtenemos la función del contexto (carrito agregar)

    const [isFavorite, setIsFavorite] = useState(false);

    const handleAddToCart = () => {
        addToCart(
            { id, imagen:image, nombre: name, precio: price, stock },
            1  // 👈 cantidad inicial
        )
        toast.success(`Agregastes ${name} al carrito`);
    };

    const markAsFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            
            <img
                src={image}
                alt={name}
                className={styles.productImage}
                loading="lazy"
            />
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.price}>Precio: ${price}</p>
            
            <p className={styles.stock}>Disponible: {stock}</p>
            
            <p><Link to={`/products/${id}`}>Ver más info</Link></p>
            <div>
                <button
                    className={styles.addButton}
                    onClick={handleAddToCart}
                    disabled={stock === 0}
                >
                    {stock > 0 ? 'Agregar al carrito' : 'Agotado'}
                </button>

                <span className={styles.like}
                    onClick = {markAsFavorite}
                >
                    {isFavorite ? "❤": "🤍"}
                </span>
            </div>
            

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
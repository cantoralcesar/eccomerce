import { useState, useEffect } from "react";
import ProductCard from "../components/product/ProductCard";
import styles from "../pages/Products.module.css";

function Products() {
    // 1. El estado para guardar los 10 productos locales
    const [listaProductos, setListaProductos] = useState([]);

    // 2. El useEffect que hace el fetch a la carpeta public
    useEffect(() => {
        fetch('/data/products.json') // <-- Apunta a tu archivo en public/data/

        .then((response) => response.json())
        .then((data) => setListaProductos(data))
        .catch((error) => console.error("Error al traer los productos:", error));
    }, []); // Array vacío para que solo se ejecute UNA vez al entrar a la página

    return (
        <div>
            <h2>Nuestros Productos</h2>

            {/* 3. El contenedor de la malla/grid de productos */}
            <div className={ styles.productsFlex }>

                {listaProductos.map((prod) => (
                    // 4. El mapeo que renderiza cada tarjeta individual
                    <ProductCard

                        key={prod.id}
                        image={prod.imagen}  // Pasamos 'imagen' del JSON a la prop 'image'
                        name={prod.nombre}   // Pasamos 'nombre' del JSON a la prop 'name'
                        price={prod.precio}  // Pasamos 'precio' del JSON a la prop 'price'
                        // Si en el futuro usas el stock, se lo pasas aquí también: stock={prod.stock}
                        stock={prod.stock}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;
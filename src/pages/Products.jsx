import { useState, useEffect } from "react";

import ProductCard from "../components/product/ProductCard";
import styles from "../pages/Products.module.css";

// Importaciones clave de Firebase
import { collection, onSnapshot} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function Products() {
    // 1. El estado para guardar los 10 productos locales
    const [listProducts, setlistProducts] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    /**

    // 2. El useEffect que hace el fetch a la carpeta public
    useEffect(
        () => {
            
        fetch('/data/products.json') // <-- Apunta aL archivo en public/data/

        .then((response) => {
            if (!response.ok) throw new Error("Error de carga");
            return response.json();
        })
        .then((data) => {
            setlistProducts(data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err.message);
            setLoading(false);
        });
    }, [])  // Array vacio para que solo se ejecute una vez al entrar a la página

    
    **/

    useEffect(() => {
        const prodBD = collection(db, "productos");

        // Suscripción en tiempo real
        const unsubscribe = onSnapshot(
            prodBD,
            (snapshot) => {
                setlistProducts(
                    snapshot.docs.map((doc) => ({
                        ...doc.data(),
                        docId: doc.id, // id automático de Firestore
                    }))
                );
                setLoading(false);
            },
            (err) => {
                setError(err.message);
                setLoading(false);
            }
        );

        // Limpieza: cancelar suscripción al desmontar el componente
        return () => unsubscribe();
    }, []);

    if (loading) return <div>Cargando Productos...</div>

    if (error) return <div>Error: {error}</div>

    return (
        <div>
            <h2>Nuestros Productos</h2>

            {/* 3. El contenedor de la malla/grid de productos */}
            <div className={styles.productsFlex}>

                {listProducts.map((prod) => (
                    // 4. El mapeo que renderiza cada tarjeta individual
                    <ProductCard

                        key={prod.docId}     // usa el id único de Firestore
                        id={prod.id}         // tu id de negocio (ej. 1, 2, 3...)
                        image={prod.imagen}  // Pasamos 'imagen' del JSON a la prop 'image'
                        name={prod.nombre}   // Pasamos 'nombre' del JSON a la prop 'name'
                        price={prod.precio}  // Pasamos 'precio' del JSON a la prop 'price'
                        // Si en el futuro se usa los detalles, se lo pasa X aquí también: detalles={prod.detalles}
                        stock={prod.stock}
                    />
                ))}
            </div>
        </div>
    );
}

export default Products;

/**
 * Products.jsx (La Página): Aquí es donde se hace el fetch, se obtiene el array de datos,
 * y se ejecuta el .map(). Esta página es la que "mapea" la lista de productos y decide
 *  renderizar múltiples instancias de la tarjeta.
 **/
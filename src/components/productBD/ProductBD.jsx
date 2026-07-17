// Importaciones clave de Firebase
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import { useEffect, useState } from "react";

const ProductBD = () => {
    // Estado para guardar los productos que traigamos de la DB
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const prodBD = collection(db, "productos")

        getDocs(prodBD).then((resp) => {
            setProducts(
                resp.docs.map((doc) => {
                    return { ...doc.data()
                        , id: doc.id}
                })
            );
        })
    }, []);  // // El array vacío asegura que este efecto se ejecute solo una vez

    return(
        <div>
            <h2>Productos BD</h2>
            <div className="">
                {/* Mapeamos el estado 'productos' para renderizar cada uno  */}
                {products.map(prod => (
                    <div key={prod.id}>
                        <img src={prod.imagen} alt={prod.nombre} />
                        <h3>{prod.nombre}</h3>
                        <p>Categoria: {prod.categoria}</p>
                        <p>Precio: {prod.precio}</p>
                        <p>Stock: {prod.stock} unidades</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default ProductBD;

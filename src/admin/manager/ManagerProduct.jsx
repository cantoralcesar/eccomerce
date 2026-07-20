// src/componentes/Gestion/Gestion.jsx
import { useState, useEffect } from 'react';

import ProductFormContainer from '../productForm/ProductFormContainer';
import { db } from '../../firebase/firebaseConfig';

import { collection, getDocs } from "firebase/firestore";

const  ManagerProduct = () => {
    const [products, setProducts] = useState([]);
    const initialStateForm = {
        nombre: "",
        precio: 0,
        stock: 0,
        imagen: "",
        detalles: "",
        destacado: "",
        categoria:"",
    };

    useEffect(() => {
        const loadProducts = async () => {
            const productsRef = collection(db, "Productos"); //Ajustar "productos" al nombre de tu colección
            const resp = await getDocs(productsRef);
            setProducts(
                resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        loadProducts();
    }, [products]);

    return (
        <div>
            <h2>Gestión de Productos</h2>
            <hr />
            <ProductFormContainer />
            <hr />
            <h3>Lista de Productos</h3>
            <ul>
                {products.map((prod) => (
                    <li key={prod.id}>
                        {prod.nombre} - ${prod.precio}
                        {/*acá agregaremos los botones de acción */}
                    </li>
            ))}
        </ul>
    </div>
    );
};
export default ManagerProduct;
// src/componentes/Gestion/Gestion.jsx
import { useState, useEffect } from 'react';

// Traer el ProductFormContainer (Lógica)
import ProductFormContainer from '../productForm/ProductFormContainer';

import { db } from '../../firebase/firebaseConfig';

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

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
            const productsRef = collection(db, "productos"); //Ajustar "productos" al nombre de tu colección
            const resp = await getDocs(productsRef);
            setProducts(
                resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
            );
        };
        loadProducts();
    }, []);   /* dejar vacio [products] */

    const handlDelete = async (id) => {
        const confirmation = window.confirm("? Esta seguro de que desea eliminar este producto");
        if (confirmation) {
            const docRef = doc(db, "productos", id);
            await deleteDoc(docRef);
                // Actualizamos el estado local para reflejar el cambio en la UI inmediatamente.
                setProducts(products.filter(prod => prod.id !== id));
                alert("Producto eliminado");
        }
    }

    return (
        <div>
            <h2>Gestión de Productos</h2>
            <hr />
            {/* Renderiza el ProductFormContainer*/}
            <ProductFormContainer />
            <hr />
            <h3>Lista de Productos </h3>
            <ul>
                {products.map((prod) => (
                    <li key={prod.id}>
                        {prod.nombre} - ${prod.precio} - {prod.stock}
                        {/*acá agregaremos los botones de acción: editar, eliminar */}
                        <button onClick={() => handlDelete(prod.id)}
                            style={{marginLeft: '10px'}}
                            >Eliminar
                        </button>
                    </li>
                ))}
            </ul>
    </div>
    );
};
export default ManagerProduct;
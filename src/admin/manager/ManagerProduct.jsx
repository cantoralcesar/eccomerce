
import { useState, useEffect } from 'react';

import { db } from '../../firebase/firebaseConfig';

import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

// Traer el ProductFormContainer (Lógica)
import ProductFormContainer from '../productForm/ProductFormContainer';
import ProductList from './ProductList';

import styles from "../manager/ManagerProduct.module.css";

import Swal from 'sweetalert2';


const  ManagerProduct = () => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        // Referencia a la colección
        const productsRef = collection(db, "productos");

        // Suscripción en tiempo real
        const unsubscribe = onSnapshot(productsRef, (snapshot) => {
            setProducts(snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            })));
        });

        // Limpieza al desmontar
        return () => unsubscribe();
    }, []);   /* dejar vacio [products] */

    const handleDelete = async (prod) => {

        // Confirmación con SweetAlert2
        const result = await Swal.fire({
            title: '¿Está seguro?',
            text: `Se eliminará el producto: ${prod.nombre}`, // 👈 mostramos el nombre
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: 'var(--color-btn)',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (result.isConfirmed) {
            try {
                const docRef = doc(db, "productos", prod.id);
                await deleteDoc(docRef);
                setProducts(products.filter(p => p.id !== prod.id));

                // Notificación de éxito
                Swal.fire({
                    title: 'Eliminado',
                    text: `El producto "${prod.nombre}" fue eliminado correctamente`, // 👈 mensaje personalizado
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                });
            } catch (error){
                // Notificación de error
                Swal.fire({
                    title: 'Error',
                    text: `No se pudo eliminar el producto: ${error.message}`,  // 👈 aquí mostramos el detalle
                    icon: 'error'
                });
            }
        }
    };

    return (
        <div>
            <h2>Gestión de Productos</h2>
            {/* Renderiza el ProductFormContainer*/}
            <ProductFormContainer />
            <hr  className={styles.separator} />

            <h2 className={styles.sectionTitle}>Lista de Productos</h2>

            <div className={styles.managerProdList} >
                <ProductList products={products} onDelete={handleDelete} />
            </div>
            
        </div>
    );
};
export default ManagerProduct;
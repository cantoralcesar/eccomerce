import { FaRegTrashAlt } from 'react-icons/fa'; // 👈 Importamos el icono

import styles from "../manager/ProductList.module.css";

const ProductList = ({ products, onDelete }) => {
    return (
        <div className={styles.prodListContainer}>
            <ul>
                {products.map((prod) => (
                    <li key={prod.id} className={styles.listItem}>
                        <span>
                            <strong>{prod.nombre}</strong> — ${prod.precio} — Stock: {prod.stock}
                        </span>

                        <button
                            onClick={() => onDelete(prod)}
                            className={styles.deleteBtn}
                            //style={{ marginLeft: '500px' }}
                        >
                        {/* El icono es un componente React. El color lo daremos por CSS */}
                        <FaRegTrashAlt className={styles.trashIcon} />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;

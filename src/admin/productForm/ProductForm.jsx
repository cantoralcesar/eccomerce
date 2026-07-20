// Presentación del formulario

import styles from "./../productForm/ProductForm.module.css"

// Carpeta COMPONENTS (Solo visualización)
function ProductForm({ formData, handleChange, handleShipment, handleChangeImage, loading }) {
//                  datos form, manejar cambio, manejar envio

    return (
        <form className={styles.prodForm} onSubmit={handleShipment}>
            <h3>Agregar Nuevo Producto</h3>

            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    placeholder="Ej: Nombre del producto"
                    name="nombre" // Atributo clave para identificar el input
                    value={formData.nombre}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Precio:</label>
                <input 
                    type="number"
                    placeholder="Ej: 95"
                    name="precio" // Atributo clave
                    value={formData.precio}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Stock:</label>
                <input 
                    type="number"
                    placeholder="Ej: 5"
                    name="stock" // Atributo clave
                    value={formData.stock}
                    onChange={handleChange}
                />
            </div>
            
            <div>
                <label>Detalles:</label>
                <input
                    type="text"
                    placeholder="Ej: Detalles del producto"
                    name="detalles" // Atributo clave para identificar el input
                    value={formData.detalles}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Categoria:</label>
                <input
                    type="text"
                    placeholder="Ej: Categoria del producto"
                    name="categoria" // Atributo clave para identificar el input
                    value={formData.categoria}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Destacado:</label>
                <input
                    type="text"
                    name="destacado" // Atributo clave para identificar el input
                    value={formData.destacado}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>Imagen:</label>
                <input
                    type="file"
                    placeholder="https://..."
                    onChange={handleChangeImage}
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className={styles.addButton}
                >{
                    loading ? "Subiendo imagen": "Guardar Producto"
                }
            </button>
        </form>
    );
}

export default ProductForm;
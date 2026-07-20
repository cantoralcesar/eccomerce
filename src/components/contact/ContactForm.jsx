import styles from "../contact/ContactForm.module.css";

// Carpeta COMPONENTS (Solo visualización)
function ContactForm({ datosForm, manejarCambio, manejarEnvio }) {


    return (
        <form className={styles.contactForm} onSubmit={manejarEnvio}>
            <h3>Agregar Nuevo Producto</h3>
            <div>
                <label>Nombre del Producto:</label>
                <input
                    type="text"
                    placeholder="Ej: Teclado Mecánico"
                    name="nombre" // Atributo clave para identificar el input
                    value={datosForm.nombre}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Precio:</label>
                <input 
                    type="number"
                    placeholder="Ej: 95"
                    name="precio" // Atributo clave
                    value={datosForm.precio}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Stock:</label>
                <input 
                    type="number"
                    placeholder="Ej: 5"
                    name="stock" // Atributo clave
                    value={datosForm.stock}
                    onChange={manejarCambio}
                />
            </div>
            <div>
                <label>Imagen:</label>
                <input type="file" placeholder="https://..." />
            </div>
            <button type="submit" className={styles.addButton}>Guardar Producto</button>
        </form>
    )
}

export default ContactForm;
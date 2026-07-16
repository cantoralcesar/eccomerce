import { useState } from "react";

import ContactForm from "../components/contact/ContactForm";

function Contact() {

    // 1. Creamos el estado para los datos del formulario aquí en el padre
    const [datosForm, setDatosForm] = useState({ 
        nombre: "",
        precio: "",
        stock: "",
        urlImage: ""
    });

    // 2. Creamos la función para detectar los cambios en los inputs
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setDatosForm({
            ...datosForm,
            [name]: value });
    };

    // 3. Creamos la función para el envío del formulario
    const manejarEnvio = (e) => {
        e.preventDefault();
        alert(`Enviando Producto: ${datosForm.nombre} - Precio: ${datosForm.precio}`);
        // Aquí harías tu fetch al backend en el futuro
    };

    return (
        <div>
            <h2>Contacto</h2>
            <p>Esta es la página de Contacto</p>
        
            {/* Colocamos el componente aqui para que se visualice*/}
            <ContactForm
                datosForm={datosForm}
                manejarCambio={manejarCambio}
                manejarEnvio={manejarEnvio}
            />
        </div>
    );
}

export default Contact;
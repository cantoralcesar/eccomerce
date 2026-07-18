// Lógica del formulario (estado, Firestore)

import { useState } from "react";

import FormProduct from "./ProductForm";

function FormContainer() {
  // 1. Creamos el estado para los datos del formulario aquí en el padre
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    precio: "",
    stock: "",
    urlImage: "",
  });

  // 2. Creamos la función para detectar los cambios en los inputs
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatosForm({
      ...datosForm,
      [name]: value,
    });
  };

  // 3. Creamos la función para el envío del formulario
  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(
      `Enviando Producto: ${datosForm.nombre} - Precio: ${datosForm.precio}`,
    );
    // Aquí harías tu fetch al backend en el futuro
  };

  return (
    <div>
      <h2>Registro de productos</h2>
      <p>Esta es la página de Registros</p>

      {/* Colocamos el componente aqui para que se visualice*/}
      <FormProduct
        datosForm={datosForm}
        manejarCambio={manejarCambio}
        manejarEnvio={manejarEnvio}
      />
    </div>
  );
}

export default FormContainer;

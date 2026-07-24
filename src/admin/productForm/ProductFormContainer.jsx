// Lógica del formulario (estado, Firestore)

import { useState } from "react";

import ProductForm from "./ProductForm"

import Swal from "sweetalert2";

// IMPORTACIONES CLAVE DE FIREBASE
import { getFirestore, collection, addDoc } from 'firebase/firestore';

function ProductFormContainer() {
    // Creamos el estado para los datos del formulario aquí en el padre
    const [formData, setFormData] = useState({
      nombre: "",
      precio: "",
      stock: "",
      detalles: "",
      categoria: "",
      destacado: "",
      
    });

    // 1. Nuevo estado para el archivo de imagen
    const [imageFile, setImageFile] = useState(null);

    const [loading, setLoading] = useState(false);

    // 2. Creamos la función para detectar los cambios en los inputs
    const handleChange = (e) => {   // manejar Cambio
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    //3. Nueva función para manejar el cambio del input de tipo 'file'
    const handleChangeImage = (evento) => {     // Manejar cambio de imagen
      setImageFile(evento.target.files[0]);
    }

    const handleShipment = async (evento) => {    // Manejar envio
      evento.preventDefault();

      // Validación de campos obligatorios
      if (!formData.nombre || !formData.precio || !formData.stock || !formData.detalles || !formData.categoria || !formData.destacado) {
        Swal.fire({
          title: "Campos requeridos",
          text: "Por favor, completa todos los campos obligatorios antes de guardar.",
          icon: "warning"
        });
        return;
      }

      // Validamos que el usuario haya seleccionado una imagen
      if (!imageFile) {
        Swal.fire({
            title: "Imagen requerida",
            text: "Por favor, selecciona una imagen para el producto.",
            icon: "warning"
        });
        return;
      }

      setLoading(true);
      //console.log("Loading...")

      // --- Lógica para subir la imagen a Imgbb ---//
      const apikey = '5116d4af1dc2e1e948f30e2b4486750e';
      const dataForm = new FormData();
      dataForm.append('image', imageFile);

      try {
        //console.log("Subiendo imagen a Imgbb...");
        const answerImgbb = await fetch(`https://api.imgbb.com/1/upload?key=${apikey}`, {
            method: 'POST',
            body:dataForm,
          });

          const dataImgbb = await answerImgbb.json();

          if (dataImgbb.success) {
            console.log("Imagen subida con exito. URL:", dataImgbb.data.url)

            // Unimos la URL de la imagen con el resto de los datos del formulario
            const productComplete = {
              ...formData,
              // Agregamos la URL obtenida
              imagen: dataImgbb.data.url
            };

            // LÓGICA PARA SUBIR DATOS A FIRESTORE
            //console.log('Enviando producto a Firebase', productComplete);

            // Obtenemos la instancia de la base de datos
            const db = getFirestore();

            // Apuntamos a la colección "productos" (Si no existe, se crea)
            const productCollection = collection(db, "productos");

            // Agregamos el nuevo documento a la colección
            await addDoc(productCollection, productComplete);

            // ✅ Notificación de éxito
            Swal.fire({
              title: "Agregado",
              text: `El producto "${formData.nombre}" fue agregado correctamente`,
              icon: "success",
              timer: 2000,
              showConfirmButton: false
            });

            setFormData({
              nombre: "",
              precio: "",
              stock: "",
              detalles: "",
              categoria: "",
              destacado: "",
            });
            setImageFile(null);

          } else {
                throw new Error('La subida de la imagen a Imgbb falló.');
          }
      } catch (error) {
            //console.error("Error en el proceso de envío:", error);
            // ❌ Notificación de error
            Swal.fire({
              title: "Error",
              text: `Hubo un problema al agregar el producto. Detalle: ${error.message}`,
              icon: "error"
            });
      } finally {
        // Desactivar loading
        setLoading(false);
      }

    };
    
    return (
      <div>
        {/*<h2>Registro de productos</h2>
        <p>Esta es la página de Registros</p>*/}

        {/* Colocamos el componente aqui para que se visualice ProductForm*/}
        <ProductForm
          formData={formData}
          handleChange={handleChange}
          handleShipment={handleShipment}
          // Pasamos la nueva función como prop
          handleChangeImage={handleChangeImage}
          loading={loading}
        />
      </div>
    );
}
export default ProductFormContainer;

// Lógica del formulario (estado, Firestore)

import { useState } from "react";

import ProductForm from "./ProductForm"

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

      // Validamos que el usuario haya seleccionado una imagen
      if (!imageFile) {
        alert("Por favor, selecciona una imagen para el producto.");
        return;
      }

      setLoading(true);
      console.log("Loading...")

      // --- Lógica para subir la imagen a Imgbb ---//
      const apikey = '5116d4af1dc2e1e948f30e2b4486750e';
      const dataForm = new FormData();
      dataForm.append('image', imageFile);

      try {
        console.log("Subiendo imagen a Imgbb...");
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
            console.log('Enviando producto a Firebase', productComplete);

            // Obtenemos la instancia de la base de datos
            const db = getFirestore();

            // Apuntamos a la colección "productos" (Si no existe, se crea)
            const productCollection = collection(db, "productos");

            // Agregamos el nuevo documento a la colección
            await addDoc(productCollection, productComplete);

          } else {
                throw new Error('La subida de la imagen a Imgbb falló.');
          }
      } catch (error) {
            console.error("Error en el proceso de envío:", error);
            alert("Hubo un error al subir la imagen. Por favor, intentá de nuevo.");
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

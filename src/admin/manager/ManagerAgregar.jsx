// JSX de prueba
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function AddProduct() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "productos"), {
        nombre,
        precio: Number(precio),
        stock: Number(stock),
        imagen,
      });
      alert("Producto agregado correctamente ✅");
      setNombre(""); setPrecio(""); setStock(""); setImagen("");
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" />
        <input value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Precio" />
        <input value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" />
        <input value={imagen} onChange={(e) => setImagen(e.target.value)} placeholder="URL Imagen" />
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
}

export default AddProduct;

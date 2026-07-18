import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

//import { doc, getDoc } from "firebase/firestore";
import { collection, query, where, getDocs } from "firebase/firestore";

import { db } from "../firebase/firebaseConfig"; // ajusta la ruta según tu proyecto

import ProductDetailCard from '../components/product/ProductDetailCard';

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*
    setLoading(true);
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.text(); // 👀 primero como texto
      })
      .then((text) => {
        try {
          const data = JSON.parse(text); // parse seguro
          console.log("Productos cargados:", data);
          const found = data.find((p) => p.id === parseInt(id));
          console.log("Producto encontrado:", found);
          setProduct(found || null);
        } catch (parseError) {
          setError("Error al parsear el JSON");
        }
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
        setError("No se pudo cargar el archivo de productos");
      })
      .finally(() => setLoading(false));
      */

      const fetchProduct = async () => {
          setLoading(true);
              try {
                  // 🔎 Traer un documento específico por ID
                  /*
                  const docRef = doc(db, "productos", id);
                  const docSnap = await getDoc(docRef);
                  */

                  // 👇 Buscar por campo "id" dentro de la colección
                  const q = query(collection(db, "productos"), where("id", "==",parseInt(id)));
                  const querySnapshot = await getDocs(q);

                  if (!querySnapshot.empty) {
                      const docSnap = querySnapshot.docs[0];
                      setProduct({ id: docSnap.id, ...docSnap.data() });
                  } else {
                      setError("Producto no encontrado");
                  }
              } catch (err) {
              console.error("Error cargando producto:", err);
              setError("No se pudo cargar el producto desde Firebase");
              } finally {
              setLoading(false);
              }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <h2>Cargando detalle del producto...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!product) {
    return <h2>Producto no encontrado.</h2>;
  }

  return (
    <div>
      <h2>Detalles del producto</h2>
      <ProductDetailCard product={product} />
    </div>
  );
};

export default ProductDetail;
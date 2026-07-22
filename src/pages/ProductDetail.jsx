import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import ProductDetailCard from "../components/product/ProductDetailCard";

const ProductDetail = () => {
  const { id } = useParams(); // id viene de la URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        // 1. Intentar buscar por doc.id (productos nuevos)
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          // 2. Fallback: buscar por campo "id" manual (productos viejos)
          const q = query(collection(db, "productos"), where("id", "==", parseInt(id)));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const docSnap2 = querySnapshot.docs[0];
            setProduct({ id: docSnap2.id, ...docSnap2.data() });
          } else {
            setError("Producto no encontrado");
          }
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

  if (loading) return <h2>Cargando detalle del producto...</h2>;
  if (error) return <h2>{error}</h2>;
  if (!product) return <h2>Producto no encontrado.</h2>;

  return (
    <div>
      <h2>Detalles del producto</h2>
      <ProductDetailCard product={product} />
    </div>
  );
};

export default ProductDetail;

import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

import ProductDetailCard from '../components/product/ProductDetailCard';

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
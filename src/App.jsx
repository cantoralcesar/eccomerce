import { Routes, Route } from "react-router-dom";
import './App.css';
import { Layout } from './components/layout/Layout'

import Home from "./pages/Home";
import About from './pages/About';
import Contact from './pages/Contact';

import Products from './pages/Products';

import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";                              // 👈 importa tu Cart.jsx

// 👇 Importar el CartProvider
import { CartProvider } from "./context/CartContext";
function App() {

  return (
    // 👇 Envolver todo con CartProvider
    <CartProvider>
      <Routes>     {/* Envuelve a las demás para mostrar Header y Footer siempre */}
      <Route element={<Layout />}>          {/* ← sin path, solo wrapper */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />             {/* 👈 aquí agregas la ruta */}
      </Route>
    </Routes>
    </CartProvider>
    
  );
}

export default App;

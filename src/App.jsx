import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";

import Home from "./pages/Home/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart"; // 👈 importa tu Cart.jsx
import Login from "./components/auth/Login";

import ManagerProduct from "./admin/manager/ManagerProduct";

//import ProductBD from "./components/productBD/ProductBD";

import ManagerAgregar from "./admin/manager/ManagerAgregar"; // Prueba


// Toast para los mensajes
import { ToastContainer } from "react-toastify";


function App() {
  return (
    // 👇 Envolver todo con CartProvider
    <>
      <Routes>
        {" "}
        {/* Envuelve a las demás para mostrar Header y Footer siempre */}
        <Route element={<Layout />}>
          {" "}
          {/* ← sin path, solo wrapper */}
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          
          <Route path="/products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetail />} />

          <Route path="/contact" element={<Contact />} />
          
          <Route path="/manager" element={<ManagerProduct />} />

          {/*      Prueba      */}
          <Route path="/manager-agregar" element={<ManagerAgregar />} />

          {/* <Route path="/productBD" element={<ProductBD/>} /> */}
          
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />    {/* 👈 aquí agregas la ruta */}
          
        </Route>
      </Routes>

      {/* 👇 Contenedor de toasts */}
      <ToastContainer
        position="bottom-right" // aparece abajo a la derecha
        autoClose={3000} // se cierra en 3 segundos
        hideProgressBar={false} // muestra barra de progreso
        newestOnTop={false} // mensajes en orden normal
        closeOnClick // se cierra al hacer clic
        pauseOnHover // se pausa al pasar el mouse
        draggable // se puede arrastrar
        theme="colored" // estilo colorido (verde/rojo)
      />
    </>
  );
}

export default App;

// src/pages/Login.jsx
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import LoginForm from "./LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuario logueado:", user);
        alert("¡Inicio de sesión exitoso!");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error en el login:", error.code, error.message);
        alert("Error: " + error.message);
      });
  };

  return (
    <LoginForm
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );
};

export default Login;



/*
import LoginForm from "./LoginForm";

function Login() {
  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h1>Iniciar Sesión</h1>
      <LoginForm />
    </div>
  );
}

export default Login;
*/
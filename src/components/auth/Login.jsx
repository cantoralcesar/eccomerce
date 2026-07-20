import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

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
        navigate('/'); //
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error en el login:", errorCode, errorMessage);
        alert("Error: " + errorMessage);
    });
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="email: admin@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña: admin1234"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit">Ingresar</button>
      </form>
    </div>
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